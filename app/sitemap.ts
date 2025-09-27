import { MetadataRoute } from "next";
import { getLastModified } from "@/lib/getLastModified";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calcportalpro.com";

  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/about", priority: 0.7, changefreq: "weekly" },
    { url: "/contact", priority: 0.7, changefreq: "weekly" },
    { url: "/privacy", priority: 0.3, changefreq: "yearly" },
    { url: "/terms", priority: 0.3, changefreq: "yearly" },
    { url: "/disclaimer", priority: 0.3, changefreq: "yearly" },
  ];

  const calculatorPages = [
    { url: "/calculators/loan-calculator", priority: 0.9, changefreq: "weekly" },
    { url: "/calculators/mortgage-calculator", priority: 0.9, changefreq: "weekly" },
    { url: "/calculators/investment-calculator", priority: 0.9, changefreq: "weekly" },
    { url: "/calculators/retirement-calculator", priority: 0.9, changefreq: "weekly" },
  ];

  const blogDir = path.join(process.cwd(), "components/blog");
  let blogPages: { url: string; priority: number; changefreq: "daily" | "weekly" | "monthly" | "yearly" }[] = [];

  try {
    const collectPosts = (dir: string, prefix = ""): string[] => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      return entries.flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);
        const slug = prefix ? `${prefix}/${entry.name}` : entry.name;

        if (entry.isDirectory()) {
          return collectPosts(fullPath, slug);
        }
        return [];
      });
    };

    const posts = collectPosts(blogDir);
    blogPages = posts.map((slug) => ({
      url: `/blog/${slug}`,
      priority: 0.8,
      changefreq: "monthly",
    }));
  } catch (err) {
    console.warn("⚠️ Could not read blog directory:", err);
  }

  const pages = [...staticPages, ...calculatorPages, ...blogPages];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: getLastModified(page.url),
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}
