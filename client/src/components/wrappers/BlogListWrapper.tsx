"use client";
import { useState } from "react";
import BlogList from "../cards/BlogList";


export default function BlogListWrapper({ initialData } : {initialData: any}) {

  const [blogData] = useState(initialData);
  
  return <BlogList initialData={blogData} />;
}