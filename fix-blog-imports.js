import fs from "fs";
import path from "path";

const blogRoot = path.join(process.cwd(), "app", "blog");
const importLine = `import BlogPostTemplate from "@/components/blog/BlogPostTemplate";`;

function fixBlogImports() {
  if (!fs.existsSync(blogRoot)) {
    console.error("❌ Blog folder not found:", blogRoot);
    return;
  }

  const posts = fs
    .readdirSync(blogRoot)
    .filter((dir) =>
      fs.existsSync(path.join(blogRoot, dir, "page.tsx"))
    );

  console.log(`📘 Found ${posts.length} blog posts to check...\n`);

  for (const slug of posts) {
    const pagePath = path.join(blogRoot, slug, "page.tsx");
    let content = fs.readFileSync(pagePath, "utf-8");

    if (content.includes(importLine)) {
      console.log(`✅ ${slug}: Already has BlogPostTemplate import.`);
      continue;
    }

    if (content.match(/import\s+.*BlogPostTemplate.*from/)) {
      console.log(`✅ ${slug}: BlogPostTemplate already imported (custom).`);
      continue;
    }

    const firstImportIndex = content.indexOf("import ");
    if (firstImportIndex === -1) {
      console.warn(`⚠️ ${slug}: No imports found — skipping.`);
      continue;
    }

    fs.copyFileSync(pagePath, pagePath + ".bak");

    const before = content.slice(0, firstImportIndex);
    const after = content.slice(firstImportIndex);

    const updated = `${before}${importLine}\n${after}`;

    fs.writeFileSync(pagePath, updated, "utf-8");
    console.log(`✨ Fixed: ${slug}/page.tsx`);
  }

  console.log("\n🎉 All done! Try running `npm run build` again.");
}

fixBlogImports();
