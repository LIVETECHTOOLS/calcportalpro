'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Copy,
  Share2,
  AlertCircle
} from 'lucide-react';

interface LoanFormData {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  loanType: 'personal' | 'auto' | 'business' | 'student';
  startDate: string;
}

interface LoanResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  amortizationSchedule: AmortizationRow[];
}

interface AmortizationRow {
  paymentNumber: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export default function LoanCalculator() {
  const [formData, setFormData] = useState<LoanFormData>({
    loanAmount: 25000,
    interestRate: 7.5,
    loanTerm: 60,
    loanType: 'personal',
    startDate: new Date().toISOString().split('T')[0]
  });

  const [results, setResults] = useState<LoanResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAmortization, setShowAmortization] = useState(false);

  // Calculate loan whenever form data changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calculateLoan();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  const calculateLoan = () => {
    if (formData.loanAmount <= 0 || formData.interestRate <= 0 || formData.loanTerm <= 0) {
      setResults(null);
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const principal = formData.loanAmount;
      const monthlyRate = formData.interestRate / 100 / 12;
      const numberOfPayments = formData.loanTerm;

      // Calculate monthly payment using amortization formula
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      // Generate amortization schedule
      const amortizationSchedule: AmortizationRow[] = [];
      let remainingBalance = principal;

      for (let i = 1; i <= numberOfPayments; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        amortizationSchedule.push({
          paymentNumber: i,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          remainingBalance: Math.max(0, remainingBalance)
        });
      }

      setResults({
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        loanAmount: principal,
        interestRate: formData.interestRate,
        loanTerm: formData.loanTerm,
        amortizationSchedule
      });

      setIsCalculating(false);
    }, 500);
  };

  const updateFormData = (field: keyof LoanFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const copyResults = () => {
    if (results) {
      const text = `Loan Calculator Results:\nMonthly Payment: $${results.monthlyPayment}\nTotal Payment: $${results.totalPayment}\nTotal Interest: $${results.totalInterest}\nLoan Amount: $${results.loanAmount}\nInterest Rate: ${results.interestRate}%\nLoan Term: ${results.loanTerm} months`;
      navigator.clipboard.writeText(text);
    }
  };

  const shareResults = () => {
    if (results) {
      const text = `My loan payment: $${results.monthlyPayment}/month for $${results.loanAmount} at ${results.interestRate}% over ${results.loanTerm} months. Calculated with CalcPortal Pro.`;
      if (navigator.share) {
        navigator.share({
          title: 'My Loan Results',
          text: text,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(text);
      }
    }
  };

  const getLoanTypeInfo = (type: string) => {
    switch (type) {
      case 'personal':
        return { name: 'Personal Loan', color: 'bg-blue-100 text-blue-800' };
      case 'auto':
        return { name: 'Auto Loan', color: 'bg-green-100 text-green-800' };
      case 'business':
        return { name: 'Business Loan', color: 'bg-purple-100 text-purple-800' };
      case 'student':
        return { name: 'Student Loan', color: 'bg-orange-100 text-orange-800' };
      default:
        return { name: 'Loan', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const loanTypeInfo = getLoanTypeInfo(formData.loanType);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-600 mb-2">
          Loan Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your monthly payments, total interest, and loan costs
        </p>
      </div>

      {/* Loan Type Selection */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Loan Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(['personal', 'auto', 'business', 'student'] as const).map((type) => (
            <button
              key={type}
              onClick={() => updateFormData('loanType', type)}
              className={`p-3 rounded-lg border-2 transition-all ${
                formData.loanType === type
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 ${
                formData.loanType === type ? 'bg-primary-100' : 'bg-gray-100'
              }`}>
                {type === 'personal' && <DollarSign className="w-4 h-4 text-primary-600" />}
                {type === 'auto' && <TrendingUp className="w-4 h-4 text-green-600" />}
                {type === 'business' && <Calculator className="w-4 h-4 text-purple-600" />}
                {type === 'student' && <Clock className="w-4 h-4 text-orange-600" />}
              </div>
              <div className="text-xs font-medium capitalize">{type}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={formData.loanAmount}
              onChange={(e) => updateFormData('loanAmount', parseFloat(e.target.value) || 0)}
              className="input-field pl-8"
              placeholder="25,000"
              min="100"
              max="1000000"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={formData.interestRate}
            onChange={(e) => updateFormData('interestRate', parseFloat(e.target.value) || 0)}
            className="input-field"
            placeholder="7.5"
            min="0.1"
            max="50"
            step="0.1"
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (months)
          </label>
          <input
            type="number"
            value={formData.loanTerm}
            onChange={(e) => updateFormData('loanTerm', parseInt(e.target.value) || 0)}
            className="input-field"
            placeholder="60"
            min="1"
            max="360"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => updateFormData('startDate', e.target.value)}
            className="input-field"
          />
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                Your Loan Results
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${loanTypeInfo.color}`}>
                {loanTypeInfo.name}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Monthly Payment */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  ${results.monthlyPayment.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Monthly Payment</div>
              </div>

              {/* Total Payment */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-6 h-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-accent-600 mb-1">
                  ${results.totalPayment.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Payment</div>
              </div>

              {/* Total Interest */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-secondary-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-600 mb-1">
                  ${results.totalInterest.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Interest</div>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Loan Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="ml-2 font-medium">${results.loanAmount.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="ml-2 font-medium">{results.interestRate}%</span>
                </div>
                <div>
                  <span className="text-gray-600">Loan Term:</span>
                  <span className="ml-2 font-medium">{results.loanTerm} months</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                onClick={copyResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </button>
              <button
                onClick={shareResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </button>
            </div>

            {/* Amortization Schedule Toggle */}
            <div className="text-center">
              <button
                onClick={() => setShowAmortization(!showAmortization)}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {showAmortization ? 'Hide' : 'Show'} Amortization Schedule
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Amortization Schedule */}
      <AnimatePresence>
        {showAmortization && results && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl shadow-soft p-6 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-secondary-600 mb-4">
              Amortization Schedule
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-2">Payment #</th>
                    <th className="text-right py-2 px-2">Payment</th>
                    <th className="text-right py-2 px-2">Principal</th>
                    <th className="text-right py-2 px-2">Interest</th>
                    <th className="text-right py-2 px-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.amortizationSchedule.slice(0, 12).map((row) => (
                    <tr key={row.paymentNumber} className="border-b border-gray-100">
                      <td className="py-2 px-2">{row.paymentNumber}</td>
                      <td className="py-2 px-2 text-right">${row.payment.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right">${row.principal.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right">${row.interest.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right">${row.remainingBalance.toFixed(2)}</td>
                    </tr>
                  ))}
                  {results.amortizationSchedule.length > 12 && (
                    <tr className="bg-gray-50">
                      <td colSpan={5} className="py-2 px-2 text-center text-gray-500">
                        ... and {results.amortizationSchedule.length - 12} more payments
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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
            <div className="inline-flex items-center space-x-2 text-accent-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent-600"></div>
              <span>Calculating your loan...</span>
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
              <strong>Note:</strong> This calculator provides estimates based on the information you enter. 
              Actual loan terms may vary based on your credit score, income, and lender requirements. 
              Always consult with a financial advisor or lender for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
