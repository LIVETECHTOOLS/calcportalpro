import fs from "fs";
import path from "path";

export type BlogMeta = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  featuredImage: string;
  slug: string;
};

const blogDir = path.join(process.cwd(), "app", "blog");
const publicImagesDir = path.join(process.cwd(), "public", "images", "blog");

// ✅ Category keyword weights (higher = priority)
const keywordPriority: Record<string, string[]> = {
  Taxes: ["tax", "irs", "fpt", "gst"],
  Loans: ["loan", "credit", "debt"],
  Investing: ["invest", "etf", "portfolio"],
  "Real Estate": ["real-estate", "mortgage", "rent", "house"],
  Savings: ["save", "budget", "cd", "rate", "fund", "emergency"],
  Insurance: ["insurance"],
  Retirement: ["retire"],
  Education: ["gpa", "college", "study", "tuition", "scholarship"],
};

const categoryOrder = [
  "Taxes",
  "Loans",
  "Investing",
  "Real Estate",
  "Savings",
  "Insurance",
  "Retirement",
  "Education",
];

function detectCategory(title: string): string {
  const lowerTitle = title.toLowerCase();
  const matchedCategories: string[] = [];

  for (const [category, keywords] of Object.entries(keywordPriority)) {
    if (keywords.some((kw) => lowerTitle.includes(kw))) {
      matchedCategories.push(category);
    }
  }

  if (matchedCategories.length === 0) return "All";

  // Sort by priority in `categoryOrder`
  matchedCategories.sort(
    (a, b) =>
      categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );
  return matchedCategories[0];
}

function generateExcerpt(title: string): string {
  return `Read our expert guide on ${title.replace(/-/g, " ")} and improve your financial knowledge.`;
}

function detectFeatured(slug: string): boolean {
  const featuredFile = path.join(blogDir, slug, "featured.txt");
  const featuredImage = path.join(publicImagesDir, "featured.jpg");
  return fs.existsSync(featuredFile) || fs.existsSync(featuredImage);
}

export function getAllBlogPosts(): BlogMeta[] {
  const slugs = fs
    .readdirSync(blogDir)
    .filter((name) => fs.lstatSync(path.join(blogDir, name)).isDirectory());

  return slugs.map((slug) => {
    const metaFilePath = path.join(blogDir, slug, "meta.json");

    let meta: BlogMeta;

    if (fs.existsSync(metaFilePath)) {
      const raw = fs.readFileSync(metaFilePath, "utf-8");
      meta = JSON.parse(raw);
    } else {
      const title = slug.replace(/-/g, " ");
      const category = detectCategory(title);
      const excerpt = generateExcerpt(title);

      // 📅 Default to today's date
      const today = new Date().toISOString().split("T")[0];

      // 🖼️ Detect featured image
      const featuredImgPath = path.join(publicImagesDir, "featured.jpg");
      const normalImgPath = path.join(publicImagesDir, `${slug}.jpg`);

      const imageUrl = fs.existsSync(featuredImgPath)
        ? `/images/blog/featured.jpg`
        : fs.existsSync(normalImgPath)
        ? `/images/blog/${slug}.jpg`
        : `/images/blog/placeholder.jpg`;

      const isFeatured = detectFeatured(slug);

      meta = {
        title,
        excerpt,
        category,
        author: "CalcPortal Pro Team",
        readTime: "5 min",
        publishDate: today,
        featured: isFeatured,
        featuredImage: imageUrl,
        slug,
      };

      // ✍️ Save auto-generated meta.json
      fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2));
    }

    return meta;
  });
}
