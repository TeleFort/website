
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const values = [
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration. Our team works together to deliver exceptional results for every client.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Count on us to deliver on our promises. We build lasting relationships through consistent, dependable service.',
    },
    {
      icon: Target,
      title: 'Customer Satisfaction',
      description: 'Your success is our priority. We go above and beyond to ensure every project exceeds expectations.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>TeleFort (Pvt.) Ltd - Turnkey Solutions for Your Business</title>
        <meta
          name="description"
          content="TeleFort delivers comprehensive turnkey solutions with a commitment to customer satisfaction, teamwork, and reliability. Trust us to bring your projects to life."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1607615896122-6c919f897e55)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Turnkey solutions built on trust and reliability
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                  We deliver comprehensive solutions that bring your vision to life. With a focus on customer satisfaction and a commitment to excellence, TeleFort is your trusted partner for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ textWrap: 'balance' }}>
                  Why choose TeleFort
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our core values drive everything we do, ensuring exceptional results for every client.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
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

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
                  Ready to start your project?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Let's discuss how we can help bring your vision to life with our turnkey solutions.
                </p>
                <Button asChild size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
