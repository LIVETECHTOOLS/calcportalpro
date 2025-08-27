import type { Metadata } from 'next'
import TaxCalculator from '@/components/calculators/TaxCalculator'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'Tax Calculator - Calculate Your Tax Liability | CalcPortal Pro',
  description: 'Calculate your federal tax liability, effective tax rate, and take-home pay. Use our comprehensive tax calculator to estimate your taxes for 2024. Free, accurate, and easy to use.',
  keywords: 'tax calculator, federal tax calculator, income tax calculator, tax liability, effective tax rate, take-home pay calculator',
  openGraph: {
    title: 'Tax Calculator - Calculate Your Tax Liability | CalcPortal Pro',
    description: 'Calculate your federal tax liability, effective tax rate, and take-home pay. Use our comprehensive tax calculator to estimate your taxes for 2024.',
    url: 'https://calcportalpro.com/calculators/tax',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Calculator - Calculate Your Tax Liability | CalcPortal Pro',
    description: 'Calculate your federal tax liability, effective tax rate, and take-home pay. Use our comprehensive tax calculator to estimate your taxes for 2024.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/tax',
  },
}

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tax Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your federal tax liability, effective tax rate, and take-home pay. 
              Estimate your taxes for 2024 with our comprehensive tax calculator.
            </p>
          </div>

          <TaxCalculator />

          <AdUnit adSlot="6578933301" />

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Federal Income Taxes
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Federal income taxes are calculated using a progressive tax system where different 
                portions of your income are taxed at different rates. Understanding how your taxes 
                are calculated can help you make better financial decisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                2024 Tax Brackets (Single Filer)
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>10%:</strong> $0 to $11,600</li>
                <li><strong>12%:</strong> $11,601 to $47,150</li>
                <li><strong>22%:</strong> $47,151 to $100,525</li>
                <li><strong>24%:</strong> $100,526 to $191,950</li>
                <li><strong>32%:</strong> $191,951 to $243,725</li>
                <li><strong>35%:</strong> $243,726 to $609,350</li>
                <li><strong>37%:</strong> $609,351 and above</li>
              </ul>

              <AdUnit adSlot="6578933302" />

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Common Tax Deductions
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Standard Deduction:</strong> $14,600 for single filers, $29,200 for married filing jointly</li>
                <li><strong>Retirement Contributions:</strong> 401(k), IRA, and other qualified retirement plans</li>
                <li><strong>Health Savings Account:</strong> Contributions to HSA accounts</li>
                <li><strong>Student Loan Interest:</strong> Up to $2,500 in interest paid</li>
                <li><strong>Charitable Donations:</strong> Cash and non-cash contributions</li>
                <li><strong>State and Local Taxes:</strong> Up to $10,000 (SALT deduction)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Tax Planning Strategies
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Maximize Retirement Contributions:</strong> Reduce taxable income through 401(k) and IRA contributions</li>
                <li><strong>Tax-Loss Harvesting:</strong> Offset capital gains with investment losses</li>
                <li><strong>Charitable Giving:</strong> Donate appreciated assets for maximum tax benefit</li>
                <li><strong>Health Savings Accounts:</strong> Use HSA for triple tax advantage</li>
                <li><strong>Timing Income:</strong> Defer income to lower tax years when possible</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> Consider consulting with a tax professional for complex 
                  tax situations, especially if you have multiple income sources, business income, 
                  or significant investments.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Filing Status Options
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Single:</strong> Unmarried individuals</li>
                <li><strong>Married Filing Jointly:</strong> Married couples filing together</li>
                <li><strong>Married Filing Separately:</strong> Married couples filing separately</li>
                <li><strong>Head of Household:</strong> Unmarried individuals supporting dependents</li>
                <li><strong>Qualifying Widow(er):</strong> Surviving spouse with dependent children</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Important Tax Deadlines
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>April 15:</strong> Individual tax returns due (or next business day)</li>
                <li><strong>October 15:</strong> Extended filing deadline (with extension request)</li>
                <li><strong>Quarterly:</strong> Estimated tax payments for self-employed individuals</li>
                <li><strong>December 31:</strong> Year-end tax planning deadline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
