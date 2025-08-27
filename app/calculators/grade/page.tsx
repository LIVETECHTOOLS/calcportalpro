import { Metadata } from 'next';
import GradeCalculator from '@/components/calculators/GradeCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Grade Calculator | Calcportalpro',
  description: 'Free grade calculator to determine your final grade based on assignments, tests, and exams. Calculate weighted grades and GPA with our easy-to-use tool.',
  keywords: 'grade calculator, final grade calculator, weighted grade calculator, test grade calculator, GPA calculator, academic calculator',
  openGraph: {
    title: 'Grade Calculator - Grade Calculator',
    description: 'Free grade calculator to determine your final grade based on assignments, tests, and exams.',
    url: 'https://calcportalpro.com/calculators/grade',
  },
  alternates: {
    canonical: '/calculators/grade',
  },
};

export default function GradePage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Grade Calculator
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your final grade based on assignments, tests, and exams. Use our weighted grade calculator to see what you need to achieve your target grade.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <GradeCalculator />
        </div>

        <AdUnit adSlot="6578933521" />

        {/* Educational Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">
              Understanding Grade Calculations
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-100 mb-4">
                Grade calculators help students understand their academic performance and plan their studies effectively. Understanding how grades are calculated can motivate you to improve in specific areas.
              </p>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                How Weighted Grades Work
              </h3>
              <p className="text-secondary-100 mb-4">
                In weighted grading systems, different assignments and assessments carry different importance. For example, final exams might be worth 40% of your grade, while homework assignments might only be worth 10%.
              </p>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Common Weighting Systems
              </h3>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li><strong>Homework/Assignments:</strong> 20-30% of final grade</li>
                <li><strong>Quizzes:</strong> 15-25% of final grade</li>
                <li><strong>Midterm Exams:</strong> 20-30% of final grade</li>
                <li><strong>Final Exam:</strong> 25-40% of final grade</li>
                <li><strong>Participation:</strong> 5-15% of final grade</li>
              </ul>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Tips for Improving Your Grade
              </h3>
              <p className="text-secondary-100 mb-4">
                Focus on high-weighted assignments first, attend all classes, complete homework on time, and seek help when needed. Small improvements in multiple areas can significantly boost your overall grade.
              </p>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Example Calculation
              </h3>
              <p className="text-secondary-100 mb-4">
                If you have a 90% on homework (worth 20%), 85% on quizzes (worth 25%), 88% on midterms (worth 25%), and need to calculate what you need on the final exam (worth 30%) to get an A (90% overall), you would need approximately 89% on the final.
              </p>
            </div>
          </div>
        </div>

        <AdUnit adSlot="6578933522" />
      </div>
    </div>
  );
}
