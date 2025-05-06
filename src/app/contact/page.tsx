import React from 'react';
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import FormSection from './components/FormSection';
import CtaSection from './components/CtaSection';

export const metadata = {
  title: 'Contact Us | Informage Techno Solutions',
  description: 'Reach out to our team to discuss defense technologies, cybersecurity solutions, and IT services for your organization.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Dark Theme */}
        <HeroSection />
        
        {/* Form Section - Dark Theme */}
         <FormSection />
        
        {/* Map Section - Light Theme */}
        <MapSection />
        
       
        {/* CTA Section - Light Theme */}
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}