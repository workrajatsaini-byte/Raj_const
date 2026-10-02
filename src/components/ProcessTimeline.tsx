import React from 'react';
import { Coffee, FileCheck2, Video, KeyRound, Check, ShieldAlert, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

export const ProcessTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-900" />;
      case 'FileCheck':
        return <FileCheck2 className="w-6 h-6 text-amber-900" />;
      case 'Video':
        return <Video className="w-6 h-6 text-amber-900" />;
      case 'Key':
        return <KeyRound className="w-6 h-6 text-amber-900" />;
      default:
        return <Check className="w-6 h-6 text-amber-900" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            02. Total Predictability
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            The "No Surprises" Process
          </h2>
          <p className="text-base text-stone-600 mt-2 font-normal">
            What happens after you shake our hand? No vague hand-waving, no unreturned calls, no sudden surprise bills.
          </p>
        </div>

        {/* The Power-Flip Callout Banner: Penalty Clause */}
        <div className="mb-12 p-5 sm:p-6 bg-amber-50/90 rounded-2xl border-2 border-amber-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-amber-200/80 text-amber-900 rounded-xl shrink-0">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              The Penalty Clause Is Written For US, Not You.
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              Most contracts penalize the homeowner for delayed payments. <strong>Our contract penalizes Tier 3 Builders:</strong> If your keys are not handed over on the agreed date, we pay you <span className="font-bold text-amber-950 underline decoration-amber-600">₹1,500 every single day</span> directly to your bank account until possession.
            </p>
          </div>
        </div>

        {/* Vertical Mobile-First 4-Step Timeline */}
        <div className="relative border-l-2 border-stone-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-14">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Step Number Dot on the line */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0.5 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-2 border-stone-900 flex items-center justify-center font-bold text-xs sm:text-sm text-stone-900 shadow-xs group-hover:bg-amber-100 transition-colors">
                {step.number}
              </div>

              {/* Step Card Content */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-stone-300/80 shadow-xs hover:shadow-md transition-shadow">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-stone-100 rounded-lg">
                      {getIcon(step.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {step.stepTitle}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-amber-900">
                        {step.shortPhrase}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plain-English Deliverables */}
                <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* The Emotional Relief / Peace of Mind */}
                <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs sm:text-sm text-stone-700 flex items-start gap-2">
                  <span className="font-bold text-stone-900 shrink-0">Why this matters:</span>
                  <span>{step.buyerRelief}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Micro-copy Assurance */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-stone-300">
          <p className="text-sm sm:text-base font-semibold text-stone-900">
            "No hidden costs. No 'extra charges' for basic plumbing, switches, or curing water. Everything is written on legal stamp paper."
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-stone-600">
            <span className="flex items-center gap-1.5 text-stone-900">
              <Check className="w-4 h-4 text-emerald-700" />
              100% Legal RERA Registered
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1.5 text-stone-900">
              <Check className="w-4 h-4 text-emerald-700" />
              Fixed Lump-Sum Milestone Schedule
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1.5 text-stone-900">
              <Check className="w-4 h-4 text-emerald-700" />
              Original Factory Purchase Invoices Handed Over
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
