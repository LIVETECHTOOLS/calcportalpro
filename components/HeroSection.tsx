'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section-padding bg-primary-50 overflow-hidden" role="banner">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-500 leading-tight">
              Free Financial Calculators & Tools.
              <br />
              <span className="text-gradient">Better Money Decisions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary-100 leading-relaxed max-w-lg">
              Take control of your finances with our free, easy-to-use calculators and tools.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/calculators"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Calculator size={20} />
                <span>Try Our Free Calculators</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end overflow-hidden"
          >
            <div className="relative">
              {/* Main Piggy Bank */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-64 h-64 sm:w-80 sm:h-80 bg-primary-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-primary-600 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 bg-primary-700 rounded-full flex items-center justify-center">
                    <DollarSign size={60} className="text-white sm:size-80" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <TrendingUp size={20} className="text-white sm:size-24" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-2 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-accent-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Calculator size={22} className="text-white sm:size-28" />
              </motion.div>

              {/* Decorative Dots */}
              <div className="absolute top-8 right-8 w-2 h-2 sm:w-3 sm:h-3 bg-primary-400 rounded-full"></div>
              <div className="absolute bottom-16 left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400 rounded-full"></div>
              <div className="absolute top-24 right-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
