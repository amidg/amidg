// FeaturedBlogsSection.tsx
import { getFeaturedBlogs } from "@/lib/api";
import NavigateToOtherPage from "../navigationButtons/NavigationToOtherPage";
import FeaturedBlogsListWrapper from "../wrappers/FeaturedBlogsListWrapper";

export default async function FeaturedBlogsSection() {
  // Fetch data on the server
  const blogsData = await getFeaturedBlogs();
  
  return (
    <div className="w-full mb-4 mt-16">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Featured Blogs</h2>
        <NavigateToOtherPage
          route="/blog"
          toolTipText="View all blogs"
        />
      </div>
      <FeaturedBlogsListWrapper initialData={blogsData?.data || []} />
    </div>
  );
}