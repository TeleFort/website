import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

import logo from '@/assets/telefort-logo-primary-green.svg';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';


/* =========================================================
   HEADER
========================================================= */
function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/booking' },
  ];


  function isActive(path) {

    return location.pathname === path;

  }


  return (

    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        bg-background/95
        backdrop-blur
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="flex h-24 items-center justify-between">


          {/* =====================================================
             LOGO
             Brand guide: min 120 px wide, clear space = one star
             height, never stretched (fixed width, auto height).
          ====================================================== */}
          <Link
            to="/"
            className="flex items-center gap-4 shrink-0"
          >

            <img
              src={logo}
              alt="TeleFort"
              width="128"
              height="75"
              className="w-[128px] h-auto shrink-0"
            />


            <div className="hidden lg:block">

              <p className="text-lg font-bold text-primary">

                TeleFort (Pvt) Ltd.

              </p>


              <p className="text-xs text-muted-foreground">

                Established 2009

              </p>

            </div>

          </Link>



          {/* =====================================================
             DESKTOP NAV
          ====================================================== */}
          <nav className="hidden md:flex items-center gap-1">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-2.5
                  xl:px-4
                  py-2
                  rounded-xl
                  whitespace-nowrap
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'hover:bg-muted hover:text-primary'
                  }
                `}
              >

                {link.name}

              </Link>

            ))}

          </nav>



          {/* =====================================================
             DESKTOP CTA
          ====================================================== */}
          <Link
            to="/booking"
            className="
              hidden md:flex
              items-center
              justify-center
              px-4
              xl:px-6
              py-2.5
              rounded-xl
              whitespace-nowrap
              font-semibold
              bg-secondary
              text-primary
              hover:opacity-90
              transition
              cursor-pointer
            "
          >

            Get Started

          </Link>



          {/* =====================================================
             MOBILE MENU
          ====================================================== */}
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >

            <SheetTrigger asChild className="md:hidden">

              <Button
                variant="ghost"
                size="icon"
              >

                <Menu className="h-6 w-6" />

              </Button>

            </SheetTrigger>



            <SheetContent
              side="right"
              className="w-[300px]"
            >


              <div className="mt-8 mb-8">

                <img
                  src={logo}
                  alt="TeleFort"
                  width="128"
                  height="75"
                  className="w-[128px] h-auto"
                />

              </div>



              <nav className="flex flex-col gap-3">


                {navLinks.map((link) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-4
                      py-3
                      rounded-xl
                      font-medium
                      transition
                      ${
                        isActive(link.path)
                          ? 'bg-primary text-white'
                          : 'hover:bg-muted'
                      }
                    `}
                  >

                    {link.name}

                  </Link>

                ))}



                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-4
                    px-4
                    py-3
                    rounded-xl
                    text-center
                    font-semibold
                    bg-secondary
                    text-primary
                  "
                >

                  Get Started

                </Link>


              </nav>

            </SheetContent>

          </Sheet>


        </div>

      </div>

    </header>

  );

}

export default Header;