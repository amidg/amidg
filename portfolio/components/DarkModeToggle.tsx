"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";
import { MotionValue, useTransform } from "framer-motion";

interface DarkModeToggleProps {
  width?: MotionValue<number>;
}

export function DarkModeToggle({ width }: DarkModeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [isToggled, setIsToggled] = React.useState(theme === "dark");
  const [size, setSize] = React.useState("text-[1.5rem]");

  React.useEffect(() => {
    setIsToggled(theme === "dark");
  }, [theme]);

  React.useEffect(() => {
    if (width) {
      const unsubscribe = width.on("change", (latest) => {
        const newSize = `text-[${latest/16}rem]`;
        setSize(newSize);
      });
      return () => unsubscribe();
    }
  }, [width]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setTimeout(() => {
      setTheme(isToggled ? "light" : "dark");
    }, 300);
  };

  return (
    <Expand
      duration={750}
      className={`${size} text-neutral-600 dark:text-neutral-300`}
      onToggle={handleToggle}
      toggled={isToggled}
    />
  );
}