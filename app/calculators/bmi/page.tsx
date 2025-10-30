import { Metadata } from "next";
import Link from "next/link";
import BMICalculator from "@/components/calculators/BMICalculator";

export const metadata: Metadata = {
  title: "BMI Calculator",
  description:
    "Free BMI Calculator for men, women, and adults. Check your Body Mass Index by age, gender, and weight in kg. Online tool with instant results and health categories.",
  keywords: [
    "bmi calculator",
    "bmi calculator women",
    "bmi calculator men",
    "bmi calculator female",
    "bmi calculator male",
    "bmi calculator by age",
    "bmi calculator online",
    "child bmi calculator",
    "adult bmi calculator",
    "bmi calculator kg",
  ],
  alternates: { canonical: "/calculators/bmi" },
  openGraph: {
    type: "website",
    url: "https://calcportalpro.com/calculators/bmi",
    title: "BMI Calculator",
    description:
      "Free BMI Calculator online for men, women, and adults. Instantly calculate your BMI by age, gender, and weight in kg with health insights.",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Free BMI Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator",
    description:
      "Free BMI Calculator online for men, women, and adults. Instantly calculate your BMI by age, gender, and weight in kg with health insights.",
    images: ["https://calcportalpro.com/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  name: "BMI Calculator",
  url: "https://calcportalpro.com/calculators/bmi",
  description:
    "Free online BMI Calculator to check your Body Mass Index (BMI) for men, women, children, and adults using height and weight.",
  publisher: {
    "@type": "Organization",
    name: "CalcPortal Pro",
    url: "https://calcportalpro.com",
    logo: "https://calcportalpro.com/logo.png",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function BMICalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/calculators"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            ← Back to Calculators
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">
            BMI Calculator
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your Body Mass Index (BMI) to understand your weight
            category and get personalized health insights.
          </p>
        </div>

        {/* BMI Calculator Tool */}
        <BMICalculator />

        {/* Educational Content */}
        <div className="mt-12 prose max-w-none">
          <h2>What is BMI?</h2>
          <p>
            Body Mass Index (BMI) is a simple calculation using your height and
            weight to estimate body fat. It's a useful screening tool to
            identify potential weight problems in adults.
          </p>

          <h3>BMI Categories</h3>
          <ul>
            <li>
              <strong>Underweight:</strong> BMI less than 18.5
            </li>
            <li>
              <strong>Normal weight:</strong> BMI 18.5 to 24.9
            </li>
            <li>
              <strong>Overweight:</strong> BMI 25 to 29.9
            </li>
            <li>
              <strong>Obese:</strong> BMI 30 or greater
            </li>
          </ul>

          <h3>Important Notes</h3>
          <p>
            BMI is not a diagnostic tool and doesn't measure body fat directly.
            It may not be accurate for:
          </p>
          <ul>
            <li>Athletes with high muscle mass</li>
            <li>Pregnant women</li>
            <li>Children and teenagers</li>
            <li>Elderly individuals</li>
          </ul>
          <p>
            Always consult with a healthcare professional for personalized
            health advice.
          </p>
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
