"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-zinc-50 w-full overflow-hidden">
      {/* Top Half - Full Width Image */}
      <div className="w-full h-[50vh] relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/technology/hero.png"
            alt="Advanced Technology Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Half - Text (Split into two columns) */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-2xl h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/technology/tech-detail.png"
                alt="Technology Detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-6 md:px-0"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Pioneering Technology Solutions
            </h1>

            <p className="text-lg text-zinc-700 leading-relaxed max-w-3xl">
              Our innovative technology stack delivers mission-critical
              capabilities across defense, aerospace, and industrial
              applications. We combine cutting-edge hardware with proprietary
              software to solve the most challenging technical problems. From
              real-time data processing and high-precision control systems to
              robust embedded solutions, our integrated approach ensures
              unmatched performance, reliability, and scalability. Every
              component is engineered for demanding environments, enabling our
              partners to achieve operational excellence, reduce risk, and
              accelerate innovation across even the most complex missions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
