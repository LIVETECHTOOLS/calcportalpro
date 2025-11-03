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
 * These filenames exactly match the post slugs.
 */
const availableImages = [
  "2025-tax-brackets-complete-guide.jpg",
  "50-30-20-rule-budgeting-guide-2025.jpg",
  "5-tips-building-investment-portfolio.jpg",
  "apr-vs-interest-rate-difference.jpg",
  "canada-fpt-gst-payment-dates-2025.jpg",
  "cd-rates-guide-2025.jpg",
  "how-to-build-credit-fast-2025.jpg",
  "how-to-start-emergency-fund.jpg",
  "how-gpa-impacts-college-admissions.jpg",
  "high-yield-savings-account-guide.jpg",
  "how-much-house-can-i-afford.jpg",
  "insurance-planning-guide-2025.jpg",
  "mortgage-vs-rent-which-better.jpg",
  "when-to-refinance-mortgage-2025.jpg",
  "student-loans-guide-2025.jpg",
  "top-study-hacks-improve-gpa.jpg",
  "understanding-different-types-loans.jpg",
  "smartcredit-review-2025.jpg",
  "3000-irs-tax-refund-schedule-2025.jpg",
  "a-and-d-loan.jpg",
  "can-i-get-a-mortgage-with-unfiled-taxes.jpg",
  "can-my-lawyer-give-me-a-loan.jpg",
  "can-you-get-a-home-loan-if-you-owe-taxes-2025.jpg",
  "can-you-use-a-heloc-to-buy-land-2025.jpg",
  "charter-savings-bank.jpg",
  "capital-budgeting-guides.jpg",
];

/**
 * ✅ Get the blog post image if available.
 * Matches based on the post’s slug (no fallback if missing).
 */
export function getBlogPostImage(
  slug?: string,
  _keywords: string = "",
  _category: string = "Finance",
  title: string = ""
): BlogImage | null {
  if (!slug) return null;

  const matchedImage = availableImages.find(
    (img) => img.replace(".jpg", "") === slug
  );

  if (matchedImage) {
    return {
      src: `/images/blog/${matchedImage}`,
      alt: `${title || slug} - Blog featured image`,
      width: 1200,
      height: 630,
    };
  }

  // 🚫 No matching image found
  return null;
}

/**
 * ✅ Get canonical OG image for SEO tags
 */
export function getCanonicalOgImage(): BlogImage {
  return DEFAULT_OG_IMAGE;
}
