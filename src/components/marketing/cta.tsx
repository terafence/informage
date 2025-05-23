"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  IconCheck, 
  IconSend 
} from '@tabler/icons-react';

const Cta: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    company: '',
    interest: '',
    submitted: false,
    loading: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        ...formState, 
        submitted: true, 
        loading: false 
      });
    }, 1500);
  };

  return (
    <section className="w-full py-32 relative overflow-hidden bg-white">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl transform rotate-3 blur-xl"></div>
            
            <div className="relative bg-white p-10 lg:p-14 rounded-3xl shadow-2xl border border-gray-100">
              {!formState.submitted ? (
                <>
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Ready to Secure Your Operations?</h3>
                  <p className="text-gray-500 mb-8">Contact us for more information about our advanced cybersecurity solutions.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                          placeholder="Your organization"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Primary Interest</label>
                        <select
                          id="interest"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                          value={formState.interest}
                          onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        >
                          <option value="" disabled>Select your interest</option>
                          <option value="defense">Defense-related Products & Services</option>
                          <option value="it">IT-related Products & Services</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit"
                        disabled={formState.loading}
                        className={`w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white text-lg font-medium py-6 rounded-md relative overflow-hidden group ${formState.loading ? 'opacity-80' : ''}`}
                      >
                        {formState.loading ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          <>
                            <span className="relative z-10 flex items-center justify-center">
                              Request Information <IconSend size={20} className="ml-2" />
                            </span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <IconCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Thank You!</h3>
                  <p className="text-gray-500 mb-6">
                    Your request has been received. We&lsquo;ll get back to you within 24 hours with more information.
                  </p>
                  <Button 
                    onClick={() => setFormState({ email: '', company: '', interest: '', submitted: false, loading: false })}
                    variant="outline"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Right Column - Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
            className="space-y-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
              }}
              className="max-w-lg"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Next Steps</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of experts will analyze your specific needs and tailor a comprehensive solution based on your organization&apos;s requirements.
              </p>
              
              <div className="flex mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mr-4">1</div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Initial Consultation</h4>
                  <p className="text-gray-600">A dedicated specialist will reach out to discuss your specific challenges</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mr-4">2</div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Solution Design</h4>
                  <p className="text-gray-600">Our engineering team will craft a tailored protection strategy</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mr-4">3</div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Implementation</h4>
                  <p className="text-gray-600">Rapid deployment with comprehensive training and ongoing support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;