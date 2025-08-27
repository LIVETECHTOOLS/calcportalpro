import { Metadata } from 'next';
import CompoundInterestCalculator from '@/components/calculators/CompoundInterestCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator - Calculate Investment Growth | CalcPortal Pro',
  description: 'Free compound interest calculator to see how your investments grow over time. Calculate compound interest with our easy-to-use tool. Plan your financial future today.',
  keywords: 'compound interest calculator, investment calculator, interest calculator, compound growth calculator, financial calculator',
  openGraph: {
    title: 'Compound Interest Calculator - Calculate Investment Growth | CalcPortal Pro',
    description: 'Free compound interest calculator to see how your investments grow over time. Calculate compound interest with our easy-to-use tool.',
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
            See how your investments grow over time with compound interest. Calculate the future value of your money with our free, easy-to-use calculator.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <CompoundInterestCalculator />
        </div>

        <AdUnit adSlot="6578933501" />

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
                <li><strong>Compounding Frequency:</strong> How often interest is calculated (daily, monthly, annually)</li>
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

        <AdUnit adSlot="6578933502" />
      </div>
    </div>
  );
}
