import { Metadata } from 'next'
import CDCalculator from '../../../components/calculators/CDCalculator'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'CD Calculator - Calculate Certificate of Deposit Returns | CalcPortal Pro',
  description: 'Use our free CD calculator to compare different certificate of deposit terms, calculate returns, and plan your CD laddering strategy. Maximize your savings with competitive CD rates.',
  keywords: 'cd calculator, certificate of deposit calculator, cd rates calculator, cd laddering calculator, investment calculator',
  openGraph: {
    title: 'CD Calculator - Calculate Certificate of Deposit Returns',
    description: 'Use our free CD calculator to compare different certificate of deposit terms, calculate returns, and plan your CD laddering strategy.',
    type: 'website',
  },
}

export default function CDCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CD Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your certificate of deposit returns, compare different terms, and plan your CD laddering strategy. 
              Maximize your savings with competitive CD rates in 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Component */}
      <div className="py-8">
        <CDCalculator />
      </div>
      <AdUnit adSlot="6578933471" />

      {/* Educational Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Certificate of Deposits
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>What is a CD?</h3>
              <p>
                A Certificate of Deposit (CD) is a time deposit offered by banks and credit unions that pays a fixed 
                interest rate for a specified term. CDs are FDIC insured up to $250,000, making them one of the safest 
                investment options available.
              </p>

              <h3>How CD Rates Work</h3>
              <p>
                CD rates are typically higher than savings accounts because you're committing your money for a set period. 
                Longer terms usually offer higher rates, though this isn't always the case in inverted yield curve environments.
              </p>
              <AdUnit adSlot="6578933472" />

              <h3>CD Laddering Strategy</h3>
              <p>
                CD laddering involves investing in multiple CDs with different maturity dates. This strategy provides 
                regular access to your money while maximizing returns and reducing interest rate risk.
              </p>

              <h3>When to Use CDs</h3>
              <p>
                CDs are ideal for short-term goals (1-3 years), emergency fund supplements, conservative investment 
                strategies, and when you want to lock in attractive rates in a high-interest environment.
              </p>

              <h3>Key Considerations</h3>
              <ul>
                <li>Early withdrawal penalties can significantly reduce returns</li>
                <li>CDs are best for money you won't need immediately</li>
                <li>Shop around for the best rates between different banks</li>
                <li>Consider the impact of inflation on real returns</li>
                <li>Plan for reinvestment when CDs mature</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
