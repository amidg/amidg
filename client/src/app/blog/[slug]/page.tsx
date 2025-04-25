import NavigateBack from "@/components/navigationButtons/NavigationBack";
import { getBlogPost } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = await getBlogPost(params.slug);

  const { title } = blogPostData;

  console.log(blogPostData);

  if (!blogPostData) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center w-full mt-[5rem]">
      <div className="w-full max-w-2xl space-y-4">
        <div className="flex-col mb-16">
          <NavigateBack />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
