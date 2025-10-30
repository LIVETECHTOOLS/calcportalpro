import type { Metadata } from 'next'
import InvestmentCalculator from '@/components/calculators/InvestmentCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Investment Calculator',
  description:
    'Free investment calculator to estimate ROI, compound interest, and future value of investments. Supports stocks, real estate and withdrawals.',
  keywords:
    'investment calculator, return on investment calculator, stock investment calculator, real estate investment calculator, bitcoin investment calculator, compound investment calculator, monthly investment calculator, s&p 500 investment calculator, investment calculator with withdrawals, dave ramsey investment calculator, bankrate investment calculator, nerdwallet investment calculator',
  openGraph: {
    title: 'Investment Calculator',
    description:
      'Calculate investment returns, compound growth, and future portfolio value with our free online investment calculator. Supports stock, real estate, and crypto investments.',
    url: 'https://calcportalpro.com/calculators/investment',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator',
    description:
      'Estimate ROI and compound interest growth with our free investment calculator. Plan stock, real estate, and crypto investments with future value projections.',
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
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your investment returns and future portfolio value. 
              See how stocks, real estate, or crypto can grow over time with compound interest.
            </p>
          </div>

          {/* Calculator */}
          <InvestmentCalculator />

          {/* Educational Section */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Investment Planning
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Investment planning is crucial for building long-term wealth. Our investment calculator 
                helps you understand how your money can grow through various investment strategies 
                and time horizons.
              </p>

              <h3>Key Investment Concepts</h3>
              <ul>
                <li><strong>Compound Interest:</strong> Earnings on both principal and accumulated interest</li>
                <li><strong>Dollar-Cost Averaging:</strong> Investing fixed amounts regularly regardless of market conditions</li>
                <li><strong>Risk vs. Return:</strong> Higher potential returns typically come with higher risk</li>
                <li><strong>Diversification:</strong> Spreading investments across different asset classes</li>
                <li><strong>Time Horizon:</strong> Longer investment periods generally reduce risk</li>
              </ul>

              <h3>Investment Strategies</h3>
              <ul>
                <li><strong>Conservative:</strong> Focus on capital preservation with lower returns</li>
                <li><strong>Moderate:</strong> Balanced approach between growth and stability</li>
                <li><strong>Aggressive:</strong> Higher growth potential with increased volatility</li>
                <li><strong>Index Investing:</strong> Low-cost approach following market benchmarks</li>
                <li><strong>Value Investing:</strong> Finding undervalued companies with growth potential</li>
              </ul>

              <h3>Common Investment Mistakes</h3>
              <ul>
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

              <h3>Investment Account Types</h3>
              <ul>
                <li><strong>401(k):</strong> Employer-sponsored retirement plan with tax advantages</li>
                <li><strong>IRA:</strong> Individual retirement account with flexible investment options</li>
                <li><strong>Brokerage Account:</strong> Standard investment account for buying/selling securities</li>
                <li><strong>529 Plan:</strong> Tax-advantaged account for education expenses</li>
                <li><strong>Health Savings Account:</strong> Tax-free account for healthcare expenses</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-soft p-8" id="faq">
            <h2 className="text-2xl font-bold text-secondary-600 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="mb-6">
              <h3 className="font-semibold text-lg">What is an investment calculator?</h3>
              <p>
                An investment calculator helps you estimate how much your money could grow over time 
                with compound interest, based on initial investment, contributions, time horizon, 
                and expected rate of return.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg">Does this calculator include withdrawals?</h3>
              <p>
                Yes, you can account for regular withdrawals to see how they impact your long-term 
                investment growth and sustainability.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg">Can I use this for real estate or crypto?</h3>
              <p>
                Absolutely. While most examples use stocks, you can apply the same principles to 
                real estate, cryptocurrency, or any asset class with an expected rate of return.
              </p>
            </div>
          </div>

          {/* Related Calculators */}
          <div className="mt-16 bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-secondary-600 mb-6">
              Compare with Other Financial Calculators
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li>
                <Link href="/calculators/retirement" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">Retirement Calculator</h3>
                  <p>Estimate savings needed for retirement goals and income planning.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/savings" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">Savings Calculator</h3>
                  <p>Project compound growth of deposits and contributions.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/cd" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">CD Calculator</h3>
                  <p>Calculate fixed returns from certificates of deposit.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/mortgage" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">Mortgage Calculator</h3>
                  <p>Estimate monthly loan payments and amortization schedules.</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Structured Data (FAQ Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is an investment calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An investment calculator helps you estimate how much your money could grow over time with compound interest, based on initial investment, contributions, time horizon, and expected rate of return.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does this calculator include withdrawals?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, you can account for regular withdrawals to see how they impact your long-term investment growth and sustainability.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use this for real estate or crypto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. While most examples use stocks, you can apply the same principles to real estate, cryptocurrency, or any asset class with an expected rate of return.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
