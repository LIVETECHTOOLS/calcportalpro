import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GPACalculator from '@/components/calculators/GPACalculator'

export const metadata: Metadata = {
  title: 'GPA Calculator',
  description:
    'Free GPA Calculator. Calculate college GPA, high school GPA, weighted and unweighted GPA, cumulative GPA, and semester GPA. Track academic progress and plan for admissions or scholarships.',
  keywords:
    'GPA calculator, college GPA calculator, high school GPA calculator, weighted GPA calculator, unweighted GPA calculator, cumulative GPA calculator, uf gpa calculator, semester GPA calculator, overall GPA calculator, GPA calculator from percentage, science GPA calculator, what if GPA calculator, calculate GPA online',
  openGraph: {
    title:
      'GPA Calculator 2024 - Weighted, Unweighted, Cumulative & Semester GPA',
    description:
      'Free GPA calculator to compute your Grade Point Average. Supports high school, college, weighted, unweighted, and cumulative GPA calculations.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/gpa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator 2024 - Calculate College & High School GPA Online',
    description:
      'Easily calculate weighted and unweighted GPA. Free GPA calculator for students to track progress, scholarships, and academic goals.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/gpa',
  },
}

export default function GPAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-600 mb-4">
              GPA Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your Grade Point Average (GPA) quickly and accurately.
              Supports weighted, unweighted, cumulative, and semester GPA for
              high school and college students.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <GPACalculator />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Your GPA
            </h2>

            <p className="text-gray-700 mb-6">
              Your Grade Point Average (GPA) is one of the most important
              academic metrics. Colleges, universities, and employers use GPA to
              evaluate performance. Knowing how GPA is calculated can help you
              set goals and plan your academic path.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Types of GPA
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Unweighted GPA:</strong> All classes counted equally on
                a 4.0 scale
              </li>
              <li>
                <strong>Weighted GPA:</strong> Honors, AP, and IB classes add
                extra points
              </li>
              <li>
                <strong>Cumulative GPA:</strong> Overall GPA across all terms
              </li>
              <li>
                <strong>Semester GPA:</strong> GPA for a single term or semester
              </li>
              <li>
                <strong>Major GPA:</strong> GPA for classes in your field of
                study
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              How GPA is Calculated
            </h3>
            <p className="text-gray-700 mb-6">
              Most schools use a 4.0 scale: A = 4.0, B = 3.0, C = 2.0, D = 1.0,
              F = 0. Weighted GPAs may add 0.5–1.0 points for advanced courses.
              Some institutions use 5.0 or percentage-based scales—always check
              your school’s grading policy.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Why GPA Matters
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>College Admissions:</strong> Minimum GPA requirements
                often apply
              </li>
              <li>
                <strong>Scholarships:</strong> Many programs require a GPA
                threshold
              </li>
              <li>
                <strong>Graduate School:</strong> Admission is highly GPA-driven
              </li>
              <li>
                <strong>Careers:</strong> Some employers consider GPA for
                entry-level jobs
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Tips for Improving GPA
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li>Stay consistent with study habits</li>
              <li>Attend all classes and participate actively</li>
              <li>Ask for help early when struggling</li>
              <li>Use effective study methods (flashcards, practice tests)</li>
              <li>Balance course loads strategically</li>
            </ol>

            {/* FAQ Section */}
            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common GPA Questions
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Can I recover from a low GPA?
                </h4>
                <p className="text-gray-700">
                  Yes. Improvement takes consistency, but higher grades in
                  future semesters can raise your cumulative GPA. Many schools
                  also consider GPA trends.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  What’s a good GPA for college?
                </h4>
                <p className="text-gray-700">
                  A GPA above 3.0 is generally considered good, while 3.5+ is
                  excellent. Requirements vary by school and program.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  How often should I check my GPA?
                </h4>
                <p className="text-gray-700">
                  Check after each semester to track progress and adjust study
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Compare Calculators */}
          <div className="mt-16 bg-gray-100 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compare Other Calculators
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-600">
              <li>
                <Link href="/calculators/salary">Salary Calculator</Link>
              </li>
              <li>
                <Link href="/calculators/tax">Tax Calculator</Link>
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

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I recover from a low GPA?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Consistently earning higher grades in future semesters can raise your GPA. Many schools also consider GPA trends.',
                },
              },
              {
                '@type': 'Question',
                name: 'What’s a good GPA for college?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A GPA above 3.0 is good, while 3.5+ is excellent. Requirements vary by institution.',
                },
              },
              {
                '@type': 'Question',
                name: 'How often should I check my GPA?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It’s best to check your GPA after each semester to track progress and adjust study strategies.',
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
            name: 'How to Calculate GPA',
            description:
              'Step-by-step guide for calculating GPA on a 4.0 scale using weighted or unweighted credits.',
            step: [
              {
                '@type': 'HowToStep',
                name: 'List Your Courses and Credits',
                text: 'Write down each course with its corresponding credit hours.',
              },
              {
                '@type': 'HowToStep',
                name: 'Assign Grade Points',
                text: 'Convert each letter grade to its grade point equivalent (A=4.0, B=3.0, etc.).',
              },
              {
                '@type': 'HowToStep',
                name: 'Multiply and Sum',
                text: 'Multiply each grade point by course credits, then sum total grade points.',
              },
              {
                '@type': 'HowToStep',
                name: 'Divide by Total Credits',
                text: 'Divide total grade points by total credits to get your GPA.',
              },
            ],
          }),
        }}
      />
    </div>
  )
}
