/**
 * Blog image interface
 */
export interface BlogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * ✅ Canonical Open Graph image (for SEO metadata only)
 */
const DEFAULT_OG_IMAGE: BlogImage = {
  src: "/images/og-image.jpg",
  alt: "CalcPortal Pro - Financial Tools and Insights",
  width: 1200,
  height: 630,
};

/**
 * ✅ All local images that exist in /public/images/blog
 * These filenames should match each post's slug.
 */
const availableImages = [
  "apr-vs-interest-rate.jpg",
  "budgeting-50-30-20-rule.jpg",
  "build-credit-fast-2025.jpg",
  "canada-fpt-gst-2025.jpg",
  "cd-rates-2025.jpg",
  "daylight-savings-2025.jpg",
  "emergency-fund.jpg",
  "gpa-college-admissions-2025.jpg",
  "high-yield-savings.jpg",
  "house-afford.jpg",
  "index-funds-vs-etfs.jpg",
  "insurance-guide-2025.jpg",
  "investment-portfolio-tips.jpg",
  "investment-strategies-2025.jpg",
  "mortgage-vs-rent.jpg",
  "refinance-mortgage-2025.jpg",
  "retirement-planning-2025.jpg",
  "small-business-tax-deductions.jpg",
  "student-loans-2025.jpg",
  "study-hacks-gpa-2025.jpg",
  "tax-brackets-2025.jpg",
  "types-of-loans.jpg",

  // ✅ Added new image for SmartCredit Review
  "smartcredit-review-2025.jpg",
];

/**
 * ✅ Get the blog post image if available.
 * If the image doesn't exist, returns `null` (no fallback).
 */
export function getBlogPostImage(
  slug?: string,
  _keywords: string = "",
  _category: string = "Finance",
  title: string = ""
): BlogImage | null {
  if (slug) {
    const match = availableImages.find(
      (img) => img.replace(".jpg", "") === slug
    );
    if (match) {
      return {
        src: `/images/blog/${match}`,
        alt: `${title || slug} - Blog featured image`,
        width: 1200,
        height: 630,
      };
    }
  }

  // 🚫 No image found — return null (so you can easily identify posts missing images)
  return null;
}

/**
 * ✅ Get canonical OG image for SEO tags
 */
export function getCanonicalOgImage(): BlogImage {
  return DEFAULT_OG_IMAGE;
}
