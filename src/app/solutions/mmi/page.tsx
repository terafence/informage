/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconRadio,
  IconShield,
  IconAntenna,
  IconSettings,
  IconEye,
  IconCheckbox,
  IconArrowRight,
  IconHeadphones,
  IconCpu,
  IconBattery,
  IconLock,
  IconGlobe,
  IconTruck,
  IconPlane,
  IconFlame,
  IconDroplet,
  IconCertificate,
  IconHeartFilled,
  IconSatellite,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";

export default function MMICommunicationPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark Mode */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                  <IconRadio className="w-4 h-4 mr-2" />
                  Mission-Critical Communication
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  MMI
                  <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Communication
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-2xl text-blue-300 font-semibold">
                    Seamless Connectivity. Uncompromised Clarity. Tactical
                    Advantage.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                    Mission-critical communication systems engineered for
                    military, law enforcement, emergency response, and
                    industrial operations across every terrain and threat
                    scenario.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore Solutions
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
                  src="/images/defense/solutions/mmi-communication-hero.png"
                  alt="MMI Communication Systems"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-white">Multiple</div>
                <div className="text-sm text-gray-300">
                  Deployments across various sites
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview - Light Mode */}
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
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MMI Communication is a leader in ruggedized, high-performance
              communication systems built for dynamic and demanding
              environments. With a legacy of innovation and field-tested
              performance, we empower teams to stay connected, coordinated, and
              in control.
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
                src="/images/defense/solutions/mmi-company-overview.png"
                alt="MMI Communication Company"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In high-stakes environments, reliable communication isn&apos;t
                  a luxury—it&apos;s a lifeline. We deliver mission-critical
                  communication systems that ensure clear, secure, and
                  uninterrupted communication across every terrain and threat
                  scenario.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Multiple
                  </div>
                  <div className="text-gray-600">Sites</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Elite
                  </div>
                  <div className="text-gray-600">Defence Units</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Dark Mode */}
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
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive communication systems engineered for mission success
              across all operational domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Tactical Communication Systems",
                description:
                  "Advanced field communication for tactical operations",
                icon: IconRadio,
                features: [
                  "Manpack Radios",
                  "Handheld Radios (VHF/UHF/HF)",
                  "Secure Voice & Data Transmission",
                  "Interoperability with multi-dimensional Equipment",
                ],
              },
              {
                title: "Command & Control (C2) Integration",
                description:
                  "Real-time coordination and situational awareness systems",
                icon: IconCpu,
                features: [
                  "Real-time audio/data relay for field-to-HQ coordination",
                  "Embedded GPS and mesh networking for live situational awareness",
                  "Integrated with battlefield management systems (BMS)",
                ],
              },
              {
                title: "Vehicle & Base Communication Kits",
                description: "Mobile and stationary communication solutions",
                icon: IconTruck,
                features: [
                  "Long-range vehicle-mounted radios",
                  "Mobile command post connectivity solutions",
                  "Anti-jamming and frequency-hopping capability",
                ],
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>

                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <IconCheckbox className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Encrypted & Secure Communication",
                description: "Advanced security for sensitive operations",
                icon: IconLock,
                features: [
                  "AES-256 and proprietary encryption standards",
                  "Tamper-resistant hardware for sensitive missions",
                  "Secure push-to-talk (PTT) networks with zero-latency relay",
                ],
              },
              {
                title: "Custom Communication Solutions",
                description: "Tailored systems for specialized environments",
                icon: IconSettings,
                features: [
                  "Designed for maritime, aerospace, and energy sectors",
                  "ATEX-rated and IP67/IP68-certified equipment",
                  "Multi-band, multi-protocol systems for diverse use cases",
                ],
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>

                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <IconCheckbox className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features - Light Mode */}
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
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced engineering and robust design ensure reliable performance
              in the most demanding environments
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  title: "Ruggedized Design",
                  description:
                    "Engineered to withstand extreme weather, shock, dust, and water",
                  icon: IconShield,
                },
                {
                  title: "Advanced Voice Clarity",
                  description:
                    "Noise-cancellation, adaptive gain control, and real-time echo suppression",
                  icon: IconHeadphones,
                },
                {
                  title: "Secure Networks",
                  description:
                    "End-to-end encryption with frequency agility to avoid interception or jamming",
                  icon: IconLock,
                },
                {
                  title: "Interoperability",
                  description:
                    "Compatible with legacy and next-gen communication protocols",
                  icon: IconGlobe,
                },
                {
                  title: "Extended Battery Life",
                  description:
                    "Power-efficient systems with swappable battery modules and solar charging options",
                  icon: IconBattery,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/defense/solutions/core-features.png"
                alt="Core Features"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          {/* Feature Stats */}
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { label: "Weather Resistance", value: "IP68", icon: IconDroplet },
              { label: "Operating Range", value: "High", icon: IconAntenna },
              { label: "Battery Life", value: "Immense", icon: IconBattery },
              { label: "Encryption", value: "Strong", icon: IconLock },
              {
                label: "Frequency Bands",
                value: "Multi-Band",
                icon: IconSatellite,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Dark Mode */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted communication solutions across critical sectors and
              high-stakes environments
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Defence & Armed Forces",
                  icon: IconShield,
                  description: "Military operations worldwide",
                },
                {
                  title: "Homeland Security & Border Patrol",
                  icon: IconEye,
                  description: "Critical infrastructure protection",
                },
                {
                  title: "Disaster Relief & Humanitarian Missions",
                  icon: IconHeartFilled,
                  description: "Emergency response coordination",
                },
                {
                  title: "Oil & Gas & Remote Industrial Sites",
                  icon: IconFlame,
                  description: "Hazardous environment communication",
                },
                {
                  title: "Aviation & Maritime Operations",
                  icon: IconPlane,
                  description: "Transportation sector solutions",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 ${
                    index === 4 ? "col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/defense/solutions/industries-served.png"
                alt="Industries Served"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light Mode */}
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
              Why Choose MMI Communication?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Field-proven reliability and comprehensive support for
              mission-critical operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/defense/solutions/why-choose-mmi.png"
                alt="Why Choose MMI"
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
              {[
                {
                  title: "Field-Proven Reliability",
                  description:
                    "Operational across multiple sites and trusted by elite defence units",
                  icon: IconShield,
                },
                {
                  title: "Customization & Integration",
                  description:
                    "Communication systems tailored to your mission needs and integrated with your platforms",
                  icon: IconSettings,
                },
                {
                  title: "Customer Support",
                  description:
                    "Great customer service, diagnostics, and quick resolutions.",
                  icon: IconGlobe,
                },
                {
                  title: "Compliance & Certifications",
                  description:
                    "As per global standards - MIL-STD-810G, ISO 9001, CE, FCC, and ITAR compliance for global deployments",
                  icon: IconCertificate,
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <advantage.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Mode with Gradient */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-black to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Stay Connected. Stay Secure.
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Stay Ahead.
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                MMI Communication equips modern operators with the tools to
                lead, respond, and succeed—no matter the environment. From dense
                urban combat to remote wilderness missions, we ensure your voice
                is heard when it matters most.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Custom Solution
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Support Team
                </motion.button>
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Trusted by elite organizations worldwide!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
