import BlogListingClient from "@/components/blog/BlogListingClient";
import { getAllBlogPosts, getAllCategories } from "@/lib/blogMetadata";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogListingClient posts={posts} categories={categories} />;
}
