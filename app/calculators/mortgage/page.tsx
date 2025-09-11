import { Metadata } from 'next'
import MortgageCalculator from '@/components/calculators/MortgageCalculator'

export const metadata: Metadata = {
  title: 'Mortgage Calculator',
  description:
    'Free mortgage calculator to estimate monthly payments, interest costs, amortization, and taxes. Compare Bankrate, Zillow, VA, and refinance calculators. Plan your home loan with confidence.',
  openGraph: {
    title: 'Mortgage Calculator - Estimate Payments, Amortization & Taxes',
    description:
      'Free mortgage calculator to calculate monthly payments, interest, amortization, and PMI. Includes VA, refinance, and extra payments calculator options.',
    url: 'https://calcportalpro.com/calculators/mortgage',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/mortgage',
  },
  // ✅ Correct way to keep keywords in Metadata
  other: {
    keywords: [
      'mortgage calculator',
      'simple mortgage calculator',
      'bankrate mortgage calculator',
      'zillow mortgage calculator',
      'google mortgage calculator',
      'va mortgage calculator',
      'dave ramsey mortgage calculator',
      'reverse mortgage calculator',
      'monthly mortgage calculator',
      'mortgage calculator amortization',
      'mortgage calculator with taxes',
      'mortgage calculator texas',
      'mortgage calculator california',
      'mortgage calculator with extra payments',
      'commercial mortgage calculator',
      'refinance mortgage calculator',
      'free mortgage calculator',
      'home mortgage calculator',
    ].join(', '),
  },
}

// ✅ Structured Data: SoftwareApplication
const mortgageCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mortgage Calculator",
  "description": "Free mortgage calculator to estimate monthly payments, interest costs, amortization, and PMI",
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
    "PMI calculation",
    "Extra payments calculation",
    "Refinance analysis"
  ],
  "softwareVersion": "1.1",
  "author": {
    "@type": "Organization",
    "name": "CalcPortal Pro"
  }
}

// ✅ Structured Data: FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does a mortgage calculator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A mortgage calculator estimates your monthly payment based on loan amount, interest rate, loan term, taxes, and insurance (PITI)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a simple and advanced mortgage calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A simple mortgage calculator shows only principal and interest, while advanced calculators include taxes, insurance, PMI, and extra payments."
      }
    },
    {
      "@type": "Question",
      "name": "Can this replace Bankrate or Zillow mortgage calculators?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This calculator provides similar functionality to Bankrate and Zillow mortgage calculators, with extra features like amortization schedules and PMI calculation."
      }
    },
    {
      "@type": "Question",
      "name": "How do VA mortgage calculators work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A VA mortgage calculator factors in VA loan benefits, such as no down payment and no PMI, making it useful for military borrowers."
      }
    },
    {
      "@type": "Question",
      "name": "What is a refinance mortgage calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A refinance mortgage calculator helps you estimate new payments, interest savings, and break-even points when refinancing your home loan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this calculator for different states like Texas or California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mortgage calculators can be used for all states, though property taxes and insurance rates vary by location."
      }
    },
    {
      "@type": "Question",
      "name": "How do extra payments affect my mortgage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Making extra payments reduces your principal faster, shortens your loan term, and can save thousands in interest costs."
      }
    }
  ]
}

// ✅ Structured Data: HowTo
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Mortgage Payments",
  "description": "Step-by-step guide on how to calculate monthly mortgage payments using principal, interest, taxes, and insurance (PITI).",
  "totalTime": "PT5M",
  "supply": [
    { "@type": "HowToSupply", "name": "Loan amount" },
    { "@type": "HowToSupply", "name": "Interest rate" },
    { "@type": "HowToSupply", "name": "Loan term" },
    { "@type": "HowToSupply", "name": "Down payment" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Mortgage Calculator" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Determine your loan amount",
      "text": "Subtract your down payment from the purchase price to find your loan amount."
    },
    {
      "@type": "HowToStep",
      "name": "Enter interest rate",
      "text": "Use your lender’s quoted interest rate as the basis for calculation."
    },
    {
      "@type": "HowToStep",
      "name": "Select loan term",
      "text": "Common loan terms are 15, 20, or 30 years. Choose your term to determine amortization."
    },
    {
      "@type": "HowToStep",
      "name": "Calculate monthly payment",
      "text": "Use the mortgage calculator to combine principal and interest into a monthly payment amount."
    },
    {
      "@type": "HowToStep",
      "name": "Add taxes and insurance (optional)",
      "text": "Include estimated property taxes and insurance for a full PITI payment."
    }
  ]
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
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
              Calculate your monthly mortgage payments, total interest costs,
              and see a complete amortization schedule. Compare Bankrate,
              Zillow, VA, and refinance options.
            </p>
          </div>

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
              
              <div className="prose prose-lg max-w-none">
                <p>
                  A mortgage is a loan used to purchase real estate, typically a home.
                  Understanding how mortgage payments are calculated can help you
                  make informed decisions about your home purchase.
                </p>
                
                <h3>How Mortgage Payments Are Calculated</h3>
                <p>
                  Your monthly mortgage payment consists of four main components:
                  principal, interest, taxes, and insurance (PITI). The calculator
                  above focuses on principal and interest, which make up the core loan payment.
                </p>
                
                <h3>Key Factors Affecting Your Payment</h3>
                <ul>
                  <li><strong>Loan Amount:</strong> The total amount you borrow to purchase the home</li>
                  <li><strong>Interest Rate:</strong> The annual percentage rate (APR) charged by the lender</li>
                  <li><strong>Loan Term:</strong> The length of time to repay the loan (typically 15, 20, or 30 years)</li>
                  <li><strong>Down Payment:</strong> The amount you pay upfront, which affects your loan amount</li>
                </ul>
                
                <h3>Benefits of a Larger Down Payment</h3>
                <p>
                  Making a larger down payment can reduce your monthly payment, lower your
                  interest costs, and potentially eliminate the need for private mortgage
                  insurance (PMI).
                </p>
                
                <h3>Fixed vs. Adjustable Rate Mortgages</h3>
                <p>
                  Fixed-rate mortgages maintain the same interest rate throughout the loan term,
                  providing predictable payments. Adjustable-rate mortgages (ARMs) have rates
                  that can change periodically, potentially offering lower initial rates but
                  with payment uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
