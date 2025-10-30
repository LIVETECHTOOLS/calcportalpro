import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, Clock, Calendar, TrendingUp } from 'lucide-react'
import TimeCalculator from '@/components/calculators/TimeCalculator'

export const metadata: Metadata = {
  title: 'Time Calculator',
  description:
    'Free online time calculator to compute elapsed time, working hours, travel duration, and time differences. Add or subtract hours and minutes for projects, schedules, or daily planning.',
  keywords:
    'time calculator, elapsed time calculator, working hours calculator, add time calculator, subtract time calculator, travel time calculator, duration calculator, date and time calculator, military time calculator, project timeline calculator, sleep time calculator, work hours calculator',
  openGraph: {
    title: 'Time Calculator - Calculate Hours, Duration, and Time Differences | CalcPortal Pro',
    description:
      'Use our free time calculator to calculate elapsed time, working hours, project timelines, and travel schedules. Add or subtract hours and minutes easily.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/time',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Calculator - Calculate Hours, Duration, and Time Differences | CalcPortal Pro',
    description:
      'Free time calculator to compute differences, add or subtract hours, and manage work schedules or travel plans.',
  },
  alternates: {
    canonical: 'https://calcportalpro.com/calculators/time',
  },
}

export default function TimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Time Calculator</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate elapsed time, working hours, travel schedules, or project duration. Add or subtract hours and minutes with accuracy.
            </p>
          </div>

          {/* Calculator */}
          <TimeCalculator />

          {/* Educational Content */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Time Calculations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                A time calculator is a simple but powerful tool that helps you compute elapsed time,
                schedule events, and manage projects efficiently. From planning work shifts to
                calculating flight durations, accurate time calculation is essential in daily life.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Common Use Cases</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Work Hours:</strong> Track total hours worked by subtracting start and end times.</li>
                <li><strong>Travel:</strong> Estimate arrival times by adding travel duration to departure time.</li>
                <li><strong>Projects:</strong> Manage timelines by breaking down tasks into hours and minutes.</li>
                <li><strong>Events:</strong> Plan meetings or activities across different time zones.</li>
                <li><strong>Sleep:</strong> Use bedtime and wake-up calculations for better rest.</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-secondary-600 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">⏱ How do I calculate elapsed time?</h3>
                <p>Subtract the start time from the end time. For example, from 9:00 AM to 5:30 PM, the elapsed time is 8 hours 30 minutes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">🛫 How do I calculate travel time?</h3>
                <p>Enter your departure time and add your journey duration. This is useful for road trips, flight planning, and public transport schedules.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">💼 Can this work as a work hours calculator?</h3>
                <p>Yes. Input clock-in and clock-out times, subtract breaks, and you’ll see the total work hours calculated instantly.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">😴 Can I calculate my sleep schedule?</h3>
                <p>Yes. Use the calculator to plan bedtime or wake-up time by adding or subtracting the recommended sleep hours.</p>
              </div>
            </div>
          </div>

          {/* Compare Calculators Section */}
          <div className="mt-16 bg-gray-100 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare with Other Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/calculators/date" className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <Calendar className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-medium">Date Calculator</span>
              </Link>
              <Link href="/calculators/age" className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <TrendingUp className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-medium">Age Calculator</span>
              </Link>
              <Link href="/calculators/bmi" className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <Calculator className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-medium">BMI Calculator</span>
              </Link>
              <Link href="/calculators/investment" className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <Clock className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-medium">Investment Calculator</span>
              </Link>
            </div>
          </div>

          {/* JSON-LD Schema Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How do I calculate elapsed time?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Subtract the start time from the end time. Example: 9:00 AM to 5:30 PM is 8 hours 30 minutes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I calculate travel time?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Enter departure time and add journey duration to calculate arrival time.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can this work as a work hours calculator?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Input clock-in and clock-out times, subtract breaks, and the tool will calculate total work hours.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I calculate my sleep schedule?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Add or subtract recommended sleep hours to plan bedtime or wake-up time.',
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
                name: 'How to Calculate Elapsed Time',
                description: 'Step-by-step guide to calculating elapsed time.',
                step: [
                  { '@type': 'HowToStep', text: 'Note your start time.' },
                  { '@type': 'HowToStep', text: 'Note your end time.' },
                  { '@type': 'HowToStep', text: 'Subtract start time from end time.' },
                  { '@type': 'HowToStep', text: 'Convert result into hours and minutes.' },
                ],
              }),
            }}
          />
        </div>
      </div>
    </div>
  )
}
