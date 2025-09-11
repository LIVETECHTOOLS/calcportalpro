import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  PiggyBank,
  TrendingUp,
  Target,
} from "lucide-react";
import SavingsCalculator from "@/components/calculators/SavingsCalculator";

export const metadata: Metadata = {
  title:
    "Savings Calculator",
  description:
    "Free Savings Calculator to compute compound interest, monthly contributions, and savings growth. Plan for retirement, college, and financial goals with our easy savings tool.",
  keywords:
    "savings calculator, retirement savings calculator, high yield savings calculator, college savings calculator, savings calculator with interest, simple savings calculator, compound savings calculator, monthly savings calculator, apy savings calculator, online savings calculator",
  openGraph: {
    title:
      "Savings Calculator",
    description:
      "Free Savings Calculator to compute compound interest, monthly contributions, and savings growth. Plan for retirement, college, and financial goals with our easy savings tool.",
    type: "website",
    url: "https://calcportalpro.com/calculators/savings",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Savings Calculator",
    description:
      "Free Savings Calculator to compute compound interest, monthly contributions, and savings growth. Plan for retirement, college, and financial goals with our easy savings tool.",
  },
  alternates: {
    canonical: "https://calcportalpro.com/calculators/savings",
  },
};

export default function SavingsPage() {
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
              Savings Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate compound interest, monthly contributions, and savings
              growth with our free savings calculator. See how time, interest,
              and deposits work together to grow your money.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <SavingsCalculator />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Savings and Compound Interest
            </h2>
            <p>
              Saving money is one of the most fundamental financial habits. The
              true power lies in <strong>compound interest</strong>—your savings
              earning returns not just on your initial deposit but also on the
              accumulated interest over time.
            </p>

            <h3>How Compound Interest Works</h3>
            <p>
              Compound interest creates a snowball effect where your savings
              accelerate the longer you save. The formula is based on principal,
              interest rate, compounding frequency, and time.
            </p>

            <h3>Key Savings Scenarios</h3>
            <ul>
              <li>
                <strong>Retirement Savings:</strong> Build long-term wealth
                through consistent contributions.
              </li>
              <li>
                <strong>College Savings:</strong> Use 529 accounts or regular
                savings to fund education.
              </li>
              <li>
                <strong>High-Yield Savings:</strong> Maximize growth with higher
                APY accounts.
              </li>
              <li>
                <strong>Emergency Fund:</strong> Maintain liquidity while still
                earning interest.
              </li>
            </ul>

            <h3>Tips for Maximizing Savings</h3>
            <ol>
              <li>Start saving early to leverage time and compounding.</li>
              <li>Automate monthly deposits to stay consistent.</li>
              <li>Choose accounts with higher APYs when possible.</li>
              <li>Reinvest interest instead of withdrawing it.</li>
              <li>Increase contributions as your income grows.</li>
            </ol>

            <h3>Common Questions</h3>
            <ul>
              <li>How much will my savings grow with monthly contributions?</li>
              <li>What’s the difference between simple and compound interest?</li>
              <li>
                Which account is better for long-term savings: high-yield vs
                traditional?
              </li>
              <li>How do I calculate savings for retirement?</li>
              <li>How much should I save monthly to reach my goal?</li>
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
                  name: "How much will my savings grow with monthly contributions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your savings growth depends on your contribution amount, interest rate, and time horizon. Our savings calculator shows exactly how much your balance will grow.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s the difference between simple and compound interest?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simple interest is calculated only on the original principal. Compound interest is calculated on both the principal and previously earned interest, leading to faster growth.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which account is better for long-term savings: high-yield vs traditional?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "High-yield savings accounts typically offer much higher interest rates, making them better for long-term growth compared to traditional savings accounts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I calculate savings for retirement?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Retirement savings calculations depend on your target amount, expected rate of return, and years until retirement. Use our savings calculator to plan your contributions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much should I save monthly to reach my goal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The required monthly savings depend on your goal amount, interest rate, and time available. Enter your details in the calculator to see personalized results.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Calculate Savings with Compound Interest",
              description:
                "Step-by-step guide to calculating savings growth using compound interest.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Step 1: Determine your inputs",
                  text: "Collect your starting balance, monthly contribution, interest rate, and time horizon.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 2: Adjust for compounding",
                  text: "Divide the annual interest rate by the compounding frequency (e.g., monthly = 12).",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 3: Apply the formula",
                  text: "Use the formula: A = P(1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) - 1) / (r/n)], where A = future value, P = principal, r = annual rate, n = periods per year, t = years, PMT = contribution.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 4: Calculate future value",
                  text: "Plug in your values to estimate the final savings balance.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 5: Use the calculator for accuracy",
                  text: "Our free savings calculator automatically applies the formula to show your savings growth instantly.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
