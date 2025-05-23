"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconShield,
  IconAntennaBars5,
  IconDeviceGamepad,
  IconDeviceMobile,
  IconNetwork,
  IconServer,
  IconCloud,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

// Type definitions
interface Product {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  tags: string[];
  route: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  products: Product[];
  accentColor: "blue" | "emerald";
}

interface ProductCardProps {
  product: Product;
  accentColor: "blue" | "emerald";
}

const categories: Category[] = [
  {
    id: "defense",
    title: "Defense Solutions",
    description: "Next-generation defense technologies for modern warfare",
    icon: IconShield,
    products: [
      {
        id: "rcied",
        title: "RCIED Jammer",
        icon: IconAntennaBars5,
        description: "RCIED Jammers are specialized electronic devices",
        tags: ["Smart Jamming", "Counter-IED", "Real-Time Control"],
        route: "/solutions/rcied",
      },
      {
        id: "anti-drone",
        title: "Anti-drone Systems",
        icon: IconDeviceMobile,
        description: "AI-powered drone detection and neutralization platform",
        tags: ["Tracking", "Acoustic Sensors", "Detection"],
        route: "/solutions/anti",
      },
      {
        id: "bomb-suits",
        title: "Bomb Disposal Suits",
        icon: IconDeviceGamepad,
        description: "Lightweight, high-protection EOD equipment",
        tags: ["NIJ-Level Protection", "Ergonomic Design", "Lightweight"],
        route: "/solutions/bomb",
      },
      {
        id: "mmi-comms",
        title: "MMI Communications",
        icon: IconNetwork,
        description: "Secure military-grade communication systems",
        tags: ["Advanced Voice Clarity", "Interoperability", "Tactical"],
        route: "/solutions/mmi",
      },
    ],
    accentColor: "blue",
  },
  {
    id: "it",
    title: "IT & Cybersecurity",
    description: "Enterprise digital transformation and security solutions",
    icon: IconServer,
    products: [
      {
        id: "system-integration",
        title: "System Integration",
        icon: IconCloud,
        description: "Seamless enterprise system integration and automation",
        tags: ["Cloud-native", "Scalable", "API-first"],
        route: "/solutions/system",
      },
      {
        id: "data",
        title: "Data Migration",
        icon: IconNetwork,
        description: "Seamless. Secure. Scalable.",
        tags: ["Cloud Data Migration", "Database Migration", "Reliable"],
        route: "/solutions/data",
      },
    ],
    accentColor: "emerald",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      duration: 0.7,
    },
  },
};

const ProductCard: React.FC<ProductCardProps> = ({ product, accentColor }) => {
  const handleKnowMore = () => {
    window.location.href = product.route;
  };

  return (
    <motion.div
      className="group relative"
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500
        ${
          accentColor === "blue"
            ? "bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-400/20 hover:border-blue-400/50 hover:from-blue-500/15 hover:to-purple-600/15"
            : "bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border-emerald-400/20 hover:border-emerald-400/50 hover:from-emerald-500/15 hover:to-teal-600/15"
        }`}
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
          ${
            accentColor === "blue"
              ? "bg-gradient-to-r from-blue-400/20 to-purple-500/20"
              : "bg-gradient-to-r from-emerald-400/20 to-teal-500/20"
          }
        `}
        />

        <div className="relative p-6 h-full flex flex-col">
          {/* Product Header */}
          <div className="flex items-start space-x-4 mb-4">
            <motion.div
              className={`p-3 rounded-xl border backdrop-blur-sm
                ${
                  accentColor === "blue"
                    ? "bg-blue-500/20 border-blue-400/30"
                    : "bg-emerald-500/20 border-emerald-400/30"
                }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <product.icon size={28} className="text-white" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {product.title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {product.tags.map((tag: string, tagIndex: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.1 }}
                className={`px-3 py-1 text-xs font-medium rounded-lg border backdrop-blur-sm
        ${
          accentColor === "blue"
            ? "bg-blue-500/10 text-blue-200 border-blue-400/30"
            : "bg-emerald-500/10 text-emerald-200 border-emerald-400/30"
        }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Know More Button */}
          <div className="mt-4 flex justify-center">
            <motion.button
              onClick={handleKnowMore}
              className={`py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm border
                ${
                  accentColor === "blue"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-blue-500/50 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/25"
                } hover:shadow-xl`}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <span>Learn More</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconArrowRight size={16} />
                </motion.div>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingElements: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/10 rounded-full"
        initial={{
          x:
            Math.random() *
            (typeof window !== "undefined" ? window.innerWidth : 1920),
          y:
            Math.random() *
            (typeof window !== "undefined" ? window.innerHeight : 1080),
        }}
        animate={{
          y: [
            null,
            Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1080),
          ],
          x: [
            null,
            Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1920),
          ],
        }}
        transition={{
          duration: Math.random() * 25 + 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const SolutionsPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden">
        {/* Enhanced Background */}
        <motion.div className="fixed inset-0 opacity-40" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
        </motion.div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Mouse Follower */}
        <motion.div
          className="fixed w-80 h-80 pointer-events-none z-0"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-blue-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <FloatingElements />

        <main className="relative z-10 h-full flex flex-col px-8 md:px-16 lg:px-24 xl:px-32 py-12">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-2"
            >
              <IconSparkles size={18} className="text-blue-400 mr-2" />
              <span className="text-sm font-medium text-white/90">
                We do Reliable Innovations!
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-0 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl">
                Solutions
              </span>{" "}
              &nbsp;
              <span className="text-white/95">Redefined</span>
            </h1>
          </motion.header>

          {/* Two Column Layout */}
          <motion.section
            className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 min-h-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Defense Solutions - Takes 2/3 width */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 flex flex-col h-full"
            >
              {/* Defense Category Header */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-4 rounded-2xl border backdrop-blur-lg mr-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-400/30"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconShield size={40} className="text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Defense Solutions
                  </h2>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Next-generation defense technologies for modern warfare
                  </p>
                </div>
              </div>

              {/* Defense Products Grid - 2x2 */}
              <motion.div
                className="flex-1 grid grid-cols-2 grid-rows-2 gap-6"
                variants={containerVariants}
              >
                {categories[0].products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    accentColor="blue"
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* IT & Cybersecurity - Takes 1/3 width */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 flex flex-col h-full"
            >
              {/* IT Category Header */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-4 rounded-2xl border backdrop-blur-lg mr-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-emerald-400/30"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconServer size={40} className="text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl  font-bold text-white mb-2">
                    IT & Cybersecurity
                  </h2>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Enterprise digital transformation solutions
                  </p>
                </div>
              </div>

              {/* IT Products Grid - 1x2 */}
              <motion.div
                className="flex-1 grid grid-cols-1 grid-rows-2 gap-6"
                variants={containerVariants}
              >
                {categories[1].products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    accentColor="emerald"
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SolutionsPage;