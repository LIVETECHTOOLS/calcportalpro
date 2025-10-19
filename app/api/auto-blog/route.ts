import { NextRequest, NextResponse } from 'next/server';
import { autoTransformBlogPost, analyzeBlogPost } from '@/lib/autoBlogSystem';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { slug, action = 'analyze' } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    const blogDir = path.join(process.cwd(), 'app', 'blog', slug);
    
    if (!fs.existsSync(blogDir)) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    if (action === 'analyze') {
      const analysis = analyzeBlogPost(slug);
      return NextResponse.json({
        success: true,
        analysis,
        needsTransformation: analysis.needsTransformation
      });
    }
    
    if (action === 'transform') {
      const success = autoTransformBlogPost(slug);
      return NextResponse.json({
        success,
        message: success ? 'Blog post transformed successfully' : 'No transformation needed'
      });
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    
  } catch (error) {
    // Silent fail for API errors
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      // Return list of all blog posts
      const blogDir = path.join(process.cwd(), 'app', 'blog');
      const slugs = fs.readdirSync(blogDir)
        .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
        .filter(name => name !== 'page.tsx');
      
      const analyses = slugs.map(slug => {
        try {
          return analyzeBlogPost(slug);
        } catch {
          return { slug, error: 'Analysis failed' };
        }
      });
      
      return NextResponse.json({
        success: true,
        posts: analyses,
        total: analyses.length,
        needsTransformation: analyses.filter(a => !('error' in a) && a.needsTransformation).length
      });
    }
    
    // Return analysis for specific blog post
    const analysis = analyzeBlogPost(slug);
    return NextResponse.json({
      success: true,
      analysis
    });
    
  } catch (error) {
    // Silent fail for API errors
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
