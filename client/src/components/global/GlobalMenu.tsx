'use client'

import { useTheme } from "next-themes";
import { useState } from "react";

import { 
  LuActivity,
  LuPackage,
  LuFileText,
} from "react-icons/lu";
import { GrHomeOption } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";
import { FaPenNib } from "react-icons/fa";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

export function GlobalMenu() {
  const { setTheme, theme } = useTheme();

  const [isRotated, setIsRotated] = useState(false);
  
  const handleThemeToggle = () => {
    setIsRotated(!isRotated);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 250); // Add a small delay to allow animation to happen before theme changes
  };

  const data = [
    {
      title: "Home",
      icon: (
        <GrHomeOption className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <LuPackage className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Blog",
      icon: (<FaPenNib className="h-full w-full text-neutral-600 dark:text-neutral-300" />),
      href: null,
    },
    {
      title: "Resume",
      icon: (
        <LuFileText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/Dmitrii_Gusev_Resume.pdf",
    },
    {
      title: "Theme",
      icon: <CgDarkMode className={`h-full w-full text-neutral-600 dark:text-neutral-300 transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`} />,
      href: null,
      onClick: handleThemeToggle
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          item.href ? (
            <Link key={idx} href={item.href} className="no-underline">
              <DockItem
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ) : (
          <div key={idx} onClick={item.onClick} className="cursor-pointer">
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </div>
          )
        ))}
      </Dock>
    </div>
  );
}
