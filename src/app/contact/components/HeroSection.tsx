"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/hero-bg.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-900/90 to-zinc-900" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-sm font-medium text-emerald-400">Contact Us</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Get in Touch <span className="text-emerald-400">Today</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our team to discuss how our defense and cybersecurity solutions 
              can enhance your operational capabilities and security posture.
            </p>
          </motion.div>
          
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/contact/contact-illustration.png"
                  alt="Contact Informage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900 to-transparent">
                  <h3 className="text-xl font-semibold mb-2">Secure Discussions</h3>
                  <p className="text-zinc-300 text-sm">
                    All inquiries are handled with strict confidentiality protocols
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">How Can We Help?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-emerald-500/20">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Defense Solutions</h3>
                    <p className="text-zinc-400 text-sm">Anti-drone systems, military communications, and more</p>
                  </div>
                  
                  <div className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-emerald-500/20">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Cybersecurity</h3>
                    <p className="text-zinc-400 text-sm">SOC services, network security, and threat protection</p>
                  </div>
                  
                  <div className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-emerald-500/20">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Partnerships</h3>
                    <p className="text-zinc-400 text-sm">Strategic alliances and technology integration</p>
                  </div>
                  
                  <div className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-emerald-500/20">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Support</h3>
                    <p className="text-zinc-400 text-sm">Technical assistance and customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;