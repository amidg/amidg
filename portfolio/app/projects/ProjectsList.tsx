"use client";
import { useRouter } from "next/navigation";
import { ProjectsListProps } from "@/types/projectTypes";
import { cardsByYear } from "@/data/projectData";
import NavigateToOtherPage from "@/components/navigationButtons/NavigateToOtherPage";
import NavigateBack from "@/components/navigationButtons/NavigateBack";

export default function ProjectsList({
  title = "Recent Projects",
  useSlice = true,
  sliceAmount = 1,
  displayAllProjects = true,
  backButton = false
}: ProjectsListProps) {
  const router = useRouter();

  const handleRedirect = (title: string) => {
    // Encode title for URL
    const encodedTitle = encodeURIComponent(title);
    router.push(`/projects/${encodedTitle}`);
  };

  const projectEntries = Object.entries(cardsByYear).reverse();
  const displayedProjects = useSlice
    ? projectEntries.slice(0, sliceAmount)
    : projectEntries;

  return (
    <div className="w-full max-w-3xl space-y-4">
      <div className="flex justify-between mb-16">
        <div className="flex-col">
          {backButton ? <NavigateBack /> : ""}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {displayAllProjects ? (
          <div className="flex justify-center">
            <NavigateToOtherPage
              route="/projects"
              toolTipText="View all projects"
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {displayedProjects.map(([year, cards]) => (
        <div key={year} className="w-full max-w-3xl text-left space-y-3">
          <h2 className="text-lg font-bold my-8 ml-4">{year}</h2>
          <ul className="w-full max-w-3xl space-y-3">
            {cards.map((card: any, index: number) => (
              <div
                key={index}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-[#1d212a] transition ease-in-out duration-200 rounded-xl cursor-pointer"
                onClick={() => handleRedirect(card.title)}
              >
                <div className="flex gap-4 flex-col md:flex-row w-full space-x-6 items-start md:items-center">
                  <div className="min-w-[5rem] text-left text-sm">
                    <p>{card.date}</p>
                  </div>
                  <div className="flex-grow space-y-2 text-base">
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-left">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-left line-clamp-2 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
