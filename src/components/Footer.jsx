
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">TeleFort</span>
              <span className="text-sm text-slate-400 ml-1">(Pvt.) Ltd.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering turnkey solutions with a commitment to customer satisfaction, teamwork, and reliability.
            </p>
          </div>

          <div>
            <span className="text-base font-semibold text-white mb-4 block">Quick Links</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                Services
              </Link>
              <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
              <Link to="/testimonials" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                Testimonials
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-base font-semibold text-white mb-4 block">Contact Info</span>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+92 331 655 9887</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">telefort@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">245-B, Lake City Meadows, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-base font-semibold text-white mb-4 block">Follow Us</span>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} TeleFort (Pvt.) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
