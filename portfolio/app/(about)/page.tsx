"use client";
import LinkPreview from "@/components/LinkPreview";
import ProjectsList from "../projects/ProjectsList";
import { PageEducation } from "../timeline/page";
import ExperienceSection from "../experience/page";
import ConnectSection from "../connect/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col justify-center w-full max-w-3xl mt-[8rem] p-12 md:p-0 text-light-text dark:text-violet-50">
        <div className="max-w-3xl w-full">
          <div className="flex flex-row space-x-6">
            <Avatar>
              <AvatarImage src="/DmitriiAvatar.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold">Dmitrii Gusev</h2>
              <h2 className="text-[1rem] text-neutral-400">
                Robotics Engineer && Open-source fanatic!
              </h2>
            </div>
          </div>
          <div className="mt-16 max-w-2xl">
            <h1 className="text-base font-bold">About me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mt-16 max-w-2xl space-y-4">
            <h1 className="text-base font-bold">Now</h1>
            <ul className="space-y-8">
              <li className="flex items-center space-x-4">
                <div>
                  <FaArrowRightLong className="h-5 w-5 text-text" />
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li className="flex items-center space-x-4">
              <div>
                  <FaArrowRightLong className="h-5 w-5 text-text" />
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li className="flex items-center space-x-4">
              <div>
                  <FaArrowRightLong className="h-5 w-5 text-text" />
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center max-w-4xl mb-[6rem] space-x-0 space-y-6 md:flex-row md:space-y-0 md:justify-start md:space-x-3"></div>
      <ExperienceSection />
      <ProjectsList />
      <PageEducation />
      <ConnectSection />
    </main>
  );
};

export default About;
