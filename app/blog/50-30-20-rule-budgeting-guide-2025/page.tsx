import React from "react";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The 50/30/20 Rule: Simple Budgeting Guide for 2025 | CalcPortal Pro',
  description: 'Learn how to budget your income using the 50/30/20 rule and practical tips to stay consistent and grow savings in 2025.',
  keywords: '50/30/20 rule, budgeting, savings, personal finance, budget plan',
  openGraph: {
    title: 'The 50/30/20 Rule: Simple Budgeting Guide for 2025 | CalcPortal Pro',
    description: 'Learn how to budget your income using the 50/30/20 rule and practical tips to stay consistent and grow savings in 2025.',
    url: 'https://calcportalpro.com/blog/50-30-20-rule-budgeting-guide-2025',
  },
  alternates: {
    canonical: '/blog/50-30-20-rule-budgeting-guide-2025',
  },
};

export default function BudgetingRulePost() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        <div className="mb-8">
          <Link href="/blog?category=Savings" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-secondary-100 mb-4">
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">Savings</span>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>January 19, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>7 min read</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>CalcPortal Pro Team</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-tight">
              The 50/30/20 Rule: Simple Budgeting Guide for 2025
            </h1>
            <p className="text-xl text-secondary-100 leading-relaxed">
              A straightforward framework to allocate your income to needs, wants, and savings so you can grow your emergency fund and financial stability.
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-secondary-500 mt-2 mb-4">How the Rule Works</h2>
              <p className="text-secondary-100 mb-6">
                Allocate 50% to needs, 30% to wants, and 20% to savings and debt payoff. Adjust percentages slightly to fit your situation while keeping savings a priority.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-2 mb-4">Getting Started</h2>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li>List monthly take-home income and fixed obligations</li>
                <li>Cap lifestyle spending and automate transfers to savings</li>
                <li>Use our <Link href="/calculators/savings" className="text-primary-500 hover:text-primary-600">savings calculator</Link> to plan contributions</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}


