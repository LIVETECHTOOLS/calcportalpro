import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://calcportalpro.com'),
  
  title: {
    default: 'CalcPortal Pro - Free Financial Calculators & Tools',
    template: '%s | CalcPortal Pro'
  },
  
  description: 'Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.',
  
  keywords: [
    'financial calculator',
    'loan calculator', 
    'mortgage calculator',
    'investment calculator',
    'retirement calculator',
    'tax calculator',
    'savings calculator',
    'compound interest calculator',
    'CD calculator',
    'Roth IRA calculator',
    'budgeting tools',
    'financial planning',
    'grade calculator',
    'gpa calculator',
    'interest calculator',
    'roth ira calculator',
  ],
  
  authors: [{ name: 'CalcPortal Pro Team' }],
  creator: 'CalcPortal Pro',
  publisher: 'CalcPortal Pro',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calcportalpro.com',
    title: 'CalcPortal Pro - Free Financial Calculators & Tools',
    description: 'Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.',
    siteName: 'CalcPortal Pro',
    images: [
      {
        url: 'https://calcportalpro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CalcPortal Pro - Professional Financial Calculators',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'CalcPortal Pro - Free Financial Calculators & Tools',
    description: 'Free financial calculators for loans, mortgages, investments, taxes, and retirement planning.',
    images: ['https://calcportalpro.com/og-image.jpg'],
    creator: '@calcportalpro',
    site: '@calcportalpro',
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
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
  
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'CalcPortal Pro',
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CalcPortal Pro",
  "url": "https://calcportalpro.com",
  "logo": "https://calcportalpro.com/logo.png",
  "description": "Professional financial calculators and tools for better money decisions",
  "foundingDate": "2025",
  "sameAs": [
    "https://twitter.com/calcportalpro",
    "https://linkedin.com/company/calcportalpro",
    "https://facebook.com/calcportalpro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://calcportalpro.com/contact"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CalcPortal Pro",
  "url": "https://calcportalpro.com",
  "description": "Free financial calculators and tools",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://calcportalpro.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon & Icons - Comprehensive setup for Google Search */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/favicon.svg" color="#F59E0B" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional favicon meta tags for Google */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Google-specific favicon meta tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="google" content="notranslate" />
        
        {/* Additional icon formats for maximum compatibility */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/api/placeholder/1200/630" as="image" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RWDG6W0T4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3RWDG6W0T4', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />

        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944904248745587" crossOrigin="anonymous"></script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
