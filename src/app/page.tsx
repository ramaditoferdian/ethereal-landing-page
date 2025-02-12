import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-schibsted-grotesk)]">
      <Hero />
      {/* <AppScreen /> */}
      {/* <VerticalList /> */}

      <Features />

      <Faq />
      <Footer />
    </div>
  );
}
