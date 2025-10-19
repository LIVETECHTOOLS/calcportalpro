'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Home, 
  Percent, 
  User 
} from 'lucide-react';

const popularCalculators = [
  {
    name: 'Compound Interest Calculator',
    icon: TrendingUp,
    href: '/calculators/compound-interest',
    description: 'Calculate how your investments grow over time',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Mortgage Calculator',
    icon: Home,
    href: '/calculators/mortgage',
    description: 'Estimate your monthly mortgage payments',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'CD Calculator',
    icon: TrendingUp,
    href: '/calculators/cd',
    description: 'Calculate CD returns and plan laddering strategies',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'Roth IRA Calculator',
    icon: User,
    href: '/calculators/roth-ira',
    description: 'Plan your retirement with tax-free growth',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Tax Calculator',
    icon: Percent,
    href: '/calculators/tax',
    description: 'Calculate your tax liability and refunds',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Retirement Calculator',
    icon: User,
    href: '/calculators/retirement',
    description: 'Plan your retirement savings strategy',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function PopularCalculators() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
            Popular Calculators
          </h2>
          <p className="text-lg text-secondary-100 max-w-2xl mx-auto">
            Our most-used financial tools to help you make smart money decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCalculators.map((calculator, index) => (
            <motion.div
              key={calculator.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link href={calculator.href}>
                <div className="card p-6 text-center group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${calculator.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <calculator.icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-secondary-500 mb-2 group-hover:text-primary-500 transition-colors duration-300 leading-tight">
                    {calculator.name}
                  </h3>
                  
                  <p className="text-secondary-100 text-sm leading-relaxed">
                    {calculator.description}
                  </p>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-primary-500 font-medium text-sm">
                      Try Now
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/calculators" className="btn-secondary inline-flex items-center space-x-2">
            <span>View All Calculators</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
