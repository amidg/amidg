"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { workExperienceCards } from "@/data/workExperience";
import { experienceCard } from "@/types/workExperienceTypes";

const ExperienceSlug = () => {
  const { experienceId } = useParams(); // Get the dynamic id (title) from URL
  const [experience, setExperienceId] = useState<experienceCard | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!experienceId) return; // If no id, return early

    // Decode the URL component to handle encoded characters
    const decodedTitle = decodeURIComponent(experienceId as string);

    // Find the project by title
    const foundExperience = Object.values(workExperienceCards)
      .flat()
      .find((card) => card.company === decodedTitle);

    if (foundExperience) {
      setExperienceId(foundExperience);
    } else {
      // If project is not found, redirect to 404 or handle the error
      router.push("/404");
    }
  }, [experience, router]);

  if (!experience) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center w-full mt-[10rem] md:mt-[12rem]">
      <div className="w-full max-w-3xl space-y-4">
        <div className="flex-col mb-16">
        <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className="flex justify-start items-center w-6 h-6 mb-4"
                    onClick={() => router.back()}
                  >
                    <FaArrowLeft className="text-[#8994ae]" size={15} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white">Back</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          <h1 className="text-2xl font-bold">{experience.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlug;