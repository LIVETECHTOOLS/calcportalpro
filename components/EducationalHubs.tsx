'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start an Emergency Fund',
    category: 'Savings',
    author: 'Sarah Collins',
    readTime: '6 min',
    image: '/images/blog/emergency-fund.jpg',
    href: '/blog/how-to-start-emergency-fund',
  },
  {
    id: 2,
    title: 'High Yield Savings Account Guide',
    category: 'Savings',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    image: '/images/blog/high-yield-savings.jpg',
    href: '/blog/high-yield-savings-account-guide',
  },
  {
    id: 3,
    title: 'How Much House Can I Afford?',
    category: 'Real Estate',
    author: 'CalcPortal Pro Team',
    readTime: '7 min',
    image: '/images/blog/house-afford.jpg',
    href: '/blog/how-much-house-can-i-afford',
  },
  {
    id: 4,
    title: 'CD Rates Guide 2025',
    category: 'Investing',
    author: 'CalcPortal Pro Team',
    readTime: '9 min',
    image: '/images/blog/cd-rates-2025.jpg',
    href: '/blog/cd-rates-guide-2025',
  },
  {
    id: 5,
    title: 'Canada FPT & GST Payment Dates 2025',
    category: 'Taxes',
    author: 'CalcPortal Pro Team',
    readTime: '8 min',
    image: '/images/blog/canada-fpt-gst-2025.jpg',
    href: '/blog/canada-fpt-gst-payment-dates-2025',
  },
  {
    id: 6,
    title: 'Types of Loans',
    category: 'Loans',
    author: 'Ziblim Abdulai',
    readTime: '5 min',
    image: '/images/blog/types-of-loans.jpg',
    href: '/blog/understanding-different-types-loans',
  },
];

export default function EducationalHubs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
              Financial Education & Tools
            </h2>
            <p className="text-lg text-secondary-100 max-w-2xl">
              Learn from financial experts and improve your money management skills.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-lg mt-4 md:mt-0 group"
          >
            View All Articles
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link href={post.href}>
                <div className="card overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '16/9' }}
                      priority={index < 3}
                    />
                    {/* Category Tag */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-500 mb-4 group-hover:text-primary-500 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>

                    {/* Author & Read Time */}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 text-sm font-medium">
                          {post.author
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-secondary-100">
                        <span className="font-medium">{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
