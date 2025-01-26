import { 
  LuActivity,
  LuComponent,
  LuHome,
  LuMail,
  LuPackage,
  LuFileText
} from "react-icons/lu";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/dock-menu";
import { DarkModeToggle } from "../DarkModeToggle";
import { websiteContent } from '@/data/portfolio-content';

const data = [
  {
    title: "Home",
    icon: (
      <LuHome className='h-full w-full text-neutral-600 dark:text-neutral-300' />
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
    title: "Resume",
    icon: (
      <LuFileText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/Dmitrii_Gusev_Resume.pdf",
  },
  {
    title: "Experience",
    icon: (
      <LuActivity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/experience",
  },
  {
    title: "Theme",
    icon: <DarkModeToggle />,
    href: null, // No href for theme toggle
  },
];

export function AppleStyleDock() {
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
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          )
        ))}
      </Dock>
    </div>
  );
}
