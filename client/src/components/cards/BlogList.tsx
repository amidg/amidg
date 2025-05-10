// "use client";

// import Link from "next/link";

// export default function BlogList({ initialData }: { initialData: any }) {
//   const blogList = initialData
//   // Add debug logging

//   return (
//     <div className="space-y-4 mt-4">
//       {blogList.map((post: any) => (
//         <BlogItem key={post.id} post={post} />
//       ))}
//     </div>
//   );
// }

// function BlogItem({ post }: { post: any }) {
//   // Access properties directly on the post object, not through attributes
//   const { title, slug, summary, publishDate } = post;
  
//   return (
//     <div className="flex flex-col space-y-1">
//       <Link href={`/blog/${slug}`} className="group">
//         <h3 className="font-medium group-hover:text-blue-500 transition-colors">{title}</h3>
//       </Link>
//       {summary && (
//         <p className="text-sm text-gray-500">{summary}</p>
//       )}
//       {publishDate && (
//         <time className="text-xs text-gray-400">{new Date(publishDate).toLocaleDateString()}</time>
//       )}
//     </div>
//   );
// }

import React from "react";
import NavigateBack from "../navigationButtons/NavigationBack";
import Link from "next/link";

export default function BlogList({ initialData }: { initialData: any }) {
  const blogPosts = initialData;

  return (
    <div className="flex justify-center w-full mt-2 md:mt-[5rem] p-4 md:p-0">
      <div className="flex w-full max-w-[48rem]">
        <div className="w-12 hidden md:flex">
          <div className="flex items-start h-full pt-1">
            <NavigateBack />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Blog Posts</h1>
            </div>
            <div className="space-y-4">
              {blogPosts.map((post: any) => (
                <BlogItem post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogItem({ post }: { post: any }) {
  const { title, slug, summary } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">{title || "Untitled Project"}</h3>
        {summary && <p className="text-gray-600 text-sm">{summary}</p>}
      </div>
    </Link>
  );
}
