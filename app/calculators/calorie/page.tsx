import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";


export const metadata: Metadata = {
  title: "Calorie Calculator",
  description:
    "Free calorie calculator to compute daily calorie needs, BMR, and TDEE. Includes weight loss, maintenance, food, recipe, and exercise calorie calculators.",
  keywords: [
    "calorie calculator",
    "maintenance calorie calculator",
    "weight loss calorie calculator",
    "calorie calculator for weight loss",
    "daily calorie calculator",
    "food calorie calculator",
    "recipe calorie calculator",
    "calorie calculator app",
    "calorie calculator food",
    "running calorie calculator",
    "walking calorie calculator",
    "treadmill calorie calculator",
    "dog calorie calculator",
    "cat calorie calculator",
    "starbucks calorie calculator",
    "chipotle calorie calculator",
    "subway calorie calculator",
    "chipotle bowl calorie calculator",
    "losertown calorie calculator",
  ],
  alternates: { canonical: "/calculators/calorie" },
  openGraph: {
    title: "Calorie Calculator",
    description:
      "Use our free calorie calculator for BMR & TDEE, plus food, recipe, maintenance, and weight loss calorie tools. Works for men, women, and fitness planning.",
    type: "website",
    url: "https://calcportalpro.com/calculators/calorie",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calorie Calculator - CalcPortal Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Calorie Calculator",
    description:
      "Calculate daily calorie needs with our calorie calculator. Includes weight loss, maintenance, food, recipe, running, walking & treadmill calculators.",
    images: ["https://calcportalpro.com/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },
};

export default function CaloriePage() {
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
              Calorie Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your daily calorie needs, BMR, and TDEE with our
              comprehensive calorie calculator. Plan nutrition for{" "}
              <strong>weight loss, maintenance, or muscle gain</strong>.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <CalorieCalculator />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Maintenance Calorie Calculator</h2>
            <p>
              Your maintenance calories are the number of calories needed to
              keep your weight stable. This depends on your{" "}
              <strong>BMR (Basal Metabolic Rate)</strong> and{" "}
              <strong>TDEE (Total Daily Energy Expenditure)</strong>.
            </p>

            <h2>Weight Loss Calorie Calculator</h2>
            <p>
              To lose weight, create a calorie deficit of 500–1000 calories per
              day. This results in safe weight loss of 1–2 lbs per week.
            </p>

            <h2>Food & Recipe Calorie Calculator</h2>
            <p>
              Tracking your meals is essential. Use a{" "}
              <strong>food calorie calculator</strong> or{" "}
              <strong>recipe calorie calculator</strong> to estimate calories in
              homemade or restaurant meals.
            </p>

            <h2>Exercise Calorie Calculators</h2>
            <p>
              Activity increases calorie burn. Use tools like a{" "}
              <strong>running calorie calculator</strong>,{" "}
              <strong>walking calorie calculator</strong>, or{" "}
              <strong>treadmill calorie calculator</strong> to estimate your
              exercise impact.
            </p>

            <h2>Popular Food Chain Calorie Calculators</h2>
            <p>
              Many people search for branded calorie counts. Examples include{" "}
              <strong>Starbucks calorie calculator</strong>,{" "}
              <strong>Chipotle calorie calculator</strong>, and{" "}
              <strong>Subway calorie calculator</strong>.
            </p>

            <h2>FAQs About Calorie Calculators</h2>
            <h3>How many calories should I eat to lose weight?</h3>
            <p>
              Use our <strong>weight loss calorie calculator</strong> to find
              out. A daily deficit of 500–1000 calories is recommended for safe
              fat loss.
            </p>

            <h3>What’s the difference between BMR and TDEE?</h3>
            <p>
              BMR is the energy your body burns at rest. TDEE adds activity
              levels like exercise, walking, and job-related movement.
            </p>

            <h3>Can I calculate calories for pets?</h3>
            <p>
              Yes, there are specific tools like a{" "}
              <strong>dog calorie calculator</strong> and{" "}
              <strong>cat calorie calculator</strong> for pet nutrition.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How many calories should I eat to lose weight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A daily calorie deficit of 500–1000 calories helps you lose 1–2 lbs per week safely. Use our weight loss calorie calculator to personalize results.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the difference between BMR and TDEE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMR is the energy burned at rest, while TDEE includes all daily activity like exercise and movement.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate calories for pets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, calculators exist for pets including dog calorie calculators and cat calorie calculators to estimate daily energy needs.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
