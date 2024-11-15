"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";

export function ThreeDCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      <CardContainer className="inter-var md:hover:shadow-[0px_2px_32px_0px_rgb(245,243,255,1)] rounded-xl">
        <CardBody
          className="relative group/card rounded-xl border-2 border-[#D6E3FA] dark:border-[#1E2A45] 
        bg-second-light dark:bg-[#EDB200] dark:hover:shadow-2xl sm:w-[50rem] h-auto p-6"
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-main dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-text-secondary text-base font-medium max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/unifyi2.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
