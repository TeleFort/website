import React from 'react';
import { motion } from 'framer-motion';


/* =========================================================
   STANDARD PAGE HERO
   Used by:
   - Home
   - About
   - Services
   - Future pages
========================================================= */
function PageHero({
  image,
  title,
  subtitle,

  /* Standard executive hero height */
  height = '65vh',
}) {

  return (

    <section
      className="
        relative
        flex
        items-center
        overflow-hidden
      "
      style={{
        minHeight: height,
      }}
    >


      {/* =====================================================
         BACKGROUND IMAGE
      ====================================================== */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/70" />

      </motion.div>


      {/* =====================================================
         CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* Title */}
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

            {title}

          </h1>


          {/* Subtitle */}
          <p
            className="
              text-lg
              md:text-xl
              text-white/90
              leading-relaxed
              max-w-3xl
            "
          >

            {subtitle}

          </p>

        </motion.div>

      </div>

    </section>

  );
}

export default PageHero;