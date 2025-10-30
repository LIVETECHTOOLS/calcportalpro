'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';

interface CalculationResult {
  futureValue: number;
  totalInterest: number;
  totalContribution: number;
  breakdown: Array<{
    year: number;
    balance: number;
    interest: number;
    contribution: number;
  }>;
}

export default function CompoundInterestCalculator() {
  const [formData, setFormData] = useState({
    principal: 10000,
    monthlyContribution: 100,
    annualInterestRate: 7,
    years: 10,
    compoundingFrequency: 12, // Monthly
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateCompoundInterest = useCallback((data: typeof formData): CalculationResult => {
    const { principal, monthlyContribution, annualInterestRate, years, compoundingFrequency } = data;
    
    // Input validation
    if (principal < 0 || monthlyContribution < 0 || annualInterestRate < 0 || years <= 0 || compoundingFrequency <= 0) {
      throw new Error('All values must be positive');
    }
    
    if (years > 100) {
      throw new Error('Investment period cannot exceed 100 years');
    }
    
    if (annualInterestRate > 100) {
      throw new Error('Interest rate cannot exceed 100%');
    }
    
    const monthlyRate = annualInterestRate / 100 / compoundingFrequency;
    const totalPeriods = years * compoundingFrequency;
    const monthlyContributionAdjusted = monthlyContribution * (12 / compoundingFrequency);
    
    let balance = principal;
    const breakdown = [];
    
    for (let period = 1; period <= totalPeriods; period++) {
      const interest = balance * monthlyRate;
      balance += interest + monthlyContributionAdjusted;
      
      if (period % compoundingFrequency === 0) {
        const year = Math.floor(period / compoundingFrequency);
        breakdown.push({
          year,
          balance: Math.round(balance * 100) / 100,
          interest: Math.round(interest * 100) / 100,
          contribution: monthlyContributionAdjusted,
        });
      }
    }
    
    const totalContribution = principal + (monthlyContribution * 12 * years);
    const totalInterest = balance - totalContribution;
    
    return {
      futureValue: Math.round(balance * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalContribution,
      breakdown,
    };
  }, []);

  useEffect(() => {
    setIsCalculating(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        const calculatedResults = calculateCompoundInterest(formData);
        setResults(calculatedResults);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred during calculation');
        setResults(null);
      }
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [formData, calculateCompoundInterest]);

  const handleInputChange = (field: keyof typeof formData, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Calculator Inputs
          </h3>
          
          <div className="space-y-4">
            {/* Principal Amount */}
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Initial Investment (Principal)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.principal}
                  onChange={(e) => handleInputChange('principal', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="10000"
                  min="0"
                  step="100"
                  aria-label="Initial Investment Amount"
                  aria-describedby="principal-help"
                />
              </div>
            </div>

            {/* Monthly Contribution */}
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Monthly Contribution
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.monthlyContribution}
                  onChange={(e) => handleInputChange('monthlyContribution', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="100"
                  min="0"
                  step="10"
                />
              </div>
            </div>

            {/* Annual Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Annual Interest Rate (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.annualInterestRate}
                  onChange={(e) => handleInputChange('annualInterestRate', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="7"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            {/* Years */}
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Investment Period (Years)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.years}
                  onChange={(e) => handleInputChange('years', parseInt(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="10"
                  min="1"
                  max="50"
                  step="1"
                />
              </div>
            </div>

            {/* Compounding Frequency */}
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Compounding Frequency
              </label>
              <select
                value={formData.compoundingFrequency}
                onChange={(e) => handleInputChange('compoundingFrequency', parseInt(e.target.value))}
                className="input-field"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Calculation Results
          </h3>
          
          <AnimatePresence mode="wait">
            {isCalculating ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
                <p className="text-secondary-100 mt-2">Calculating...</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="text-red-600 font-medium">Error</div>
                <div className="text-red-500 text-sm mt-1">{error}</div>
              </motion.div>
            ) : results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Summary Results */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm text-primary-600 font-medium">Future Value</div>
                    <div className="text-2xl font-bold text-primary-700">
                      {formatCurrency(results.futureValue)}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-green-600 font-medium">Total Interest Earned</div>
                    <div className="text-2xl font-bold text-green-700">
                      {formatCurrency(results.totalInterest)}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-blue-600 font-medium">Total Contributions</div>
                    <div className="text-2xl font-bold text-blue-700">
                      {formatCurrency(results.totalContribution)}
                    </div>
                  </div>
                </div>

                {/* Yearly Breakdown */}
                <div>
                  <h4 className="font-semibold text-secondary-500 mb-3">Yearly Breakdown</h4>
                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {results.breakdown.slice(0, 10).map((yearData) => (
                      <div key={yearData.year} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-secondary-500">Year {yearData.year}</span>
                        <span className="text-secondary-100">{formatCurrency(yearData.balance)}</span>
                      </div>
                    ))}
                    {results.breakdown.length > 10 && (
                      <div className="text-sm text-secondary-100 text-center py-2">
                        ... and {results.breakdown.length - 10} more years
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
