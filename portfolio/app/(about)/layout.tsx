import "@/styles/globals.css";
import type { Metadata } from "next";
import Timeline from "@/components/global/Timeline";
import { landingTimelineSections } from '@/data/menu-data'

export const metadata: Metadata = {
  title: "Dmitrii Gusev",
  description: "Created by Dmitrii Gusev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        {children}
        <div className="flex-grow relative">
           <Timeline menuList={landingTimelineSections} /> 
        </div>
      </div>
  );
}
