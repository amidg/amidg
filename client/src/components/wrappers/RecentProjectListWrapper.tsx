"use client";
import { useState } from "react";
import RecentProjectList from "../cards/RecentProjectList";

export default function RecentProjectListWrapper({ initialData } : {initialData: any}) {
  // Use state to hold the server-fetched data
  const [projectsData] = useState(initialData);
  
  return <RecentProjectList initialData={projectsData} />;
}