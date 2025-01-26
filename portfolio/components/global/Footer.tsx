"use client"
import Image from "next/image";
import Link from "next/link";
import { websiteContent } from "@/data/portfolio-content";

const Footer = () => {
  const { links, brand, copyright, location } = websiteContent.footer;

  const scrollToView = (targetId: string) => (e: any) => {
    e.preventDefault();
    const scrollToElement = document.getElementById(targetId);
    if (scrollToElement) {
      scrollToElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transperant mt-28 dark:bg-[#060709] border-t-[0.5px] border-[#1E2A45]">
      <div className="mx-auto w-full max-w-3xl p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 space-x-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                {links.navigation.map(({ href, text, target }) => (
                  <Link key={text} href={href} target={target}>
                    <li
                      onClick={
                        href.startsWith("#")
                          ? scrollToView(href)
                          : undefined
                      }
                      className="mb-4 cursor-pointer hover:underline hover:underline-offset-4"
                    >
                      {text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                {links.social.map(({ href, text, target }) => (
                  <Link key={text} href={href} target={target}>
                    <li className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
                      {text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <p className="font-bold">{brand}</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div className="text-violet-50">
            {copyright}
          </div>
          <div className="text-violet-50">
            {location}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;