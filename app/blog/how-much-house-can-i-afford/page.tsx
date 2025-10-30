import React from "react";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, DollarSign, Calculator, TrendingUp, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much House Can I Afford? Complete Guide for 2025 | CalcPortal Pro',
  description: 'Learn how to calculate how much house you can afford in 2025. Understand debt-to-income ratios, down payments, and use our mortgage calculator.',
  keywords: 'how much house can i afford, mortgage calculator, home affordability, debt to income ratio',
  openGraph: {
    title: 'How Much House Can I Afford? Complete Guide for 2025',
    description: 'Learn how to calculate how much house you can afford in 2025. Understand debt-to-income ratios, down payments, and use our mortgage calculator.',
    type: 'article',
    publishedTime: '2025-01-16T00:00:00.000Z',
    authors: ['CalcPortal Pro Team'],
  },
}

export default function HowMuchHouseCanIAfford() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-900">How Much House Can I Afford?</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          How Much House Can I Afford? Complete Guide for 2025
        </h1>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span>Published: January 16, 2025</span>
          <span>•</span>
          <span>Reading time: 10 min</span>
          <span>•</span>
          <span>By CalcPortal Pro Team</span>
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          One of the most critical questions in homebuying is determining how much house you can actually afford. 
          While lenders may approve you for a larger mortgage, it's essential to calculate a realistic budget that 
          won't leave you house-poor.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          The 28/36 Rule: Foundation of Home Affordability
        </h2>
        
        <p className="mb-6">
          Most financial experts follow the 28/36 rule, which provides a framework for determining how much house 
          you can afford based on your income and existing debt obligations.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">The 28/36 Rule Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-900">28% Rule</p>
              <p className="text-blue-800 text-sm">
                Your monthly housing costs should not exceed 28% of your gross monthly income.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-900">36% Rule</p>
              <p className="text-blue-800 text-sm">
                Your total monthly debt payments should not exceed 36% of your gross monthly income.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Key Factors That Determine Home Affordability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Gross Annual Income
            </h4>
            <p className="text-sm text-gray-700">
              Your total income before taxes and deductions. This includes salary, bonuses, commissions, and other income sources.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Down Payment
            </h4>
            <p className="text-sm text-gray-700">
              The amount you can put down upfront. A larger down payment reduces your loan amount and monthly payments.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Existing Debt
            </h4>
            <p className="text-sm text-gray-700">
              Current monthly debt payments including car loans, student loans, credit cards, and other obligations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Home className="w-5 h-5 text-purple-600" />
              Property Taxes & Insurance
            </h4>
            <p className="text-sm text-gray-700">
              Annual property taxes and homeowners insurance costs vary by location and property value.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Using Our Mortgage Calculator
        </h2>

        <p className="mb-6">
          Our comprehensive mortgage calculator can help you determine exactly how much house you can afford 
          by inputting your specific financial situation.
        </p>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">
            What Our Calculator Provides
          </h3>
          <ul className="space-y-2 text-primary-800">
            <li>• Maximum home price based on your income and debt</li>
            <li>• Monthly payment breakdown including taxes and insurance</li>
            <li>• Comparison of different down payment scenarios</li>
            <li>• Amortization schedule showing interest vs. principal</li>
            <li>• Affordability analysis based on the 28/36 rule</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Common Mistakes to Avoid
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Relying Only on Lender Approval</p>
              <p className="text-gray-700 text-sm">
                Lenders may approve you for more than you can comfortably afford. Always calculate your own budget.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Forgetting About Closing Costs</p>
              <p className="text-gray-700 text-sm">
                Closing costs typically range from 2-5% of the home price and must be paid upfront.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">Ignoring Future Expenses</p>
              <p className="text-gray-700 text-sm">
                Consider upcoming expenses like children's education, career changes, or medical costs.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          Conclusion
        </h2>

        <p className="mb-6">
          Determining how much house you can afford is a crucial step in the homebuying process that requires careful 
          consideration of multiple factors. While the 28/36 rule provides a solid foundation, your personal financial 
          situation, lifestyle preferences, and future goals should also guide your decision.
        </p>

        <p className="mb-8">
          Use our comprehensive mortgage calculator to get a detailed analysis of your home affordability, and don't 
          hesitate to consult with financial advisors or mortgage professionals to ensure you're making the right decision 
          for your financial future.
        </p>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-primary-900 mb-3">
            Ready to Calculate Your Home Affordability?
          </h3>
          <p className="text-primary-800 mb-4">
            Use our mortgage calculator to determine exactly how much house you can afford based on your income and debt.
          </p>
          <Link 
            href="/calculators/mortgage" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Try Our Mortgage Calculator
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
