import BlogListWrapper from "@/components/wrappers/BlogListWrapper";
import { getBlogPosts } from "@/lib/api";

export default async function BlogListingPage() {
  const blogData = await getBlogPosts();

  return <BlogListWrapper initialData={blogData} />;
}
