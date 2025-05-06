"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search,
  MessageSquare, 
  ShieldAlert, 
  FileText, 
  Book, 
  ChevronRight,
  Clock,
  Shield,
  LifeBuoy,
  Users,
  Bot,
  WifiOff,
  LucideIcon
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Support category type
type SupportCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  color: string;
};

// FAQ type
type FAQ = {
  question: string;
  answer: string;
};

// Support page component
export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Support categories data
  const supportCategories: SupportCategory[] = [
    {
      icon: Shield,
      title: "Defense Solutions",
      description: "Support for anti-drone systems, military communications, and counter-UxS technologies",
      path: "/support/defense",
      color: "from-emerald-500 to-blue-500"
    },
    {
      icon: LifeBuoy,
      title: "Technical Support",
      description: "Get technical assistance for deployment, integration, and troubleshooting",
      path: "/support/technical",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Account management, orders, shipping, and general inquiries",
      path: "/support/customer",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Bot,
      title: "Cybersecurity Support",
      description: "SOC services, network security, and incident response assistance",
      path: "/support/cybersecurity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Product manuals, technical specifications, and implementation guides",
      path: "/support/documentation",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: WifiOff,
      title: "RCIED & Anti-IED Support",
      description: "Support for jamming technologies and counter-IED systems",
      path: "/support/jamming",
      color: "from-red-500 to-pink-500"
    },
  ];

  // FAQ data
  const faqs: FAQ[] = [
    {
      question: "How quickly can I expect a response to my support request?",
      answer: "For standard support, we aim to respond within 24 hours. For customers with premium support contracts, we offer response times as quick as 2 hours. Critical security issues are prioritized regardless of support tier."
    },
    {
      question: "Do you offer 24/7 support for defense systems?",
      answer: "Yes, we provide 24/7 emergency support for mission-critical defense systems. Our dedicated team is always available to address urgent issues that affect operational capability."
    },
    {
      question: "How can I schedule on-site technical assistance?",
      answer: "On-site technical assistance can be arranged through your account manager or by submitting a request through our support portal. Please provide at least 5 business days notice for standard visits, though we can accommodate emergency situations with shorter notice."
    },
    {
      question: "What training options are available for new customers?",
      answer: "We offer comprehensive training programs including virtual instructor-led sessions, on-site workshops, and self-paced learning modules. Custom training packages can be tailored to your team's specific needs and security requirements."
    },
    {
      question: "How are security vulnerabilities handled?",
      answer: "We follow a responsible disclosure process for all security vulnerabilities. Our security team assesses and prioritizes each report, with critical issues addressed immediately. Regular security updates are provided to all customers, with emergency patches for high-severity issues."
    },
  ];

  return (
    <>      <Navbar />

    <div className="min-h-screen bg-zinc-950 text-white">
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/80 to-zinc-950"></div>
            <div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-60 -left-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-sm font-medium text-emerald-400">24/7 Customer Support</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                How Can We Help You?
              </h1>
              
              <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto">
                Our dedicated support team is ready to assist you with everything from technical 
                troubleshooting to strategic guidance for your security needs.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-zinc-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for support topics..."
                  className="w-full py-6 pl-12 pr-4 bg-white/5  border border-white/10 rounded-xl text-white placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  className="absolute right-2 top-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 rounded-lg"
                >
                  Search
                </Button>
              </div>
            </motion.div>
            
            {/* Support Options Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            >
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} w-fit`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                  <p className="text-zinc-400 mb-4">{category.description}</p>
                  
                  <Link href={category.path} className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-transparent to-emerald-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Support Channels Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Multiple Ways to Get Support</h2>
              <p className="text-zinc-300">
                Choose the support channel that best suits your needs and preferences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                <p className="text-zinc-400 mb-6">
                  Connect with our support team in real-time for immediate assistance with your queries.
                </p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                    <span className="text-sm text-emerald-400">Available Now</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                  Start Chat
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <ShieldAlert className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Priority Support</h3>
                <p className="text-zinc-400 mb-6">
                  Dedicated to our enterprise clients and mission-critical deployments with SLA guarantees.
                </p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="text-sm text-amber-400">Response within 2 hours</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                  Contact Priority Team
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Knowledge Base</h3>
                <p className="text-zinc-400 mb-6">
                  Explore our extensive documentation, FAQs, and step-by-step guides for self-service support.
                </p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-purple-400">500+ Articles Available</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Browse Knowledge Base
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm font-medium text-blue-400">Frequently Asked Questions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Support Questions</h2>
              <p className="text-zinc-300">
                Find quick answers to the most common questions about our products and services.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-10 bg-zinc-800/50 rounded-lg p-1">
                  <TabsTrigger 
                    value="general" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600/80 data-[state=active]:to-blue-600/80 data-[state=active]:text-white rounded-md"
                  >
                    General Support
                  </TabsTrigger>
                  <TabsTrigger 
                    value="technical" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600/80 data-[state=active]:to-blue-600/80 data-[state=active]:text-white rounded-md"
                  >
                    Technical Issues
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                    >
                      <h3 className="text-xl font-semibold mb-3 flex items-start">
                        <span className="flex-shrink-0 bg-gradient-to-r from-emerald-500 to-blue-500 p-1 rounded-full mr-3 mt-1">
                          <QuestionIcon className="w-4 h-4 text-white" />
                        </span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-zinc-300 ml-8 pl-1">{faq.answer}</p>
                    </motion.div>
                  ))}
                </TabsContent>
                
                <TabsContent value="technical" className="text-center py-12">
                  <div className="max-w-xl mx-auto">
                    <Image 
                      src="/images/support/technical-support.png" 
                      alt="Technical Support"
                      width={240}
                      height={180}
                      className="mx-auto mb-8 opacity-80"
                    />
                    <h3 className="text-2xl font-bold mb-4">Technical Support Questions</h3>
                    <p className="text-zinc-300 mb-8">
                      For detailed technical support, please consult our comprehensive knowledge base
                      or contact our specialized technical support team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                        View Technical Guides
                      </Button>
                      <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Contact Technical Team
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
    
      </main>

     
    </div>
    <Footer />
    </>
  );
}

// Custom Question icon component
const QuestionIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};