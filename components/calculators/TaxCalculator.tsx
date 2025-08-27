'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, DollarSign, Percent, FileText, TrendingDown } from 'lucide-react'
import Link from 'next/link'

interface TaxInputs {
  grossIncome: number
  filingStatus: 'single' | 'married-joint' | 'married-separate' | 'head-household'
  retirementContributions: number
  hsaContributions: number
  studentLoanInterest: number
  charitableDonations: number
  stateTaxes: number
  otherDeductions: number
}

interface TaxResults {
  federalTax: number
  taxableIncome: number
  effectiveTaxRate: number
  marginalTaxRate: number
  takeHomePay: number
  taxBreakdown: TaxBreakdown[]
}

interface TaxBreakdown {
  bracket: string
  rate: number
  amount: number
  tax: number
}

export default function TaxCalculator() {
  const [inputs, setInputs] = useState<TaxInputs>({
    grossIncome: 75000,
    filingStatus: 'single',
    retirementContributions: 6000,
    hsaContributions: 0,
    studentLoanInterest: 0,
    charitableDonations: 0,
    stateTaxes: 0,
    otherDeductions: 0
  })

  const [results, setResults] = useState<TaxResults | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    calculateTax()
  }, [inputs])

  const calculateTax = () => {
    const {
      grossIncome,
      filingStatus,
      retirementContributions,
      hsaContributions,
      studentLoanInterest,
      charitableDonations,
      stateTaxes,
      otherDeductions
    } = inputs

    // Calculate adjusted gross income (AGI)
    const agi = grossIncome - retirementContributions - hsaContributions

    // Calculate total deductions
    const standardDeduction = getStandardDeduction(filingStatus)
    const itemizedDeductions = Math.min(
      studentLoanInterest + charitableDonations + Math.min(stateTaxes, 10000) + otherDeductions,
      standardDeduction
    )
    const totalDeductions = Math.max(standardDeduction, itemizedDeductions)

    // Calculate taxable income
    const taxableIncome = Math.max(0, agi - totalDeductions)

    // Calculate federal tax using 2024 brackets
    const taxBreakdown = calculateTaxByBrackets(taxableIncome, filingStatus)
    const federalTax = taxBreakdown.reduce((sum, bracket) => sum + bracket.tax, 0)

    // Calculate rates
    const effectiveTaxRate = grossIncome > 0 ? (federalTax / grossIncome) * 100 : 0
    const marginalTaxRate = getMarginalTaxRate(taxableIncome, filingStatus)

    // Calculate take-home pay
    const takeHomePay = grossIncome - federalTax

    setResults({
      federalTax,
      taxableIncome,
      effectiveTaxRate,
      marginalTaxRate,
      takeHomePay,
      taxBreakdown
    })
  }

  const getStandardDeduction = (status: string): number => {
    switch (status) {
      case 'single': return 14600
      case 'married-joint': return 29200
      case 'married-separate': return 14600
      case 'head-household': return 21900
      default: return 14600
    }
  }

  const getMarginalTaxRate = (taxableIncome: number, status: string): number => {
    if (status === 'single') {
      if (taxableIncome <= 11600) return 10
      if (taxableIncome <= 47150) return 12
      if (taxableIncome <= 100525) return 22
      if (taxableIncome <= 191950) return 24
      if (taxableIncome <= 243725) return 32
      if (taxableIncome <= 609350) return 35
      return 37
    } else if (status === 'married-joint') {
      if (taxableIncome <= 23200) return 10
      if (taxableIncome <= 94200) return 12
      if (taxableIncome <= 201050) return 22
      if (taxableIncome <= 383900) return 24
      if (taxableIncome <= 487450) return 32
      if (taxableIncome <= 731200) return 35
      return 37
    }
    return 22 // Default for other statuses
  }

  const calculateTaxByBrackets = (taxableIncome: number, status: string): TaxBreakdown[] => {
    const brackets = status === 'single' ? [
      { min: 0, max: 11600, rate: 10 },
      { min: 11600, max: 47150, rate: 12 },
      { min: 47150, max: 100525, rate: 22 },
      { min: 100525, max: 191950, rate: 24 },
      { min: 191950, max: 243725, rate: 32 },
      { min: 243725, max: 609350, rate: 35 },
      { min: 609350, max: Infinity, rate: 37 }
    ] : [
      { min: 0, max: 23200, rate: 10 },
      { min: 23200, max: 94200, rate: 12 },
      { min: 94200, max: 201050, rate: 22 },
      { min: 201050, max: 383900, rate: 24 },
      { min: 383900, max: 487450, rate: 32 },
      { min: 487450, max: 731200, rate: 35 },
      { min: 731200, max: Infinity, rate: 37 }
    ]

    const breakdown: TaxBreakdown[] = []
    let remainingIncome = taxableIncome

    for (const bracket of brackets) {
      if (remainingIncome <= 0) break

      const bracketAmount = Math.min(remainingIncome, bracket.max - bracket.min)
      const tax = bracketAmount * (bracket.rate / 100)

      if (bracketAmount > 0) {
        breakdown.push({
          bracket: `${bracket.rate}%`,
          rate: bracket.rate,
          amount: bracketAmount,
          tax: tax
        })
      }

      remainingIncome -= bracketAmount
    }

    return breakdown
  }

  const handleInputChange = (field: keyof TaxInputs, value: number | string) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `Tax Calculator Results:
Federal Tax: $${results.federalTax.toFixed(2)}
Taxable Income: $${results.taxableIncome.toFixed(2)}
Effective Tax Rate: ${results.effectiveTaxRate.toFixed(2)}%
Marginal Tax Rate: ${results.marginalTaxRate}%
Take-Home Pay: $${results.takeHomePay.toFixed(2)}`
    
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
          <h2 className="text-2xl font-bold text-gray-900">Federal Tax Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gross Income ($)
              </label>
              <input
                type="number"
                value={inputs.grossIncome}
                onChange={(e) => handleInputChange('grossIncome', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filing Status
              </label>
              <select
                value={inputs.filingStatus}
                onChange={(e) => handleInputChange('filingStatus', e.target.value as any)}
                className="input-field"
              >
                <option value="single">Single</option>
                <option value="married-joint">Married Filing Jointly</option>
                <option value="married-separate">Married Filing Separately</option>
                <option value="head-household">Head of Household</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retirement Contributions ($)
              </label>
              <input
                type="number"
                value={inputs.retirementContributions}
                onChange={(e) => handleInputChange('retirementContributions', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                HSA Contributions ($)
              </label>
              <input
                type="number"
                value={inputs.hsaContributions}
                onChange={(e) => handleInputChange('hsaContributions', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Loan Interest ($)
              </label>
              <input
                type="number"
                value={inputs.studentLoanInterest}
                onChange={(e) => handleInputChange('studentLoanInterest', Number(e.target.value))}
                className="input-field"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Charitable Donations ($)
              </label>
              <input
                type="number"
                value={inputs.charitableDonations}
                onChange={(e) => handleInputChange('charitableDonations', Number(e.target.value))}
                className="input-field"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State & Local Taxes ($)
              </label>
              <input
                type="number"
                value={inputs.stateTaxes}
                onChange={(e) => handleInputChange('stateTaxes', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Other Deductions ($)
              </label>
              <input
                type="number"
                value={inputs.otherDeductions}
                onChange={(e) => handleInputChange('otherDeductions', Number(e.target.value))}
                className="input-field"
                min="0"
                step="100"
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
            <h3 className="text-xl font-bold text-gray-900">Your Tax Summary</h3>
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
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900">Federal Tax</h4>
              </div>
              <p className="text-2xl font-bold text-red-900">
                ${results.federalTax.toLocaleString()}
              </p>
              <p className="text-sm text-red-700">total tax owed</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Taxable Income</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.taxableIncome.toLocaleString()}
              </p>
              <p className="text-sm text-blue-700">after deductions</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Percent className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Effective Tax Rate</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                {results.effectiveTaxRate.toFixed(2)}%
              </p>
              <p className="text-sm text-green-700">overall tax rate</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Marginal Tax Rate</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                {results.marginalTaxRate}%
              </p>
              <p className="text-sm text-purple-700">highest bracket</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Take-Home Pay</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                ${results.takeHomePay.toLocaleString()}
              </p>
              <p className="text-sm text-teal-700">after federal tax</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Filing Status</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                {inputs.filingStatus.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
              <p className="text-sm text-orange-700">current selection</p>
            </div>
          </div>

          {/* Tax Breakdown */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Tax Breakdown by Bracket</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-2 text-gray-700 font-medium">Tax Bracket</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Income in Bracket</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Tax Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {results.taxBreakdown.map((bracket, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-900">{bracket.bracket}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${bracket.amount.toLocaleString()}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${bracket.tax.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

