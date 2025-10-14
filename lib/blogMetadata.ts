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
  ogImage: string;
  slug: string;
};

// 📂 Directory paths
const blogDir = path.join(process.cwd(), "app", "blog");
const publicImagesDir = path.join(process.cwd(), "public", "images", "blog");

// 🧠 Keyword → Category mapping with priority
const keywordPriority: Record<string, string[]> = {
  Taxes: ["tax", "irs", "fpt", "gst", "fica"],
  Loans: ["loan", "credit", "debt", "refinance"],
  Investing: ["invest", "etf", "portfolio", "stock", "bond", "index fund"],
  "Real Estate": ["real-estate", "mortgage", "rent", "house", "heloc"],
  Savings: ["save", "budget", "cd", "rate", "fund", "emergency", "high-yield"],
  Insurance: ["insurance", "coverage"],
  Retirement: ["retire", "pension", "401k"],
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
  "All", // catch-all fallback
];

// ✨ Max featured
const MAX_FEATURED = 3;

// 📊 Average reading speed
const WORDS_PER_MIN = 200;

// 🧭 Detect category from title (multi-keyword logic with priority)
function detectCategory(title: string): string {
  const lowerTitle = title.toLowerCase();
  const matchedCategories: string[] = [];

  for (const [category, keywords] of Object.entries(keywordPriority)) {
    if (keywords.some((kw) => lowerTitle.includes(kw))) {
      matchedCategories.push(category);
    }
  }

  if (matchedCategories.length === 0) return "All";

  matchedCategories.sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );
  return matchedCategories[0];
}

// 📝 Generate auto excerpt if none
function generateExcerpt(title: string): string {
  return `Read our expert guide on ${title.replace(/-/g, " ")} to get key financial insights.`;
}

// 🏷️ Detect if featured.txt or featured.jpg exists
function detectFeatured(slug: string): boolean {
  const featuredTxt = path.join(blogDir, slug, "featured.txt");
  const featuredImg = path.join(publicImagesDir, "featured.jpg");
  return fs.existsSync(featuredTxt) || fs.existsSync(featuredImg);
}

// 🖼️ Detect cover image or fallback
function detectImage(slug: string): string {
  const featuredImgPath = path.join(publicImagesDir, "featured.jpg");
  const normalImgPath = path.join(publicImagesDir, `${slug}.jpg`);

  if (fs.existsSync(featuredImgPath)) {
    return `/images/blog/featured.jpg`;
  } else if (fs.existsSync(normalImgPath)) {
    return `/images/blog/${slug}.jpg`;
  } else {
    return `/images/blog/placeholder.jpg`;
  }
}

// 🌐 Detect OG image with fallback to og-image.jpg
function detectOGImage(slug: string): string {
  const normalImgPath = path.join(publicImagesDir, `${slug}.jpg`);
  if (fs.existsSync(normalImgPath)) {
    return `https://calcportalpro.com/images/blog/${slug}.jpg`;
  } else {
    return `https://calcportalpro.com/og-image.jpg`;
  }
}

// ⏳ Calculate read time based on page.tsx content
function calculateReadTime(slug: string): string {
  const pagePath = path.join(blogDir, slug, "page.tsx");

  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, "utf-8");
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MIN));
    return `${minutes} min`;
  }
  return "5 min";
}

export function getAllBlogPosts(): BlogMeta[] {
  const slugs = fs
    .readdirSync(blogDir)
    .filter((name) => fs.lstatSync(path.join(blogDir, name)).isDirectory());

  const posts = slugs.map((slug) => {
    const metaFilePath = path.join(blogDir, slug, "meta.json");
    let meta: BlogMeta;

    if (fs.existsSync(metaFilePath)) {
      const raw = fs.readFileSync(metaFilePath, "utf-8");
      meta = JSON.parse(raw);
    } else {
      const title = slug.replace(/-/g, " ");
      const category = detectCategory(title);
      const excerpt = generateExcerpt(title);
      const today = new Date().toISOString().split("T")[0];
      const featured = detectFeatured(slug);
      const featuredImage = detectImage(slug);
      const ogImage = detectOGImage(slug);
      const readTime = calculateReadTime(slug);

      meta = {
        title,
        excerpt,
        category,
        author: "CalcPortal Pro Team",
        readTime,
        publishDate: today,
        featured,
        featuredImage,
        ogImage,
        slug,
      };

      fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2));
    }

    return meta;
  });

  // 🪄 Featured sorting
  posts.sort((a, b) => Number(b.featured) - Number(a.featured));

  // ✂️ Limit featured count
  let featuredCount = 0;
  const limitedPosts = posts.map((post) => {
    if (post.featured && featuredCount < MAX_FEATURED) {
      featuredCount++;
      return post;
    }
    if (post.featured && featuredCount >= MAX_FEATURED) {
      return { ...post, featured: false };
    }
    return post;
  });

  return limitedPosts;
}
