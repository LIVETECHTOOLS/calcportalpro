import { Metadata } from "next";
import Link from "next/link";
import BusinessLoanCalculator from "@/components/calculators/BusinessLoanCalculator";

export const metadata: Metadata = {
  title: "Business Loan Calculator",
  description:
    "Free Business Loan Calculator to estimate loan payments, interest costs, and financing options. Calculate monthly payments for SBA loans, small business loans, and commercial financing.",
  keywords: [
    "business loan calculator",
    "small business loan calculator",
    "business loan calculator sba",
    "commercial business loan calculator",
    "startup business loan calculator",
    "amortization business loan calculator",
    "free business loan calculator",
    "sba business loan calculator",
    "business loan calculator uk",
    "short term business loan calculator",
    "business loan calculator payment",
    "va business loan calculator",
    "10 year business loan calculator",
    "buying a business loan calculator",
    "start up business loan calculator",
    "business loan calculator online",
  ],
  alternates: { canonical: "/calculators/business-loan" },
  openGraph: {
    type: "website",
    url: "https://calcportalpro.com/calculators/business-loan",
    title: "Business Loan Calculator",
    description:
      "Estimate business loan payments, total interest, and repayment terms with our free Business Loan Calculator. Plan SBA, startup, or commercial loans instantly.",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Business Loan Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Loan Calculator",
    description:
      "Free Business Loan Calculator to plan SBA, startup, and commercial financing. Instantly estimate payments, interest, and costs.",
    images: ["https://calcportalpro.com/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "serviceType": "Business Loan Calculator",
  "name": "Business Loan Calculator",
  "url": "https://calcportalpro.com/calculators/business-loan",
  "description":
    "Free online Business Loan Calculator to estimate loan payments, total interest, and repayment schedules for business financing, SBA loans, and commercial loans.",
  "provider": {
    "@type": "Organization",
    "name": "CalcPortal Pro",
    "url": "https://calcportalpro.com",
    "logo": "https://calcportalpro.com/logo.png",
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
};

export default function BusinessLoanCalculatorPage() {
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
            Business Loan Calculator
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your business loan payments, total interest, and loan
            costs. Plan your business financing with confidence.
          </p>
        </div>

        {/* Business Loan Calculator Tool */}
        <BusinessLoanCalculator />

        {/* Fixed 728x90 Ad */}
        <div className="my-8 flex justify-center">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944904248745587"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-5944904248745587"
            data-ad-slot="2674505389"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          />
        </div>

        <div className="mt-12 prose max-w-none">
          <h2>Understanding Business Loans</h2>
          <p>
            Business loans provide capital for operations, expansion, equipment
            purchases, working capital, and other financing needs.
          </p>

          {/* Responsive Ad inside content */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944904248745587"
            crossOrigin="anonymous"
          ></script>
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
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          />

          <h3>Types of Business Loans</h3>
          <ul>
            <li>
              <strong>Term Loans:</strong> Lump sum with fixed repayment schedule
            </li>
            <li>
              <strong>Lines of Credit:</strong> Flexible borrowing up to a limit
            </li>
            <li>
              <strong>SBA Loans:</strong> Government-backed loans for small
              businesses
            </li>
            <li>
              <strong>Equipment Financing:</strong> Loans specifically for
              equipment purchases
            </li>
            <li>
              <strong>Invoice Financing:</strong> Advances on outstanding
              invoices
            </li>
          </ul>

          <h3>Qualification Requirements</h3>
          <ul>
            <li>Business credit score and history</li>
            <li>Personal credit score (for small businesses)</li>
            <li>Business financial statements</li>
            <li>Business plan and purpose of funds</li>
            <li>Collateral or personal guarantee</li>
          </ul>
        </div>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </div>
    </div>
  );
}
