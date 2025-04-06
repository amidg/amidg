"use client";

import { useBlog } from "@/lib/hooks";
import Link from "next/link";

export default function BlogList() {
  const { blog, isLoading, isError } = useBlog();

  // Add debug logging
  console.log("Blog data:", blog);
  
  if (isLoading) {
    return <div className="w-full py-4">Loading blog posts...</div>;
  }
  
  if (isError) {
    return <div className="w-full py-4 text-red-600">Error loading blog posts!</div>;
  }
  
  if (!blog.length) {
    return <div className="w-full py-4">No blog posts found.</div>;
  }
  
  return (
    <div className="space-y-4 mt-4">
      {blog.map((post: any) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogItem({ post }: { post: any }) {
  // Access properties directly on the post object, not through attributes
  const { title, slug, summary, publishDate } = post;
  
  return (
    <div className="flex flex-col space-y-1">
      <Link href={`/blog/${slug}`} className="group">
        <h3 className="font-medium group-hover:text-blue-500 transition-colors">{title}</h3>
      </Link>
      {summary && (
        <p className="text-sm text-gray-500">{summary}</p>
      )}
      {publishDate && (
        <time className="text-xs text-gray-400">{new Date(publishDate).toLocaleDateString()}</time>
      )}
    </div>
  );
}