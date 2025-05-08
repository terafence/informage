"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  IconSatellite, 
  IconRadar,
  IconRadio,
  IconRocket,
  IconCpu,
  IconShield
} from '@tabler/icons-react';
import Image from 'next/image';

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  direction?: 'left' | 'right';
  delay?: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ 
  icon: Icon, 
  title,
  description, 
  direction = 'left', 
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative mb-12"
    >
      <div className="flex items-start space-x-5">
        <div className="mt-1 p-3 rounded-xl backdrop-blur-sm">
          <Icon size={32} className="text-emerald-500" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className={`absolute ${direction === 'left' ? '-left-4' : '-right-4'} -top-4 w-24 h-1 bg-gradient-to-r from-emerald-500/40 to-transparent rounded-full blur-sm`}></div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const leftFeatures = [
    {
      icon: IconSatellite,
      title: "RCIED Countermeasure",
      description: "Preventing remote detonation of improvised explosives.",
      delay: 0.1
    },
    {
      icon: IconRadar,
      title: "Secure Military Comms",
      description: "Protected information exchange for defense.",
      delay: 0.2
    },
    {
      icon: IconRadio,
      title: "EOD Personnel Protection",
      description: "Specialized suits for man-made bomb disposal.",
      delay: 0.3
    }
  ];
  
  const rightFeatures = [
    {
      icon: IconRocket,
      title: "Counter-Unmanned Aerial System Capabilities",
      description: "Neutralizing unauthorized aerial drones.",
      delay: 0.1
    },
    {
      icon: IconCpu,
      title: "Autonomous Defense Swarms",
      description: "Coordinated unmanned vehicles for military tasks.",
      delay: 0.2
    },
    {
      icon: IconShield,
      title: "Integrated Threat Response",
      description: "Unified systems for multi-domain threat neutralization.",
      delay: 0.3
    }
  ];

  return (
    <section className="w-full py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="p-4 rounded-full bg-emerald-100 mb-6 z-10 relative">
              <IconShield size={36} className="text-emerald-600" strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 tracking-tight"
          >
            Our Capabilities
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mb-10 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mb-16"
          >
            Advanced counter unmanned systems with state-of-the-art technology providing comprehensive protection against modern threats.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-2xl"></div>
          
          {/* Left Column */}
          <div className="space-y-4 z-10">
            {leftFeatures.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                direction="left"
                delay={feature.delay}
              />
            ))}
          </div>
          
          {/* Center Image with parallax effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex items-center justify-center z-10"
            style={{ y: backgroundY }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/10 shadow-2xl shadow-emerald-500/10">
                <Image 
                  src="/images/hero/product-central.png" 
                  alt="Product Showcase"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <div className="space-y-4 z-10">
            {rightFeatures.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                direction="right"
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;