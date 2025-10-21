#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to restore blog content from backups
function restoreBlogContent() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const slugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx');

  let restored = 0;
  
  for (const slug of slugs) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    const backupPath = path.join(blogDir, slug, 'page.tsx.backup');
    
    if (fs.existsSync(backupPath)) {
      try {
        const backupContent = fs.readFileSync(backupPath, 'utf-8');
        const currentContent = fs.readFileSync(pagePath, 'utf-8');
        
        // Extract content from backup (between export default function and closing })
        const contentMatch = backupContent.match(/export default function[\s\S]*?return\s*\(\s*<div[\s\S]*?<\/div>\s*\)\s*}/);
        
        if (contentMatch) {
          // Extract just the content part
          const contentStart = backupContent.indexOf('<div className="min-h-screen');
          const contentEnd = backupContent.lastIndexOf('</div>') + 6;
          const extractedContent = backupContent.substring(contentStart, contentEnd);
          
          // Convert to BlogPostTemplate format
          const transformedContent = convertToBlogPostTemplate(extractedContent, slug);
          
          // Update current file with restored content
          const newContent = currentContent.replace(
            /<BlogPostTemplate[\s\S]*?<\/BlogPostTemplate>/,
            `<BlogPostTemplate
      title="${extractTitle(backupContent)}"
      description="${extractDescription(backupContent)}"
      keywords="${extractKeywords(backupContent)}"
      publishDate="${extractPublishDate(backupContent)}"
      readTime="${extractReadTime(backupContent)}"
      category="${detectCategory(extractTitle(backupContent) + ' ' + extractDescription(backupContent))}"
      calculatorLink="/calculators/${getCalculatorLink(detectCategory(extractTitle(backupContent) + ' ' + extractDescription(backupContent)))}"
      calculatorText="${getCalculatorText(detectCategory(extractTitle(backupContent) + ' ' + extractDescription(backupContent)))}"
      adSlots={["657893${Math.floor(Math.random() * 9000) + 1000}", "657893${Math.floor(Math.random() * 9000) + 1000}"]}
    >
      ${transformedContent}
    </BlogPostTemplate>`
          );
          
          fs.writeFileSync(pagePath, newContent);
          restored++;
          console.log(`✅ Restored content for: ${slug}`);
        }
      } catch (error) {
        console.log(`❌ Failed to restore ${slug}: ${error.message}`);
      }
    }
  }
  
  console.log(`\n🎉 Restored ${restored} blog posts from backups!`);
}

// Helper functions
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

function extractPublishDate(content) {
  const dateMatch = content.match(/publishedTime:\s*['"`]([^'"`]+)['"`]/);
  return dateMatch ? dateMatch[1] : new Date().toISOString();
}

function extractReadTime(content) {
  const readMatch = content.match(/(\d+)\s*min\s*read/);
  return readMatch ? `${readMatch[1]} min` : '5 min';
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

function convertToBlogPostTemplate(content, slug) {
  // Convert the content to work with BlogPostTemplate
  // This is a simplified conversion - you might need to adjust based on your specific needs
  return content
    .replace(/<div className="min-h-screen bg-gray-50">[\s\S]*?<div className="bg-white border-b">[\s\S]*?<\/div>/, '')
    .replace(/<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">[\s\S]*?<div className="prose prose-lg max-w-none">/, '')
    .replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*}/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/className="lead"/g, 'className="text-xl text-gray-700 leading-relaxed mb-8"')
    .replace(/<h2>/g, '<h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">')
    .replace(/<h3>/g, '<h3 className="text-2xl font-bold text-gray-900 mb-4">')
    .replace(/<h4>/g, '<h4 className="text-xl font-bold text-gray-900 mb-3">')
    .replace(/<p>/g, '<p className="text-gray-700 mb-6">')
    .replace(/<ul>/g, '<ul className="list-disc pl-6 mb-6 text-gray-700">')
    .replace(/<li>/g, '<li>')
    .replace(/<div className="bg-gray-100 p-6 rounded-lg my-6">/g, '<div className="bg-gray-100 p-6 rounded-lg my-6">')
    .replace(/<div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">/g, '<div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">')
    .replace(/<strong>Pro Tip:<\/strong>/g, '<h3 className="text-lg font-semibold text-blue-900 mb-3">Pro Tip</h3>')
    .replace(/<p className="text-blue-800">/g, '<p className="text-blue-800">');
}

// Run the restoration
restoreBlogContent();
