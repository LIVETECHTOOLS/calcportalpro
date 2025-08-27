import { Metadata } from 'next';
import BlogListingClient from '@/components/blog/BlogListingClient';

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
  // New posts
  {
    id: 13,
    title: '2025 Tax Brackets: Rates, Thresholds, and How to Plan',
    excerpt: 'A complete guide to 2025 U.S. federal tax brackets, standard deduction, and practical planning strategies.',
    category: 'Taxes',
    author: 'CalcPortal Pro Team',
    readTime: '11 min',
    publishDate: '2025-01-15',
    slug: '2025-tax-brackets',
    featured: false,
  },
  {
    id: 14,
    title: 'When Does Daylight Savings Time Start and End? 2025 Guide',
    excerpt: 'Daylight savings 2025 key dates, states opting out, and whether DST could become permanent.',
    category: 'Savings',
    author: 'CalcPortal Pro Team',
    readTime: '9 min',
    publishDate: '2025-01-15',
    slug: 'when-does-daylight-savings-time-start',
    featured: false,
  },
  {
    id: 15,
    title: 'Student Loans 2025: Federal vs Private, Repayment & Forgiveness',
    excerpt: 'Understand student loan types, protections, repayment plans, and late payment differences in 2025.',
    category: 'Loans',
    author: 'CalcPortal Pro Team',
    readTime: '13 min',
    publishDate: '2025-01-15',
    slug: 'student-loans-guide-2025',
    featured: false,
  },
  {
    id: 16,
    title: 'The 50/30/20 Rule: Simple Budgeting Guide for 2025',
    excerpt: 'Learn how to budget your income using the 50/30/20 rule and practical tips to stay consistent and grow savings in 2025.',
    category: 'Savings',
    author: 'CalcPortal Pro Team',
    readTime: '7 min',
    publishDate: '2025-01-19',
    slug: '50-30-20-rule-budgeting-guide-2025',
    featured: false,
  },
  {
    id: 17,
    title: 'When to Refinance Your Mortgage: Rates, Costs, and Break-even',
    excerpt: 'Understand when refinancing makes sense, how to calculate break-even, and how current rates affect your monthly payment.',
    category: 'Real Estate',
    author: 'CalcPortal Pro Team',
    readTime: '9 min',
    publishDate: '2025-01-19',
    slug: 'when-to-refinance-mortgage-2025',
    featured: false,
  },
  {
    id: 18,
    title: 'Index Funds vs ETFs: Which Is Better for Long-Term Investors?',
    excerpt: 'Compare index funds and ETFs on costs, taxes, liquidity, and strategy to choose the best vehicle for your goals.',
    category: 'Investing',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    publishDate: '2025-01-19',
    slug: 'index-funds-vs-etfs',
    featured: false,
  },
  {
    id: 19,
    title: 'How to Build Credit Fast in 2025: Practical Steps That Work',
    excerpt: 'Actionable ways to improve your credit score in 2025—from utilization and on-time payments to credit builder loans.',
    category: 'Loans',
    author: 'CalcPortal Pro Team',
    readTime: '6 min',
    publishDate: '2025-01-19',
    slug: 'how-to-build-credit-fast-2025',
    featured: false,
  },
  {
    id: 20,
    title: 'Retirement Planning 2025: Complete Guide to Secure Your Future',
    excerpt: 'Master retirement planning in 2025 with our comprehensive guide. Learn about 401(k)s, IRAs, Social Security, and strategies to build a secure retirement nest egg.',
    category: 'Retirement',
    author: 'CalcPortal Pro Team',
    readTime: '15 min',
    publishDate: '2025-01-20',
    slug: 'retirement-planning-2025',
    featured: false,
  },
  {
    id: 21,
    title: 'Insurance Planning Guide 2025: Protect Your Financial Future',
    excerpt: 'Comprehensive guide to insurance planning in 2025. Learn about life, health, auto, home, and disability insurance to protect your family and assets.',
    category: 'Insurance',
    author: 'CalcPortal Pro Team',
    readTime: '18 min',
    publishDate: '2025-01-21',
    slug: 'insurance-planning-guide-2025',
    featured: false,
  },
  {
    id: 22,
    title: 'Investment Strategies 2025: Build Wealth in Any Market',
    excerpt: 'Master investment strategies for 2025. Learn about diversification, asset allocation, market timing, and proven techniques to build long-term wealth.',
    category: 'Investing',
    author: 'CalcPortal Pro Team',
    readTime: '20 min',
    publishDate: '2025-01-22',
    slug: 'investment-strategies-2025',
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
      {/* Blog ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: blogPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://calcportalpro.com/blog/${post.slug}`,
              name: post.title,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-primary-50">
        <BlogListingClient posts={blogPosts} categories={categories} />
      </div>
    </>
  );
}
