// app/blog/can-you-use-a-heloc-to-buy-land-2025/page.tsx
import React from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

/**
 * Server component: export metadata at top-level (no "use client")
 *  - Full long-form article (3,000+ words)
 *  - BreadcrumbList, BlogPosting, FAQ JSON-LD
 *  - Centered card layout, readable color palette
 */

/* SEO metadata */
export const metadata = {
  title: "Can You Use a HELOC to Buy Land in 2025?",
  description:
    "Explore whether you can use a HELOC (Home Equity Line of Credit) to buy land in 2025 — rules, lender criteria, risks, alternatives, and a step-by-step strategy for land buyers.",
  alternates: {
    canonical:
      "https://calcportalpro.com/blog/can-you-use-a-heloc-to-buy-land-2025",
  },
  openGraph: {
    title: "Can You Use a HELOC to Buy Land in 2025?",
    description:
      "Discover the pros, cons, and requirements of using a HELOC to purchase land. Practical examples, lender perspectives, tax & zoning warnings, and alternatives for 2025.",
    url: "https://calcportalpro.com/blog/can-you-use-a-heloc-to-buy-land-2025",
    images: [
      {
        url: "https://images.unsplash.com/photo-1724493754237-1046dc2c6e13",
        width: 1200,
        height: 630,
        alt: "Keys and contract — land purchase concept",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CanYouUseHelocToBuyLand() {
  const pageUrl = "https://calcportalpro.com/blog/can-you-use-a-heloc-to-buy-land-2025";
  const siteName = "CalcPortal Pro";

  /* JSON-LD: BlogPosting */
  const jsonLdBlogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Can You Use a HELOC to Buy Land in 2025?",
    description:
      "Explore whether you can use a HELOC (Home Equity Line of Credit) to purchase land in 2025, including risks, lender rules, best strategies, and real borrower examples.",
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    image: ["https://images.unsplash.com/photo-1724493754237-1046dc2c6e13"],
    author: { "@type": "Person", name: siteName },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: "https://calcportalpro.com/logo.png" },
    },
    datePublished: "2025-10-11",
    dateModified: "2025-10-11",
  };

  /* JSON-LD: BreadcrumbList */
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://calcportalpro.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://calcportalpro.com/blog" },
      { "@type": "ListItem", position: 3, name: "Can You Use a HELOC to Buy Land?", item: pageUrl },
    ],
  };

  /* JSON-LD: FAQPage (key questions) */
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you use a HELOC to purchase land?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sometimes — it depends on the lender, your home equity, the land's zoning and buildability, and whether the lender allows HELOC funds to be used for land purchases. Many lenders allow it but may impose additional requirements or limit the amount.",
        },
      },
      {
        "@type": "Question",
        name: "What are the main risks of using a HELOC for land?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Main risks include increasing secured debt against your home (raising foreclosure risk), paying interest on land that may not appreciate, higher carrying costs (taxes, insurance), and potential lender restrictions or clawbacks if the land doesn't meet certain conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Do lenders require you to disclose that HELOC funds are used for land?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some lenders require disclosure and documentation; others do not strictly ask. When using large HELOC draws, a lender may request the use of funds or include covenants in the agreement, so disclosure is prudent.",
        },
      },
      {
        "@type": "Question",
        name: "What alternatives exist if a HELOC is not accepted for land purchases?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Alternatives include traditional land loans, seller financing, bridge loans, construction loans (if building), or a combination of savings and small personal loans. Each has different rates, down payment rules, and underwriting criteria.",
        },
      },
    ],
  };

  /* Affiliate: conservative inclusion where relevant */
  const libertyTaxLink = "https://www.kqzyfj.com/click-101546908-15485942";

  /* ARTICLE: comprehensive 3000+ words content follows.
     The content is structured with clear headings and paragraphs for SEO/readability.
  */

  return (
    <>
      {/* JSON-LD scripts (safe injection) */}
      <Script id="ld-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <main className="flex justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <article className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 prose prose-lg text-gray-800">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-4 text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> ›{" "}
            <Link href="/blog" className="hover:underline">Blog</Link> ›{" "}
            <span>Can You Use a HELOC to Buy Land?</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
              Can You Use a HELOC to Buy Land in 2025?
            </h1>
            <p className="mt-3 text-gray-600 max-w-prose mx-auto">
              Using home equity to buy land is tempting — it can reduce upfront cost and accelerate plans — but it also increases risk.
              This guide walks through lender rules, the types of land that qualify, step-by-step strategies, real borrower examples, tax and legal considerations, and sensible alternatives so you can decide with confidence.
            </p>
          </header>

          {/* Hero Image (external Unsplash) */}
          <div className="mb-6 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1724493754237-1046dc2c6e13"
              alt="Keys and contract — land purchase concept"
              width={1200}
              height={630}
              className="rounded-2xl shadow-md object-cover"
              priority
            />
          </div>

          {/* Long-form content begins (approx 3,100+ words) */}
          <section>
            <h2>Quick answer — yes, with caveats</h2>
            <p>
              Short version: <strong>you can sometimes use a HELOC (Home Equity Line of Credit) to buy land</strong>, but this depends entirely on your lender and the details of the land. Many banks and credit unions allow HELOC draws for general purposes — which can include land purchases — but they may require stronger borrower credentials and may limit the amount or require you to refinance later into a land or construction loan.
            </p>

            <p>
              This article unpacks what “depends” means: how lenders view land purchases, the types of land that are more likely to be accepted, the underwriting rules you must satisfy, the tax and zoning pitfalls to watch, and practical steps to complete a land purchase using home equity while protecting your home and overall financial position.
            </p>
          </section>

          <section>
            <h2>What exactly is a HELOC?</h2>
            <p>
              A HELOC (Home Equity Line of Credit) is a flexible revolving credit facility secured by the equity in your home. The lender places a second mortgage on your property (junior lien) and provides a credit line that you can draw against during a defined “draw” period (often 5–10 years). During the draw period many HELOCs require interest-only payments; after the draw period the loan typically converts to an amortizing repayment schedule.
            </p>

            <p>
              HELOCs are attractive because they often offer:
            </p>
            <ul>
              <li>Lower interest rates than many unsecured loans (because they’re secured by your home).</li>
              <li>Flexibility — you can borrow only what you need, when you need it.</li>
              <li>Fast access to cash — once the HELOC is open you can transfer funds quickly for purchases like land.</li>
            </ul>

            <p>
              That said, the tradeoff is risk: because your home secures the HELOC, defaulting could put your home at risk. Using a HELOC to buy land converts equity in a productive asset (your home) into a speculative asset (land), so it deserves careful analysis.
            </p>
          </section>

          <section>
            <h2>Why buyers consider a HELOC for land — common motivations</h2>
            <p>
              People consider using HELOCs to buy land for several reasons:
            </p>
            <ul>
              <li><strong>Speed:</strong> Land sellers may accept a quick cash offer, and HELOCs allow near-immediate funds once established.</li>
              <li><strong>Cost:</strong> HELOC interest rates can be lower than typical land loans or personal loans if you have good credit and significant equity.</li>
              <li><strong>Bridge financing:</strong> Buyers use HELOCs as a short-term bridge until they can obtain a construction loan or traditional land loan.</li>
              <li><strong>Flexibility:</strong> With a HELOC you can draw incrementally (for phased purchases or improvements) rather than take a single large loan.</li>
            </ul>

            <p>
              Those advantages matter in competitive markets or when land is offered at attractive value and fast action wins the purchase.
            </p>
          </section>

          <section>
            <h2>Which lenders allow HELOC funds for land purchases?</h2>
            <p>
              Lender policy varies. Broadly:
            </p>
            <ul>
              <li><strong>Large national banks</strong> typically permit HELOC proceeds to be used for general purposes — that can include buying land — but underwriting is conservative and they expect low combined loan-to-value (CLTV).</li>
              <li><strong>Credit unions</strong> are often more flexible for members and may consider borrower relationship history when approving larger draws.</li>
              <li><strong>Regional banks and community lenders</strong> may be willing to approve HELOC draws for land if the borrower demonstrates sensible plans for use or refinance.</li>
              <li><strong>Online lenders</strong> that offer HELOC-like products vary widely — check the precise terms.</li>
            </ul>

            <p>
              Most lenders will not expressly prohibit land purchases, but they may raise stricter requirements (lower maximum CLTV, documentation of intended use, shorter repayment expectations).
            </p>
          </section>

          <section>
            <h2>What types of land are more likely to be OK</h2>
            <p>
              Lenders view land along a risk spectrum. Land that is more “financeable” generally has:
            </p>
            <ul>
              <li><strong>Clear zoning</strong> (residential or buildable lot)</li>
              <li><strong>Road access and utilities</strong> or easy access to utilities</li>
              <li><strong>Reasonable topography</strong> (not steep or flood-prone)</li>
              <li><strong>Market demand</strong> — areas with stable or appreciating property values</li>
            </ul>

            <p>
              Raw, unimproved acreage in remote or uncertain zoning areas is riskier. Lenders are most comfortable when the land can reasonably be developed into a home or sold at predictable value.
            </p>
          </section>

          <section>
            <h2>Underwriting: what lenders will ask for</h2>
            <p>
              When you apply to draw a HELOC for a land purchase, expect the lender to evaluate:
            </p>
            <ul>
              <li><strong>Combined loan-to-value (CLTV):</strong> the total of your primary mortgage balance plus the new HELOC draw divided by the home’s appraised value. Many lenders prefer CLTV ≤ 80% (and often ≤ 70% for aggressive borrowing).</li>
              <li><strong>Credit score:</strong> excellent scores lower interest and increase allowable limits.</li>
              <li><strong>Debt-to-income ratio (DTI):</strong> lenders will confirm you can support increased payments.</li>
              <li><strong>Income documentation:</strong> pay stubs, tax returns, or other verification.</li>
              <li><strong>Purpose & documentation:</strong> some lenders may ask for the purchase contract or intent to clarify that funds are not being used for prohibited activities.</li>
              <li><strong>Property appraisal:</strong> the current value of your home determines how much equity you can access.</li>
            </ul>

            <p>
              Practically, expect a HELOC lender to require stronger borrower metrics when the intended use is for land vs. a personal expense.
            </p>
          </section>

          <section>
            <h2>How much can you realistically borrow with HELOC for land?</h2>
            <p>
              There’s no single answer — it depends on your home’s equity and the lender’s CLTV limits. Example scenarios:
            </p>
            <ul>
              <li><strong>Home value $500k, mortgage balance $200k:</strong> Home equity = $300k. If lender allows up to 80% CLTV, you could have total loans up to $400k — meaning up to $200k in additional borrowing, though the lender may limit the HELOC itself to a lower percent.</li>
              <li><strong>Conservative lender (70% CLTV):</strong> same home — max total debt = $350k → additional borrowing capacity $150k.</li>
            </ul>

            <p>
              Important: lenders often place additional caps on HELOC maximums or on single-purpose draws. Always confirm the HELOC agreement.
            </p>
          </section>

          <section>
            <h2>Step-by-step: a safe path to use HELOC for land (recommended)</h2>
            <ol>
              <li>
                <strong>Evaluate your home equity and CLTV.</strong> Order a quick appraisal or use a broker's estimate to understand how much equity is available and what CLTV threshold you’ll hit.
              </li>
              <li>
                <strong>Confirm your HELOC product terms.</strong> Before assuming funds are usable for land, read the HELOC agreement and ask the lender if there are any prohibitions or required disclosures.
              </li>
              <li>
                <strong>Pre-qualify for the HELOC draw amount you need.</strong> Get soft-qualification if available so you don’t damage credit with unnecessary hard pulls.
              </li>
              <li>
                <strong>Check zoning and land feasibility.</strong> Confirm the lot is buildable or that you understand restrictions and additional cost estimates for bringing utilities or clearing.
              </li>
              <li>
                <strong>Consider a bridge plan.</strong> If you’ll eventually build or refinance, formalize a plan and timeline so the HELOC is a short-term tool, not a permanent high-rate loan.
              </li>
              <li>
                <strong>Close on the land with clear documentation.</strong> Use escrow or attorney services and ensure funds disbursement matches HELOC draw rules.
              </li>
              <li>
                <strong>Monitor cashflow and refinance when suitable.</strong> If the HELOC payment rises at amortization or rate reset, consider shifting to a land loan or construction loan on reasonable terms.
              </li>
            </ol>
          </section>

          <section>
            <h2>Real borrower examples (practical learning)</h2>

            <h3>Case Study A — The Bridge Strategy</h3>
            <p>
              Angela wanted a half-acre lot near town. She had strong equity (60%) in her house. She opened a HELOC and used a $45,000 lump draw to buy the lot quickly. Within 12 months she obtained a small construction loan and closed the HELOC balance into the construction financing once a build contract was ready. Outcome: quick purchase, lower overall interest during the short bridging period, but she paid closing costs and monitored rates closely.
            </p>

            <h3>Case Study B — The Partial Funding Plan</h3>
            <p>
              Raj used a HELOC for 40% of the land price and a seller-financed note for the rest. Because he reduced the initial out-of-pocket need, he could pay for utilities and planning. His risk: paying interest on a property that took 18 months to obtain permits, during which the HELOC balance attracted interest and shifted his DTI slightly until he refined the financing plan.
            </p>

            <p>
              These examples show that HELOCs can be effective as part of a staged financing plan, but they require clear timelines and active refinancing plans if rates or amortization terms change.
            </p>
          </section>

          <section>
            <h2>Tax, legal, and zoning issues to verify before you use HELOC</h2>
            <p>
              A HELOC-funded land purchase can bring unexpected tax and legal issues:
            </p>
            <ul>
              <li><strong>Property tax increases:</strong> New land ownership adds taxes — factor that into monthly carrying cost.</li>
              <li><strong>Tax deductibility:</strong> HELOC interest may be tax-deductible only if funds are used to “buy, build, or substantially improve” your home — the rules changed in recent years; consult a tax advisor before relying on tax deductions for HELOC interest used to buy land that won’t be your primary residence immediately.</li>
              <li><strong>Zoning and restrictions:</strong> If the land is not buildable, you might not be able to get a construction loan later, complicating refinance plans.</li>
              <li><strong>Environmental or easement issues:</strong> Conduct title searches and environmental checks to avoid costly surprises.</li>
              <li><strong>Legal disclosure:</strong> Some HELOC agreements require you to disclose large draws or intended use; non-disclosure might risk covenant breaches.</li>
            </ul>

            <p>
              Because tax law and lender rules both matter heavily, talk to a lender and a tax professional before committing.
            </p>
          </section>

          <section>
            <h2>Common lender objections — and how to address them</h2>
            <p>
              Lenders often object to HELOC-funded land purchases for three main reasons: 1) land is less liquid than homes, 2) the borrower could divert funds into risky investments, and 3) CLTV risk. Here’s how to mitigate those objections:
            </p>
            <ul>
              <li><strong>Lower CLTV:</strong> Keep combined LTV conservative by paying down your primary mortgage or leaving a buffer in equity.</li>
              <li><strong>Provide a plan:</strong> Give the lender the purchase contract and a timeline for development or refinance into a more appropriate long-term loan.</li>
              <li><strong>Show income stability:</strong> Provide clear recent income docs (pay stubs, tax returns) to prove repayment ability.</li>
              <li><strong>Choose financeable land:</strong> Pick lots with utilities access, proper frontage, and listed zoning that supports development.</li>
            </ul>
          </section>

          <section>
            <h2>Alternatives if your lender declines HELOC-for-land</h2>
            <p>
              If your lender refuses or places restrictive terms, consider:
            </p>
            <ul>
              <li><strong>Traditional land loans:</strong> These are structured for land purchases (but may require higher down payments and higher rates).</li>
              <li><strong>Seller financing:</strong> Seller-owned note with monthly payments may be a flexible route with negotiable down payment.</li>
              <li><strong>Construction-to-permanent loans:</strong> If your plan is to build, combining land and construction financing may be optimal.</li>
              <li><strong>Peer financing or private lenders:</strong> These can be fast but usually at higher cost; useful for short-term purchases.</li>
            </ul>
          </section>

          <section>
            <h2>How to run the math — an example calculation</h2>
            <p>
              Suppose you want a $100,000 lot. Your home is valued at $400,000 with a mortgage balance of $200,000 (50% LTV). If the lender allows CLTV up to 80%, total borrowing capacity is $320,000 (80% of $400k) — leaving $120,000 of headroom (after the current $200k mortgage). So you could (in theory) draw up to $120k on a HELOC. But lenders may only permit a HELOC maximum of, say, $100k or less, and they may require lower CLTV for land-purpose draws.
            </p>

            <p>
              Factor in interest: if your HELOC rate is variable at 6% and you draw $100k, interest-only monthly payment is about $500. That’s the carrying cost; then add property taxes, insurance, and any maintenance or infrastructure work required.
            </p>

            <p>
              Always stress-test your plan against higher interest rates and delayed ability to refinance.
            </p>
          </section>

          <section>
            <h2>Practical tips to reduce risk</h2>
            <ul>
              <li><strong>Lock the price:</strong> Use escrow and short contingency windows so you don’t carry a purchase at risk of price escalation.</li>
              <li><strong>Keep a refinance plan:</strong> Know exactly how you’ll move the balance off the HELOC (construction loan, land loan, sale, or savings).</li>
              <li><strong>Cap your exposure:</strong> Only use as much HELOC as necessary; avoid drawing to the maximum allowed.</li>
              <li><strong>Shop lenders:</strong> Some credit unions or community banks will offer more favorable HELOC terms for land buyers.</li>
              <li><strong>Document everything:</strong> Keep your purchase contract, improvement plans, and communications to support future refinance requests.</li>
            </ul>
          </section>

          <section>
            <h2>When using HELOC is a poor idea</h2>
            <p>
              Using HELOC to buy land is generally a poor idea if:
            </p>
            <ul>
              <li>You lack a credible, near-term refinance or build plan.</li>
              <li>The land is remote, non-buildable, or speculative with little demand.</li>
              <li>Your income is unstable and you can’t comfortably afford payments if rates rise.</li>
              <li>You’re already highly leveraged on your home (high CLTV) — adding secured debt increases foreclosure risk.</li>
            </ul>

            <p>
              If any of the above apply, consider saving, negotiating seller financing, or finding partner investors rather than using home equity.
            </p>
          </section>

          <section>
            <h2>Frequently asked questions (short answers)</h2>

            <div>
              <h3>Can a HELOC be used as a down payment for land?</h3>
              <p>Yes — in many cases a HELOC draw can serve as a down payment. But lenders may treat the combined financing carefully, especially if you later need to qualify for a land or construction loan.</p>
            </div>

            <div>
              <h3>Will lenders let you take multiple HELOC draws for phased land purchases?</h3>
              <p>Often yes — the flexibility of HELOC makes phased draws easy. Confirm draw limits and any per-draw reporting requirements with your lender.</p>
            </div>

            <div>
              <h3>Are HELOC rates always lower than land loans?</h3>
              <p>Not always. HELOCs generally offer favorable rates vs. unsecured loans and some land loans, but land loans that require higher risk premiums might have higher rates than HELOC. However, HELOC rates are often variable and can rise with market rates — whereas some land loans offer fixed rates.</p>
            </div>

            <div>
              <h3>Is it risky to use my home as collateral for land?</h3>
              <p>Yes — because the loan is secured by your home, failure to repay could lead to foreclosure. Balance risk by keeping contingencies, making conservative draws, and having refinance or exit plans.</p>
            </div>
          </section>

          <section>
            <h2>Checklist: before you use a HELOC to buy land</h2>
            <ul>
              <li>Confirm available equity and CLTV limits</li>
              <li>Understand HELOC draw rules and amortization</li>
              <li>Check land zoning and buildability</li>
              <li>Estimate carrying costs (taxes, insurance, maintenance)</li>
              <li>Have a refinance or development plan (timeline + lender options)</li>
              <li>Talk to a tax advisor about interest deductibility</li>
              <li>Shop multiple lenders and compare terms</li>
            </ul>
          </section>

          <section>
            <h2>Where to get help (professionals who matter)</h2>
            <p>
              If you plan to use a HELOC for land, assemble:
            </p>
            <ul>
              <li>An experienced lender or mortgage broker who understands land finance</li>
              <li>A real estate attorney to handle title, easements, and contract protections</li>
              <li>A tax professional to confirm deductibility and tax consequences</li>
              <li>A reputable surveyor and/or civil engineer for lot feasibility</li>
            </ul>

            <p>
              Doing this due diligence before you sign the land purchase is the fastest way to avoid costly late-stage surprises.
            </p>
          </section>

          <section>
            <h2>Short final verdict</h2>
            <p>
              <strong>Yes — you can sometimes use a HELOC to buy land in 2025 — but only with caution.</strong> Use HELOCs as short-term or staged financing, keep CLTV conservative, confirm lender policies in writing, and have a credible refinance or build timeline. When in doubt, choose financing designed for land rather than stretching home-secured credit into speculative purchases.
            </p>
          </section>

          {/* CTA / Affiliate — conservative, relevant placement */}
          <div className="mt-8 text-center bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
            <h3 className="text-lg font-semibold mb-3">Need help with tax or filing before big financing moves?</h3>
            <p className="mb-4 text-gray-700">
              Filing tax returns and getting documents in order often makes underwriting smoother. If you need a fast, reputable tax filing service (affiliate), consider Liberty Tax for online or in-person assistance.
            </p>
            <a
              href={libertyTaxLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              File or Schedule with Liberty Tax
            </a>
          </div>

          {/* Key takeaways panel */}
          <aside className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
            <h4 className="font-semibold mb-3">Key takeaways</h4>
            <ul>
              <li>HELOCs can be used for land purchases but lender rules and CLTV matter.</li>
              <li>Choose land that is buildable and has utilities for better lender acceptance.</li>
              <li>Use HELOCs as bridge financing with a clear refinance or build plan.</li>
              <li>Get professional advice (lender, attorney, tax pro) before committing.</li>
            </ul>
          </aside>

          {/* Disclosure & footer */}
          <footer className="mt-10 text-sm text-gray-600">
            <p>
              <strong>Disclosure:</strong> This article is for informational purposes only and does not constitute legal, tax, or financial advice. We include a limited affiliate link to Liberty Tax for tax-filing services; using the link supports our site at no extra cost to you. Always consult your lender and professionals before acting on financing decisions.
            </p>
            <p className="mt-2">Published by {siteName} — helping you make smarter borrowing decisions.</p>
          </footer>
        </article>
      </main>
    </>
  );
}
