"use client";

import React from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    toast("Theme message", {
      description: `${
        theme === "light"
          ? "theme has changed to light mode"
          : "theme has changed to dark mode"
      }`,
      icon: theme === "light" ? <SunIcon /> : <MoonIcon />,
    });
  };

  return (
    <div className="absolute bottom-4 right-4">
      <Button variant={"outline"} size={"icon"} onClick={handleTheme}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ToggleTheme;
