import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calculator, DollarSign, TrendingUp, Clock } from 'lucide-react';
import LoanCalculator from '@/components/calculators/LoanCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Loan Calculator - Calculate Loan Payments & Interest | CalcPortal Pro',
  description: 'Free loan calculator to compute monthly payments, total interest, and loan costs. Calculate personal loans, auto loans, and business loans with our accurate loan payment calculator.',
  keywords: 'loan calculator, loan payment calculator, personal loan calculator, auto loan calculator, business loan calculator, loan interest calculator, monthly payment calculator',
  openGraph: {
    title: 'Loan Calculator - Calculate Loan Payments & Interest | CalcPortal Pro',
    description: 'Free loan calculator to compute monthly payments, total interest, and loan costs. Calculate personal loans, auto loans, and business loans.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/loan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Calculator - Calculate Loan Payments & Interest | CalcPortal Pro',
    description: 'Free loan calculator to compute monthly payments, total interest, and loan costs. Calculate personal loans, auto loans, and business loans.',
  },
};

export default function LoanPage() {
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
              Loan Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your loan payments, total interest, and loan costs with our comprehensive 
              loan calculator. Plan your borrowing strategy and understand the true cost of loans.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <LoanCalculator />
          </div>

          <AdUnit adSlot="6578933101" />

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Loan Calculations
            </h2>
            
            <p className="text-gray-700 mb-6">
              Loans are financial instruments that allow you to borrow money for various purposes, 
              from purchasing a home to financing education or starting a business. Understanding 
              how loans work and how to calculate payments is essential for making informed 
              financial decisions.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              How Loan Payments Are Calculated
            </h3>
            <p className="text-gray-700 mb-6">
              Loan payments are calculated using the amortization formula, which considers the 
              principal amount, interest rate, and loan term. The formula ensures that each 
              payment covers both interest and principal, with the proportion shifting over time.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Key Loan Components
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Principal:</strong> The original amount borrowed</li>
              <li><strong>Interest Rate:</strong> The cost of borrowing, expressed as a percentage</li>
              <li><strong>Loan Term:</strong> The length of time to repay the loan</li>
              <li><strong>Monthly Payment:</strong> The amount due each month</li>
              <li><strong>Total Interest:</strong> The total cost of borrowing over the loan term</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Types of Loans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Personal Loans</h4>
                <p className="text-gray-700 mb-3">
                  Unsecured loans for various purposes like debt consolidation, home improvement, 
                  or major purchases.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 6% - 36%</li>
                  <li>• Terms: 1-7 years</li>
                  <li>• No collateral required</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Auto Loans</h4>
                <p className="text-gray-700 mb-3">
                  Secured loans specifically for purchasing vehicles, with the car as collateral.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 3% - 20%</li>
                  <li>• Terms: 2-7 years</li>
                  <li>• Vehicle serves as collateral</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Business Loans</h4>
                <p className="text-gray-700 mb-3">
                  Loans designed for business purposes like expansion, equipment, or working capital.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 4% - 30%</li>
                  <li>• Terms: 1-25 years</li>
                  <li>• May require business collateral</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Student Loans</h4>
                <p className="text-gray-700 mb-3">
                  Loans specifically for educational expenses, often with favorable terms for students.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interest rates: 3% - 12%</li>
                  <li>• Terms: 10-25 years</li>
                  <li>• Deferred payments while in school</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Factors Affecting Loan Costs
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Interest Rate Impact
                </h4>
                <p className="text-gray-700">
                  Even a small difference in interest rates can significantly impact total loan costs. 
                  A 1% lower interest rate on a $25,000 loan over 5 years can save over $700 in interest.
                </p>
              </div>

              <AdUnit adSlot="6578933102" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Loan Term Considerations
                </h4>
                <p className="text-gray-700">
                  Longer loan terms result in lower monthly payments but higher total interest costs. 
                  Shorter terms mean higher monthly payments but lower overall costs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Credit Score Influence
                </h4>
                <p className="text-gray-700">
                  Your credit score directly affects the interest rate you qualify for. Higher scores 
                  typically result in lower rates and better loan terms.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Tips for Better Loan Terms
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Improve Your Credit Score:</strong> Pay bills on time and reduce debt</li>
              <li><strong>Shop Around:</strong> Compare offers from multiple lenders</li>
              <li><strong>Consider Shorter Terms:</strong> Pay off loans faster when possible</li>
              <li><strong>Make Larger Down Payments:</strong> Reduce the amount you need to borrow</li>
              <li><strong>Negotiate Fees:</strong> Ask about origination fees and other charges</li>
            </ol>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg my-8">
              <h4 className="text-xl font-semibold text-accent-800 mb-3">
                Pro Tip: Loan Comparison
              </h4>
              <p className="text-accent-700">
                Use our loan calculator to compare different loan scenarios. Try different terms, 
                interest rates, and loan amounts to find the best option for your financial situation. 
                Remember to consider both monthly affordability and total cost.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common Loan Mistakes to Avoid
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Borrowing More Than Needed:</strong> Only borrow what you actually require</li>
              <li><strong>Ignoring Total Costs:</strong> Focus on total interest, not just monthly payments</li>
              <li><strong>Missing Payments:</strong> Late payments can damage credit and increase costs</li>
              <li><strong>Not Reading Fine Print:</strong> Understand all terms, fees, and penalties</li>
              <li><strong>Ignoring Prepayment Options:</strong> Some loans have prepayment penalties</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              When to Consider Refinancing
            </h3>
            <p className="text-gray-700 mb-6">
              Refinancing can be beneficial when interest rates drop significantly, your credit 
              score improves, or you want to change loan terms. However, consider closing costs 
              and ensure the savings justify the refinancing expenses.
            </p>

            <p className="text-gray-700 mb-8">
              Understanding loan calculations empowers you to make informed borrowing decisions. 
              Use our loan calculator to explore different scenarios, compare options, and find 
              the loan structure that best fits your financial goals. Remember, the goal is to 
              minimize total costs while maintaining affordable monthly payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
