"use client";

import React, { useEffect, useState } from "react";
import ReadingBar from "../readingProgressBar/ReadingBar";
import { motion } from "framer-motion";

type MenuItem = {
  text: string;
  section: string;
};

type MenuList = {
  items: MenuItem[];
  scrollOffset: number;
};

interface SideMenuProps {
  menuList: MenuList;
}

const ProgressBar: React.FC<SideMenuProps> = ({ menuList }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const handleScrollSection = () => {
      let sensitivityOffset = 900;
      const sections = [...menuList.items.map((item) => item.section)];
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom + sensitivityOffset >= window.innerHeight / 0.9
          ) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSection);

    return () => {
      window.removeEventListener("scroll", handleScrollSection);
    };
  }, [menuList.items]);

  const scrollToView = (targetId: string) => () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`
      fixed w-full max-w-4xl
      z-20 top-2 left-1/2 transform -translate-x-1/2
      backdrop-filter backdrop-blur-sm bg-opacity-50
      transition-all duration-300 ease-in-out overflow-hidden
      bg-second-light dark:bg-[#141B2D] border-b-[0.5px] dark:border-[#1E2A45] rounded-lg
      h-[4rem]`}
    >
      <div className="flex items-center justify-start h-full">
        {menuList.items.map(
          (item, index) =>
            index <= activeIndex && (
              <motion.div
                key={item.section}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollToView(item.section)}
              >
                {item.text}
              </motion.div>
            )
        )}
      </div>
      <ReadingBar />
    </nav>
  );
};

export default ProgressBar;
