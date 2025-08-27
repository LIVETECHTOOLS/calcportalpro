'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Car, DollarSign, Percent, Calendar, Copy, Check } from 'lucide-react';

interface AutoLoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
}

export default function AutoLoanCalculator() {
  const [formData, setFormData] = useState({
    vehiclePrice: 25000,
    downPayment: 5000,
    tradeInValue: 0,
    loanAmount: 20000,
    interestRate: 5.5,
    loanTerm: 60,
    salesTax: 7.5,
    fees: 500,
  });

  const [results, setResults] = useState<AutoLoanResult | null>(null);
  const [copied, setCopied] = useState(false);

  const calculateAutoLoan = (data: typeof formData): AutoLoanResult => {
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
    
    // Generate amortization schedule
    const amortizationSchedule = [];
    let remainingBalance = loanAmount;
    
    for (let month = 1; month <= totalPayments; month++) {
      const interest = remainingBalance * monthlyRate;
      const principal = monthlyPayment - interest;
      remainingBalance -= principal;
      
      if (month <= 12 || month % 12 === 0) { // Show first year and yearly thereafter
        amortizationSchedule.push({
          month,
          payment: monthlyPayment,
          principal: Math.round(principal * 100) / 100,
          interest: Math.round(interest * 100) / 100,
          remainingBalance: Math.max(0, Math.round(remainingBalance * 100) / 100),
        });
      }
    }
    
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
    
    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      amortizationSchedule,
    };
  };

  useEffect(() => {
    const calculatedResults = calculateAutoLoan(formData);
    setResults(calculatedResults);
  }, [formData]);

  const handleInputChange = (field: keyof typeof formData, value: number) => {
    if (field === 'vehiclePrice') {
      const newVehiclePrice = value;
      const newDownPayment = Math.min(formData.downPayment, newVehiclePrice);
      const newLoanAmount = newVehiclePrice - newDownPayment - formData.tradeInValue;
      setFormData(prev => ({
        ...prev,
        vehiclePrice: newVehiclePrice,
        downPayment: newDownPayment,
        loanAmount: Math.max(0, newLoanAmount),
      }));
    } else if (field === 'downPayment') {
      const newDownPayment = Math.min(value, formData.vehiclePrice);
      const newLoanAmount = formData.vehiclePrice - newDownPayment - formData.tradeInValue;
      setFormData(prev => ({
        ...prev,
        downPayment: newDownPayment,
        loanAmount: Math.max(0, newLoanAmount),
      }));
    } else if (field === 'tradeInValue') {
      const newTradeInValue = Math.min(value, formData.vehiclePrice - formData.downPayment);
      const newLoanAmount = formData.vehiclePrice - formData.downPayment - newTradeInValue;
      setFormData(prev => ({
        ...prev,
        tradeInValue: newTradeInValue,
        loanAmount: Math.max(0, newLoanAmount),
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
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
    
    const text = `Auto Loan Results:\nMonthly Payment: ${formatCurrency(results.monthlyPayment)}\nTotal Payment: ${formatCurrency(results.totalPayment)}\nTotal Interest: ${formatCurrency(results.totalInterest)}\nVehicle Price: ${formatCurrency(formData.vehiclePrice)}\nDown Payment: ${formatCurrency(formData.downPayment)}\nLoan Amount: ${formatCurrency(formData.loanAmount)}\nInterest Rate: ${formData.interestRate}%\nLoan Term: ${formData.loanTerm} months`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const totalCost = formData.vehiclePrice + (formData.salesTax / 100 * formData.vehiclePrice) + formData.fees;
  const outOfPocket = formData.downPayment + formData.tradeInValue;

  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Auto Loan Calculator
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Vehicle Price
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.vehiclePrice}
                  onChange={(e) => handleInputChange('vehiclePrice', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="25000"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Down Payment
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.downPayment}
                  onChange={(e) => handleInputChange('downPayment', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="5000"
                  min="0"
                  max={formData.vehiclePrice}
                  step="1000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Trade-in Value
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.tradeInValue}
                  onChange={(e) => handleInputChange('tradeInValue', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="0"
                  min="0"
                  max={formData.vehiclePrice - formData.downPayment}
                  step="1000"
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
                  placeholder="5.5"
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
                  <option value={36}>36 months (3 years)</option>
                  <option value={48}>48 months (4 years)</option>
                  <option value={60}>60 months (5 years)</option>
                  <option value={72}>72 months (6 years)</option>
                  <option value={84}>84 months (7 years)</option>
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
                  For {formData.loanTerm} months
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
                <h4 className="font-semibold text-secondary-500 mb-3">Cost Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Vehicle Price:</span>
                    <span>{formatCurrency(formData.vehiclePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales Tax ({formData.salesTax}%):</span>
                    <span>{formatCurrency(formData.salesTax / 100 * formData.vehiclePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fees:</span>
                    <span>{formatCurrency(formData.fees)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Cost:</span>
                    <span>{formatCurrency(totalCost)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Out of Pocket:</span>
                    <span>-{formatCurrency(outOfPocket)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Loan Amount:</span>
                    <span>{formatCurrency(formData.loanAmount)}</span>
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
