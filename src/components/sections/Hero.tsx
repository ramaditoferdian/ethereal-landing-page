"use client";

import { Button } from "@/components/ui/button";
import { bounceIn, fadeIn, scrambleText } from "@/lib/variants";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="flex flex-col py-16 items-center justify-center h-[calc(100vh-88px)]"
    >
      <div className="container flex flex-col items-center max-w-[768px] lg:max-w-[1200px] px-4 gap-y-2">
        <AnimatePresence mode="popLayout">
          <motion.h4
            variants={bounceIn(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            className="max-w-[18.75rem] lg:max-w-[25rem] text-neutral-700 dark:text-neutral-400 font-medium text-center"
            style={{ fontSize: "clamp(1rem, 2vw, 1.875rem)" }}
          >
            Your gateway to decentralized elegance.
          </motion.h4>
        </AnimatePresence>

        <AnimatePresence>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            className="text-neutral-900 dark:text-white font-semibold text-center"
            style={{ fontSize: "clamp(2rem, 5vw + 1rem, 8rem)" }}
          >
            Step into Ethereal.
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.div
        className="max-w-[18.75rem] lg:max-w-[25rem] text-neutral-700 dark:text-neutral-400 font-medium text-center transition-all duration-500 ease-in-out"
        style={{ fontSize: "clamp(1rem, 2vw, 1.875rem)" }}
        variants={scrambleText(0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, margin: "0%" }}
      >
        <Button
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="font-medium rounded-xl bg-[#05C92F] dark:bg-transparent text-neutral-900 dark:text-white hover:text-neutral-900 dark:hover:text-white 
            hover:bg-[#05C92F] dark:hover:bg-transparent mt-7 border-2 border-neutral-900 dark:border-neutral-600 h-12 px-10 relative overflow-clip"
        >
          <AnimatePresence>
            {isButtonHovered && (
              <motion.div
                className="absolute inset-x-auto bottom-0 w-full h-full bg-neutral-900 dark:bg-white rounded-xl"
                initial={{ y: "100px", scale: 1, opacity: 0 }}
                animate={{
                  y: isButtonHovered ? 0 : "100px",
                  scale: isButtonHovered ? 1 : 0,
                  opacity: isButtonHovered ? 1 : 0,
                }}
                exit={{ y: "-100px", opacity: 0, scale: 2 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
              ></motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="flex flex-row items-center gap-x-10 z-10"
            animate={{
              color: isButtonHovered
                ? theme === "dark"
                  ? "black"
                  : "white"
                : theme === "dark"
                ? "white"
                : "black",
            }}
          >
            <span className="flex flex-row relative">
              <div className="w-4 h-4 bg-[#FBE74E] rounded-full absolute left-0 -top-2 border border-neutral-900 dark:border-neutral-600" />
              <div className="w-4 h-4 bg-[#FFCADC] rounded-full absolute left-2 -top-2 border border-neutral-900 dark:border-neutral-600" />
              <div className="w-4 h-4 bg-[#9DC4F5] rounded-full absolute left-4 -top-2 border border-neutral-900 dark:border-neutral-600" />
            </span>
            <h1>Connect Wallet</h1>
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
