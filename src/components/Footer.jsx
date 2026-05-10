import React from 'react';
import { Link } from 'react-router-dom';

import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react';


/* =========================================================
   STANDARD FOOTER
   Global vertical rhythm = pt-8 pb-8
========================================================= */
function Footer() {

  return (

    <footer className="bg-primary text-white">

      <div className="max-w-7xl mx-auto px-4 pt-8 pb-8">


        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          {/* COMPANY */}
          <div>

            <h3 className="text-2xl font-bold mb-4">

              TeleFort (Pvt) Ltd.

            </h3>


            <p className="text-white/80 leading-relaxed">

              Delivering engineering excellence,
              infrastructure development,
              general order supplies,
              industrial trading,
              and emerging technology solutions
              for public and private sector
              organizations.

            </p>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-4 text-secondary">

              Quick Links

            </h3>


            <div className="flex flex-col space-y-2">

              <Link
                to="/"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Home
              </Link>


              <Link
                to="/services"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Services
              </Link>


              <Link
                to="/about"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                About Us
              </Link>


              <Link
                to="/contact"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Contact
              </Link>


              <Link
                to="/booking"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Book Now
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-4 text-secondary">

              Contact Information

            </h3>


            <div className="space-y-3">


              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-secondary" />

                <span className="text-white/80">

                  +92 331 6559887

                </span>

              </div>


              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-secondary" />

                <span className="text-white/80">

                  telefort@gmail.com

                </span>

              </div>


              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-secondary" />

                <span className="text-white/80">

                  Lahore, Pakistan

                </span>

              </div>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div
          className="
            border-t border-white/20
            mt-8
            pt-6
            text-center
          "
        >

          <p className="text-white/70">

            © {new Date().getFullYear()}
            {' '}
            TeleFort (Pvt) Ltd.
            {' '}
            All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;