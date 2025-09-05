"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import AdUnit from "@/components/ads/AdUnit";
import { ReactNode, ReactElement, isValidElement, cloneElement } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calcportalpro.com"),
  title: "CalcPortal Pro",
  description:
    "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.",
  keywords: [
    "financial calculator",
    "loan calculator",
    "mortgage calculator",
    "investment calculator",
    "retirement calculator",
    "tax calculator",
    "savings calculator",
    "compound interest calculator",
    "CD calculator",
    "Roth IRA calculator",
    "budgeting tools",
    "financial planning",
    "grade calculator",
    "gpa calculator",
    "interest calculator",
    "roth ira calculator",
  ],
  authors: [{ name: "CalcPortal Pro Team" }],
  creator: "CalcPortal Pro",
  publisher: "CalcPortal Pro",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calcportalpro.com",
    title: "CalcPortal Pro - Free Financial Calculators & Tools",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.",
    siteName: "CalcPortal Pro",
    images: [
      {
        url: "https://calcportalpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Professional Financial Calculators",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcPortal Pro",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning.",
    images: ["https://calcportalpro.com/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.GOOGLE_VERIFICATION_CODE ||
      "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "CalcPortal Pro",
  },
};

// Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CalcPortal Pro",
  url: "https://calcportalpro.com",
  logo: "https://calcportalpro.com/logo.png",
  description:
    "Professional financial calculators and tools for better money decisions",
  foundingDate: "2025",
  sameAs: [
    "https://twitter.com/calcportalpro",
    "https://linkedin.com/company/calcportalpro",
    "https://facebook.com/calcportalpro",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://calcportalpro.com/contact",
  },
  address: { "@type": "PostalAddress", addressCountry: "US" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CalcPortal Pro",
  url: "https://calcportalpro.com",
  description: "Free financial calculators and tools",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://calcportalpro.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// 🔹 Smart Blog Content Wrapper
function BlogContentWrapper({ children }: { children: ReactNode }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const injectedContent: ReactNode[] = [];
  let paragraphCount = 0;

  childrenArray.forEach((child, index) => {
    injectedContent.push(child);

    if (
      isValidElement(child) &&
      (child.type as any) === "p" // check for paragraphs
    ) {
      paragraphCount++;
      if (paragraphCount === 3) {
        injectedContent.push(
          <div key="mid-ad" style={{ margin: "40px 0" }}>
            <AdUnit adSlot="1716130019" />
          </div>
        );
      }
    }
  });

  return <>{injectedContent}</>;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog/");

  return (
    <html lang="en">
      <head>
        {/* Meta, favicons, preload, analytics, adsense, schema — unchanged */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RWDG6W0T4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3RWDG6W0T4');
            `,
          }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944904248745587"
          crossOrigin="anonymous"
        ></script>

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
        {/* 🔹 Global Header Ad */}
        <AdUnit
          adSlot="2674505389"
          style={{ display: "inline-block", width: "728px", height: "90px" }}
        />

        {/* Page Content */}
        <main>
          {isBlog ? (
            <BlogContentWrapper>{children}</BlogContentWrapper>
          ) : (
            children
          )}
        </main>

        {/* 🔹 Global Footer Ad */}
        <AdUnit adSlot="1716130019" />
      </body>
    </html>
  );
}
