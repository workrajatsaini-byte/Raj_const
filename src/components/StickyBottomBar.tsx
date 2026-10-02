import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick, trackCallClick } from '../lib/utils';

export const StickyBottomBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Dwell timer: subtle pulse every 8s after 10s dwell time
    const dwellTimer = setTimeout(() => {
      const pulseInterval = setInterval(() => {
        setPulseActive(true);
        setTimeout(() => setPulseActive(false), 1200);
      }, 8000);
      return () => clearInterval(pulseInterval);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(dwellTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = createWhatsAppUrl("Hi Tier 3 Builders, I am interested in building an independent home in Bangalore. Can we discuss?");

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (< 15% Viewport Height Cap, Touch Target >= 48px) */}
      <aside
        aria-label="Quick contact actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-xl"
      >
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          
          {/* Call Direct */}
          <a
            href={`tel:${COMPANY_DETAILS.rawPhone}`}
            onClick={() => trackCallClick('mobile_sticky')}
            aria-label={`Call Tier 3 Builders at ${COMPANY_DETAILS.primaryPhone}`}
            className="flex items-center justify-center gap-2 h-12 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 text-stone-900 font-bold rounded-xl text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-stone-700" />
            <span>Call Builder</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('sticky')}
            aria-label="Chat with engineer on WhatsApp"
            className={`flex items-center justify-center gap-2 h-12 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all ${
              pulseActive ? 'scale-[1.03] ring-2 ring-emerald-400' : ''
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Now</span>
          </a>

        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside
        aria-label="Floating quick contact"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3"
      >
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-full bg-white text-stone-700 hover:text-stone-900 border border-stone-300 shadow-md flex items-center justify-center hover:bg-stone-50 transition-all hover:-translate-y-0.5"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('sticky')}
          aria-label="Chat with senior engineer on WhatsApp"
          className={`flex items-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
            pulseActive ? 'scale-105 ring-4 ring-emerald-400/40' : ''
          }`}
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-sm">Direct WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
