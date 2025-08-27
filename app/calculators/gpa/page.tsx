import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calculator, BookOpen, TrendingUp } from 'lucide-react';
import GPACalculator from '@/components/calculators/GPACalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'GPA Calculator - Calculate Your Grade Point Average | CalcPortal Pro',
  description: 'Free GPA calculator to compute your Grade Point Average. Calculate weighted and unweighted GPA, track academic progress, and plan your academic goals with our accurate GPA tool.',
  keywords: 'GPA calculator, grade point average, weighted GPA, unweighted GPA, academic calculator, college GPA, high school GPA, grade calculator',
  openGraph: {
    title: 'GPA Calculator - Calculate Your Grade Point Average | CalcPortal Pro',
    description: 'Free GPA calculator to compute your Grade Point Average. Calculate weighted and unweighted GPA, track academic progress, and plan your academic goals.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/gpa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator - Calculate Your Grade Point Average | CalcPortal Pro',
    description: 'Free GPA calculator to compute your Grade Point Average. Calculate weighted and unweighted GPA, track academic progress, and plan your academic goals.',
  },
};

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
              Calculate your Grade Point Average (GPA) with our comprehensive GPA calculator. 
              Track your academic progress, plan your studies, and achieve your educational goals.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <GPACalculator />
          </div>

          <AdUnit adSlot="6578933511" />

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Your GPA
            </h2>
            
            <p className="text-gray-700 mb-6">
              Your Grade Point Average (GPA) is one of the most important metrics used by colleges, 
              universities, and employers to evaluate academic performance. Understanding how to calculate 
              and improve your GPA is crucial for academic success.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              What is GPA?
            </h3>
            <p className="text-gray-700 mb-6">
              GPA stands for Grade Point Average and is a numerical representation of your academic 
              performance. It's calculated by converting letter grades to numerical values and then 
              averaging them, often with weights applied for course difficulty.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Types of GPA
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Unweighted GPA:</strong> All classes are treated equally regardless of difficulty</li>
              <li><strong>Weighted GPA:</strong> Honors, AP, and IB classes receive extra points</li>
              <li><strong>Cumulative GPA:</strong> Overall GPA across all academic terms</li>
              <li><strong>Major GPA:</strong> GPA for courses in your specific field of study</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              How GPA is Calculated
            </h3>
            <p className="text-gray-700 mb-6">
              The standard 4.0 scale is most common, where A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0.0. 
              For weighted GPAs, honors classes might add 0.5 points, and AP/IB classes might add 1.0 point.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Why GPA Matters
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>College Admissions:</strong> Most colleges have minimum GPA requirements</li>
              <li><strong>Scholarships:</strong> Many scholarships require maintaining a certain GPA</li>
              <li><strong>Graduate School:</strong> Advanced degree programs often have strict GPA requirements</li>
              <li><strong>Career Opportunities:</strong> Some employers consider GPA for entry-level positions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Tips for Improving Your GPA
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li><strong>Stay Organized:</strong> Use planners and calendars to track assignments and deadlines</li>
              <li><strong>Attend All Classes:</strong> Regular attendance improves understanding and participation grades</li>
              <li><strong>Seek Help Early:</strong> Don't wait until you're struggling to ask for assistance</li>
              <li><strong>Study Smart:</strong> Use active learning techniques like practice problems and group study</li>
              <li><strong>Balance Your Schedule:</strong> Don't overload with too many difficult classes at once</li>
            </ol>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              GPA Scale Variations
            </h3>
            <p className="text-gray-700 mb-6">
              While the 4.0 scale is standard, some schools use different scales. Some use a 5.0 scale 
              for weighted GPAs, while others might use percentage-based systems. Always check your 
              school's specific grading policy.
            </p>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg my-8">
              <h4 className="text-xl font-semibold text-accent-800 mb-3">
                Pro Tip: GPA Planning
              </h4>
              <p className="text-accent-700">
                Use our GPA calculator to plan ahead! Calculate what grades you need in upcoming 
                assignments to reach your target GPA. This proactive approach can help you stay on 
                track and make informed decisions about your academic priorities.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common GPA Questions
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Can I recover from a low GPA?
                </h4>
                <p className="text-gray-700">
                  Yes! While it takes time, you can improve your GPA by consistently earning higher 
                  grades in future courses. Many colleges also look at grade trends and improvement over time.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  How often should I check my GPA?
                </h4>
                <p className="text-gray-700">
                  Check your GPA after each grading period or semester. Regular monitoring helps you 
                  identify trends and make adjustments before it's too late.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  What's a good GPA for college?
                </h4>
                <p className="text-gray-700">
                  A 3.0+ GPA is generally considered good, while 3.5+ is excellent. However, requirements 
                  vary by institution and program, so research your target schools specifically.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              Understanding and managing your GPA is a crucial skill for academic success. Use our 
              GPA calculator regularly to track your progress, plan your studies, and stay motivated 
              toward your educational goals. Remember, GPA is just one measure of academic achievement, 
              but it's an important one that can open doors to opportunities.
            </p>
          </div>
        </div>

        <AdUnit adSlot="6578933512" />
      </div>
    </div>
  );
}
