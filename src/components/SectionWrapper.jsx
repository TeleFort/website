import React from 'react';


/* =========================================================
   GLOBAL SECTION WRAPPER

   Purpose:
   Creates consistent spacing across all pages.

   Usage:

   <SectionWrapper>
      content
   </SectionWrapper>

   <SectionWrapper bg="bg-muted">
      content
   </SectionWrapper>

   <SectionWrapper width="5xl">
      content
   </SectionWrapper>
========================================================= */
function SectionWrapper({
  children,
  bg = 'bg-background',
  width = '7xl',
}) {

  const maxWidth = `max-w-${width}`;


  return (

    <section
      className={`
        ${bg}
        py-12
      `}
    >

      <div
        className={`
          ${maxWidth}
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        `}
      >

        {children}

      </div>

    </section>

  );
}

export default SectionWrapper;