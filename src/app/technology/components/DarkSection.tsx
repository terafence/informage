"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CompassIcon } from 'lucide-react';

const DarkSection = () => {
  return (
    <section className="bg-zinc-900 py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                <CompassIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                PNT - Position, Navigation & Time
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our advanced PNT solutions ensure precise positioning, reliable navigation, 
              and accurate timing in challenging environments. Operating across multiple 
              frequency bands with proprietary anti-jamming technology, our systems maintain 
              operational integrity even when conventional GPS signals are compromised or denied.
              These resilient solutions provide the foundation for mission-critical systems
              in defense, aviation, and infrastructure protection applications.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Multi-constellation compatibility
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Anti-spoofing capabilities
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Encrypted communication channels
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Nanosecond timing precision
              </li>
            </ul>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-emerald-900/20">
              <Image
                src="/images/technology/pnt.png"
                alt="Position, Navigation and Time Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;