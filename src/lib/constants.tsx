import { FileSignature, Home, MessageCircleIcon } from "lucide-react";
const navItems = [
  {
    name: "Home",
    id: "home",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Features",
    id: "features",
    icon: (
      <FileSignature className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "FAQ",
    id: "faq",
    icon: (
      <MessageCircleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export { navItems };
