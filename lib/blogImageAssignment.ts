import fs from 'fs';
import path from 'path';

// Blog image mapping system
export interface BlogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Available blog images
const availableImages = [
  'apr-vs-interest-rate.jpg',
  'budgeting-50-30-20-rule.jpg',
  'build-credit-fast-2025.jpg',
  'canada-fpt-gst-2025.jpg',
  'cd-rates-2025.jpg',
  'daylight-savings-2025.jpg',
  'emergency-fund.jpg',
  'gpa-college-admissions-2025.jpg',
  'high-yield-savings.jpg',
  'house-afford.jpg',
  'index-funds-vs-etfs.jpg',
  'insurance-guide-2025.jpg',
  'investment-portfolio-tips.jpg',
  'investment-strategies-2025.jpg',
  'mortgage-vs-rent.jpg',
  'refinance-mortgage-2025.jpg',
  'retirement-planning-2025.jpg',
  'small-business-tax-deductions.jpg',
  'student-loans-2025.jpg',
  'study-hacks-gpa-2025.jpg',
  'tax-brackets-2025.jpg',
  'types-of-loans.jpg'
];

// Keyword mapping for semantic image assignment
const keywordImageMap: Record<string, string[]> = {
  // Tax-related keywords
  'tax-brackets-2025.jpg': ['tax', 'bracket', 'rate', 'irs', 'federal', 'income', '2025'],
  'small-business-tax-deductions.jpg': ['business', 'deduction', 'small business', 'tax deduction', 'expense'],
  'canada-fpt-gst-2025.jpg': ['canada', 'fpt', 'gst', 'payment', 'canadian'],
  
  // Loan-related keywords
  'apr-vs-interest-rate.jpg': ['apr', 'interest', 'rate', 'loan', 'credit', 'annual'],
  'types-of-loans.jpg': ['loan', 'personal', 'business', 'auto', 'student', 'mortgage', 'heloc'],
  'refinance-mortgage-2025.jpg': ['refinance', 'mortgage', 'refinancing', 'home loan'],
  'mortgage-vs-rent.jpg': ['mortgage', 'rent', 'renting', 'buying', 'house', 'home'],
  'house-afford.jpg': ['house', 'afford', 'affordability', 'home', 'buying', 'purchase'],
  
  // Investment keywords
  'investment-portfolio-tips.jpg': ['portfolio', 'investment', 'tips', 'diversification', 'strategy'],
  'investment-strategies-2025.jpg': ['investment', 'strategy', 'strategies', 'planning', 'financial'],
  'index-funds-vs-etfs.jpg': ['index', 'fund', 'etf', 'mutual', 'funds', 'investing'],
  'retirement-planning-2025.jpg': ['retirement', 'planning', '401k', 'ira', 'pension', 'savings'],
  
  // Savings keywords
  'high-yield-savings.jpg': ['savings', 'high yield', 'account', 'interest', 'bank'],
  'cd-rates-2025.jpg': ['cd', 'certificate', 'deposit', 'rates', 'savings'],
  'emergency-fund.jpg': ['emergency', 'fund', 'savings', 'rainy day', 'financial'],
  'budgeting-50-30-20-rule.jpg': ['budget', 'budgeting', 'rule', '50-30-20', 'money management'],
  
  // Education keywords
  'gpa-college-admissions-2025.jpg': ['gpa', 'college', 'admission', 'university', 'academic'],
  'study-hacks-gpa-2025.jpg': ['study', 'hacks', 'gpa', 'academic', 'grades', 'learning'],
  'student-loans-2025.jpg': ['student', 'loan', 'education', 'tuition', 'college'],
  
  // Credit keywords
  'build-credit-fast-2025.jpg': ['credit', 'build', 'score', 'improve', 'fast'],
  
  // Insurance keywords
  'insurance-guide-2025.jpg': ['insurance', 'coverage', 'policy', 'premium', 'protection'],
  
  // General financial keywords
  'daylight-savings-2025.jpg': ['daylight', 'savings', 'time', 'clock', 'schedule']
};

