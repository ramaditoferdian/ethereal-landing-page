"use client";

import { MenuMobile } from "@/components/MenuMobile";

import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Radar } from "lucide-react";
import { useState } from "react";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      setVisible(scrollY.get() <= 80);
    }
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="font-[family-name:var(--font-schibsted-grotesk)] flex flex-row items-center justify-between p-5 pt-10 container max-w-[768px] lg:max-w-screen-xl mx-auto"
    >
      <div className="flex flex-row gap-x-24">
        <div className="flex flex-row items-center">
          <Radar className="w-12 h-12 text-black dark:text-white" />
          <h1 className="text-black dark:text-white font-semibold text-2xl hidden sm:block">
            Ethereal
          </h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Button className="rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-black/50 dark:hover:bg-white/50 font-semibold hidden md:flex">
          Connect Wallet
        </Button>

        <ThemeToggle />

        <MenuMobile />

        {/* <Button className="flex lg:hidden rounded-full w-10 h-10 bg-white text-black dark:bg-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20">
          <Menu />
        </Button> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
