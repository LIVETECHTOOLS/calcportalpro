import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Student Loans 2025: Federal vs Private, Repayment & Forgiveness | CalcPortal Pro',
  description: 'Comprehensive 2025 guide to student loans: federal vs private, interest, repayment options, deferment, forbearance, forgiveness, and late payment differences.',
  keywords: 'student loans, federal student loans, private student loans, repayment plans, income-driven repayment, loan forgiveness, deferment, forbearance, late payment federal vs private',
  openGraph: {
    title: 'Student Loans 2025: Federal vs Private, Repayment & Forgiveness',
    description: 'Everything you need to know about student loans in 2025: types, repayment, and protections.',
    type: 'article',
    url: 'https://calcportalpro.com/blog/student-loans-guide-2025',
  },
  alternates: { canonical: 'https://calcportalpro.com/blog/student-loans-guide-2025' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Student Loans 2025: Federal vs Private, Repayment & Forgiveness",
  "description": "2025 deep dive into student loans: federal vs private terms, protections, repayment plans, and forgiveness programs.",
  "author": { "@type": "Organization", "name": "CalcPortal Pro" },
  "publisher": { "@type": "Organization", "name": "CalcPortal Pro" },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://calcportalpro.com/blog/student-loans-guide-2025" },
  "articleSection": "Loans",
  "keywords": "student loans, repayment, forgiveness, federal vs private"
};

export default function StudentLoansGuide2025() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link href="/blog" className="inline-flex items-center text-violet-600 hover:text-violet-800 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> January 15, 2025</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 13 min read</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-1" /> CalcPortal Pro Team</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Student Loans 2025: Federal vs Private, Repayment & Forgiveness</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Choosing and managing student loans can shape your financial life for years. This 2025 guide explains the differences between federal and private student loans, how interest works, repayment options, protections, and the key differences in late payment consequences.
            </p>

            <AdUnit adSlot="6578932601" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Federal vs Private Student Loans</h2>
            <p className="text-gray-700 mb-6">Federal loans offer fixed rates, income‑driven repayment, deferment/forbearance, and potential forgiveness. Private loans vary by lender and typically require strong credit or a cosigner, and have fewer safety nets.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Repayment Plans</h2>
            <p className="text-gray-700 mb-6">Federal plans include Standard, Graduated, Extended, and multiple income‑driven options (SAVE, PAYE, IBR). Private lenders may offer interest‑only or fixed payment options while in school but limited post‑graduation flexibility.</p>

            <AdUnit adSlot="6578932602" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Late Payment: Federal vs Private</h2>
            <p className="text-gray-700 mb-6">Federal loans have defined delinquency periods before default, with rehabilitation options; private loans may move to default faster, allow fewer cure options, and may involve aggressive collections or legal action.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Forgiveness & Relief</h2>
            <p className="text-gray-700 mb-6">Public Service Loan Forgiveness (PSLF), Teacher Loan Forgiveness, and IDR forgiveness can reduce balances for qualifying borrowers. Private loans rarely include forgiveness.</p>

            <AdUnit adSlot="6578932603" />
          </div>
        </div>
      </div>
    </>
  );
}
