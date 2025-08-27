import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calculator, Activity, Heart, TrendingUp } from 'lucide-react';
import CalorieCalculator from '@/components/calculators/CalorieCalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'Calorie Calculator - Calculate Daily Calorie Needs & BMR | CalcPortal Pro',
  description: 'Free calorie calculator to compute your daily calorie needs, BMR, and TDEE. Calculate calories for weight loss, maintenance, or muscle gain with our accurate nutrition tool.',
  keywords: 'calorie calculator, BMR calculator, TDEE calculator, daily calorie needs, weight loss calculator, nutrition calculator, metabolism calculator',
  openGraph: {
    title: 'Calorie Calculator - Calculate Daily Calorie Needs & BMR | CalcPortal Pro',
    description: 'Free calorie calculator to compute your daily calorie needs, BMR, and TDEE. Calculate calories for weight loss, maintenance, or muscle gain.',
    type: 'website',
    url: 'https://calcportalpro.com/calculators/calorie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator - Calculate Daily Calorie Needs & BMR | CalcPortal Pro',
    description: 'Free calorie calculator to compute your daily calorie needs, BMR, and TDEE. Calculate calories for weight loss, maintenance, or muscle gain.',
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
              Calculate your daily calorie needs, BMR, and TDEE with our comprehensive 
              calorie calculator. Plan your nutrition for weight loss, maintenance, or muscle gain.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <CalorieCalculator />
          </div>

          <AdUnit adSlot="6578933491" />

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-600 mb-6">
              Understanding Calorie Calculations
            </h2>
            
            <p className="text-gray-700 mb-6">
              Calories are the units of energy that fuel your body's functions, from basic 
              metabolism to physical activity. Understanding how to calculate your daily 
              calorie needs is essential for achieving your health and fitness goals, whether 
              that's losing weight, maintaining your current weight, or building muscle.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Key Calorie Concepts
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>BMR (Basal Metabolic Rate):</strong> Calories your body burns at rest for basic functions</li>
              <li><strong>TDEE (Total Daily Energy Expenditure):</strong> Total calories burned including activity</li>
              <li><strong>Calorie Deficit:</strong> Consuming fewer calories than you burn (for weight loss)</li>
              <li><strong>Calorie Surplus:</strong> Consuming more calories than you burn (for muscle gain)</li>
              <li><strong>Maintenance Calories:</strong> Calories needed to maintain current weight</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              How Calorie Needs Are Calculated
            </h3>
            <p className="text-gray-700 mb-6">
              Calorie calculations are based on several factors including age, gender, weight, 
              height, and activity level. The most accurate formulas consider your body 
              composition and metabolic rate, but general estimates can provide a good starting point.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Activity Level Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Sedentary</h4>
                <p className="text-gray-700 mb-3">
                  Little to no exercise, desk job, mostly sitting.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BMR × 1.2</li>
                  <li>• Office workers</li>
                  <li>• Minimal movement</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Lightly Active</h4>
                <p className="text-gray-700 mb-3">
                  Light exercise 1-3 days per week, some movement.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BMR × 1.375</li>
                  <li>• Walking occasionally</li>
                  <li>• Light sports</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Moderately Active</h4>
                <p className="text-gray-700 mb-3">
                  Moderate exercise 3-5 days per week, active lifestyle.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BMR × 1.55</li>
                  <li>• Regular workouts</li>
                  <li>• Active job</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-200">
                <h4 className="text-lg font-semibold text-secondary-600 mb-3">Very Active</h4>
                <p className="text-gray-700 mb-3">
                  Hard exercise 6-7 days per week, very active lifestyle.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BMR × 1.725</li>
                  <li>• Daily intense workouts</li>
                  <li>• Physical labor job</li>
                </ul>
              </div>
            </div>

            <AdUnit adSlot="6578933492" />

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Weight Management Strategies
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Weight Loss
                </h4>
                <p className="text-gray-700">
                  Create a calorie deficit of 500-1000 calories per day to lose 1-2 pounds per week. 
                  This can be achieved through diet, exercise, or a combination of both. 
                  Never go below 1200 calories for women or 1500 calories for men.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Weight Maintenance
                </h4>
                <p className="text-gray-700">
                  Consume calories equal to your TDEE to maintain your current weight. 
                  Monitor your weight regularly and adjust as needed based on changes in 
                  activity level or body composition.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Muscle Gain
                </h4>
                <p className="text-gray-700">
                  Create a small calorie surplus of 200-500 calories per day to support 
                  muscle growth. Combine with strength training and adequate protein intake 
                  for optimal results.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Factors Affecting Calorie Needs
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Age:</strong> Metabolism slows with age, reducing calorie needs</li>
              <li><strong>Gender:</strong> Men typically have higher calorie needs due to more muscle mass</li>
              <li><strong>Body Composition:</strong> Muscle burns more calories than fat at rest</li>
              <li><strong>Hormones:</strong> Thyroid function and other hormones affect metabolism</li>
              <li><strong>Genetics:</strong> Some people naturally have faster or slower metabolisms</li>
              <li><strong>Medical Conditions:</strong> Certain conditions can affect calorie needs</li>
              <li><strong>Medications:</strong> Some medications can impact metabolism</li>
            </ul>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg my-8">
              <h4 className="text-xl font-semibold text-accent-800 mb-3">
                Pro Tip: Calorie Tracking
              </h4>
              <p className="text-accent-700">
                Use our calorie calculator as a starting point, then track your actual food intake 
                and weight changes for 2-3 weeks. This will help you determine your true calorie 
                needs and make adjustments accordingly. Remember, consistency is key!
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Common Calorie Calculation Mistakes
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Overestimating Activity Level:</strong> Be honest about your actual activity</li>
              <li><strong>Ignoring Body Composition:</strong> Muscle mass significantly affects calorie needs</li>
              <li><strong>Not Adjusting for Changes:</strong> Recalculate as you lose weight or change activity</li>
              <li><strong>Focusing Only on Calories:</strong> Quality of food matters as much as quantity</li>
              <li><strong>Setting Unrealistic Goals:</strong> Aim for sustainable, gradual changes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              Beyond Calories: Quality Matters
            </h3>
            <p className="text-gray-700 mb-6">
              While calorie counting is a useful tool, the quality of your food choices is equally 
              important. Focus on whole, nutrient-dense foods that provide vitamins, minerals, 
              and fiber. A diet rich in vegetables, fruits, lean proteins, and healthy fats will 
              support your health goals better than empty calories from processed foods.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-600 mb-4">
              When to Recalculate
            </h3>
            <p className="text-gray-700 mb-6">
              Your calorie needs change over time, so it's important to recalculate periodically:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Weight Changes:</strong> Every 10-15 pounds lost or gained</li>
              <li><strong>Activity Changes:</strong> When starting or stopping exercise programs</li>
              <li><strong>Age Milestones:</strong> Every 5-10 years as metabolism changes</li>
              <li><strong>Life Changes:</strong> Pregnancy, illness, or significant lifestyle changes</li>
              <li><strong>Plateaus:</strong> When progress stalls for 2-3 weeks</li>
            </ul>

            <p className="text-gray-700 mb-8">
              Understanding your calorie needs is a powerful tool for achieving your health and 
              fitness goals. Use our calorie calculator as a starting point, then listen to your 
              body and adjust based on your results. Remember that sustainable changes take time, 
              and the goal is to create a healthy relationship with food that you can maintain 
              for life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
