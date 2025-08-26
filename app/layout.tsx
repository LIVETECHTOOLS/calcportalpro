import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
    template: '%s | CalcPortal Pro'
  },
  description: 'Take control of your finances with our free, easy-to-use calculators and tools. Budgeting, loans, mortgages, taxes, investments, and retirement planning.',
  keywords: 'financial calculator, loan calculator, mortgage calculator, tax calculator, investment calculator, retirement calculator, budgeting tools',
  authors: [{ name: 'CalcPortal Pro' }],
  creator: 'CalcPortal Pro',
  publisher: 'CalcPortal Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calcportalpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calcportalpro.com',
    title: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
    description: 'Take control of your finances with our free, easy-to-use calculators and tools.',
    siteName: 'CalcPortal Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CalcPortal Pro - Financial Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcPortal Pro - Smarter Financial Tools. Better Money Decisions.',
    description: 'Take control of your finances with our free, easy-to-use calculators and tools.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
