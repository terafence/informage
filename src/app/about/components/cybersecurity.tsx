import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";
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

const CybersecurityPage = () => {
  return (
    <div className="min-h-screen flex flex-col" id="cybersecurity">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/it/hero.png"
            alt="IT & Cybersecurity Services Hero"
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
              IT & Cybersecurity Services
            </motion.h1>

            <motion.p
              variants={slideIn}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Enterprise-grade security solutions protecting your digital assets
              through advanced threat detection and comprehensive network
              defense.
            </motion.p>

            <motion.div variants={fadeIn}>
              <Link href="#cyber">
                <Button className="group px-6 py-3 text-lg bg-white text-zinc-900 hover:bg-white/90 transition-all duration-300">
                  Explore Services
                  <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 02 - Left Text / Right Image (SOC) */}
      <section className="bg-zinc-900 py-24 overflow-hidden" id="cyber">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <Badge className="bg-violet-500/10 text-violet-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Threat Monitoring
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Security Operations Center
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our 24/7 Security Operations Center provides continuous
                monitoring and incident response capabilities with real-time
                threat intelligence. Staffed by certified security analysts
                using advanced SIEM platforms, we deliver proactive defense
                against evolving cyber threats across your entire digital
                ecosystem.
              </p>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="group border-violet-400/30 text-violet-500 hover:text-violet-300 hover:bg-violet-950/50 hover:border-violet-400/50 transition-all duration-300"
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
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-violet-900/20">
                <Image
                  src="/images/it/section02.png"
                  alt="Security Operations Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 03 - Right Text / Left Image (Data Migration) */}
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
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-cyan-900/20">
                <Image
                  src="/images/it/section03.png"
                  alt="IT & Network Security"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-cyan-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-2"
            >
              <Badge className="bg-cyan-500/10 text-cyan-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Secure Migration
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Data Migration
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A well-executed data migration is more than a transfer—it&#39;s
                a transformation. Informage ensures your data moves with
                integrity, security, and value, setting you up for long-term
                success.
              </p>
              <Link href="/solutions/data">
                <Button
                  variant="outline"
                  className="group border-cyan-400/30 text-cyan-500 hover:text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  Discover Solutions
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 04 - Left Text / Right Image (Cybersecurity) */}
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
              <Badge className="bg-emerald-500/10 text-emerald-400 mb-6 border-0 py-1.5 px-3 text-sm">
                Threat Prevention
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced Cybersecurity
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our proactive cybersecurity services combine threat intelligence
                with advanced endpoint protection and behavioral analytics to
                identify and neutralize sophisticated attacks. We implement
                customized security frameworks aligned with industry standards
                to protect your critical assets and sensitive data.
              </p>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="group border-emerald-400/30 text-emerald-500 hover:text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400/50 transition-all duration-300"
                >
                  Explore Services
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
                  src="/images/it/section04.png"
                  alt="Advanced Cybersecurity"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 05 - Right Text / Left Image (System Integration) */}
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
                  src="/images/it/section05.png"
                  alt="Secure Cloud Services"
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
                Secure Integration
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                System Integration
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We offer tailored IT integration services that connect disparate
                technologies into a unified, high-performing ecosystem. Whether
                you&#39;re modernizing legacy systems, merging enterprise
                platforms, or deploying new digital architecture, we ensure
                smooth transitions, data integrity, and operational continuity.
              </p>
              <Link href="/solutions/system">
                <Button
                  variant="outline"
                  className="group border-blue-400/30 text-blue-500 hover:text-blue-300 hover:bg-blue-950/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  View Solutions
                  <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
            Ready to Secure Your Digital Infrastructure?
          </h2>
          <p className="text-lg text-zinc-700 mb-10 max-w-2xl mx-auto">
            Connect with our cybersecurity experts to assess your security
            posture and develop a tailored protection strategy for your
            organization.
          </p>
          <Link href="/contact">
            <Button className="group px-8 py-6 text-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-300">
              Schedule a Security Assessment
              <IconExternalLink className="ml-2 w-5 h-5 transition-all group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
