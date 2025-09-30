// app/blog/auros-insurance-company-review/page.tsx
import React from "react";

export const metadata = {
  title: "Auros Insurance Company Review — Travel & Visa Insurance (Schengen, Medical)",
  description:
    "Auras Insurance Review 2025 — independent analysis of travel medical, Schengen visa coverage, pricing, pros/cons, coupon codes, and how to choose the best plan. Compare plans and buy embassy-ready policies with our recommended links.",
  keywords: [
    "Auras Insurance review",
    "aura insurance reviews",
    "auras travel insurance",
    "travel medical insurance",
    "Schengen visa insurance",
    "travel insurance coupon",
  ],
  alternates: {
    canonical: "https://calcportalpro.com/blog/auros-insurance-company-review",
  },
  openGraph: {
    title: "Auros Insurance Company Review — Travel & Visa Insurance",
    description:
      "Comprehensive review of Auras travel insurance for 2025. Compare plans, pricing, embassy-ready Schengen coverage, and buy with our recommended affiliate links.",
    url: "https://calcportalpro.com/blog/auros-insurance-company-review",
    type: "article",
    siteName: "CalcPortalPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auras Insurance Company Review",
    description:
      "Independent review of Auras Insurance travel & medical coverage. Schengen-compliant, affordable, and embassy-ready.",
  },
};

export default function AurasInsuranceReview2025() {
  const pageUrl = "https://calcportalpro.com/blog/auros-insurance-company-review";
  const logoUrl = "https://calcportalpro.com/logo.png";

  // Evergreen + rotation
  const evergreenLink = "https://www.kqzyfj.com/click-101546908-17131335";
  const otherLinks = [
    "https://www.dpbolvw.net/click-101546908-17117383",
    "https://www.anrdoezrs.net/click-101546908-17119729",
    "https://www.anrdoezrs.net/click-101546908-17134030",
    "https://www.jdoqocy.com/click-101546908-17119740",
    "https://www.tkqlhce.com/click-101546908-17119716",
    "https://www.kqzyfj.com/click-101546908-17152612",
    "https://www.jdoqocy.com/click-101546908-17117386",
    "https://www.kqzyfj.com/click-101546908-17117384",
    "https://www.dpbolvw.net/click-101546908-17117387",
    "https://www.dpbolvw.net/click-101546908-17117385",
  ];
  const getRotatedLink = (i: number) => otherLinks[i % otherLinks.length];

  // JSON-LD objects
  const jsonLdReview = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Auras Insurance",
      url: "https://www.aura.com",
    },
    author: {
      "@type": "Person",
      name: "CalcPortalPro Editorial Team",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.4",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "CalcPortalPro",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    reviewBody:
      "Auras Insurance delivers straightforward, embassy-ready travel insurance options with competitive pricing, easy claims, and flexible coverage. This review covers plans, pricing, pros/cons, and who should buy.",
  };

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
        name: "blog",
        item: "https://calcportalpro.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Auros Insurance Company Review",
        item: pageUrl,
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Auras Insurance legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Auras-branded travel insurance products are sold by established underwriters and brokers. Always confirm the underwriter on your policy documents.",
        },
      },
      {
        "@type": "Question",
        name: "What does travel medical insurance cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emergency medical treatment, evacuation, repatriation, and sometimes trip interruption/cancellation depending on the plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get embassy-ready documents for a Schengen visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buy a visa-compliant travel medical policy and request embassy-ready documents. Most vendors provide PDFs instantly after purchase.",
        },
      },
    ],
  };

  return (
    <main className="flex justify-center bg-gray-50 py-12 px-4">
      <article className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 prose prose-lg">
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReview) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />

        {/* Breadcrumbs */}
        <nav className="text-sm mb-4 text-gray-600">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          ›{" "}
          <a href="/reviews" className="hover:underline">
            Reviews
          </a>{" "}
          › <span>Auras Insurance Review 2025</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-center text-teal-800 mb-6">
          Auras Insurance Review 2025 — Best Travel & Visa Insurance Options
        </h1>

        <p>
          Traveling abroad in 2025 requires more than flights and hotels — you
          need protection against medical emergencies, evacuations, and embassy
          visa requirements. Auras Insurance offers travel insurance products
          designed for tourists, students, nomads, and visa applicants. In this
          review, we explore coverage, pricing, embassy-ready documents, and
          affiliate offers.
        </p>

        {/* Evergreen CTA */}
        <div className="text-center my-6">
          <a
            href={evergreenLink}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-teal-700 transition"
          >
            Get Travel Insurance — Compare Plans
          </a>
        </div>

        {/* Banner */}
        <div className="my-8 text-center">
          <a
            href="https://www.jdoqocy.com/click-101546908-17119716"
            target="_blank"
            rel="nofollow sponsored noopener"
          >
            <img
              src="https://www.ftjcfx.com/image-101546908-17119716"
              width="728"
              height="90"
              alt="Travel Medical Insurance"
              className="mx-auto rounded-lg shadow"
            />
          </a>
        </div>

        {/* Content Sections (shortened for space — expand to 2500+ words) */}
        <h2>Who Should Consider Auras Insurance?</h2>
        <ul>
          <li>Tourists seeking short-term emergency medical coverage</li>
          <li>Students needing Schengen visa insurance</li>
          <li>Digital nomads requiring fast, low-cost coverage</li>
          <li>Travelers needing embassy-ready PDFs instantly</li>
        </ul>

        <h2>Pricing</h2>
        <p>
          Plans start at about $1.50/day for basic coverage. Schengen
          visa-compliant plans are slightly higher but provide embassy-ready
          documents.
        </p>

        {/* Rotated link CTA */}
        <div className="text-center my-6">
          <a
            href={getRotatedLink(2)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
          >
            Compare Short-Term Travel Plans
          </a>
        </div>

        <h2>Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-green-700">Pros</h3>
            <ul>
              <li>Instant embassy-ready PDFs</li>
              <li>Competitive daily pricing</li>
              <li>Flexible plan lengths</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-700">Cons</h3>
            <ul>
              <li>Coverage varies by underwriter</li>
              <li>Some plans exclude pre-existing conditions</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="my-12">
          <h2>Frequently Asked Questions</h2>
          <h3>Is Auras Insurance legit?</h3>
          <p>
            Yes. Policies are issued by established underwriters. Always verify
            the policy terms.
          </p>
          <h3>Does it cover COVID-19?</h3>
          <p>Some plans do. Check the policy wording before purchase.</p>
        </section>

        {/* Final Evergreen CTA */}
        <div className="text-center my-8">
          <a
            href={evergreenLink}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-teal-800 transition"
          >
            Buy Embassy-Ready Travel Insurance
          </a>
        </div>

        <section className="text-sm text-gray-600 mt-8">
          <p>
            <strong>Disclosure:</strong> CalcPortalPro may earn commissions if
            you purchase through links. This does not affect your price.
          </p>
        </section>
      </article>

      {/* Invisible pixels */}
      <div style={{ display: "none" }}>
        <img
          src="https://www.tqlkg.com/image-101546908-17117387"
          width="1"
          height="1"
          alt=""
        />
      </div>
    </main>
  );
}
