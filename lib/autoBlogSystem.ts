import fs from 'fs';
import path from 'path';

// Auto-detection and transformation system for blog posts
export interface BlogPostAnalysis {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  category: string;
  wordCount: number;
  hasStructuredContent: boolean;
  needsTransformation: boolean;
  contentSections: ContentSection[];
}

export interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'highlight' | 'table' | 'ad' | 'cta';
  level?: number;
  content: string;
  className?: string;
  props?: any;
}

// Enhanced category detection with more keywords
const categoryKeywords: Record<string, string[]> = {
  "Taxes": ["tax", "irs", "fpt", "gst", "fica", "refund", "deduction", "bracket", "withholding"],
  "Loans": ["loan", "credit", "debt", "refinance", "mortgage", "heloc", "personal loan", "business loan"],
  "Investing": ["invest", "etf", "portfolio", "stock", "bond", "index fund", "retirement", "401k", "ira"],
  "Real Estate": ["real-estate", "mortgage", "rent", "house", "heloc", "property", "home", "buying", "selling"],
  "Savings": ["save", "budget", "cd", "rate", "fund", "emergency", "high-yield", "savings account"],
  "Insurance": ["insurance", "coverage", "policy", "premium", "claim"],
  "Retirement": ["retire", "pension", "401k", "ira", "social security", "retirement planning"],
  "Education": ["gpa", "college", "study", "tuition", "scholarship", "student loan", "education"],
  "Finance": ["finance", "money", "budget", "financial planning", "wealth", "income"]
};

// Content analysis functions
export function analyzeBlogPost(slug: string): BlogPostAnalysis {
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
  
  // Analyze content structure
  const contentSections = analyzeContentStructure(content);
  const hasStructuredContent = contentSections.length > 5;
  const needsTransformation = !hasStructuredContent || wordCount > 1000;

  return {
    slug,
    title,
    description,
    keywords,
    category,
    wordCount,
    hasStructuredContent,
    needsTransformation,
    contentSections
  };
}

function countWords(content: string): number {
  // Remove code blocks, imports, and metadata
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/import.*?from.*?;/g, '')
    .replace(/export.*?{[\s\S]*?}/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return cleanContent.split(' ').length;
}

function extractTitle(content: string): string {
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  return titleMatch ? titleMatch[1].replace(' | CalcPortal Pro', '') : 'Untitled';
}

function extractDescription(content: string): string {
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  return descMatch ? descMatch[1] : 'A comprehensive guide covering important financial topics.';
}

function extractKeywords(content: string): string {
  const keywordsMatch = content.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
  return keywordsMatch ? keywordsMatch[1] : 'finance, money, guide';
}

function detectCategory(text: string): string {
  const lowerText = text.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return category;
    }
  }
  
  return 'Finance';
}

function analyzeContentStructure(content: string): ContentSection[] {
  const sections: ContentSection[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Detect headings
    if (trimmed.match(/^<h[1-6]/)) {
      const level = parseInt(trimmed.match(/<h([1-6])/)?.[1] || '2');
      const text = trimmed.replace(/<[^>]*>/g, '').trim();
      sections.push({
        type: 'heading',
        level,
        content: text,
        className: getHeadingClassName(level, text)
      });
    }
    
    // Detect paragraphs
    else if (trimmed.match(/^<p/) && !trimmed.includes('className=')) {
      const text = trimmed.replace(/<[^>]*>/g, '').trim();
      if (text.length > 50) {
        sections.push({
          type: 'paragraph',
          content: text,
          className: 'text-gray-700 mb-6'
        });
      }
    }
    
    // Detect lists
    else if (trimmed.match(/^<ul|^<ol/)) {
      sections.push({
        type: 'list',
        content: trimmed,
        className: 'list-disc pl-6 mb-6 text-gray-700'
      });
    }
    
    // Detect highlight boxes
    else if (trimmed.includes('bg-') && trimmed.includes('border')) {
      sections.push({
        type: 'highlight',
        content: trimmed,
        className: 'bg-blue-50 border-l-4 border-blue-400 p-6 my-8'
      });
    }
  }
  
  return sections;
}

function getHeadingClassName(level: number, text: string): string {
  const baseClass = `font-bold text-gray-900 mb-6`;
  
  if (level === 1) return `text-4xl ${baseClass}`;
  if (level === 2) return `text-3xl ${baseClass} mt-12`;
  if (level === 3) return `text-2xl ${baseClass} mt-8`;
  if (level === 4) return `text-xl ${baseClass} mt-6`;
  
  // Special styling for important headings
  if (text.toLowerCase().includes('conclusion')) return `text-3xl ${baseClass} mt-12 text-primary-600`;
  if (text.toLowerCase().includes('key takeaway')) return `text-2xl ${baseClass} mt-8 text-green-600`;
  if (text.toLowerCase().includes('pros') || text.toLowerCase().includes('cons')) return `text-xl ${baseClass} mt-6 text-orange-600`;
  
  return `text-2xl ${baseClass} mt-8`;
}

// Auto-transformation functions
export function transformBlogPost(analysis: BlogPostAnalysis): string {
  const { slug, title, description, keywords, category, contentSections } = analysis;
  
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
      ${transformContentSections(contentSections)}
    </BlogPostTemplate>
  )
}`;
}

function slugToComponentName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

function getCalculatorLink(category: string): string {
  const calculatorMap: Record<string, string> = {
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

function getCalculatorText(category: string): string {
  const textMap: Record<string, string> = {
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

function transformContentSections(sections: ContentSection[]): string {
  return sections.map(section => {
    switch (section.type) {
      case 'heading':
        return `<h${section.level} className="${section.className}">${section.content}</h${section.level}>`;
      
      case 'paragraph':
        return `<p className="${section.className}">${section.content}</p>`;
      
      case 'list':
        return `<ul className="${section.className}">${extractListItems(section.content)}</ul>`;
      
      case 'highlight':
        return `<div className="${section.className}">${extractHighlightContent(section.content)}</div>`;
      
      default:
        return section.content;
    }
  }).join('\n\n');
}

function extractListItems(listContent: string): string {
  // Extract list items from HTML list
  const items = listContent.match(/<li[^>]*>(.*?)<\/li>/g) || [];
  return items.map(item => {
    const text = item.replace(/<[^>]*>/g, '').trim();
    return `<li>${text}</li>`;
  }).join('\n        ');
}

function extractHighlightContent(highlightContent: string): string {
  // Extract content from highlight boxes
  const text = highlightContent.replace(/<[^>]*>/g, '').trim();
  return `<p className="text-blue-800">${text}</p>`;
}

// Auto-detection and transformation runner
export function autoTransformBlogPost(slug: string): boolean {
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
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Failed to transform blog post ${slug}:`, error);
    return false;
  }
}

// Batch transformation for all blog posts
export function transformAllBlogPosts(): void {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const slugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx'); // Exclude the main blog page
  
  console.log(`🔄 Found ${slugs.length} blog posts to analyze...`);
  
  let transformed = 0;
  for (const slug of slugs) {
    if (autoTransformBlogPost(slug)) {
      transformed++;
    }
  }
  
  console.log(`✅ Auto-transformation complete: ${transformed}/${slugs.length} posts transformed`);
}
