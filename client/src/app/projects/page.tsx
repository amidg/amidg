import ProjectListWrapper from "@/components/wrappers/ProjectsListWrapper";
import { getProjects } from "@/lib/api";

export default async function page() {

  const projectsData = await getProjects();

  return (
    <ProjectListWrapper initialData={projectsData}  />
  );
}