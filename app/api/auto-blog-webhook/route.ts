import { NextRequest, NextResponse } from 'next/server';
import { autoTransformBlogPost, analyzeBlogPost } from '@/lib/autoBlogSystem';
import fs from 'fs';
import path from 'path';

// File watcher for automatic blog post detection
let fileWatcher: fs.FSWatcher | null = null;

export async function POST(request: NextRequest) {
  try {
    const { action, slug } = await request.json();
    
    switch (action) {
      case 'start-watching':
        return startFileWatching();
      
      case 'stop-watching':
        return stopFileWatching();
      
      case 'transform':
        if (!slug) {
          return NextResponse.json({ error: 'Slug required for transform action' }, { status: 400 });
        }
        const success = autoTransformBlogPost(slug);
        return NextResponse.json({ 
          success, 
          message: success ? 'Transformed successfully' : 'No transformation needed' 
        });
      
      case 'analyze':
        if (!slug) {
          return NextResponse.json({ error: 'Slug required for analyze action' }, { status: 400 });
        }
        const analysis = analyzeBlogPost(slug);
        return NextResponse.json({ analysis });
      
      case 'transform-all':
        return transformAllPosts();
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
    
  } catch (error) {
    console.error('Auto-blog webhook error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function startFileWatching() {
  if (fileWatcher) {
    return NextResponse.json({ message: 'File watcher already running' });
  }
  
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  
  fileWatcher = fs.watch(blogDir, { recursive: true }, (eventType, filename) => {
    if (eventType === 'rename' && filename && filename.endsWith('page.tsx')) {
      const slug = path.dirname(filename);
      
      // Wait a bit for file to be fully written
      setTimeout(() => {
        try {
          console.log(`🔄 Auto-detected new blog post: ${slug}`);
          const success = autoTransformBlogPost(slug);
          
          if (success) {
            console.log(`✅ Auto-transformed: ${slug}`);
          } else {
            console.log(`ℹ️  No transformation needed: ${slug}`);
          }
        } catch (error) {
          console.error(`❌ Auto-transformation failed for ${slug}:`, error);
        }
      }, 1000);
    }
  });
  
  return NextResponse.json({ 
    success: true, 
    message: 'File watcher started - will auto-transform new blog posts' 
  });
}

function stopFileWatching() {
  if (fileWatcher) {
    fileWatcher.close();
    fileWatcher = null;
    return NextResponse.json({ 
      success: true, 
      message: 'File watcher stopped' 
    });
  }
  
  return NextResponse.json({ message: 'File watcher was not running' });
}

async function transformAllPosts() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const slugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx');
  
  const results = [];
  
  for (const slug of slugs) {
    try {
      const success = autoTransformBlogPost(slug);
      results.push({ slug, success, error: null });
    } catch (error) {
      results.push({ 
        slug, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }
  
  const successful = results.filter(r => r.success).length;
  
  return NextResponse.json({
    success: true,
    message: `Transformed ${successful}/${results.length} blog posts`,
    results
  });
}

// Auto-start file watching in development
if (process.env.NODE_ENV === 'development') {
  // Start watching after a delay to ensure server is ready
  setTimeout(() => {
    console.log('🔍 Starting auto-blog file watcher...');
    startFileWatching();
  }, 5000);
}
