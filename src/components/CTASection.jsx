import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';


/* =========================================================
   STANDARD CTA SECTION
   - Balanced vertical spacing (top = bottom)
   - Matches global spacing system
   - Used across all pages
========================================================= */
function CTASection({
  title,
  subtitle,
}) {

  return (

    <section
      className="
        pt-10
        pb-10
      "
    >

      <div className="max-w-5xl mx-auto px-4">

        <div
          className="
            bg-primary
            rounded-3xl
            p-6 md:p-8
            text-center
            text-white
            shadow-xl
          "
        >


          {/* =========================================
             TITLE
          ========================================= */}
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              mb-4
            "
          >
            {title}
          </h2>


          {/* =========================================
             SUBTITLE
          ========================================= */}
          <p
            className="
              text-lg
              md:text-xl
              opacity-90
              mb-6
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            {subtitle}
          </p>


          {/* =========================================
             ACTION BUTTON
          ========================================= */}
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="
              text-primary
              font-semibold
            "
          >
            <Link to="/contact">
              Contact Us Today
            </Link>
          </Button>

        </div>

      </div>

    </section>

  );
}

export default CTASection;