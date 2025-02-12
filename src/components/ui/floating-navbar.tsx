"use client";
import { scrollToTop } from "@/components/FloatingToTop";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const scrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    id: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]); // ✅ FIX: Move useRef outside of map

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const [position, setPosition] = useState<{
    left: number;
    width: number;
    height: number;
    opacity: number;
    scale: number;
  }>({
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
    scale: 0,
  });

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        className={cn(
          "flex max-w-fit fixed top-11 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center px-3 py-1 rounded-md gap-x-2",
          className
        )}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
            scale: 0,
          }));
        }}
      >
        {navItems.map((navItem, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => {
                if (navItem.id === "home") {
                  scrollToTop();
                } else {
                  scrollToSection(navItem.id);
                }
              }}
              ref={(el) => {
                navRefs.current[idx] = el;
              }}
              className={cn(
                "relative dark:text-white items-center flex text-black min-w-[40px] sm:min-w-[50px] md:min-w-[60px] lg:min-w-[120px] justify-center"
              )}
              onMouseEnter={() => {
                const ref = navRefs.current[idx];
                if (!ref) return;

                const { width, height } = ref.getBoundingClientRect();

                setPosition({
                  left: ref.offsetLeft,
                  width,
                  height,
                  opacity: 1,
                  scale: 1,
                });
              }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:flex text-sm h-8 items-center">
                {navItem.name}
              </span>
            </button>

            {idx < navItems.length - 1 && (
              <span className="h-3 w-[2px] bg-neutral-300"></span>
            )}
          </React.Fragment>
        ))}

        <Cursor position={position} />
      </motion.div>
    </AnimatePresence>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    height: number;
    opacity: number;
    scale: number;
  };
}) => {
  return (
    <motion.div
      animate={{ ...position }}
      transition={{ ease: "easeInOut" }}
      className="absolute -z-10 h-7 rounded-[20px] bg-neutral-400/10 md:h-20"
    />
  );
};
