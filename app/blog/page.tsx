import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Education Blog | CalcPortal Pro',
  description: 'Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more. Improve your financial literacy with our educational blog.',
  keywords: 'financial blog, personal finance, investment tips, loan guides, tax advice, financial education, money management',
  openGraph: {
    title: 'Financial Education Blog | CalcPortal Pro',
    description: 'Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more.',
    url: 'https://calcportalpro.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

// Blog Listing Schema
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "CalcPortal Pro Financial Education Blog",
  "description": "Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more",
  "url": "https://calcportalpro.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "CalcPortal Pro",
    "url": "https://calcportalpro.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Article",
          "name": "How to Start an Emergency Fund: A Complete Guide for 2025",
          "url": "https://calcportalpro.com/blog/how-to-start-emergency-fund"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Article",
          "name": "High Yield Savings Account Guide: Maximize Your Money in 2025",
          "url": "https://calcportalpro.com/blog/high-yield-savings-account-guide"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Article",
          "name": "How Much House Can I Afford? Complete Guide for 2025",
          "url": "https://calcportalpro.com/blog/how-much-house-can-i-afford"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Article",
          "name": "CD Rates Guide 2025: Best Certificate of Deposit Rates & Strategies",
          "url": "https://calcportalpro.com/blog/cd-rates-guide-2025"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Article",
          "name": "Canada FPT & GST Payment Dates 2025: Complete Guide",
          "url": "https://calcportalpro.com/blog/canada-fpt-gst-payment-dates-2025"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Article",
          "name": "Understanding Different Types of Loans: Which One is Right for You?",
          "url": "https://calcportalpro.com/blog/understanding-different-types-loans"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Article",
          "name": "5 Tips for Building an Investment Portfolio in 2025",
          "url": "https://calcportalpro.com/blog/5-tips-building-investment-portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Article",
          "name": "APR vs Interest Rate: What's the Difference and Why It Matters",
          "url": "https://calcportalpro.com/blog/apr-vs-interest-rate-difference"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Article",
          "name": "How GPA Impacts College Admissions: A Comprehensive Guide",
          "url": "https://calcportalpro.com/blog/how-gpa-impacts-college-admissions"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Article",
          "name": "Top Study Hacks to Improve Your GPA in 2025",
          "url": "https://calcportalpro.com/blog/top-study-hacks-improve-gpa"
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Article",
          "name": "Mortgage vs Rent: Which is Better for Your Financial Situation?",
          "url": "https://calcportalpro.com/blog/mortgage-vs-rent-which-better"
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Article",
          "name": "Tax Deductions Every Small Business Owner Should Know",
          "url": "https://calcportalpro.com/blog/tax-deductions-small-business-owners"
        }
      },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Article",
          "name": "Understanding Different Types of Loans: Which One is Right for You?",
          "url": "https://calcportalpro.com/blog/understanding-different-types-loans"
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Article",
          "name": "5 Tips for Building an Investment Portfolio in 2025",
          "url": "https://calcportalpro.com/blog/5-tips-building-investment-portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 15,
        "item": {
          "@type": "Article",
          "name": "Mortgage vs Rent: Which is Better for Your Financial Situation?",
          "url": "https://calcportalpro.com/blog/mortgage-vs-rent-which-better"
        }
      },
      {
        "@type": "ListItem",
        "position": 16,
        "item": {
          "@type": "Article",
          "name": "APR vs Interest Rate: What's the Difference and Why It Matters",
          "url": "https://calcportalpro.com/blog/apr-vs-interest-rate-difference"
        }
      },
      {
        "@type": "ListItem",
        "position": 17,
        "item": {
          "@type": "Article",
          "name": "How GPA Impacts College Admissions: A Comprehensive Guide",
          "url": "https://calcportalpro.com/blog/how-gpa-impacts-college-admissions"
        }
      },
      {
        "@type": "ListItem",
        "position": 18,
        "item": {
          "@type": "Article",
          "name": "Top Study Hacks to Improve Your GPA in 2025",
          "url": "https://calcportalpro.com/blog/top-study-hacks-improve-gpa"
        }
      },
      {
        "@type": "ListItem",
        "position": 19,
        "item": {
          "@type": "Article",
          "name": "Tax Deductions Every Small Business Owner Should Know",
          "url": "https://calcportalpro.com/blog/tax-deductions-small-business-owners"
        }
      }
    ]
  }
};

