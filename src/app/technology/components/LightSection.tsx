"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldIcon } from "lucide-react";

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
                Advanced Cybersecurity Solutions
              </h2>
            </div>

            <p className="text-zinc-700 text-lg leading-relaxed mb-8">
              Our comprehensive IT and network security solutions safeguard
              critical operations through centralized monitoring, proactive risk
              management, and secure data handling. Designed for adaptability
              across enterprise, government, and defense environments, these
              systems support robust infrastructure protection, streamlined
              operations, and long-term resilience against evolving threats.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">
                  Centralized Monitoring
                </div>
                <div className="text-zinc-600">
                  Real-time visibility across networks
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">
                  Scalable Architecture
                </div>
                <div className="text-zinc-600">
                  Easily adaptable to growing  needs
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">
                  Data Protection
                </div>
                <div className="text-zinc-600">
                  Safeguards information across all ends
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-zinc-100">
                <div className="text-blue-600 font-bold text-xl mb-1">
                  Risk Mitigation
                </div>
                <div className="text-zinc-600">
                  Helps prevent disruption & security events
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LightSection;
