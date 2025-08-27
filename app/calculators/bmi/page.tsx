import { Metadata } from 'next';
import Link from 'next/link';
import BMICalculator from '@/components/calculators/BMICalculator';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'BMI Calculator | CalcPortal Pro',
  description: 'Calculate your Body Mass Index (BMI) to understand your weight category and health status. Free, accurate BMI calculator with health insights.',
  alternates: { canonical: '/calculators/bmi' }
};

export default function BMICalculatorPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <div className="mb-8">
          <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
            ← Back to Calculators
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-500 mb-4">BMI Calculator</h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Calculate your Body Mass Index (BMI) to understand your weight category and get personalized health insights.
          </p>
        </div>

        <BMICalculator />

        <AdUnit adSlot="6578933481" />

        <div className="mt-12 prose max-w-none">
          <h2>What is BMI?</h2>
          <p>
            Body Mass Index (BMI) is a simple calculation using your height and weight to estimate body fat. 
            It's a useful screening tool to identify potential weight problems in adults.
          </p>
          
          <h3>BMI Categories</h3>
          <ul>
            <li><strong>Underweight:</strong> BMI less than 18.5</li>
            <li><strong>Normal weight:</strong> BMI 18.5 to 24.9</li>
            <li><strong>Overweight:</strong> BMI 25 to 29.9</li>
            <li><strong>Obese:</strong> BMI 30 or greater</li>
          </ul>
          
          <h3>Important Notes</h3>
          <p>
            BMI is not a diagnostic tool and doesn't measure body fat directly. It may not be accurate for:
          </p>
          <AdUnit adSlot="6578933482" />
          <ul>
            <li>Athletes with high muscle mass</li>
            <li>Pregnant women</li>
            <li>Children and teenagers</li>
            <li>Elderly individuals</li>
          </ul>
          
          <p>
            Always consult with a healthcare professional for personalized health advice.
          </p>
        </div>
      </div>
    </div>
  );
}
