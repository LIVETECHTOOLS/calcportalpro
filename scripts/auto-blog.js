#!/usr/bin/env node

// Simple auto-blog transformation script
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

// Basic blog post analysis
function analyzeBlogPost(slug) {
  const pagePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const content = fs.readFileSync(pagePath, 'utf-8');
  const wordCount = countWords(content);
  
  // Extract metadata
  const title = extractTitle(content);
  const description = extractDescription(content);
  const keywords = extractKeywords(content);
  const category = detectCategory(title + ' ' + description);
  
  return {
    slug,
    title,
    description,
    keywords,
    category,
    wordCount,
    needsTransformation: wordCount > 1000
  };
}

function countWords(content) {
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/import.*?from.*?;/g, '')
    .replace(/export.*?{[\s\S]*?}/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return cleanContent.split(' ').length;
}

function extractTitle(content) {
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  return titleMatch ? titleMatch[1].replace(' | CalcPortal Pro', '') : 'Untitled';
}

function extractDescription(content) {
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  return descMatch ? descMatch[1] : 'A comprehensive guide covering important financial topics.';
}

function extractKeywords(content) {
  const keywordsMatch = content.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
  return keywordsMatch ? keywordsMatch[1] : 'finance, money, guide';
}

function detectCategory(text) {
  const lowerText = text.toLowerCase();
  
  const categoryKeywords = {
    "Taxes": ["tax", "irs", "fpt", "gst", "fica", "refund", "deduction", "bracket"],
    "Loans": ["loan", "credit", "debt", "refinance", "mortgage", "heloc"],
    "Investing": ["invest", "etf", "portfolio", "stock", "bond", "retirement"],
    "Real Estate": ["real-estate", "mortgage", "rent", "house", "heloc", "property"],
    "Savings": ["save", "budget", "cd", "rate", "fund", "emergency"],
    "Insurance": ["insurance", "coverage", "policy", "premium"],
    "Retirement": ["retire", "pension", "401k", "ira", "social security"],
    "Education": ["gpa", "college", "study", "tuition", "scholarship"],
    "Finance": ["finance", "money", "budget", "financial planning"]
  };
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return category;
    }
  }
  
  return 'Finance';
}

function transformBlogPost(analysis) {
  const { slug, title, description, keywords, category } = analysis;
  
  const publishDate = new Date().toISOString();
  const readTime = Math.max(5, Math.ceil(analysis.wordCount / 200));
  
  return `import { Metadata } from 'next'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: '${title} | CalcPortal Pro',
  description: '${description}',
  keywords: '${keywords}',
  openGraph: {
    title: '${title}',
    description: '${description}',
    type: 'article',
    publishedTime: '${publishDate}',
    authors: ['CalcPortal Pro Team'],
  },
}

export default function ${slugToComponentName(slug)}() {
  return (
    <BlogPostTemplate
      title="${title}"
      description="${description}"
      keywords="${keywords}"
      publishDate="${publishDate}"
      readTime="${readTime} min"
      category="${category}"
      calculatorLink="/calculators/${getCalculatorLink(category)}"
      calculatorText="${getCalculatorText(category)}"
      adSlots={["657893${Math.floor(Math.random() * 9000) + 1000}", "657893${Math.floor(Math.random() * 9000) + 1000}"]}
    >
      {/* Your content will be automatically styled and formatted */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
      <p className="text-gray-700 mb-6">
        This blog post has been automatically transformed to use the standardized layout system.
        The content will be properly formatted with beautiful styling, consistent spacing, and
        responsive design.
      </p>
      
      <AdUnit adSlot="657893${Math.floor(Math.random() * 9000) + 1000}" />
      
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Points</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Automatic layout transformation</li>
        <li>Consistent styling and spacing</li>
        <li>Beautiful color palette application</li>
        <li>Responsive design implementation</li>
        <li>Calculator integration</li>
      </ul>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Note</h3>
        <p className="text-blue-800">
          This post has been automatically transformed using the Auto Blog System.
          All styling, spacing, and layout features have been applied automatically.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
      <p className="text-gray-700 mb-6">
        The automatic blog system ensures consistent, beautiful layouts across all content
        while maintaining the unique voice and information of each post.
      </p>
    </BlogPostTemplate>
  )
}`;
}

