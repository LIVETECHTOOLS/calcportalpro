#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'app', 'blog');

function restoreBlogPost(slug) {
  const backupPath = path.join(blogDir, slug, 'page.tsx.backup');
  const mainPagePath = path.join(blogDir, slug, 'page.tsx');
  
  if (!fs.existsSync(backupPath)) {
    console.log(`❌ No backup found for ${slug}`);
    return false;
  }
  
  try {
    const backupContent = fs.readFileSync(backupPath, 'utf-8');
    
    // Extract the main content from the backup (everything inside the main div)
    const contentMatch = backupContent.match(/<div className="prose prose-lg max-w-none">([\s\S]*?)<\/div>/);
    if (!contentMatch || contentMatch.length < 2) {
      console.log(`❌ Could not extract content from backup for ${slug}`);
      return false;
    }
    
    const originalContent = contentMatch[1].trim();
    
    // Extract metadata from backup
    const titleMatch = backupContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descMatch = backupContent.match(/description:\s*['"`]([^'"`]+)['"`]/);
    const keywordsMatch = backupContent.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
    const publishTimeMatch = backupContent.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
    
    const title = titleMatch ? titleMatch[1].replace(' | CalcPortal Pro', '') : 'Untitled';
    const description = descMatch ? descMatch[1] : 'A comprehensive guide covering important financial topics.';
    const keywords = keywordsMatch ? keywordsMatch[1] : 'finance, money, guide';
    const publishDate = publishTimeMatch ? publishTimeMatch[1] : new Date().toISOString();
    
    // Detect category from title and description
    const category = detectCategory(`${title} ${description}`);
    
    // Extract component name from backup
    const componentNameMatch = backupContent.match(/export default function (\w+)\(\)/);
    const componentName = componentNameMatch ? componentNameMatch[1] : slugToComponentName(slug);
    
    // Create new content using BlogPostTemplate
    const newContent = `import { Metadata } from 'next'
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

export default function ${componentName}() {
  return (
    <BlogPostTemplate
      title="${title}"
      description="${description}"
      keywords="${keywords}"
      publishDate="${publishDate}"
      readTime="10 min"
      category="${category}"
      calculatorLink="/calculators/${getCalculatorLink(category)}"
      calculatorText="${getCalculatorText(category)}"
      adSlots={["657893${Math.floor(Math.random() * 9000) + 1000}", "657893${Math.floor(Math.random() * 9000) + 1000}"]}
      slug="${slug}"
    >
      ${originalContent}
    </BlogPostTemplate>
  )
}`;

    fs.writeFileSync(mainPagePath, newContent);
    console.log(`✅ Restored ${slug}`);
    return true;
  } catch (error) {
    console.log(`❌ Error restoring ${slug}: ${error.message}`);
    return false;
  }
}

function detectCategory(text) {
  const lowerText = text.toLowerCase();
  
  const categoryKeywords = {
    "Investing": ["invest", "etf", "portfolio", "stock", "bond", "investment", "wealth building", "asset allocation"],
    "Taxes": ["tax", "irs", "fpt", "gst", "fica", "refund", "deduction", "bracket"],
    "Loans": ["loan", "credit", "debt", "refinance", "mortgage", "heloc"],
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

function restoreAllBlogPosts() {
  const slugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx');
  
  console.log(`Found ${slugs.length} blog posts to check for restoration.`);
  
  let restored = 0;
  for (const slug of slugs) {
    if (restoreBlogPost(slug)) {
      restored++;
    }
  }
  
  console.log(`✅ Blog restoration complete: ${restored}/${slugs.length} posts restored`);
}

restoreAllBlogPosts();
