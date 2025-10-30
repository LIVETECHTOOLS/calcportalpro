'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Activity, 
  Heart, 
  TrendingUp, 
  Copy,
  Share2,
  AlertCircle,
  Target,
  Scale
} from 'lucide-react';
import Link from 'next/link';

interface CalorieFormData {
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  heightUnit: 'cm' | 'ft';
  weightUnit: 'kg' | 'lbs';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'very-active' | 'extra-active';
  goal: 'lose' | 'maintain' | 'gain';
  weightChangeRate: number; // pounds per week
}

interface CalorieResults {
  bmr: number;
  tdee: number;
  goalCalories: number;
  macros: {
    protein: { grams: number; calories: number };
    carbs: { grams: number; calories: number };
    fat: { grams: number; calories: number };
  };
  weightGoal: {
    weeklyChange: number;
    dailyDeficit: number;
    targetDate: string;
  };
}

const activityMultipliers = {
  sedentary: 1.2,      // Little to no exercise
  light: 1.375,         // Light exercise 1-3 days/week
  moderate: 1.55,       // Moderate exercise 3-5 days/week
  'very-active': 1.725, // Hard exercise 6-7 days/week
  'extra-active': 1.9   // Very hard exercise, physical job
};

export default function CalorieCalculator() {
  const [formData, setFormData] = useState<CalorieFormData>({
    gender: 'male',
    age: 30,
    weight: 70,
    height: 175,
    heightUnit: 'cm',
    weightUnit: 'kg',
    activityLevel: 'moderate',
    goal: 'maintain',
    weightChangeRate: 1
  });

  const [results, setResults] = useState<CalorieResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate calories whenever form data changes
  const calculateCalories = useCallback(() => {
    if (formData.age <= 0 || formData.weight <= 0 || formData.height <= 0) {
      setResults(null);
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      // Convert units to metric for calculations
      const weightKg = formData.weightUnit === 'lbs' ? formData.weight * 0.453592 : formData.weight;
      const heightCm = formData.heightUnit === 'ft' ? formData.height * 30.48 : formData.height;

      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr: number;
      if (formData.gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * formData.age) + 5;
      } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * formData.age) - 161;
      }

      // Calculate TDEE
      const tdee = bmr * activityMultipliers[formData.activityLevel];

      // Calculate goal calories based on weight goal
      let goalCalories = tdee;
      let dailyDeficit = 0;

      if (formData.goal === 'lose') {
        dailyDeficit = formData.weightChangeRate * 500; // 1 lb = 3500 calories, so 1 lb/week = 500 cal/day
        goalCalories = Math.max(tdee - dailyDeficit, 1200); // Minimum 1200 calories
      } else if (formData.goal === 'gain') {
        dailyDeficit = -(formData.weightChangeRate * 500);
        goalCalories = tdee + Math.abs(dailyDeficit);
      }

      // Calculate macronutrient breakdown
      const macros = calculateMacros(goalCalories, formData.goal);

      // Calculate weight goal timeline
      const weightGoal = calculateWeightGoal(weightKg, formData.goal, formData.weightChangeRate);

      setResults({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        goalCalories: Math.round(goalCalories),
        macros,
        weightGoal
      });

      setIsCalculating(false);
    }, 500);
  }, [formData]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calculateCalories();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [calculateCalories]);

  const calculateMacros = (calories: number, goal: string) => {
    let proteinRatio: number;
    let fatRatio: number;
    let carbsRatio: number;

    if (goal === 'lose') {
      // Higher protein for weight loss
      proteinRatio = 0.35; // 35%
      fatRatio = 0.30;     // 30%
      carbsRatio = 0.35;   // 35%
    } else if (goal === 'gain') {
      // Higher carbs for muscle gain
      proteinRatio = 0.25; // 25%
      fatRatio = 0.25;     // 25%
      carbsRatio = 0.50;   // 50%
    } else {
      // Balanced for maintenance
      proteinRatio = 0.30; // 30%
      fatRatio = 0.25;     // 25%
      carbsRatio = 0.45;   // 45%
    }

    const proteinCalories = calories * proteinRatio;
    const fatCalories = calories * fatRatio;
    const carbsCalories = calories * carbsRatio;

    return {
      protein: {
        grams: Math.round(proteinCalories / 4), // 4 calories per gram
        calories: Math.round(proteinCalories)
      },
      carbs: {
        grams: Math.round(carbsCalories / 4), // 4 calories per gram
        calories: Math.round(carbsCalories)
      },
      fat: {
        grams: Math.round(fatCalories / 9), // 9 calories per gram
        calories: Math.round(fatCalories)
      }
    };
  };

  const calculateWeightGoal = (currentWeight: number, goal: string, rate: number) => {
    if (goal === 'maintain') {
      return {
        weeklyChange: 0,
        dailyDeficit: 0,
        targetDate: 'N/A - Maintaining current weight'
      };
    }

    // For demonstration, assume target weight is 10% different from current
    const targetWeight = goal === 'lose' 
      ? currentWeight * 0.9 
      : currentWeight * 1.1;
    
    const weightDifference = Math.abs(targetWeight - currentWeight);
    const weeksToGoal = weightDifference / rate;
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (weeksToGoal * 7));

    return {
      weeklyChange: goal === 'lose' ? -rate : rate,
      dailyDeficit: goal === 'lose' ? rate * 500 : -(rate * 500),
      targetDate: targetDate.toLocaleDateString()
    };
  };

  const updateFormData = (field: keyof CalorieFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const copyResults = () => {
    if (results) {
      const text = `Calorie Calculator Results:\nBMR: ${results.bmr} calories\nTDEE: ${results.tdee} calories\nGoal Calories: ${results.goalCalories} calories\nProtein: ${results.macros.protein.grams}g\nCarbs: ${results.macros.carbs.grams}g\nFat: ${results.macros.fat.grams}g`;
      navigator.clipboard.writeText(text);
    }
  };

  const shareResults = () => {
    if (results) {
      const text = `My daily calorie needs: ${results.goalCalories} calories (BMR: ${results.bmr}, TDEE: ${results.tdee}). Calculated with CalcPortal Pro.`;
      if (navigator.share) {
        navigator.share({
          title: 'My Calorie Results',
          text: text,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(text);
      }
    }
  };

  const getActivityLevelInfo = (level: string) => {
    switch (level) {
      case 'sedentary':
        return { name: 'Sedentary', description: 'Little to no exercise', color: 'bg-gray-100 text-gray-800' };
      case 'light':
        return { name: 'Lightly Active', description: 'Light exercise 1-3 days/week', color: 'bg-blue-100 text-blue-800' };
      case 'moderate':
        return { name: 'Moderately Active', description: 'Moderate exercise 3-5 days/week', color: 'bg-green-100 text-green-800' };
      case 'very-active':
        return { name: 'Very Active', description: 'Hard exercise 6-7 days/week', color: 'bg-orange-100 text-orange-800' };
      case 'extra-active':
        return { name: 'Extra Active', description: 'Very hard exercise, physical job', color: 'bg-red-100 text-red-800' };
      default:
        return { name: 'Unknown', description: '', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const activityInfo = getActivityLevelInfo(formData.activityLevel);

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
          ← Back to Calculators
        </Link>
      </div>
      
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <Activity className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-600 mb-2">
          Calorie Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your BMR, TDEE, and daily calorie needs
        </p>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {(['male', 'female'] as const).map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="mr-2 text-primary-600 focus:ring-primary-500"
                />
                <span className="capitalize">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age (years)
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => updateFormData('age', parseInt(e.target.value) || 0)}
            className="input-field"
            placeholder="30"
            min="15"
            max="100"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => updateFormData('weight', parseFloat(e.target.value) || 0)}
              className="input-field flex-1"
              placeholder="70"
              min="30"
              max="300"
              step="0.1"
            />
            <select
              value={formData.weightUnit}
              onChange={(e) => updateFormData('weightUnit', e.target.value as 'kg' | 'lbs')}
              className="input-field w-20"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={formData.height}
              onChange={(e) => updateFormData('height', parseFloat(e.target.value) || 0)}
              className="input-field flex-1"
              placeholder="175"
              min="100"
              max="250"
              step="0.1"
            />
            <select
              value={formData.heightUnit}
              onChange={(e) => updateFormData('heightUnit', e.target.value as 'cm' | 'ft')}
              className="input-field w-20"
            >
              <option value="cm">cm</option>
              <option value="ft">ft</option>
            </select>
          </div>
        </div>

        {/* Activity Level */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Activity Level
          </label>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {([
              { value: 'sedentary', label: 'Sedentary', icon: '🪑' },
              { value: 'light', label: 'Light', icon: '🚶' },
              { value: 'moderate', label: 'Moderate', icon: '🏃' },
              { value: 'very-active', label: 'Very Active', icon: '💪' },
              { value: 'extra-active', label: 'Extra Active', icon: '🔥' }
            ] as const).map(({ value, label, icon }) => (
              <button
                key={value}
                onClick={() => updateFormData('activityLevel', value)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.activityLevel === value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-xs font-medium text-center">{label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goal
          </label>
          <select
            value={formData.goal}
            onChange={(e) => updateFormData('goal', e.target.value as 'lose' | 'maintain' | 'gain')}
            className="input-field"
          >
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>

        {/* Weight Change Rate */}
        {formData.goal !== 'maintain' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formData.goal === 'lose' ? 'Weight Loss' : 'Weight Gain'} Rate (lbs/week)
            </label>
            <input
              type="number"
              value={formData.weightChangeRate}
              onChange={(e) => updateFormData('weightChangeRate', parseFloat(e.target.value) || 0)}
              className="input-field"
              placeholder="1"
              min="0.5"
              max="2"
              step="0.5"
            />
          </div>
        )}
      </div>

      {/* Results Section with better contrast */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Summary Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-primary-200 rounded-lg p-4 shadow-md">
              <div className="text-sm text-primary-600 font-medium">Daily Calories</div>
              <div className="text-2xl font-bold text-primary-700">
                {results.goalCalories.toFixed(0)}
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-lg p-4 shadow-md">
              <div className="text-sm text-green-600 font-medium">BMR</div>
              <div className="text-2xl font-bold text-green-700">
                {results.bmr.toFixed(0)}
              </div>
            </div>
            
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-md">
              <div className="text-sm text-blue-600 font-medium">TDEE</div>
              <div className="text-2xl font-bold text-blue-700">
                {results.tdee.toFixed(0)}
              </div>
            </div>
          </div>

          {/* Macronutrient Breakdown */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold text-secondary-500 mb-4">Macronutrient Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-sm text-red-600 font-medium">Protein</div>
                <div className="text-xl font-bold text-red-700">{results.macros.protein.grams}g</div>
                <div className="text-sm text-red-600">({results.macros.protein.calories} cal)</div>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-sm text-yellow-600 font-medium">Carbs</div>
                <div className="text-xl font-bold text-yellow-700">{results.macros.carbs.grams}g</div>
                <div className="text-sm text-yellow-600">({results.macros.carbs.calories} cal)</div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-600 font-medium">Fat</div>
                <div className="text-xl font-bold text-blue-700">{results.macros.fat.grams}g</div>
                <div className="text-sm text-blue-600">({results.macros.fat.calories} cal)</div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold text-secondary-500 mb-4">Calculation Details</h4>
            <div className="space-y-3 text-secondary-700">
              <p><strong>Activity Level:</strong> {activityInfo.name}</p>
              <p><strong>Goal:</strong> {formData.goal}</p>
              <p><strong>Weight Change Rate:</strong> {formData.weightChangeRate} lbs/week</p>
              <p><strong>Daily Calorie Adjustment:</strong> {formData.goal === 'lose' ? '-' : '+'} {formData.weightChangeRate * 500} calories</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Loading State */}
      <AnimatePresence>
        {isCalculating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center space-x-2 text-accent-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent-600"></div>
              <span>Calculating your calories...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> This calculator provides estimates based on standard formulas. 
              Individual calorie needs may vary based on body composition, genetics, and other factors. 
              For personalized nutrition advice, consult with a registered dietitian or healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
