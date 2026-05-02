
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';

function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'Meridian Technologies',
      quote: 'Working with TeleFort transformed our operations. Their team delivered exactly what we needed, on time and within budget. The level of professionalism and attention to detail was outstanding.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      company: 'Coastal Logistics',
      quote: 'We needed a partner we could trust with a complex integration project. TeleFort exceeded our expectations at every turn. Their expertise and commitment to our success made all the difference.',
      rating: 5,
    },
    {
      name: 'Anika Bergström',
      company: 'Nordic Solutions Group',
      quote: 'The turnkey approach saved us months of coordination headaches. TeleFort handled everything seamlessly, and the results speak for themselves. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Raj Patel',
      company: 'Summit Industries',
      quote: 'From our first conversation to final delivery, the TeleFort team was responsive, knowledgeable, and genuinely invested in our success. They\'ve become our go-to partner for critical projects.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      company: 'Apex Manufacturing',
      quote: 'What impressed us most was their ability to understand our unique challenges and design solutions that fit perfectly. The implementation was smooth, and the ongoing support has been excellent.',
      rating: 5,
    },
    {
      name: 'Kwame Asante',
      company: 'Horizon Ventures',
      quote: 'TeleFort delivered a comprehensive solution that integrated seamlessly with our existing systems. Their technical expertise and project management skills are top-tier. We couldn\'t be happier with the results.',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials - TeleFort (Pvt.) Ltd</title>
        <meta
          name="description"
          content="Read what our clients say about TeleFort's turnkey solutions, professional service, and commitment to customer satisfaction."
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
                  What our clients say
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Don't just take our word for it. Here's what businesses across industries have to say about working with TeleFort.
                </p>
              </motion.div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    company={testimonial.company}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    index={index}
                  />
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
                  Ready to join our satisfied clients?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Let's discuss how we can help you achieve similar results with our turnkey solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-3 text-base font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Get in Touch
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

export default TestimonialsPage;
