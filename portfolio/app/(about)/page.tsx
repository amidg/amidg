"use client";
import LinkPreview from "@/components/LinkPreview";
import ProjectsList from "../projects/ProjectsList";
import PageEducation from "../timeline/page";
import ExperienceSection from "../experience/page";
import ConnectSection from "../connect/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowRightLong } from "react-icons/fa6";
import { websiteContent } from '@/data/portfolio-content';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2" id='#about-section'>
      <div className="flex flex-col justify-center w-full max-w-3xl mt-[5rem] p-12 md:p-0 text-light-text dark:text-violet-50">
        <div className="max-w-3xl w-full">
          <div className="flex flex-row space-x-6">
            <Avatar>
              <AvatarImage src={websiteContent.about.avatar.src} />
              <AvatarFallback>{websiteContent.about.avatar.fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">{websiteContent.about.title}</h2>
              <h2 className="text-[1rem] text-neutral-400">
                {websiteContent.about.subtitle}
              </h2>
            </div>
          </div>
          <div className="mt-16 max-w-2xl">
            <h1 className="text-base font-bold">{websiteContent.about.aboutTitle}</h1>
            <p>{websiteContent.about.description}</p>
          </div>
          <div className="mt-16 max-w-2xl space-y-4">
            <h1 className="text-base font-bold">{websiteContent.about.nowTitle}</h1>
            <ul className="space-y-8">
              {websiteContent.about.current.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <div>
                    <FaArrowRightLong className="h-5 w-5 text-text" />
                  </div>
                  <p className="text-sm">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center max-w-4xl mb-[6rem] space-x-0 space-y-6 md:flex-row md:space-y-0 md:justify-start md:space-x-3"></div>
      <ExperienceSection />
      <ProjectsList />
      <PageEducation />
      <ConnectSection />
    </div>
  );
};

export default About;