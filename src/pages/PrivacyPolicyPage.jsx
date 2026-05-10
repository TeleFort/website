
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>{`Privacy Policy - TeleFort (Pvt.) Ltd`}</title>
        <meta
          name="description"
          content="Read the Privacy Policy of TeleFort (Pvt.) Ltd to understand how we collect, use, and protect your personal data and privacy."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <section className="py-16 md:py-16">
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
                  Privacy Policy
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
                      TeleFort (Pvt.) Ltd ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully to understand our views and practices regarding your personal data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      2. Information We Collect
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. This may include your name, email address, phone number, and physical address when you fill out contact forms. We also automatically collect certain usage data, such as your IP address and browser type, when you navigate our site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. How We Use Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use the information we collect or receive to communicate directly with you, provide and maintain our services, respond to your inquiries, and offer customer support. Additionally, we use this data to monitor the usage of our website, gather analysis so that we can improve our digital presence, and to detect, prevent, and address technical issues.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Data Security
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The security of your personal information is extremely important to us. We implement a variety of security measures designed to maintain the safety of your personal information when you enter, submit, or access it. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security against unauthorized access or data breaches.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      5. Your Rights
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have certain data protection rights regarding your personal information. You have the right to request access to, update, or delete the information we have on you. You also have the right to object to our processing of your personal data, the right to request restriction of processing, and the right to data portability. To exercise these rights, please contact us directly.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Third-Party Services
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      7. Contact Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions, comments, or concerns about this Privacy Policy or our data handling practices, please contact our privacy team at:
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

export default PrivacyPolicyPage;
