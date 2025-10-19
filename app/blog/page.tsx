import BlogListingClient, { BlogPost } from "@/components/blog/BlogListingClient";
import { getAllBlogPosts, getAllCategories, BlogMeta } from "@/lib/blogMetadata";

export default function BlogPage() {
  const blogMetas = getAllBlogPosts();
  const categories = getAllCategories();

  // Convert BlogMeta[] to BlogPost[]
  const posts: BlogPost[] = blogMetas.map(meta => ({
    id: meta.id,
    title: meta.title,
    excerpt: meta.excerpt,
    category: meta.category,
    author: meta.author,
    readTime: meta.readTime,
    publishDate: meta.publishDate,
    slug: meta.slug,
    image: meta.image,
    featured: meta.featured
  }));

  return <BlogListingClient posts={posts} categories={categories} />;
}
