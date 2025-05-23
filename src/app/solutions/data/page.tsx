"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import {
  IconDatabase,
  IconCloud,
  IconServer,
  IconTransfer,
  IconShield,
  IconSettings2,
  IconCheckbox,
  IconArrowRight,
  IconCloudUpload,
  IconFiles,
  IconLock,
  IconRefresh,
  IconSearch,
  IconTargetArrow,
  IconTestPipe,
  IconTool,
  IconChartBar,
  IconBuilding,
} from "@tabler/icons-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";

export default function DataMigrationPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Dark Mode */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
                  className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium"
                >
                  <IconTransfer className="w-4 h-4 mr-2" />
                  Enterprise Data Solutions
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Data
                  <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Migration
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-gray-200">
                    Move with Confidence. Migrate with Precision.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                    Seamless. Secure. Scalable. Transform your data infrastructure 
                    with zero disruption to business operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Migration
                    <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    Free Assessment
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
                  src="/images/data/migration-hero.png"
                  alt="Data Migration Services"
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
                <div className="text-3xl font-bold text-white">Zero Loss</div>
                <div className="text-sm text-gray-300">
                  Data Integrity Guaranteed
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview - Light Mode */}
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
              Strategic Data Migration
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today&apos;s data-driven world, migrating information from legacy systems to modern platforms 
              is a strategic necessity—but one that comes with risk. We offer comprehensive Data Migration 
              Services that ensure your critical data is moved safely, efficiently, and without disruption 
              to business operations.
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
                src="/images/data/migration-process.png"
                alt="Data Migration Process"
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
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <IconShield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Secure & Compliant
                    </h3>
                    <p className="text-gray-600">
                      GDPR, HIPAA, SOC 2, and ISO standards compliance with enterprise-grade security protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <IconRefresh className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Minimal Downtime
                    </h3>
                    <p className="text-gray-600">
                      Non-intrusive strategies and real-time replication to ensure business continuity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <IconTool className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Proven Tools & Expertise
                    </h3>
                    <p className="text-gray-600">
                      Industry-leading ETL platforms and certified data engineers guiding every step.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Migration Solutions - Dark Mode */}
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
              Our Data Migration Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive migration services for every data challenge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IconCloudUpload,
                title: "Cloud Data Migration",
                description: "Move data from on-premises to AWS, Azure, Google Cloud, or hybrid cloud environments",
                gradient: "from-emerald-500 to-teal-500",
                features: ["AWS/Azure/GCP Migration", "Cloud-Native Optimization", "Secure Transfer Protocols", "Zero Data Loss"]
              },
              {
                icon: IconDatabase,
                title: "Application & Database Migration",
                description: "Migrate structured and unstructured data across platforms with real-time replication",
                gradient: "from-blue-500 to-cyan-500",
                features: ["SQL/Oracle/MongoDB", "Cross-Platform Support", "Real-time Replication", "Minimal Downtime"]
              },
              {
                icon: IconServer,
                title: "Legacy System Migration",
                description: "Modernize outdated infrastructure and databases with seamless integration",
                gradient: "from-purple-500 to-pink-500",
                features: ["Infrastructure Modernization", "Historical Data Digitization", "Enterprise Integration", "Data Cleansing"]
              },
              {
                icon: IconBuilding,
                title: "Enterprise System Migration",
                description: "ERP, CRM, HRMS, and SCM platform migration with data integrity maintenance",
                gradient: "from-orange-500 to-red-500",
                features: ["SAP/Oracle/Salesforce", "Data Relationships", "Integrity Validation", "Post-Migration Testing"]
              },
              {
                icon: IconFiles,
                title: "File & Storage Migration",
                description: "Move large volumes of files securely with metadata and access control preservation",
                gradient: "from-indigo-500 to-blue-500",
                features: ["Large Volume Transfer", "NAS/SAN Migration", "Metadata Preservation", "Access Control"]
              },
              {
                icon: IconSettings2,
                title: "Custom Migration Projects",
                description: "Tailored solutions for unique data migration requirements and complex environments",
                gradient: "from-teal-500 to-emerald-500",
                features: ["Custom Solutions", "Complex Environments", "Specialized Requirements", "Expert Consultation"]
              },
            ].map((solution, index) => (
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
                    className={`inline-flex w-14 h-14 bg-gradient-to-r ${solution.gradient} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <IconCheckbox className="w-3 h-3 text-emerald-400 flex-shrink-0" />
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

      {/* 6-Step Migration Approach - Light Mode */}
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
              Our 6-Step Migration Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology ensuring successful data migration with minimal risk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Identify source systems, data structure, migration goals, and potential risks",
                icon: IconSearch,
                color: "from-emerald-500 to-teal-500"
              },
              {
                step: "02",
                title: "Data Profiling & Cleansing",
                description: "Remove duplicates, fix inconsistencies, and prepare data for accurate migration",
                icon: IconRefresh,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "Mapping & Design",
                description: "Build a robust data model and define transformation logic for the target system",
                icon: IconTargetArrow,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "04",
                title: "Migration Execution",
                description: "Execute the migration using proven tools, ensuring encryption and transfer validation",
                icon: IconTransfer,
                color: "from-orange-500 to-red-500"
              },
              {
                step: "05",
                title: "Testing & Validation",
                description: "Rigorous pre- and post-migration QA to ensure data accuracy and completeness",
                icon: IconTestPipe,
                color: "from-indigo-500 to-blue-500"
              },
              {
                step: "06",
                title: "Support & Optimization",
                description: "Post-migration support, performance tuning, and ongoing monitoring",
                icon: IconChartBar,
                color: "from-teal-500 to-emerald-500"
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms & Technologies - Dark Mode */}
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
              Supported Platforms & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with industry-leading platforms and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Databases",
                technologies: ["Oracle", "MySQL", "SQL Server", "PostgreSQL", "MongoDB"],
                icon: IconDatabase,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                category: "Cloud Platforms",
                technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Hybrid Cloud"],
                icon: IconCloud,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                category: "Enterprise Applications",
                technologies: ["SAP", "Salesforce", "Microsoft Dynamics", "NetSuite"],
                icon: IconBuilding,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                category: "ETL Tools",
                technologies: ["Talend", "Informatica", "Apache NiFi", "Azure Data Factory", "AWS Glue"],
                icon: IconTool,
                gradient: "from-orange-500 to-red-500"
              },
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                  <div className={`inline-flex w-12 h-12 bg-gradient-to-r ${platform.gradient} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {platform.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {platform.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <IconCheckbox className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              Why Choose Informage?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise in enterprise data migration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secure & Compliant",
                description: "Adheres to GDPR, HIPAA, SOC 2, and ISO standards with enterprise-grade security",
                icon: IconLock,
                color: "text-emerald-600"
              },
              {
                title: "Minimal Downtime",
                description: "Non-intrusive strategies to ensure business continuity during migration",
                icon: IconRefresh,
                color: "text-blue-600"
              },
              {
                title: "Expert-Led",
                description: "Certified data engineers and architects guiding every step of the process",
                icon: IconTool,
                color: "text-purple-600"
              },
              {
                title: "Proven Tools",
                description: "Use of industry-leading ETL, replication, and orchestration platforms",
                icon: IconSettings2,
                color: "text-orange-600"
              },
              {
                title: "Cross-Industry Experience",
                description: "From government to finance, healthcare, manufacturing, and beyond",
                icon: IconBuilding,
                color: "text-indigo-600"
              },
              {
                title: "Zero Data Loss",
                description: "Guaranteed data integrity with comprehensive validation and testing",
                icon: IconShield,
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
              Future-Proof Your
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Data Strategy
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A well-executed data migration is more than a transfer—it&apos;s a transformation. 
              Informage ensures your data moves with integrity, security, and value, 
              setting you up for long-term success.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Migration
                  <IconArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  Get Free Assessment
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