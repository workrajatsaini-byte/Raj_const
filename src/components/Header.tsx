import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick, trackCallClick } from '../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-[#FAFAF9]/90 backdrop-blur-sm border-b border-stone-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark (Display face, no descriptors/chips) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap"
          >
            Tier 3 Builders
          </a>

          {/* Zone 2: 4-6 clean text navigation links (No pills, subtle hover) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a
              href="#work"
              className="hover:text-amber-800 transition-colors py-1"
            >
              See Work
            </a>
            <a
              href="#process"
              className="hover:text-amber-800 transition-colors py-1"
            >
              No Surprises Process
            </a>
            <a
              href="#materials"
              className="hover:text-amber-800 transition-colors py-1"
            >
              Materials & Quality
            </a>
            <a
              href="#estimator"
              className="hover:text-amber-800 transition-colors py-1"
            >
              Cost Estimator
            </a>
            <a
              href="#stories"
              className="hover:text-amber-800 transition-colors py-1"
            >
              Real Stories
            </a>
            <a
              href="#faq"
              className="hover:text-amber-800 transition-colors py-1"
            >
              Honest FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions (Single-line, direct human contact) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.rawPhone}`}
              onClick={() => trackCallClick('header')}
              aria-label={`Call Tier 3 Builders at ${COMPANY_DETAILS.primaryPhone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-stone-700" />
              <span>{COMPANY_DETAILS.primaryPhone}</span>
            </a>

            <a
              href={createWhatsAppUrl("Hi Tier 3 Builders, I am interested in building a home in Bangalore. Can we discuss?")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header')}
              aria-label="Chat directly on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-stone-700 hover:text-stone-900 rounded-lg focus-visible:outline-2 focus-visible:outline-stone-900"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-stone-200 mt-3 space-y-2">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              See Work (200+ Homes)
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              No Surprises Process & Penalty Clause
            </a>
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Materials & Quality (UltraTech, Tata, Kajaria)
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Quick Cost Estimator
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Real People, Real Talk
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
            >
              Questions You're Afraid to Ask
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                onClick={() => {
                  trackCallClick('mobile_nav');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-stone-100 text-stone-900 font-semibold rounded-lg text-sm"
              >
                <Phone className="w-4 h-4 text-stone-700" />
                Call {COMPANY_DETAILS.primaryPhone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
