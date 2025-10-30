import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CategoryBlocks from "@/components/CategoryBlocks";
import PopularCalculators from "@/components/PopularCalculators";
import EducationalHubs from "@/components/EducationalHubs";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Free Financial Calculators & Tools | CalcPortal Pro",
  description:
    "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.",
  keywords:
    "financial calculator, loan calculator, mortgage calculator, tax calculator, investment calculator, retirement calculator, savings calculator, CD calculator, Roth IRA calculator",
  openGraph: {
    title: "CalcPortal Pro",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.",
    url: "https://calcportalpro.com",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Professional Financial Calculators",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcPortal Pro",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning.",
    images: ["https://calcportalpro.com/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

// Homepage Schema
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CalcPortal Pro",
  description:
    "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning",
  url: "https://calcportalpro.com",
  mainEntity: [
    {
      "@type": "SoftwareApplication",
      name: "Financial Calculator Suite",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      <div className="min-h-screen bg-primary-50">
        <section aria-label="Home main content">
          <HeroSection />
          <CategoryBlocks />
          <PopularCalculators />
          <EducationalHubs />
          <TestimonialSection />
        </section>
      </div>
    </>
  );
}
