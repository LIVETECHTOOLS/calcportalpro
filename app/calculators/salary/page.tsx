import type { Metadata } from 'next'
import SalaryCalculator from '@/components/calculators/SalaryCalculator'
import AdUnit from '@/components/ads/AdUnit'

export const metadata: Metadata = {
  title: 'Salary Calculator - Calculate Take-Home Pay | CalcPortal Pro',
  description: 'Calculate your take-home pay, hourly rate, and salary breakdown. Use our comprehensive salary calculator to understand your compensation package. Free, accurate, and easy to use.',
  keywords: 'salary calculator, take-home pay calculator, hourly rate calculator, salary breakdown, paycheck calculator, compensation calculator',
  openGraph: {
    title: 'Salary Calculator - Calculate Take-Home Pay | CalcPortal Pro',
    description: 'Calculate your take-home pay, hourly rate, and salary breakdown. Use our comprehensive salary calculator to understand your compensation package.',
    url: 'https://calcportalpro.com/calculators/salary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Calculator - Calculate Take-Home Pay | CalcPortal Pro',
    description: 'Calculate your take-home pay, hourly rate, and salary breakdown. Use our comprehensive salary calculator to understand your compensation package.',
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
              Calculate your take-home pay, hourly rate, and salary breakdown. 
              Understand your compensation package with our comprehensive salary calculator.
            </p>
          </div>

          <SalaryCalculator />

          <AdUnit adSlot="6578933451" />

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding Your Salary and Compensation
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Understanding your salary structure is crucial for financial planning and career decisions. 
                Our salary calculator helps you break down your compensation into its various components 
                and see exactly how much you take home.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Key Salary Components
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Base Salary:</strong> Your fixed annual compensation before deductions</li>
                <li><strong>Hourly Rate:</strong> Your pay per hour of work</li>
                <li><strong>Overtime Pay:</strong> Additional compensation for hours worked beyond standard schedule</li>
                <li><strong>Bonuses:</strong> Performance-based or discretionary additional payments</li>
                <li><strong>Benefits:</strong> Health insurance, retirement contributions, and other perks</li>
              </ul>

              <AdUnit adSlot="6578933452" />

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Common Deductions
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Federal Income Tax:</strong> Progressive tax based on your income level</li>
                <li><strong>State Income Tax:</strong> Varies by state, some states have no income tax</li>
                <li><strong>Social Security:</strong> 6.2% of wages up to $168,600 (2024 limit)</li>
                <li><strong>Medicare:</strong> 1.45% of all wages (no limit)</li>
                <li><strong>Retirement Contributions:</strong> 401(k), IRA, or other retirement plan contributions</li>
                <li><strong>Health Insurance:</strong> Premiums for medical, dental, and vision coverage</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Salary Negotiation Tips
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Research Market Rates:</strong> Know what others in your field and location earn</li>
                <li><strong>Consider Total Compensation:</strong> Look beyond base salary to benefits and perks</li>
                <li><strong>Highlight Your Value:</strong> Demonstrate how you contribute to company success</li>
                <li><strong>Timing Matters:</strong> Negotiate during performance reviews or when taking new responsibilities</li>
                <li><strong>Be Prepared to Walk Away:</strong> Know your worth and be willing to explore other opportunities</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> When evaluating job offers, consider the total compensation package 
                  including benefits, retirement contributions, and growth opportunities, not just the base salary.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Understanding Pay Types
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Salary:</strong> Fixed annual amount regardless of hours worked</li>
                <li><strong>Hourly:</strong> Pay based on actual hours worked</li>
                <li><strong>Commission:</strong> Performance-based pay tied to sales or results</li>
                <li><strong>Piece Rate:</strong> Pay per unit of work completed</li>
                <li><strong>Freelance:</strong> Project-based compensation for independent contractors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Financial Planning Considerations
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Budget based on take-home pay, not gross salary</li>
                <li>Maximize retirement contributions for long-term financial security</li>
                <li>Consider tax implications of different compensation structures</li>
                <li>Plan for irregular income if you receive bonuses or commissions</li>
                <li>Factor in benefits when comparing job opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
