'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent } from 'lucide-react';
import Link from 'next/link';

export default function MortgageCalculator() {
  const [formData, setFormData] = useState({
    homePrice: 300000,
    downPayment: 60000,
    loanAmount: 240000,
    interestRate: 4.5,
    loanTerm: 30,
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = useCallback(() => {
    const { loanAmount, interestRate, loanTerm } = formData;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    
    if (monthlyRate > 0) {
      const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                     (Math.pow(1 + monthlyRate, totalPayments) - 1);
      setMonthlyPayment(Math.round(payment * 100) / 100);
    } else {
      setMonthlyPayment(loanAmount / totalPayments);
    }
  }, [formData]);

  useEffect(() => {
    calculatePayment();
  }, [calculatePayment]);

  const handleInputChange = (field: keyof typeof formData, value: number) => {
    if (field === 'homePrice') {
      const newHomePrice = value;
      const newDownPayment = Math.min(formData.downPayment, newHomePrice);
      const newLoanAmount = newHomePrice - newDownPayment;
      setFormData(prev => ({
        ...prev,
        homePrice: newHomePrice,
        downPayment: newDownPayment,
        loanAmount: newLoanAmount,
      }));
    } else if (field === 'downPayment') {
      const newDownPayment = Math.min(value, formData.homePrice);
      const newLoanAmount = formData.homePrice - newDownPayment;
      setFormData(prev => ({
        ...prev,
        downPayment: newDownPayment,
        loanAmount: newLoanAmount,
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

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
          ← Back to Calculators
        </Link>
      </div>
      
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Mortgage Calculator
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Home Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={formData.homePrice}
                  onChange={(e) => handleInputChange('homePrice', parseFloat(e.target.value) || 0)}
                  className="input-field pl-10"
                  placeholder="300000"
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
                  placeholder="60000"
                  min="0"
                  max={formData.homePrice}
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
                  placeholder="4.5"
                  min="0"
                  max="20"
                  step="0.1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-500 mb-2">
                Loan Term (Years)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.loanTerm}
                  onChange={(e) => handleInputChange('loanTerm', parseInt(e.target.value) || 0)}
                  className="input-field"
                  placeholder="30"
                  min="1"
                  max="50"
                  step="1"
                />
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-secondary-500 mb-4">Monthly Payment</h4>
            <div className="text-3xl font-bold text-primary-700">
              {formatCurrency(monthlyPayment)}
            </div>
            <p className="text-sm text-secondary-100 mt-2">
              Based on a {formData.loanTerm}-year loan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
