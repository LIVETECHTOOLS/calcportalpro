'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  PiggyBank, 
  TrendingUp, 
  Target, 
  Copy,
  Share2,
  AlertCircle,
  DollarSign,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

interface SavingsFormData {
  initialAmount: number;
  monthlyContribution: number;
  annualInterestRate: number;
  years: number;
  compoundingFrequency: 'annually' | 'semi-annually' | 'quarterly' | 'monthly' | 'daily';
  goalAmount?: number;
}

interface SavingsResults {
  initialInvestment: number;
  totalContributions: number;
  totalInterest: number;
  finalAmount: number;
  growthChart: GrowthPoint[];
  timeToGoal?: number;
  monthlyNeeded?: number;
}

interface GrowthPoint {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}

export default function SavingsCalculator() {
  const [formData, setFormData] = useState<SavingsFormData>({
    initialAmount: 10000,
    monthlyContribution: 500,
    annualInterestRate: 7,
    years: 20,
    compoundingFrequency: 'monthly'
  });

  const [results, setResults] = useState<SavingsResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showGoalCalculator, setShowGoalCalculator] = useState(false);

  // Calculate savings whenever form data changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calculateSavings();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  const calculateSavings = () => {
    if (formData.initialAmount < 0 || formData.monthlyContribution < 0 || 
        formData.annualInterestRate < 0 || formData.years <= 0) {
      setResults(null);
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const compoundingPeriods = getCompoundingPeriods(formData.compoundingFrequency);
      const periodicRate = formData.annualInterestRate / 100 / compoundingPeriods;
      const totalPeriods = formData.years * compoundingPeriods;
      const monthlyRate = formData.annualInterestRate / 100 / 12;

      // Calculate final amount with compound interest
      let balance = formData.initialAmount;
      const growthChart: GrowthPoint[] = [];
      let totalContributions = 0;
      let totalInterest = 0;

      for (let year = 0; year <= formData.years; year++) {
        const yearContributions = year === 0 ? 0 : formData.monthlyContribution * 12;
        totalContributions += yearContributions;

        if (year > 0) {
          // Add monthly contributions and compound interest
          for (let month = 1; month <= 12; month++) {
            balance += formData.monthlyContribution;
            balance *= (1 + monthlyRate);
          }
        }

        const yearInterest = balance - formData.initialAmount - (year * formData.monthlyContribution * 12);
        totalInterest = yearInterest;

        growthChart.push({
          year,
          balance: Math.round(balance * 100) / 100,
          contributions: yearContributions,
          interest: Math.round(yearInterest * 100) / 100
        });
      }

      // Calculate goal-related results
      let timeToGoal: number | undefined;
      let monthlyNeeded: number | undefined;

      if (formData.goalAmount && formData.goalAmount > 0) {
        if (balance >= formData.goalAmount) {
          // Goal will be reached
          timeToGoal = formData.years;
        } else {
          // Calculate time needed to reach goal
          const monthlyRate = formData.annualInterestRate / 100 / 12;
          const goalAmount = formData.goalAmount;
          const currentBalance = formData.initialAmount;
          
          // Use the PMT formula to find monthly contribution needed
          if (monthlyRate > 0) {
            const months = Math.log((goalAmount * monthlyRate + formData.monthlyContribution) / 
                                   (currentBalance * monthlyRate + formData.monthlyContribution)) / 
                          Math.log(1 + monthlyRate);
            timeToGoal = Math.ceil(months / 12);
          }
        }
      }

      setResults({
        initialInvestment: formData.initialAmount,
        totalContributions: totalContributions,
        totalInterest: totalInterest,
        finalAmount: balance,
        growthChart,
        timeToGoal,
        monthlyNeeded
      });

      setIsCalculating(false);
    }, 500);
  };

  const getCompoundingPeriods = (frequency: string): number => {
    switch (frequency) {
      case 'annually': return 1;
      case 'semi-annually': return 2;
      case 'quarterly': return 4;
      case 'monthly': return 12;
      case 'daily': return 365;
      default: return 12;
    }
  };

  const updateFormData = (field: keyof SavingsFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const copyResults = async () => {
    if (!results) return;
    
    const text = `My savings will grow to $${results.finalAmount.toLocaleString()} in ${formData.years} years! Initial: $${results.initialInvestment.toLocaleString()}, Monthly: $${formData.monthlyContribution}, Interest: ${formData.annualInterestRate}%. Calculated with CalcPortal Pro.`;
    
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareResults = async () => {
    if (!results) return;
    
    const text = `My savings will grow to $${results.finalAmount.toLocaleString()} in ${formData.years} years! Initial: $${results.initialInvestment.toLocaleString()}, Monthly: $${formData.monthlyContribution}, Interest: ${formData.annualInterestRate}%. Calculated with CalcPortal Pro.`;
    if (navigator.share) {
      navigator.share({
        title: 'My Savings Results',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <PiggyBank className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Savings Calculator
        </h2>
        <p className="text-gray-600">
          Calculate compound interest and plan your savings growth
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Initial Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={formData.initialAmount}
                onChange={(e) => updateFormData('initialAmount', parseFloat(e.target.value) || 0)}
                className="input-field pl-8"
                placeholder="10,000"
                min="0"
                max="1000000"
                step="1000"
              />
            </div>
          </div>

          {/* Monthly Contribution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Contribution
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={formData.monthlyContribution}
                onChange={(e) => updateFormData('monthlyContribution', parseFloat(e.target.value) || 0)}
                className="input-field pl-8"
                placeholder="500"
                min="0"
                max="50000"
                step="100"
              />
            </div>
          </div>

          {/* Annual Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={formData.annualInterestRate}
              onChange={(e) => updateFormData('annualInterestRate', parseFloat(e.target.value) || 0)}
              className="input-field"
              placeholder="7"
              min="0"
              max="50"
              step="0.1"
            />
          </div>

          {/* Years */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Period (years)
            </label>
            <input
              type="number"
              value={formData.years}
              onChange={(e) => updateFormData('years', parseInt(e.target.value) || 0)}
              className="input-field"
              placeholder="20"
              min="1"
              max="50"
            />
          </div>

          {/* Compounding Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Compounding Frequency
            </label>
            <select
              value={formData.compoundingFrequency}
              onChange={(e) => updateFormData('compoundingFrequency', e.target.value as any)}
              className="input-field"
            >
              <option value="annually">Annually</option>
              <option value="semi-annually">Semi-annually</option>
              <option value="quarterly">Quarterly</option>
              <option value="monthly">Monthly</option>
              <option value="daily">Daily</option>
            </select>
          </div>

          {/* Goal Amount (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goal Amount (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={formData.goalAmount || ''}
                onChange={(e) => updateFormData('goalAmount', parseFloat(e.target.value) || undefined)}
                className="input-field pl-8"
                placeholder="100,000"
                min="0"
                max="10000000"
                step="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Savings Results
              </h3>
              <p className="text-gray-600">
                Projected growth over {formData.years} years at {formData.annualInterestRate}% interest
              </p>
            </div>

            {/* Primary Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Initial Investment */}
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {formatCurrency(results.initialInvestment)}
                </div>
                <div className="text-sm text-blue-700">Initial Investment</div>
              </div>

              {/* Total Contributions */}
              <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <PiggyBank className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-900 mb-1">
                  {formatCurrency(results.totalContributions)}
                </div>
                <div className="text-sm text-green-700">Total Contributions</div>
              </div>

              {/* Total Interest */}
              <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-900 mb-1">
                  {formatCurrency(results.totalInterest)}
                </div>
                <div className="text-sm text-purple-700">Total Interest</div>
              </div>

              {/* Final Amount */}
              <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-900 mb-1">
                  {formatCurrency(results.finalAmount)}
                </div>
                <div className="text-sm text-orange-700">Final Amount</div>
              </div>
            </div>

            {/* Goal Calculator Results */}
            {formData.goalAmount && formData.goalAmount > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Goal Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {results.timeToGoal && results.timeToGoal > 0 && (
                    <div>
                      <span className="text-gray-600">Time to reach goal:</span>
                      <span className="ml-2 font-medium text-gray-900">{results.timeToGoal} years</span>
                    </div>
                  )}
                  {results.monthlyNeeded && results.monthlyNeeded > 0 && (
                    <div>
                      <span className="text-gray-600">Monthly contribution needed:</span>
                      <span className="ml-2 font-medium text-gray-900">{formatCurrency(results.monthlyNeeded)}</span>
                    </div>
                  )}
                  {results.finalAmount >= (formData.goalAmount || 0) && (
                    <div className="md:col-span-2">
                      <span className="text-green-700 font-medium">
                        ✅ You'll reach your goal of {formatCurrency(formData.goalAmount!)} in {formData.years} years!
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Growth Chart */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Growth Over Time</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-2 text-gray-700 font-medium">Year</th>
                      <th className="text-right py-2 px-2 text-gray-700 font-medium">Balance</th>
                      <th className="text-right py-2 px-2 text-gray-700 font-medium">Contributions</th>
                      <th className="text-right py-2 px-2 text-gray-700 font-medium">Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.growthChart.filter((_, index) => index % Math.max(1, Math.floor(formData.years / 10)) === 0 || index === formData.years).map((point) => (
                      <tr key={point.year} className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-900">{point.year}</td>
                        <td className="py-2 px-2 text-right text-gray-900">{formatCurrency(point.balance)}</td>
                        <td className="py-2 px-2 text-right text-gray-900">{formatCurrency(point.contributions)}</td>
                        <td className="py-2 px-2 text-right text-gray-900">{formatCurrency(point.interest)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={copyResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </button>
              <button
                onClick={shareResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isCalculating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center space-x-2 text-blue-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span>Calculating your savings...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This calculator provides estimates based on the information you enter. 
              Actual returns may vary based on market conditions, fees, and other factors. 
              For personalized financial advice, consult with a financial advisor.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Calculators Link */}
      <div className="text-center">
        <Link 
          href="/calculators" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          ← Back to Calculators
        </Link>
      </div>
    </div>
  );
}
