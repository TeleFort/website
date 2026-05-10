import React from 'react';


/* =========================================================
   PREMIUM GRADIENT ICON BADGE
   Used across all public pages
========================================================= */
function IconBadge({
  Icon,
  bg = 'from-blue-500 to-indigo-600',
}) {

  return (

    <div
      className={`
        w-14 h-14 rounded-2xl
        bg-gradient-to-br ${bg}
        shadow-lg
        flex items-center justify-center
      `}
    >

      <Icon className="h-7 w-7 text-white" />

    </div>

  );
}

export default IconBadge;