"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldIcon } from 'lucide-react';

const LightSection = () => {
  return (
    <section className="bg-zinc-50 py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-1"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/technology/cybersecurity.png"
                alt="Advanced Cybersecurity Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-zinc-50/20 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 order-2"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                <ShieldIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
                Advanced Cybersecurity
              </h2>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-8">
              Our integrated cybersecurity solutions protect critical infrastructure and sensitive
              data with adaptive threat monitoring and real-time response capabilities. 
              Using AI-driven anomaly detection and quantum-resistant encryption protocols, 
              we secure networks against sophisticated threats while ensuring operational continuity.
              These systems are designed to meet the highest security standards for 
              government, defense, and enterprise applications.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">99.99%</div>
                <div className="text-zinc-600">Threat detection rate</div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">&lt;10ms</div>
                <div className="text-zinc-600">Response time</div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">24/7/365</div>
                <div className="text-zinc-600">Active monitoring</div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">FIPS 140-3</div>
                <div className="text-zinc-600">Compliance certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LightSection;