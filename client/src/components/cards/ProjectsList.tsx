import React from "react";
import NavigateBack from "../navigationButtons/NavigationBack";
import Link from "next/link";

export default function ProjectsList({ initialData }: { initialData: any }) {
  const projects = initialData;
  console.log(projects);

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
              <h1 className="text-2xl font-bold">Projects</h1>
            </div>
            <div className="space-y-4">
              {projects.map((project: any) => (
                <ProjectItem project={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ project }: { project: any }) {
  const { title, slug, summary } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">{title || "Untitled Project"}</h3>
        {summary && <p className="text-gray-600 text-sm">{summary}</p>}
      </div>
    </Link>
  );
}
