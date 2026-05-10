import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import { toast } from 'sonner';

import pb from '@/lib/pocketbaseClient';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import PageLayout from '@/components/PageLayout.jsx';
import PageHero from '@/components/PageHero.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
import CTASection from '@/components/CTASection.jsx';


/* =========================================================
   IMAGES
========================================================= */
import heroImage from '@/assets/contact/hero.jpg';

import officeImage from '@/assets/contact/office.jpg';
import businessImage from '@/assets/contact/business.jpg';
import partnershipImage from '@/assets/contact/partnership.jpg';

import companyImage from '@/assets/contact/company.jpg';


/* =========================================================
   DATA
========================================================= */
const contactInfo = [
  {
    image: officeImage,
    title: 'Corporate Office',
    value: 'Lahore, Pakistan',
  },

  {
    image: businessImage,
    title: 'Business Development',
    value: '+92 331 6559887',
  },

  {
    image: partnershipImage,
    title: 'Strategic Partnerships',
    value: 'telefort@gmail.com',
  },
];


function ContactPage() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });


  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      await pb
        .collection('contact_messages')
        .create({
          ...formData,
          status: 'unread',
        });

      toast.success(
        'Message sent successfully.'
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

    } catch (error) {

      console.error(error);

      toast.error(
        'Something went wrong.'
      );

    } finally {

      setLoading(false);

    }

  }


  return (
    <>
      <Helmet>

        <title>
          Contact Us | TeleFort (Pvt) Ltd.
        </title>

      </Helmet>


      <div className="min-h-screen flex flex-col">

        <Header />


        <main className="flex-1">


          {/* HERO */}
          <PageHero
            image={heroImage}
            title="Let's Build Something Meaningful Together"
            subtitle="Engineering, procurement, infrastructure, industrial operations, and future-ready technologies."
          />


          <PageLayout>


            {/* =====================================================
               CONTACT + FORM
            ====================================================== */}
            <section>

              <div className="grid lg:grid-cols-5 gap-10 items-start">


                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 lg:pl-8">

                  <SectionHeader
                    title="Connect With TeleFort"
                    subtitle="Multiple ways to engage with our team."
                  />


                  <div className="space-y-6">

                    {contactInfo.map((item, index) => (

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

                          <h3 className="text-xl font-bold mb-1">
                            {item.title}
                          </h3>


                          <p className="text-white/90">
                            {item.value}
                          </p>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                </div>



                {/* RIGHT COLUMN */}
                <div className="lg:col-span-3 lg:pr-8">

                  <SectionHeader
                    title="Send Us a Message"
                    subtitle="Tell us about your project, opportunity, or requirement."
                  />


                  <form
                    onSubmit={handleSubmit}
                    className="
                      bg-primary/5
                      border-2
                      border-primary/15
                      rounded-3xl
                      p-8
                      shadow-x1
                      space-y-5
                    "
                  >

                    <input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white 
                        border-2 border-primary/15
                        focus:border-primary
                        focus:outline-none
                        text-foreground
                        rounded-xl
                        p-4
                      "
                    />


                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white 
                        border-2 border-primary/15
                        focus:border-primary
                        focus:outline-none
                        text-foreground
                        rounded-xl
                        p-4
                      "
                    />


                    <input
                      name="phone"
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white 
                        border-2 border-primary/15
                        focus:border-primary
                        focus:outline-none
                        text-foreground
                        rounded-xl
                        p-4
                      "
                    />


                    <input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white 
                        border-2 border-primary/15
                        focus:border-primary
                        focus:outline-none
                        text-foreground
                        rounded-xl
                        p-4
                      "
                    />


                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white 
                        border-2 border-primary/15
                        focus:border-primary
                        focus:outline-none
                        text-foreground
                        rounded-xl
                        p-4
                      "
                    />


                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        w-full
                        bg-primary
                        text-white
                        rounded-xl
                        py-4
                        font-semibold
                        hover:opacity-90
                        transition
                      "
                    >

                      {
                        loading
                          ? 'Sending...'
                          : 'Send Message'
                      }

                    </button>

                  </form>

                </div>

              </div>

            </section>



            {/* COMPANY */}
            <section>

              <SectionHeader
                title="Why Partner With TeleFort"
                subtitle="A legacy of trust, execution, and innovation."
              />


              <div className="max-w-5xl mx-auto">

                <div
                  className="
                    relative
                    rounded-3xl
                    overflow-hidden
                    shadow-xl
                    h-[170px]
                  "
                >

                  <img
                    src={companyImage}
                    alt="TeleFort"
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
                      flex items-end
                      p-8
                      text-white
                    "
                  >

                    <p className="max-w-3xl text-lg leading-relaxed">

                      Since 2009, TeleFort has delivered
                      engineering excellence, strategic
                      procurement, industrial capability,
                      and emerging technology leadership.

                    </p>

                  </div>

                </div>

              </div>

            </section>



            {/* CTA */}
            <CTASection
              title="Your Next Strategic Project Starts Here."
              subtitle="Let's build scalable, future-ready solutions together."
            />


          </PageLayout>


        </main>


        <Footer />

      </div>

    </>
  );
}

export default ContactPage;