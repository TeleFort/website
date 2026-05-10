import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import PageHero from '@/components/PageHero.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
import CTASection from '@/components/CTASection.jsx';


/* =========================================================
   IMAGES
========================================================= */
import heroImage from '@/assets/testimonials/hero.jpg';

import integrityImage from '@/assets/testimonials/integrity.jpg';
import deliveryImage from '@/assets/testimonials/delivery.jpg';
import innovationImage from '@/assets/testimonials/innovation.jpg';


/* =========================================================
   DATA
========================================================= */
const testimonials = [
  {
    image: integrityImage,
    title: 'Execution with Integrity',
    quote:
      'TeleFort approaches every engagement with professionalism, accountability, compliance, and a commitment to quality execution.',
  },

  {
    image: deliveryImage,
    title: 'Trusted Project Delivery',
    quote:
      'From engineering support to strategic procurement, TeleFort consistently demonstrates operational reliability and disciplined execution.',
  },

  {
    image: innovationImage,
    title: 'Future-Ready Solutions',
    quote:
      'TeleFort combines proven operational capability with emerging technologies, helping organizations prepare for tomorrow.',
  },
];


const strengths = [
  {
    title: 'Engineering & Infrastructure',
    bg: 'from-blue-600 to-indigo-700',
  },

  {
    title: 'General Order Supplies',
    bg: 'from-emerald-600 to-green-700',
  },

  {
    title: 'Industrial Trading',
    bg: 'from-violet-600 to-purple-700',
  },

  {
    title: 'Strategic Procurement',
    bg: 'from-orange-600 to-amber-700',
  },

  {
    title: 'Technical Consultancy',
    bg: 'from-cyan-600 to-sky-700',
  },

  {
    title: 'Emerging Technologies',
    bg: 'from-rose-600 to-pink-700',
  },

  {
    title: 'AI-Driven Innovation',
    bg: 'from-fuchsia-600 to-purple-700',
  },

  {
    title: 'Public & Private Sector Support',
    bg: 'from-lime-600 to-emerald-700',
  },

  {
    title: 'Long-Term Partnerships',
    bg: 'from-red-600 to-orange-700',
  },
];


/* =========================================================
   MAIN
========================================================= */
function TestimonialsPage() {

  return (
    <>
      <Helmet>

        <title>
          Client Confidence - TeleFort (Pvt) Ltd
        </title>

      </Helmet>


      <div className="min-h-screen flex flex-col">

        <Header />


        <main className="flex-1">


          {/* =================================================
             HERO
          ================================================= */}
          <PageHero
            image={heroImage}
            title="Client Confidence"
            subtitle="Built on trust, execution excellence, and long-term strategic relationships since 2009."
          />


          {/* =================================================
             TRUST STATEMENTS
          ================================================= */}
          <section className="py-16 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="Why Clients Trust TeleFort"
                subtitle="Confidence built through measurable execution and lasting relationships."
              />


              <div className="grid md:grid-cols-3 gap-8">

                {testimonials.map((item, index) => (

                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="
                      relative
                      rounded-3xl
                      overflow-hidden
                      shadow-xl
                      min-h-[250px]
                    "
                  >

                    {/* Background image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                      "
                    />


                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60" />


                    {/* Content */}
                    <div
                      className="
                        relative z-10
                        h-full
                        flex flex-col justify-end
                        p-8
                        text-white
                      "
                    >

                      <h3 className="text-2xl font-bold mb-4">

                        {item.title}

                      </h3>


                      <p className="text-white/90 leading-relaxed">

                        {item.quote}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             CAPABILITIES
          ================================================= */}
          <section className="py-16 bg-background">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="Why Organizations Work With Us"
                subtitle="Confidence built through capability, consistency, and innovation."
              />


              <div className="grid md:grid-cols-3 gap-6">

                {strengths.map((item) => (

                  <div
                    key={item.title}
                    className={`
                      rounded-3xl
                      bg-gradient-to-br
                      ${item.bg}
                      p-8
                      text-white
                      shadow-xl
                      hover:-translate-y-1
                      transition-all
                    `}
                  >

                    <h3 className="text-xl font-semibold">

                      {item.title}

                    </h3>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             CTA
          ================================================= */}
          <CTASection
            title="Relationships Built to Last"
            subtitle="TeleFort believes trust is earned through delivery, integrity, and measurable results."
          />

        </main>


        <Footer />

      </div>

    </>
  );
}

export default TestimonialsPage;