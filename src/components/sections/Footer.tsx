"use client";

import { ChevronDown, Figma, Instagram, Linkedin, X } from "lucide-react";

// Data untuk ikon sosial media
const SOCIAL_ICONS = [X, Instagram, Linkedin, Figma];

// Data untuk footer links
const FOOTER_SECTIONS = [
  { title: "Product", links: ["Security", "Support"] },
  { title: "Company", links: ["Introducing Ethereal", "$ETL", "About"] },
  { title: "Resources", links: ["News", "Docs", "Media Kit", "Shortcuts"] },
];

const Footer = () => {
  return (
    <footer className="p-5 container mx-auto font-[family-name:var(--font-schibsted-grotesk)]">
      <div className="mx-auto flex flex-col md:flex-row gap-y-5">
        {/* Social Icons */}
        <div className="flex flex-row items-start justify-center gap-x-6 md:gap-x-2 w-max">
          {SOCIAL_ICONS.map((Icon, index) => (
            <div
              key={index}
              className="rounded-full border-2 p-1 hover:scale-110 transition-all duration-200 cursor-pointer 
                         border-black dark:border-white"
            >
              <Icon className="w-10 h-10 md:w-4 md:h-4 text-black dark:text-white" />
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8 lg:gap-x-12 md:mx-auto">
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <h5 className="font-medium text-3xl md:text-sm lg:text-xl text-black dark:text-white">
                {section.title}
              </h5>
              <ul className="text-lg md:text-xs lg:text-base lg:leading-snug space-y-1 transition-all duration-200 text-black/70 dark:text-white/70">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-green-500 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Language Selector */}
          <div className="flex flex-row items-center text-3xl md:text-sm lg:text-xl h-max text-black/70 dark:text-white/70">
            <h5 className="font-medium transition-all duration-200 hover:text-green-500 cursor-pointer">
              English
            </h5>
            <ChevronDown className="w-6 h-6 md:w-3 md:h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
