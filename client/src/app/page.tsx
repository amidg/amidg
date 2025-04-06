import { getHomePageData, getStrapiMedia } from "@/lib/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import ChronologySection from "@/components/sections/ChronologySection";
import BlogSection from "@/components/sections/BlogSectioin";
import ConnectSection from "@/components/sections/ConnectSection";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const data = await getHomePageData();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  // Find the intro section block
  const introBlock = data?.blocks?.find(
    (block: any) => block.__component === 'blocks.intro-section'
  );
  
  // Find the connect section block
  const connectBlock = data?.blocks?.find(
    (block: any) => block.__component === 'blocks.connect-section'
  );
  
  // Find the footer section block
  const footerBlock = data?.blocks?.find(
    (block: any) => block.__component === 'blocks.footer-section'
  );
  
  // Get chronology items
  const chronologyItems = data?.ChronologySection || [];
  
  // Get avatar URL
  let avatarUrl = '';
  if (introBlock?.avatar?.url) {
    avatarUrl = `${STRAPI_URL}${introBlock.avatar.url}`;
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col justify-center w-full max-w-3xl md:mt-[5rem] p-6 md:p-0 text-light-text dark:text-violet-50">
        <div className="max-w-3xl w-full">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
            <div className="mb-4 md:mb-0">
              <Avatar className="h-24 w-24 md:h-28 md:w-28 hover:scale-105 transition ease-in-out duration-200" >
                <AvatarImage src={getStrapiMedia(introBlock?.avatar) || undefined} />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-lg font-semibold md:text-base">{introBlock?.name}</h2>
              <h2 className="text-base text-neutral-400 text-center md:text-left">
                {introBlock?.occupation || "Robotics Engineer && Open-source fanatic!"}
              </h2>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl">
            <h1 className="text-baseline font-bold">{introBlock?.aboutTitle}</h1>
            <p>{introBlock?.aboutDescription}</p>
          </div>
          
          <div className="mt-16 max-w-2xl space-y-4">
            <h1 className="text-base font-bold">Now</h1>
            <div className="space-y-8">
              {introBlock?.listItems.map((item: {
                text: string; id: string }) => (
                  <div key={item.id} className="flex items-center space-x-4">
                  <div>
                    <FaArrowRightLong size={20} color="white" />
                  </div>
                  <p className="text-base">{item.text}</p>
                </div>
              ))
              }
            </div>
          </div>
          
          {/* Experience and Projects sections */}
          <div className="mt-16 flex flex-col space-y-12">
            <ExperienceSection />
            <ProjectSection />
            {chronologyItems.length > 0 && (
              <ChronologySection chronologyItems={chronologyItems} />
            )}
            <BlogSection />
            <ConnectSection connectData={connectBlock} />
          </div>
        </div>
      </div>
    </div>
  );
}