
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+92 331 655 9887',
      link: 'tel:+923316559887',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'telefort@gmail.com',
      link: 'mailto:telefort@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '245-B, Lake City Meadows, Lahore, Pakistan',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - TeleFort (Pvt.) Ltd</title>
        <meta
          name="description"
          content="Get in touch with TeleFort to discuss your project requirements. We're here to help you find the perfect turnkey solution for your business."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Let's start a conversation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Reach out to discuss how we can help bring your vision to life.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                    <h2 className="text-2xl font-semibold text-card-foreground mb-6">Send us a message</h2>
                    <ContactForm />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-6">Contact information</h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-start space-x-4"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground mb-1">{info.title}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.details}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Quick response guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
