import Hero from "@/components/marketing/hero";
import Features from "@/components/marketing/features";
import Informational from "@/components/marketing/info";
import Solutions from "@/components/marketing/solutions";
import About from "@/components/marketing/about";
import CTA from "@/components/marketing/cta";
import Cyber from "@/components/marketing/cyber";

const HomePage = () => {
  return (
    <>
      {/* Hero section outside wrapper for full-width */}
      <Hero />
      <Features />
      <Informational />
      <Solutions />
      <Cyber/>
      <About />
      <CTA />
    </>
  );
};

export default HomePage;
