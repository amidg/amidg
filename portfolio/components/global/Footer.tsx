"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToView = (targetId: string) => (e: any) => {
    e.preventDefault();
    const scrollToElement = document.getElementById(targetId);
    if (scrollToElement) {
      scrollToElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-transperant mt-28 bg-[#060709] border-t-[0.5px] border-[#1E2A45]">
      <div className="mx-auto w-full max-w-3xl p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 space-x-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                <Link href="#about-section">
                  <li
                    onClick={scrollToView("about-section")}
                    className="mb-4 cursor-pointer hover:underline hover:underline-offset-4"
                  >
                    About
                  </li>
                </Link>
                <Link href="/yevhenii_strilets_resume2023.pdf" target="blank">
                  <li className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
                    Resume
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                <Link href="https://github.com/EStrilets" target="_blank">
                  <li className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
                    Github
                  </li>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yev-strilets/"
                  target="_blank"
                >
                  <li className="mb-4 cursor-pointer hover:underline hover:underline-offset-4">
                    Linkedin
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <p className="font-bold">Dmitrii Gusev</p>
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between text-violet-50 mt-5">
          © 2023 Yevhenii Strilets —— Vancouver, Canada
        </div>
      </div>
    </footer>
  );
};

export default Footer;

