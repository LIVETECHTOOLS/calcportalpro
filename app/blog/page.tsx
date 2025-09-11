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

// ✅ Blog posts with images inline
const blogPosts = [
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
    image: "/images/blog/emergency-fund.jpg",
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
    image: "/images/blog/high-yield-savings.jpg",
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
    image: "/images/blog/house-afford.jpg",
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
    image: "/images/blog/cd-rates-2025.jpg",
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
    image: "/images/blog/canada-fpt-gst-2025.jpg",
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
    image: "/images/blog/types-of-loans.jpg",
  },
  {
    id: 7,
    title: "5 Tips for Building an Investment Portfolio in 2025",
    excerpt:
      "Learn key strategies for diversifying investments, balancing risk, and achieving long-term financial growth.",
    category: "Investing",
    author: "Michael Brown",
    readTime: "6 min",
    publishDate: "2025-01-25",
    slug: "5-tips-building-investment-portfolio",
    image: "/images/blog/investment-portfolio-tips.jpg",
  },
  {
    id: 8,
    title: "APR vs Interest Rate: What’s the Difference?",
    excerpt:
      "Understand the difference between APR and interest rates, and why APR gives you the true cost of borrowing.",
    category: "Loans",
    author: "Laura Green",
    readTime: "5 min",
    publishDate: "2025-01-28",
    slug: "apr-vs-interest-rate-difference",
    image: "/images/blog/apr-vs-interest-rate.jpg",
  },
  {
    id: 9,
    title: "How GPA Impacts College Admissions in 2025",
    excerpt:
      "Find out how your GPA is evaluated by colleges, and how it affects scholarships and admissions decisions.",
    category: "Education",
    author: "Dr. Robert White",
    readTime: "7 min",
    publishDate: "2025-02-01",
    slug: "how-gpa-impacts-college-admissions",
    image: "/images/blog/gpa-college-admissions-2025.jpg",
  },
  {
    id: 10,
    title: "Top Study Hacks to Improve Your GPA in 2025",
    excerpt:
      "Boost your GPA with these effective study hacks, time management tips, and productivity strategies.",
    category: "Education",
    author: "Anna Martinez",
    readTime: "6 min",
    publishDate: "2025-02-05",
    slug: "top-study-hacks-improve-gpa",
    image: "/images/blog/study-hacks-gpa-2025.jpg",
  },
  {
    id: 11,
    title: "Mortgage vs Rent: Which is Better in 2025?",
    excerpt:
      "Compare the financial and lifestyle impacts of renting versus buying a home in today’s housing market.",
    category: "Real Estate",
    author: "David Miller",
    readTime: "8 min",
    publishDate: "2025-02-08",
    slug: "mortgage-vs-rent-which-better",
    image: "/images/blog/mortgage-vs-rent.jpg",
  },
  {
    id: 12,
    title: "Tax Deductions for Small Business Owners in 2025",
    excerpt:
      "Discover the most valuable tax deductions for small business owners to reduce taxable income legally.",
    category: "Taxes",
    author: "Lisa Carter",
    readTime: "7 min",
    publishDate: "2025-02-12",
    slug: "tax-deductions-small-business-owners",
    image: "/images/blog/small-business-tax-deductions.jpg",
  },
  {
    id: 13,
    title: "2025 Tax Brackets Explained",
    excerpt:
      "Understand the new 2025 tax brackets, how they impact your income, and strategies for tax planning.",
    category: "Taxes",
    author: "CalcPortal Pro Research",
    readTime: "6 min",
    publishDate: "2025-02-15",
    slug: "2025-tax-brackets",
    image: "/images/blog/tax-brackets-2025.jpg",
  },
  {
    id: 14,
    title: "When Does Daylight Savings Time Start in 2025?",
    excerpt:
      "Mark your calendar! Find the exact date daylight savings time begins in 2025 and why it matters.",
    category: "Education",
    author: "John Wilson",
    readTime: "3 min",
    publishDate: "2025-02-20",
    slug: "when-does-daylight-savings-time-start",
    image: "/images/blog/daylight-savings-2025.jpg",
  },
  {
    id: 15,
    title: "Student Loans Guide 2025",
    excerpt:
      "Explore repayment plans, forgiveness programs, and strategies for managing student loan debt in 2025.",
    category: "Loans",
    author: "Emily Johnson",
    readTime: "10 min",
    publishDate: "2025-02-25",
    slug: "student-loans-guide-2025",
    image: "/images/blog/student-loans-2025.jpg",
  },
  {
    id: 16,
    title: "50/30/20 Rule Budgeting Guide for 2025",
    excerpt:
      "Master budgeting with the 50/30/20 rule to balance needs, wants, and savings effectively.",
    category: "Savings",
    author: "Sarah Collins",
    readTime: "5 min",
    publishDate: "2025-03-01",
    slug: "50-30-20-rule-budgeting-guide-2025",
    image: "/images/blog/budgeting-50-30-20-rule.jpg",
  },
  {
    id: 17,
    title: "When to Refinance Your Mortgage in 2025",
    excerpt:
      "Learn the best time to refinance your mortgage based on interest rates, credit score, and loan terms.",
    category: "Real Estate",
    author: "David Miller",
    readTime: "7 min",
    publishDate: "2025-03-05",
    slug: "when-to-refinance-mortgage-2025",
    image: "/images/blog/refinance-mortgage-2025.jpg",
  },
  {
    id: 18,
    title: "Index Funds vs ETFs: Which is Better in 2025?",
    excerpt:
      "Compare index funds and ETFs in terms of cost, flexibility, and long-term growth potential.",
    category: "Investing",
    author: "Michael Brown",
    readTime: "8 min",
    publishDate: "2025-03-10",
    slug: "index-funds-vs-etfs",
    image: "/images/blog/index-funds-vs-etfs.jpg",
  },
  {
    id: 19,
    title: "How to Build Credit Fast in 2025",
    excerpt:
      "Follow proven steps to build or repair your credit score quickly in 2025.",
    category: "Loans",
    author: "Laura Green",
    readTime: "6 min",
    publishDate: "2025-03-15",
    slug: "how-to-build-credit-fast-2025",
    image: "/images/blog/build-credit-fast-2025.jpg",
  },
  {
    id: 20,
    title: "Retirement Planning in 2025: What You Need to Know",
    excerpt:
      "Plan your retirement effectively by understanding savings strategies, Social Security updates, and market trends.",
    category: "Retirement",
    author: "CalcPortal Pro Research",
    readTime: "9 min",
    publishDate: "2025-03-20",
    slug: "retirement-planning-2025",
    image: "/images/blog/retirement-planning-2025.jpg",
  },
  {
    id: 21,
    title: "Insurance Planning Guide 2025",
    excerpt:
      "Learn the essentials of insurance planning, from life and health coverage to auto and home policies.",
    category: "Insurance",
    author: "Lisa Carter",
    readTime: "7 min",
    publishDate: "2025-03-25",
    slug: "insurance-planning-guide-2025",
    image: "/images/blog/insurance-guide-2025.jpg",
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
    image: "/images/blog/investment-strategies-2025.jpg",
  },
];

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
