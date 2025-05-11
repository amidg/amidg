import NavigateBack from "@/components/navigationButtons/NavigationBack";
import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = await getProjectBySlug(slug);

  if (!projectData) {
    notFound();
  }

  return (
    <div className="mt-[5rem] flex justify-center w-full">
      <div className="flex w-full max-w-[48rem]">
        <div className="w-12 flex-shrink-0">
          <div className="flex items-center h-full pt-1">
            <NavigateBack />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-col">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">{projectData.title}</h1>
            </div>
            {/* Add other project content here */}
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
