"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import {
  IconNetwork,
  IconCloud,
  IconDatabase,
  IconApi,
  IconShield,
  IconSettings,
  IconBolt,
  IconCheckbox,
  IconArrowRight,
  IconCpu,
  IconBuilding,
  IconDeviceDesktop,
  IconLock,
  IconRefresh,
  IconChartBar,
  IconUsers,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";

export default function SystemIntegrationPage() {
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
                  <IconNetwork className="w-4 h-4 mr-2" />
                  Enterprise Technology Solutions
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  IT System
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Integration
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Unifying Technology, Enhancing Performance. Bridging Systems. 
                  Empowering Business. Accelerating Transformation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Schedule Consultation
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
                  src="/images/it/system-integration-hero.png"
                  alt="IT System Integration"
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
                <div className="text-3xl font-bold text-white">Seamless</div>
                <div className="text-sm text-gray-300">
                  Digital Transformation
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Light Mode */}
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
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer tailored IT integration services that connect disparate technologies into a unified, 
              high-performing ecosystem. Whether you&apos;re modernizing legacy systems, merging enterprise platforms, 
              or deploying new digital architecture, we ensure smooth transitions, data integrity, and operational continuity.
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
                src="/images/it/integration-overview.png"
                alt="System Integration Overview"
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
                    <IconDatabase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Seamless Data Flow
                    </h3>
                    <p className="text-gray-600">
                      Real-time synchronization across all systems with automated workflows and centralized dashboards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <IconCloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cloud & Hybrid Integration
                    </h3>
                    <p className="text-gray-600">
                      Secure integration between on-premises systems and cloud services with unified architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <IconShield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Security & Compliance
                    </h3>
                    <p className="text-gray-600">
                      Embedded cybersecurity frameworks with compliance to GDPR, HIPAA, ISO 27001 standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Integration Services - Dark Mode */}
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
              Our Core Integration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for every integration challenge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IconBuilding,
                title: "Enterprise Application Integration (EAI)",
                description: "Connect ERP, CRM, HRM, and SCM platforms with real-time data synchronization and workflow automation",
                gradient: "from-blue-500 to-cyan-500",
                features: ["ERP/CRM Integration", "Real-time Sync", "Workflow Automation", "Centralized Dashboards"]
              },
              {
                icon: IconApi,
                title: "API & Middleware Development",
                description: "Custom APIs and middleware for seamless interoperability with modern integration protocols",
                gradient: "from-purple-500 to-pink-500",
                features: ["RESTful APIs", "SOAP/JSON/XML", "SOA Architecture", "Microservices"]
              },
              {
                icon: IconCloud,
                title: "Cloud & Hybrid Integration",
                description: "Integration between on-premises systems and cloud services with secure data migration",
                gradient: "from-green-500 to-emerald-500",
                features: ["AWS/Azure/GCP", "Data Migration", "Hybrid Cloud", "IAM Integration"]
              },
              {
                icon: IconNetwork,
                title: "Network & Infrastructure Integration",
                description: "Unified network architecture design with SD-WAN, VPN, and IoT device synchronization",
                gradient: "from-orange-500 to-red-500",
                features: ["Network Design", "SD-WAN/VPN", "Firewall Integration", "IoT Connectivity"]
              },
              {
                icon: IconLock,
                title: "Security & Compliance Integration",
                description: "Embedded cybersecurity frameworks with industry standard compliance solutions",
                gradient: "from-indigo-500 to-blue-500",
                features: ["Security Frameworks", "Compliance Standards", "Identity Federation", "SSO Solutions"]
              },
              {
                icon: IconSettings,
                title: "Custom Integration Projects",
                description: "Legacy modernization, AI/ML integration, and system consolidation for M&A activities",
                gradient: "from-teal-500 to-cyan-500",
                features: ["Legacy Modernization", "AI/ML Integration", "Data Analytics", "M&A Consolidation"]
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`inline-flex w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <IconCheckbox className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Light Mode */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized integration solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Government & Defence", icon: IconShield, image: "/images/industries/government.png" },
              { title: "Telecommunications", icon: IconNetwork, image: "/images/industries/telecom.png" },
              { title: "Financial Services", icon: IconChartBar, image: "/images/industries/finance.png" },
              { title: "Healthcare & Pharmaceuticals", icon: IconUsers, image: "/images/industries/healthcare.png" },
              { title: "Energy & Utilities", icon: IconBolt, image: "/images/industries/energy.png" },
              { title: "Manufacturing & Supply Chain", icon: IconSettings, image: "/images/industries/manufacturing.png" },
              { title: "Smart Cities & Infrastructure", icon: IconBuilding, image: "/images/industries/smart-cities.png" },
              { title: "Information Technology", icon: IconCpu, image: "/images/industries/it.png" },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2">
                      <industry.icon className="w-4 h-4 text-white flex-shrink-0" />
                      <h3 className="text-sm font-semibold text-white">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approach - Dark Mode */}
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
              Our Integration Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful system integration
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Discovery",
                description: "Analyze business goals, existing systems, and integration requirements",
                icon: IconUsers,
              },
              {
                step: "02",
                title: "Architecture Design",
                description: "Develop a scalable, secure, and future-ready integration framework",
                icon: IconDeviceDesktop,
              },
              {
                step: "03",
                title: "Implementation & Testing",
                description: "Seamless deployment with rigorous QA, performance tuning, and failover planning",
                icon: IconSettings,
              },
              {
                step: "04",
                title: "Support & Optimization",
                description: "Ongoing monitoring, updates, and performance enhancements",
                icon: IconRefresh,
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{phase.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
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
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise and proven results in enterprise integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vendor-Neutral Expertise",
                description: "We work with all major platforms (SAP, Oracle, Microsoft, Salesforce, etc.)",
                icon: IconCheckbox,
                color: "text-green-600"
              },
              {
                title: "Agile Deployment",
                description: "Accelerated project timelines with minimal disruption to operations",
                icon: IconBolt,
                color: "text-blue-600"
              },
              {
                title: "Scalable Solutions",
                description: "Designed to evolve with your business and future requirements",
                icon: IconRefresh,
                color: "text-purple-600"
              },
              {
                title: "Certified Professionals",
                description: "Skilled in DevOps, cloud, cybersecurity, and enterprise architecture",
                icon: IconUsers,
                color: "text-orange-600"
              },
              {
                title: "Global Support",
                description: "Round-the-clock technical support and post-integration maintenance",
                icon: IconShield,
                color: "text-indigo-600"
              },
              {
                title: "Proven Track Record",
                description: "Successful integrations across diverse industries and complex environments",
                icon: IconChartBar,
                color: "text-teal-600"
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
                  <benefit.icon className={`w-8 h-8 ${benefit.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Mode */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Connect Everything.
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Empower Everyone.
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you&apos;re building a smart enterprise, a secure government IT backbone, 
              or a fully automated industrial system, Informage ensures your systems work better—together.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Integration Journey
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  Schedule Consultation
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