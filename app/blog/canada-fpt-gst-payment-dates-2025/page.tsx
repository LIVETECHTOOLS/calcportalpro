import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, DollarSign, Calculator, AlertTriangle, CheckCircle } from 'lucide-react'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'Canada FPT & GST Payment Dates 2025: Complete Guide | CalcPortal Pro',
  description: 'Stay updated with Canada FPT and GST payment dates for 2025. Learn about eligibility, payment amounts, and how to calculate your benefits.',
  keywords: 'canada fpt, gst payment dates 2025, canada tax credits, gst hst credit, canada benefits, tax calculator',
  openGraph: {
    title: 'Canada FPT & GST Payment Dates 2025: Complete Guide',
    description: 'Stay updated with Canada FPT and GST payment dates for 2025. Learn about eligibility, payment amounts, and how to calculate your benefits.',
    type: 'article',
    publishedTime: '2025-01-18T00:00:00.000Z',
    authors: ['CalcPortal Pro Team'],
  },
}

export default function CanadaFPTGSTGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-900">Canada FPT & GST Payment Dates 2025</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Canada FPT & GST Payment Dates 2025: Complete Guide
        </h1>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span>Published: January 18, 2025</span>
          <span>•</span>
          <span>Reading time: 8 min</span>
          <span>•</span>
          <span>By CalcPortal Pro Team</span>
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Understanding Canada's tax credit system is crucial for maximizing your benefits. The Federal Poverty Tax Credit (FPT) 
          and Goods and Services Tax/Harmonized Sales Tax (GST/HST) Credit provide significant financial relief to eligible 
          Canadians. This comprehensive guide covers the 2025 payment dates, eligibility requirements, and how to calculate 
          your benefits using our tax calculator.
        </p>

        <AdUnit adSlot="6578932741" />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          What is the Canada FPT (Federal Poverty Tax Credit)?
        </h2>
        
        <p className="mb-6">
          The Federal Poverty Tax Credit is a refundable tax credit designed to help low-income Canadians reduce their 
          federal tax burden. This credit is calculated based on your family income and provides additional support beyond 
          the basic personal amount.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">FPT Key Features</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Refundable tax credit for low-income individuals</li>
            <li>• Based on family income and size</li>
            <li>• Reduces federal tax payable</li>
            <li>• Available to all eligible Canadians</li>
            <li>• Automatically calculated when filing taxes</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          What is the GST/HST Credit?
        </h2>

        <p className="mb-6">
          The GST/HST Credit is a quarterly payment that helps offset the cost of the Goods and Services Tax and 
          Harmonized Sales Tax for low and modest-income individuals and families. This credit is particularly 
          important for those on fixed incomes or with limited disposable income.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-green-900 mb-3">GST/HST Credit Benefits</h3>
          <ul className="space-y-2 text-green-800">
            <li>• Quarterly payments throughout the year</li>
            <li>• Helps offset consumption taxes</li>
            <li>• Based on family income and size</li>
            <li>• Automatically calculated and distributed</li>
            <li>• No application required if you file taxes</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          GST/HST Payment Dates for 2025
        </h2>

        <p className="mb-6">
          The GST/HST Credit is distributed quarterly throughout the year. Here are the exact payment dates for 2025:
        </p>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2025 GST/HST Payment Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-2 text-gray-700 font-medium">Payment Period</th>
                  <th className="text-right py-2 px-2 text-gray-700 font-medium">Payment Date</th>
                  <th className="text-left py-2 px-2 text-gray-700 font-medium">Tax Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 text-gray-900">January 2025</td>
                  <td className="py-2 px-2 text-right text-gray-900 font-semibold">January 3, 2025</td>
                  <td className="py-2 px-2 text-gray-700">Based on 2023 tax return</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 text-gray-900">April 2025</td>
                  <td className="py-2 px-2 text-right text-gray-900 font-semibold">April 3, 2025</td>
                  <td className="py-2 px-2 text-gray-700">Based on 2023 tax return</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 text-gray-900">July 2025</td>
                  <td className="py-2 px-2 text-right text-gray-900 font-semibold">July 3, 2025</td>
                  <td className="py-2 px-2 text-gray-700">Based on 2023 tax return</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 text-gray-900">October 2025</td>
                  <td className="py-2 px-2 text-right text-gray-900 font-semibold">October 3, 2025</td>
                  <td className="py-2 px-2 text-gray-700">Based on 2023 tax return</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            <strong>Note:</strong> Payment dates may vary by 1-2 business days if the scheduled date falls on a weekend or holiday.
          </p>
        </div>

        <AdUnit adSlot="6578932742" />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Eligibility Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Basic Requirements
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Canadian resident for tax purposes</li>
              <li>• 19 years or older (or under 19 with spouse/common-law partner)</li>
              <li>• Filed income tax return</li>
              <li>• Meet income thresholds</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Income Limits
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Single: $52,000 or less</li>
              <li>• Married/Common-law: $52,000 or less</li>
              <li>• With children: $52,000 or less</li>
              <li>• Benefits reduced as income increases</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          How to Calculate Your Benefits
        </h2>

        <p className="mb-6">
          Understanding how your benefits are calculated can help you plan your finances better. Both credits use 
          similar calculation methods based on your family income and size.
        </p>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">GST/HST Credit Calculation Formula</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Base Amounts (2025):</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Single person: $496</li>
                <li>• Married/Common-law partner: $650</li>
                <li>• Each child under 19: $171</li>
                <li>• Each child 19+ (full-time student): $171</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Reduction Rate:</p>
              <p className="text-sm text-gray-700">5% of family net income above $52,000</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Example Calculation:</p>
              <p className="text-sm text-gray-700">
                Family of 4 with $45,000 income: $650 + $171 + $171 = $992 (no reduction)
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Using Our Tax Calculator
        </h2>

        <p className="mb-6">
          Our comprehensive tax calculator can help you estimate your FPT and GST/HST credits based on your specific 
          financial situation.
        </p>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">
            What Our Tax Calculator Provides
          </h3>
          <ul className="space-y-2 text-primary-800">
            <li>• Estimate FPT credit amount</li>
            <li>• Calculate GST/HST credit payments</li>
            <li>• Account for family size and income</li>
            <li>• Compare different income scenarios</li>
            <li>• Plan for quarterly payments</li>
            <li>• Understand tax credit interactions</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Important Deadlines and Filing Requirements
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">File Your Tax Return</h4>
              <p className="text-gray-700">
                You must file your income tax return to receive these credits. The deadline is typically April 30th 
                of the following year.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Update Personal Information</h4>
              <p className="text-gray-700">
                Notify the CRA of any changes to your marital status, address, or family composition to ensure 
                accurate benefit calculations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Set Up Direct Deposit</h4>
              <p className="text-gray-700">
                Enroll in direct deposit to receive your payments faster and avoid potential mail delays.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Monitor Your Account</h4>
              <p className="text-gray-700">
                Check your CRA My Account regularly to track payments and ensure you're receiving the correct amounts.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Common Issues and Solutions
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Missing Payments</p>
              <p className="text-gray-700 text-sm">
                If you don't receive a payment, check your CRA My Account first, then contact the CRA if needed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Incorrect Payment Amounts</p>
              <p className="text-gray-700 text-sm">
                Verify your income and family information. Errors in your tax return can affect benefit calculations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Address Changes</p>
              <p className="text-gray-700 text-sm">
                Update your address with the CRA immediately to avoid missing payments or important notices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Marital Status Changes</p>
              <p className="text-gray-700 text-sm">
                Notify the CRA within 90 days of marriage, divorce, or separation to maintain accurate benefits.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Maximizing Your Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">File Taxes Annually</h4>
            <p className="text-sm text-gray-700">
              Even if you have no income to report, filing ensures you receive all eligible credits and benefits.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Claim All Dependents</h4>
            <p className="text-sm text-gray-700">
              Include all eligible children and dependents on your tax return to maximize your credit amounts.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Use Direct Deposit</h4>
            <p className="text-sm text-gray-700">
              Enroll in direct deposit for faster, more reliable payments and easier tracking.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Monitor Your Account</h4>
            <p className="text-sm text-gray-700">
              Regularly check your CRA My Account to ensure accurate information and track all payments.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Do I need to apply for these credits?</h4>
            <p className="text-gray-700">
              No, these credits are automatically calculated when you file your income tax return. No separate 
              application is required.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">What if I miss a payment?</h4>
            <p className="text-gray-700">
              Contact the CRA if you miss a payment. They can investigate and issue a replacement payment if needed.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Can I receive these credits if I'm self-employed?</h4>
            <p className="text-gray-700">
              Yes, self-employed individuals are eligible as long as they file their tax return and meet income requirements.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">How do I update my banking information?</h4>
            <p className="text-gray-700">
              Update your direct deposit information through CRA My Account or by calling the CRA directly.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-2">What happens if my income changes during the year?</h4>
            <p className="text-gray-700">
              Your benefits are based on your previous year's tax return. Changes will be reflected in the following year.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Conclusion
        </h2>

        <p className="mb-6">
          Understanding Canada's FPT and GST/HST credit system is essential for maximizing your tax benefits. 
          These credits provide significant financial support to eligible Canadians throughout the year.
        </p>

        <p className="mb-6">
          By staying informed about payment dates, understanding eligibility requirements, and using our tax 
          calculator to estimate your benefits, you can better plan your finances and ensure you receive all 
          credits you're entitled to.
        </p>

        <p className="mb-8">
          Remember to file your taxes annually, keep your information updated with the CRA, and monitor your 
          account regularly. Use our comprehensive tax calculator to estimate your benefits and plan for the 
          quarterly GST/HST payments.
        </p>

        <AdUnit adSlot="6578932743" />

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">
            Ready to Calculate Your Tax Credits?
          </h3>
          <p className="text-primary-800 mb-4">
            Use our tax calculator to estimate your FPT and GST/HST credits based on your income and family situation.
          </p>
          <Link 
            href="/calculators/tax" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Try Our Tax Calculator
          </Link>
        </div>
      </article>

      <div className="mt-12 text-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
