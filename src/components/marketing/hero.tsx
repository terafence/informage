"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconPlayerPlay } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {!videoPlaying ? (
        <>
          {/* Video Background */}
          <video 
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/hero/cybersecurity-operations.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay with texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-5"></div>          
          {/* Content */}
          <div className="relative z-2git0 flex flex-col items-center justify-center h-screen px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <button 
                onClick={() => setVideoPlaying(true)}
                className="group relative w-24 h-24 flex items-center justify-center"
                aria-label="Play promotional video"
              >
                <div className="absolute w-full h-full rounded-full bg-white/10 backdrop-blur-lg border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 animate-pulse"></div>
                <div className="absolute w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconPlayerPlay size={24} className="text-black ml-1" />
                </div>
              </button>
            </motion.div>
            
            <motion.div
              className="max-w-6xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-white tracking-tight"
              >
                Next Generation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                  Counter Unmanned Systems
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto font-light"
              >
                Operational & Combat-Proven Solutions for Modern Threats
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button 
                  className="bg-white hover:bg-white/90 text-black text-lg font-medium px-10 py-7 rounded-md group relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <div className="text-white/60 text-sm mb-2">Scroll to discover</div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-white/60 to-transparent">
                <motion.div 
                  className="w-full h-5 bg-white"
                  animate={{ 
                    y: [0, 25, 0],
                    opacity: [1, 0.5, 1] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full blur-md"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 border border-emerald-500/10 rounded-full blur-lg"></div>
        </>
      ) : (
        <div className="relative z-50 flex items-center justify-center h-screen bg-black">
          <div className="w-full max-w-6xl aspect-video relative">
            <video
              className="w-full h-full"
              controls
              autoPlay
            >
              <source src="/images/hero/promotional-video.mp4" type="video/mp4" />
            </video>
            <Button 
              variant="outline" 
              className="absolute top-6 right-6 bg-black/50 text-white border border-white/30 hover:bg-white/20 backdrop-blur-md"
              onClick={() => setVideoPlaying(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;