"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Informational: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);  
  return (
    <section 
      ref={ref}
      className="relative w-full py-40 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0" 
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
        <Image 
          src="/images/hero/operations-bg.png"
          alt="Advanced Cybersecurity Operations"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Half - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-10"
          >
            <motion.div
              className="inline-block"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 px-4 py-1 text-sm font-semibold text-white rounded-full mb-6 inline-block">
                COMBAT-PROVEN SOLUTIONS
              </span>
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Forge Ahead with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 block mt-2">
                Confidence
              </span>
            </motion.h2>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, width: 0 },
                visible: { opacity: 1, width: "6rem", transition: { duration: 1, delay: 0.3 } }
              }}
              className="h-1 bg-emerald-500 rounded-full"
            />
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Our solutions are designed to address the evolving challenges of modern warfare, ensuring operational superiority in contested environments.
            </motion.p>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="text-xl text-white/90 leading-relaxed"
            >
              With a focus on innovation and adaptability, we deliver technologies that empower defense forces worldwide with unmatched capability and reliability.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="pt-6"
            >
              <button className="group relative px-8 py-3 overflow-hidden rounded border border-emerald-500 text-white text-lg font-medium">
                <span className="relative z-10">Discover More</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Half - Empty to showcase background image */}
          <div className="hidden md:block relative">
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-emerald-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 right-1/2 w-12 h-12 border border-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Informational;