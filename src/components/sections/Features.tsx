"use client";

import useDevice from "@/hooks/useDevice";
import {
  blurIn,
  hoverEffect,
  rocketAnimation,
  staggeredFadeIn,
} from "@/lib/variants";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Items = [
  {
    title: "Comprehensive Portfolio Overview",
    description:
      "Effortlessly monitor and manage all your assets in one place.",
    image: "/images/1.png", // Add corresponding images
  },
  {
    title: "Hardware Wallet Compatibility",
    description:
      "Keep your funds secure with seamless support for Ledger and Trezor.",
    image: "/images/2.png",
  },
  {
    title: "Malicious Address Detection",
    description: "Stay safe—get instant alerts on suspicious addresses.",
    image: "/images/3.png",
  },
  {
    title: "No IP Tracking",
    description:
      "Your privacy is our priority. We never store or track IP addresses.",
    image: "/images/4.png",
  },
];

const FeatureItem = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div
      className="flex flex-col items-start justify-between w-full sm:max-w-[330px] h-full rounded-[20px] p-5 gap-y-10 
      bg-white dark:bg-neutral-900 transition-all duration-500 ease-in-out hover:-translate-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-y-4 w-full">
        <h2 className="text-neutral-900 dark:text-white font-semibold text-4xl sm:text-2xl md:text-lg lg:text-xl">
          {title}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-400 font-semibold text-2xl sm:text-xl md:text-sm lg:text-base">
          {description}
        </p>
      </div>
      <div className="w-full h-[300px] aspect-square flex flex-row items-center justify-center">
        {/* <div className="w-full h-full bg-white/70 dark:bg-neutral-700/50" /> */}
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rocketRef = useRef<HTMLDivElement | null>(null);
  const rocketIsView = useInView(rocketRef, { once: true });

  const xMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);
  const xTablet = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const device = useDevice();

  return (
    <section
      id="features"
      className="w-full h-full flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 pt-32 gap-y-24"
    >
      <div className="flex flex-col gap-8 w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-5">
        <div className="flex flex-col items-start justify-start sm:mx-14 gap-y-16">
          <motion.div
            className="flex flex-row place-self-end items-end gap-x-2 md:gap-x-1"
            variants={hoverEffect}
            whileHover="whileHover"
          >
            <div className="w-3 h-3 md:w-2 md:h-2 bg-[#17CC3D] rounded-full" />
            <h2
              className="text-neutral-900 dark:text-white font-medium leading-none mr-10 md:mr-28 lg:mr-36"
              style={{ fontSize: "clamp(1.5rem, 3.5vw , 2.5rem)" }}
            >
              Secure and private
            </h2>
          </motion.div>
          <motion.h1
            variants={blurIn(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: true,
              margin: "0%",
            }}
            className="text-neutral-900 dark:text-white font-medium text-8xl"
            style={{ fontSize: "clamp(3.5rem, 5vw + 2rem, 8rem)" }}
          >
            Your Trusted Gateway to Web3
            <p>
              <motion.span
                ref={rocketRef}
                variants={rocketAnimation}
                initial="hidden"
                animate={rocketIsView ? "animate" : "hidden"}
                style={{ display: "inline-block", fontSize: "50px" }}
              >
                🚀
              </motion.span>
            </p>
          </motion.h1>
        </div>
      </div>

      {/* LIST ITEM : HORIZONTAL */}
      <section
        ref={targetRef}
        className="relative h-[300vh] flex flex-row gap-x-4 w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl pt-8 overflow-visible px-10"
      >
        <div className="sticky top-0 flex h-screen items-center justify-start">
          <motion.div
            variants={staggeredFadeIn(0, 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0,
            }}
            style={{
              x:
                device === "mobile-small"
                  ? xMobile
                  : device === "tablet"
                  ? xTablet
                  : xDesktop,
            }}
            className="flex gap-4"
          >
            {Items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <FeatureItem
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Features;
