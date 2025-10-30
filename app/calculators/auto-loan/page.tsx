import { Metadata } from "next";
import Link from "next/link";
import AutoLoanCalculator from "@/components/calculators/AutoLoanCalculator";

export const metadata: Metadata = {
  title: "Auto Loan Calculator",
  description:
    "Best free Auto Loan Calculator to estimate monthly car payments, total interest, and loan costs. Calculate by term, tax, extra payments, refinance, and more.",
  keywords: [
    "auto loan calculator",
    "car auto loan calculator",
    "vehicle auto loan calculator",
    "nerdwallet auto loan calculator",
    "bankrate auto loan calculator",
    "usaa auto loan calculator",
    "navy federal auto loan calculator",
    "capital one auto loan calculator",
    "bank of america auto loan calculator",
    "auto loan calculator texas",
    "auto loan calculator florida",
    "refinance auto loan calculator",
    "auto loan calculator with tax",
    "auto loan calculator with extra payments",
    "auto loan calculator payment",
    "84 month auto loan calculator",
    "simple auto loan calculator",
    "used auto loan calculator",
  ],
  alternates: { canonical: "/calculators/auto-loan" },
  openGraph: {
    type: "website",
    url: "https://calcportalpro.com/calculators/auto-loan",
    title: "Auto Loan Calculator | Free Online Car Financing Tool",
    description:
      "Free Auto Loan Calculator online. Estimate monthly car payments, interest, and total loan costs by state, tax, term length, and extra payments.",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Auto Loan Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Loan Calculator | Free Car Loan Payments Tool",
    description:
      "Use our Auto Loan Calculator to calculate car loan payments, refinancing, and costs. Works for Texas, Florida, and all U.S. states.",
    images: ["https://calcportalpro.com/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },
};

export default function AutoLoanCalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <div className="mb-8">
          <Link
            href="/calculators"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            ← Back to Calculators
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">
            Auto Loan Calculator
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your auto loan payments, interest, and loan costs. Compare
            financing terms, taxes, refinance options, and extra payments with
            confidence.
          </p>
        </div>

        {/* Auto Loan Calculator Tool */}
        <AutoLoanCalculator />

        {/* Fixed 728x90 Ad */}
        <div className="my-8 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-5944904248745587"
            data-ad-slot="2674505389"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </div>

        <div className="mt-12 prose max-w-none">
          <h2>Understanding Auto Loans</h2>
          <p>
            Auto loans are secured loans used to purchase vehicles. The car
            serves as collateral, which helps reduce interest rates compared to
            unsecured loans.
          </p>

          {/* Responsive Ad inside content */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5944904248745587"
            data-ad-slot="1716130019"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />

          <h3>Key Factors Affecting Auto Loan Rates</h3>
          <ul>
            <li>
              <strong>Credit Score:</strong> Higher scores qualify for lower
              rates
            </li>
            <li>
              <strong>Loan Term:</strong> Longer terms may increase total costs
            </li>
            <li>
              <strong>Down Payment:</strong> Bigger down payments lower loan
              balance
            </li>
            <li>
              <strong>Vehicle Age:</strong> New cars often qualify for better
              rates
            </li>
            <li>
              <strong>Lender Type:</strong> Banks, credit unions, and dealers
              vary
            </li>
          </ul>

          <h3>Auto Loan Variations</h3>
          <ul>
            <li>Refinance Auto Loan Calculator</li>
            <li>Auto Loan Calculator with Tax</li>
            <li>Auto Loan Calculator with Extra Payments</li>
            <li>84-Month Auto Loan Calculator</li>
            <li>Used Car Loan Calculator</li>
          </ul>

          <h3>State-Specific Examples</h3>
          <p>
            Whether you’re financing in <strong>Texas</strong>,{" "}
            <strong>Florida</strong>, or anywhere in the U.S., this calculator
            works to estimate car loan payments based on taxes and terms in your
            state.
          </p>

          <h2>Auto Loan Calculator FAQs</h2>
          <h3>How do I calculate auto loan payments?</h3>
          <p>
            Enter your loan amount, interest rate, and term to get monthly
            payment, total interest, and overall cost.
          </p>

          <h3>Can I calculate extra payments?</h3>
          <p>
            Yes, you can use the extra payment option to see how much faster you
            can pay off your auto loan.
          </p>

          <h3>What is an 84-month auto loan?</h3>
          <p>
            An 84-month (7-year) loan lowers monthly payments but increases
            total interest paid. This calculator shows the tradeoff.
          </p>

          <h3>How does refinancing affect auto loans?</h3>
          <p>
            Refinancing replaces your existing loan with a new one, often with a
            lower rate or different term. Use the refinance feature to compare.
          </p>
        </div>
      </div>
    </div>
  );
}
