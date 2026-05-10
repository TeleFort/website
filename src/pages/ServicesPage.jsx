import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import PageHero from '@/components/PageHero.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
import CTASection from '@/components/CTASection.jsx';


/* =========================================================
   HERO + SERVICE IMAGES
========================================================= */
import heroImage from '@/assets/services/hero.jpg';

import engineeringImage from '@/assets/services/engineering.jpg';
import supplyImage from '@/assets/services/supply.jpg';
import tradingImage from '@/assets/services/trading.jpg';
import technologyImage from '@/assets/services/technology.jpg';
import consultancyImage from '@/assets/services/consultancy.jpg';
import sourcingImage from '@/assets/services/sourcing.jpg';


/* =========================================================
   WORKFLOW IMAGES
========================================================= */
import consultImage from '@/assets/process/consult.jpg';
import planImage from '@/assets/process/plan.jpg';
import executeImage from '@/assets/process/execute.jpg';
import deliverImage from '@/assets/process/deliver.jpg';


/* =========================================================
   DATA
========================================================= */
const services = [
  {
    image: engineeringImage,
    title: 'Engineering & Infrastructure',
    description:
      'Design, development, construction, installation, system integration, and infrastructure execution.',
  },

  {
    image: supplyImage,
    title: 'General Order Supplies',
    description:
      'Reliable procurement and supply of industrial equipment, machinery, materials, and technical resources.',
  },

  {
    image: tradingImage,
    title: 'Industrial Trading',
    description:
      'Trading of engineering materials, technical devices, industrial goods, and value-added products.',
  },

  {
    image: technologyImage,
    title: 'Emerging Technologies',
    description:
      'AI, digital transformation, automation, and future-ready technology solutions.',
  },

  {
    image: consultancyImage,
    title: 'Project Management & Consultancy',
    description:
      'Technical consultancy, feasibility studies, planning, execution, and optimization.',
  },

  {
    image: sourcingImage,
    title: 'Import, Export & Strategic Sourcing',
    description:
      'Global sourcing, vendor development, logistics, and supply chain execution.',
  },
];


const workflow = [
  {
    image: consultImage,
    title: 'Consult',
  },

  {
    image: planImage,
    title: 'Plan',
  },

  {
    image: executeImage,
    title: 'Execute',
  },

  {
    image: deliverImage,
    title: 'Deliver',
  },
];


const expertise = [
  {
    title: 'Engineering Projects',
    bg: 'from-blue-600 to-indigo-700',
  },

  {
    title: 'Infrastructure Development',
    bg: 'from-emerald-600 to-green-700',
  },

  {
    title: 'Industrial Procurement',
    bg: 'from-violet-600 to-purple-700',
  },

  {
    title: 'Government Contracts',
    bg: 'from-orange-600 to-amber-700',
  },

  {
    title: 'AI & Digital Transformation',
    bg: 'from-cyan-600 to-sky-700',
  },

  {
    title: 'Supply Chain Management',
    bg: 'from-rose-600 to-pink-700',
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */
function ServicesPage() {

  return (
    <>
      <Helmet>

        <title>
          Services - TeleFort (Pvt) Ltd
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
            title="Integrated Solutions. Reliable Execution."
            subtitle="Engineering, procurement, industrial operations, strategic sourcing, and future-ready technologies."
          />


          {/* =================================================
             SERVICES
             Reduced image height for executive look
          ================================================= */}
          <section className="py-12 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="Core Service Portfolio"
                subtitle="End-to-end capabilities built for transformation."
              />


              <div className="grid md:grid-cols-2 gap-8">

                {services.map((service, index) => (

                  <motion.div
                    key={service.title}
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
                      src={service.image}
                      alt={service.title}
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

                        {service.title}

                      </h3>


                      <p className="text-white/90">

                        {service.description}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             WORKFLOW
             Arrows now connect BETWEEN cards
          ================================================= */}
          <section className="py-12 bg-background">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="How We Execute"
                subtitle="A disciplined workflow from concept to successful delivery."
              />


              <div className="grid md:grid-cols-4 gap-10">

                {workflow.map((step, index) => (

                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >


                    {/* =====================================
                       CONNECTOR ARROW
                       Positioned outside card
                    ===================================== */}
                    {index < workflow.length - 1 && (

                      <div
                        className="
                          hidden
                          md:flex
                          absolute
                          top-[50px]
                          left-full
                          -translate-y-1/2
                          items-center
                          z-30
                        "
                      >

                        {/* Line */}
                        <div
                          className="
                            w-10
                            border-t-[3px]
                            border-primary
                          "
                        />


                        {/* Arrow Head */}
                        <div
                          className="
                            w-0
                            h-0
                            border-t-[6px]
                            border-b-[6px]
                            border-l-[10px]
                            border-t-transparent
                            border-b-transparent
                            border-l-primary
                          "
                        />

                      </div>

                    )}


                    {/* =====================================
                       IMAGE
                    ===================================== */}
                    <div
                      className="
                        rounded-3xl
                        overflow-hidden
                        shadow-xl
                      "
                    >

                      <img
                        src={step.image}
                        alt={step.title}
                        className="
                          h-24
                          w-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />

                    </div>


                    {/* =====================================
                       TITLE
                    ===================================== */}
                    <div className="text-center mt-4">

                      <h3
                        className="
                          text-xl
                          font-bold
                        "
                      >

                        {step.title}

                      </h3>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>


          {/* =================================================
             EXPERTISE
          ================================================= */}
          <section className="py-12 bg-muted">

            <div className="max-w-7xl mx-auto px-4">

              <SectionHeader
                title="Areas of Expertise"
                subtitle="Built on experience, execution, and innovation."
              />


              <div className="grid md:grid-cols-3 gap-6">

                {expertise.map((item) => (

                  <div
                    key={item.title}
                    className={`
                      rounded-3xl
                      bg-gradient-to-br
                      ${item.bg}
                      p-8
                      text-white
                      shadow-xl
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
            title="Let’s Build the Future Together"
            subtitle="From infrastructure to intelligent systems, TeleFort delivers solutions that scale."
          />

        </main>


        <Footer />

      </div>

    </>
  );
}

export default ServicesPage;