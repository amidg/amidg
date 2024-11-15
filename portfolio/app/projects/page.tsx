"use client";

import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center mt-[8rem] md:mt-[12rem]">
      <ProjectsList
        title="Personal Projects"
        useSlice={false}
        displayAllProjects={false}
        backButton={true}
      />
    </div>
  );
}
