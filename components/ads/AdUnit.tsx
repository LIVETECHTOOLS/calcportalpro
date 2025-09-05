"use client";

import { useEffect } from "react";
import clsx from "clsx";

type AdUnitProps = {
  // ✅ Supports both old and new usage
  adSlot?: string;
  type?: "fixed" | "responsive";
  className?: string;
  style?: React.CSSProperties;
};

export default function AdUnit({ adSlot, type, className, style }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  // Default values
  let slot = adSlot;
  let configStyle: React.CSSProperties = { display: "block" };
  let format: string | undefined = "auto";

  // ✅ Map type → slot and styles
  if (type === "fixed") {
    slot = "2674505389";
    configStyle = { display: "inline-block", width: "728px", height: "90px" };
    format = undefined;
  } else if (type === "responsive") {
    slot = "1716130019";
    configStyle = { display: "block" };
    format = "auto";
  }

  return (
    <div className={clsx("my-6 flex justify-center w-full", className)}>
      <ins
        className="adsbygoogle"
        style={{ ...configStyle, ...style }}
        data-ad-client="ca-pub-5944904248745587"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