const blogPosts = [
  {
    id: 1,
    title: 'How to Start an Emergency Fund: A Complete Guide for 2025',
    excerpt: 'Building an emergency fund is the foundation of financial security. Learn how to create and maintain a safety net that covers 3-6 months of expenses.',
    category: 'Savings',
    author: 'Sarah Collins',
    readTime: '6 min',
    publishDate: '2025-01-15',
    slug: 'how-to-start-emergency-fund',
    featured: true,
  },
  {
    id: 2,
    title: 'High Yield Savings Account Guide: Maximize Your Money in 2025',
    excerpt: 'Discover the best high yield savings accounts in 2025. Learn how to earn 4-5% APY, compare top online banks, and maximize your emergency fund growth.',
    category: 'Savings',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    publishDate: '2025-01-15',
    slug: 'high-yield-savings-account-guide',
    featured: true,
  },
  {
    id: 3,
    title: 'How Much House Can I Afford? Complete Guide for 2025',
    excerpt: 'Learn how to calculate how much house you can afford in 2025. Understand debt-to-income ratios, down payments, and use our mortgage calculator.',
    category: 'Real Estate',
    author: 'CalcPortal Pro Team',
    readTime: '7 min',
    publishDate: '2025-01-16',
    slug: 'how-much-house-can-i-afford',
    featured: true,
  },
  {
    id: 4,
    title: 'CD Rates Guide 2025: Best Certificate of Deposit Rates & Strategies',
    excerpt: 'Discover the best CD rates in 2025. Learn about CD laddering strategies, when to invest in CDs, and use our CD calculator to maximize your returns.',
    category: 'Investing',
    author: 'CalcPortal Pro Team',
    readTime: '9 min',
    publishDate: '2025-01-17',
    slug: 'cd-rates-guide-2025',
    featured: false,
  },
  {
    id: 5,
    title: 'Canada FPT & GST Payment Dates 2025: Complete Guide',
    excerpt: 'Stay updated with Canada FPT and GST payment dates for 2025. Learn about eligibility, payment amounts, and how to calculate your benefits.',
    category: 'Taxes',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    publishDate: '2025-01-18',
    slug: 'canada-fpt-gst-payment-dates-2025',
    featured: false,
  },
  {
    id: 6,
    title: 'Understanding Different Types of Loans: Which One is Right for You?',
    excerpt: 'From personal loans to mortgages, understanding the different types of loans available can help you make better borrowing decisions.',
    category: 'Loans',
    author: 'James Mitchell',
    readTime: '5 min',
    publishDate: '2025-01-12',
    slug: 'understanding-different-types-loans',
    featured: false,
  },
  {
    id: 7,
    title: '5 Tips for Building an Investment Portfolio in 2025',
    excerpt: 'Start your investment journey with these proven strategies for building a diversified portfolio that aligns with your financial goals.',
    category: 'Investing',
    author: 'Emily Foster',
    readTime: '7 min',
    publishDate: '2025-01-10',
    slug: '5-tips-building-investment-portfolio',
    featured: false,
  },
  {
    id: 8,
    title: 'APR vs Interest Rate: What\'s the Difference and Why It Matters',
    excerpt: 'Understanding the difference between APR and interest rate can save you thousands on loans and credit cards.',
    category: 'Loans',
    author: 'Michael Chen',
    readTime: '10 min',
    publishDate: '2025-01-08',
    slug: 'apr-vs-interest-rate-difference',
    featured: false,
  },
  {
    id: 9,
    title: 'How GPA Impacts College Admissions: A Comprehensive Guide',
    excerpt: 'Your GPA is one of the most important factors in college admissions. Learn how to calculate, improve, and present your academic performance.',
    category: 'Education',
    author: 'Dr. Lisa Rodriguez',
    readTime: '8 min',
    publishDate: '2025-01-05',
    slug: 'how-gpa-impacts-college-admissions',
    featured: false,
  },
  {
    id: 10,
    title: 'Top Study Hacks to Improve Your GPA in 2025',
    excerpt: 'Discover proven study techniques and strategies that can help you boost your GPA and academic performance.',
    category: 'Education',
    author: 'Dr. Lisa Rodriguez',
    readTime: '6 min',
    publishDate: '2025-01-03',
    slug: 'top-study-hacks-improve-gpa',
    featured: false,
  },
  {
    id: 11,
    title: 'Mortgage vs Rent: Which is Better for Your Financial Situation?',
    excerpt: 'Compare the costs and benefits of buying vs renting to make the best decision for your financial future.',
    category: 'Real Estate',
    author: 'David Thompson',
    readTime: '7 min',
    publishDate: '2025-01-01',
    slug: 'mortgage-vs-rent-which-better',
    featured: false,
  },
  {
    id: 12,
    title: 'Tax Deductions Every Small Business Owner Should Know',
    excerpt: 'Maximize your tax savings with these essential deductions that can reduce your business tax liability.',
    category: 'Taxes',
    author: 'Jennifer Walsh',
    readTime: '12 min',
    publishDate: '2024-12-28',
    slug: 'tax-deductions-small-business-owners',
    featured: false,
  },
  {
    id: 13,
    title: 'Understanding Different Types of Loans: Which One is Right for You?',
    excerpt: 'Comprehensive guide to different types of loans including personal loans, mortgages, auto loans, student loans, and business loans.',
    category: 'Loans',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    publishDate: '2025-01-15',
    slug: 'understanding-different-types-loans',
    featured: false,
  },
  {
    id: 14,
    title: '5 Tips for Building an Investment Portfolio in 2025',
    excerpt: 'Learn the essential strategies for building a successful investment portfolio with diversification and risk management.',
    category: 'Investing',
    author: 'CalcPortal Pro Team',
    readTime: '10 min',
    publishDate: '2025-01-15',
    slug: '5-tips-building-investment-portfolio',
    featured: false,
  },
  {
    id: 15,
    title: 'Mortgage vs Rent: Which is Better for Your Financial Situation?',
    excerpt: 'Comprehensive analysis of mortgage vs rent decisions including financial implications and hidden costs.',
    category: 'Real Estate',
    author: 'CalcPortal Pro Team',
    readTime: '12 min',
    publishDate: '2025-01-15',
    slug: 'mortgage-vs-rent-which-better',
    featured: false,
  },
  {
    id: 16,
    title: 'APR vs Interest Rate: What\'s the Difference and Why It Matters',
    excerpt: 'Learn the crucial differences between APR and interest rate and how they affect your loan costs.',
    category: 'Loans',
    author: 'CalcPortal Pro Team',
    readTime: '10 min',
    publishDate: '2025-01-15',
    slug: 'apr-vs-interest-rate-difference',
    featured: false,
  },
  {
    id: 17,
    title: 'How GPA Impacts College Admissions: A Comprehensive Guide',
    excerpt: 'Learn how your GPA affects college admissions and discover strategies to improve your academic standing.',
    category: 'Education',
    author: 'CalcPortal Pro Team',
    readTime: '12 min',
    publishDate: '2025-01-15',
    slug: 'how-gpa-impacts-college-admissions',
    featured: false,
  },
  {
    id: 18,
    title: 'Top Study Hacks to Improve Your GPA in 2025',
    excerpt: 'Discover proven study strategies and techniques to boost your GPA and academic performance.',
    category: 'Education',
    author: 'CalcPortal Pro Team',
    readTime: '15 min',
    publishDate: '2025-01-15',
    slug: 'top-study-hacks-improve-gpa',
    featured: false,
  },
  {
    id: 19,
    title: 'Tax Deductions Every Small Business Owner Should Know',
    excerpt: 'Discover essential tax deductions for small business owners and learn how to maximize your tax savings.',
    category: 'Taxes',
    author: 'CalcPortal Pro Team',
    readTime: '12 min',
    publishDate: '2025-01-15',
    slug: 'tax-deductions-small-business-owners',
    featured: false,
  },
];

const categories = [
  'All',
  'Savings',
  'Loans',
  'Investing',
  'Education',
  'Real Estate',
  'Taxes',
  'Retirement',
  'Insurance',
];

export default function BlogPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingSchema),
        }}
      />
      
      <div className="min-h-screen bg-primary-50">
        <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Financial Education Blog
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Expert insights, tips, and guides to help you make smarter financial decisions. 
            From budgeting basics to advanced investment strategies, we've got you covered.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                category === 'All'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-secondary-500 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 text-sm font-medium">{post.category}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-secondary-100 mb-3">
                    <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-500 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary-100 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-secondary-100">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">{post.category}</span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-sm text-secondary-100 mb-2">
                    <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-500 mb-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary-100 mb-3 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3 text-secondary-100">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
