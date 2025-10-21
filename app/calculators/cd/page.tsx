import { Metadata } from 'next'
import CDCalculator from '../../../components/calculators/CDCalculator'

export const metadata: Metadata = {
  title: 'CD Calculator',
  description:
    'Free CD calculator to estimate certificate of deposit returns, compare APY, calculate monthly and daily compounding, and explore laddering strategies. Includes Chase, 3-month, 6-month, and high-yield CD options.',
  keywords: [
    'cd calculator',
    'bankrate cd calculator',
    'nerdwallet cd calculator',
    'cd calculator apy',
    'cd calculator interest',
    'cd calculator rate',
    'cd calculator compounded monthly',
    'cd calculator compounded daily',
    'bank cd calculator',
    'chase cd calculator',
    '6 month cd calculator',
    '3 month cd calculator',
    'free cd calculator',
    'high yield cd calculator',
  ],
  openGraph: {
    title: 'CD Calculator - Estimate APY, Compounding & Laddering',
    description:
      'Use our free CD calculator to calculate APY, compare bank rates, and explore compounding options. Includes 3-month, 6-month, and high-yield CD calculators.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/cd',
  },
  alternates: {
    canonical: '/calculators/cd',
  },
}

export default function CDCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a CD calculator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CD calculator estimates how much interest you’ll earn on a certificate of deposit by factoring in the deposit amount, APY, compounding frequency, and term length."
        }
      },
      {
        "@type": "Question",
        "name": "What is a CD calculator APY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CD calculator with APY shows your annual percentage yield, which reflects the real return on your CD after compounding is considered."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between daily and monthly compounding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CD calculator compounded daily adds interest more frequently than monthly, leading to slightly higher returns. Daily compounding benefits larger deposits or longer terms."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this instead of a Bankrate or NerdWallet CD calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this calculator works similarly to the Bankrate CD calculator and NerdWallet CD calculator, but with added flexibility to test daily, monthly, and custom terms."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate interest for 3-month or 6-month CDs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 3-month CD calculator or 6-month CD calculator shows short-term returns. Enter your deposit amount, rate, and term length to see interest earned."
        }
      },
      {
        "@type": "Question",
        "name": "What is a high-yield CD calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A high-yield CD calculator helps estimate earnings from CDs offering higher-than-average rates. These are often available from online banks."
        }
      },
      {
        "@type": "Question",
        "name": "Can I estimate penalties with a CD early withdrawal calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many CD calculators let you factor in early withdrawal penalties. This one is designed to help you plan CD investments and avoid unexpected losses."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CD Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate certificate of deposit (CD) returns, compare APY,
              estimate monthly and daily compounding, and plan laddering
              strategies. Includes 3-month, 6-month, and high-yield CD options.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Component */}
      <div className="py-8">
        <CDCalculator />
      </div>

      {/* Educational Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Certificate of Deposits
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>What is a CD?</h3>
              <p>
                A Certificate of Deposit (CD) is a time deposit offered by banks and credit unions
                that pays a fixed interest rate for a specified term. CDs are FDIC insured up to
                $250,000, making them one of the safest investment options available.
              </p>

              <h3>How CD Rates Work</h3>
              <p>
                CD rates are typically higher than savings accounts because you're committing your
                money for a set period. Longer terms usually offer higher rates, though this isn't
                always the case in inverted yield curve environments.
              </p>

              <h3>CD Laddering Strategy</h3>
              <p>
                CD laddering involves investing in multiple CDs with different maturity dates.
                This strategy provides regular access to your money while maximizing returns
                and reducing interest rate risk.
              </p>

              <h3>When to Use CDs</h3>
              <p>
                CDs are ideal for short-term goals (1–3 years), emergency fund supplements,
                conservative investment strategies, and when you want to lock in attractive
                rates in a high-interest environment.
              </p>

              <h3>Key Considerations</h3>
              <ul>
                <li>Early withdrawal penalties can significantly reduce returns</li>
                <li>CDs are best for money you won't need immediately</li>
                <li>Shop around for the best rates between different banks</li>
                <li>Consider the impact of inflation on real returns</li>
                <li>Plan for reinvestment when CDs mature</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              CD Calculator FAQs
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3>How does a CD calculator work?</h3>
              <p>
                A CD calculator estimates how much interest you’ll earn on a certificate of deposit
                by factoring in the deposit amount, APY, compounding frequency, and term length.
              </p>

              <h3>What is a CD calculator APY?</h3>
              <p>
                A CD calculator with APY shows your annual percentage yield, which reflects the
                real return on your CD after compounding is considered.
              </p>

              <h3>What is the difference between daily and monthly compounding?</h3>
              <p>
                A CD calculator compounded daily adds interest more frequently than monthly,
                leading to slightly higher returns. Daily compounding benefits larger deposits
                or longer terms.
              </p>

              <h3>Can I use this instead of a Bankrate or NerdWallet CD calculator?</h3>
              <p>
                Yes, this calculator works similarly to the Bankrate CD calculator and NerdWallet
                CD calculator, but with added flexibility to test daily, monthly, and custom terms.
              </p>

              <h3>How do I calculate interest for 3-month or 6-month CDs?</h3>
              <p>
                A 3-month CD calculator or 6-month CD calculator shows short-term returns.
                Enter your deposit amount, rate, and term length to see interest earned.
              </p>

              <h3>What is a high-yield CD calculator?</h3>
              <p>
                A high-yield CD calculator helps estimate earnings from CDs offering higher-than-average
                rates. These are often available from online banks.
              </p>

              <h3>Can I estimate penalties with a CD early withdrawal calculator?</h3>
              <p>
                Yes, many CD calculators let you factor in early withdrawal penalties. This one is
                designed to help you plan CD investments and avoid unexpected losses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
