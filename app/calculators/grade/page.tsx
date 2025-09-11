import type { Metadata } from 'next';
import GradeCalculator from '@/components/calculators/GradeCalculator';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'Grade Calculator',
  description:
    'Free grade calculator to determine your final grade based on assignments, tests, and exams. Calculate weighted grades, final exam scores, semester results, and GPA with our easy-to-use tool.',
  keywords:
    'grade calculator, final grade calculator, weighted grade calculator, test grade calculator, semester grade calculator, college grade calculator, class grade calculator, easy grade calculator, average grade calculator, final exam grade calculator, letter grade calculator, overall grade calculator, GPA calculator, grade calculator with weights, grade calculator points, exam grade calculator',
  openGraph: {
    title: 'Grade Calculator',
    description:
      'Free grade calculator to determine your final grade based on assignments, tests, exams, and participation. Includes weighted, final exam, and GPA calculations.',
    url: 'https://calcportalpro.com/calculators/grade',
  },
  alternates: {
    canonical: '/calculators/grade',
  },
};

export default function GradePage() {
  return (
    <ClientLayoutWrapper>
      <div className="min-h-screen bg-primary-50">
        <div className="container-max py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
              Grade Calculator
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Calculate your final grade based on assignments, tests, exams, and
              participation. Use our weighted grade calculator, final exam grade
              calculator, and GPA calculator to see where you stand.
            </p>
          </div>

          {/* Calculator */}
          <div className="max-w-4xl mx-auto">
            <GradeCalculator />
          </div>

          {/* Educational Content */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">
                Understanding Grade Calculations
              </h2>

              <div className="prose prose-lg max-w-none text-secondary-100">
                <p className="mb-4">
                  Grade calculators help students track academic performance and
                  set realistic goals. With this tool, you can calculate overall,
                  weighted, or final grades to see what you need to succeed.
                </p>

                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Final Grade Calculator
                </h3>
                <p className="mb-4">
                  Enter your coursework, quizzes, and exams to see your projected
                  semester or course grade. This is especially useful at the end
                  of a class when you want to know your final standing.
                </p>

                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Weighted Grade Calculator
                </h3>
                <p className="mb-4">
                  Many courses assign different weights to homework, quizzes, and
                  exams. Our weighted grade calculator ensures you get accurate
                  results by factoring in these differences.
                </p>

                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Test & Exam Grade Calculator
                </h3>
                <p className="mb-4">
                  Wondering what score you need on your next test or final exam?
                  Input your current grades and exam weight to instantly find out
                  what you need to pass or reach your target grade.
                </p>

                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Letter Grade Calculator
                </h3>
                <p className="mb-4">
                  Easily convert percentages into letter grades. Below is a
                  standard U.S. letter grade conversion chart:
                </p>
                <table className="table-auto border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">Percentage</th>
                      <th className="border px-4 py-2">Letter Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">90–100%</td>
                      <td className="border px-4 py-2">A</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">80–89%</td>
                      <td className="border px-4 py-2">B</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">70–79%</td>
                      <td className="border px-4 py-2">C</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">60–69%</td>
                      <td className="border px-4 py-2">D</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">&lt; 60%</td>
                      <td className="border px-4 py-2">F</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                  Tips for Improving Your Grade
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Prioritize assignments and exams with higher weight</li>
                  <li>Track your progress regularly using this calculator</li>
                  <li>Focus on consistent study habits rather than last-minute cramming</li>
                  <li>Ask for help early if you’re struggling in a subject</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">Grade Calculator FAQs</h2>
              <div className="space-y-6 text-secondary-100">
                <div>
                  <h3 className="font-semibold">How do I calculate my final grade?</h3>
                  <p>
                    Multiply each grade by its weight, add them together, then
                    divide by the total weight. Our calculator does this for you
                    automatically.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What is a weighted grade calculator?</h3>
                  <p>
                    A weighted grade calculator accounts for the different
                    percentages assigned to homework, quizzes, exams, and
                    participation when calculating your final score.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">How much do I need on my final exam to pass?</h3>
                  <p>
                    Enter your current grades and the exam weight to instantly see
                    what score you need on the final to pass or reach your target
                    grade.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Does this work for college grades?</h3>
                  <p>
                    Yes! The grade calculator can be used for middle school, high
                    school, and college courses that use percentage or weighted
                    grading systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayoutWrapper>
  );
}
