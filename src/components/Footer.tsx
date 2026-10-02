import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink, Building, Landmark } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick, trackCallClick } from '../lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-28 md:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Legitimacy (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Tier 3 Builders
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              Bengaluru's specialized residential construction firm. Building independent homes, duplexes, and villas since 2011 with fixed-price legal contracts and on-time penalty guarantees.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RERA Reg: <strong className="text-white font-mono">{COMPANY_DETAILS.reraNumber}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-400 shrink-0" />
                <span>BBMP Class 1: <strong className="text-white font-mono">{COMPANY_DETAILS.bbmpReg}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-stone-400 shrink-0" />
                <span>GSTIN: <strong className="text-white font-mono">{COMPANY_DETAILS.gstin}</strong></span>
              </p>
            </div>
          </div>

          {/* Col 2: Physical Office & Map (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Registered Office
            </h4>
            <div className="flex items-start gap-2 text-sm text-stone-300">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-1" />
              <p className="leading-relaxed">
                {COMPANY_DETAILS.officeAddress}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              <p className="font-semibold text-stone-300">Visiting Hours:</p>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p>Sunday: Site Visits by Prior Appointment</p>
            </div>
          </div>

          {/* Col 3: Direct Phone & Multilingual (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Direct Contact
            </h4>

            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                onClick={() => trackCallClick('footer')}
                className="flex items-center gap-2 text-base font-bold text-white hover:text-amber-300 transition-colors font-sans tracking-tight"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_DETAILS.primaryPhone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-stone-800 text-xs space-y-1">
              <p className="font-bold text-white">We Speak Your Language:</p>
              <p className="text-stone-400">
                {COMPANY_DETAILS.languagesSpoken.join(' · ')}
              </p>
            </div>
          </div>

          {/* Col 4: Approved Bank Loan Tie-ups (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Approved Home Loans
            </h4>
            <p className="text-xs text-stone-400 leading-snug">
              Pre-approved documentation & milestone disbursement tie-ups with:
            </p>
            <ul className="space-y-1 text-xs text-stone-300 font-medium">
              {COMPANY_DETAILS.partnerBanks.map((bank, bIdx) => (
                <li key={bIdx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{bank}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered under Karnataka RERA.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-white transition-colors">Penalty Clause</a>
            <a href="#materials" className="hover:text-white transition-colors">Material Standards</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a
              href={COMPANY_DETAILS.reraVerificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Verify RERA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
