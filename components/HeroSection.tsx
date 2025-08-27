'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-500 leading-tight">
              Smarter Financial Tools.
              <br />
              <span className="text-gradient">Better Money Decisions.</span>
            </h1>
            
            <p className="text-xl text-secondary-100 leading-relaxed max-w-lg">
              Take control of your finances with our free, easy-to-use calculators and tools.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/calculators" className="btn-primary inline-flex items-center space-x-2">
                <Calculator size={20} />
                <span>Try Our Free Calculators</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Piggy Bank */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Piggy Bank */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 bg-primary-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="w-64 h-64 bg-primary-600 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary-700 rounded-full flex items-center justify-center">
                    <DollarSign size={80} className="text-white" />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <TrendingUp size={24} className="text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Calculator size={28} className="text-white" />
              </motion.div>
              
              {/* Decorative Dots */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-primary-400 rounded-full"></div>
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-accent-400 rounded-full"></div>
              <div className="absolute top-32 right-20 w-2 h-2 bg-primary-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
