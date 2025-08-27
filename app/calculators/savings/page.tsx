import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calculator, PiggyBank, TrendingUp, Target } from 'lucide-react';
import SavingsCalculator from '@/components/calculators/SavingsCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Savings Calculator - Calculate Interest & Growth | CalcPortal Pro',
  description: 'Free savings calculator to compute compound interest, savings growth, and financial goals. Plan your savings strategy with our accurate compound interest calculator.',
  keywords: 'savings calculator, compound interest calculator, savings growth calculator, financial planning calculator, investment calculator, compound interest',
  openGraph: {
    title: 'Savings Calculator - Calculate Interest & Growth | CalcPortal Pro',
    description: 'Free savings calculator to compute compound interest, savings growth, and financial goals. Plan your savings strategy with our accurate compound interest calculator.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/savings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savings Calculator - Calculate Interest & Growth | CalcPortal Pro',
    description: 'Free savings calculator to compute compound interest, savings growth, and financial goals. Plan your savings strategy with our accurate compound interest calculator.',
  },
};

export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <Link 
            href="/calculators" 
            className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculators
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-600 mb-4">
              Savings Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate compound interest, savings growth, and plan your financial future 
              with our comprehensive savings calculator. Understand how time and interest work for you.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <SavingsCalculator />
          </div>

          <AdUnit adSlot="6578933461" />

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Savings and Compound Interest
            </h2>
            
            <p className="text-gray-700 mb-6">
              Saving money is one of the most fundamental financial habits, but understanding 
              how compound interest works can transform your approach to wealth building. 
              Compound interest is often called the "eighth wonder of the world" because it 
              allows your money to work for you, generating earnings on both your principal 
              and accumulated interest.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              How Compound Interest Works
            </h3>
            <p className="text-gray-700 mb-6">
              Compound interest occurs when you earn interest not only on your initial 
              investment (principal) but also on the accumulated interest from previous periods. 
              This creates a snowball effect where your savings grow faster over time, especially 
              when you have a long investment horizon.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Key Savings Concepts
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Principal:</strong> The initial amount of money you invest or save</li>
              <li><strong>Interest Rate:</strong> The percentage return on your investment</li>
              <li><strong>Compounding Frequency:</strong> How often interest is calculated and added</li>
              <li><strong>Time Horizon:</strong> The length of time your money is invested</li>
              <li><strong>Regular Contributions:</strong> Additional money added periodically</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Types of Savings Accounts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Traditional Savings</h4>
                <p className="text-gray-700 mb-3">
                  Basic savings accounts with low interest rates but high liquidity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 0.01% - 0.50%</li>
                  <li>• FDIC insured up to $250,000</li>
                  <li>• Easy access to funds</li>
                  <li>• No minimum balance requirements</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">High-Yield Savings</h4>
                <p className="text-gray-700 mb-3">
                  Online savings accounts offering higher interest rates than traditional banks.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 3% - 5%</li>
                  <li>• FDIC insured</li>
                  <li>• Online-only access</li>
                  <li>• May have minimum balance requirements</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Money Market Accounts</h4>
                <p className="text-gray-700 mb-3">
                  Hybrid accounts combining features of savings and checking accounts.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 2% - 4%</li>
                  <li>• Check-writing privileges</li>
                  <li>• Higher minimum balance requirements</li>
                  <li>• Limited monthly transactions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Certificates of Deposit (CDs)</h4>
                <p className="text-gray-700 mb-3">
                  Time deposits with fixed interest rates and maturity dates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 3% - 5%</li>
                  <li>• Fixed terms (3 months to 5 years)</li>
                  <li>• Early withdrawal penalties</li>
                  <li>• Higher rates for longer terms</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              The Power of Compound Interest
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Time is Your Greatest Ally
                </h4>
                <p className="text-gray-700">
                  The longer you save, the more dramatic the effect of compound interest becomes. 
                  Starting early, even with small amounts, can lead to significant wealth over time. 
                  For example, saving $100 per month at 7% interest for 30 years results in over $122,000.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Regular Contributions Amplify Growth
                </h4>
                <p className="text-gray-700">
                  Consistent monthly or annual contributions can dramatically increase your final 
                  savings amount. Even small regular contributions can add up to substantial sums 
                  over long periods due to compound interest.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Interest Rate Impact
                </h4>
                <p className="text-gray-700">
                  Small differences in interest rates can have enormous impacts over time. 
                  A 1% higher interest rate can result in significantly more money over decades 
                  of saving and investing.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Savings Strategies
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Start Early:</strong> Begin saving as soon as possible to maximize compound interest</li>
              <li><strong>Automate Savings:</strong> Set up automatic transfers to make saving effortless</li>
              <li><strong>Increase Contributions:</strong> Gradually increase your savings rate over time</li>
              <li><strong>Diversify Accounts:</strong> Use different types of accounts for different goals</li>
              <li><strong>Reinvest Interest:</strong> Allow interest to compound rather than withdrawing it</li>
              <li><strong>Regular Reviews:</strong> Periodically assess and adjust your savings strategy</li>
            </ol>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg my-8">
              <h4 className="text-xl font-semibold text-accent-800 mb-3">
                Pro Tip: The Rule of 72
              </h4>
              <p className="text-accent-700">
                Use the Rule of 72 to quickly estimate how long it takes for your money to double: 
                Divide 72 by your annual interest rate. For example, at 7% interest, your money 
                will double in approximately 10.3 years (72 ÷ 7 = 10.3).
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common Savings Mistakes to Avoid
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Not Starting Early:</strong> Delaying savings significantly reduces compound interest benefits</li>
              <li><strong>Keeping Too Much in Low-Interest Accounts:</strong> Inflation can erode purchasing power</li>
              <li><strong>Frequent Withdrawals:</strong> Interrupting compound growth reduces long-term returns</li>
              <li><strong>Ignoring Inflation:</strong> Real returns are what matter for long-term goals</li>
              <li><strong>Not Automating:</strong> Manual saving is less reliable than automatic transfers</li>
              <li><strong>Focusing Only on Interest:</strong> Regular contributions often matter more than rates</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              When to Use Different Savings Vehicles
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Emergency Fund
                </h4>
                <p className="text-gray-700">
                  Use high-yield savings accounts for emergency funds. You need quick access 
                  to funds, but want to earn some interest while maintaining liquidity.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Short-Term Goals (1-3 years)
                </h4>
                <p className="text-gray-700">
                  High-yield savings accounts or money market accounts are ideal for 
                  short-term goals like vacations, down payments, or major purchases.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Medium-Term Goals (3-10 years)
                </h4>
                <p className="text-gray-700">
                  Consider CDs or conservative investment options for medium-term goals, 
                  balancing growth potential with capital preservation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Long-Term Goals (10+ years)
                </h4>
                <p className="text-gray-700">
                  For long-term goals like retirement, consider investment accounts that 
                  offer higher growth potential, accepting some risk for higher returns.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Inflation and Real Returns
            </h3>
            <p className="text-gray-700 mb-6">
              When planning your savings strategy, consider inflation's impact on purchasing power. 
              If your savings earn 2% interest but inflation is 3%, you're actually losing 
              purchasing power. This is why it's important to seek returns that at least keep 
              pace with inflation, and ideally exceed it for long-term growth.
            </p>

            <p className="text-gray-700 mb-8">
              Understanding compound interest and developing a disciplined savings strategy 
              are fundamental to building long-term wealth. Use our savings calculator to 
              explore different scenarios, understand the impact of time and interest rates, 
              and create a savings plan that aligns with your financial goals. Remember, 
              the best time to start saving was yesterday, and the second-best time is today.
            </p>
          </div>
        </div>

        <AdUnit adSlot="6578933462" />
      </div>
    </div>
  );
}
