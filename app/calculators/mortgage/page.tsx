import { Metadata } from 'next';
import MortgageCalculator from '@/components/calculators/MortgageCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Mortgage Calculator | CalcPortal Pro',
  description: 'Free mortgage calculator to estimate monthly payments, interest costs, and loan amortization. Calculate mortgage payments with our easy-to-use tool.',
  keywords: 'mortgage calculator, home loan calculator, mortgage payment calculator, loan calculator, home financing calculator, PITI calculator',
  openGraph: {
    title: 'Mortgage Calculator | CalcPortal Pro',
    description: 'Free mortgage calculator to estimate monthly payments, interest costs, and loan amortization.',
    url: 'https://calcportalpro.com/calculators/mortgage',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/mortgage',
  },
};

// Mortgage Calculator Schema
const mortgageCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mortgage Calculator",
  "description": "Free mortgage calculator to estimate monthly payments, interest costs, and loan amortization",
  "url": "https://calcportalpro.com/calculators/mortgage",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Monthly payment calculation",
    "Interest cost estimation",
    "Amortization schedule",
    "Down payment analysis",
    "PMI calculation"
  ],
  "screenshot": "https://calcportalpro.com/calculators/mortgage-screenshot.jpg",
  "softwareVersion": "1.0",
  "author": {
    "@type": "Organization",
    "name": "CalcPortal Pro"
  }
};

export default function MortgagePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mortgageCalculatorSchema),
        }}
      />
      
      <div className="min-h-screen bg-primary-50">
        <div className="container-max py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
              Mortgage Calculator
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Calculate your monthly mortgage payments, total interest costs, and see a complete amortization schedule. Plan your home purchase with confidence.
            </p>
          </div>

          <AdUnit adSlot="6578933001" />

          {/* Calculator */}
          <div className="max-w-6xl mx-auto">
            <MortgageCalculator />
          </div>

          {/* Educational Content */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">
                Understanding Mortgage Payments
              </h2>
              
              <AdUnit adSlot="6578933002" />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-secondary-100 mb-4">
                  A mortgage is a loan used to purchase real estate, typically a home. Understanding how mortgage payments are calculated can help you make informed decisions about your home purchase.
                </p>
                
                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  How Mortgage Payments Are Calculated
                </h3>
                <p className="text-secondary-100 mb-4">
                  Your monthly mortgage payment consists of four main components: principal, interest, taxes, and insurance (PITI). The calculator above focuses on principal and interest, which make up the core loan payment.
                </p>
                
                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Key Factors Affecting Your Payment
                </h3>
                <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                  <li><strong>Loan Amount:</strong> The total amount you borrow to purchase the home</li>
                  <li><strong>Interest Rate:</strong> The annual percentage rate (APR) charged by the lender</li>
                  <li><strong>Loan Term:</strong> The length of time to repay the loan (typically 15, 20, or 30 years)</li>
                  <li><strong>Down Payment:</strong> The amount you pay upfront, which affects your loan amount</li>
                </ul>
                
                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Benefits of a Larger Down Payment
                </h3>
                <p className="text-secondary-100 mb-4">
                  Making a larger down payment can reduce your monthly payment, lower your interest costs, and potentially eliminate the need for private mortgage insurance (PMI).
                </p>
                
                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Fixed vs. Adjustable Rate Mortgages
                </h3>
                <p className="text-secondary-100 mb-4">
                  Fixed-rate mortgages maintain the same interest rate throughout the loan term, providing predictable payments. Adjustable-rate mortgages (ARMs) have rates that can change periodically, potentially offering lower initial rates but with payment uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
