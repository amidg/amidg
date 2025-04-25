"use client";
import Link from "next/link";
import { useMemo } from "react";

export default function RecentProjectList({ initialData }: {initialData: any}) {
  // Use the data passed from the server
  const recentProjects = initialData;
  
  // Group and sort projects by year
  const yearGroups = useMemo(() => {
    if (!recentProjects) return [];
    
    // Find year keys (like 2024, 2025)
    return Object.entries(recentProjects)
      .filter(([key]) => {
        const numKey = Number(key);
        return numKey;
      })
      .map(([year, projects]) => ({
        year: Number(year),
        projects: Array.isArray(projects) ? projects : []
      }))
      .sort((a, b) => b.year - a.year); // Sort years descending
  }, [recentProjects]);

  return (
    <div className="space-y-8 mt-4">
      {yearGroups.length === 0 ? (
        <div>No projects found</div>
      ) : (
        yearGroups.map(({ year, projects }) => (
          <div key={year} className="space-y-4">
            <h2 className="text-xl font-bold">{year}</h2>
            <div className="space-y-3">
              {projects.length > 0 ? (
                projects.map((project: any, index: number) => (
                  <ProjectItem key={project.documentId || index} project={project} />
                ))
              ) : (
                <div>No projects for this year</div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function ProjectItem({ project }: { project: any }) {
  const { title, slug, summary } = project;

  return (
    <Link href={`/projects/${slug}`} className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-medium">{title || "Untitled Project"}</h3>
        {summary && <p className="text-gray-600 text-sm">{summary}</p>}
      </div>
    </Link>
  );
}