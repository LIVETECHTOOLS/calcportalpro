'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Mark',
    quote: "CalcPortal Pro's calculators helped me plan my finances better. Highly recommend!",
    image: '/api/placeholder/80/80'
  },
  {
    id: 2,
    name: 'Sarah',
    quote: "The mortgage calculator saved me hours of research. Easy to use and accurate!",
    image: '/api/placeholder/80/80'
  },
  {
    id: 3,
    name: 'David',
    quote: "Finally found a retirement calculator that actually makes sense. Great tool!",
    image: '/api/placeholder/80/80'
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-secondary-100 max-w-2xl mx-auto">
            Join thousands of users who trust CalcPortal Pro for their financial calculations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* User Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {testimonials[currentIndex].name[0]}
                  </span>
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-secondary-500 mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                {/* User Name */}
                <div className="text-lg font-semibold text-secondary-500">
                  {testimonials[currentIndex].name}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
