import type { Metadata } from 'next'
import SalaryCalculator from '@/components/calculators/SalaryCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Salary Calculator',
  description:
    'Free salary calculator. Convert hourly to salary, calculate take-home pay after taxes, net salary, annual income, and compensation package. Updated for all U.S. states.',
  keywords:
    'salary calculator, take-home pay calculator, hourly to salary calculator, annual salary calculator, paycheck calculator, net salary calculator, salary calculator california, salary calculator texas, salary calculator nyc, monthly salary calculator, how much salary should I ask for calculator, salary breakdown, compensation calculator',
  openGraph: {
    title:
      'Salary Calculator 2024 - Take-Home Pay, Hourly to Annual Conversion | CalcPortal Pro',
    description:
      'Use our free salary calculator to estimate take-home pay, convert hourly wages to annual salary, and understand deductions like federal, state, Social Security, and Medicare taxes.',
    url: 'https://calcportalpro.com/calculators/salary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Salary Calculator 2024 - Free Take-Home Pay & Hourly Conversion Tool',
    description:
      'Accurately calculate your 2024 take-home salary, convert hourly to annual, and view net income after federal & state taxes.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/salary',
  },
}

export default function SalaryCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Salary Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your take-home pay, hourly rate, annual income, and
              salary breakdown. Updated for 2024 federal and state tax rates.
            </p>
          </div>

          <SalaryCalculator />

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Your Salary and Compensation
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Understanding your salary structure is crucial for financial
                planning and career decisions. Our salary calculator helps you
                break down your compensation into its various components and see
                exactly how much you take home.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Key Salary Components
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Base Salary:</strong> Your fixed annual compensation
                  before deductions
                </li>
                <li>
                  <strong>Hourly Rate:</strong> Your pay per hour of work
                </li>
                <li>
                  <strong>Overtime Pay:</strong> Extra compensation for hours
                  worked beyond your standard schedule
                </li>
                <li>
                  <strong>Bonuses:</strong> Performance-based or discretionary
                  additional payments
                </li>
                <li>
                  <strong>Benefits:</strong> Health insurance, retirement
                  contributions, and other perks
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Common Deductions
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Federal Income Tax:</strong> Progressive tax based on
                  your income level
                </li>
                <li>
                  <strong>State Income Tax:</strong> Varies by state; some
                  states have no income tax
                </li>
                <li>
                  <strong>Social Security:</strong> 6.2% of wages up to
                  $168,600 (2024 limit)
                </li>
                <li>
                  <strong>Medicare:</strong> 1.45% of all wages (no limit)
                </li>
                <li>
                  <strong>Retirement Contributions:</strong> 401(k), IRA, or
                  other plan contributions
                </li>
                <li>
                  <strong>Health Insurance:</strong> Premiums for medical,
                  dental, and vision coverage
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Salary Negotiation Tips
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Research Market Rates:</strong> Know what others in
                  your field and location earn
                </li>
                <li>
                  <strong>Consider Total Compensation:</strong> Look beyond base
                  salary to benefits and perks
                </li>
                <li>
                  <strong>Highlight Your Value:</strong> Show how you contribute
                  to company success
                </li>
                <li>
                  <strong>Timing Matters:</strong> Negotiate during performance
                  reviews or when taking new responsibilities
                </li>
                <li>
                  <strong>Be Prepared to Walk Away:</strong> Know your worth and
                  explore other opportunities if needed
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> When evaluating job offers, consider
                  the total compensation package including benefits, retirement
                  contributions, and growth opportunities, not just the base
                  salary.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Understanding Pay Types
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Salary:</strong> Fixed annual amount regardless of
                  hours worked
                </li>
                <li>
                  <strong>Hourly:</strong> Pay based on actual hours worked
                </li>
                <li>
                  <strong>Commission:</strong> Pay tied to sales or results
                </li>
                <li>
                  <strong>Piece Rate:</strong> Pay per unit of work completed
                </li>
                <li>
                  <strong>Freelance:</strong> Project-based pay for independent
                  contractors
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Financial Planning Considerations
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Budget based on take-home pay, not gross salary</li>
                <li>Maximize retirement contributions for long-term growth</li>
                <li>
                  Consider tax implications of different compensation structures
                </li>
                <li>
                  Plan for irregular income if you receive bonuses or
                  commissions
                </li>
                <li>Factor in benefits when comparing job opportunities</li>
              </ul>

              {/* FAQ Section */}
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Frequently Asked Salary Questions
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>How do I convert hourly pay to salary?</strong> Enter
                  your hourly rate and average weekly hours to calculate annual
                  salary.
                </li>
                <li>
                  <strong>What is my net salary after tax?</strong> Our tool
                  calculates take-home pay after federal, state, and payroll
                  deductions.
                </li>
                <li>
                  <strong>What salary should I ask for?</strong> Research market
                  rates and use our calculator to estimate fair compensation.
                </li>
                <li>
                  <strong>How much house or car can I afford with my
                    salary?</strong> Use your net income estimate to plan major
                  financial decisions.
                </li>
                <li>
                  <strong>What is the difference between gross and net
                    salary?</strong> Gross is before taxes and deductions; net
                  is what you actually take home.
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Calculators Section */}
          <div className="mt-16 bg-gray-100 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compare Other Calculators
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-600">
              <li>
                <Link href="/calculators/tax">Tax Calculator</Link>
              </li>
              <li>
                <Link href="/calculators/investment">Investment Calculator</Link>
              </li>
              <li>
                <Link href="/calculators/mortgage">Mortgage Calculator</Link>
              </li>
              <li>
                <Link href="/calculators/bmi">BMI Calculator</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ & HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I convert hourly pay to salary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Enter your hourly rate and average weekly hours to calculate annual salary.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is my net salary after tax?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our calculator estimates take-home pay after federal, state, and payroll deductions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What salary should I ask for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use market data and our calculator to estimate fair compensation for your role and location.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much house or car can I afford with my salary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Base affordability on your net income estimate from the salary calculator.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between gross and net salary?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Gross salary is before taxes and deductions; net salary is your actual take-home pay.',
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Calculate Your Salary',
            description:
              'Step-by-step guide to calculating annual, monthly, and net salary using the CalcPortal Pro Salary Calculator.',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Enter Your Base Salary or Hourly Rate',
                text: 'Start by entering your annual salary or hourly wage and average weekly hours.',
              },
              {
                '@type': 'HowToStep',
                name: 'Select Your State',
                text: 'Choose your state of residence to apply correct income tax rates.',
              },
              {
                '@type': 'HowToStep',
                name: 'Include Benefits and Deductions',
                text: 'Add retirement contributions, health insurance premiums, and other deductions.',
              },
              {
                '@type': 'HowToStep',
                name: 'Review Your Net Salary',
                text: 'The calculator shows your take-home pay after federal and state taxes.',
              },
            ],
          }),
        }}
      />
    </div>
  )
}
