import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
  Calendar,
  CheckCircle,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import PageHero from '@/components/PageHero.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
import CTASection from '@/components/CTASection.jsx';


/* =========================================================
   IMAGES
========================================================= */
import heroImage from '@/assets/about/hero.jpg';

import legacyImage from '@/assets/about/legacy.jpg';
import missionImage from '@/assets/about/mission.jpg';
import integrityImage from '@/assets/about/integrity.jpg';
import futureImage from '@/assets/about/future.jpg';

import journeyImage from '@/assets/about/journey.jpg';


/* =========================================================
   DATA
========================================================= */
const pillars = [
  {
    image: legacyImage,
    title: 'Corporate Legacy',
    description:
      'Established in 2009, TeleFort has built a reputation rooted in trust, execution excellence, and long-term strategic relationships.',
  },

  {
    image: missionImage,
    title: 'Strategic Mission',
    description:
      'Delivering engineering, infrastructure, procurement, and technology solutions that create measurable organizational value.',
  },

  {
    image: integrityImage,
    title: 'Operational Integrity',
    description:
      'Professionalism, accountability, transparency, compliance, and quality remain central to every engagement.',
  },

  {
    image: futureImage,
    title: 'Future Focus',
    description:
      'Artificial intelligence, automation, digital transformation, and emerging technologies shape our future roadmap.',
  },
];


const trustPoints = [
  'Established in 2009',
  'Public & Private Sector Experience',
  'Engineering + Technology Integration',
  'Nationwide Project Capability',
];


const values = [
  {
    title: 'Engineering Excellence',
    bg: 'from-blue-600 to-indigo-700',
  },

  {
    title: 'Strategic Partnerships',
    bg: 'from-emerald-600 to-green-700',
  },

  {
    title: 'Innovation & AI Adoption',
    bg: 'from-violet-600 to-purple-700',
  },

  {
    title: 'Reliable Execution',
    bg: 'from-orange-600 to-amber-700',
  },

  {
    title: 'Supply Chain Efficiency',
    bg: 'from-cyan-600 to-sky-700',
  },

  {
    title: 'National Development',
    bg: 'from-rose-600 to-pink-700',
  },
];


/* =========================================================
   MAIN
========================================================= */
function AboutPage() {

  return (
    <>
      <Helmet>

        <title>
          About Us - TeleFort (Pvt) Ltd
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
            title="Built on Experience. Driven by Innovation."
            subtitle="Since 2009, TeleFort has evolved into a diversified enterprise delivering engineering, procurement, industrial, and emerging technology solutions."
          />


          {/* =================================================
             TRUST BAR
          ================================================= */}
          <section className="border-y bg-primary/5">

            <div className="max-w-7xl mx-auto px-4 py-5">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {trustPoints.map((point) => (

                  <div
                    key={point}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      font-medium
                    "
                  >

                    <CheckCircle
                      className="
                        h-4
                        w-4
                        text-primary
                      "
                    />

                    {point}

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             FOUNDATION
          ================================================= */}
          <section className="py-16 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="The TeleFort Foundation"
                subtitle="The principles that guide every project, partnership, and innovation initiative."
              />


              <div className="grid md:grid-cols-2 gap-8">

                {pillars.map((item, index) => (

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

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                      "
                    />


                    <div className="absolute inset-0 bg-black/60" />


                    <div
                      className="
                        relative z-10
                        h-full
                        flex flex-col justify-end
                        p-8
                        text-white
                      "
                    >

                      <h3 className="text-3xl font-bold mb-4">

                        {item.title}

                      </h3>


                      <p className="text-white/90 leading-relaxed">

                        {item.description}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             JOURNEY
             Height now matches foundation cards
          ================================================= */}
          <section className="py-16">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="Our Journey"
                subtitle="A commitment to continuous growth and diversification."
              />


              <div className="grid lg:grid-cols-2 gap-12 items-center">


                {/* Image */}
                <div
                  className="
                    rounded-3xl
                    overflow-hidden
                    shadow-xl
                    h-[250px]
                  "
                >

                  <img
                    src={journeyImage}
                    alt="TeleFort Journey"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>


                {/* Content */}
                <div className="flex items-center">

                  <div className="flex gap-4">

                    <Calendar
                      className="
                        h-8
                        w-8
                        text-primary
                        mt-1
                      "
                    />


                    <div>

                      <h3 className="text-3xl font-bold mb-4">

                        Since 2009

                      </h3>


                      <p
                        className="
                          text-muted-foreground
                          leading-relaxed
                          text-lg
                        "
                      >

                        From traditional engineering roots to
                        infrastructure, procurement, industrial
                        trading, enterprise software, automation,
                        and AI-driven transformation—TeleFort
                        continues to evolve with industry needs.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
             VALUES
          ================================================= */}
          <section className="py-16 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="What Drives Us"
                subtitle="The values that shape every engagement."
              />


              <div className="grid md:grid-cols-3 gap-6">

                {values.map((item) => (

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
            title="Building Today. Enabling Tomorrow."
            subtitle="TeleFort combines proven experience, strategic execution, and emerging technologies to help organizations succeed."
          />

        </main>


        <Footer />

      </div>

    </>
  );
}

export default AboutPage;