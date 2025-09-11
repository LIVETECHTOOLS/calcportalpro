'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, DollarSign, Clock, TrendingUp, Target, Percent } from 'lucide-react'
import Link from 'next/link'

interface SalaryInputs {
  payType: 'salary' | 'hourly'
  payAmount: number
  hoursPerWeek: number
  overtimeHours: number
  overtimeMultiplier: number
  taxRate: number
  deductions: number
  bonuses: number
}

interface SalaryResults {
  takeHomePay: number
  hourlyRate: number
  annualSalary: number
  overtimePay: number
  totalPay: number
  grossPay: number
  netPay: number
}

export default function SalaryCalculator() {
  const [inputs, setInputs] = useState<SalaryInputs>({
    payType: 'salary',
    payAmount: 60000,
    hoursPerWeek: 40,
    overtimeHours: 0,
    overtimeMultiplier: 1.5,
    taxRate: 25,
    deductions: 5000,
    bonuses: 0
  })

  const [results, setResults] = useState<SalaryResults | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    calculateSalary()
  }, [inputs])

  const calculateSalary = () => {
    const {
      payType,
      payAmount,
      hoursPerWeek,
      overtimeHours,
      overtimeMultiplier,
      taxRate,
      deductions,
      bonuses
    } = inputs

    let hourlyRate: number
    let annualSalary: number
    let overtimePay: number
    let grossPay: number

    if (payType === 'salary') {
      // Convert salary to hourly rate
      hourlyRate = payAmount / (hoursPerWeek * 52)
      annualSalary = payAmount
      overtimePay = hourlyRate * overtimeHours * overtimeMultiplier
      grossPay = annualSalary + overtimePay + bonuses
    } else {
      // Hourly pay
      hourlyRate = payAmount
      annualSalary = hourlyRate * hoursPerWeek * 52
      overtimePay = hourlyRate * overtimeHours * overtimeMultiplier
      grossPay = annualSalary + overtimePay + bonuses
    }

    // Calculate taxes and deductions
    const taxes = grossPay * (taxRate / 100)
    const totalDeductions = taxes + deductions
    const takeHomePay = grossPay - totalDeductions
    const totalPay = grossPay
    const netPay = takeHomePay

    setResults({
      takeHomePay,
      hourlyRate,
      annualSalary,
      overtimePay,
      totalPay,
      grossPay,
      netPay
    })
  }

  const handleInputChange = (field: keyof SalaryInputs, value: number | string) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `Salary Calculator Results:
Take-Home Pay: $${results.takeHomePay.toFixed(2)}
Hourly Rate: $${results.hourlyRate.toFixed(2)}
Annual Salary: $${results.annualSalary.toFixed(2)}
Overtime Pay: $${results.overtimePay.toFixed(2)}
Total Pay: $${results.totalPay.toFixed(2)}`
    
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy results')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Salary Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pay Type
              </label>
              <select
                value={inputs.payType}
                onChange={(e) => handleInputChange('payType', e.target.value as any)}
                className="input-field"
              >
                <option value="salary">Annual Salary</option>
                <option value="hourly">Hourly Rate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {inputs.payType === 'salary' ? 'Annual Salary ($)' : 'Hourly Rate ($)'}
              </label>
              <input
                type="number"
                value={inputs.payAmount}
                onChange={(e) => handleInputChange('payAmount', Number(e.target.value))}
                className="input-field"
                min="0"
                step={inputs.payType === 'salary' ? 1000 : 1}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hours per Week
              </label>
              <input
                type="number"
                value={inputs.hoursPerWeek}
                onChange={(e) => handleInputChange('hoursPerWeek', Number(e.target.value))}
                className="input-field"
                min="1"
                max="168"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overtime Hours per Week
              </label>
              <input
                type="number"
                value={inputs.overtimeHours}
                onChange={(e) => handleInputChange('overtimeHours', Number(e.target.value))}
                className="input-field"
                min="0"
                max="40"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overtime Multiplier
              </label>
              <input
                type="number"
                value={inputs.overtimeMultiplier}
                onChange={(e) => handleInputChange('overtimeMultiplier', Number(e.target.value))}
                className="input-field"
                min="1"
                max="3"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                value={inputs.taxRate}
                onChange={(e) => handleInputChange('taxRate', Number(e.target.value))}
                className="input-field"
                min="0"
                max="50"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Deductions ($)
              </label>
              <input
                type="number"
                value={inputs.deductions}
                onChange={(e) => handleInputChange('deductions', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Bonuses ($)
              </label>
              <input
                type="number"
                value={inputs.bonuses}
                onChange={(e) => handleInputChange('bonuses', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Your Salary Breakdown</h3>
            <button
              onClick={copyResults}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                copied
                  ? 'bg-green-500 text-white hover:bg-green-600 transform scale-105'
                  : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Results Copied!' : 'Copy Results'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Take-Home Pay</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${results.takeHomePay.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">after taxes & deductions</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Hourly Rate</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.hourlyRate.toFixed(2)}
              </p>
              <p className="text-sm text-blue-700">per hour</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Annual Salary</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                ${results.annualSalary.toLocaleString()}
              </p>
              <p className="text-sm text-purple-700">base salary</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Overtime Pay</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                ${results.overtimePay.toFixed(2)}
              </p>
              <p className="text-sm text-orange-700">additional earnings</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-900">Total Pay</h4>
              </div>
              <p className="text-2xl font-bold text-indigo-900">
                ${results.totalPay.toLocaleString()}
              </p>
              <p className="text-sm text-indigo-700">including bonuses</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <Percent className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Tax Rate</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                {inputs.taxRate}%
              </p>
              <p className="text-sm text-teal-700">applied rate</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Calculation Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Gross Pay:</span>
                <span className="ml-2 font-medium text-gray-900">${results.grossPay.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Taxes:</span>
                <span className="ml-2 font-medium text-gray-900">${(results.grossPay * inputs.taxRate / 100).toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Deductions:</span>
                <span className="ml-2 font-medium text-gray-900">${inputs.deductions.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Bonuses:</span>
                <span className="ml-2 font-medium text-gray-900">${inputs.bonuses.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Back to Calculators Link */}
      <div className="text-center">
        <Link 
          href="/calculators" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          ← Back to Calculators
        </Link>
      </div>
    </div>
  )
}

