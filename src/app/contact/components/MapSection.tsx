"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 16px 16px, black 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            {/* Content */}
            <div className="w-full lg:w-2/5 mb-12 lg:mb-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <h2 className="ml-2 text-sm font-medium uppercase tracking-wider text-emerald-600">Our Office</h2>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Visit Our Headquarters
              </h3>
              
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Located in the heart of Gurgaon&lsquo;s business district, our corporate headquarters 
                houses our state-of-the-art research labs, engineering teams, and executive offices.
                We invite you to schedule a visit to discuss your requirements in person.
              </p>
            </div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-3/5 h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.3421324282515!2d77.06961496963808!3d28.408134778097246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2283ffffffff%3A0x3e53397592f9bb7f!2sInformage%20Techno%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746527262981!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Informage Techno Solutions Pvt Ltd Office Location"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;