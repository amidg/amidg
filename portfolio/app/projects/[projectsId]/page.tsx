"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cardsByYear } from "@/data/project-data"; // Import your project data
import { Card } from "@/types/projectTypes"; // Import Card type
import NavigateBack from "@/components/navigationButtons/NavigateBack";

const ProjectSlug = () => {
  const { projectsId } = useParams(); // Get the dynamic id (title) from URL
  const [project, setProject] = useState<Card | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!projectsId) return; // If no id, return early

    // Decode the URL component to handle encoded characters
    const decodedTitle = decodeURIComponent(projectsId as string);

    // Find the project by title
    const foundProject = Object.values(cardsByYear)
      .flat()
      .find((card) => card.title === decodedTitle);

    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project is not found, redirect to 404 or handle the error
      router.push("/404");
    }
  }, [projectsId, router]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center w-full mt-[5rem]">
      <div className="w-full max-w-3xl space-y-4">
        <div className="flex-col mb-16">
          <NavigateBack />
          <h1 className="text-2xl font-bold">{project.title}</h1>
        </div>
        <p>{project.date}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectSlug;
