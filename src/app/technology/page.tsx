import React from 'react';
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import HeroSection from "./components/HeroSection";
import DarkSection from "./components/DarkSection";
import LightSection from "./components/LightSection";

export const metadata = {
  title: 'Technology Solutions | Advanced PNT & Cybersecurity',
  description: 'Discover our cutting-edge technology solutions in Position, Navigation & Time (PNT) and advanced cybersecurity systems for mission-critical applications.',
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Dark Section with PNT */}
        <DarkSection />
        
        {/* Light Section with Cybersecurity */}
        <LightSection />
      </main>
      
      <Footer />
    </div>
  );
}