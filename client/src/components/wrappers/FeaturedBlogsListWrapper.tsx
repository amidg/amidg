// FeaturedBlogsListWrapper.tsx
"use client";
import { useState } from "react";
import FeaturedBlogsList from "../cards/FeaturedBlogsList";

export default function FeaturedBlogsListWrapper({ initialData } : {initialData: any}) {
  // Use state to hold the server-fetched data
  const [blogsData] = useState(initialData);
  
  return <FeaturedBlogsList initialData={blogsData} />;
}