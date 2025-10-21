"use client";

import { usePathname } from "next/navigation";
import AdUnit from "@/components/ads/AdUnit";
import { ReactNode } from "react";

export default function ClientLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const isBlog = pathname?.startsWith("/blog");
  const isCalculator = pathname?.startsWith("/calculators");

  // Define category slugs you want ads on
  const categorySlugs = [
    "/tax",
    "/retirement",
    "/investment",
    "/loans",
    "/mortgage",
    "/savings",
    "/finance",
  ];

  const isCategory = categorySlugs.some((slug) =>
    pathname?.startsWith(slug)
  );

  const isHome = pathname === "/";

  // Show ads on calculators, blog, and category pages (not homepage)
  const showAds = isBlog || isCalculator || isCategory;

  return (
    <>
      {/* Header Ad */}
      {showAds && (
        <div className="flex justify-center my-4">
          <AdUnit adSlot="2674505389" />
        </div>
      )}

      {/* Main Content */}
      {children}

      {/* Blog-specific extra ad */}
      {isBlog && (
        <div className="flex justify-center my-6">
          <AdUnit adSlot="2674505389" />
        </div>
      )}

      {/* Footer Ad */}
      {showAds && (
        <div className="flex justify-center my-4">
          <AdUnit adSlot="2674505389" />
        </div>
      )}
    </>
  );
}
