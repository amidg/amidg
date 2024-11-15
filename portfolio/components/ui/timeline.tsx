"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { SpinningText } from "../animation/SpinningText";
 
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
 
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
 
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 85%"],
  });
 
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
 
  return (
    <div ref={containerRef}>
      <div ref={ref} className="relative max-w-3xl mx-auto pb-2 space-y-28">
        {data.map((item, index) => (
          <div key={index} className="flex md:pt-40">
            <div className="sticky z-10 -mt-[10rem] max-w-xs lg:max-w-sm md:w-full">
              {/* <div className="h-10 absolute left-3 md:left-5 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div> */}
              <SpinningText
                radius={3}
                fontSize={0.7}
                variants={{
                  container: {
                    hidden: {
                      opacity: 1,
                    },
                    visible: {
                      opacity: 1,
                      rotate: 360,
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 6,
                        repeat: Infinity,
                        staggerChildren: 0.03,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                  },
                }}
                className="font-[450]"
              >
                {`2023 2023 2023 `}
              </SpinningText>
              {/* <h3 className="hidden md:block text-base md:pl-10 font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3> */}
            </div>

            {/* <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-sm mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div> */}
          </div>
        ))}
        <div
          style={{
            height: 550 + "px",
          }}
          className="absolute left-10 -top-[5rem] overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] bg-[#060709] to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};