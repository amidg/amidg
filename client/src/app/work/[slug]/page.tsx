import NavigateBack from "@/components/navigationButtons/NavigationBack";
import { getWorkExperienceBySlug } from "@/lib/api";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const projectData = await getWorkExperienceBySlug(slug);

  const { companyTitle } = projectData;

  return (
    <div className="flex items-center justify-center w-full mt-[5rem]">
      <div className="w-full max-w-2xl space-y-4">
        <div className="flex-col mb-16">
          <NavigateBack />
          <h1 className="text-2xl font-bold">{companyTitle}</h1>
        </div>
      </div>
    </div>
  );
}
