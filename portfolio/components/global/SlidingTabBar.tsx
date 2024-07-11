"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DarkModeToggle } from "../DarkModeToggle";
import Dropdown from "../Dropdown";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BiArch } from "react-icons/bi";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

let allTabs = [
  {
    id: "home",
    name: "Home",
    link: "/",
    icon: <BiArch size={22} />,
  },
  {
    id: "projects",
    link: "/projects",
    name: "Projects",
    icon: <MdLightbulbOutline size={22} />,
  },
  {
    id: "resume",
    link: "/yevhenii_strilets_resume2023.pdf",
    name: "Resume",
    icon: <HiOutlineDocumentText size={22} />,
  },
];

const menuItems = [
  {
    name: "LinkedIn",
    icon: (
      <FaLinkedinIn size={18} className="dark:text-white text-light-text" />
    ),
  },
  {
    name: "Github",
    icon: <FaGithubAlt size={18} className="dark:text-white text-light-text" />,
  },
];

export const SlidingTabBar = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const homeTabIndex = allTabs.findIndex((tab) => tab.id === "home");

  const [activeTabIndex, setActiveTabIndex] = useState<number>(homeTabIndex);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const handleTabClick = (index: number, tabId: string) => {
    if (tabId !== "resume") {
      setActiveTabIndex(index);
    }
  };

  return (
    <div
      className="backdrop-filter backdrop-blur-sm bg-opacity-8 z-20
      transition-all duration-300 ease-in-out
      border-[1px] border-[#1e2a45]
      bg-[#283350] flew justify-center items-center align-middle sticky 
      bottom-4 mt-12 mx-auto flex w-max h-12 rounded-xl px-1"
    >
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-md py-2 px-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-lg bg-[#405079]" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <TooltipProvider delayDuration={100} key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="mx-0 my-0"
                  key={tab.id}
                  href={tab.link ? tab.link : ""}
                  target={tab.name === "Resume" ? "blank" : ""}
                >
                  <button
                    ref={(el) => (tabsRef.current[index] = el)}
                    className="my-auto cursor-pointer select-none rounded-full px-3 text-center font-light text-white"
                    onClick={() => handleTabClick(index, tab.id)}
                  >
                    {React.cloneElement(tab.icon, {
                      className: `mt-[0.4rem] ${
                        isActive
                          ? "text-text"
                          : "text-light-text dark:text-white"
                      }`,
                    })}
                  </button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">{tab.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      <span className="inline-block justify-center align-middle h-[1.8rem] w-[0.125rem] self-stretch bg-second bg-white/10 rounded-lg mt-[0.6rem] mr-1" />
      <Dropdown items={menuItems} />
      {/* <DarkModeToggle /> */}
    </div>
  );
};
