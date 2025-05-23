"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconDatabase,
  IconCloud,
  IconServerBolt,
  IconBrandAws,
  IconBrandAzure,
  IconBrandGoogle,
  IconExternalLink,
  IconNetwork,
  IconCpu,
  IconChartArrows,
  IconArrowRight,
  IconPhone,
  IconCreditCard,
  IconHeart,
  IconBolt,
  IconTruck,
  IconHome,
  IconSettings,
  IconBrandMysql,
  IconBrandMongodb,
  IconCloudComputing,
  IconApiApp,
  IconTransform,
  IconCheckbox,
  IconCircuitBattery,
  IconAnalyze,
  IconShieldCheck,
  IconCode,
} from "@tabler/icons-react";
import Link from "next/link";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

export default function ITServicesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Warm Gradient */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-red-900 to-green-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                    className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-200 text-sm font-medium backdrop-blur-sm"
                  >
                    <IconServerBolt className="w-5 h-5 mr-2" />
                    Enterprise IT Solutions
                  </motion.div>

                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                    IT
                    <span className="block bg-gradient-to-r from-blue-300 via-red-300 to-green-500 bg-clip-text text-transparent">
                      Services
                    </span>
                  </h1>

                  <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
                    Comprehensive IT solutions enabling digital transformation,
                    seamless data migration, and robust system integration
                    across diverse enterprise environments.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link href="/solutions">
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 bg-gradient-to-r from-blue-700 to-red-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Explore Solutions
                      <IconArrowRight className="inline-block w-6 h-6 ml-3" />
                    </motion.button>
                  </Link>
                  <Link href="#industries">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 border border-slate-500 text-slate-200 font-semibold rounded-2xl hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
                    >
                      Explore Industries
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
                  <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconDatabase className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconCloud className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconNetwork className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: [-15, 15, -15] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center"
                      >
                        <IconCpu className="w-10 h-10 text-white" />
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
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-slate-200">
                    Migration Success Rate
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services - Light Mode with Modern Design */}
        <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-orange-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-red-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Core IT Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Advanced technology services designed to modernize your
                infrastructure, streamline operations, and accelerate digital
                transformation initiatives.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {[
                {
                  title: "Data Migration Services",
                  description:
                    "Seamless data migration across platforms, databases, and cloud environments with zero downtime and complete data integrity assurance.",
                  icon: IconTransform,
                  platforms: [
                    "Oracle, MySQL, SQL Server, PostgreSQL, MongoDB",
                    "AWS, Azure, Google Cloud Platform",
                    "SAP, Salesforce, Microsoft Dynamics, NetSuite",
                    "Talend, Informatica, Apache NiFi, Azure Data Factory",
                    "ETL/ELT processes with AWS Glue integration",
                  ],
                  gradient: "from-blue-600 to-red-700",
                  bgGradient: "from-pink-50 to-rose-100",
                },
                {
                  title: "IT System Integration",
                  description:
                    "Comprehensive system integration services connecting disparate applications, databases, and platforms for unified enterprise operations.",
                  icon: IconChartArrows,
                  platforms: [
                    "Enterprise Resource Planning (ERP) integration",
                    "Customer Relationship Management (CRM) systems",
                    "Supply Chain Management (SCM) platforms",
                    "Business Intelligence and Analytics tools",
                    "API development and microservices architecture",
                  ],
                  gradient: "from-blue-600 to-green-600",
                  bgGradient: "from-pink-50 to-rose-100",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
                          service.title === "Data Migration Services"
                            ? "/solutions/data"
                            : "/solutions/system"
                        }
                        className="flex items-center justify-between w-full"
                      >
                        <span>{service.title}</span>

                        <IconExternalLink
                          className="flex-shrink-0"
                          style={{ color: "#52b1fa" }}
                          size={24}
                        />
                      </Link>
                    </h3>
                    <p className="text-slate-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">
                        Supported Platforms & Technologies:
                      </h4>
                      {service.platforms.map((platform, platformIndex) => (
                        <div
                          key={platformIndex}
                          className="flex items-start space-x-3"
                        >
                          <IconCheckbox className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 leading-relaxed">
                            {platform}
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

        {/* Industries We Serve - Dark Mode with Tech Aesthetic */}
        <section
          className="py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
          id="industries"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
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
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Delivering specialized IT solutions across diverse industries,
                each with unique requirements for digital transformation and
                operational excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Government & Defence",
                  description:
                    "Secure IT infrastructure, data migration, and system integration for public sector organizations.",
                  icon: IconShieldCheck,
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: "Telecommunications",
                  description:
                    "Network optimization, service integration, and data management for telecom operators.",
                  icon: IconPhone,
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  title: "Financial Services",
                  description:
                    "Secure financial data migration, compliance systems, and banking platform integration.",
                  icon: IconCreditCard,
                  gradient: "from-pink-500 to-purple-500",
                },
                {
                  title: "Healthcare & Pharmaceuticals",
                  description:
                    "Medical data systems, patient record migration, and healthcare IT infrastructure.",
                  icon: IconHeart,
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  title: "Energy & Utilities",
                  description:
                    "Smart grid systems, utility data management, and industrial IoT integration.",
                  icon: IconBolt,
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  title: "Manufacturing & Supply Chain",
                  description:
                    "Production systems integration, inventory management, and supply chain automation.",
                  icon: IconTruck,
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Smart Cities & Infrastructure",
                  description:
                    "Urban technology systems, IoT networks, and municipal data platform integration.",
                  icon: IconHome,
                  gradient: "from-cyan-500 to-teal-500",
                },
                {
                  title: "Technology & Software",
                  description:
                    "DevOps integration, cloud migration, and software development platform optimization.",
                  icon: IconCode,
                  gradient: "from-teal-500 to-green-500",
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
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-orange-400/30 h-full">
                    <div
                      className={`inline-flex w-12 h-12 bg-gradient-to-r ${industry.gradient} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack - Light Mode with Tech Focus */}
        <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-orange-50 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Technology Stack
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology ecosystem supporting enterprise-grade
                solutions across cloud, database, and integration platforms.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  category: "Cloud Platforms",
                  technologies: [
                    { name: "Amazon Web Services", icon: IconBrandAws },
                    { name: "Microsoft Azure", icon: IconBrandAzure },
                    { name: "Google Cloud Platform", icon: IconBrandGoogle },
                    {
                      name: "Multi-Cloud Architecture",
                      icon: IconCloudComputing,
                    },
                  ],
                  color: "orange",
                },
                {
                  category: "Database Systems",
                  technologies: [
                    { name: "Oracle Database", icon: IconDatabase },
                    { name: "MySQL & PostgreSQL", icon: IconBrandMysql },
                    { name: "MongoDB & NoSQL", icon: IconBrandMongodb },
                    { name: "SQL Server & Analytics", icon: IconAnalyze },
                  ],
                  color: "red",
                },
                {
                  category: "Integration Tools",
                  technologies: [
                    { name: "Apache NiFi & ETL", icon: IconSettings },
                    { name: "Talend & Informatica", icon: IconCircuitBattery },
                    { name: "API Management", icon: IconApiApp },
                    { name: "Microservices", icon: IconNetwork },
                  ],
                  color: "pink",
                },
              ].map((stack, stackIndex) => (
                <motion.div
                  key={stackIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stackIndex * 0.2 }}
                  className="group"
                >
                  <div
                    className={`p-8 bg-${stack.color}-50 rounded-3xl border border-${stack.color}-100 hover:shadow-xl transition-all duration-300`}
                  >
                    <h3
                      className={`text-2xl font-bold text-${stack.color}-900 mb-8 text-center`}
                    >
                      {stack.category}
                    </h3>

                    <div className="space-y-6">
                      {stack.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                          className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-200"
                        >
                          <div
                            className={`w-12 h-12 bg-${stack.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${stack.color}-200 transition-colors duration-200`}
                          >
                            <tech.icon
                              className={`w-6 h-6 text-${stack.color}-600`}
                            />
                          </div>
                          <span
                            className={`text-${stack.color}-800 font-medium`}
                          >
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Warm Gradient with Animation */}
        <section className="py-32 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
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
                Transform Your IT.
                <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Accelerate Growth.
                </span>
              </h2>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ready to modernize your IT infrastructure? Let&apos;s discuss
                how our expert team can deliver seamless migration and
                integration solutions tailored to your business needs.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    Start Your Project
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
