import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import AdUnit from "@/components/ads/AdUnit";
import { getBlogPostImage } from "@/lib/blogImageAssignment";

interface BlogPostTemplateProps {
  title: string;
  description: string;
  keywords: string;
  publishDate: string;
  readTime: string;
  author?: string;
  category?: string;
  children: React.ReactNode;
  calculatorLink?: string;
  calculatorText?: string;
  adSlots?: string[];
  slug?: string;
  featuredImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

/**
 * ✅ SEO-Perfect, Server-Side Blog Template
 * Includes both Article + BreadcrumbList JSON-LD
 */
export default function BlogPostTemplate({
  title,
  description,
  keywords,
  publishDate,
  readTime,
  author = "CalcPortal Pro Team",
  category = "Finance",
  children,
  calculatorLink,
  calculatorText,
  adSlots = [],
  slug,
  featuredImage,
}: BlogPostTemplateProps) {
  const categoryColors = {
    Taxes: "red",
    Loans: "blue",
    Investing: "green",
    "Real Estate": "purple",
    Savings: "indigo",
    Insurance: "orange",
    Retirement: "teal",
    Education: "pink",
    Finance: "gray",
  };

  const color = categoryColors[category as keyof typeof categoryColors] || "gray";
  const bgGradient = `from-${color}-50 via-white to-${color}-50`;
  const textColor = `text-${color}-600`;
  const hoverColor = `hover:text-${color}-800`;
  const tagBg = `bg-${color}-100`;
  const tagText = `text-${color}-800`;

  // Auto-select featured image if not provided
  const blogImage =
    featuredImage ||
    (slug ? getBlogPostImage(slug, keywords, category, title) : null);

  // ✅ Article Schema
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "CalcPortal Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://calcportalpro.com/favicon-32x32.png",
      },
    },
    datePublished: publishDate,
    image: blogImage
      ? `https://calcportalpro.com${blogImage.src}`
      : "https://calcportalpro.com/og-image.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://calcportalpro.com/blog/${slug || ""}`,
    },
  };

  // ✅ BreadcrumbList Schema
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://calcportalpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://calcportalpro.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://calcportalpro.com/blog/${slug || ""}`,
      },
    ],
  };

  const truncatedTitle = title.length > 70 ? `${title.slice(0, 67)}...` : title;

  return (
    <>
      <Head>
        <title>{truncatedTitle} | CalcPortal Pro</title>
        {slug && (
          <link rel="canonical" href={`https://calcportalpro.com/blog/${slug}`} />
        )}
      </Head>
      {/* Inject both JSON-LD scripts into head for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link
              href="/blog"
              className={`inline-flex items-center ${textColor} ${hoverColor} transition-colors mb-4`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {author}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm font-medium`}
              >
                {category}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Financial Planning
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Expert Guide
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            {/* Featured Image */}
            {blogImage && (
              <div className="my-8">
                <Image
                  src={blogImage.src}
                  alt={blogImage.alt}
                  width={blogImage.width || 1200}
                  height={blogImage.height || 630}
                  className="mx-auto rounded-lg shadow-lg object-cover w-full"
                  style={{ aspectRatio: "16/9" }}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
              </div>
            )}

            {adSlots.length > 0 && <AdUnit adSlot={adSlots[0]} />}

            {children}

            {calculatorLink && calculatorText && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center mt-8">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Ready to Calculate?
                </h3>
                <p className="text-primary-800 mb-4">{calculatorText}</p>
                <Link
                  href={calculatorLink}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Try Our Calculator
                </Link>
              </div>
            )}

            {adSlots.length > 1 && <AdUnit adSlot={adSlots[1]} />}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
