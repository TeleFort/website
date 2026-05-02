
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>{`Terms of Service - TeleFort (Pvt.) Ltd`}</title>
        <meta
          name="description"
          content="Review the Terms of Service for TeleFort (Pvt.) Ltd. Understand the rules, guidelines, and agreements for using our website and services."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Terms of Service
                </h1>
                <p className="text-muted-foreground mb-12">
                  Last Updated: May 1, 2026
                </p>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to TeleFort (Pvt.) Ltd. By accessing our website and utilizing our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services. These terms apply to all visitors, users, and others who access or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      2. User Responsibilities
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Users are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under their account. You agree to use our website and services only for lawful purposes. You are strictly prohibited from violating security features, transmitting harmful code, engaging in disruptive data extraction methods, or using our services to harass, abuse, or harm others.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. Intellectual Property
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, features, and functionality on this website—including but not limited to text, graphics, logos, images, and software—are owned by TeleFort (Pvt.) Ltd or its licensors and are protected by international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Limitation of Liability
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the fullest extent permitted by applicable law, TeleFort (Pvt.) Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      5. Termination
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      TeleFort (Pvt.) Ltd may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the website and services will cease immediately.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Governing Law
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      7. Contact Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions, concerns, or disputes regarding these Terms of Service, please contact us at:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
                      <li><strong>Email:</strong> telefort@gmail.com</li>
                      <li><strong>Phone:</strong> +92 331 655 9887</li>
                      <li><strong>Address:</strong> 245-B, Lake City Meadows, Lahore, Pakistan</li>
                    </ul>
                  </section>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default TermsOfServicePage;
