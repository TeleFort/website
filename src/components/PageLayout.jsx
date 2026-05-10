import React from 'react';


/* =========================================================
   GLOBAL PAGE LAYOUT
   Controls uniform vertical spacing across all pages
========================================================= */
function PageLayout({ children }) {

  return (

    <div
      className="
        flex
        flex-col
        gap-16
        md:gap-20
      "
    >

      {children}

    </div>

  );
}

export default PageLayout;