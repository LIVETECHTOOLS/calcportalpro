import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calculator, Clock, Calendar, TrendingUp } from 'lucide-react';
import TimeCalculator from '@/components/calculators/TimeCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Time Calculator - Calculate Time Differences & Duration | CalcPortal Pro',
  description: 'Free time calculator to compute time differences, duration, and time conversions. Calculate working hours, project timelines, and time management with our accurate time tool.',
  keywords: 'time calculator, time difference calculator, duration calculator, working hours calculator, project timeline calculator, time management tool',
  openGraph: {
    title: 'Time Calculator - Calculate Time Differences & Duration | CalcPortal Pro',
    description: 'Free time calculator to compute time differences, duration, and time conversions. Calculate working hours, project timelines, and time management.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/time',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Calculator - Calculate Time Differences & Duration | CalcPortal Pro',
    description: 'Free time calculator to compute time differences, duration, and time conversions. Calculate working hours, project timelines, and time management.',
  },
};

export default function TimePage() {
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
              Time Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate time differences, duration, and conversions with our comprehensive 
              time calculator. Perfect for project planning, working hours, and time management.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <TimeCalculator />
          </div>

          <AdUnit adSlot="6578933531" />

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Time Calculations
            </h2>
            
            <p className="text-gray-700 mb-6">
              Time is one of our most valuable resources, and understanding how to calculate 
              time differences, durations, and conversions is essential for effective planning 
              and productivity. Whether you're managing projects, tracking work hours, or 
              planning events, accurate time calculations can make all the difference.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Types of Time Calculations
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Time Difference:</strong> Calculate the duration between two specific times</li>
              <li><strong>Duration Addition:</strong> Add time periods to find end times</li>
              <li><strong>Working Hours:</strong> Calculate total work time excluding breaks</li>
              <li><strong>Project Timeline:</strong> Estimate project duration and deadlines</li>
              <li><strong>Time Conversion:</strong> Convert between different time units</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common Time Calculation Scenarios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Work Hours</h4>
                <p className="text-gray-700 mb-3">
                  Calculate total working hours, overtime, and break time for payroll and 
                  productivity tracking.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clock in/out times</li>
                  <li>• Break deductions</li>
                  <li>• Overtime calculations</li>
                  <li>• Weekly/monthly totals</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Project Planning</h4>
                <p className="text-gray-700 mb-3">
                  Estimate project duration, set realistic deadlines, and track progress 
                  against timelines.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Task duration estimates</li>
                  <li>• Critical path analysis</li>
                  <li>• Resource allocation</li>
                  <li>• Milestone tracking</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Travel Planning</h4>
                <p className="text-gray-700 mb-3">
                  Calculate travel time, plan itineraries, and account for time zone differences 
                  when scheduling.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Journey duration</li>
                  <li>• Time zone conversions</li>
                  <li>• Layover calculations</li>
                  <li>• Arrival time estimates</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Event Planning</h4>
                <p className="text-gray-700 mb-3">
                  Schedule events, calculate setup time, and ensure proper timing for 
                  successful execution.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Event duration</li>
                  <li>• Setup/teardown time</li>
                  <li>• Buffer time planning</li>
                  <li>• Schedule coordination</li>
                </ul>
              </div>
            </div>

            <AdUnit adSlot="6578933532" />

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Time Management Best Practices
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Use Time Blocking:</strong> Allocate specific time slots for different tasks</li>
              <li><strong>Account for Buffer Time:</strong> Include extra time for unexpected delays</li>
              <li><strong>Track Actual vs. Estimated:</strong> Compare planned vs. actual time usage</li>
              <li><strong>Consider Peak Hours:</strong> Schedule important tasks during your most productive times</li>
              <li><strong>Regular Reviews:</strong> Periodically assess and adjust your time estimates</li>
            </ol>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg my-8">
              <h4 className="text-xl font-semibold text-accent-800 mb-3">
                Pro Tip: Time Estimation
              </h4>
              <p className="text-accent-700">
                When estimating time for tasks, use the "Pomodoro Technique" - break work into 
                25-minute focused sessions with 5-minute breaks. This method helps improve 
                accuracy in time estimation and boosts productivity.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Time Calculation Formulas
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Basic Time Calculations</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Time Difference:</strong> End Time - Start Time = Duration
                </div>
                <div>
                  <strong>Adding Time:</strong> Start Time + Duration = End Time
                </div>
                <div>
                  <strong>Working Hours:</strong> (End Time - Start Time) - Break Time = Net Work Time
                </div>
                <div>
                  <strong>Percentage of Day:</strong> (Time Period / 24 hours) × 100 = Percentage
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common Time Calculation Mistakes
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Ignoring Time Zones:</strong> Always account for time zone differences in calculations</li>
              <li><strong>Forgetting Break Time:</strong> Include breaks and non-working periods in estimates</li>
              <li><strong>Overlooking Context:</strong> Consider factors like traffic, weather, or dependencies</li>
              <li><strong>Unrealistic Estimates:</strong> Base estimates on historical data, not wishful thinking</li>
              <li><strong>Ignoring Dependencies:</strong> Account for tasks that must be completed before others</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Tools for Better Time Management
            </h3>
            <p className="text-gray-700 mb-6">
              Beyond basic calculations, consider using specialized tools and techniques:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Time Tracking Apps:</strong> Monitor actual time spent on tasks</li>
              <li><strong>Project Management Software:</strong> Visualize timelines and dependencies</li>
              <li><strong>Calendar Integration:</strong> Sync calculations with your scheduling system</li>
              <li><strong>Automation Tools:</strong> Automate repetitive time calculations</li>
              <li><strong>Analytics:</strong> Analyze patterns to improve future estimates</li>
            </ul>

            <p className="text-gray-700 mb-8">
              Mastering time calculations is a fundamental skill for effective time management. 
              Use our time calculator to make accurate estimates, plan your schedule effectively, 
              and maximize your productivity. Remember, time is the one resource you can't 
              create more of, so use it wisely and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
