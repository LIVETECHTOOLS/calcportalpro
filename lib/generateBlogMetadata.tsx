import { Metadata } from "next";
import Script from "next/script";
import { getBlogPostImage } from "@/lib/blogImageAssignment";

export interface BlogMetaInput {
  title: string;
  description: string;
  keywords?: string;
  slug: string;
  publishDate?: string;
  category?: string;
  author?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  tags?: string[];
}

/**
 * ✅ Universal SEO Metadata Generator
 * Generates full Open Graph, Twitter, canonical, and structured JSON-LD.
 */
export function generateBlogMetadata({
  title,
  description,
  keywords = "",
  slug,
  publishDate,
  category = "Finance",
  author = "CalcPortal Pro Team",
  featuredImage,
  tags = [],
}: BlogMetaInput): Metadata {
  const baseUrl = "https://calcportalpro.com";
  const canonicalUrl = `${baseUrl}/blog/${slug}`;

  // ✅ Pick featured or fallback image
  const image =
    featuredImage ||
    getBlogPostImage(slug, keywords, category, title) || {
      src: "/og-image.jpg",
      alt: "CalcPortal Pro - Free Financial Calculators & Tools",
    };

  // ✅ Structured JSON-LD object for Google
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "CalcPortal Pro",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon-32x32.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    datePublished: publishDate,
    articleSection: category,
    keywords,
    image: `${baseUrl}${image.src}`,
  };

  return {
    title: `${title} | CalcPortal Pro`,
    description,
    keywords,
    authors: [{ name: author }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | CalcPortal Pro`,
      description,
      url: canonicalUrl,
      siteName: "CalcPortal Pro",
      type: "article",
      publishedTime: publishDate,
      authors: [author],
      section: category,
      tags: tags.length > 0 ? tags : keywords.split(",").map(t => t.trim()),
      images: [
        {
          url: `${baseUrl}${image.src}`,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CalcPortal Pro`,
      description,
      images: [`${baseUrl}${image.src}`],
      creator: "@CalcPortalPro",
    },
    other: {
      "article:published_time": publishDate || "",
      "article:section": category,
      "article:author": author,
      "article:tag": tags.join(", ") || keywords,
      "og:site_name": "CalcPortal Pro",
      "og:type": "article",
      "og:url": canonicalUrl,
      "og:image:alt": image.alt,
      "twitter:site": "@CalcPortalPro",
      "twitter:creator": "@CalcPortalPro",
    },
    metadataBase: new URL(baseUrl),
  };
}

/**
 * ✅ Helper component to inject structured JSON-LD script in <head>
 * Use inside your blog page.
 */
export function BlogStructuredData({
  data,
}: {
  data: Record<string, any>;
}) {
  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


