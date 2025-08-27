import { Metadata } from 'next'
import RothIRACalculator from '../../../components/calculators/RothIRACalculator'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'Roth IRA Calculator - Calculate Retirement Savings & Tax Benefits | CalcPortal Pro',
  description: 'Use our free Roth IRA calculator to estimate your retirement savings, understand tax benefits, and plan your long-term investment strategy. Calculate compound growth and tax-free withdrawals.',
  keywords: 'roth ira calculator, retirement calculator, roth ira contributions, retirement savings calculator, tax-free growth calculator',
  openGraph: {
    title: 'Roth IRA Calculator - Calculate Retirement Savings & Tax Benefits',
    description: 'Use our free Roth IRA calculator to estimate your retirement savings, understand tax benefits, and plan your long-term investment strategy.',
    type: 'website',
  },
}

export default function RothIRACalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Roth IRA Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your Roth IRA retirement savings potential, understand tax benefits, and plan your long-term 
              investment strategy. See how tax-free growth can accelerate your retirement goals.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Component */}
      <div className="py-8">
        <RothIRACalculator />
      </div>
      <AdUnit adSlot="6578933441" />

      {/* Educational Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Roth IRAs
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>What is a Roth IRA?</h3>
              <p>
                A Roth IRA is a retirement savings account that offers tax-free growth and tax-free withdrawals in 
                retirement. Unlike traditional IRAs, you contribute after-tax dollars, but your investments grow 
                tax-free and qualified withdrawals are completely tax-free.
              </p>

              <h3>Key Benefits of Roth IRAs</h3>
              <ul>
                <li><strong>Tax-Free Growth:</strong> Your investments compound without annual tax drag</li>
                <li><strong>Tax-Free Withdrawals:</strong> Qualified distributions are completely tax-free</li>
                <li><strong>No Required Minimum Distributions:</strong> You can leave money in the account indefinitely</li>
                <li><strong>Flexible Contributions:</strong> You can withdraw contributions (not earnings) at any time</li>
                <li><strong>Estate Planning Benefits:</strong> Tax-free inheritance for beneficiaries</li>
              </ul>

              <h3>Contribution Limits</h3>
              <p>
                For 2025, the annual contribution limit is $7,000 for individuals under 50 and $8,000 for those 50 and older. 
                These limits apply to all your IRAs combined, not per account.
              </p>
              <AdUnit adSlot="6578933442" />

              <h3>Income Limits</h3>
              <p>
                Roth IRA contributions are subject to income limits. For 2025, single filers can contribute the full amount 
                if their modified adjusted gross income is under $146,000, with reduced contributions up to $161,000.
              </p>

              <h3>When to Choose a Roth IRA</h3>
              <p>
                Roth IRAs are ideal for young investors in lower tax brackets, those who expect higher taxes in retirement, 
                and anyone who wants tax-free income in retirement. They're particularly valuable for long-term growth due 
                to the power of tax-free compounding.
              </p>

              <h3>Investment Strategy</h3>
              <p>
                Since Roth IRAs offer tax-free growth, they're excellent for high-growth investments like stocks and equity 
                funds. The longer your time horizon, the more valuable the tax-free compounding becomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
