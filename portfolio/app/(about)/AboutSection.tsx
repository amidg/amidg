"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();

  const handleClick = (destination: string) => {
    router.push(destination);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-second-light dark:bg-transparent">
      {/* Background grid overlay */}
      <div className="inset-0 z-0 w-full h-full grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-5 md:gap-2">
        {/* Generate squares using a loop */}
        {Array.from({ length: 200 }, (_, index) => (
          <div className="relative inset-0 flex items-center justify-center overflow-hidden rounded-lg p-2" key={index}>
            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-lg">
              <div className="noice2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="absolute z-10 w-full max-w-4xl flex flex-col items-center justify-center p-8 md:p-0 md:space-x-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <div className="space-y-10">
              <p className="text-xl font-sans leading-9">
                Since 2020, I&apos;ve been crafting UIs, specializing in
                creating component libraries, design systems, and front-end
                architecture. technologies and design led me to attend <br />{" "}
                <strong className="text-text">
                  Simon Fraser University (SFU)
                </strong>
                , where I earned <br /> my Bachelor&apos; Degree of Science with
                a major in Computer Science.
              </p>
              <p className="text-xl font-sans leading-9">
                As my first big project, I gathered a team of 3 developers and
                started to develop the full-stack application for the university
                experience. My experiments and projects eventually got me my
                first job out of university at{" "}
                <strong className="text-text">Tiggy</strong>.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-0 space-y-10 items-start justify-start md:flex-1 md:ml-2">
            <div>
              <p className="text-xl font-sans leading-9">
                There I have been working on a delivery app and nd received an
                incredible amount of skills and knowledge starting from setting
                up a component library to participating in extensive standup and
                code reviews. After Tiggy, I got into the web development agency{" "}
                <strong className="text-text">SEO Soul</strong>, where I
                developed a Chrome extension for company needs and delivered
                features to clients&apos; projects.
              </p>
            </div>
            <p className="text-xl font-sans leading-9">
              My experience spans working with startups on SaaS products, mobile
              apps, or e-commerce, as well as building products independently or
              alongside friends.
            </p>
          </div>
        </div>
        <div className="w-full max-w-4xl items-start justify-center mt-8">
          <Link href="/yevhenii_strilets_resume2023.pdf" target="blank">
            <button className="bg-[#262F45] rounded-md border border-solid border-[#7AA0F7] text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover w-full md:w-fit">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
