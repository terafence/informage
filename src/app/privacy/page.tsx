import React from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Link from "next/link";
import { 
  ChevronDown, 
  Shield, 
  Lock, 
  Eye, 
  AlertCircle, 
  FileText, 
  Clock,
  ChevronRight
} from "tabler-icons-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 23, 2025";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 shadow-xl">
              <Shield size={32} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Last Updated: {lastUpdated}</p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Shield size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Data Protection</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We implement industry-standard security measures to protect your information with enterprise-grade encryption.</p>
            </div>
            
            <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Lock size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Privacy First</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We collect only what&apos;s necessary and never sell your personal information to third parties.</p>
            </div>
            
            <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Eye size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Transparency</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Clear explanations of how we use your data and comprehensive information about your rights.</p>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                At Informage Group, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <div className="flex items-start bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <AlertCircle size={24} className="text-amber-600 dark:text-amber-400 mt-0.5 mr-4 flex-shrink-0" />
                <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                  Please read this Privacy Policy carefully. By accessing or using our website and services, you agree to this Privacy Policy and consent to our data practices as described herein.
                </p>
              </div>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div className="space-y-6 mb-20">
            {/* Section 1 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Information We Collect</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>We may collect several types of information from and about users of our website and services, including:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Personal identifiers such as name, postal address, email address, telephone number</li>
                      <li>Professional information such as company name, job title, department, industry</li>
                      <li>Technical data including IP address, browser type and version, time zone setting, operating system</li>
                      <li>Usage data including pages visited, time spent on pages, page interaction information, search queries</li>
                      <li>Marketing and communication preferences</li>
                      <li>Device information and unique identifiers</li>
                    </ul>
                    <p className="font-medium">We collect this information through:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Direct provision when you provide it to us (e.g., forms, service subscriptions, inquiries)</li>
                      <li>Automatic collection as you navigate through our website (using cookies and similar technologies)</li>
                      <li>Third parties, including our business partners and service providers</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 2 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">How We Use Your Information</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>We use information that we collect about you or that you provide to us for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>To present our website and its contents to you in an optimized manner</li>
                      <li>To provide you with information, products, or services that you request from us</li>
                      <li>To fulfill contractual obligations and any other purpose for which you provide information</li>
                      <li>To notify you about changes to our website, services, or any products we offer</li>
                      <li>To improve our website, services, and customer experience</li>
                      <li>For research and analytics to enhance our products and services</li>
                      <li>To respond to your inquiries and provide customer support</li>
                      <li>For marketing and promotional purposes, with your consent where required by law</li>
                      <li>To ensure security and prevent fraud</li>
                      <li>To comply with legal obligations and regulatory requirements</li>
                      <li>For any other purpose with your explicit consent</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 3 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Disclosure of Your Information</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>To our subsidiaries and affiliates for business purposes</li>
                      <li>To contractors, service providers, and other third parties who support our business operations</li>
                      <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, or sale of assets</li>
                      <li>To fulfill the purpose for which you provide the information</li>
                      <li>For any other purpose disclosed by us when you provide the information</li>
                      <li>With your explicit consent</li>
                      <li>To comply with any court order, law, or legal process, including government requests</li>
                      <li>To enforce our terms of use and other agreements</li>
                      <li>If we believe disclosure is necessary to protect the rights, property, or safety of our company, customers, or others</li>
                      <li>To investigate potential violations of our policies</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 4 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Cookies and Tracking Technologies</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can configure your browser settings to refuse cookies or receive notifications when cookies are being sent.</p>
                    <p className="font-medium">We use the following types of cookies:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Essential cookies:</strong> Necessary for the website to function properly and provide core functionality</li>
                      <li><strong>Analytical cookies:</strong> Help us understand visitor behavior and improve our website performance</li>
                      <li><strong>Functional cookies:</strong> Enable enhanced functionality, personalization, and remember your preferences</li>
                      <li><strong>Targeting cookies:</strong> Used to deliver relevant advertisements and track marketing campaign effectiveness</li>
                      <li><strong>Performance cookies:</strong> Collect information about how you use our website to help us optimize user experience</li>
                    </ul>
                    <p>By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 5 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Security</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>We have implemented comprehensive technical and organizational security measures designed to protect your personal information from accidental loss, unauthorized access, use, alteration, and disclosure. All information you provide is stored on secure servers protected by advanced firewalls and encryption protocols.</p>
                    <p>Our security measures include but are not limited to:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection and privacy</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                    <p>However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 6 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Your Rights and Choices</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>Depending on your location and applicable laws, you may have certain rights regarding your personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Right of Access:</strong> Request access to your personal information and obtain a copy</li>
                      <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Right to Erasure:</strong> Request deletion of your personal information under certain circumstances</li>
                      <li><strong>Right to Restrict Processing:</strong> Request limitation of processing of your personal information</li>
                      <li><strong>Right to Data Portability:</strong> Receive your personal information in a structured format</li>
                      <li><strong>Right to Object:</strong> Object to processing of your personal information for certain purposes</li>
                      <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                      <li><strong>Right to Lodge a Complaint:</strong> File a complaint with relevant data protection authorities</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request within the timeframe required by applicable law.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 7 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">International Data Transfers</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>Your personal information may be transferred to, stored, and processed in countries other than your country of residence, where data protection laws may differ from those in your jurisdiction.</p>
                    <p>When we transfer personal information internationally, we ensure appropriate safeguards are in place, including:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Adequacy decisions by relevant authorities</li>
                      <li>Standard contractual clauses approved by regulatory bodies</li>
                      <li>Binding corporate rules for intra-group transfers</li>
                      <li>Certification schemes and codes of conduct</li>
                    </ul>
                    <p>By providing your personal information, you acknowledge and agree to such transfers, storage, and processing.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 8 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Changes to Our Privacy Policy</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>We may update our Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Posting the new Privacy Policy on this page with an updated &quot;Last Updated&quot; date</li>
                      <li>Sending you an email notification if you have provided your email address</li>
                      <li>Displaying a prominent notice on our website</li>
                      <li>Other communication methods as appropriate</li>
                    </ul>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page, unless otherwise specified.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 9 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-200">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Contact Information</h3>
                  <span className="text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-300">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 border border-slate-200/50 dark:border-slate-700/50 rounded-xl shadow-lg">
                      <p className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-4">Informage Group</p>
                      <div className="space-y-2">
                        <p><span className="font-semibold">Email:</span> info@informagegroup.com</p>
                        <p><span className="font-semibold">Address:</span> 209, Suncity Success Tower,<br />Sector-65, Gurgaon, Haryana-122005, India</p>
                      </div>
                    </div>
                    <p>We are committed to resolving any privacy-related concerns promptly and will respond to your inquiry within a reasonable timeframe as required by applicable law.</p>
                  </div>
                </div>
              </details>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-4 shadow-lg">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Additional Resources</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-3">Terms of Service</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">Read our comprehensive terms and conditions for using our services and platform.</p>
                <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold inline-flex items-center group-hover:translate-x-1 transition-all duration-200">
                  View Terms of Service
                  <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-3">Cookie Policy</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">Learn more about how we use cookies and tracking technologies on our website.</p>
                <Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold inline-flex items-center group-hover:translate-x-1 transition-all duration-200">
                  View Cookie Policy
                  <ChevronRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Version History */}
          <div className="text-center p-8 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-3">
                <Clock size={20} className="text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">Policy Version History | v2.1.5</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              This Privacy Policy was last updated on {lastUpdated}. Previous versions of our Privacy Policy can be obtained by contacting us using the information provided above.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}