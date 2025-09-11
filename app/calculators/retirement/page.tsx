import type { Metadata } from 'next'
import RetirementCalculator from '@/components/calculators/RetirementCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retirement Calculator',
  description:
    'Free retirement calculator to estimate how much you need to save for retirement. Compare retirement savings with 401k, IRA, and pension plans. Plan your future with accurate projections.',
  keywords:
    'retirement calculator, retirement savings calculator, 401k calculator, IRA calculator, pension calculator, fers retirement calculator, retirement planning, early retirement calculator, social security retirement calculator, best retirement calculator',
  openGraph: {
    title: 'Retirement Calculator',
    description:
      'Use our free retirement calculator to estimate your savings needs, project 401k and IRA growth, and create a personalized retirement plan.',
    url: 'https://calcportalpro.com/calculators/retirement',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retirement Calculator',
    description:
      'Estimate your retirement savings needs with our free retirement calculator. Compare IRA, 401k, and pension strategies to achieve your financial goals.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/retirement',
  },
}

export default function RetirementCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Retirement Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan your financial future with our comprehensive retirement planning
              calculator. See how much you need to save monthly to achieve your
              retirement goals.
            </p>
          </div>

          {/* Calculator */}
          <RetirementCalculator />

          {/* Educational Section */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Retirement Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Retirement planning is one of the most important financial decisions
                you'll make. Our retirement calculator helps you understand how much
                you need to save to maintain your desired lifestyle after you stop
                working.
              </p>
              <h3>Key Factors in Retirement Planning</h3>
              <ul>
                <li>Current Age vs. Retirement Age: The longer you save, the less you need monthly</li>
                <li>Life Expectancy: Plan for longevity</li>
                <li>Desired Annual Income: Factor in lifestyle + inflation</li>
                <li>Investment Returns: Historically 7–10% annually</li>
                <li>Inflation: Assume 2–3% to maintain purchasing power</li>
              </ul>
              <h3>Strategies</h3>
              <ul>
                <li>Start early (compounding effect)</li>
                <li>Maximize employer match (401k)</li>
                <li>Diversify investments</li>
                <li>Review + adjust regularly</li>
                <li>Plan for multiple income sources</li>
              </ul>
              <h3>Common Mistakes</h3>
              <ul>
                <li>Ignoring healthcare costs</li>
                <li>Underestimating inflation</li>
                <li>Overly conservative assumptions</li>
                <li>Forgetting tax impacts</li>
                <li>No emergency buffer</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-soft p-8" id="faq">
            <h2 className="text-2xl font-bold text-secondary-600 mb-6">
              Frequently Asked Questions
            </h2>
            <div id="faq-how-much" className="mb-6">
              <h3 className="font-semibold text-lg">
                How much do I need to retire?
              </h3>
              <p className="text-gray-700">
                The amount you need depends on your lifestyle, retirement age, and
                expected expenses. A common rule of thumb is to aim for 70–80% of
                your pre-retirement income annually.
              </p>
            </div>
            <div id="faq-difference" className="mb-6">
              <h3 className="font-semibold text-lg">
                What is the difference between a Retirement Calculator and a 401k or Savings Calculator?
              </h3>
              <p className="text-gray-700">
                A Retirement Calculator estimates your total retirement savings needs
                and income sources, while a 401k Calculator projects growth of your
                employer-sponsored plan and a Savings Calculator focuses on compound
                growth of savings accounts.
              </p>
            </div>
            <div id="faq-early-retirement" className="mb-6">
              <h3 className="font-semibold text-lg">
                Can I retire early with this calculator?
              </h3>
              <p className="text-gray-700">
                Yes, you can adjust your retirement age in the calculator to see how
                early retirement impacts your savings needs and monthly contributions.
              </p>
            </div>
            <div id="faq-social-security" className="mb-6">
              <h3 className="font-semibold text-lg">
                Does this retirement calculator include Social Security?
              </h3>
              <p className="text-gray-700">
                Our calculator can estimate retirement savings needs, but you should
                also consider Social Security benefits and other income sources in
                your retirement plan.
              </p>
            </div>
          </div>

          {/* Related Calculators (401k removed) */}
          <div className="mt-16 bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-secondary-600 mb-6">
              Compare with Other Financial Calculators
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li>
                <Link href="/calculators/savings" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">Savings Calculator</h3>
                  <p>Estimate compound growth of deposits and contributions.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/cd" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">CD Calculator</h3>
                  <p>Calculate returns on certificates of deposit.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/mortgage" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">Mortgage Calculator</h3>
                  <p>Estimate monthly payments for home loans.</p>
                </Link>
              </li>
              <li>
                <Link href="/calculators/bmi" className="block p-4 border rounded-xl hover:bg-accent-50">
                  <h3 className="font-semibold">BMI Calculator</h3>
                  <p>Track body mass index alongside retirement planning goals.</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Structured Data (FAQ + HowTo stays unchanged) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much do I need to retire?',
                  url: 'https://calcportalpro.com/calculators/retirement#faq-how-much',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The amount you need depends on your lifestyle, retirement age, and expected expenses. A common rule of thumb is to aim for 70–80% of your pre-retirement income annually.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the difference between a Retirement Calculator and a 401k or Savings Calculator?',
                  url: 'https://calcportalpro.com/calculators/retirement#faq-difference',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A Retirement Calculator estimates your total retirement savings needs and income sources, while a 401k Calculator projects growth of your employer-sponsored plan and a Savings Calculator focuses on compound growth of savings accounts.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I retire early with this calculator?',
                  url: 'https://calcportalpro.com/calculators/retirement#faq-early-retirement',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, you can adjust your retirement age in the calculator to see how early retirement impacts your savings needs and monthly contributions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does this retirement calculator include Social Security?',
                  url: 'https://calcportalpro.com/calculators/retirement#faq-social-security',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our calculator can estimate retirement savings needs, but you should also consider Social Security benefits and other income sources in your retirement plan.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Use the Retirement Calculator',
              description:
                'Step-by-step guide to using the Retirement Calculator to estimate savings needs and plan your retirement goals.',
              url: 'https://calcportalpro.com/calculators/retirement',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Enter your current age',
                  text: 'Provide your current age so the calculator can estimate your savings timeline.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Enter your desired retirement age',
                  text: 'Set the age you plan to retire to calculate how long you have to save.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Input your current savings',
                  text: 'Enter your existing retirement savings balance.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Set your monthly contribution',
                  text: 'Add the amount you plan to save each month.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Adjust expected rate of return and inflation',
                  text: 'Use the defaults or update assumptions for growth and inflation.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'View your results',
                  text: 'The calculator will estimate your retirement savings at your target age and whether you are on track.',
                },
              ],
            },
          ]),
        }}
      />
    </div>
  )
}
