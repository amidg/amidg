"use client";

import * as React from "react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";
import { MotionValue } from "framer-motion";

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


  const handleToggle = () => {
    setIsToggled(!isToggled);
    setTimeout(() => {
      setTheme(isToggled ? "light" : "dark");
    }, 300);
  };

  return (
    <CgDarkMode
        className={`${size} text-neutral-600 dark:text-neutral-300`}
        onClick={handleToggle} />
  );
}