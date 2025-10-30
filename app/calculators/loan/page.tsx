import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LoanCalculator from "@/components/calculators/LoanCalculator";

export const metadata: Metadata = {
  title: "Loan Calculator",
  description:
    "Free Loan Calculator to compute monthly payments, total interest, and loan costs. Calculate auto loans, personal loans, mortgages, and student loans with accurate results.",
  keywords:
    "loan calculator, auto loan calculator, personal loan calculator, home loan calculator, mortgage calculator, student loan calculator, business loan calculator, loan interest calculator, monthly payment calculator",
  openGraph: {
    title: "Loan Calculator",
    description:
      "Free Loan Calculator to compute monthly payments, total interest, and loan costs. Calculate auto loans, personal loans, mortgages, and student loans with accurate results.",
    type: "website",
    url: "https://calcportalpro.com/calculators/loan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator",
    description:
      "Free Loan Calculator to compute monthly payments, total interest, and loan costs. Calculate auto loans, personal loans, mortgages, and student loans with accurate results.",
  },
  alternates: {
    canonical: "https://calcportalpro.com/calculators/loan",
  },
};

export default function LoanPage() {
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
              Loan Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your loan payments, total interest, and loan costs with
              our comprehensive loan calculator. Plan your borrowing strategy
              and understand the true cost of loans.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <LoanCalculator />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Loan Calculations
            </h2>
            <p>
              Loans allow you to borrow money for various purposes—buying a car,
              purchasing a home, paying tuition, or starting a business.
              Understanding how loan payments are calculated helps you make
              informed financial decisions.
            </p>

            <h3>How Loan Payments Are Calculated</h3>
            <p>
              Loan payments are based on the amortization formula, which takes
              into account the principal amount, interest rate, and loan term.
              Each payment includes both principal and interest, with the
              proportion changing over time.
            </p>

            <h3>Types of Loans You Can Calculate</h3>
            <ul>
              <li>
                <strong>Auto Loans:</strong> Car and vehicle financing options
              </li>
              <li>
                <strong>Personal Loans:</strong> Debt consolidation, home
                improvement, or expenses
              </li>
              <li>
                <strong>Home & Mortgage Loans:</strong> Financing for property
                purchase
              </li>
              <li>
                <strong>Student Loans:</strong> Education-related borrowing with
                deferred payments
              </li>
              <li>
                <strong>Business Loans:</strong> Expansion, equipment, or
                working capital
              </li>
            </ul>

            <h3>Factors That Affect Loan Costs</h3>
            <ul>
              <li>Interest rate and credit score</li>
              <li>Loan term length</li>
              <li>Loan type (secured vs unsecured)</li>
              <li>Down payments and fees</li>
            </ul>

            <h3>Tips for Getting Better Loan Terms</h3>
            <ol>
              <li>Improve your credit score</li>
              <li>Shop around for multiple lender offers</li>
              <li>Consider shorter loan terms</li>
              <li>Make larger down payments</li>
              <li>Negotiate fees and prepayment penalties</li>
            </ol>

            <h3>FAQs About Loan Calculators</h3>
            <ul>
              <li>How do I calculate my monthly loan payments?</li>
              <li>What is the difference between interest-only and amortized loans?</li>
              <li>How much can I save by paying off a loan early?</li>
              <li>Which loan calculator should I use for auto vs home loans?</li>
              <li>How does my credit score affect loan costs?</li>
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
                  name: "How do I calculate my monthly loan payments?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Monthly loan payments are calculated using the amortization formula, considering loan amount, interest rate, and term. Our loan calculator handles this automatically.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of loans can I calculate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can calculate personal loans, auto loans, mortgages, student loans, and business loans with this tool.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much interest will I pay on a loan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Total interest depends on the loan amount, interest rate, and repayment term. The loan calculator shows both monthly and total interest.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I save money by paying off a loan early?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Making extra payments or paying off your loan early reduces total interest costs. Check your loan terms for prepayment penalties.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Calculate Loan Payments",
              description:
                "Step-by-step guide to manually calculate your monthly loan payments.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Step 1: Gather loan details",
                  text: "Collect the loan amount (principal), interest rate, and loan term (number of months or years).",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 2: Convert interest rate",
                  text: "Divide the annual interest rate by 12 to get the monthly rate.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 3: Apply the amortization formula",
                  text: "Use the formula: Payment = P × r × (1+r)^n ÷ ((1+r)^n - 1), where P = loan amount, r = monthly interest rate, n = total number of months.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 4: Calculate monthly payment",
                  text: "Plug in your values to get the monthly payment.",
                },
                {
                  "@type": "HowToStep",
                  name: "Step 5: Use the calculator for accuracy",
                  text: "Save time and avoid mistakes by using our free loan calculator, which applies the formula automatically.",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
