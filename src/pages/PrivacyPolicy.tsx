
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#252859] to-[#353A80] text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold text-center">Cyanase Privacy Policy</CardTitle>
              <div className="text-center text-white/90 mt-2">
                <p>Effective Date: [Insert Date]</p>
                <p>Last Updated: [Insert Date]</p>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">1. Overview</h2>
                <p className="mb-4">
                  Cyanase ("we", "us", "our") is committed to protecting your personal data in accordance with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Uganda's <strong>Data Protection and Privacy Act, 2019</strong></li>
                  <li>Applicable provisions of the <strong>GDPR</strong>, where our users are located in the EU</li>
                </ul>
                <p>This policy applies when using the Cyanase mobile app, WhatLike app, APIs, portal, and related services.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">2. Data Controller & DPO</h2>
                <p className="mb-2">Cyanase is the <strong>Data Controller</strong>.</p>
                <p className="mb-2">We have appointed a <strong>Data Protection Officer (DPO)</strong> responsible for overseeing data protection and compliance.</p>
                <p><strong>Contact: <a href="mailto:dpo@cyanase.com" className="text-[#F7A92D] hover:underline">dpo@cyanase.com</a></strong></p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">3. Data We Collect</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">A. Personal Identifiable Information (PII)</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Full name, date of birth, gender, nationality</li>
                  <li>Phone number, email, residential address</li>
                  <li>Identification details: National ID, passport number</li>
                  <li>Profile photo (selfies)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">B. Financial & Transactional Data</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Mobile money, bank account details</li>
                  <li>Transaction records, deposit/withdrawal amounts</li>
                  <li>Investment contributions, holdings, group savings</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">C. KYC / AML Data</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Uploaded government ID documents</li>
                  <li>Selfies for biometric verification</li>
                  <li>Proof-of-address (e.g., utility bill)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">D. Device, Usage & Behavioral Data</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP address, device model, OS, browser user agent</li>
                  <li>Carrier, app version, usage logs, errors, crash reports</li>
                  <li>Geolocation (with explicit consent)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">E. Sensitive Data</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Biometric data for identity checks</li>
                  <li>Financial health indicators (e.g., risk assessments)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">F. Third-Party & Derived Data</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Data received from credit agencies or verification services</li>
                  <li>Profile data from external services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">4. How We Collect Data</h2>
                <ul className="list-disc pl-6">
                  <li>Direct user input (registration, KYC forms)</li>
                  <li>Device/app logs and analytics</li>
                  <li>APIs and integrations (e.g. Flutterwave, MTN Mobile Money)</li>
                  <li>Third-party data providers (e.g. identity verification, credit bureaus)</li>
                  <li>Cookies and tracking technologies within the app</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">5. How We Use Your Data</h2>
                <p className="mb-4">We use collected data to:</p>
                <ol className="list-decimal pl-6">
                  <li><strong>Provide Services</strong>: Facilitate investments, withdrawals, group savings.</li>
                  <li><strong>Account Management</strong>: Authentication, support, notifications.</li>
                  <li><strong>Legal Compliance</strong>: KYC/AML adherence; record retention for audits.</li>
                  <li><strong>Analysis & Optimization</strong>: Service improvement through analytics.</li>
                  <li><strong>Personalization</strong>: Tailored product recommendations and UI experiences.</li>
                  <li><strong>Security & Fraud Prevention</strong>: Risk screening, fraud detection.</li>
                  <li><strong>Legal Obligations</strong>: Respond to lawful requests by authorities.</li>
                  <li><strong>Marketing & Communication</strong>: Only with your explicit consent, you can opt-in/out.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">6. Legal Basis for Processing</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Consent</strong>: Required for KYC, biometrics, marketing, geolocation.</li>
                  <li><strong>Contractual necessity</strong>: Managing user accounts and transactions.</li>
                  <li><strong>Legal obligation</strong>: For KYC/AML compliance.</li>
                  <li><strong>Legitimate interests</strong>: Security, fraud prevention, service improvements.</li>
                  <li><strong>Vital interests</strong>: Emergency situations where safety is at risk.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">7. Data Sharing</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">A. With Service Providers</h3>
                <p className="mb-2">We share data (under confidentiality agreements) with:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cloud infrastructure (e.g., AWS)</li>
                  <li>Identity verification services (e.g., biometric, document checks)</li>
                  <li>Credit bureaus & fraud detection services</li>
                  <li>Analytics tools and customer support platforms</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">B. With Financial Partners</h3>
                <p className="mb-4">Fund managers, banks, and payment systems (MTN Mobile Money, Flutterwave).</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">C. Legal & Regulatory Authorities</h3>
                <p className="mb-4">Uganda's financial regulator, Bank of Uganda; law enforcement agencies.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">D. Other Users</h3>
                <p className="mb-4">Group savings data (names and contributions) visible to group members.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">E. Corporate Changes</h3>
                <p className="mb-4">In mergers or acquisitions, user data may transfer under policy consistency.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">F. With Consent</h3>
                <p>Only with your consent; opt-outs always available.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">8. International Transfers</h2>
                <p className="mb-2">We may store or process data outside Uganda (e.g., cloud servers in the EU or US).</p>
                <p>Cross-border transfers are always subject to legal safeguards such as standard contractual clauses or adequacy decisions.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">9. Data Security</h2>
                <p className="mb-4">Our security measures include:</p>
                <ul className="list-disc pl-6">
                  <li><strong>Encryption</strong>: Data is encrypted in transit (TLS/SSL) and at rest</li>
                  <li><strong>Access Controls</strong>: Role-based access with multi-factor authentication</li>
                  <li><strong>Network Security</strong>: Firewalls, intrusion detection</li>
                  <li><strong>Testing & Audits</strong>: Regular audits and penetration testing</li>
                  <li><strong>Employee Training</strong>: All staff receive security and privacy training</li>
                  <li><strong>Incident Response</strong>: Formal plan to address data breaches swiftly</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">10. Data Retention & Erasure</h2>
                <ul className="list-disc pl-6">
                  <li>We store personal data as long as you use the service or as required by law or contractual obligations.</li>
                  <li>Non-essential data is archived or deleted per Uganda's DPPA and GDPR timelines.</li>
                  <li>You may also request data deletion where not restricted by law.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">11. Your Rights</h2>
                <p className="mb-4">You have the following rights under Uganda's DPPA and GDPR:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Access</strong> your data</li>
                  <li><strong>Rectify</strong> inaccurate data</li>
                  <li><strong>Erase</strong> data ("right to be forgotten")</li>
                  <li><strong>Restrict processing</strong></li>
                  <li><strong>Data portability</strong></li>
                  <li><strong>Object</strong> to profiling or marketing</li>
                  <li><strong>Withdraw consent</strong></li>
                </ul>
                <p>To exercise these, contact <strong><a href="mailto:dpo@cyanase.com" className="text-[#F7A92D] hover:underline">dpo@cyanase.com</a></strong>; we respond within statutory timeframes.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">12. Children</h2>
                <p>Our services are for individuals <strong>18 years or older</strong>. If under-18 data is detected, we will delete it immediately.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">13. Cookies & Tracking</h2>
                <p className="mb-4">Our services may use:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Session cookies</strong> for login maintenance</li>
                  <li><strong>Persistent cookies</strong> for user preferences and analytics</li>
                  <li><strong>Mobile tracking</strong> (IP, OS, carrier)</li>
                </ul>
                <p>You may disable cookies through device settings, but this could affect functionality.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">14. Policy Updates</h2>
                <p className="mb-2">We may update this policy periodically.</p>
                <p>Major changes will be notified via email or in-app announcement.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">15. Contact Information</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Cyanase</p>
                  <ul className="space-y-1">
                    <li>DPO: <a href="mailto:dpo@cyanase.com" className="text-[#F7A92D] hover:underline">dpo@cyanase.com</a></li>
                    <li>Support: <a href="mailto:support@cyanase.com" className="text-[#F7A92D] hover:underline">support@cyanase.com</a></li>
                    <li>Phone: +256 705 640 852</li>
                    <li>Address: Kampala, Uganda</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">16. Complaints</h2>
                <p className="mb-4">If unsatisfied with our response, you may file a complaint with:</p>
                <ul className="list-disc pl-6">
                  <li>Uganda's <strong>National Information Technology Authority (NITA)</strong></li>
                  <li><strong>Office of the Data Protection Commissioner</strong></li>
                  <li>Or applicable <strong>EU Data Protection Authority</strong> for GDPR concerns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">17. Third-Party Services</h2>
                <p>Where we integrate third-party services (like payment processors or verification), their privacy policies also apply. We encourage you to review them independently.</p>
              </section>

              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg font-semibold text-[#252859]">End of Privacy Policy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