// Category-based image assignment
const categoryImageMap: Record<string, string[]> = {
  'Taxes': ['tax-brackets-2025.jpg', 'small-business-tax-deductions.jpg', 'canada-fpt-gst-2025.jpg'],
  'Loans': ['apr-vs-interest-rate.jpg', 'types-of-loans.jpg', 'refinance-mortgage-2025.jpg', 'mortgage-vs-rent.jpg'],
  'Investing': ['investment-portfolio-tips.jpg', 'investment-strategies-2025.jpg', 'index-funds-vs-etfs.jpg', 'retirement-planning-2025.jpg'],
  'Savings': ['high-yield-savings.jpg', 'cd-rates-2025.jpg', 'emergency-fund.jpg', 'budgeting-50-30-20-rule.jpg'],
  'Education': ['gpa-college-admissions-2025.jpg', 'study-hacks-gpa-2025.jpg', 'student-loans-2025.jpg'],
  'Real Estate': ['mortgage-vs-rent.jpg', 'house-afford.jpg', 'refinance-mortgage-2025.jpg'],
  'Insurance': ['insurance-guide-2025.jpg'],
  'Finance': ['budgeting-50-30-20-rule.jpg', 'emergency-fund.jpg', 'build-credit-fast-2025.jpg']
};

// Default images for categories
const defaultImages: Record<string, string> = {
  'Taxes': 'tax-brackets-2025.jpg',
  'Loans': 'types-of-loans.jpg',
  'Investing': 'investment-strategies-2025.jpg',
  'Savings': 'high-yield-savings.jpg',
  'Education': 'gpa-college-admissions-2025.jpg',
  'Real Estate': 'mortgage-vs-rent.jpg',
  'Insurance': 'insurance-guide-2025.jpg',
  'Finance': 'budgeting-50-30-20-rule.jpg'
};

/**
 * Get blog post featured image based on slug, keywords, and category
 */
export function getBlogPostImage(
  slug: string,
  _keywords: string = '',
  _category: string = 'Finance',
  title: string = ''
): BlogImage | null {
  // Only exact slug match (filename without extension must equal slug)
  const exactMatch = availableImages.find(img => img.replace('.jpg', '') === slug);
  if (!exactMatch) return null;

  return {
    src: `/images/blog/${exactMatch}`,
    alt: `${title || slug} featured image`,
    width: 1200,
    height: 630
  };
}

/**
 * Get all available blog images
 */
export function getAllBlogImages(): string[] {
  return availableImages.map(img => `/images/blog/${img}`);
}

/**
 * Get images by category
 */
export function getImagesByCategory(category: string): string[] {
  const categoryImages = categoryImageMap[category] || [];
  return categoryImages.map(img => `/images/blog/${img}`);
}

/**
 * Search images by keyword
 */
export function searchImagesByKeyword(keyword: string): string[] {
  const matchingImages: string[] = [];
  
  for (const [imageName, keywords] of Object.entries(keywordImageMap)) {
    if (keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))) {
      matchingImages.push(`/images/blog/${imageName}`);
    }
  }
  
  return matchingImages;
}

/**
 * Get random image from category
 */
export function getRandomImageFromCategory(category: string): BlogImage {
  const categoryImages = categoryImageMap[category] || categoryImageMap['Finance'];
  const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  
  return {
    src: `/images/blog/${randomImage}`,
    alt: `${category} featured image`,
    width: 1200,
    height: 630
  };
}

/**
 * Auto-assign images to all blog posts
 */
export function autoAssignImagesToBlogPosts(): void {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  
  if (!fs.existsSync(blogDir)) {
    console.log('Blog directory not found');
    return;
  }
  
  const blogSlugs = fs.readdirSync(blogDir)
    .filter(name => fs.lstatSync(path.join(blogDir, name)).isDirectory())
    .filter(name => name !== 'page.tsx');
  
  console.log(`Found ${blogSlugs.length} blog posts to process`);
  
  for (const slug of blogSlugs) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      try {
        const content = fs.readFileSync(pagePath, 'utf-8');
        
        // Extract metadata
        const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
        const keywordsMatch = content.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
        
        const title = titleMatch ? titleMatch[1].replace(' | CalcPortal Pro', '') : '';
        const description = descMatch ? descMatch[1] : '';
        const keywords = keywordsMatch ? keywordsMatch[1] : '';
        
        // Detect category
        const category = detectCategory(`${title} ${description} ${keywords}`);
        
        // Get appropriate image
        const image = getBlogPostImage(slug, keywords, category, title);
        
        console.log(`✅ ${slug}: ${image.src} (${category})`);
        
        // You can optionally update the blog post with the image
        // This would require modifying the BlogPostTemplate usage
        
      } catch (error) {
        console.log(`❌ Error processing ${slug}: ${error.message}`);
      }
    }
  }
}

/**
 * Detect category from text content
 */
function detectCategory(text: string): string {
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
