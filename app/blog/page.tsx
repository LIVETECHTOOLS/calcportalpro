import { Metadata } from "next";
import BlogListingClient from "@/components/blog/BlogListingClient";

export const metadata: Metadata = {
  title: "Financial Education Blog | CalcPortal Pro",
  description:
    "Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more. Improve your financial literacy with our educational blog.",
  keywords:
    "financial blog, personal finance, investment tips, loan guides, tax advice, financial education, money management",
  openGraph: {
    title: "Financial Education Blog | CalcPortal Pro",
    description:
      "Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more.",
    url: "https://calcportalpro.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

// Blog Listing Schema
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "CalcPortal Pro Financial Education Blog",
  description:
    "Expert financial tips, guides, and insights on personal finance, investing, loans, taxes, and more",
  url: "https://calcportalpro.com/blog",
  publisher: {
    "@type": "Organization",
    name: "CalcPortal Pro",
    url: "https://calcportalpro.com",
  },
};

// Slug → Image filename map
const slugToImage: Record<string, string> = {
  "how-to-start-emergency-fund": "emergency-fund.jpg",
  "high-yield-savings-account-guide": "high-yield-savings.jpg",
  "how-much-house-can-i-afford": "house-afford.jpg",
  "cd-rates-guide-2025": "cd-rates-2025.jpg",
  "canada-fpt-gst-payment-dates-2025": "canada-fpt-gst-2025.jpg",
  "understanding-different-types-loans": "types-of-loans.jpg",
  "5-tips-building-investment-portfolio": "investment-portfolio-tips.jpg",
  "apr-vs-interest-rate-difference": "apr-vs-interest-rate.jpg",
  "how-gpa-impacts-college-admissions": "gpa-college-admissions-2025.jpg",
  "top-study-hacks-improve-gpa": "study-hacks-gpa-2025.jpg",
  "mortgage-vs-rent-which-better": "mortgage-vs-rent.jpg",
  "tax-deductions-small-business-owners": "small-business-tax-deductions.jpg",
  "2025-tax-brackets": "tax-brackets-2025.jpg",
  "when-does-daylight-savings-time-start": "daylight-savings-2025.jpg",
  "student-loans-guide-2025": "student-loans-2025.jpg",
  "50-30-20-rule-budgeting-guide-2025": "budgeting-50-30-20-rule.jpg",
  "when-to-refinance-mortgage-2025": "refinance-mortgage-2025.jpg",
  "index-funds-vs-etfs": "index-funds-vs-etfs.jpg",
  "how-to-build-credit-fast-2025": "build-credit-fast-2025.jpg",
  "retirement-planning-2025": "retirement-planning-2025.jpg",
  "insurance-planning-guide-2025": "insurance-guide-2025.jpg",
  "investment-strategies-2025": "investment-strategies-2025.jpg",
};

// Blog posts
const rawBlogPosts = [
  {
    id: 1,
    title: "How to Start an Emergency Fund: A Complete Guide for 2025",
    excerpt:
      "Building an emergency fund is the foundation of financial security. Learn how to create and maintain a safety net that covers 3-6 months of expenses.",
    category: "Savings",
    author: "Sarah Collins",
    readTime: "6 min",
    publishDate: "2025-01-15",
    slug: "how-to-start-emergency-fund",
    featured: true,
  },
  {
    id: 2,
    title: "High Yield Savings Account Guide: Maximize Your Money in 2025",
    excerpt:
      "Discover the best high yield savings accounts in 2025. Learn how to earn 4-5% APY, compare top online banks, and maximize your emergency fund growth.",
    category: "Savings",
    author: "CalcPortal Pro Team",
    readTime: "8 min",
    publishDate: "2025-01-15",
    slug: "high-yield-savings-account-guide",
    featured: true,
  },
  {
    id: 3,
    title: "How Much House Can I Afford? 2025 Calculator Guide",
    excerpt:
      "Planning to buy a home? Learn how lenders calculate affordability using your income, credit score, and debt-to-income ratio.",
    category: "Real Estate",
    author: "David Miller",
    readTime: "7 min",
    publishDate: "2025-01-18",
    slug: "how-much-house-can-i-afford",
  },
  {
    id: 4,
    title: "CD Rates Guide 2025: Best Certificate of Deposit Options",
    excerpt:
      "Compare 2025 CD rates across banks. Learn about terms, APYs, and strategies to maximize returns safely.",
    category: "Savings",
    author: "CalcPortal Pro Research",
    readTime: "5 min",
    publishDate: "2025-01-19",
    slug: "cd-rates-guide-2025",
  },
  {
    id: 5,
    title: "Canada FPT & GST Payment Dates 2025",
    excerpt:
      "Stay updated with the official Federal Payment Transfer (FPT) and GST/HST credit deposit dates in Canada for 2025.",
    category: "Taxes",
    author: "Canadian Finance Insights",
    readTime: "4 min",
    publishDate: "2025-01-20",
    slug: "canada-fpt-gst-payment-dates-2025",
  },
  {
    id: 6,
    title: "Understanding Different Types of Loans in 2025",
    excerpt:
      "From personal to student loans, mortgages, and auto financing—explore the different loan types and their pros/cons.",
    category: "Loans",
    author: "Emily Johnson",
    readTime: "9 min",
    publishDate: "2025-01-22",
    slug: "understanding-different-types-loans",
  },
  {
    id: 7,
    title: "5 Tips for Building a Strong Investment Portfolio in 2025",
    excerpt:
      "Learn five actionable tips to diversify and grow your investment portfolio, reduce risks, and maximize gains.",
    category: "Investing",
    author: "Michael Brown",
    readTime: "7 min",
    publishDate: "2025-01-25",
    slug: "5-tips-building-investment-portfolio",
  },
  {
    id: 8,
    title: "APR vs Interest Rate: Key Differences Explained",
    excerpt:
      "Understand the difference between APR and interest rate, and how it impacts your loans, mortgages, and credit cards.",
    category: "Loans",
    author: "Sarah Collins",
    readTime: "6 min",
    publishDate: "2025-01-28",
    slug: "apr-vs-interest-rate-difference",
  },
  {
    id: 9,
    title: "How GPA Impacts College Admissions in 2025",
    excerpt:
      "Learn how GPA affects college admission chances and why extracurricular activities and essays also matter.",
    category: "Education",
    author: "Lisa Nguyen",
    readTime: "6 min",
    publishDate: "2025-02-01",
    slug: "how-gpa-impacts-college-admissions",
  },
  {
    id: 10,
    title: "Top Study Hacks to Improve GPA in 2025",
    excerpt:
      "Boost your GPA with these proven study techniques, time management strategies, and learning habits.",
    category: "Education",
    author: "Lisa Nguyen",
    readTime: "5 min",
    publishDate: "2025-02-05",
    slug: "top-study-hacks-improve-gpa",
  },
  {
    id: 11,
    title: "Mortgage vs Rent: Which is Better in 2025?",
    excerpt:
      "Should you rent or buy in 2025? Explore the pros and cons of each and which makes the most sense for your finances.",
    category: "Real Estate",
    author: "David Miller",
    readTime: "8 min",
    publishDate: "2025-02-10",
    slug: "mortgage-vs-rent-which-better",
  },
  {
    id: 12,
    title: "Tax Deductions for Small Business Owners in 2025",
    excerpt:
      "Learn about the top tax deductions for entrepreneurs and small business owners in 2025.",
    category: "Taxes",
    author: "CalcPortal Pro Team",
    readTime: "7 min",
    publishDate: "2025-02-15",
    slug: "tax-deductions-small-business-owners",
  },
  {
    id: 13,
    title: "2025 Tax Brackets: Everything You Need to Know",
    excerpt:
      "Stay informed on the 2025 tax brackets and how they impact your federal income taxes.",
    category: "Taxes",
    author: "Emily Johnson",
    readTime: "6 min",
    publishDate: "2025-02-20",
    slug: "2025-tax-brackets",
  },
  {
    id: 14,
    title: "When Does Daylight Savings Time Start in 2025?",
    excerpt:
      "Mark your calendars! Find out the exact dates for daylight savings time in 2025.",
    category: "Education",
    author: "CalcPortal Pro Team",
    readTime: "3 min",
    publishDate: "2025-02-25",
    slug: "when-does-daylight-savings-time-start",
  },
  {
    id: 15,
    title: "Student Loans Guide 2025",
    excerpt:
      "Navigate student loans in 2025: federal vs private loans, repayment options, and forgiveness programs.",
    category: "Loans",
    author: "Sarah Collins",
    readTime: "9 min",
    publishDate: "2025-03-01",
    slug: "student-loans-guide-2025",
  },
  {
    id: 16,
    title: "50/30/20 Rule Budgeting Guide for 2025",
    excerpt:
      "Master budgeting in 2025 using the simple and effective 50/30/20 rule framework.",
    category: "Savings",
    author: "Michael Brown",
    readTime: "5 min",
    publishDate: "2025-03-05",
    slug: "50-30-20-rule-budgeting-guide-2025",
  },
  {
    id: 17,
    title: "When to Refinance Your Mortgage in 2025",
    excerpt:
      "Find out the best times and situations to refinance your mortgage in 2025.",
    category: "Real Estate",
    author: "David Miller",
    readTime: "7 min",
    publishDate: "2025-03-10",
    slug: "when-to-refinance-mortgage-2025",
  },
  {
    id: 18,
    title: "Index Funds vs ETFs: Which is Better in 2025?",
    excerpt:
      "Compare index funds and ETFs to decide which fits your investment goals in 2025.",
    category: "Investing",
    author: "Emily Johnson",
    readTime: "6 min",
    publishDate: "2025-03-15",
    slug: "index-funds-vs-etfs",
  },
  {
    id: 19,
    title: "How to Build Credit Fast in 2025",
    excerpt:
      "Need to boost your credit score quickly? Learn the fastest ways to build credit responsibly in 2025.",
    category: "Loans",
    author: "Sarah Collins",
    readTime: "5 min",
    publishDate: "2025-03-20",
    slug: "how-to-build-credit-fast-2025",
  },
  {
    id: 20,
    title: "Retirement Planning in 2025: What You Should Know",
    excerpt:
      "Plan your retirement effectively in 2025 with the latest strategies, savings options, and expert advice.",
    category: "Retirement",
    author: "Michael Brown",
    readTime: "7 min",
    publishDate: "2025-03-25",
    slug: "retirement-planning-2025",
  },
  {
    id: 21,
    title: "Insurance Planning Guide 2025",
    excerpt:
      "Understand the best insurance planning strategies for 2025, including health, life, and property coverage.",
    category: "Insurance",
    author: "Emily Johnson",
    readTime: "6 min",
    publishDate: "2025-03-28",
    slug: "insurance-planning-guide-2025",
  },
  {
    id: 22,
    title: "Investment Strategies for 2025",
    excerpt:
      "Explore the best investment strategies for 2025 to grow your wealth while minimizing risks.",
    category: "Investing",
    author: "CalcPortal Pro Research",
    readTime: "8 min",
    publishDate: "2025-03-30",
    slug: "investment-strategies-2025",
  },
];

// Attach images to blog posts
const blogPosts = rawBlogPosts.map((p) => ({
  ...p,
  image: `/images/blog/${slugToImage[p.slug] ?? `${p.slug}.jpg`}`,
}));

const categories = [
  "All",
  "Savings",
  "Loans",
  "Investing",
  "Education",
  "Real Estate",
  "Taxes",
  "Retirement",
  "Insurance",
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
