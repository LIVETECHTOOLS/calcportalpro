import React, { Suspense } from "react";
import BlogListingClient, { BlogPost } from "@/components/blog/BlogListingClient";
import { getAllBlogPosts, getAllCategories, BlogMeta } from "@/lib/blogMetadata";
import { getBlogPostImage } from "@/lib/blogImageAssignment"; // ✅ new import

export default function BlogPage() {
  const blogMetas = getAllBlogPosts();
  const categories = getAllCategories();

  // ✅ Convert BlogMeta[] → BlogPost[]
  const posts: BlogPost[] = blogMetas.map((meta) => {
    const img = getBlogPostImage(meta.slug, "", meta.category, meta.title);

    return {
      id: meta.id,
      title: meta.title,
      excerpt: meta.excerpt,
      category: meta.category,
      author: meta.author,
      readTime: meta.readTime,
      publishDate: meta.publishDate,
      slug: meta.slug,
      image: img ? img.src : undefined, // ✅ Use image only if found
      featured: meta.featured,
    };
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogListingClient posts={posts} categories={categories} />
    </Suspense>
  );
}
