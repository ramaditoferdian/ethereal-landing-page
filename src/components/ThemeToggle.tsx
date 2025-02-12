"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 p-2 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border dark:border-white bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800  border-transparent dark:border-white/[0.2]"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-black" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;
