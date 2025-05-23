"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { 
  Sparkles,
  Clock
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 mb-2">
              <motion.div
                key={value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 uppercase tracking-wider font-medium">
              {unit}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Email subscription component

// Feature preview component

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/80 to-zinc-950"></div>
          
          {/* Floating orbs */}
          <motion.div
            animate={floatingAnimation}
            className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
            className="absolute top-40 right-32 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
            className="absolute bottom-32 left-40 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Status Badge */}
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-sm">
                    <div className="relative mr-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                      <div className="absolute -inset-1 w-5 h-5 rounded-full bg-emerald-500/20 animate-pulse"></div>
                    </div>
                    <motion.span 
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-base font-medium text-emerald-400 tracking-wide"
                    >
                      Development in Progress
                    </motion.span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="ml-4 w-5 h-5 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={fadeInUp} className="space-y-8 px-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-300 mb-0">
                      Something Amazing
                    </span>
                    <br/>
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">
                      Is Coming Soon
                    </span>
                  </h1>
                  
                  <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-zinc-300 mt-8">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-7 h-7 text-emerald-400" />
                    </motion.div>
                    <span className="font-medium">Revolutionary technology awaits</span>
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-7 h-7 text-blue-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light"
                >
                  We&apos;re crafting the next generation of solutions with cutting-edge technology, 
                  unparalleled security, and intuitive design. Get ready for a game-changing experience.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div variants={scaleIn} className="py-12">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="w-10 h-10 text-emerald-400" />
                      </motion.div>
                      Launch Countdown
                    </h2>
                    <p className="text-lg text-zinc-400">Mark your calendars - something big is coming</p>
                  </div>
                  <CountdownTimer />
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}