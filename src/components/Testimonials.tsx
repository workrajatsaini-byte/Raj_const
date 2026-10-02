import React, { useState } from 'react';
import { Play, Pause, Volume2, CheckCircle2, MessageCircle, MapPin, Quote, Shield, PhoneCall } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem, COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

export const Testimonials: React.FC = () => {
  const [activeStoryId, setActiveStoryId] = useState<string>(TESTIMONIALS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeStory = TESTIMONIALS.find(t => t.id === activeStoryId) || TESTIMONIALS[0];

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="stories" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Similarity Bias */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            04. The Human Truth
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            Real People. Real Talk.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-2 font-normal leading-relaxed">
            We asked our clients 3 questions without a script: <em>"What were you terrified of?", "What went wrong and how did we fix it?", "What is your honest advice to a first-time home builder?"</em>
          </p>
        </div>

        {/* Client Selector (Tabs) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2">
          {TESTIMONIALS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setActiveStoryId(t.id);
                setIsPlaying(false);
              }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${
                activeStoryId === t.id
                  ? 'bg-white border-stone-900 shadow-sm ring-1 ring-stone-900'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
              }`}
            >
              <img
                src={t.portrait}
                alt={t.clientName}
                className="w-9 h-9 rounded-full object-cover border border-stone-300"
              />
              <div>
                <p className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                  {t.clientName}
                </p>
                <p className="text-[11px] text-stone-500">
                  {t.location}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Testimonial Feature Card */}
        <div className="bg-white rounded-3xl border border-stone-300 shadow-md overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: 9:16 Vertical Video / Story Card */}
            <div className="lg:col-span-5 bg-stone-900 relative min-h-[380px] lg:min-h-[460px] overflow-hidden flex flex-col justify-between p-6">
              
              {/* Background Video Simulation */}
              <img
                src={activeStory.portrait}
                alt={`${activeStory.clientName} handover`}
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />

              {/* Top Video Header */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">Unfiltered Video Story</span>
                </div>
                <span className="text-xs text-stone-300 font-mono">{activeStory.videoDuration || '1:30 min'}</span>
              </div>

              {/* Play Button Center Interaction */}
              <div className="relative z-10 my-auto text-center">
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  className="w-16 h-16 rounded-full bg-white/95 text-stone-900 hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center justify-center mx-auto mb-3"
                  aria-label={isPlaying ? "Pause client walkthrough" : "Play client walkthrough video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current ml-1" />
                  )}
                </button>
                <p className="text-xs text-stone-200 font-medium">
                  {isPlaying ? "Simulating audio playback..." : "Tap to listen to client voice"}
                </p>

                {/* Animated Waveform if Playing */}
                {isPlaying && (
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[40, 70, 30, 90, 60, 80, 50, 95, 45, 65].map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-amber-400 rounded-full animate-bounce"
                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s`, maxHeight: '24px' }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Video Meta */}
              <div className="relative z-10 text-white">
                <p className="text-sm font-bold">{activeStory.clientName}</p>
                <p className="text-xs text-stone-300">{activeStory.projectType} · {activeStory.completionYear}</p>
              </div>

            </div>

            {/* Right Column: The 3 Core Hard Questions */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                
                {/* Q1: What were you scared of? */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                    <span>Q1: What were you most scared of before starting?</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal bg-stone-50 p-3 rounded-xl border border-stone-200/70">
                    "{activeStory.fearedMost}"
                  </p>
                </div>

                {/* Q2: How did we handle problems? */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                    <span>Q2: What unexpected problem happened, and how did Tier 3 handle it?</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/70">
                    "{activeStory.problemHandled}"
                  </p>
                </div>

                {/* Q3: Advice to buyers */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    <span>Q3: What advice would you give to someone about to build?</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
                    "{activeStory.adviceToBuyers}"
                  </p>
                </div>

              </div>

              {/* WhatsApp Screenshot Verification Mockup */}
              <div className="pt-4 border-t border-stone-200">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Actual WhatsApp Screenshot Transcript</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Client Message
                  </span>
                </div>

                <div className="bg-[#EFEAE2] p-3 rounded-xl border border-stone-300 font-sans space-y-2 text-xs">
                  {/* Client Msg */}
                  <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-2xs max-w-[88%] text-stone-900">
                    <p className="leading-snug">{activeStory.whatsappMessage.messageText}</p>
                    <div className="text-[10px] text-stone-400 text-right mt-1 font-mono">
                      {activeStory.whatsappMessage.time} · {activeStory.whatsappMessage.date}
                    </div>
                  </div>

                  {/* Builder Reply */}
                  <div className="bg-[#D9FDD3] p-2.5 rounded-lg rounded-tr-none shadow-2xs max-w-[88%] ml-auto text-stone-900">
                    <p className="leading-snug">{activeStory.whatsappMessage.replyText}</p>
                    <div className="text-[10px] text-emerald-800 text-right mt-1 font-mono flex items-center justify-end gap-1">
                      <span>{activeStory.whatsappMessage.time}</span>
                      <span className="text-blue-500">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Speak with Reference Homeowners */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-stone-600">
            Want to speak directly to {activeStory.clientName} or other homeowners in your neighborhood?{' '}
            <a
              href={createWhatsAppUrl(`Hi Tier 3 Builders, can I speak with a reference client in ${activeStory.location} who built with you?`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('portfolio')}
              className="font-bold text-amber-900 underline hover:text-amber-950 inline-flex items-center gap-1"
            >
              Request a direct reference call
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
