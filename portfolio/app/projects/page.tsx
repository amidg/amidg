"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    id: 1,
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    slug: "first-post",
  },
  {
    id: 2,
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    slug: "second-post",
  },
  {
    id: 3,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    slug: "third-post",
  },
  {
    id: 4,
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    slug: "fourth-post",
  },
  {
    id: 5,
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    slug: "fifth-post",
  },
];

const Projects = () => {
  const router = useRouter();

  const handleRedirect = (id: number) => {
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 scroll-mt-20 md:gap-8"
      id="projects-section"
    >
      <div className="flex flex-col w-full max-w-4xl items-center justify-start font-bold text-3xl mt-[3rem] text-violet-50 md:items-start">
        <div className="md:mb-[2rem]">
          <h1>Projects</h1>
        </div>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
            <BentoGridItem
              title={item.title}
              onClick={() => handleRedirect(item.id)} 
              key={item.id}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;