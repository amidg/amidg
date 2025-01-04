"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type TimeLineItem = {
  id: string;
  name: string;
};

type TimeLineList = {
  sections: TimeLineItem[];
  scrollOffset: number;
};

interface TimelineProps {
  menuList: TimeLineList;
}

const Timeline: React.FC<TimelineProps> = ({ menuList }) => {
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>(
    menuList.sections[0].id
  );
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const handleScrollMenu = useCallback(() => {
    setIsMenuSticky(window.scrollY > menuList.scrollOffset);
  }, [menuList.scrollOffset]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleScrollSection = useCallback(() => {
    const sensitivityOffset = 900;
    for (const section of menuList.sections) {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom + sensitivityOffset >= window.innerHeight / 0.9
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  }, [menuList.sections]);

  const handleScroll = useCallback(() => {
    handleScrollSection();
    handleScrollMenu();
    setIsTimelineVisible(window.scrollY > menuList.scrollOffset);
  }, [handleScrollMenu, handleScrollSection, menuList.scrollOffset]); // Added menuList.scrollOffset to dependencies

  useEffect(() => {
    const currentIndex = menuList.sections.findIndex(
      (section) => section.id === activeSection
    );
    setSelected(currentIndex);
  }, [activeSection, menuList.sections]);

  // Fix involves simply adding handleScrollSection to the dependency array of useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScrollSection(); // Initial call to update state based on initial scroll position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, handleScrollSection]); // Added handleScrollSection to dependencies

  const calculateScale = (index: number) => {
    if (hoveredIndex === null) return 0.45;
    const distance = Math.abs(index - hoveredIndex);
    return Math.max(1 - distance * 0.2, 0.45);
  };

  const scrollToView = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 mt-[8rem] tranlate-y-1/2 -ml-24
    ${
      isTimelineVisible
        ? "visible opacity-100 transition-opacity duration-300"
        : "invisible opacity-0 transition-opacity duration-300"
    }`}
    >
      <div className="flex h-[500px] w-[350px] items-center justify-center">
        <div className="flex flex-col">
          {menuList.sections.map((section, i) => {
            const isSelected = selected === i;
            const isActive = activeSection === section.id;

            return (
              <button
                key={i}
                className="relative inline-flex items-end justify-center py-[0.4rem]"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={scrollToView(section.id)}
                onTouchStart={() => handleMouseEnter(i)}
                onTouchEnd={handleMouseLeave}
              >
                <motion.div
                  className={`h-[0.3rem] w-12 rounded-[4px] ${
                    isActive ? "bg-text" : "bg-main dark:bg-violet-50"
                  }`}
                  animate={{ scale: calculateScale(i) }}
                  initial={{ scale: 0.3 }}
                  transition={{ type: "spring", stiffness: 600, damping: 60 }}
                />
                {hoveredIndex === i && (
                  <motion.span
                    className={`absolute -top-0.5 left-16 text-[14px] font-medium ${
                      isSelected ? "text-text" : "text-main dark:text-violet-50"
                    }`}
                    initial={{ opacity: 0, filter: `blur(2px)`, scale: 0.4 }}
                    animate={{ opacity: 1, filter: `blur(0px)`, scale: 1 }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                  >
                    {section.name}
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
