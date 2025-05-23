"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DefensePage = () => {
  return (
    <div className="min-h-screen flex flex-col" id="defense-section">
      {/* Hero Section */}
      <section
        className="relative h-[95vh] w-full flex items-center"
        id="defense-section"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/defense/hero.png"
            alt="Defense and Military Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Defense & Military Services
            </motion.h1>

            <motion.p
              variants={slideIn}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Reliable defense and security solutions designed to detect,
              manage, and respond to modern threats including uncrewed aerial.
            </motion.p>

            <motion.div variants={fadeIn}>
              <Link href="/solutions">
                <Button className="group px-6 py-3 text-lg bg-white text-zinc-900 hover:bg-white/90 transition-all duration-300">
                  Explore Solutions
                  <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 02 - Left Text / Right Image */}
      <section className="bg-zinc-900 py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <Badge className="bg-emerald-500/10 text-emerald-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Counter-UAS Technology
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced Anti-Drone Systems
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our anti-drone solutions are built to support the protection of
                critical areas by addressing unauthorized aerial activity
                through dependable and adaptable response measures.
              </p>
              <Link href="/solutions/anti">
                <Button
                  variant="outline"
                  className="group border-emerald-400/30 text-emerald-500 hover:text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400/50 transition-all duration-300"
                >
                  Learn More
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-emerald-900/20">
                <Image
                  src="/images/defense/section02.png"
                  alt="Advanced Command System Visualization"
                  fill
                  className="object-fit"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 03 - Right Text / Left Image */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 order-1"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-blue-900/20">
                <Image
                  src="/images/defense/section03.png"
                  alt="Satellite Intelligence System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-2"
            >
              <Badge className="bg-blue-500/10 text-blue-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Counter-IED Solution
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced RCIED Jammer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our anti-IED solutions are designed to enhance safety by
                detecting and neutralizing explosive threats. Built for
                operations, these systems provide real-time threat detection and
                mitigation to safeguard personnel and critical assets.
              </p>
              <Link href="/solutions/rcied">
                <Button
                  variant="outline"
                  className="group border-blue-400/30 text-blue-500 hover:text-blue-300 hover:bg-blue-950/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  Discover Capabilities
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 04 - Left Text / Right Image */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <Badge className="bg-amber-500/10 text-amber-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Protective Gear
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Bomb Disposal Suits
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our bomb disposal suits are developed to provide reliable
                protection during explosive threat mitigation. Designed with
                reinforced materials for impact resistance and mobility, these
                suits support safe operation in high-risk environments. Ideal
                for handling hazardous objects, they enable personnel to perform
                critical tasks with greater confidence and security.
              </p>
              <Link href="/solutions/bomb">
                <Button
                  variant="outline"
                  className="group border-amber-400/30 text-amber-500 hover:text-amber-300 hover:bg-amber-950/50 hover:border-amber-400/50 transition-all duration-300"
                >
                  Explore Technology
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-amber-900/20">
                <Image
                  src="/images/defense/section04.png"
                  alt="Advanced Aerial Defense Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 05 - Right Text / Left Image */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 order-1"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-indigo-900/20">
                <Image
                  src="/images/defense/section05.png"
                  alt="Cybersecurity Defense Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-indigo-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-2"
            >
              <Badge className="bg-indigo-500/10 text-indigo-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Safe Communications
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Secure MMI Communication
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our solutions ensure clear, secure, and uninterrupted
                communication across every terrain and threat scenario—whether
                on the battlefield, in disaster zones, or deep within industrial
                infrastructure.
              </p>
              <Link href="/solutions/mmi">
                <Button
                  variant="outline"
                  className="group border-indigo-400/30 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/50 hover:border-indigo-400/50 transition-all duration-300"
                >
                  View Solutions
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefensePage;
