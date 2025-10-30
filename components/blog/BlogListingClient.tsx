"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export type BlogPost = {
  id: string; // Changed from number to string to match BlogMeta
  title: string;
  excerpt: string;
  category?: string; // ✅ made optional
  author: string;
  readTime: string;
  publishDate: string;
  slug: string;
  image?: string;
  featured?: boolean;
};

type Props = {
  posts: BlogPost[];
  categories: string[];
};

export default function BlogListingClient({ posts, categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const categoryFromQuery = searchParams.get("category");
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    } else if (!categoryFromQuery) {
      setSelectedCategory("All");
    }
  }, [searchParams, categories]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featured = useMemo(
    () => filteredPosts.filter((p) => p.featured),
    [filteredPosts]
  );

  return (
    <div className="container-max py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
          Financial Education Blog
        </h1>
        <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
          Expert insights, tips, and guides to help you make smarter financial
          decisions. From budgeting basics to advanced investment strategies,
          we've got you covered.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleSelectCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-primary-500 text-white"
                : "bg-white text-secondary-500 hover:bg-primary-50 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featured.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/images/blog/placeholder.jpg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ aspectRatio: '16/9' }}
                    priority={index < 6}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-secondary-100 mb-3">
                    <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category || "Uncategorized"}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-500 mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-secondary-100 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-secondary-100">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-500 mb-6">
          All Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => {
            return (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
              <div className="relative h-40 w-full">
                <Image
                  src={post.image || "/images/blog/placeholder.jpg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ aspectRatio: '16/9' }}
                  priority={index < 6}
                  onError={(e) => {
                    e.currentTarget.src = "/images/blog/placeholder.jpg";
                  }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-2 text-sm text-secondary-100 mb-2">
                  <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category || "Uncategorized"}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-secondary-500 mb-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-secondary-100 mb-3 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3 text-secondary-100">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
