import { Metadata } from 'next';
import CompoundInterestCalculator from '@/components/calculators/CompoundInterestCalculator';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator',
  description:
    'Free compound interest calculator to see how your money grows daily, monthly, or annually. Calculate 401k, Roth IRA, CD, and retirement compound interest. Easy online tool with instant results.',
  keywords: [
    'compound interest calculator',
    'daily compound interest calculator',
    'monthly compound interest calculator',
    'continuous compound interest calculator',
    'annual compound interest calculator',
    '401k compound interest calculator',
    'roth IRA compound interest calculator',
    'cd compound interest calculator',
    'bankrate compound interest calculator',
    'nerdwallet compound interest calculator',
    'compound interest calculator with withdrawals',
    'compound interest calculator excel',
    'compound interest calculator india',
    'compound interest calculator retirement',
  ],
  openGraph: {
    title: 'Compound Interest Calculator',
    description:
      'Free online compound interest calculator to calculate daily, monthly, and annual growth. See how your investments grow with 401k, Roth IRA, CDs, and retirement compounding.',
    url: 'https://calcportalpro.com/calculators/compound-interest',
  },
  alternates: {
    canonical: '/calculators/compound-interest',
  },
};

export default function CompoundInterestPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Compound Interest Calculator
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate compound interest daily, monthly, or annually. See how your savings, 401k, Roth IRA, or CD investment can grow over time with our free online calculator.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <CompoundInterestCalculator />
        </div>

        {/* Educational Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">
              Understanding Compound Interest
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-100 mb-4">
                Compound interest is the interest earned on both the initial principal and the accumulated interest from previous periods. It's often called "interest on interest" and can significantly boost your investment returns over time.
              </p>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                How Compound Interest Works
              </h3>
              <p className="text-secondary-100 mb-4">
                When you invest money, you earn interest on your initial investment. In the next period, you earn interest not only on your original amount but also on the interest you earned. This creates a snowball effect that accelerates your wealth growth.
              </p>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Key Factors Affecting Compound Interest
              </h3>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li><strong>Principal Amount:</strong> The initial amount you invest</li>
                <li><strong>Interest Rate:</strong> The annual interest rate (APR)</li>
                <li><strong>Time Period:</strong> How long you keep your money invested</li>
                <li><strong>Compounding Frequency:</strong> Daily, monthly, annually, or continuously</li>
              </ul>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Example Calculation
              </h3>
              <p className="text-secondary-100 mb-4">
                If you invest $10,000 at a 7% annual interest rate compounded monthly for 10 years, your investment would grow to approximately $20,096. The power of compound interest added $10,096 to your original investment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