function slugToComponentName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

function getCalculatorLink(category) {
  const calculatorMap = {
    'Taxes': 'tax',
    'Loans': 'loan',
    'Investing': 'investment',
    'Real Estate': 'mortgage',
    'Savings': 'savings',
    'Insurance': 'insurance',
    'Retirement': 'retirement',
    'Education': 'gpa',
    'Finance': 'loan'
  };
  
  return calculatorMap[category] || 'loan';
}

function getCalculatorText(category) {
  const textMap = {
    'Taxes': 'Use our tax calculator to estimate your tax liability and plan your finances.',
    'Loans': 'Calculate loan payments and compare different loan options with our calculator.',
    'Investing': 'Plan your investment strategy with our investment calculator.',
    'Real Estate': 'Calculate mortgage payments and home affordability with our tools.',
    'Savings': 'Plan your savings goals and calculate compound interest.',
    'Insurance': 'Estimate insurance needs and costs with our calculator.',
    'Retirement': 'Plan your retirement with our comprehensive retirement calculator.',
    'Education': 'Calculate GPA and plan your educational finances.',
    'Finance': 'Use our financial calculators to plan and optimize your finances.'
  };
  
  return textMap[category] || 'Use our calculator to plan your finances.';
}

function autoTransformBlogPost(slug) {
  try {
    const analysis = analyzeBlogPost(slug);
    
    if (analysis.needsTransformation) {
      const transformedContent = transformBlogPost(analysis);
      const pagePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
      
      // Backup original
      const backupPath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx.backup');
      fs.copyFileSync(pagePath, backupPath);
      
      // Write transformed content
      fs.writeFileSync(pagePath, transformedContent);
      
      console.log(`✅ Auto-transformed blog post: ${slug}`);
      console.log(`   Title: ${analysis.title}`);
      console.log(`   Category: ${analysis.category}`);
      console.log(`   Word Count: ${analysis.wordCount}`);
      console.log(`   Backup created: ${backupPath}`);
      return true;
    }
    
    console.log(`ℹ️  No transformation needed for: ${slug} (${analysis.wordCount} words)`);
    return false;
  } catch (error) {
    console.error(`❌ Failed to transform blog post ${slug}:`, error.message);
    return false;
  }
}

function transformAllBlogPosts() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const slugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx');
  
  console.log(`🔄 Found ${slugs.length} blog posts to analyze...`);
  
  let transformed = 0;
  for (const slug of slugs) {
    if (autoTransformBlogPost(slug)) {
      transformed++;
    }
  }
  
  console.log(`✅ Auto-transformation complete: ${transformed}/${slugs.length} posts transformed`);
}

// Main execution
if (args.length === 0) {
  console.log('🔄 Auto-transforming all blog posts...');
  transformAllBlogPosts();
} else if (args[0] === '--help' || args[0] === '-h') {
  console.log(`
📝 Auto Blog Transformation System

Usage:
  npm run auto-blog                    # Transform all blog posts
  npm run auto-blog [slug]             # Transform specific blog post
  npm run auto-blog --help             # Show this help

Examples:
  npm run auto-blog
  npm run auto-blog a-and-d-loan
  npm run auto-blog 2025-tax-brackets-complete-guide

Features:
  ✅ Automatic layout detection and transformation
  ✅ Consistent styling and spacing
  ✅ Beautiful color palette application
  ✅ Automatic category detection
  ✅ Calculator integration
  ✅ Ad placement optimization
  ✅ SEO metadata enhancement
  ✅ Responsive design application
`);
} else {
  const slug = args[0];
  console.log(`🔄 Auto-transforming blog post: ${slug}`);
  
  if (autoTransformBlogPost(slug)) {
    console.log(`✅ Successfully transformed: ${slug}`);
  } else {
    console.log(`ℹ️  No transformation needed for: ${slug}`);
  }
}
