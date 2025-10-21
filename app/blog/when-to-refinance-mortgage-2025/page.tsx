import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'When to Refinance Your Mortgage: Rates, Costs, and Break-even | CalcPortal Pro',
  description: 'Understand when refinancing makes sense, how to calculate break-even, and how current rates affect your monthly payment.',
  keywords: 'refinance mortgage, break-even, refinance rates, mortgage savings',
  openGraph: {
    title: 'When to Refinance Your Mortgage: Rates, Costs, and Break-even | CalcPortal Pro',
    description: 'Understand when refinancing makes sense, how to calculate break-even, and how current rates affect your monthly payment.',
    url: 'https://calcportalpro.com/blog/when-to-refinance-mortgage-2025',
  },
  alternates: {
    canonical: '/blog/when-to-refinance-mortgage-2025',
  },
};

export default function RefinanceMortgagePost() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        <div className="mb-8">
          <Link href="/blog?category=Real Estate" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-secondary-100 mb-4">
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">Real Estate</span>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>January 19, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>9 min read</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>CalcPortal Pro Team</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-tight">
              When to Refinance Your Mortgage: Rates, Costs, and Break-even
            </h1>
            <p className="text-xl text-secondary-100 leading-relaxed">
              Learn a simple framework to estimate savings, break-even months, and key risk factors before refinancing.
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-secondary-500 mt-2 mb-4">Calculating Break-even</h2>
              <p className="text-secondary-100 mb-6">
                Divide total refinance costs by the monthly payment reduction to estimate break-even months. If you plan to stay longer than break-even, refinancing may be worthwhile.
              </p>
              <p className="text-secondary-100">
                Compare scenarios using our <Link href="/calculators/mortgage" className="text-primary-500 hover:text-primary-600">mortgage calculator</Link> to model payments.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}


