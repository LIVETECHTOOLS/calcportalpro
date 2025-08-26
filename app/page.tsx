import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CategoryBlocks from '@/components/CategoryBlocks';
import PopularCalculators from '@/components/PopularCalculators';
import EducationalHubs from '@/components/EducationalHubs';
import TestimonialSection from '@/components/TestimonialSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
  description: 'Take control of your finances with our free, easy-to-use calculators and tools. Budgeting, loans, mortgages, taxes, investments, and retirement planning.',
  keywords: 'financial calculator, loan calculator, mortgage calculator, tax calculator, investment calculator, retirement calculator, budgeting tools',
  openGraph: {
    title: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
    description: 'Take control of your finances with our free, easy-to-use calculators and tools.',
    url: 'https://calcportalpro.com',
    siteName: 'CalcPortal Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CalcPortal Pro - Financial Calculators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
    description: 'Take control of your finances with our free, easy-to-use calculators and tools.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <main>
        <HeroSection />
        <CategoryBlocks />
        <PopularCalculators />
        <EducationalHubs />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
