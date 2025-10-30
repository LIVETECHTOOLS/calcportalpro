'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, DollarSign, Calendar, TrendingUp, Target, Percent } from 'lucide-react'
import Link from 'next/link'

interface RothIRAInputs {
  currentAge: number
  retirementAge: number
  currentBalance: number
  annualContribution: number
  expectedReturn: number
  taxRate: number
  inflationRate: number
}

interface RothIRAResults {
  totalContributions: number
  totalGrowth: number
  finalBalance: number
  taxSavings: number
  realValue: number
  monthlyIncome: number
  growthChart: GrowthPoint[]
}

interface GrowthPoint {
  age: number
  balance: number
  contributions: number
  growth: number
}

export default function RothIRACalculator() {
  const [inputs, setInputs] = useState<RothIRAInputs>({
    currentAge: 30,
    retirementAge: 65,
    currentBalance: 10000,
    annualContribution: 7000,
    expectedReturn: 8,
    taxRate: 22,
    inflationRate: 2.5
  })

  const [results, setResults] = useState<RothIRAResults | null>(null)
  const [copied, setCopied] = useState(false)

  const calculateRothIRA = useCallback(() => {
    const {
      currentAge,
      retirementAge,
      currentBalance,
      annualContribution,
      expectedReturn,
      taxRate,
      inflationRate
    } = inputs

    const yearsToRetirement = retirementAge - currentAge
    const monthlyRate = expectedReturn / 100 / 12
    const months = yearsToRetirement * 12

    // Calculate future value with monthly compounding
    let balance = currentBalance
    const growthChart: GrowthPoint[] = []
    
    for (let year = 0; year <= yearsToRetirement; year++) {
      const age = currentAge + year
      const yearContributions = year === 0 ? 0 : annualContribution
      
      if (year > 0) {
        // Add annual contribution and compound monthly
        for (let month = 1; month <= 12; month++) {
          balance += annualContribution / 12
          balance *= (1 + monthlyRate)
        }
      }

      const totalContributions = currentBalance + (yearContributions * year)
      const growth = balance - totalContributions

      growthChart.push({
        age,
        balance: Math.round(balance * 100) / 100,
        contributions: totalContributions,
        growth: Math.round(growth * 100) / 100
      })
    }

    const totalContributions = currentBalance + (annualContribution * yearsToRetirement)
    const totalGrowth = balance - totalContributions
    
    // Calculate tax savings (Roth IRA vs Traditional IRA)
    const taxSavings = totalGrowth * (taxRate / 100)
    
    // Calculate real value adjusted for inflation
    const realValue = balance / Math.pow(1 + inflationRate / 100, yearsToRetirement)
    
    // Calculate monthly income using 4% rule
    const monthlyIncome = (balance * 0.04) / 12

    setResults({
      totalContributions,
      totalGrowth,
      finalBalance: balance,
      taxSavings,
      realValue,
      monthlyIncome,
      growthChart
    })
  }, [inputs])

  useEffect(() => {
    calculateRothIRA()
  }, [calculateRothIRA])

  const handleInputChange = (field: keyof RothIRAInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `Roth IRA Calculator Results:
Current Age: ${inputs.currentAge}
Retirement Age: ${inputs.retirementAge}
Total Contributions: $${results.totalContributions.toLocaleString()}
Total Growth: $${results.totalGrowth.toLocaleString()}
Final Balance: $${results.finalBalance.toLocaleString()}
Tax Savings: $${results.taxSavings.toLocaleString()}
Monthly Retirement Income: $${results.monthlyIncome.toFixed(2)}`
    
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
          <h2 className="text-2xl font-bold text-gray-900">Roth IRA Calculator</h2>
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
                max="80"
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
                max="85"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Balance ($)
              </label>
              <input
                type="number"
                value={inputs.currentBalance}
                onChange={(e) => handleInputChange('currentBalance', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Contribution ($)
              </label>
              <input
                type="number"
                value={inputs.annualContribution}
                onChange={(e) => handleInputChange('annualContribution', Number(e.target.value))}
                className="input-field"
                min="0"
                max="8000"
                step="100"
              />
              <p className="text-xs text-gray-500 mt-1">
                2025 limit: $7,000 ($8,000 if 50+)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                value={inputs.expectedReturn}
                onChange={(e) => handleInputChange('expectedReturn', Number(e.target.value))}
                className="input-field"
                min="1"
                max="15"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Tax Rate (%)
              </label>
              <input
                type="number"
                value={inputs.taxRate}
                onChange={(e) => handleInputChange('taxRate', Number(e.target.value))}
                className="input-field"
                min="0"
                max="50"
                step="1"
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
            <h3 className="text-xl font-bold text-gray-900">Your Roth IRA Projection</h3>
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
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Final Balance</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${results.finalBalance.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">at retirement</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Total Contributions</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.totalContributions.toLocaleString()}
              </p>
              <p className="text-sm text-blue-700">over {inputs.retirementAge - inputs.currentAge} years</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Total Growth</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                ${results.totalGrowth.toLocaleString()}
              </p>
              <p className="text-sm text-purple-700">tax-free earnings</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <Percent className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Tax Savings</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                ${results.taxSavings.toLocaleString()}
              </p>
              <p className="text-sm text-orange-700">vs traditional IRA</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-900">Years to Retirement</h4>
              </div>
              <p className="text-2xl font-bold text-indigo-900">
                {inputs.retirementAge - inputs.currentAge}
              </p>
              <p className="text-sm text-indigo-700">years remaining</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Monthly Income</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                ${results.monthlyIncome.toFixed(0)}
              </p>
              <p className="text-sm text-teal-700">using 4% rule</p>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Growth Over Time</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-2 text-gray-700 font-medium">Age</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Balance</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Contributions</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {results.growthChart.filter((_, index) => index % Math.max(1, Math.floor((inputs.retirementAge - inputs.currentAge) / 10)) === 0 || index === results.growthChart.length - 1).map((point) => (
                    <tr key={point.age} className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-900">{point.age}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.balance.toLocaleString()}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.contributions.toLocaleString()}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.growth.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* Roth IRA Benefits */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose a Roth IRA?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Tax-Free Growth</p>
                <p className="text-sm text-gray-700">Your investments compound without annual tax drag</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Tax-Free Withdrawals</p>
                <p className="text-sm text-gray-700">Qualified distributions are completely tax-free</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">No RMDs</p>
                <p className="text-sm text-gray-700">No required minimum distributions at age 73</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Flexible Withdrawals</p>
                <p className="text-sm text-gray-700">Contributions can be withdrawn penalty-free anytime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Estate Planning</p>
                <p className="text-sm text-gray-700">Tax-free inheritance for your beneficiaries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Hedge Against Tax Increases</p>
                <p className="text-sm text-gray-700">Protect against future higher tax rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
