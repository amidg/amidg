import BlogList from "../cards/BlogList";

export default function BlogSection() { 
  return (
    <div className="w-full">
      <h2 className="text-base font-bold mb-4 mt-16">Featured Blogs</h2>
      <BlogList />
    </div>
  );
}