'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Copy, Check, TrendingUp, Calendar, DollarSign, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface InvestmentInputs {
  initialInvestment: number
  monthlyContribution: number
  investmentPeriod: number
  expectedReturn: number
  contributionIncrease: number
  volatility: number
}

interface InvestmentResults {
  totalPortfolioValue: number
  totalContributed: number
  totalInterest: number
  annualizedReturn: number
  fiveYearProjection: number
  growthChart: GrowthPoint[]
}

interface GrowthPoint {
  year: number
  balance: number
  contributions: number
  interest: number
}

export default function InvestmentCalculator() {
  const [inputs, setInputs] = useState<InvestmentInputs>({
    initialInvestment: 10000,
    monthlyContribution: 500,
    investmentPeriod: 20,
    expectedReturn: 8,
    contributionIncrease: 3,
    volatility: 15
  })

  const [results, setResults] = useState<InvestmentResults | null>(null)
  const [copied, setCopied] = useState(false)

  const calculateInvestment = useCallback(() => {
    const {
      initialInvestment,
      monthlyContribution,
      investmentPeriod,
      expectedReturn,
      contributionIncrease,
      volatility
    } = inputs

    const monthlyRate = expectedReturn / 100 / 12
    const monthlyIncrease = contributionIncrease / 100 / 12
    const growthChart: GrowthPoint[] = []

    let balance = initialInvestment
    let totalContributed = initialInvestment
    let totalInterest = 0

    for (let year = 0; year <= investmentPeriod; year++) {
      const yearContributions = year === 0 ? 0 : monthlyContribution * 12 * Math.pow(1 + contributionIncrease / 100, year - 1)
      totalContributed += yearContributions

      if (year > 0) {
        // Add monthly contributions and compound interest
        for (let month = 1; month <= 12; month++) {
          const monthlyContributionAdjusted = monthlyContribution * Math.pow(1 + contributionIncrease / 100, year - 1)
          balance += monthlyContributionAdjusted
          balance *= (1 + monthlyRate)
        }
      }

      const yearInterest = balance - totalContributed
      totalInterest = yearInterest

      growthChart.push({
        year,
        balance: Math.round(balance * 100) / 100,
        contributions: yearContributions,
        interest: Math.round(yearInterest * 100) / 100
      })
    }

    // Calculate 5-year projection
    const fiveYearProjection = balance * Math.pow(1 + expectedReturn / 100, 5)

    // Calculate annualized return
    const annualizedReturn = (Math.pow(balance / initialInvestment, 1 / investmentPeriod) - 1) * 100

    setResults({
      totalPortfolioValue: balance,
      totalContributed: totalContributed,
      totalInterest: totalInterest,
      annualizedReturn: annualizedReturn,
      fiveYearProjection: fiveYearProjection,
      growthChart
    })
  }, [inputs])

  useEffect(() => {
    calculateInvestment()
  }, [calculateInvestment])

  const handleInputChange = (field: keyof InvestmentInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const copyResults = async () => {
    if (!results) return
    
    const text = `Investment Calculator Results:
Total Portfolio Value: $${results.totalPortfolioValue.toFixed(2)}
Total Contributed: $${results.totalContributed.toFixed(2)}
Total Interest Earned: $${results.totalInterest.toFixed(2)}
Annualized Return: ${results.annualizedReturn.toFixed(2)}%
5-Year Projection: $${results.fiveYearProjection.toFixed(2)}`
    
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
          <h2 className="text-2xl font-bold text-gray-900">Investment Planning Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Investment ($)
              </label>
              <input
                type="number"
                value={inputs.initialInvestment}
                onChange={(e) => handleInputChange('initialInvestment', Number(e.target.value))}
                className="input-field"
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={inputs.monthlyContribution}
                onChange={(e) => handleInputChange('monthlyContribution', Number(e.target.value))}
                className="input-field"
                min="0"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Period (years)
              </label>
              <input
                type="number"
                value={inputs.investmentPeriod}
                onChange={(e) => handleInputChange('investmentPeriod', Number(e.target.value))}
                className="input-field"
                min="1"
                max="50"
              />
            </div>
          </div>

          <div className="space-y-4">
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
                max="20"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Contribution Increase (%)
              </label>
              <input
                type="number"
                value={inputs.contributionIncrease}
                onChange={(e) => handleInputChange('contributionIncrease', Number(e.target.value))}
                className="input-field"
                min="0"
                max="20"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Volatility (%)
              </label>
              <input
                type="number"
                value={inputs.volatility}
                onChange={(e) => handleInputChange('volatility', Number(e.target.value))}
                className="input-field"
                min="5"
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
            <h3 className="text-xl font-bold text-gray-900">Your Investment Projection</h3>
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
                <h4 className="font-semibold text-blue-900">Portfolio Value</h4>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                ${results.totalPortfolioValue.toLocaleString()}
              </p>
              <p className="text-sm text-blue-700">after {inputs.investmentPeriod} years</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Total Contributed</h4>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${results.totalContributed.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">from contributions</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Total Interest</h4>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                ${results.totalInterest.toLocaleString()}
              </p>
              <p className="text-sm text-purple-700">earned</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900">Annualized Return</h4>
              </div>
              <p className="text-2xl font-bold text-orange-900">
                {results.annualizedReturn.toFixed(2)}%
              </p>
              <p className="text-sm text-orange-700">average annual return</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-900">5-Year Projection</h4>
              </div>
              <p className="text-2xl font-bold text-indigo-900">
                ${results.fiveYearProjection.toLocaleString()}
              </p>
              <p className="text-sm text-indigo-700">in 5 more years</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-5 h-5 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Investment Period</h4>
              </div>
              <p className="text-2xl font-bold text-teal-900">
                {inputs.investmentPeriod}
              </p>
              <p className="text-sm text-teal-700">years</p>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Growth Over Time</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-2 text-gray-700 font-medium">Year</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Balance</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Contributions</th>
                    <th className="text-right py-2 px-2 text-gray-700 font-medium">Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {results.growthChart.filter((_, index) => index % Math.max(1, Math.floor(inputs.investmentPeriod / 10)) === 0 || index === inputs.investmentPeriod).map((point) => (
                    <tr key={point.year} className="border-b border-gray-200">
                      <td className="py-2 px-2 text-gray-900">{point.year}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.balance.toLocaleString()}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.contributions.toLocaleString()}</td>
                      <td className="py-2 px-2 text-right text-gray-900">${point.interest.toLocaleString()}</td>
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
