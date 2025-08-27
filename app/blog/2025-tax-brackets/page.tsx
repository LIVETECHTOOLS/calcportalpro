import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: '2025 Tax Brackets: Rates, Thresholds, and How to Plan | CalcPortal Pro',
  description: 'A complete guide to 2025 U.S. federal tax brackets. See rates and income thresholds, filing statuses, standard deduction, and tax planning strategies for 2025.',
  keywords: '2025 tax brackets, federal tax brackets 2025, tax rates 2025, standard deduction 2025, marginal tax rate, effective tax rate, tax planning 2025',
  openGraph: {
    title: '2025 Tax Brackets: Rates, Thresholds, and How to Plan',
    description: 'See the 2025 U.S. federal tax brackets, thresholds, standard deduction, and strategies to lower your tax bill.',
    type: 'article',
    url: 'https://calcportalpro.com/blog/2025-tax-brackets',
  },
  alternates: { canonical: 'https://calcportalpro.com/blog/2025-tax-brackets' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "2025 Tax Brackets: Rates, Thresholds, and How to Plan",
  "description": "A complete guide to 2025 U.S. federal tax brackets, thresholds, standard deduction, and planning tips.",
  "author": { "@type": "Organization", "name": "CalcPortal Pro" },
  "publisher": { "@type": "Organization", "name": "CalcPortal Pro" },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://calcportalpro.com/blog/2025-tax-brackets" },
  "articleSection": "Taxes",
  "keywords": "2025 tax brackets, tax rates 2025, standard deduction 2025, marginal tax rate"
};

export default function TaxBrackets2025() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> January 15, 2025</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 11 min read</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-1" /> CalcPortal Pro Team</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">2025 Tax Brackets: Rates, Thresholds, and How to Plan</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Understanding the 2025 tax brackets can help you estimate your tax bill, fine‑tune paycheck withholding, and make smarter year‑round decisions. This guide explains how marginal rates work, the 2025 thresholds by filing status, standard deduction amounts, and practical planning strategies to reduce taxes legally.
            </p>

            <AdUnit adSlot="6578932401" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2025 Federal Income Tax Brackets</h2>
            <p className="text-gray-700 mb-6">
              The U.S. tax system is progressive: portions of your income are taxed in layers. Your top bracket is your marginal rate, whereas your average across all brackets is your effective rate.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-6">
              <h4 className="font-semibold text-amber-900 mb-2">Example (Married Filing Jointly):</h4>
              <p className="text-amber-800 text-sm">If your taxable income is $120,000, part is taxed at 10%, then 12%, 22%, and so on—only the dollars within each band get the higher rate.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Standard Deduction for 2025</h2>
            <p className="text-gray-700 mb-6">Most filers claim the standard deduction rather than itemizing. For 2025, it increases with inflation adjustments. Compare itemized deductions only if they exceed your standard deduction.</p>

            <AdUnit adSlot="6578932402" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Planning Moves to Consider</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Max out retirement accounts (401(k), IRA, HSA) to reduce taxable income.</li>
              <li>Use tax‑loss harvesting in brokerage accounts to offset capital gains.</li>
              <li>Time bonuses and deductible expenses across tax years to manage brackets.</li>
              <li>Check paycheck withholding using the IRS estimator to avoid underpayment penalties.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Marginal vs. Effective Rate</h2>
            <p className="text-gray-700 mb-6">Your marginal rate is the rate on your last dollar earned; your effective rate is total tax divided by taxable income. Knowing both helps compare offers and plan cash flow.</p>

            <AdUnit adSlot="6578932403" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Next Steps</h2>
            <p className="text-gray-700 mb-8">Use our <Link href="/calculators/tax" className="text-amber-700 underline">tax calculator</Link> to estimate your 2025 taxes using your filing status, income, and deductions. Adjust contributions and withholding to align with your goals.</p>
          </div>
        </div>
      </div>
    </>
  );
}
