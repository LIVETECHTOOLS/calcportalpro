import { Metadata } from 'next';
import Link from 'next/link';
import BusinessLoanCalculator from '@/components/calculators/BusinessLoanCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Business Loan Calculator | CalcPortal Pro',
  description: 'Calculate your business loan payments, total interest, and loan costs. Plan your business financing with our comprehensive business loan calculator.',
  alternates: { canonical: '/calculators/business-loan' }
};

export default function BusinessLoanCalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <div className="mb-8">
          <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
            ← Back to Calculators
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">Business Loan Calculator</h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your business loan payments, total interest, and loan costs. Plan your business financing with confidence.
          </p>
        </div>

        <BusinessLoanCalculator />

        <AdUnit adSlot="6578933421" />

        <div className="mt-12 prose max-w-none">
          <h2>Understanding Business Loans</h2>
          <p>
            Business loans provide capital for business operations, expansion, equipment purchases, 
            working capital, and other business needs.
          </p>
          
          <h3>Types of Business Loans</h3>
          <ul>
            <li><strong>Term Loans:</strong> Lump sum with fixed repayment schedule</li>
            <li><strong>Lines of Credit:</strong> Flexible borrowing up to a limit</li>
            <li><strong>SBA Loans:</strong> Government-backed loans for small businesses</li>
            <li><strong>Equipment Financing:</strong> Loans specifically for equipment purchases</li>
            <li><strong>Invoice Financing:</strong> Advances on outstanding invoices</li>
          </ul>
          
          <h3>Qualification Requirements</h3>
          <ul>
            <li>Business credit score and history</li>
            <li>Personal credit score (for small businesses)</li>
            <li>Business financial statements</li>
            <li>Business plan and purpose of funds</li>
            <li>Collateral or personal guarantee</li>
          </ul>

          <AdUnit adSlot="6578933422" />
        </div>
      </div>
    </div>
  );
}
