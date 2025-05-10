// FeaturedBlogsList.tsx
"use client";
import Link from "next/link";

export default function FeaturedBlogsList({ initialData }: {initialData: any}) {
  // Use the data passed from the server
  const featuredBlogs = initialData;

  return (
    <div className="space-y-8 mt-4">
      {featuredBlogs.length === 0 ? (
        <div>No featured blogs found</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog: any) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

function BlogItem({ blog }: { blog: any }) {
  const { title, slug, summary } = blog;

  return (
    <Link href={`/blog/${slug}`} className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">{title || "Untitled Blog"}</h3>
        {summary && (
          <p className="text-gray-600 text-sm">
            {summary.length > 120 ? `${summary.substring(0, 120)}...` : summary}
          </p>
        )}
        <div className="text-blue-600 text-sm">Read more</div>
      </div>
    </Link>
  );
}