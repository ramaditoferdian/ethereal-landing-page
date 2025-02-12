"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { blurIn, hoverEffect, staggeredFadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const Items = [
  {
    question: "What is Ethereal?",
    answer:
      "Ethereal is a sleek and futuristic Web3 platform where art meets decentralized finance. It offers a seamless and elegant experience for exploring NFTs, trading assets, and engaging in DeFi activities.",
  },
  {
    question: "How do I connect my wallet to Ethereal?",
    answer:
      "Simply click the 'Connect Wallet' button on the homepage and choose your preferred wallet provider. Ethereal supports popular wallets for a secure and effortless connection.",
  },
  {
    question: "What can I do on Ethereal?",
    answer:
      "On Ethereal, you can explore curated digital art collections, participate in decentralized financial protocols, and securely manage your crypto assets—all in one beautifully designed platform.",
  },
  {
    question: "Is Ethereal secure?",
    answer:
      "Yes, security is our top priority. We utilize robust encryption protocols and integrate with trusted wallets to ensure your assets and data remain safe.",
  },
  {
    question: "Are there any fees for using Ethereal?",
    answer:
      "Ethereal applies minimal transaction fees for certain activities such as trading NFTs or participating in DeFi pools. These fees will be transparently displayed before any transaction.",
  },
  {
    question: "What makes Ethereal different from other Web3 platforms?",
    answer:
      "Ethereal stands out with its modern design, smooth animations, and a user-first approach that seamlessly blends digital art and decentralized finance. We focus on elegance, simplicity, and effortless connectivity.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Connect your wallet, explore the platform, and dive into the world of decentralized elegance. Visit the homepage and click 'Get Started.'",
  },
];

const FaqItems = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex items-center justify-center max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl"
    >
      <motion.div
        className="w-full flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8"
        variants={staggeredFadeIn(0, 0.2)} // Parent wrapper with stagger effect
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: false,
          amount: 0,
        }}
      >
        {Items.map(({ question, answer }, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <AccordionItem
              value={`item-${index + 1}`}
              className="w-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded-[20px] transition-colors duration-300"
            >
              <AccordionTrigger
                className="text-neutral-900 dark:text-white font-medium leading-snug md:leading-none hover:no-underline text-start p-10 transition-colors duration-300"
                style={{ fontSize: "clamp(2rem, 2vw , 2.5rem)" }}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                className="text-neutral-800 dark:text-neutral-300 leading-snug p-10 pt-0 transition-colors duration-300"
                style={{ fontSize: "clamp(1.2rem, 2vw , 1.5rem)" }}
              >
                {answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </motion.div>
    </Accordion>
  );
};

const Faq = () => {
  return (
    <section
      id="faq"
      className="w-full h-full flex flex-col justify-center items-center px-5 py-16 gap-y-12"
    >
      <div className="w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
        <div className="flex flex-col items-start justify-start sm:mx-14 gap-y-16">
          <motion.div
            variants={hoverEffect}
            whileHover="whileHover"
            className="flex flex-row place-self-end items-end gap-x-2 md:gap-x-1"
          >
            <div className="w-3 h-3 md:w-2 md:h-2 bg-[#FFCADC] rounded-full" />
            <h2
              className="text-neutral-900 dark:text-white font-medium leading-none mr-10 md:mr-28 lg:mr-36 transition-colors duration-300"
              style={{ fontSize: "clamp(1.5rem, 3.5vw , 2.5rem)" }}
            >
              Any questions?
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
            className="text-neutral-900 dark:text-white font-medium leading-none w-full transition-colors duration-300"
            style={{ fontSize: "clamp(4rem, 5vw + 3.5rem, 8rem)" }}
          >
            FAQ
          </motion.h1>
        </div>
      </div>

      <FaqItems />
    </section>
  );
};

export default Faq;
