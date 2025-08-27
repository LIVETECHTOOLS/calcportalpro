"use client";

import { useEffect } from 'react';
import clsx from 'clsx';

type AdUnitProps = {
  adSlot: string;
  adLayout?: string;
  adFormat?: string;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
};

export default function AdUnit({
  adSlot,
  adLayout = 'in-article',
  adFormat = 'fluid',
  className,
  style,
  fullWidth = false,
}: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div
      className={clsx(
        'my-6 flex justify-center',
        fullWidth ? 'w-full' : 'w-full max-w-3xl',
        className
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-5944904248745587"
        data-ad-slot={adSlot}
        data-ad-layout={adLayout}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
