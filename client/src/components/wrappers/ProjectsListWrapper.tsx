"use client";
import { useState } from "react";
import ProjectsList from "../cards/ProjectsList";

export default function ProjectListWrapper({ initialData } : {initialData: any}) {
  // Use state to hold the server-fetched data
  const [projectsData] = useState(initialData);
  
  return <ProjectsList initialData={projectsData} />;
}