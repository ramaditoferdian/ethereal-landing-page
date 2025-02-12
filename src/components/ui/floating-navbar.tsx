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

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      // console.log(scrollYProgress.get());

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
    scale: 0,
  });

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          y: 0,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        transition={{
          // duration: 0.5,
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
        {navItems.map((navItem, idx: number) => {
          // const ref = useRef(null);
          const ref = useRef<HTMLButtonElement | null>(null);

          return (
            <React.Fragment key={idx}>
              <button
                onClick={() => {
                  if (navItem.id === "home") {
                    scrollToTop();
                  } else {
                    scrollToSection(navItem.id);
                  }
                }}
                key={`link-${idx}`}
                className={cn(
                  "relative dark:text-white items-center flex text-black min-w-[40px] sm:min-w-[50px] md:min-w-[60px] lg:min-w-[120px] justify-center"
                )}
                ref={ref}
                onMouseEnter={() => {
                  if (!ref?.current) return;

                  const { width, height } = ref.current.getBoundingClientRect();

                  setPosition({
                    left: ref.current.offsetLeft,
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
              {/* Render separator unless it's the last item */}
              {idx < navItems.length - 1 && (
                <span className="h-3 w-[2PX] bg-neutral-300"></span>
              )}

              <Cursor position={position} />
            </React.Fragment>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      transition={{
        ease: "easeInOut",
      }}
      className="absolute -z-10 h-7 rounded-[20px] bg-neutral-400/10 md:h-20"
    />
  );
};
