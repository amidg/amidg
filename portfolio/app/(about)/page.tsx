"use client";
import LinkPreview from "@/components/LinkPreview";
import Projects from "../projects/page";
import WorkExperiencePage from "../workExperience/page";
import PageEducation from "../education/page";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col justify-center w-full max-w-4xl mt-[8rem] md:mt-[15rem] p-12 md:p-0 text-light-text dark:text-violet-50">
        <p className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose dark:text-text">
          Salut{" "}
          <span className="inline-block animate-wave -ml-1 mr-1 wave">👋🏻</span>{" "}
          I&apos;m Yev Strilets a web development enthusiast{" "}
          <span className="inline-block animate-levitate">🚀</span>
        </p>
        <p className="font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose">
          Crafting engaging web experiences.
        </p>
        <p className="font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose">
          Exploring development, UI/UX, and interactivity.
        </p>
        <div className="flex flex-row items-center justify-start">
          <span className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose mr-1">
            Get in touch via Email or see my work on
            <LinkPreview
              url="https://ui.aceternity.com"
              className="mx-1 font-medium text-xl"
            >
              Github
            </LinkPreview>
            or {" "}
          </span>
          <span className="group/blur blur-sm filter transition-all duration-500 ease-in-out focus-within:text-gray-400 focus-within:blur-none hover:text-gray-100 hover:blur-none focus:text-gray-300 focus:blur-none text-gray-400">
            <span className="font-medium text-2xl leading-relaxed md:text-xl md:leading-loose">
              {" "}
              find me on
              <LinkPreview
                url="https://ui.aceternity.com"
                className="font-medium text-xl"
              >
                {" "}
                platforms{" "}
              </LinkPreview>
              I don’t like using
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center max-w-4xl mb-[6rem] space-x-0 space-y-6 md:flex-row md:space-y-0 md:justify-start md:space-x-3">
      </div>
      <WorkExperiencePage />
      <Projects />
      <PageEducation />
    </main>
  );
};

export default About;
