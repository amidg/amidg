"use client";
import { BentoGridDemo } from "@/components/BentoGridDemo";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 scroll-mt-20 md:gap-8"
      id="projects-section"
    >
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-center justify-start 
        font-bold text-3xl
        mt-[3rem]
        text-violet-50
        md:items-start
        "
      >
        <div className="md:mb-[2rem]">
          <h1>Projects</h1>
        </div>
      </div>

      <BentoGridDemo />
    </div>
  );
};

export default Projects;
