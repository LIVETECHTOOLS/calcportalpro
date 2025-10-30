import React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import AdUnit from '@/components/ads/AdUnit';

export const metadata: Metadata = {
  title: 'When Does Daylight Savings Time Start and End? 2025 Guide | CalcPortal Pro',
  description: 'Daylight savings time 2025: when does daylight savings time start and end, what states are getting rid of daylight savings time, and why it matters.',
  keywords: 'daylight savings, when does daylight savings time start, when does daylight savings end, when does daylight savings time end permanently, what states are getting rid of daylight savings time',
  openGraph: {
    title: 'When Does Daylight Savings Time Start and End? 2025 Guide',
    description: 'Key dates for daylight savings time 2025, states opting out, and permanent daylight saving updates.',
    type: 'article',
    url: 'https://calcportalpro.com/blog/when-does-daylight-savings-time-start',
  },
  alternates: { canonical: 'https://calcportalpro.com/blog/when-does-daylight-savings-time-start' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "When Does Daylight Savings Time Start and End? 2025 Guide",
  "description": "Dates and policy updates for daylight savings time in 2025, including states opting out and permanent DST proposals.",
  "author": { "@type": "Organization", "name": "CalcPortal Pro" },
  "publisher": { "@type": "Organization", "name": "CalcPortal Pro" },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://calcportalpro.com/blog/when-does-daylight-savings-time-start" },
  "articleSection": "Savings",
  "keywords": "daylight savings, when does daylight savings time start, when does daylight savings end, permanent daylight saving, states getting rid of daylight savings"
};

export default function DaylightSavings() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link href="/blog" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> January 15, 2025</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 9 min read</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-1" /> CalcPortal Pro Team</div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">When Does Daylight Savings Time Start and End? 2025 Guide</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you’re asking “when does daylight savings time start?” or “when does daylight savings end?”, here are the key 2025 dates, states opting out, and the latest on whether daylight savings time will end permanently. We also explain how DST can impact your sleep, energy use, and even your budget.
            </p>

            <AdUnit adSlot="6578932501" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Daylight Savings 2025 Key Dates</h2>
            <p className="text-gray-700 mb-6">Most U.S. states “spring forward” and “fall back.” Arizona (except Navajo Nation) and Hawaii do not observe daylight saving time.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What States Are Getting Rid of Daylight Savings Time?</h2>
            <p className="text-gray-700 mb-6">Several states have passed legislation to adopt permanent daylight saving or standard time, pending federal approval. We summarize the latest policy status and proposals.</p>

            <AdUnit adSlot="6578932502" />

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Will Daylight Savings Time End Permanently?</h2>
            <p className="text-gray-700 mb-6">Federal efforts like the Sunshine Protection Act have sought permanent DST nationwide. We outline the pros and cons, health and energy research, and what would need to change.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips to Prepare for the Time Change</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Adjust sleep schedule gradually a few days before.</li>
              <li>Reset clocks and appliance timers the night before.</li>
              <li>Update scheduling apps and calendar reminders.</li>
            </ul>

            <AdUnit adSlot="6578932503" />
          </div>
        </div>
      </div>
    </>
  );
}
