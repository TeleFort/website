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
import heroImage from '@/assets/booking/hero.jpg';

import consultationImage from '@/assets/booking/consultation.jpg';
import executionImage from '@/assets/booking/execution.jpg';
import innovationImage from '@/assets/booking/innovation.jpg';

import requestImage from '@/assets/booking/request.jpg';
import reviewImage from '@/assets/booking/review.jpg';
import confirmImage from '@/assets/booking/confirm.jpg';
import meetingImage from '@/assets/booking/meeting.jpg';


/* =========================================================
   DATA
========================================================= */
const whyBookCards = [
  {
    image: consultationImage,
    title: 'Strategic Consultation',
    text:
      'Expert guidance tailored to your project goals.',
  },

  {
    image: executionImage,
    title: 'Execution Excellence',
    text:
      'Engineering, procurement, and delivery with precision.',
  },

  {
    image: innovationImage,
    title: 'Future-Ready Solutions',
    text:
      'Technology-driven transformation for modern enterprises.',
  },
];


const bookingFlow = [
  {
    image: requestImage,
    title: 'Request',
  },

  {
    image: reviewImage,
    title: 'Review',
  },

  {
    image: confirmImage,
    title: 'Confirm',
  },

  {
    image: meetingImage,
    title: 'Consult',
  },
];


/* =========================================================
   MAIN
========================================================= */
function BookingPage() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    date: '',
    time: '',
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
        .collection('bookings')
        .create({
          ...formData,
          status: 'pending',
        });

      toast.success(
        'Consultation request submitted.'
      );


      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        date: '',
        time: '',
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
          Book Consultation | TeleFort
        </title>

      </Helmet>


      <div className="min-h-screen flex flex-col">

        <Header />


        <main className="flex-1">


          {/* HERO */}
          <PageHero
            image={heroImage}
            title="Schedule a Strategic Consultation"
            subtitle="Engineering, procurement, infrastructure, and emerging technology advisory."
          />


          <PageLayout>


            {/* =====================================================
               FORM SECTION
            ====================================================== */}
            <section>

              <div className="grid lg:grid-cols-5 gap-10">


                {/* LEFT */}
                <div className="lg:col-span-2 lg:pl-8">

                  <SectionHeader
                    title="Why Book With TeleFort"
                    subtitle="Strategic guidance backed by execution."
                  />


                  <div className="space-y-6">

                    {whyBookCards.map((item, index) => (

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
                          h-[220px]
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


                          <p className="text-white/90 text-sm">

                            {item.text}

                          </p>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                </div>



                {/* RIGHT */}
                <div className="lg:col-span-3 lg:pr-8">

                  <SectionHeader
                    title="Book Your Session"
                    subtitle="Tell us about your requirement."
                  />


                  <form
                    onSubmit={handleSubmit}
                    className="
                      bg-primary/5
                      border-2 border-primary/15
                      rounded-3xl
                      p-8
                      shadow-xl
                      space-y-5
                    "
                  >

                    <input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white
                        border-2 border-primary/15
                        rounded-xl
                        p-4
                      "
                    />


                    <input
                      name="organization"
                      placeholder="Organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="
                        w-full
                        bg-white
                        border-2 border-primary/15
                        rounded-xl
                        p-4
                      "
                    />


                    <input
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        bg-white
                        border-2 border-primary/15
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
                        rounded-xl
                        p-4
                      "
                    />


                    <div className="grid md:grid-cols-2 gap-5">

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          bg-white
                          border-2 border-primary/15
                          rounded-xl
                          p-4
                        "
                      />


                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          bg-white
                          border-2 border-primary/15
                          rounded-xl
                          p-4
                        "
                      />

                    </div>


                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Project details"
                      value={formData.message}
                      onChange={handleChange}
                      className="
                        w-full
                        bg-white
                        border-2 border-primary/15
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
                          ? 'Submitting...'
                          : 'Confirm Booking'
                      }

                    </button>

                  </form>

                </div>

              </div>

            </section>



            {/* =====================================================
               PROCESS
            ====================================================== */}
            <section>

              <SectionHeader
                title="How Booking Works"
                subtitle="A simple four-step engagement process."
              />


              <div className="grid md:grid-cols-4 gap-8">

                {bookingFlow.map((item, index) => (

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



            {/* CTA */}
            <CTASection
              title="Your Next Strategic Move Starts Here."
              subtitle="Book a consultation and let's build something impactful."
            />


          </PageLayout>


        </main>


        <Footer />

      </div>

    </>
  );
}

export default BookingPage;