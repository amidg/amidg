"use client";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselIndicatorScroll,
  CarouselItem,
} from "@/components/ui/carousel";
import { workExperienceEntries } from "@/data/work-experience";
import { FaLocationDot } from "react-icons/fa6";
import Particles from "@/components/animation/Particles";
import NavigateToOtherPage from "@/components/navigationButtons/NavigateToOtherPage";
import InfoButton from "@/components/navigationButtons/infoButton";
import { websiteContent } from '@/data/portfolio-content';

export default function ExperienceSection() {
  const router = useRouter();

  const handleRedirect = (title: string) => {
    const encodedTitle = encodeURIComponent(title);
    router.push(`/experience/${encodedTitle}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 relative mb-2">
      <div
        className="
      flex flex-col 
      w-full max-w-3xl
      items-center justify-center 
      mt-[3rem]
      text-violet-50
      md:items-start
      "
      >
        <div className="text-light-text dark:text-white mb-16">
          <h2 className="text-xl font-bold">{websiteContent.workExperience.title}</h2>
        </div>
        <Carousel className="w-full max-w-3xl mb-20">
          <CarouselContent>
            {workExperienceEntries.map(([companyTitle, companyInfo], index) => (
              <CarouselItem key={index}>
                <div className="p-2 w-full">
                  {companyInfo.map((info: any, index: number) => (
                    <div
                      className="flex flex-row justify-between h-[25rem]"
                      key={index}
                    >
                      <div className="flex h-full justify-start items-end w-full cursor-grab">
                        <div className="flex flex-col justify-between space-x-2 h-full">
                          <div className="flex justify-start items-end">
                            <InfoButton
                              route={info.url}
                              toolTipText="Company info"
                            />
                          </div>
                          <div className="flex flex-row justify-center items-center space-x-2">
                            <FaLocationDot
                              size={16}
                              className="text-neutral-600 dark:text-neutral-400"
                            />
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {info.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col w-full h-full cursor-pointer"
                        onClick={() => handleRedirect(companyTitle)}
                      >
                        <div className="flex justify-center items-center h-full">
                          <Particles
                            imgSrc={info.logo}
                            filterColor={info.filterColor}
                            logoScale={info.logoScale}
                            colorFunction={info.colorFunction}
                            logoWidth={info.logoWidth}
                            logoHeight={info.logoHeight}
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8">
                          <h2 className="text-lg font-semibold" style={{filter: 'drop-shadow(0 0 1px white)'}}>
                            {info.company}
                          </h2>
                          <p>{info.title}</p>
                        </div>
                      </div>
                      <div className="flex h-full justify-end items-end w-full">
                        <div className="flex flex-col justify-between space-x-2 h-full cursor-grab">
                          <div className="flex justify-end items-end">
                            <NavigateToOtherPage
                              route={`experience/${companyTitle}`}
                              toolTipText="Learn more"
                            />
                          </div>
                          <div className="flex flex-row justify-center items-center space-x-2">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {info.startDate}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              -
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {info.endDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicatorScroll />
        </Carousel>
      </div>
    </div>
  );
}
