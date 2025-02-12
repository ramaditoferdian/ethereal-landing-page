import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/components/ui/floating-navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useDevice from "@/hooks/useDevice";
import { navItems } from "@/lib/constants";
import { scrambleText } from "@/lib/variants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Radar } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { theme } = useTheme();

  const device = useDevice();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickButton = (id: string) => {
    setIsOpen((prev) => !prev);
    scrollToSection(id);
  };

  return (
    <Sheet open={isOpen && device === "mobile-small"} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          onClick={handleClick}
          className="relative flex items-center justify-center w-10 h-10 p-2 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border border-transparent dark:border-white/20 bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-110 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        >
          <Menu className="w-4 h-4 text-black dark:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-neutral-900 text-black dark:text-white border-l border-neutral-200 dark:border-neutral-800">
        <SheetHeader>
          <SheetTitle>Mobile Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-y-8 h-full mr-4">
          {/* LOGO */}

          <div className="flex flex-row items-center gap-x-4">
            <Radar className="w-8 h-8 text-black dark:text-white" />
            <h1 className="text-black dark:text-white font-semibold text-2xl">
              Ethereal
            </h1>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-y-4 mr-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClickButton(item.id)}
                className="bg-transparent hover:bg-black/10 dark:hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="w-full text-neutral-700 dark:text-neutral-400 font-medium text-center transition-all duration-500 ease-in-out"
            style={{ fontSize: "clamp(1rem, 2vw, 1.875rem)" }}
            variants={scrambleText(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, margin: "0%" }}
          >
            <Button
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="w-full font-medium rounded-xl bg-[#05C92F] dark:bg-transparent text-neutral-900 dark:text-white hover:text-neutral-900 dark:hover:text-white 
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
