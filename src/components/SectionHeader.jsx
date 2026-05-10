import React from 'react';


/* =========================================================
   STANDARD SECTION HEADER

   Purpose:
   Creates uniform vertical rhythm across all pages.

   Old:
   mb-16 → caused double-spacing with section padding

   New:
   py-10 → equal top + bottom spacing
========================================================= */
function SectionHeader({
  title,
  subtitle,
}) {

  return (

    <div
      className="
        text-center
        py-10
      "
    >


      {/* TITLE */}
      <h2
        className="
          text-4xl
          font-bold
          mb-4
        "
      >

        {title}

      </h2>


      {/* SUBTITLE */}
      {subtitle && (

        <p
          className="
            text-lg
            text-muted-foreground
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >

          {subtitle}

        </p>

      )}

    </div>

  );
}

export default SectionHeader;