"use client";

import { useProjects } from "@/lib/hooks";

export default function ProjectList() {
  const { projects, isLoading, isError } = useProjects();
  
  console.log(projects)
  
  if (isLoading) {
    return <div className="w-full py-4">Loading projects...</div>;
  }
  
  if (isError) {
    return <div className="w-full py-4 text-red-600">Error loading projects!</div>;
  }
  
  if (!projects.length) {
    return <div className="w-full py-4">No projects found.</div>;
  }
  
  return (
    <div className="space-y-4 mt-4">
      {projects.map((project: any) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }: { project: any }) {
  // Direct access to project fields - no attributes nesting
  const {
    title,
    year,
    technologies,
  } = project;
  
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-medium">{title}</span>
          <span className="text-gray-500 ml-2">{year}</span>
        </div>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech: any) => (
              <span 
                key={tech} 
                className="text-xs text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}