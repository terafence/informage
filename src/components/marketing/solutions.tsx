"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface SolutionCardProps {
  image: string;
  badge: {
    text: string;
    color: string;
  };
  title: string;
  description: string;
  delay: number;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  image, 
  badge, 
  title, 
  description, 
  delay,
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="group h-full"
    >
      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-b from-white/5 to-white/10 shadow-2xl">
        {/* Glowing edge effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/0 to-emerald-500/20 animate-gradient-x"></div>
        </div>
        
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          
          {/* Badge */}
          <div className="absolute top-6 right-6">
            <Badge className={`${badge.color} text-white px-4 py-1.5 text-sm font-medium`}>
              {badge.text}
            </Badge>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="relative p-10 bg-gradient-to-b from-transparent to-white/5">
          {/* Animated numbers background */}
          <div className="absolute -top-10 right-10 text-[120px] font-bold text-white opacity-5">
            {index + 1}
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
          
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mb-6 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
          
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{description}</p>
          
          {/* View details link */}
          <div className="mt-8 overflow-hidden">
            <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center text-emerald-400 font-medium">
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  
  const solutions = [
    {
      image: "/images/hero/ring-c-uxs.png",
      badge: { text: "Combat-Proven", color: "bg-red-600" },
      title: "Ring C-UxS",
      description: "A comprehensive solution for countering uncrewed systems with advanced GNSS manipulation technology, providing reliable protection for critical infrastructure.",
      delay: 0.1,
      y: y1
    },
    {
      image: "/images/hero/pyramid-gnss.png",
      badge: { text: "Innovative", color: "bg-blue-600" },
      title: "Pyramid GNSS",
      description: "Software-only library detecting and alerting against smart spoofing & jamming attacks with industry-leading accuracy and minimal false positives.",
      delay: 0.3,
      y: y2
    },
    {
      image: "/images/hero/boom-box.png",
      badge: { text: "Extended Range", color: "bg-emerald-600" },
      title: "Boom-Box",
      description: "Enhances the range of our solutions, turning them into strategic tools with over 50 Km reach for comprehensive regional protection capabilities.",
      delay: 0.5,
      y: y3
    }
  ];

  return (
    <section 
      ref={ref}
      className="w-full py-32 bg-gradient-to-b from-black to-gray-900"
    >   
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <Image 
              src="/images/hero/logo.png" 
              alt="Company Logo" 
              width={120}
              height={60}
              className="h-20 w-auto"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight"
          >
            Our Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-2"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-white/70 text-center max-w-4xl mb-4"
          >
            Cutting-edge defensive capabilities designed to meet the evolving challenges of modern electronic warfare
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              style={{ y: solution.y }}
              className="h-full"
            >
              <SolutionCard {...solution} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Solutions;