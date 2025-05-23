"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import {
  IconShield,
  IconHeart,
  IconEye,
  IconSettings,
  IconTemperature,
  IconWeight,
  IconBolt,
  IconCheckbox,
  IconArrowRight,
  IconUser,
  IconTool,
  IconCertificate,
  IconActivity,
  IconShieldFilled,
  IconHelmet,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";

export default function BombDisposalSuitsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark Mode */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-black to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                  className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium"
                >
                  <IconShield className="w-4 h-4 mr-2" />
                  EOD Protection Systems
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Bomb Disposal
                  <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Suits
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Ultimate protection for EOD professionals. Advanced ballistic
                  defense, mobility, and life support systems engineered for the
                  most dangerous missions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Catalog
                    <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Safety Standards
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
                  src="/images/defense/solutions/bomb-disposal-suit-hero.png"
                  alt="Bomb Disposal Suit"
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
                <div className="text-3xl font-bold text-white">Modern</div>
                <div className="text-sm text-gray-300">
                  Ballistic Protection
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Features - Light Mode */}
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
              Maximum Protection Engineering
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advanced ballistic protection, integrated life support, and
              enhanced mobility systems designed to keep EOD professionals safe
              in the most hazardous environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/defense/solutions/suit-protection-layers.png"
                alt="Protection Layers"
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
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <IconShieldFilled className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multi-Layer Ballistic Protection
                    </h3>
                    <p className="text-gray-600">
                      Advanced ceramic and aramid fiber layers providing
                      comprehensive fragmentation and blast protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <IconTemperature className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Climate Control System
                    </h3>
                    <p className="text-gray-600">
                      Integrated cooling and heating systems maintain optimal
                      body temperature during extended operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <IconHeart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Life Support Integration
                    </h3>
                    <p className="text-gray-600">
                      Advanced air filtration, hydration systems, and biometric
                      monitoring for operator safety.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Protection Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Blast Protection", value: "Absolute", icon: IconBolt },
              {
                label: "Fragment Velocity",
                value: "Great",
                icon: IconShield,
              },
              {
                label: "Operating Time",
                value: "Higher",
                icon: IconActivity,
              },
              { label: "Weight", value: "Optimal", icon: IconWeight },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-red-600" />
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

      {/* Suit Variants - Dark Mode */}
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
              Professional Suit Configurations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized protection systems engineered for different threat
              levels and operational requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heavy EOD Suit",
                level: "Maximum Protection",
                description:
                  "Full-body protection for high-risk explosive ordnance disposal operations",
                image: "/images/defense/solutions/heavy-eod-suit.png",
                features: [
                  "Complete ballistic coverage",
                  "Integrated life support",
                  "Advanced helmet system",
                  "Tool attachment points",
                  "Communication systems",
                ],
                specs: {
                  protection: "Maximum",
                  weight: "Optimal",
                  duration: "Feasible",
                },
              },
              {
                title: "Medium EOD Suit",
                level: "Balanced Protection",
                description:
                  "Optimized balance of protection and mobility for varied EOD scenarios",
                image: "/images/defense/solutions/medium-eod-suit.png",
                features: [
                  "Core body protection",
                  "Enhanced mobility",
                  "Modular components",
                  "Quick-release system",
                  "Lightweight design",
                ],
                specs: {
                  protection: "Medium",
                  weight: "Moderate",
                  duration: "Standard",
                },
              },
              {
                title: "Search Suit",
                level: "Enhanced Mobility",
                description:
                  "Lightweight protection for search operations and preliminary assessments",
                image: "/images/defense/solutions/search-eod-suit.png",
                features: [
                  "Vital organ protection",
                  "Maximum mobility",
                  "Quick deployment",
                  "Minimal weight",
                  "Extended operation",
                ],
                specs: {
                  protection: "General",
                  weight: "Standard",
                  duration: "Usual",
                },
              },
            ].map((suit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <img
                      src={suit.image}
                      alt={suit.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-3 py-1 text-red-300 text-sm font-medium">
                      {suit.level}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {suit.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {suit.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {suit.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <IconCheckbox className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">
                          {suit.specs.protection}
                        </div>
                        <div className="text-xs text-gray-400">Protection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">
                          {suit.specs.weight}
                        </div>
                        <div className="text-xs text-gray-400">Weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">
                          {suit.specs.duration}
                        </div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section - Light Mode */}
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
              Trusted by elite EOD units worldwide for the most challenging
              explosive ordnance disposal operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Military EOD Operations",
                    icon: IconUser,
                    description: "Elite military units worldwide",
                  },
                  {
                    title: "Law Enforcement",
                    icon: IconShield,
                    description: "Police bomb squad operations",
                  },
                  {
                    title: "Airport Security",
                    icon: IconEye,
                    description: "Transit and critical infrastructure",
                  },
                  {
                    title: "Counter-Terrorism",
                    icon: IconBolt,
                    description: "Specialized threat response units",
                  },
                  {
                    title: "UN Peacekeeping",
                    icon: IconHeart,
                    description: "International demining efforts",
                  },
                  {
                    title: "Emergency Response",
                    icon: IconActivity,
                    description: "Rapid deployment scenarios",
                  },
                ].map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <app.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/defense/solutions/eod-team-operation.png"
                alt="EOD Team Operation"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          {/* Threat Protection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Superior Protection Against
              </h3>
              <p className="text-gray-600">
                Comprehensive defense systems engineered for multiple threat
                scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Blast Overpressure",
                  description: "Advanced pressure wave mitigation",
                },
                {
                  title: "Fragmentation",
                  description: "Multi-layer ballistic protection",
                },
                {
                  title: "Heat & Flame",
                  description: "Thermal protection systems",
                },
                {
                  title: "Secondary Debris",
                  description: "Impact-resistant outer shell",
                },
              ].map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconShield className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {threat.title}
                  </h4>
                  <p className="text-sm text-gray-600">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications - Dark Mode */}
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
              Advanced Technical Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge engineering and materials science deliver
              uncompromising protection and performance
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
                  title: "NIJ-Level Protection",
                  description:
                    "Meets or exceeds international standards for ballistic and fragmentation resistance",
                  icon: IconCertificate,
                },
                {
                  title: "Ergonomic Design",
                  description:
                    "Enhanced mobility with articulated joints and adjustable components for long-duration missions",
                  icon: IconSettings,
                },
                {
                  title: "Integrated Cooling System",
                  description:
                    "Optional internal ventilation or liquid cooling systems to maintain user comfort in extreme conditions",
                  icon: IconTemperature,
                },
                {
                  title: "Helmet & Visor Assembly",
                  description:
                    "High-clarity blast-resistant visor with built-in communication systems and optional heads-up display (HUD)",
                  icon: IconHelmet,
                },
                {
                  title: "Quick-Release System",
                  description:
                    "Emergency doffing mechanism for rapid removal under hazardous conditions",
                  icon: IconBolt,
                },
                {
                  title: "Modular Components",
                  description:
                    "Interchangeable parts for easy repair and customization based on mission needs",
                  icon: IconTool,
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
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <img
                src="/images/defense/solutions/suit-technical-features.png"
                alt="Technical Features"
                className="w-full rounded-2xl shadow-xl"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-2">International</div>
                  <div className="text-sm text-gray-300">
                    Standards Compliant
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-2">Best</div>
                  <div className="text-sm text-gray-300">Quality Assurance</div>
                </div>
              </div>
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
              Why Choose Our Bomb Disposal Suits?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battle-tested protection trusted by elite EOD units across the
              globe
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
                src="/images/defense/solutions/eod-global-deployment.png"
                alt="Global Deployment"
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
                  title: "Battle-Tested Protection",
                  description:
                    "Trusted by elite EOD units across the globe with proven performance in real-world scenarios",
                  icon: IconShield,
                },
                {
                  title: "Custom Fitting Available",
                  description:
                    "Suits tailored to individual measurements for optimal performance and comfort during extended operations",
                  icon: IconUser,
                },
                {
                  title: "Global Support Network",
                  description:
                    "Training, maintenance, and post-sale service from certified field experts worldwide",
                  icon: IconActivity,
                },
                {
                  title: "Certified & Compliant",
                  description:
                    "Meets international safety standards for maximum reliability",
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
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <advantage.icon className="w-6 h-6 text-red-600" />
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
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-black to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                Your Safety is Our
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Equip your personnel with the most reliable protection in the
                field. Our Bomb Disposal Suits are not just gear—they&apos;re a
                lifeline in explosive environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Quote
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Sales Team
                </motion.button>
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Trusted by military and law enforcement agencies worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
