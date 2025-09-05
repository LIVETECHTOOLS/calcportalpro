"use client";

import { useEffect } from "react";
import clsx from "clsx";

type AdUnitProps = {
  type?: "fixed" | "responsive"; // Ad type
  className?: string;
  style?: React.CSSProperties;
};

export default function AdUnit({ type = "responsive", className, style }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.warn("AdSense error:", err);
    }
  }, []);

  return (
    <div
      className={clsx("my-6 flex justify-center w-full", className)}
      style={style}
    >
      {type === "fixed" ? (
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "728px", height: "90px" }}
          data-ad-client="ca-pub-5944904248745587"
          data-ad-slot="2674505389"
        />
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5944904248745587"
          data-ad-slot="1716130019"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
