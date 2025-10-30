import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteMetadata } from "@/lib/seoMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Essential SEO Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload Fonts for Performance */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.className} bg-white text-slate-900 min-h-screen flex flex-col`}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
