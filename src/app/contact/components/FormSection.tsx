"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, Server, ArrowRight, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interestedIn: 'defense' | 'it';
  remarks: string;
}

interface FormErrors {
  [key: string]: string[];
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interestedIn: 'defense',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: 'defense' | 'it') => {
    setFormData(prev => ({ ...prev, interestedIn: value }));
    
    // Clear radio group error
    if (errors.interestedIn) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.interestedIn;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          interestedIn: 'defense',
          remarks: ''
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Please correct the errors below.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {/* Status Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg border ${
                      submitStatus.type === 'success'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                    } flex items-center gap-3`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-zinc-300 text-sm font-medium">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                        className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 ${
                          errors.firstName ? 'border-red-500/50' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs">{errors.firstName[0]}</p>
                      )}
                    </div>
                    
                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-zinc-300 text-sm font-medium">
                        Last Name <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                        className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 ${
                          errors.lastName ? 'border-red-500/50' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs">{errors.lastName[0]}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300 text-sm font-medium">
                        Business Email <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.name@company.com"
                        required
                        className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 ${
                          errors.email ? 'border-red-500/50' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs">{errors.email[0]}</p>
                      )}
                    </div>
                    
                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-zinc-300 text-sm font-medium">
                        Company <span className="text-red-400">*</span>
                      </Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your organization"
                        required
                        className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 ${
                          errors.company ? 'border-red-500/50' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs">{errors.company[0]}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Interested In */}
                  <div className="space-y-3">
                    <Label className="text-zinc-300 text-sm font-medium">
                      I&lsquo;m interested in <span className="text-red-400">*</span>
                    </Label>
                    <RadioGroup 
                      value={formData.interestedIn} 
                      onValueChange={handleRadioChange}
                      className="space-y-3 mt-2"
                      disabled={isSubmitting}
                    >
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
                    {errors.interestedIn && (
                      <p className="text-red-400 text-xs">{errors.interestedIn[0]}</p>
                    )}
                  </div>
                  
                  {/* Remarks */}
                  <div className="space-y-2">
                    <Label htmlFor="remarks" className="text-zinc-300 text-sm font-medium">
                      Remarks (if any)
                    </Label>
                    <Textarea
                      id="remarks"
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your specific requirements..."
                      className={`bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500/20 min-h-32 ${
                        errors.remarks ? 'border-red-500/50' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.remarks && (
                      <p className="text-red-400 text-xs">{errors.remarks[0]}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium text-lg rounded-xl group transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
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

export default ContactPage;