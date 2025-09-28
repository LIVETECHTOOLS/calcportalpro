import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getLastModified } from "@/lib/getLastModified";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calcportalpro.com";

  // Static pages
  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/about", priority: 0.7, changefreq: "weekly" },
    { url: "/contact", priority: 0.7, changefreq: "weekly" },
    { url: "/privacy", priority: 0.3, changefreq: "yearly" },
    { url: "/terms", priority: 0.3, changefreq: "yearly" },
    { url: "/disclaimer", priority: 0.3, changefreq: "yearly" },
  ];

  // Blog pages -> read folders inside /app/blog
  const blogDir = path.join(process.cwd(), "app/blog");
  let blogPages: { url: string; priority: number; changefreq: "monthly" }[] = [];

  if (fs.existsSync(blogDir)) {
    const blogSlugs = fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    blogPages = blogSlugs.map((slug) => ({
      url: `/blog/${slug}`,
      priority: 0.8,
      changefreq: "monthly",
    }));
  }

  // Calculator pages -> read folders inside /app/calculators
  const calcDir = path.join(process.cwd(), "app/calculators");
  let calculatorPages: { url: string; priority: number; changefreq: "weekly" }[] = [];

  if (fs.existsSync(calcDir)) {
    const calcSlugs = fs
      .readdirSync(calcDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    calculatorPages = calcSlugs.map((slug) => ({
      url: `/calculators/${slug}`,
      priority: 0.9,
      changefreq: "weekly",
    }));
  }

  // Combine all
  const pages = [...staticPages, ...blogPages, ...calculatorPages];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: getLastModified(page.url),
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}
