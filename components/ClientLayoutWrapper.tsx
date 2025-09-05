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

  // For now: Header ad always loads, others lazy-load
  return (
    <>
      {/* Header Ad */}
      <div className="flex justify-center my-4">
        <AdUnit adSlot="2674505389" />
      </div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Blog-specific ad injection could be expanded here later */}
      {isBlog && (
        <div className="flex justify-center my-6">
          <AdUnit adSlot="2674505389" />
        </div>
      )}

      {/* Footer Ad */}
      <div className="flex justify-center my-4">
        <AdUnit adSlot="2674505389" />
      </div>
    </>
  );
}
