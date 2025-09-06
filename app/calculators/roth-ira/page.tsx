import { Metadata } from 'next'
import RothIRACalculator from '../../../components/calculators/RothIRACalculator'

export const metadata: Metadata = {
  title: 'Roth IRA Calculator',
  description:
    'Use our free Roth IRA calculator to estimate retirement savings, understand tax-free growth, and plan contributions for 2024 and 2025. Compare Fidelity, Vanguard, and Bankrate calculators.',
  openGraph: {
    title: 'Roth IRA Calculator - Retirement Savings & Tax Benefits',
    description:
      'Free Roth IRA calculator to project retirement savings with tax-free growth. Includes contribution limits, income eligibility, and compound growth analysis.',
    url: 'https://calcportalpro.com/calculators/roth-ira',
    type: 'website',
  },
  alternates: {
    canonical: '/calculators/roth-ira',
  },
  other: {
    keywords: [
      'roth ira calculator',
      'roth ira calculator 2024',
      'roth ira calculator 2025',
      'fidelity roth ira calculator',
      'bankrate roth ira calculator',
      'vanguard roth ira calculator',
      'nerdwallet roth ira calculator',
      'dave ramsey roth ira calculator',
      'ramsey roth ira calculator',
      'roth ira calculator over time',
      'custodial roth ira calculator',
      '401k and roth ira calculator',
      '401k vs roth ira calculator',
      'traditional vs roth ira calculator',
      'ira to roth ira conversion calculator',
      'should I convert my ira to a roth calculator',
      'retirement savings calculator',
      'tax-free growth calculator',
      'roth ira contribution limits 2025'
    ].join(', '),
  },
}

// ✅ Structured Data: SoftwareApplication
const rothIRACalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Roth IRA Calculator",
  "description": "Free Roth IRA calculator to estimate retirement savings, tax-free growth, and contribution planning for 2024 and 2025.",
  "url": "https://calcportalpro.com/calculators/roth-ira",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Estimate Roth IRA growth",
    "Calculate tax-free withdrawals",
    "Contribution limit guidance",
    "Income eligibility checks",
    "Compare with traditional IRA",
    "Conversion calculator"
  ],
  "softwareVersion": "1.0",
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
      "name": "How does a Roth IRA calculator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Roth IRA calculator estimates your future retirement savings based on annual contributions, expected rate of return, and number of years invested. It also factors in tax-free growth and withdrawals."
      }
    },
    {
      "@type": "Question",
      "name": "What are the Roth IRA contribution limits for 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 2025, individuals under 50 can contribute up to $7,000 and those 50 and older can contribute $8,000. These limits apply across all IRAs combined."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible to contribute to a Roth IRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligibility depends on your modified adjusted gross income (MAGI). In 2025, single filers under $146,000 can contribute fully, with phased-out eligibility up to $161,000."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the difference between Roth and Traditional IRAs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roth IRAs use after-tax contributions and withdrawals are tax-free. Traditional IRAs use pre-tax contributions, grow tax-deferred, and withdrawals are taxed as income."
      }
    },
    {
      "@type": "Question",
      "name": "Should I convert my IRA to a Roth IRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Roth conversion may be beneficial if you expect higher taxes in retirement. Converting requires paying taxes upfront on pre-tax contributions, but future growth and withdrawals become tax-free."
      }
    }
  ]
}

// ✅ Structured Data: HowTo
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Roth IRA Growth",
  "description": "Step-by-step instructions to calculate Roth IRA retirement savings and tax-free withdrawals.",
  "totalTime": "PT5M",
  "supply": [
    { "@type": "HowToSupply", "name": "Annual contribution amount" },
    { "@type": "HowToSupply", "name": "Expected rate of return" },
    { "@type": "HowToSupply", "name": "Number of years until retirement" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Roth IRA Calculator" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enter your contribution amount",
      "text": "Input how much you plan to contribute annually, up to IRS limits."
    },
    {
      "@type": "HowToStep",
      "name": "Estimate your rate of return",
      "text": "Choose an expected growth rate based on your investment strategy (e.g., 6–8% for stocks)."
    },
    {
      "@type": "HowToStep",
      "name": "Set your time horizon",
      "text": "Enter the number of years until retirement to calculate compound growth."
    },
    {
      "@type": "HowToStep",
      "name": "Review your projected savings",
      "text": "The calculator will show your total retirement balance and estimated tax-free withdrawals."
    }
  ]
}

export default function RothIRACalculatorPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rothIRACalculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Roth IRA Calculator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculate your Roth IRA retirement savings potential, understand tax benefits,
                and plan contributions for 2024 and 2025. See how tax-free growth can accelerate your retirement goals.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Component */}
        <div className="py-8">
          <RothIRACalculator />
        </div>

        {/* Educational Content */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Understanding Roth IRAs
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3>What is a Roth IRA?</h3>
                <p>
                  A Roth IRA is a retirement savings account that offers tax-free growth
                  and tax-free withdrawals in retirement. Contributions are made with
                  after-tax dollars, but your investments compound tax-free and
                  qualified withdrawals are completely tax-free.
                </p>

                <h3>Key Benefits of Roth IRAs</h3>
                <ul>
                  <li><strong>Tax-Free Growth:</strong> Investments compound without annual tax drag</li>
                  <li><strong>Tax-Free Withdrawals:</strong> Qualified distributions are completely tax-free</li>
                  <li><strong>No Required Minimum Distributions:</strong> Funds can remain invested indefinitely</li>
                  <li><strong>Flexible Contributions:</strong> Contributions (but not earnings) can be withdrawn anytime</li>
                  <li><strong>Estate Planning Benefits:</strong> Tax-free inheritance for beneficiaries</li>
                </ul>

                <h3>Contribution Limits</h3>
                <p>
                  For 2025, individuals under 50 can contribute $7,000 annually,
                  and those 50 and older can contribute $8,000. These limits apply
                  across all IRAs combined.
                </p>

                <h3>Income Limits</h3>
                <p>
                  In 2025, single filers can contribute fully if their modified adjusted
                  gross income (MAGI) is under $146,000, with phased-out eligibility up to $161,000.
                </p>

                <h3>When to Choose a Roth IRA</h3>
                <p>
                  Roth IRAs are ideal for younger investors in lower tax brackets,
                  those expecting higher taxes in retirement, and anyone who values
                  tax-free income during retirement.
                </p>

                <h3>Investment Strategy</h3>
                <p>
                  Roth IRAs work best with long-term, high-growth investments like stocks
                  and equity funds. The longer your time horizon, the greater the benefit
                  of tax-free compounding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
