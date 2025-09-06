import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, PiggyBank } from "lucide-react";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";

export const metadata: Metadata = {
  title:
    "Retirement Calculator",
  description:
    "Free Retirement Calculator to plan 401k, IRA, pensions, and Social Security. Estimate how much to save monthly for retirement, whether early, traditional, or with multiple income sources.",
  keywords:
    "retirement calculator, retirement planning, early retirement calculator, retirement calculator with pension, fers retirement calculator, social security retirement calculator, 401k retirement calculator, IRA retirement calculator, Dave Ramsey retirement calculator, Vanguard retirement calculator, military retirement calculator, retirement calculator for couples, best retirement calculator",
  openGraph: {
    title:
      "Retirement Calculator - Plan Your 401k, IRA, Pension & Savings | CalcPortal Pro",
    description:
      "Free Retirement Calculator to plan 401k, IRA, pensions, and Social Security. Estimate how much to save monthly for retirement, whether early, traditional, or with multiple income sources.",
    type: "website",
    url: "https://calcportalpro.com/calculators/retirement",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retirement Calculator - Plan Your 401k, IRA, Pension & Savings | CalcPortal Pro",
    description:
      "Free Retirement Calculator to plan 401k, IRA, pensions, and Social Security. Estimate how much to save monthly for retirement, whether early, traditional, or with multiple income sources.",
  },
  alternates: {
    canonical: "https://calcportalpro.com/calculators/retirement",
  },
};

export default function RetirementCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <Link
            href="/calculators"
            className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculators
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-600 mb-4">
              Retirement Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your financial future with our free retirement calculator.
              Estimate how much you need to save monthly, factor in pensions,
              Social Security, and investment returns, and build a roadmap to
              retirement security.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <RetirementCalculator />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Retirement Planning
            </h2>
            <p>
              Retirement planning is one of the most important financial
              decisions you’ll make. Our calculator helps you see how much to
              save monthly based on age, income, lifestyle, and retirement goals.
            </p>

            <h3>Key Factors in Retirement Planning</h3>
            <ul>
              <li>
                <strong>Current Age vs. Retirement Age:</strong> The earlier you
                start, the more time compounding works in your favor.
              </li>
              <li>
                <strong>Life Expectancy:</strong> Plan for 20–30 years of
                retirement to avoid outliving savings.
              </li>
              <li>
                <strong>Desired Annual Income:</strong> Match your retirement
                lifestyle to your budget.
              </li>
              <li>
                <strong>Investment Returns:</strong> Historically 7–10% over the
                long term.
              </li>
              <li>
                <strong>Inflation:</strong> Factor in 2–3% yearly to maintain
                purchasing power.
              </li>
            </ul>

            <h3>Retirement Savings Strategies</h3>
            <ol>
              <li>Start saving early—even small contributions grow over time.</li>
              <li>Maximize 401(k) or IRA contributions, especially with employer match.</li>
              <li>Diversify investments across stocks, bonds, and cash equivalents.</li>
              <li>Reassess your plan every few years as goals or income change.</li>
              <li>Include multiple income sources like pensions or annuities.</li>
            </ol>

            <h3>Common Mistakes to Avoid</h3>
            <ul>
              <li>Underestimating healthcare costs in retirement.</li>
              <li>Not accounting for inflation in long-term projections.</li>
              <li>Investing too conservatively for decades-long horizons.</li>
              <li>Overlooking taxes on 401(k)/IRA withdrawals.</li>
              <li>Failing to plan for unexpected expenses.</li>
            </ul>

            <h3>Retirement Account Types</h3>
            <ul>
              <li>
                <strong>401(k):</strong> Employer-sponsored plan, often with
                matching contributions.
              </li>
              <li>
                <strong>Traditional IRA:</strong> Tax-deductible now, taxed on
                withdrawals.
              </li>
              <li>
                <strong>Roth IRA:</strong> Pay taxes upfront, withdraw tax-free
                in retirement.
              </li>
              <li>
                <strong>SEP IRA:</strong> Great for self-employed individuals.
              </li>
              <li>
                <strong>Pensions & Annuities:</strong> Provide stable income in
                retirement.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Structured Data: FAQ + HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much do I need to retire?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The amount depends on your desired lifestyle, expected expenses, and retirement age. A common rule is 70–80% of your pre-retirement income. Use our retirement calculator for a personalized estimate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s the best retirement calculator?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The best calculator depends on your needs. Ours allows you to include pensions, 401(k), IRA, Social Security, and monthly contributions to give a full picture of your retirement readiness.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much should I save monthly for retirement?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your monthly savings depend on your target nest egg, expected investment returns, and years until retirement. Enter your details in our calculator to see the required amount.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I retire early?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, early retirement is possible if you save aggressively and control expenses. Use the calculator to see how much you’ll need to retire before 60.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Should I count Social Security in my retirement plan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Social Security can be an important income source, but benefits may change. Use it as a supplement, not your only retirement income.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Calculate Retirement Savings Needs",
              description:
                "Step-by-step guide to estimating how much money you’ll need to retire comfortably.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Step 1: Set your retirement age",
                  text: "Decide the age when you plan to stop working.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 2: Estimate annual expenses",
                  text: "Calculate living costs, healthcare, travel, and lifestyle expenses.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 3: Factor in income sources",
                  text: "Include Social Security, pensions, and investment accounts.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 4: Adjust for inflation",
                  text: "Plan for 2–3% annual inflation to preserve purchasing power.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 5: Run the numbers",
                  text: "Use our retirement calculator to estimate monthly contributions needed to reach your target.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
