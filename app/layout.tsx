import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// ✅ Metadata must stay in a server component
export const metadata: Metadata = {
  metadataBase: new URL("https://calcportalpro.com"),
  title: "Free Financial Calculators & Tools | CalcPortal Pro",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    google: "aacOslrxzVHy5P1E8enc82k2z6RpV68FTiDeG_QYunk",
  },
  other: {
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "CalcPortal Pro",
  },
};

// ✅ RootLayout must be a **server component**
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Essential Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="format-detection" content="telephone=no" />

        {/* ✅ Impact Verification */}
        <meta
          name="impact-site-verification"
          content="9744be3e-1e96-4922-8a31-80877fb2a027"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="mask-icon" href="/favicon.svg" color="#F59E0B" />
        <link rel="manifest" href="/manifest.json" />

        {/* Microsoft & Theme */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
        <meta name="theme-color" content="#2563eb" />

        {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="aacOslrxzVHy5P1E8enc82k2z6RpV68FTiDeG_QYunk"
        />
        <meta name="google" content="notranslate" />

        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Analytics - Non-blocking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3RWDG6W0T4"
        ></script>
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

        {/* Google AdSense - Non-blocking */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944904248745587"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* ✅ Wrap children with header + footer */}
        <ClientLayoutWrapper>
          <Header />
          {children}
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
