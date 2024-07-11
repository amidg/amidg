import "@/styles/globals.css";
import type { Metadata } from "next";
import Timeline from "@/components/global/Timeline";
import { landingTimelineSections } from '@/data/menuData'

export const metadata: Metadata = {
  title: "YevStrilets",
  description: "Created by Yevhenii Strilets",
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
