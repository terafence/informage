"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  
  return (
    <section 
      ref={ref} 
      className="relative w-full py-40 overflow-hidden bg-gray-900"
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
        <Image 
          src="/images/hero/about-bg.png"
          alt="Regulus Cyber Team"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>

      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="flex flex-col items-center text-center space-y-10"
        >
          <div className="inline-block relative">
            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "circOut" } }
              }}
              className="absolute top-1/2 -translate-y-1/2 w-10 h-px bg-emerald-500 right-full mr-4"
            />
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
              }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              ABOUT <span className="text-emerald-400">INFORMAGE GROUP</span>
            </motion.h2>
            
            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "circOut" } }
              }}
              className="absolute top-1/2 -translate-y-1/2 w-10 h-px bg-emerald-500 left-full ml-4"
            />
          </div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: "20rem", transition: { duration: 0.7, delay: 0.3 } }
            }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
          />
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed font-light"
          >
            <span className="text-emerald-400 font-normal">Informage Group</span> is a leading expert in software-based GPS/GNSS security, providing groundbreaking capabilities against uncrewed systems and protecting against spoofing & jamming attacks.
          </motion.p>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            With years of operational experience and deep technical expertise, our team is committed to developing solutions that address the most challenging threats in the modern battlespace.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-500/10 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 border border-emerald-500/5 rounded-full"></div>
    </section>
  );
};

export default About;