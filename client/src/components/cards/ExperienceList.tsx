"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaLocationDot } from "react-icons/fa6";

export default function ExperienceList() {
  const router = useRouter();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(experiences)

  useEffect(() => {
    async function fetchExperiences() {
      console.log("Component: Starting to fetch experiences");
      try {
        const response = await fetch('/api/work-experiences');
        
        if (!response.ok) {
          try {
            const errorText = await response.text();
            console.error("Component: Error response:", errorText);
          } catch (e) {
            console.error("Component: Could not parse error response");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check the structure of the data
        if (data && data.data) {
          setExperiences(data.data);
        } else {
          console.error("Component: Data does not have the expected structure:", data);
          setExperiences([]);
        }
      } catch (error) {
        console.error('Component: Error fetching experiences:', error);
      } finally {
        setIsLoading(false);
      }
    }
  
    fetchExperiences();
  }, []);

  const handleRedirect = (slug: string) => {
    if (slug) {
      router.push(`/work/${encodeURIComponent(slug)}`);
    } else {
      console.error("No slug provided for redirection");
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (experiences.length === 0) {
    return <div className="text-center p-4">No experiences found</div>;
  }

  return (
    <Carousel className="w-full mt-8">
      <CarouselContent>
        {experiences.map((exp: any) => (
          <CarouselItem key={exp.id} className="">
            <div 
              className="border border-gray-700 rounded-lg p-4 h-full flex flex-col cursor-pointer hover:border-violet-500 transition-all"
              onClick={() => handleRedirect(exp.slug)}
            >
              <h3 className="font-bold text-lg">{exp.companyTitle}</h3>
              <p className="text-sm text-gray-400">{exp.position}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <FaLocationDot className="mr-1" /> {exp.location}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="mt-4 text-sm line-clamp-3">{exp.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselIndicator />
    </Carousel>
  );
}