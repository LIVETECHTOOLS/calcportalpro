import { Metadata } from 'next';
import Link from 'next/link';
import StudentLoanCalculator from '@/components/calculators/StudentLoanCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Student Loan Calculator | CalcPortal Pro',
  description: 'Calculate your student loan payments, total interest, and loan costs. Plan your education financing with our comprehensive student loan calculator.',
  alternates: { canonical: '/calculators/student-loan' }
};

export default function StudentLoanCalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <div className="mb-8">
          <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
            ← Back to Calculators
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">Student Loan Calculator</h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your student loan payments, total interest, and loan costs. Plan your education financing with confidence.
          </p>
        </div>

        <StudentLoanCalculator />

        <AdUnit adSlot="6578933411" />

        <div className="mt-12 prose max-w-none">
          <h2>Understanding Student Loans</h2>
          <p>
            Student loans are designed to help cover the costs of higher education, including tuition, 
            room and board, books, and other educational expenses.
          </p>
          
          <h3>Types of Student Loans</h3>
          <ul>
            <li><strong>Federal Student Loans:</strong> Offered by the government with fixed interest rates</li>
            <li><strong>Private Student Loans:</strong> Offered by banks and credit unions</li>
            <li><strong>Subsidized Loans:</strong> Government pays interest while in school</li>
            <li><strong>Unsubsidized Loans:</strong> Interest accrues while in school</li>
          </ul>
          
          <h3>Repayment Options</h3>
          <ul>
            <li><strong>Standard Repayment:</strong> Fixed monthly payments over 10 years</li>
            <li><strong>Income-Driven Repayment:</strong> Payments based on income and family size</li>
            <li><strong>Graduated Repayment:</strong> Payments start low and increase over time</li>
            <li><strong>Extended Repayment:</strong> Extended term up to 25 years</li>
          </ul>

          <AdUnit adSlot="6578933412" />
        </div>
      </div>
    </div>
  );
}
