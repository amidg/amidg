"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ReadingBar from "../readingProgressBar/ReadingBar";
import { DarkModeToggle } from "../DarkModeToggle";

const navList = [
  {
    name: "About",
    link: "/",
    id: 1,
  },
  {
    name: "Resume",
    link: "/yevhenii_strilets_resume2023.pdf",
    id: 2,
  },
  {
    name: "Contact",
    link: "/contact",
    id: 3,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isSelected, setSelected] = useState(0);

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedSelected = localStorage.getItem("isSelected");

    if (storedSelected !== null) {
      const currentRoute = pathname;
      const selectedItem = navList.find((item) => item.link === currentRoute);

      if (selectedItem) {
        setSelected(selectedItem.id);
      }
    }
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("isSelected", isSelected.toString());
  }, [isSelected]);

  // opasity in nav-bar bg-opacity-50
  return (
    <nav
      className={`
        fixed w-full
        z-20 top-0 left-0
        backdrop-filter backdrop-blur-sm bg-opacity-50
        transition-all duration-300 ease-in-out
        bg-[#141B2D] border-b-[0.5px] border-[#1E2A45]
        ${isSticky ? "h-[6rem]" : "h-[6rem] md:h-[8rem]"}`}
    >
      <div
        className={`max-w-4xl flex flex-wrap items-center justify-between mx-auto transition-all duration-300 ease-in-out ${
          isSticky ? "pt-2 md:pt-1" : "pt-2 md:pt-6"
        }`}
      >
        <Link href="/">
          <p className="font-bold">Dmitrii Gusev</p>
        </Link>
        <div
          className={`
          flex 
          md:w-auto 
          md:order-2 
          px-10 py-[1rem] mt-1
          transition-all duration-300 ease-in-out
          space-x-6
          `}
        >
          <div className="flex justify-center items-center rounded-md bg-[#1B263E] h-12 w-12 glow-on-hover">
            <Link href="https://github.com/amidg" target="_blank">
              <BsGithub size={30} color="#f5f3ff" />
            </Link>
          </div>
          <div className="flex justify-center items-center rounded-md bg-[#1B263E] h-12 w-12 glow-on-hover">
            <Link
              href="https://www.linkedin.com/in/dmitriigusev/"
              target="_blank"
            >
              <BiLogoLinkedin size={30} color="#0077b5" />
            </Link>
          </div>
          <div className="flex justify-center items-center rounded-md bg-[#1B263E] h-12 w-12 glow-on-hover">
            <DarkModeToggle />
          </div>
        </div>
        <div className="flex md:hidden">
          {mobileMenu ? (
            <HiOutlineX
              size={30}
              color="#f5f3ff"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <HiMenuAlt3
              size={30}
              color="#f5f3ff"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>

        <Tabs defaultValue="account">
          <TabsList
            className={`
              md:flex 
              flex-col 
              md:p-0 
              mt-4 
              hidden
              bg-transparent 
              md:flex-row 
              md:space-x-8 md:mt-0 md:border-0
              `}
          >
            {/* TODO:Fix link issues */}
            {navList.map((item) => (
              <Link
                key={item.id}
                href={item.link ? item.link : ""}
                target={item.name === "Resume" ? "blank" : ""}
              >
                <TabsTrigger
                  value={item.name}
                  className={`
                 text-violet-50
                ${isSelected === item.id ? "text-text" : "bg-transparent"} 
                text-base
                rounded-lg
                transition-all duration-100 ease-in-out
                `}
                >
                  {item.name}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
      {mobileMenu && (
        <div
          className="
          flex flex-col bg-[#090D14] 
          transition-all 
          duration-300 ease-in-out w-full 
          justify-center items-center p-6 mr-4 space-y-6 md:hidden
          border-y-[0.5px] border-[#1E2A45]
          "
        >
          {navList
            .filter((item) => item.name !== "Blog")
            .map((item) => (
              <Link key={item.id} href={item.link ? item.link : ""}>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="bg-[#262F45] rounded-md 
               border border-solid border-[#7AA0F7]  
               text-[#5686f5] font-semibold text-sm leading-5 
               py-3 px-4 
               text-center
               w-[325px]
               md:w-auto"
                >
                  {item.name}
                </button>
              </Link>
            ))}
        </div>
      )}
      <ReadingBar />
    </nav>
  );
};

export default Navbar;
