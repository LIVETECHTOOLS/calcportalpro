import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/calculators/",
          "/blog/",
          "/about/",
          "/contact/",
          "/privacy/",
          "/terms/",
          "/disclaimer/",
          "/favicon.ico",
          "/favicon-16x16.png",
          "/favicon-32x32.png",
          "/apple-touch-icon.png",
          "/favicon.svg",
          "/manifest.json",
        ],
        disallow: [
          "/admin/",
          "/api/",
          "/_next/",
          "/private/",
          "/temp/",
        ],
      },
    ],
    sitemap: "https://calcportalpro.com/sitemap.xml",
    host: "https://calcportalpro.com",
  };
}
