
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench, Zap, Layers, Cog, Lightbulb, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: 'Complete Project Management',
      description: 'From initial planning to final delivery, we handle every aspect of your project with precision and care. Our comprehensive approach ensures nothing falls through the cracks.',
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Time is valuable. We deliver solutions quickly without compromising quality, getting your operations up and running when you need them most.',
    },
    {
      icon: Layers,
      title: 'Integrated Solutions',
      description: 'Our turnkey approach means all components work together seamlessly. We coordinate every element to create a cohesive, efficient system.',
    },
    {
      icon: Cog,
      title: 'Custom Engineering',
      description: 'Every business is unique. We design and build solutions tailored to your specific requirements, ensuring perfect alignment with your goals.',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Consulting',
      description: 'Benefit from our expertise and industry knowledge. We provide guidance to help you make informed decisions and optimize your operations.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We maintain rigorous quality standards throughout every project phase. Your satisfaction and success are our top priorities.',
    },
  ];

  const expertise = [
    'Infrastructure Development',
    'System Integration',
    'Process Optimization',
    'Technical Support',
    'Maintenance Services',
    'Training & Documentation',
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - TeleFort (Pvt.) Ltd</title>
        <meta
          name="description"
          content="Explore TeleFort's comprehensive turnkey solutions including project management, rapid implementation, integrated solutions, and custom engineering services."
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
                  Comprehensive turnkey solutions
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We provide end-to-end services designed to meet your unique business needs. From concept to completion, we're with you every step of the way.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ textWrap: 'balance' }}>
                  Our areas of expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We bring deep knowledge and proven experience across multiple domains.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {expertise.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 shadow-sm border border-border"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <p className="font-medium text-foreground">{area}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary rounded-2xl p-12 text-center text-primary-foreground"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
                  Let's build something great together
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Ready to discuss your project? Our team is here to help you find the perfect solution.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-3 text-base font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Start a Conversation
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
