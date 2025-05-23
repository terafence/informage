"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Server } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="text-sm font-medium text-emerald-600">
                  Explore Our Services
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Capabilities</span>?
              </h2>
              
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-xl">
                Discover how our innovative technology solutions can help you overcome challenges and achieve operational excellence across defense and cybersecurity domains.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solutions">
                  <Button className="group px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>Defense Solutions</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href="/solutions">
                  <Button variant="outline" className="group px-6 py-3 border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-xl">
                    <Server className="w-5 h-5 mr-2" />
                    <span>Cybersecurity Services</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                {/* Card Stack */}
                <div className="relative">
                  <div className="absolute top-6 -left-6 w-full h-full bg-emerald-50 rounded-2xl transform rotate-[-6deg]"></div>
                  <div className="absolute top-3 -left-3 w-full h-full bg-blue-50 rounded-2xl transform rotate-[-3deg]"></div>
                  
                  <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-zinc-100">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">Industry Expertise</h3>
                      
                      <p className="text-zinc-600 mb-6">
                        With over 12 years of experience in defense and cybersecurity, our team brings specialized knowledge to every project.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 w-full">
                        <div className="py-3 px-1 rounded-lg bg-zinc-50 text-center">
                          <div className="text-emerald-600 font-bold">12+</div>
                          <div className="text-base text-zinc-500">Years</div>
                        </div>
                        <div className="py-3 px-1 rounded-lg bg-zinc-50 text-center">
                          <div className="text-emerald-600 font-bold">100+</div>
                          <div className="text-base text-zinc-500">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;