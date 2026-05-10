import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import PageLayout from '@/components/PageLayout.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
import CTASection from '@/components/CTASection.jsx';


/* =========================================================
   HERO
========================================================= */
import heroImage from '@/assets/home/hero.jpg';


/* =========================================================
   CORE CAPABILITIES
========================================================= */
import partnershipImage from '@/assets/home/partnership.jpg';
import reliabilityImage from '@/assets/home/reliability.jpg';
import innovationImage from '@/assets/home/innovation.jpg';


/* =========================================================
   INDUSTRIES
========================================================= */
import governmentImage from '@/assets/home/government.jpg';
import telecomImage from '@/assets/home/telecom.jpg';
import defenceImage from '@/assets/home/defence.jpg';
import educationImage from '@/assets/home/education.jpg';
import healthcareImage from '@/assets/home/healthcare.jpg';
import infrastructureImage from '@/assets/home/infrastructure.jpg';


/* =========================================================
   DATA
========================================================= */
const capabilities = [
  {
    image: partnershipImage,
    title: 'Strategic Partnerships',
    description:
      'We build long-term relationships with clients, institutions, suppliers, and strategic stakeholders.',
  },

  {
    image: reliabilityImage,
    title: 'Operational Reliability',
    description:
      'Projects, procurement, and technology solutions delivered with consistency, accountability, and trust.',
  },

  {
    image: innovationImage,
    title: 'Innovation & AI',
    description:
      'Emerging technologies, automation, artificial intelligence, and digital transformation initiatives.',
  },
];


const industries = [
  {
    image: governmentImage,
    title: 'Government',
  },

  {
    image: telecomImage,
    title: 'Telecom',
  },

  {
    image: defenceImage,
    title: 'Defence',
  },

  {
    image: educationImage,
    title: 'Education',
  },

  {
    image: healthcareImage,
    title: 'Healthcare',
  },

  {
    image: infrastructureImage,
    title: 'Infrastructure',
  },
];


/* =========================================================
   MAIN
========================================================= */
function HomePage() {

  return (
    <>
      <Helmet>

        <title>
          TeleFort (Pvt) Ltd
        </title>

      </Helmet>


      <div className="min-h-screen flex flex-col bg-background">

        <Header />


        <main className="flex-1">


          {/* =====================================================
             HERO
          ====================================================== */}
          <section
            className="
              relative
              flex
              items-center
              overflow-hidden
            "
            style={{ minHeight: '65vh' }}
          >

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

              <div className="absolute inset-0 bg-black/70" />

            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-4">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
              >

                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    text-white
                    leading-tight
                    mb-6
                  "
                >

                  Engineering Tomorrow with Infrastructure,
                  Supply & Emerging Technologies

                </h1>


                <p
                  className="
                    text-xl
                    text-white/90
                    leading-relaxed
                    mb-8
                  "
                >

                  TeleFort delivers engineering excellence,
                  infrastructure development, strategic procurement,
                  industrial operations, and future-ready technologies.

                </p>


                <div className="flex gap-4 flex-wrap">

                  <Button asChild size="lg">

                    <Link to="/contact">

                      Get Started

                      <ArrowRight className="ml-2 h-5 w-5" />

                    </Link>

                  </Button>


                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="
                      bg-white/10
                      text-white
                      border-white/20
                    "
                  >

                    <Link to="/services">

                      Explore Services

                    </Link>

                  </Button>

                </div>

              </motion.div>

            </div>

          </section>



          <PageLayout>


            {/* =====================================================
               CORE CAPABILITIES
            ====================================================== */}
            <section>

              <SectionHeader
                title="Core Capabilities"
                subtitle="Strategic strengths that power every engagement."
              />


              <div className="grid md:grid-cols-3 gap-8">

                {capabilities.map((item, index) => (

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
                      h-[170px]
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
                        p-6
                        text-white
                      "
                    >

                      <h3 className="text-2xl font-bold mb-2">

                        {item.title}

                      </h3>


                      <p className="text-sm text-white/90">

                        {item.description}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </section>



            {/* =====================================================
               INDUSTRIES
            ====================================================== */}
            <section>

              <SectionHeader
                title="Industries We Serve"
                subtitle="Supporting critical sectors with scalable solutions."
              />


              <div className="grid md:grid-cols-3 gap-8">

                {industries.map((item, index) => (

                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="
                      relative
                      rounded-3xl
                      overflow-hidden
                      shadow-xl
                      h-[170px]
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


                    <div className="absolute inset-0 bg-black/50" />


                    <div
                      className="
                        relative z-10
                        h-full
                        flex items-end
                        p-6
                        text-white
                      "
                    >

                      <h3 className="text-2xl font-bold">

                        {item.title}

                      </h3>

                    </div>

                  </motion.div>

                ))}

              </div>

            </section>



            {/* =====================================================
               CTA
            ====================================================== */}
            <CTASection
              title="Building Industry. Powering Innovation. Enabling the Future."
              subtitle="Partner with TeleFort for engineering excellence, strategic supply solutions, and future-ready technologies."
            />


          </PageLayout>


        </main>


        <Footer />

      </div>

    </>
  );
}

export default HomePage;