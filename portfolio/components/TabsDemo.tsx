"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { InteractiveTabs } from "./InteractiveTabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0f1117] border-[0.5px] border-[#1E2A45]">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0f1117] border-[0.5px] border-[#1E2A45]">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0f1117] border-[0.5px] border-[#1E2A45]">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] max-w-3xl [perspective:1000px] relative flex flex-col mx-auto w-full  items-start justify-start my-20">
      <InteractiveTabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
