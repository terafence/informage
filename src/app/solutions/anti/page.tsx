"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import {
  IconDrone,
  IconRadar2,
  IconEye,
  IconTarget,
  IconShield,
  IconCpu,
  IconBolt,
  IconSettings,
  IconCheckbox,
  IconArrowRight,
  IconAntenna,
  IconBuildingSkyscraper,
  IconPlane,
  IconMilitaryRank,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";
export default function AntiDronePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark Mode */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                  className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                >
                  <IconDrone className="w-4 h-4 mr-2" />
                  Counter-UAS Technology
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Anti-Drone
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Systems
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Securing the skies against unmanned threats with
                  next-generation Counter-UAS technology for modern threat
                  environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Demo
                    <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Get Specs
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
                  src="/images/defense/solutions/anti-drone-hero.png"
                  alt="Anti-Drone System"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-white">360°</div>
                <div className="text-sm text-gray-300">Detection Coverage</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counter-UAS Ecosystem - Light Mode */}
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
              Complete Counter-UAS Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Multi-layered defense combining advanced sensors, AI-driven
              analysis, and precision countermeasures for comprehensive drone
              threat neutralization across all operational environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Detection",
                description:
                  "Radar, RF scanning, acoustic sensors, and EO/IR cameras identify drones from long range",
                icon: IconRadar2,
                color: "blue",
                image: "/images/defense/solutions/drone-detection.png",
              },
              {
                step: "02",
                title: "Tracking",
                description:
                  "Real-time telemetry and AI-assisted tracking of drone trajectory and pilot location",
                icon: IconTarget,
                color: "purple",
                image: "/images/defense/solutions/drone-tracking.png",
              },
              {
                step: "03",
                title: "Identification",
                description:
                  "Classify drone model, payload, and threat level with RF fingerprinting",
                icon: IconEye,
                color: "green",
                image: "/images/defense/solutions/drone-identification.png",
              },
              {
                step: "04",
                title: "Neutralization",
                description:
                  "Deploy countermeasures including jamming, spoofing, and kinetic interdiction",
                icon: IconBolt,
                color: "red",
                image: "/images/defense/solutions/drone-neutralization.png",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div
                      className={`absolute top-4 left-4 w-12 h-12 bg-${phase.color}-500 rounded-xl flex items-center justify-center`}
                    >
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-75">{phase.step}</div>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Advanced System Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology engineered for superior drone threat
              detection and neutralization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IconCpu,
                title: "Multi-Sensor Fusion",
                description:
                  "Integrates radar, RF, visual, and thermal inputs for 360° coverage with minimal false positives",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: IconEye,
                title: "AI-Driven Classification",
                description:
                  "Machine learning algorithms for real-time threat assessment and response recommendation",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: IconSettings,
                title: "Modular & Scalable",
                description:
                  "Configurable for mobile, fixed-site, and tactical field deployment scenarios",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: IconBolt,
                title: "Multi-Response Options",
                description:
                  "Jammer, spoofing, net guns, lasers, and drone-on-drone interceptor capabilities",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: IconAntenna,
                title: "User-Friendly Interface",
                description:
                  "Centralized command and control dashboard with map-based tracking and alerts",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: IconShield,
                title: "Battle-Tested Reliability",
                description:
                  "Operational in conflict zones and high-security installations worldwide",
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
              Critical Protection Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive drone defense across military, civilian, and
              infrastructure sectors
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Military Bases",
                description:
                  "Defend bases and convoys against drone surveillance or IED delivery",
                image: "/images/defense/solutions/military-base-protection.png",
                icon: IconMilitaryRank,
              },
              {
                title: "Airports & Seaports",
                description:
                  "Prevent disruptions, espionage, and contraband delivery in secure airspace",
                image: "/images/defense/solutions/airport-security.png",
                icon: IconPlane,
              },
              {
                title: "Government Facilities",
                description:
                  "Protect heads of state, diplomats, and public gatherings from aerial threats",
                image: "/images/defense/solutions/government-protection.png",
                icon: IconBuildingSkyscraper,
              },
              {
                title: "Critical Infrastructure",
                description:
                  "Safeguard nuclear plants, power stations, and data centers from espionage",
                image:
                  "/images/defense/solutions/infrastructure-protection.png",
                icon: IconBolt,
              },
              {
                title: "Border Security",
                description:
                  "Detect and intercept drones used for smuggling or reconnaissance",
                image: "/images/defense/solutions/border-drone-security.png",
                icon: IconShield,
              },
              {
                title: "VIP Events",
                description:
                  "Aerial threat protection for high-profile gatherings and ceremonies",
                image: "/images/defense/solutions/vip-event-security.png",
                icon: IconTarget,
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
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                  <div className="relative h-48">
                    <img
                      src={application.image}
                      alt={application.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <application.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {application.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600">{application.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Variants - Dark Mode */}
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
              Tailored System Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable counter-drone systems engineered for every operational
              requirement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed-Site Systems",
                description:
                  "Continuous protection of sensitive locations with integrated perimeter security",
                image: "/images/defense/solutions/fixed-site-anti-drone.png",
                features: [
                  "24/7 Operation",
                  "Maximum Range",
                  "Integrated Security",
                  "Permanent Installation",
                ],
                price: "Enterprise",
              },
              {
                title: "Mobile Counter-UAS",
                description:
                  "Rapid deployment on vehicles with autonomous detection and neutralization",
                image: "/images/defense/solutions/mobile-anti-drone.png",
                features: [
                  "Quick Deployment",
                  "Vehicle Mounted",
                  "Autonomous Operation",
                  "Tactical Mobility",
                ],
                price: "Professional",
              },
              {
                title: "Man-Portable Solutions",
                description:
                  "Lightweight systems for field operatives and quick-reaction forces",
                image: "/images/defense/solutions/portable-anti-drone.png",
                features: [
                  "Lightweight Design",
                  "Handheld Operation",
                  "Quick Response",
                  "Field Ready",
                ],
                price: "Standard",
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
                  <div className="relative h-56">
                    <img
                      src={variant.image}
                      alt={variant.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {variant.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {variant.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{variant.description}</p>

                    <div className="space-y-2 mb-6">
                      {variant.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <IconCheckbox className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link href="#">
                      <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Mode */}
      <section className="py-24 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Take Control of the
              <span className="block text-cyan-600">Low-Altitude Threat</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t let rogue drones compromise your mission or safety. Our
              Anti-Drone Solutions offer proactive airspace defense for the
              modern era.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Consultation
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Live Demonstration
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
