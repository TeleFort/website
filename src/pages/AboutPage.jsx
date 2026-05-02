
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional turnkey solutions that drive business success. We combine technical expertise with a deep understanding of our clients\' needs to create lasting value.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with our clients. We listen, understand, and deliver solutions that truly address your challenges and opportunities.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do. Quality, reliability, and attention to detail are non-negotiable.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in our team, our processes, and our technology to stay ahead. Your success depends on our ability to evolve and improve.',
    },
  ];

  const culture = [
    {
      title: 'Collaborative Environment',
      description: 'We believe the best solutions come from diverse perspectives working together. Our team culture encourages open communication and shared success.',
    },
    {
      title: 'Accountability',
      description: 'We take ownership of our commitments. When we say we\'ll deliver, you can count on it. This reliability is the foundation of our client relationships.',
    },
    {
      title: 'Innovation',
      description: 'We stay current with industry trends and emerging technologies, bringing fresh ideas and proven approaches to every project.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TeleFort (Pvt.) Ltd</title>
        <meta
          name="description"
          content="Learn about TeleFort's mission, values, and commitment to delivering exceptional turnkey solutions through teamwork, reliability, and customer satisfaction."
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
                  Building trust through reliable solutions
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  At TeleFort, we're more than a service provider. We're your partner in success, committed to delivering turnkey solutions that exceed expectations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-lg border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ textWrap: 'balance' }}>
                  Our company culture
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The values that guide our work and define who we are as a team.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {culture.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted rounded-xl p-8"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
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
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ textWrap: 'balance' }}>
                  Committed to your success
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our team brings together diverse expertise and a shared commitment to excellence. We don't just complete projects — we build partnerships that last. Every member of our team is dedicated to understanding your needs and delivering solutions that make a real difference.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you work with TeleFort, you're working with professionals who care about your success as much as you do. That's the foundation of everything we build together.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
