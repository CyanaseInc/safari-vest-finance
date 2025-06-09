
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#252859] to-[#353A80] text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold text-center">Terms of Use and Service Agreement</CardTitle>
              <div className="text-center text-white/90 mt-2">
                <p><strong>Effective Date:</strong> [INSERT DATE]</p>
                <p><strong>Last Updated:</strong> [INSERT DATE]</p>
                <p><strong>Company:</strong> Cyanase</p>
                <p><strong>Service:</strong> Cyanase Financial Services</p>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">1. ACCEPTANCE OF TERMS</h2>
                <p className="mb-4">
                  By accessing, downloading, installing, or using our fintech services ("Services"), you ("User," "you," or "your") agree to be bound by these Terms of Use ("Terms"), our Privacy Policy, and all applicable laws and regulations. If you do not agree to these Terms, you must not use our Services.
                </p>
                <p>These Terms constitute a legally binding agreement between you and Cyanase ("Company," "we," "us," or "our").</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">2.1 Age and Capacity Requirements</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>You must be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>You must have legal capacity to enter into binding contracts</li>
                  <li>You must be a resident of Uganda with valid identification</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">2.2 Account Registration</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>You must provide accurate, complete, and current information during registration</li>
                  <li>You must complete our Know Your Customer (KYC) verification process</li>
                  <li>You authorize us to verify your identity through third-party services</li>
                  <li>You must maintain and promptly update your account information</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">2.3 Account Restrictions</h3>
                <ul className="list-disc pl-6">
                  <li>One account per person/entity</li>
                  <li>No account sharing or transfer without written consent</li>
                  <li>We reserve the right to refuse service or terminate accounts at our discretion</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">3. DESCRIPTION OF SERVICES</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">3.1 Financial Services</h3>
                <p className="mb-2">Our Services may include but are not limited to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Digital payment processing</li>
                  <li>Money transfers and remittances</li>
                  <li>Investment and savings products</li>
                  <li>Credit and lending services</li>
                  <li>Financial data aggregation and analysis</li>
                  <li>API integration services for third parties</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">3.2 Service Limitations</h3>
                <ul className="list-disc pl-6">
                  <li>Services are subject to availability and regulatory approval</li>
                  <li>We may modify, suspend, or discontinue any Service at any time</li>
                  <li>Not all Services may be available in all jurisdictions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">4. USER OBLIGATIONS AND PROHIBITED CONDUCT</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">4.1 Permitted Use</h3>
                <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">4.2 Prohibited Activities</h3>
                <p className="mb-2">You must not:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use Services for illegal activities, including money laundering, terrorism financing, or fraud</li>
                  <li>Provide false, misleading, or incomplete information</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code</li>
                  <li>Use automated tools to access Services without authorization</li>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Engage in market manipulation or insider trading</li>
                  <li>Use Services to harm minors in any way</li>
                  <li>Circumvent security measures or usage limitations</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">4.3 Compliance Obligations</h3>
                <p className="mb-2">You agree to:</p>
                <ul className="list-disc pl-6">
                  <li>Comply with all applicable anti-money laundering (AML) laws</li>
                  <li>Provide required tax reporting information</li>
                  <li>Cooperate with regulatory investigations</li>
                  <li>Report suspicious activities to appropriate authorities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">5. FINANCIAL TERMS AND CONDITIONS</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">5.1 Fees and Charges</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>All applicable fees are disclosed in our fee schedule</li>
                  <li>We may change fees with 30 days' advance notice</li>
                  <li>You are responsible for all fees, taxes, and charges related to your use</li>
                  <li>Failed transactions may incur additional fees</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">5.2 Payment Authorization</h3>
                <p className="mb-2">By using our Services, you authorize us to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Process payments and transfers as instructed</li>
                  <li>Debit your connected accounts for fees and transactions</li>
                  <li>Hold funds as required by law or regulation</li>
                  <li>Reverse transactions in case of errors or fraud</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">5.3 Transaction Limits</h3>
                <ul className="list-disc pl-6">
                  <li>Daily, monthly, and annual transaction limits apply</li>
                  <li>Limits may vary based on verification level and risk assessment</li>
                  <li>We reserve the right to modify limits at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">6. RISK DISCLOSURES</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">6.1 Investment Risks</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>All investments carry risk of loss</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>You should only invest what you can afford to lose</li>
                  <li>We do not provide investment advice</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">6.2 Technology Risks</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Electronic systems may experience downtime or errors</li>
                  <li>Internet connectivity issues may affect service availability</li>
                  <li>Cybersecurity threats exist despite our protective measures</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">6.3 Regulatory Risks</h3>
                <ul className="list-disc pl-6">
                  <li>Financial regulations may change and affect Services</li>
                  <li>Cross-border transactions may face additional restrictions</li>
                  <li>Compliance requirements may impact service availability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">7. DATA PROTECTION AND PRIVACY</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">7.1 Data Collection and Use</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>We collect and process personal data as described in our Privacy Policy</li>
                  <li>You consent to data processing for service delivery and compliance</li>
                  <li>We may share data with regulators, law enforcement, and service providers</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">7.2 Data Security</h3>
                <ul className="list-disc pl-6">
                  <li>We implement industry-standard security measures</li>
                  <li>You are responsible for protecting your account credentials</li>
                  <li>Immediately report any suspected unauthorized access</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">8.1 Our Rights</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>We own all rights to our Services, software, and content</li>
                  <li>Our trademarks, logos, and branding are protected</li>
                  <li>You receive only a limited license to use our Services</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">8.2 Your Rights</h3>
                <ul className="list-disc pl-6">
                  <li>You retain ownership of your personal data and content</li>
                  <li>You grant us license to use your data as necessary for service delivery</li>
                  <li>You represent that you have rights to all information you provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">9. DISCLAIMERS AND WARRANTIES</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">9.1 Service Disclaimers</h3>
                <p className="mb-2 font-bold">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                  <li>ACCURACY OR RELIABILITY OF INFORMATION</li>
                  <li>SECURITY OF TRANSMISSIONS</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">9.2 No Financial Advice</h3>
                <ul className="list-disc pl-6">
                  <li>We do not provide financial, investment, tax, or legal advice</li>
                  <li>All information is for general purposes only</li>
                  <li>You should consult qualified professionals before making financial decisions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">10. LIMITATION OF LIABILITY</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">10.1 Liability Cap</h3>
                <p className="mb-2 font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE GREATER OF:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>$1,000 USD</li>
                  <li>The amount of fees you paid to us in the 12 months preceding the claim</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">10.2 Excluded Damages</h3>
                <p className="mb-2 font-bold">WE SHALL NOT BE LIABLE FOR:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
                  <li>LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES</li>
                  <li>DAMAGES RESULTING FROM THIRD-PARTY ACTIONS</li>
                  <li>FORCE MAJEURE EVENTS BEYOND OUR CONTROL</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">10.3 Exceptions</h3>
                <p className="mb-2">These limitations do not apply to:</p>
                <ul className="list-disc pl-6">
                  <li>Our gross negligence or willful misconduct</li>
                  <li>Death or personal injury caused by our negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Violations that cannot be excluded by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">11. INDEMNIFICATION</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless the Company and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Your breach of these Terms</li>
                  <li>Your use or misuse of the Services</li>
                  <li>Your violation of any law or third-party rights</li>
                  <li>Your negligent or wrongful conduct</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">12. DISPUTE RESOLUTION</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">12.1 Governing Law</h3>
                <p className="mb-4">These Terms are governed by the laws of Uganda, without regard to conflict of law principles.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">12.2 Dispute Resolution Process</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li><strong>Informal Resolution</strong>: Contact our customer support first</li>
                  <li><strong>Mediation</strong>: If unresolved, disputes may proceed to mediation</li>
                  <li><strong>Arbitration</strong>: Final disputes shall be resolved through binding arbitration</li>
                </ol>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">12.3 Arbitration Rules</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Arbitration shall be conducted under Uganda Commercial Arbitration Rules</li>
                  <li>Location: Kampala, Uganda</li>
                  <li>Language: English</li>
                  <li>Each party bears its own costs unless otherwise decided</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">12.4 Class Action Waiver</h3>
                <p>You agree that disputes must be brought individually and waive any right to participate in class actions or representative proceedings.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">13. ACCOUNT SUSPENSION AND TERMINATION</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">13.1 Termination by You</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>You may close your account at any time through our platform</li>
                  <li>You remain liable for all obligations incurred before termination</li>
                  <li>Some data retention may be required by law</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">13.2 Termination by Us</h3>
                <p className="mb-2">We may suspend or terminate your account immediately if:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>You breach these Terms</li>
                  <li>We suspect fraudulent or illegal activity</li>
                  <li>Required by law or regulation</li>
                  <li>You fail KYC/AML verification</li>
                  <li>Your account remains inactive for extended periods</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">13.3 Effect of Termination</h3>
                <ul className="list-disc pl-6">
                  <li>Access to Services will cease immediately</li>
                  <li>Outstanding obligations survive termination</li>
                  <li>We may retain data as required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">14. MODIFICATIONS TO TERMS</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">14.1 Right to Modify</h3>
                <p className="mb-2">We reserve the right to modify these Terms at any time. Material changes will be communicated through:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Email notification to registered users</li>
                  <li>In-app notifications</li>
                  <li>Website posting with 30 days' advance notice</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">14.2 Acceptance of Changes</h3>
                <p>Continued use of Services after modification constitutes acceptance of new Terms. If you disagree with changes, you must discontinue use and may close your account.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">15. REGULATORY COMPLIANCE</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">15.1 Licensing and Registration</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>We maintain all required licenses and registrations</li>
                  <li>Our Services are subject to financial regulatory oversight</li>
                  <li>We comply with applicable banking, securities, and consumer protection laws</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">15.2 Reporting Obligations</h3>
                <ul className="list-disc pl-6">
                  <li>We may report transactions to relevant authorities as required</li>
                  <li>You consent to such reporting and information sharing</li>
                  <li>We maintain records as required by applicable regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">16. THIRD-PARTY SERVICES</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">16.1 Integration Partners</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>We may integrate with third-party financial institutions and service providers</li>
                  <li>Third parties have their own terms and privacy policies</li>
                  <li>We are not responsible for third-party actions or omissions</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">16.2 External Links</h3>
                <ul className="list-disc pl-6">
                  <li>Our Services may contain links to external websites</li>
                  <li>We do not endorse or control external content</li>
                  <li>You access external sites at your own risk</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">17. FORCE MAJEURE</h2>
                <p className="mb-2">We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:</p>
                <ul className="list-disc pl-6">
                  <li>Natural disasters</li>
                  <li>Government actions or regulations</li>
                  <li>Cyber attacks or system failures</li>
                  <li>Labor disputes</li>
                  <li>Public health emergencies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">18. GENERAL PROVISIONS</h2>
                
                <h3 className="text-xl font-semibold text-[#353A80] mb-3">18.1 Entire Agreement</h3>
                <p className="mb-4">These Terms, together with our Privacy Policy and any additional agreements, constitute the complete agreement between parties.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">18.2 Severability</h3>
                <p className="mb-4">If any provision is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">18.3 No Waiver</h3>
                <p className="mb-4">Our failure to enforce any right or provision does not constitute a waiver of such right or provision.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">18.4 Assignment</h3>
                <p className="mb-4">You may not assign your rights under these Terms. We may assign our rights and obligations without restriction.</p>

                <h3 className="text-xl font-semibold text-[#353A80] mb-3">18.5 Survival</h3>
                <p>Provisions that by their nature should survive termination shall continue in effect after termination of these Terms.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">19. CONTACT INFORMATION</h2>
                <p className="mb-4">For questions about these Terms or our Services, contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Cyanase</p>
                  <ul className="space-y-1">
                    <li>Address: Kampala, Uganda</li>
                    <li>Email: <a href="mailto:legal@cyanase.com" className="text-[#F7A92D] hover:underline">legal@cyanase.com</a></li>
                    <li>Phone: +256 705 640 852</li>
                    <li>Website: <a href="https://cyanase.com" className="text-[#F7A92D] hover:underline">cyanase.com</a></li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#252859] mb-4">20. ACKNOWLEDGMENT</h2>
                <p className="mb-4 font-bold">BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Electronic Signature Accepted</strong></p>
                  <p>Date of Acceptance: [TIMESTAMP]</p>
                  <p>IP Address: [USER IP]</p>
                  <p>User ID: [USER IDENTIFIER]</p>
                </div>
              </section>

              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg font-semibold text-[#252859]">End of Terms and Conditions</p>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Document Version:</strong> 1.0</p>
                  <p><strong>Legal Review Date:</strong> [DATE]</p>
                  <p><strong>Next Review Date:</strong> [DATE + 12 MONTHS]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
