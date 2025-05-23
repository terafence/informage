"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconShield,
  IconRadar2,
  IconDrone,
  IconBomb,
  IconAntenna,
  IconBuildingBank,
  IconPlane,
  IconEye,
  IconLock,
  IconArrowRight,
  IconMilitaryRank,
  IconBuilding,
  IconDropCircleFilled,
  IconCheckbox,
  IconCpu,
  IconWifi,
  IconBolt,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export default function DefenseServicesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Gradient Dark */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex items-center min-h-screen">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm"
                  >
                    <IconShield className="w-5 h-5 mr-2" />
                    Advanced Defense Solutions
                  </motion.div>

                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                    Defense
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Services
                    </span>
                  </h1>

                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Comprehensive defense solutions protecting critical
                    infrastructure, military operations, and civilian assets
                    across diverse threat environments worldwide.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link href="/solutions">
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Explore Solutions
                      <IconArrowRight className="inline-block w-6 h-6 ml-3" />
                    </motion.button>
                  </Link>
                  <Link href="#industries">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 border border-slate-600 text-slate-300 font-semibold rounded-2xl hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
                    >
                      Industry Applications
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
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconRadar2 className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconDrone className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconShield className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: [-15, 15, -15] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconAntenna className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-3xl font-bold text-white">Ultra</div>
                  <div className="text-sm text-slate-300">
                    Threat Protection
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services - Light Mode with Glass Effect */}
        <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Core Defense Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Advanced technological solutions engineered to counter evolving
                threats and protect critical assets across multiple operational
                domains.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  title: "RCIED Countermeasures",
                  description:
                    "Advanced radio frequency jamming systems designed to neutralize remote-controlled improvised explosive devices across multiple threat scenarios.",
                  icon: IconBolt,
                  applications: [
                    "Military convoy protection in high-risk zones",
                    "EOD team support for explosive threat neutralization",
                    "Border security against smuggling operations",
                    "Urban warfare electromagnetic countermeasures",
                  ],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 to-cyan-50",
                },
                {
                  title: "Anti-Drone Systems",
                  description:
                    "Comprehensive unmanned aerial vehicle detection, tracking, and neutralization systems for airspace protection and security.",
                  icon: IconDrone,
                  applications: [
                    "Military base defense against reconnaissance drones",
                    "Airport perimeter security and airspace protection",
                    "Government facility protection for VIP events",
                    "Critical infrastructure safeguarding operations",
                    "Border patrol drone interception capabilities",
                  ],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 to-purple-50",
                },
                {
                  title: "Communications Systems",
                  description:
                    "Secure, reliable communication networks enabling mission-critical operations across challenging environments and threat conditions.",
                  icon: IconAntenna,
                  applications: [
                    "Defense and armed forces communication networks",
                    "Homeland security coordination systems",
                    "Disaster relief communication infrastructure",
                    "Remote industrial site connectivity solutions",
                    "Aviation and maritime operational communications",
                  ],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 to-emerald-50",
                },
                {
                  title: "Explosive Ordnance Disposal",
                  description:
                    "Specialized equipment and systems for safe detection, handling, and disposal of explosive threats in various operational contexts.",
                  icon: IconBomb,
                  applications: [
                    "Military EOD operational support",
                    "Law enforcement bomb squad assistance",
                    "Airport and transit security screening",
                    "Counter-terrorism unit equipment",
                    "UN peacekeeping and demining operations",
                  ],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 to-red-50",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div
                    className={`relative p-10 bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm`}
                  >
                    <div
                      className={`inline-flex w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      <Link
                        href={
                          service.title === "RCIED Countermeasures"
                            ? "/solutions/rcied"
                            : service.title === "Anti-Drone Systems"
                            ? "/solutions/anti"
                            : service.title === "Communications Systems"
                            ? "/solutions/mmi"
                            : service.title === "Explosive Ordnance Disposal"
                            ? "/solutions/bomb"
                            : "/solutions" // Default link if none of the above match
                        }
                        className="flex items-center justify-between w-full"
                      >
                        <span>{service.title}</span>

                        <IconExternalLink
                          className="flex-shrink-0"
                          style={{ color: "#52b1fa" }} // Changed color to #52b1fa
                          size={24}
                        />
                      </Link>
                    </h3>
                    <p className="text-slate-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">
                        Key Applications:
                      </h4>
                      {service.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="flex items-start space-x-3"
                        >
                          <IconCheckbox className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 leading-relaxed">
                            {app}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve - Dark Mode with Neon Accents */}
        <section
          className="py-32 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
          id="industries"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Industries We Protect
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Delivering specialized defense solutions across critical sectors
                requiring the highest levels of security and operational
                reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Defense & Armed Forces",
                  description:
                    "Comprehensive military solutions for tactical operations, base security, and force protection across all operational domains.",
                  icon: IconMilitaryRank,
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Homeland Security",
                  description:
                    "Border protection systems, immigration control, and domestic security infrastructure for national safety.",
                  icon: IconShield,
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  title: "Critical Infrastructure",
                  description:
                    "Protection systems for power plants, data centers, telecommunications, and essential utility networks.",
                  icon: IconBuilding,
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "Aviation & Maritime",
                  description:
                    "Specialized security solutions for airports, seaports, and transportation hubs ensuring operational continuity.",
                  icon: IconPlane,
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: "Oil & Gas Operations",
                  description:
                    "Remote site protection, pipeline security, and industrial facility defense in challenging environments.",
                  icon: IconDropCircleFilled,
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Government Facilities",
                  description:
                    "High-security installations, diplomatic missions, and public building protection systems.",
                  icon: IconBuildingBank,
                  gradient: "from-teal-500 to-cyan-500",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                    <div
                      className={`inline-flex w-14 h-14 bg-gradient-to-r ${industry.gradient} rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {industry.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400/50 group-hover:to-blue-400/50 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Capabilities - Light Mode with Modern Cards */}
        <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge technology platforms delivering superior
                performance in the most demanding operational environments.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {[
                  {
                    title: "Real-Time Threat Detection",
                    description:
                      "AI-powered systems providing instantaneous threat identification and classification across multiple sensor networks.",
                    icon: IconEye,
                    color: "blue",
                  },
                  {
                    title: "Adaptive Response Systems",
                    description:
                      "Dynamic countermeasure deployment based on threat type, environment, and mission parameters.",
                    icon: IconCpu,
                    color: "purple",
                  },
                  {
                    title: "Multi-Spectrum Operations",
                    description:
                      "Comprehensive coverage across radio frequency, optical, and acoustic domains for complete situational awareness.",
                    icon: IconWifi,
                    color: "green",
                  },
                  {
                    title: "Ruggedized Platforms",
                    description:
                      "Military-standard equipment designed for extreme environments and continuous operational demands.",
                    icon: IconLock,
                    color: "orange",
                  },
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 bg-${capability.color}-100 rounded-2xl flex items-center justify-center`}
                    >
                      <capability.icon
                        className={`w-7 h-7 text-${capability.color}-600`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        Maximum
                      </div>
                      <div className="text-sm text-slate-600">
                        System Reliability
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        Minimal
                      </div>
                      <div className="text-sm text-slate-600">
                        Response Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        Highly
                      </div>
                      <div className="text-sm text-slate-600">
                        Operation Capable
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        Multiple
                      </div>
                      <div className="text-sm text-slate-600">Threat Types</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Gradient Dark with Animation */}
        <section className="py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
            ></motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Secure Your Operations.
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Defend Your Future.
                </span>
              </h2>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Partner with us to implement next-generation defense solutions
                tailored to your operational requirements and threat
                environment.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    Request Consultation
                    <IconArrowRight className="inline-block w-6 h-6 ml-3" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
