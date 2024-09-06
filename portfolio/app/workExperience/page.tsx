"use client";
import { TabsDemo } from "@/components/TabsDemo";

const WorkExperiencePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-center justify-center 
        mt-[3rem]
        text-violet-50
        md:items-start
        "
      >
        <div className="text-light-text dark:text-white">
          <h1>Work Experience</h1>
        </div>
        <TabsDemo />
      </div>
    </div>
  );
};

export default WorkExperiencePage;
