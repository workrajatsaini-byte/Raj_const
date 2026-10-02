import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle2, ShieldAlert, Sparkles, MapPin, Play, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick, trackCallClick } from '../lib/utils';
import heroHomeImg from '@/src/assets/images/hero_home_exterior_1790964578894.jpg';
import handoverImg from '@/src/assets/images/handover_keys_moment_1790964690709.jpg';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-stone-50 border-b border-stone-200">
      {/* Background Subtle Architectural Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Psychological Reassurance & Clear Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Clean unboxed editorial kicker - NO static pill badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-900 mb-4">
              <span>Bengaluru's Trusted Home Builder</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>15+ Years of Zero-Surprise Construction</span>
            </div>

            {/* Display Headline: Bold, commanding, zero fluff, balanced text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] mb-5 text-balance">
              We Build Homes That Last Generations.
            </h1>

            {/* Subhead: The Pragmatist's core peace of mind */}
            <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed mb-6 max-w-2xl">
              <strong className="font-semibold text-stone-900">200+ Families Handed Keys.</strong> On Time. On Budget. No Surprises.
              Every project backed by an enforceable penalty clause for us: <span className="underline decoration-amber-600 font-medium text-stone-900">₹1,500 per day if delayed</span>.
            </p>

            {/* Unboxed Trust Points with Typographic Separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-stone-600 mb-8 py-2.5 px-3 bg-stone-100/80 rounded-lg border border-stone-200/80 max-w-xl">
              <span className="flex items-center gap-1.5 font-medium text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                Fixed-Price Agreement
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                Milestone-Only Payments
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                5-Year Structural Warranty
              </span>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
              
              {/* Primary: Green WhatsApp Button */}
              <a
                href={createWhatsAppUrl("Hi Tier 3 Builders, I have a plot in Bangalore and want to discuss constructing my home without hidden charges.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp Now</span>
              </a>

              {/* Secondary: Click-to-Call */}
              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                onClick={() => trackCallClick('hero')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-stone-900 bg-white hover:bg-stone-100 active:scale-[0.99] border-2 border-stone-300 rounded-xl transition-all text-center"
              >
                <Phone className="w-4 h-4 text-stone-700" />
                <span>Call {COMPANY_DETAILS.primaryPhone}</span>
              </a>
            </div>

            {/* Micro-Copy: The Fear-Killer */}
            <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>We speak: Kannada, Hindi, English, Telugu, Tamil. No high-pressure sales calls.</span>
            </p>

          </div>

          {/* Right Column: Concrete Visual Proof (The Digital Site Visit) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-white group">
              
              {/* Main Exterior Image */}
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden bg-stone-200">
                <img
                  src={heroHomeImg}
                  alt="Recent 3BHK Duplex Handover in Bangalore by Tier 3 Builders"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Real-time Handover Marker */}
                <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-700/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Recently Handed Over: Whitefield, Bangalore</span>
                </div>

                {/* Bottom Card Annotation */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs text-stone-300 mb-1">
                    <span>3BHK Tropical Duplex · 2,850 Sq.Ft</span>
                    <span className="font-semibold text-emerald-400">Completed in 10 Mos</span>
                  </div>
                  <p className="text-sm font-medium text-stone-100 line-clamp-1">
                    "Delivered 12 days before Diwali as promised. Not a single extra rupee asked."
                  </p>
                </div>
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={handoverImg}
                    alt="Key handover moment"
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-600/30"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-900">Mr. & Mrs. Murthy</p>
                    <p className="text-[11px] text-stone-500">Homeowners, Prestige Glenwood</p>
                  </div>
                </div>

                <a
                  href="#work"
                  className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 group/link"
                >
                  <span>Explore 200+ Homes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
