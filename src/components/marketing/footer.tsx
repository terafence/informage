"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { 
  IconMapPin, 
  IconMail, 
  IconArrowUp,
  IconArrowNarrowRight
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";

const AnimatedElement = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { text: "Services", href: "/services" },
    { text: "Solutions", href: "/solutions" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Blog", href: "/blog" },
    { text: "Careers", href: "/careers" },
  ];

  return (
    <footer className="w-full bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] pointer-events-none"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#333333_0%,transparent_70%)] opacity-[0.03] pointer-events-none"></div>
      
      {/* Ultra-fine grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand & Description Column */}
          <AnimatedElement className="md:col-span-5" delay={0.1}>
            <div className="flex items-start flex-col space-y-8">
              {/* Logo */}
              <Link href="/" className="inline-block group">
                <div className="relative overflow-hidden">
                  <div className="w-auto h-14 relative z-10">
                    <Image
                      src="/images/informage-light.png"
                      alt="Informage Group Logo"
                      width={240}
                      height={50}
                      priority
                      className="w-auto h-full object-contain filter brightness-[1.2] contrast-[1.1]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-white/30 transition-all duration-700 ease-in-out"></div>
                </div>
              </Link>
              
              {/* Description */}
              <div className="relative">
                <div className="w-12 h-[1px] bg-white/30 mb-6"></div>
                <p className="text-base text-gray-300 leading-relaxed max-w-lg">
                  Informage Group delivers cutting-edge cybersecurity solutions that
                  protect critical infrastructure and sensitive data across
                  industries. Our award-winning technology creates impenetrable
                  barriers against digital threats.
                </p>
              </div>
              
              {/* Newsletter subscription */}
              <div className="mt-auto pt-4 w-full max-w-md">
                <h4 className="text-sm uppercase tracking-wider text-gray-300 mb-3">Stay Updated</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow bg-zinc-900/50 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors rounded-l-md placeholder:text-zinc-500"
                  />
                  <button 
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 px-4 rounded-r-md group flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <IconArrowNarrowRight className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Links Column */}
          <AnimatedElement className="md:col-span-3" delay={0.3}>
            <div className="flex flex-col h-full">
              <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-6 flex items-center">
                <span className="inline-block w-6 h-px bg-zinc-600 mr-2"></span>
                Quick Links
              </h3>
              
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="group inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="opacity-0 transition-opacity duration-300 mr-0 group-hover:opacity-100 group-hover:mr-2">
                        <IconArrowNarrowRight className="h-3 w-3" strokeWidth={1.5} />
                      </span>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
          
          {/* Contact Column */}
          <AnimatedElement className="md:col-span-4" delay={0.5}>
            <div className="flex flex-col h-full">
              <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-6 flex items-center">
                <span className="inline-block w-6 h-px bg-zinc-600 mr-2"></span>
                Our Office
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 p-2 rounded-md bg-zinc-800/70 text-gray-300">
                    <IconMapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <address className="text-gray-300 not-italic text-sm leading-relaxed">
                      209, Suncity Success Tower, Sector-65,<br /> 
                      Gurgaon, Haryana-122005, India
                    </address>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 mr-3 p-2 rounded-md bg-zinc-800/70 text-gray-300">
                    <IconMail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <a
                    href="mailto:info@informagegroup.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    info@informagegroup.com
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-zinc-800 my-10"></div>
        
        {/* Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <AnimatedElement delay={0.7} className="text-center sm:text-left">
            <p className="text-xs text-gray-400">
              &copy; {currentYear} <span className="text-gray-300">Informage Group</span>. All rights reserved.
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.8} className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </Link>
            <Link
              href="/cookie"
              className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </AnimatedElement>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Back to top"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 shadow-xl group-hover:bg-zinc-800 transition-colors duration-300">
          <IconArrowUp className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
        </div>
      </button>
    </footer>
  );
};

export default Footer;