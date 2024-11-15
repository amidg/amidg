"use client";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ConnectSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 relative mb-2">
      <div
        className="
    flex flex-col 
    w-full max-w-3xl
    items-center justify-center 
    mt-[3rem]
    text-violet-50
    md:items-start
    "
      >
        <div className="text-light-text dark:text-white mb-14">
          <h2 className="text-xl font-bold">Connect</h2>
        </div>
        <div className="text-light-text dark:text-white mb-6 max-w-2xl">
          <p>
            Follow me on X, view my code and open-source projects on Github,
            explore my Read.cv profile, or email me directly
            atjulien.thibeaut@gmail.com.
          </p>
        </div>
        <div className="w-full max-w-3xl">
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
