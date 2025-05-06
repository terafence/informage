"use client";
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, Server, ArrowRight, CheckCircle } from 'lucide-react';

const FormSection = () => {
  return (
    <section className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-2/3 h-1/3 bg-gradient-to-r from-emerald-500/10 to-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-2/3 h-1/3 bg-gradient-to-r from-blue-500/10 to-indigo-500/5 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left Column - Content */}
            <div className="w-full lg:w-2/5 text-white mb-12 lg:mb-0">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Contact Form
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Let&#39;s Build <span className="text-emerald-400">Together</span>
              </h2>
              
              <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
                Our team of experts is ready to collaborate with you on your next project. 
                Fill out the form, and we&#39;ll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Personalized Approach</h3>
                    <p className="text-zinc-400">Every inquiry is handled by a dedicated specialist familiar with your industry.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Rapid Response</h3>
                    <p className="text-zinc-400">We prioritize your time with fast, thorough responses to all inquiries.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Confidentiality Assured</h3>
                    <p className="text-zinc-400">Your information and project details are protected by strict confidentiality protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-3/5 rounded-2xl overflow-hidden"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-zinc-300 text-sm font-medium">
                        First Name
                      </Label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-zinc-300 text-sm font-medium">
                        Last Name
                      </Label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300 text-sm font-medium">
                        Business Email
                      </Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.name@company.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                    
                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-zinc-300 text-sm font-medium">
                        Company
                      </Label>
                      <Input 
                        id="company"
                        name="company"
                        placeholder="Your organization"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>
                  
                  {/* Interested In */}
                  <div className="space-y-3">
                    <Label className="text-zinc-300 text-sm font-medium">
                      I&lsquo;m interested in
                    </Label>
                    <RadioGroup defaultValue="defense" className="space-y-3 mt-2">
                      <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <RadioGroupItem id="defense" value="defense" className="text-emerald-500 border-white/20" />
                        <Label htmlFor="defense" className="flex items-center cursor-pointer">
                          <Shield className="w-5 h-5 mr-2 text-emerald-500" />
                          <span className="text-white">Defense related services</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                        <RadioGroupItem id="it" value="it" className="text-blue-500 border-white/20" />
                        <Label htmlFor="it" className="flex items-center cursor-pointer">
                          <Server className="w-5 h-5 mr-2 text-blue-500" />
                          <span className="text-white">IT and cybersecurity related services</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Remarks */}
                  <div className="space-y-2">
                    <Label htmlFor="remarks" className="text-zinc-300 text-sm font-medium">
                      Remarks (if any)
                    </Label>
                    <Textarea
                      id="remarks"
                      name="remarks"
                      placeholder="Tell us more about your specific requirements..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 min-h-32"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full py-6 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium text-lg rounded-xl group"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <p className="text-zinc-500 text-xs mt-4 text-center">
                    Your data is protected by our privacy policy. We&apos;ll never share your information with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;