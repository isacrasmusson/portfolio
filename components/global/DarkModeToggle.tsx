"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 [&_svg]:size-4"
      aria-label="Dark mode toggle"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export { DarkModeToggle };
