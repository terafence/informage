"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import {
  IconShield,
  IconRadar2,
  IconDeviceMobile,
  IconTruck,
  IconTarget,
  IconWifi,
  IconBolt,
  IconSettings,
  IconCheckbox,
  IconArrowRight,
  IconCpu,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";
export default function RCIEDJammerPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark Mode */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                >
                  <IconShield className="w-4 h-4 mr-2" />
                  Electronic Warfare Solutions
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  RCIED
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Jammers
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Countering Radio-Controlled IED Threats with next-generation
                  electronic countermeasure technology for battlefield
                  protection.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request Demo
                    <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Technical Specs
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/defense/solutions/rcied-jammer-hero.png"
                  alt="RCIED Jammer System"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-white">Advanced</div>
                <div className="text-sm text-gray-300">
                  Threat Neutralization
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are RCIED Jammers - Light Mode */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Are RCIED Jammers?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specialized electronic devices designed to prevent remote
              detonation of IEDs triggered by radio frequency signals. Our
              systems emit powerful, targeted radio waves across broad spectrum
              frequencies to effectively block activation signals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/defense/solutions/rcied-technology.png"
                alt="RCIED Jammer Technology"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <IconRadar2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Advanced RF Detection
                    </h3>
                    <p className="text-gray-600">
                      Continuous monitoring and analysis of radio frequency
                      spectrum to identify potential threats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <IconBolt className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      High-Power Jamming
                    </h3>
                    <p className="text-gray-600">
                      Powerful signal disruption across multiple frequency bands
                      to neutralize threats effectively.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <IconCpu className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Smart Algorithms
                    </h3>
                    <p className="text-gray-600">
                      AI-driven threat assessment and adaptive response based on
                      real-time signal intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Dark Mode */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military-grade features engineered for maximum effectiveness in
              diverse threat environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IconWifi,
                title: "Wideband Coverage",
                description:
                  "Disrupts signals across VHF/UHF/GSM/3G/4G/5G/Wi-Fi frequency bands",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: IconBolt,
                title: "High-Power Output",
                description:
                  "Counters long-range and high-power triggering devices effectively",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: IconSettings,
                title: "Modular Design",
                description:
                  "Scalable for man-portable, vehicle-mounted, and convoy applications",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: IconCpu,
                title: "Smart Algorithms",
                description:
                  "Adaptive response based on threat type and SIGINT inputs",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: IconShield,
                title: "MIL-STD Compliance",
                description:
                  "Built to withstand harsh environments and extreme temperatures",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: IconTarget,
                title: "Real-Time Control",
                description:
                  "Intuitive interfaces for operational flexibility and frequency management",
                gradient: "from-teal-500 to-cyan-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div
                    className={`inline-flex w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Light Mode */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mission-Critical Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deployed across diverse operational environments for maximum force
              protection
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Military Convoys",
                description:
                  "Protection against roadside IEDs in high-threat environments",
                image: "/images/defense/solutions/military-convoy.png",
                icon: IconTruck,
              },
              {
                title: "EOD Teams",
                description:
                  "Safe approach and neutralization of suspected explosive threats",
                image: "/images/defense/solutions/eod-team.png",
                icon: IconShield,
              },
              {
                title: "Border Security",
                description:
                  "Prevent smuggling and insurgent attacks via remote explosives",
                image: "/images/defense/solutions/border-security.png",
                icon: IconTarget,
              },
              {
                title: "Urban Warfare",
                description:
                  "Effective jamming in complex electromagnetic environments",
                image: "/images/defense/solutions/urban-operations.png",
                icon: IconDeviceMobile,
              },
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={application.image}
                    alt={application.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <application.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {application.title}
                      </h3>
                    </div>
                    <p className="text-gray-200">{application.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Variants - Dark Mode */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              System Variants
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for every operational requirement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manpack Jammers",
                description:
                  "Lightweight and portable systems for dismounted troops and special operations",
                image: "/images/defense/solutions/manpack-jammer.png",
                features: [
                  "Lightweight Design",
                  "Long Battery Life",
                  "Quick Deployment",
                  "Special Ops Ready",
                ],
              },
              {
                title: "Vehicle-Mounted Jammers",
                description:
                  "High-power systems integrated into tactical and armoured vehicles for mobile protection",
                image: "/images/defense/solutions/vehicle-jammer.png",
                features: [
                  "High Power Output",
                  "360° Coverage",
                  "Vehicle Integration",
                  "Convoy Protection",
                ],
              },
              {
                title: "Fixed-Site Jammers",
                description:
                  "Permanent installations for strategic checkpoints and critical infrastructure",
                image: "/images/defense/solutions/fixed-site-jammer.png",
                features: [
                  "Permanent Installation",
                  "Maximum Range",
                  "24/7 Operation",
                  "Infrastructure Protection",
                ],
              },
            ].map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={variant.image}
                      alt={variant.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {variant.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{variant.description}</p>

                    <div className="space-y-2">
                      {variant.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <IconCheckbox className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Mode */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Protect Forces. Neutralize Threats.
              <span className="block text-blue-600">Save Lives.</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invest in operational safety with our next-generation RCIED
              Jamming Systems. Contact us today for specifications,
              demonstrations, or procurement inquiries.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Quote
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
