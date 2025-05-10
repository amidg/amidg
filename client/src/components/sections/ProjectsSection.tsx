
import NavigateToOtherPage from "../navigationButtons/NavigationToOtherPage";
import { getRecentProjects } from "@/lib/api";
import RecentProjectListWrapper from "../wrappers/RecentProjectListWrapper";


export default async function ProjectsSection() {
  // Fetch data on the server
  const projectsData = await getRecentProjects();
  
  return (
    <div className="w-full mb-4 mt-16">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <NavigateToOtherPage
          route="/projects"
          toolTipText="View all projects"
        />
      </div>
      <RecentProjectListWrapper initialData={projectsData?.data || {}} />
    </div>
  );
}