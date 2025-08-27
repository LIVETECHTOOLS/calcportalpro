import { Metadata } from 'next';
import Link from 'next/link';
import AutoLoanCalculator from '@/components/calculators/AutoLoanCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Auto Loan Calculator | CalcPortal Pro',
  description: 'Calculate your auto loan payments, total interest, and loan costs. Plan your car financing with our comprehensive auto loan calculator.',
  alternates: { canonical: '/calculators/auto-loan' }
};

export default function AutoLoanCalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <div className="mb-8">
          <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
            ← Back to Calculators
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">Auto Loan Calculator</h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your auto loan payments, total interest, and loan costs. Plan your car financing with confidence.
          </p>
        </div>

        <AutoLoanCalculator />

        <AdUnit adSlot="6578933401" />

        <div className="mt-12 prose max-w-none">
          <h2>Understanding Auto Loans</h2>
          <p>
            Auto loans are secured loans used to purchase vehicles. The vehicle serves as collateral, 
            which typically results in lower interest rates compared to unsecured personal loans.
          </p>
          
          <h3>Key Factors Affecting Auto Loan Rates</h3>
          <ul>
            <li><strong>Credit Score:</strong> Higher scores typically qualify for lower rates</li>
            <li><strong>Loan Term:</strong> Longer terms may have higher rates</li>
            <li><strong>Down Payment:</strong> Larger down payments can reduce rates</li>
            <li><strong>Vehicle Age:</strong> Newer vehicles often qualify for better rates</li>
            <li><strong>Lender Type:</strong> Credit unions, banks, and dealerships offer different rates</li>
          </ul>
          
          <h3>Tips for Better Auto Loan Terms</h3>
          <ul>
            <li>Improve your credit score before applying</li>
            <li>Save for a larger down payment</li>
            <li>Shop around with multiple lenders</li>
            <li>Consider shorter loan terms for lower total costs</li>
            <li>Negotiate the vehicle price separately from financing</li>
          </ul>
          
          <h3>Additional Costs to Consider</h3>
          <ul>
            <li>Sales tax and registration fees</li>
            <li>Insurance premiums</li>
            <li>Maintenance and fuel costs</li>
            <li>Depreciation</li>
          </ul>

          <AdUnit adSlot="6578933402" />
        </div>
      </div>
    </div>
  );
}
