"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground [&_svg]:size-4"
      aria-label="Toggle dark mode"
    >
      {mounted && resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export { DarkModeToggle };
