import fs from "fs";
import path from "path";

// Advanced keyword-to-category mapping
const categoryKeywords: Record<string, string[]> = {
  taxes: ["tax", "irs", "gst", "fpt", "bracket", "fica"],
  loans: ["loan", "credit", "debt", "mortgage", "refinance", "heloc"],
  investing: ["invest", "etf", "portfolio", "stocks", "bonds", "investment"],
  savings: ["save", "budget", "cd", "rate", "emergency fund", "cash"],
  "real estate": ["real-estate", "rent", "house", "home", "property"],
  retirement: ["retire", "pension", "401k", "rrsp"],
  insurance: ["insurance", "coverage", "policy"],
  education: ["gpa", "college", "study", "student", "tuition"],
};

function detectCategory(title: string): string {
  const lowerTitle = title.toLowerCase();
  let matchedCategory: string | null = null;
  let maxMatches = 0;

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    const matches = keywords.filter((kw) => lowerTitle.includes(kw)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      matchedCategory = category;
    }
  }

  return matchedCategory || "All";
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

export type BlogMeta = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
  slug: string;
  image?: string;
  featured?: boolean;
};

export function getAllBlogPosts(): BlogMeta[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  const slugs = fs
    .readdirSync(blogDir)
    .filter((name) => fs.statSync(path.join(blogDir, name)).isDirectory());

  const posts: BlogMeta[] = slugs.map((slug, index) => {
    // Get the page.tsx content for read time estimation
    const filePath = path.join(blogDir, slug, "page.tsx");
    let content = "";
    try {
      content = fs.readFileSync(filePath, "utf-8");
    } catch {
      content = "";
    }

    // Title formatting (slug to title)
    const title = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const category = detectCategory(title);

    // Simple excerpt
    const excerpt =
      content
        .replace(/\n/g, " ")
        .replace(/<[^>]*>/g, "")
        .slice(0, 180) + "...";

    const readTime = estimateReadTime(content);

    return {
      id: index + 1,
      title,
      excerpt,
      category,
      author: "CalcPortal Pro Team",
      readTime,
      publishDate: new Date().toISOString(),
      slug,
      image: `/images/blog/${slug}.jpg`,
      featured: false,
    };
  });

  return posts;
}

export function getAllCategories(): string[] {
  const base = Object.keys(categoryKeywords);
  return ["All", ...base];
}
