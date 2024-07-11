"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isToggled, setIsToggled] = React.useState(theme === "dark");

  React.useEffect(() => {
    setIsToggled(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setTimeout(() => {
      setTheme(isToggled ? "light" : "dark");
    }, 300); // delay to allow animation to complete
  };

  return (
    <Expand
      duration={750}
      className="text-[1.5rem] mx-2"
      onToggle={handleToggle}
    />
  );
}
