'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, TrendingUp, Calendar, DollarSign, Target } from 'lucide-react'
import Link from 'next/link'

interface RetirementInputs {
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  currentSavings: number
  desiredAnnualIncome: number
  inflationRate: number
  investmentReturn: number
  socialSecurityIncome: number
}

interface RetirementResults {
  monthlyContribution: number
  totalSavings: number
  totalContributed: number
  totalInterest: number
  yearsToRetirement: number
  retirementDuration: number
}

export default function RetirementCalculator() {
  const [inputs, setInputs] = useState<RetirementInputs>({
    currentAge: 30,
    retirementAge: 65,
    lifeExpectancy: 85,
    currentSavings: 50000,
    desiredAnnualIncome: 80000,
    inflationRate: 2.5,
    investmentReturn: 7,
    socialSecurityIncome: 30000
  })

  const [results, setResults] = useState<RetirementResults | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    calculateRetirement()
  }, [inputs])

  const calculateRetirement = () => {
    const {
      currentAge,
      retirementAge,
      lifeExpectancy,
      currentSavings,
      desiredAnnualIncome,
      inflationRate,
      investmentReturn,
      socialSecurityIncome
    } = inputs

    const yearsToRetirement = retirementAge - currentAge
    const retirementDuration = lifeExpectancy - retirementAge

    // Calculate inflation-adjusted desired income
    const inflationAdjustedIncome = desiredAnnualIncome * Math.pow(1 + inflationRate / 100, yearsToRetirement)
    
    // Calculate total retirement income needed
    const totalRetirementIncome = (inflationAdjustedIncome - socialSecurityIncome) * retirementDuration
    
    // Calculate required total savings at retirement
    const requiredSavings = totalRetirementIncome / Math.pow(1 + investmentReturn / 100, retirementDuration)
    
    // Calculate monthly contribution needed
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + investmentReturn / 100, yearsToRetirement)
    const additionalSavingsNeeded = requiredSavings - futureValueOfCurrentSavings
    
    let monthlyContribution = 0
    if (additionalSavingsNeeded > 0) {
      const monthlyRate = investmentReturn / 100 / 12
      const months = yearsToRetirement * 12
      monthlyContribution = (additionalSavingsNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
    }

    const totalContributed = monthlyContribution * 12 * yearsToRetirement
    const totalInterest = requiredSavings - totalContributed - currentSavings

    setResults({
      monthlyContribution: Math.max(0, monthlyContribution),
      totalSavings: requiredSavings,
      totalContributed: totalContributed,
      totalInterest: totalInterest,
      yearsToRetirement,
      retirementDuration
    })
  }

  const handleInputChange = (field: keyof RetirementInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `Retirement Planning Results:
Monthly Contribution Needed: $${results.monthlyContribution.toFixed(2)}
Total Savings at Retirement: $${results.totalSavings.toFixed(2)}
Total Contributed: $${results.totalContributed.toFixed(2)}
Total Interest Earned: $${results.totalInterest.toFixed(2)}
Years to Retirement: ${results.yearsToRetirement}
Retirement Duration: ${results.retirementDuration} years`
    
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
          <h2 className="text-2xl font-bold text-gray-900">Retirement Planning Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Age
              </label>
              <input
                type="number"
                value={inputs.currentAge}
                onChange={(e) => handleInputChange('currentAge', Number(e.target.value))}
                className="input-field"
                min="18"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retirement Age
              </label>
              <input
                type="number"
                value={inputs.retirementAge}
                onChange={(e) => handleInputChange('retirementAge', Number(e.target.value))}
                className="input-field"
                min="40"
                max="80"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Life Expectancy
              </label>
              <input
                type="number"
                value={inputs.lifeExpectancy}
                onChange={(e) => handleInputChange('lifeExpectancy', Number(e.target.value))}
                className="input-field"
                min="70"
                max="120"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Savings ($)
              </label>
              <input
                type="number"
                value={inputs.currentSavings}
                onChange={(e) => handleInputChange('currentSavings', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Desired Annual Income ($)
              </label>
              <input
                type="number"
                value={inputs.desiredAnnualIncome}
                onChange={(e) => handleInputChange('desiredAnnualIncome', Number(e.target.value))}
                className="input-field"
                min="10000"
                step="5000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inflation Rate (%)
              </label>
              <input
                type="number"
                value={inputs.inflationRate}
                onChange={(e) => handleInputChange('inflationRate', Number(e.target.value))}
                className="input-field"
                min="0"
                max="10"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Return (%)
              </label>
              <input
                type="number"
                value={inputs.investmentReturn}
                onChange={(e) => handleInputChange('investmentReturn', Number(e.target.value))}
                className="input-field"
                min="1"
                max="15"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Social Security Income ($)
              </label>
              <input
                type="number"
                value={inputs.socialSecurityIncome}
                onChange={(e) => handleInputChange('socialSecurityIncome', Number(e.target.value))}
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
            <h3 className="text-xl font-bold text-gray-900">Your Retirement Plan</h3>
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
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Monthly Contribution</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.monthlyContribution.toFixed(2)}
              </p>
              <p className="text-sm text-blue-700">per month needed</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Total Savings</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${results.totalSavings.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">at retirement</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Total Interest</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                ${results.totalInterest.toLocaleString()}
              </p>
              <p className="text-sm text-purple-700">earned</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Years to Retirement</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                {results.yearsToRetirement}
              </p>
              <p className="text-sm text-orange-700">years remaining</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-900">Retirement Duration</h4>
              </div>
              <p className="text-2xl font-bold text-indigo-900">
                {results.retirementDuration}
              </p>
              <p className="text-sm text-indigo-700">years planned</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Total Contributed</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                ${results.totalContributed.toLocaleString()}
              </p>
              <p className="text-sm text-teal-700">from contributions</p>
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
