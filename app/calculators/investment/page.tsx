import type { Metadata } from 'next'
import InvestmentCalculator from '@/components/calculators/InvestmentCalculator'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'Investment Calculator - Plan Your Investment Strategy | CalcPortal Pro',
  description: 'Calculate investment returns, portfolio growth, and plan your investment strategy. Use our comprehensive investment calculator to project your financial future. Free, accurate, and easy to use.',
  keywords: 'investment calculator, portfolio calculator, investment returns, compound interest, investment planning, financial calculator',
  openGraph: {
    title: 'Investment Calculator - Plan Your Investment Strategy | CalcPortal Pro',
    description: 'Calculate investment returns, portfolio growth, and plan your investment strategy. Use our comprehensive investment calculator to project your financial future.',
    url: 'https://calcportalpro.com/calculators/investment',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator - Plan Your Investment Strategy | CalcPortal Pro',
    description: 'Calculate investment returns, portfolio growth, and plan your investment strategy. Use our comprehensive investment calculator to project your financial future.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/investment',
  },
}

export default function InvestmentCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan your investment strategy and project your portfolio growth. 
              See how your investments can grow over time with compound returns.
            </p>
          </div>

          <InvestmentCalculator />

          <AdUnit adSlot="6578933201" />

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Investment Planning
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Investment planning is crucial for building long-term wealth. Our investment calculator 
                helps you understand how your money can grow through various investment strategies 
                and time horizons.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Key Investment Concepts
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Compound Interest:</strong> Earnings on both principal and accumulated interest</li>
                <li><strong>Dollar-Cost Averaging:</strong> Investing fixed amounts regularly regardless of market conditions</li>
                <li><strong>Risk vs. Return:</strong> Higher potential returns typically come with higher risk</li>
                <li><strong>Diversification:</strong> Spreading investments across different asset classes</li>
                <li><strong>Time Horizon:</strong> Longer investment periods generally reduce risk</li>
              </ul>

              <AdUnit adSlot="6578933202" />

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Investment Strategies
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Conservative:</strong> Focus on capital preservation with lower returns</li>
                <li><strong>Moderate:</strong> Balanced approach between growth and stability</li>
                <li><strong>Aggressive:</strong> Higher growth potential with increased volatility</li>
                <li><strong>Index Investing:</strong> Low-cost approach following market benchmarks</li>
                <li><strong>Value Investing:</strong> Finding undervalued companies with growth potential</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Common Investment Mistakes
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Investing without a clear plan or goals</li>
                <li>Letting emotions drive investment decisions</li>
                <li>Not diversifying your portfolio</li>
                <li>Timing the market instead of time in the market</li>
                <li>Ignoring fees and expenses</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> Start investing early and consistently. Even small regular 
                  investments can grow significantly over time due to compound interest.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Investment Account Types
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>401(k):</strong> Employer-sponsored retirement plan with tax advantages</li>
                <li><strong>IRA:</strong> Individual retirement account with flexible investment options</li>
                <li><strong>Brokerage Account:</strong> Standard investment account for buying/selling securities</li>
                <li><strong>529 Plan:</strong> Tax-advantaged account for education expenses</li>
                <li><strong>Health Savings Account:</strong> Tax-free account for healthcare expenses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
