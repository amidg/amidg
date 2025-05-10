import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import NavigateBack from "@/components/navigationButtons/NavigationBack";
import { getBlogPost } from "@/lib/api";
import { notFound } from "next/navigation";

export const revalidate = 10;

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {

  const blogPostData = await getBlogPost(params.slug);

  const content: BlocksContent = blogPostData.content;

  if (!blogPostData) {
    notFound();
  }

  return (
    <div className="mt-[5rem] flex justify-center w-full">
      <div className="flex w-full max-w-[48rem]">
        <div className="w-12 flex-shrink-0">
          <div className="fixed items-center h-full pt-1">
            <NavigateBack />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-col">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">{blogPostData.title}</h1>
            </div>
            {/* <BlocksRenderer content={content} /> */}
          </div>
        </div>

        {/* Right column */}
        <div className="w-12 flex-shrink-0">
          {/* Content for right sidebar */}
        </div>
      </div>
    </div>
  );
}
