'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Home, 
  Percent, 
  Shield, 
  BarChart3, 
  TrendingUp 
} from 'lucide-react';

const categories = [
  {
    name: 'Savings & Investment',
    icon: TrendingUp,
    href: '/calculators/compound-interest',
    description: 'Calculate compound interest and investment returns',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Loan & Mortgage',
    icon: Home,
    href: '/calculators/mortgage',
    description: 'Calculate loan payments and mortgage rates',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Tax & Salary',
    icon: Percent,
    href: '/calculators/tax',
    description: 'Estimate taxes and salary calculations',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'CD & Fixed Income',
    icon: Shield,
    href: '/calculators/cd',
    description: 'Calculate CD returns and plan laddering',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Retirement Planning',
    icon: BarChart3,
    href: '/calculators/roth-ira',
    description: 'Plan your retirement with Roth IRA',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'Health & Fitness',
    icon: TrendingUp,
    href: '/calculators/bmi',
    description: 'Calculate BMI and calorie needs',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function CategoryBlocks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
            Free Financial Calculators for Every Need
          </h2>
          <p className="text-lg text-secondary-100 max-w-2xl mx-auto">
            From budgeting to retirement planning, we have the tools you need to make informed financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link href={category.href}>
                <div className="card p-8 text-center group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-500 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-secondary-100 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-primary-500 font-medium text-sm">
                      Explore Tools
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
      </div>
    </section>
  );
}
