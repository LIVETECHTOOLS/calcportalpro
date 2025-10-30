'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Building, DollarSign, Percent, Calendar, Copy, Check } from 'lucide-react';

interface BusinessLoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export default function BusinessLoanCalculator() {
  const [formData, setFormData] = useState({
    loanAmount: 100000,
    interestRate: 8.5,
    loanTerm: 60,
    loanType: 'term' as 'term' | 'line' | 'sba',
  });

  const calculateBusinessLoan = useCallback((data: typeof formData): BusinessLoanResult => {
    const { loanAmount, interestRate, loanTerm } = data;
    
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    
    // Calculate monthly payment using loan formula
    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                      (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else {
      monthlyPayment = loanAmount / totalPayments;
    }
    
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
    
    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
    };
  }, []);

  const results = useMemo<BusinessLoanResult>(() => calculateBusinessLoan(formData), [formData, calculateBusinessLoan]);
  const [copied, setCopied] = useState(false);

  // results are derived via useMemo

  const handleInputChange = (field: keyof typeof formData, value: number | string) => {
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

  const copyResults = async () => {
    if (!results) return;
    
    const text = `Business Loan Results:\nMonthly Payment: ${formatCurrency(results.monthlyPayment)}\nTotal Payment: ${formatCurrency(results.totalPayment)}\nTotal Interest: ${formatCurrency(results.totalInterest)}\nLoan Amount: ${formatCurrency(formData.loanAmount)}\nInterest Rate: ${formData.interestRate}%\nLoan Term: ${formData.loanTerm} months\nLoan Type: ${formData.loanType}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silent fail for clipboard errors
    }
  };

  const getLoanTypeInfo = () => {
    switch (formData.loanType) {
      case 'term':
        return { name: 'Term Loan', description: 'Fixed amount with regular payments' };
      case 'line':
        return { name: 'Line of Credit', description: 'Flexible borrowing up to limit' };
      case 'sba':
        return { name: 'SBA Loan', description: 'Government-backed small business loan' };
      default:
        return { name: 'Term Loan', description: 'Fixed amount with regular payments' };
    }
  };

  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Business Loan Calculator
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Loan Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'term', label: 'Term', icon: Building },
                  { value: 'line', label: 'Line', icon: Building },
                  { value: 'sba', label: 'SBA', icon: Building }
                ].map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.value}
                      onClick={() => handleInputChange('loanType', type.value)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.loanType === type.value
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">{type.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Loan Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="100000"
                  min="0"
                  step="10000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Interest Rate (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) => handleInputChange('interestRate', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="8.5"
                  min="0"
                  max="25"
                  step="0.1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Loan Term (months)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={formData.loanTerm}
                  onChange={(e) => handleInputChange('loanTerm', parseInt(e.target.value))}
                  className="input-field pl-10"
                >
                  <option value={12}>12 months (1 year)</option>
                  <option value={24}>24 months (2 years)</option>
                  <option value={36}>36 months (3 years)</option>
                  <option value={48}>48 months (4 years)</option>
                  <option value={60}>60 months (5 years)</option>
                  <option value={84}>84 months (7 years)</option>
                  <option value={120}>120 months (10 years)</option>
                </select>
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
                <div className="text-sm text-primary-600 font-medium mb-2">Monthly Payment</div>
                <div className="text-3xl font-bold text-primary-700">
                  {formatCurrency(results.monthlyPayment)}
                </div>
                <div className="text-sm text-secondary-100 mt-2">
                  {getLoanTypeInfo().name}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-sm text-secondary-600 font-medium">Total Payment</div>
                  <div className="text-lg font-bold text-secondary-700">
                    {formatCurrency(results.totalPayment)}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-sm text-secondary-600 font-medium">Total Interest</div>
                  <div className="text-lg font-bold text-secondary-700">
                    {formatCurrency(results.totalInterest)}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-500 mb-3">Loan Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Loan Type:</span>
                    <span>{getLoanTypeInfo().name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Principal:</span>
                    <span>{formatCurrency(formData.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span>{formData.interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loan Term:</span>
                    <span>{formData.loanTerm} months</span>
                  </div>
                  <div className="text-xs text-secondary-100 mt-2">
                    {getLoanTypeInfo().description}
                  </div>
                </div>
              </div>

              {/* Copy Results Button */}
              <button
                type="button"
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
