'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Scale, Ruler, Target, Copy, Check } from 'lucide-react';

interface BMIResult {
  bmi: number;
  category: string;
  categoryColor: string;
  idealWeightRange: {
    min: number;
    max: number;
  };
}

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: 70,
    height: 170,
    unit: 'metric' as 'metric' | 'imperial'
  });

  const [results, setResults] = useState<BMIResult | null>(null);
  const [copied, setCopied] = useState(false);

  const calculateBMI = (weight: number, height: number, unit: string): BMIResult => {
    let bmi: number;
    
    if (unit === 'metric') {
      // Weight in kg, height in cm
      bmi = weight / Math.pow(height / 100, 2);
    } else {
      // Weight in lbs, height in inches
      bmi = (weight / Math.pow(height, 2)) * 703;
    }

    let category: string;
    let categoryColor: string;
    let idealWeightRange: { min: number; max: number };

    if (bmi < 18.5) {
      category = 'Underweight';
      categoryColor = 'text-blue-600';
    } else if (bmi < 25) {
      category = 'Normal weight';
      categoryColor = 'text-green-600';
    } else if (bmi < 30) {
      category = 'Overweight';
      categoryColor = 'text-yellow-600';
    } else {
      category = 'Obese';
      categoryColor = 'text-red-600';
    }

    // Calculate ideal weight range based on height
    const heightInMeters = unit === 'metric' ? height / 100 : height * 0.0254;
    const minBMI = 18.5;
    const maxBMI = 24.9;
    
    if (unit === 'metric') {
      idealWeightRange = {
        min: Math.round((minBMI * Math.pow(heightInMeters, 2)) * 10) / 10,
        max: Math.round((maxBMI * Math.pow(heightInMeters, 2)) * 10) / 10
      };
    } else {
      const heightInInches = height;
      idealWeightRange = {
        min: Math.round((minBMI * Math.pow(heightInInches, 2)) / 703),
        max: Math.round((maxBMI * Math.pow(heightInInches, 2)) / 703)
      };
    }

    return {
      bmi: Math.round(bmi * 10) / 10,
      category,
      categoryColor,
      idealWeightRange
    };
  };

  useEffect(() => {
    const calculatedResults = calculateBMI(formData.weight, formData.height, formData.unit);
    setResults(calculatedResults);
  }, [formData]);

  const handleInputChange = (field: keyof typeof formData, value: number | string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleUnit = () => {
    const newUnit = formData.unit === 'metric' ? 'imperial' : 'metric';
    let newWeight = formData.weight;
    let newHeight = formData.height;

    if (newUnit === 'imperial') {
      // Convert from metric to imperial
      newWeight = Math.round(formData.weight * 2.20462);
      newHeight = Math.round(formData.height * 0.393701);
    } else {
      // Convert from imperial to metric
      newWeight = Math.round(formData.weight * 0.453592);
      newHeight = Math.round(formData.height * 2.54);
    }

    setFormData({
      weight: newWeight,
      height: newHeight,
      unit: newUnit
    });
  };

  const copyResults = async () => {
    if (!results) return;
    
    const text = `My BMI Results:\nBMI: ${results.bmi}\nCategory: ${results.category}\nWeight: ${formData.weight}${formData.unit === 'metric' ? ' kg' : ' lbs'}\nHeight: ${formData.height}${formData.unit === 'metric' ? ' cm' : ' inches'}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatWeight = (weight: number) => {
    return `${weight}${formData.unit === 'metric' ? ' kg' : ' lbs'}`;
  };

  const formatHeight = (height: number) => {
    return `${height}${formData.unit === 'metric' ? ' cm' : ' inches'}`;
  };

  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          BMI Calculator
        </h3>
        
        {/* Unit Toggle */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${formData.unit === 'metric' ? 'text-primary-600' : 'text-gray-400'}`}>
              Metric (kg/cm)
            </span>
            <button
              onClick={toggleUnit}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.unit === 'imperial' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${formData.unit === 'imperial' ? 'text-primary-600' : 'text-gray-400'}`}>
              Imperial (lbs/inches)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Weight
              </label>
              <div className="relative">
                <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder={formData.unit === 'metric' ? '70' : '154'}
                  min="0"
                  step={formData.unit === 'metric' ? '0.1' : '1'}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Height
              </label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder={formData.unit === 'metric' ? '170' : '67'}
                  min="0"
                  step={formData.unit === 'metric' ? '0.1' : '0.1'}
                />
              </div>
            </div>
          </div>

          {results && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="bg-primary-50 rounded-lg p-6 text-center">
                <div className="text-sm text-primary-600 font-medium mb-2">Your BMI</div>
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  {results.bmi}
                </div>
                <div className={`text-lg font-semibold ${results.categoryColor}`}>
                  {results.category}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-500 mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Ideal Weight Range
                </h4>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary-700">
                    {formatWeight(results.idealWeightRange.min)} - {formatWeight(results.idealWeightRange.max)}
                  </div>
                  <div className="text-sm text-secondary-100">
                    Based on your height: {formatHeight(formData.height)}
                  </div>
                </div>
              </div>

              {/* Copy Results Button */}
              <button
                onClick={copyResults}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  copied
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Results Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Results
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
