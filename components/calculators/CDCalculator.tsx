'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, DollarSign, Calendar, TrendingUp, Lock, Target } from 'lucide-react'
import Link from 'next/link'

interface CDInputs {
  principal: number
  interestRate: number
  term: number
  termType: 'months' | 'years'
  compoundFrequency: 'annually' | 'semi-annually' | 'quarterly' | 'monthly'
  earlyWithdrawalPenalty: number
}

interface CDResults {
  maturityValue: number
  totalInterest: number
  effectiveAnnualRate: number
  monthlyPayment: number
  earlyWithdrawalValue: number
  penaltyAmount: number
  ladderingSchedule: LadderingStep[]
}

interface LadderingStep {
  year: number
  amount: number
  rate: number
  maturityValue: number
  interest: number
}

export default function CDCalculator() {
  const [inputs, setInputs] = useState<CDInputs>({
    principal: 10000,
    interestRate: 5.0,
    term: 12,
    termType: 'months',
    compoundFrequency: 'annually',
    earlyWithdrawalPenalty: 3
  })

  const [results, setResults] = useState<CDResults | null>(null)
  const [copied, setCopied] = useState(false)
  const [showLaddering, setShowLaddering] = useState(false)

  const calculateCD = useCallback(() => {
    const {
      principal,
      interestRate,
      term,
      termType,
      compoundFrequency,
      earlyWithdrawalPenalty
    } = inputs

    // Convert term to years if needed
    const years = termType === 'months' ? term / 12 : term

    // Calculate compound frequency multiplier
    const frequencyMap = {
      'annually': 1,
      'semi-annually': 2,
      'quarterly': 4,
      'monthly': 12
    }
    const frequency = frequencyMap[compoundFrequency]

    // Calculate maturity value
    const ratePerPeriod = interestRate / 100 / frequency
    const periods = years * frequency
    const maturityValue = principal * Math.pow(1 + ratePerPeriod, periods)

    // Calculate effective annual rate
    const effectiveAnnualRate = (Math.pow(1 + ratePerPeriod, frequency) - 1) * 100

    // Calculate total interest
    const totalInterest = maturityValue - principal

    // Calculate early withdrawal penalty
    const penaltyAmount = principal * (earlyWithdrawalPenalty / 100)
    const earlyWithdrawalValue = principal - penaltyAmount

    // Calculate monthly payment (for display purposes)
    const monthlyPayment = totalInterest / (years * 12)

    // Generate laddering schedule
    const ladderingSchedule: LadderingStep[] = []
    for (let year = 1; year <= Math.min(10, Math.ceil(years)); year++) {
      const yearAmount = principal / Math.min(10, Math.ceil(years))
      const yearRate = interestRate + (year * 0.1) // Simulate slightly higher rates for longer terms
      const yearMaturity = yearAmount * Math.pow(1 + yearRate / 100, year)
      const yearInterest = yearMaturity - yearAmount

      ladderingSchedule.push({
        year,
        amount: yearAmount,
        rate: yearRate,
        maturityValue: yearMaturity,
        interest: yearInterest
      })
    }

    setResults({
      maturityValue,
      totalInterest,
      effectiveAnnualRate,
      monthlyPayment,
      earlyWithdrawalValue,
      penaltyAmount,
      ladderingSchedule
    })
  }, [inputs])

  useEffect(() => {
    calculateCD()
  }, [calculateCD])

  const handleInputChange = (field: keyof CDInputs, value: number | string) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `CD Calculator Results:
Principal: $${inputs.principal.toLocaleString()}
Interest Rate: ${inputs.interestRate}%
Term: ${inputs.term} ${inputs.termType}
Maturity Value: $${results.maturityValue.toFixed(2)}
Total Interest: $${results.totalInterest.toFixed(2)}
Effective Annual Rate: ${results.effectiveAnnualRate.toFixed(2)}%`
    
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Silent fail for clipboard errors
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">CD Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Principal Amount ($)
              </label>
              <input
                type="number"
                value={inputs.principal}
                onChange={(e) => handleInputChange('principal', Number(e.target.value))}
                className="input-field"
                min="100"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={inputs.interestRate}
                onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
                className="input-field"
                min="0.01"
                max="20"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Term
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={inputs.term}
                  onChange={(e) => handleInputChange('term', Number(e.target.value))}
                  className="input-field flex-1"
                  min="1"
                  max={inputs.termType === 'months' ? 600 : 50}
                />
                <select
                  value={inputs.termType}
                  onChange={(e) => handleInputChange('termType', e.target.value as 'months' | 'years')}
                  className="input-field w-24"
                >
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compound Frequency
              </label>
              <select
                value={inputs.compoundFrequency}
                onChange={(e) => handleInputChange('compoundFrequency', e.target.value as 'monthly' | 'quarterly' | 'annually')}
                className="input-field"
              >
                <option value="annually">Annually</option>
                <option value="semi-annually">Semi-annually</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Early Withdrawal Penalty (%)
              </label>
              <input
                type="number"
                value={inputs.earlyWithdrawalPenalty}
                onChange={(e) => handleInputChange('earlyWithdrawalPenalty', Number(e.target.value))}
                className="input-field"
                min="0"
                max="20"
                step="0.1"
              />
            </div>

            <div className="pt-6">
              <button
                onClick={() => setShowLaddering(!showLaddering)}
                className="w-full bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors"
              >
                {showLaddering ? 'Hide' : 'Show'} CD Laddering Strategy
              </button>
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
            <h3 className="text-xl font-bold text-gray-900">Your CD Results</h3>
            <button
              type="button"
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
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Maturity Value</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.maturityValue.toLocaleString()}
              </p>
              <p className="text-sm text-blue-700">at maturity</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Total Interest</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${results.totalInterest.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">earned</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Effective Annual Rate</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                {results.effectiveAnnualRate.toFixed(2)}%
              </p>
              <p className="text-sm text-purple-700">actual annual return</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Term</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                {inputs.term} {inputs.termType}
              </p>
              <p className="text-sm text-orange-700">investment period</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900">Early Withdrawal</h4>
              </div>
              <p className="text-2xl font-bold text-red-900">
                ${results.earlyWithdrawalValue.toLocaleString()}
              </p>
              <p className="text-sm text-red-700">after penalty</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Penalty Amount</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                ${results.penaltyAmount.toLocaleString()}
              </p>
              <p className="text-sm text-teal-700">early withdrawal cost</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* CD Laddering Strategy */}
      {showLaddering && results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">CD Laddering Strategy</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Strategy Benefits</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Regular access to funds as CDs mature</li>
              <li>• Ability to reinvest at potentially higher rates</li>
              <li>• Reduced interest rate risk</li>
              <li>• Maintains higher average returns than savings accounts</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-2 text-gray-700 font-medium">Year</th>
                  <th className="text-right py-2 px-2 text-gray-700 font-medium">Amount</th>
                  <th className="text-right py-2 px-2 text-gray-700 font-medium">Rate</th>
                  <th className="text-right py-2 px-2 text-gray-700 font-medium">Maturity Value</th>
                  <th className="text-right py-2 px-2 text-gray-700 font-medium">Interest</th>
                </tr>
              </thead>
              <tbody>
                {results.ladderingSchedule.map((step) => (
                  <tr key={step.year} className="border-b border-gray-200">
                    <td className="py-2 px-2 text-gray-900">{step.year}</td>
                    <td className="py-2 px-2 text-right text-gray-900">${step.amount.toLocaleString()}</td>
                    <td className="py-2 px-2 text-right text-gray-900">{step.rate.toFixed(2)}%</td>
                    <td className="py-2 px-2 text-right text-gray-900">${step.maturityValue.toLocaleString()}</td>
                    <td className="py-2 px-2 text-right text-gray-900">${step.interest.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
