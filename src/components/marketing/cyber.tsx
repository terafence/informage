"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Database,
  ChevronRight,
  Network,
  LucideIcon,
} from "lucide-react";

interface Badge {
  text: string;
  color: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  badge: Badge;
  title: string;
  description: string;
  delay: number;
  index: number;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  badge,
  title,
  description,
  delay,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `slideUp 0.8s ease-out ${delay}s both`,
      }}
    >
      {/* Main card with cyber grid pattern */}
      <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden shadow-2xl">
        {/* Animated border glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
        </div>

        {/* Cyber grid overlay */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Header section */}
        <div className="relative p-8 border-b border-cyan-500/10">
          {/* Badge */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`${badge.color} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
            >
              {badge.text}
            </span>
          </div>

          {/* Icon with pulse effect */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-cyan-400" />
              {isHovered && (
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg animate-ping"></div>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Animated line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform origin-left group-hover:scale-x-[300%] transition-transform duration-500"></div>
        </div>

        {/* Content section */}
        <div className="relative p-8">
          <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
            {description}
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            {features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                style={{
                  animation: isHovered
                    ? `slideInRight 0.3s ease-out ${idx * 0.1}s both`
                    : "none",
                }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 group-hover:shadow-cyan-500/50 group-hover:shadow-sm transition-shadow duration-300"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Action button */}
          <Link href="/solutions">
          <button className="relative overflow-hidden w-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 group/btn">
            <span className="relative z-10 flex items-center justify-center">
              Learn More
              <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          </Link>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
      </div>
    </div>
  );
};

interface Service {
  icon: LucideIcon;
  badge: Badge;
  title: string;
  description: string;
  delay: number;
  features: string[];
}

const CyberSecurityServices: React.FC = () => {
  const services: Service[] = [
    {
      icon: Network,
      badge: {
        text: "Integration",
        color:
          "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      },
      title: "System Integration",
      description:
        "Seamlessly connect disparate systems and technologies to create unified, efficient IT infrastructures that enhance operational capabilities and data flow.",
      delay: 0.1,
      features: [
        "Enterprise application integration",
        "API development & management",
        "Legacy system modernization",
        "Cloud-hybrid connectivity",
      ],
    },
    {
      icon: Database,
      badge: {
        text: "Migration",
        color: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      },
      title: "Data Migration",
      description:
        "Secure and efficient transfer of critical data across platforms, ensuring zero data loss and minimal downtime during digital transformation initiatives.",
      delay: 0.3,
      features: [
        "Zero-downtime migrations",
        "Data integrity validation",
        "Cross-platform compatibility",
        "Automated testing protocols",
      ],
    },
    {
      icon: Shield,
      badge: {
        text: "24/7 SOC",
        color: "bg-red-500/20 text-red-400 border border-red-500/30",
      },
      title: "Security Operations Center",
      description:
        "Round-the-clock threat monitoring and incident response services providing advanced cybersecurity protection for your digital assets and infrastructure.",
      delay: 0.5,
      features: [
        "Real-time threat detection",
        "Incident response & forensics",
        "Compliance monitoring",
        "Advanced threat intelligence",
      ],
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite ${i * 0.5}s`,
            }}
          ></div>
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
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
            IT-related Solutions
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
            Cutting-edge defensive capabilities designed to meet the evolving
            challenges of modern electronic warfare
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberSecurityServices;
