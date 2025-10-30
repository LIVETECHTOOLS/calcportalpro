import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://calcportalpro.com"),

  // 🧭 Core metadata
  title: {
    default: "CalcPortal Pro | Free Financial Calculators & Tools",
    template: "%s | CalcPortal Pro",
  },
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

  // ⚙️ Robots and crawling
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

  // 📈 Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calcportalpro.com",
    siteName: "CalcPortal Pro",
    title: "CalcPortal Pro - Free Financial Calculators & Tools",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning. Make smarter money decisions with our easy-to-use tools.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalcPortal Pro - Professional Financial Calculators",
        type: "image/jpeg",
      },
    ],
  },

  // 🐦 Twitter card data
  twitter: {
    card: "summary_large_image",
    title: "CalcPortal Pro",
    description:
      "Free financial calculators for loans, mortgages, investments, taxes, and retirement planning.",
    images: ["/images/og-image.jpg"],
    creator: "@calcportalpro",
    site: "@calcportalpro",
  },

  // 🧩 Canonical + alternates
  alternates: {
    canonical: "/",
  },

  // 🔍 Verification (Google + Impact)
  verification: {
    google: "aacOslrxzVHy5P1E8enc82k2z6RpV68FTiDeG_QYunk",
    other: {
      "impact-site-verification": "9744be3e-1e96-4922-8a31-80877fb2a027",
    },
  },

  // 🎨 App + theme settings
  other: {
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "CalcPortal Pro",
  },
};
