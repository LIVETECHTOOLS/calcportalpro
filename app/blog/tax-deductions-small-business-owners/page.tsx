import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Tax Deductions Every Small Business Owner Should Know | CalcPortal Pro',
  description: 'Discover essential tax deductions for small business owners in 2025. Learn about deductible expenses, planning strategies, and how to maximize tax savings.',
  keywords: 'tax deductions, small business tax, business deductions, tax planning, deductible expenses, business expenses, tax savings, small business tax tips, tax write-offs, business tax deductions, tax preparation, small business accounting, tax optimization, business tax planning',
  openGraph: {
    title: 'Tax Deductions Every Small Business Owner Should Know',
    description: 'Discover essential tax deductions for small business owners in 2025. Learn about deductible expenses, planning strategies, and how to maximize tax savings.',
    type: 'article',
    url: 'https://calcportalpro.com/blog/tax-deductions-small-business-owners',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center',
        width: 1200,
        height: 630,
        alt: 'Small business tax deductions and planning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Deductions Every Small Business Owner Should Know',
    description: 'Discover essential tax deductions for small business owners in 2025 and how to maximize savings.',
    images: ['https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center'],
  },
  alternates: {
    canonical: 'https://calcportalpro.com/blog/tax-deductions-small-business-owners',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tax Deductions Every Small Business Owner Should Know",
  "description": "Essential tax deductions for small business owners in 2025, including deductible expenses and planning strategies to maximize savings.",
  "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&crop=center",
  "author": {
    "@type": "Organization",
    "name": "CalcPortal Pro",
    "url": "https://calcportalpro.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CalcPortal Pro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://calcportalpro.com/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calcportalpro.com/blog/tax-deductions-small-business-owners"
  },
  "articleSection": "Small Business & Tax Planning",
  "keywords": "tax deductions, small business tax, business deductions, tax planning, deductible expenses, business expenses, tax savings, small business tax tips, tax write-offs, business tax deductions, tax preparation, small business accounting, tax optimization, business tax planning"
};

export default function TaxDeductionsSmallBusinessOwners() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                January 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                CalcPortal Pro Team
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Tax Deductions Every Small Business Owner Should Know
            </h1>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Tax Planning</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Small Business</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Deductions</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Finance</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Understanding tax deductions is crucial for small business owners who want to minimize their tax liability and maximize their profits. In 2025, with evolving tax rules and inflation pressures, knowing which expenses are deductible can make a significant difference in your business's bottom line. This guide covers the most impactful deductions, documentation rules, and strategic planning ideas to help you keep more of what you earn.
            </p>

            <AdUnit adSlot="6578932101" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Makes an Expense Deductible?</h2>
            <p className="text-gray-700 mb-6">
              To be deductible, a business expense must be ordinary, necessary, and directly related to your business. An ordinary expense is common and accepted in your industry. A necessary expense is helpful and appropriate for your business. The expense must also be reasonable in amount and properly documented.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
              <h4 className="font-semibold text-green-900 mb-2">Deductibility Checklist</h4>
              <ul className="text-green-800 space-y-1">
                <li>• Ordinary and necessary</li>
                <li>• Business-related</li>
                <li>• Reasonable amount</li>
                <li>• Properly documented</li>
                <li>• Compliant with IRS rules</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">High-Impact Deduction Categories</h2>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1) Home Office Deduction</h3>
            <p className="text-gray-700 mb-6">
              If you use part of your home exclusively and regularly for business, you may qualify. Choose between the simplified method or the regular method based on your records and potential deduction size.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2) Equipment and Technology (Section 179 & Bonus Depreciation)</h3>
            <p className="text-gray-700 mb-6">
              Deduct qualifying equipment in the year of purchase up to annual limits, or depreciate over time. This includes computers, office furniture, and certain software.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3) Vehicle Expenses</h3>
            <p className="text-gray-700 mb-6">
              Track business mileage or actual expenses. Maintain a mileage log with date, purpose, and miles to substantiate your deduction.
            </p>

            <AdUnit adSlot="6578932102" />

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4) Wages, Contractors, and Payroll Taxes</h3>
            <p className="text-gray-700 mb-6">
              Wages, benefits, and payroll taxes are deductible. Issue Form 1099-NEC for contractors paid $600+.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5) Rent, Utilities, and Insurance</h3>
            <p className="text-gray-700 mb-6">
              Office rent, utilities, business insurance, and internet/phone services are deductible when used for business.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6) Marketing and Professional Services</h3>
            <p className="text-gray-700 mb-6">
              Deduct website costs, ads, design, accounting, legal, and consulting fees that support operations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Documentation & Common Pitfalls</h2>
            <p className="text-gray-700 mb-6">
              Keep receipts, invoices, bank/credit statements, and written business purposes. Avoid mixing personal and business expenses. For meals, record the business purpose and attendees; only 50% is generally deductible.
            </p>

            <AdUnit adSlot="6578932103" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tax Planning Strategies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Time income/expenses across years based on expected tax brackets</li>
              <li>Consider S-Corp election if appropriate to optimize self-employment taxes</li>
              <li>Maximize retirement contributions (SEP IRA, Solo 401(k))</li>
              <li>Use accountable plans for employee reimbursements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-8">
              Properly leveraging tax deductions can significantly lower your tax bill while keeping you compliant. Work with a qualified tax professional and maintain strong documentation to ensure you maximize savings. Use our <Link href="/calculators/tax" className="text-green-600 hover:text-green-800 underline">tax calculator</Link> to estimate your liability and model scenarios.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
