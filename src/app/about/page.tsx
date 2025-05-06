"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import DefensePage from "@/app/about/components/defense";
import CybersecurityPage from "@/app/about/components/cybersecurity";

// Animation variants

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Full-height Hero Section with Split Content */}
      <section className="h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Defense Half */}
        <div className="relative w-full lg:w-1/2 h-full lg:h-screen cursor-pointer" onClick={() => document.getElementById('defense-section')?.scrollIntoView({behavior: 'smooth'})}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/defense/hero1.png"
              alt="Defense Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 h-full flex items-center"
          >
            <div className="p-8 md:p-16 max-w-2xl">
              <div className="inline-block bg-emerald-500/20 text-emerald-400 py-1.5 px-4 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Defense Systems
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Advanced Defense Solutions
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                Cutting-edge electronic warfare capabilities delivering tactical superiority through innovative counter-unmanned systems technology.
              </p>
              
              <Button 
                className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 px-6 py-3"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('defense-section')?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Explore Defense Services
                <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* IT Security Half */}
        <div className="relative w-full lg:w-1/2 h-full lg:h-screen cursor-pointer" onClick={() => document.getElementById('cybersecurity-section')?.scrollIntoView({behavior: 'smooth'})}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/it/hero.png"
              alt="IT & Cybersecurity"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 h-full flex items-center"
          >
            <div className="p-8 md:p-16 max-w-2xl">
              <div className="inline-block bg-blue-500/20 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                IT & Cybersecurity
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Complete IT Security
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                Enterprise-grade security solutions protecting your digital assets through advanced threat detection and comprehensive network defense.
              </p>
              
              <Button 
                className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 px-6 py-3"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('cybersecurity-section')?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Discover IT Services
                <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Elegant Divider */}
      <section className="bg-gradient-to-r from-zinc-100 to-zinc-200 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-24 h-0.5 bg-zinc-400 rounded-full opacity-50" />
        </div>
      </section>
      
      {/* Defense Page Section */}
      <div id="defense-section">
        <DefensePage />
      </div>
      
      {/* Elegant Divider */}
      <section className="bg-gradient-to-r from-zinc-100 to-zinc-200 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-24 h-0.5 bg-zinc-400 rounded-full opacity-50" />
        </div>
      </section>
      
      {/* Cybersecurity Page Section */}
      <div id="cybersecurity-section">
        <CybersecurityPage />
      </div>
      
      <Footer />
    </div>
  );
}