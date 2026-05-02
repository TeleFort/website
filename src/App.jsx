
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import TestimonialsPage from '@/pages/TestimonialsPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import TermsOfServicePage from '@/pages/TermsOfServicePage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import BookingPage from '@/pages/BookingPage.jsx';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        
        {/* Catch-all route must be at the very end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;
