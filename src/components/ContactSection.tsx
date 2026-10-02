import React, { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2, MapPin, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, validateIndianPhone, trackWhatsAppClick, trackCallClick } from '../lib/utils';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    plotLocation: '',
    plotDimensions: '30x40',
    budgetRange: '₹1.0 Cr - ₹1.5 Cr',
    phone: '',
    honeypot: '' // Spam protection
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    if (!formData.plotLocation.trim()) {
      setErrorMessage('Please mention your plot area in Bangalore (e.g. Whitefield, Sarjapur)');
      return;
    }

    if (!validateIndianPhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit mobile or WhatsApp number');
      return;
    }

    setErrorMessage('');
    setFormStatus('sending');

    // Optimistic UI submission simulation
    setTimeout(() => {
      setFormStatus('success');
      // Also open WhatsApp pre-filled for convenience if they prefer instant chat
    }, 800);
  };

  const directWhatsAppMsg = `Hi Tier 3 Builders, I saw your website. I have a ${formData.plotDimensions} plot in ${formData.plotLocation || 'Bangalore'} with budget around ${formData.budgetRange}. Want to discuss.`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            07. How You Start
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            Talk Directly to an Engineer. No Sales Reps.
          </h2>
          <p className="text-base text-stone-600 mt-2 font-normal">
            Whether you want a 5-minute WhatsApp chat, a phone call, or a free cup of filter coffee at our Indiranagar office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Fast Contact Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 bg-white rounded-2xl border-2 border-emerald-600 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Fastest Response (Under 5 Mins)
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">
                  Chat on WhatsApp Directly
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Send your plot location, photos, or rough plan. Our senior engineer replies personally with zero spam.
                </p>
              </div>

              <a
                href={createWhatsAppUrl("Hi Tier 3 Builders, I saw your website. I have a plot in Bangalore and want to discuss.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold rounded-xl transition-all shadow-xs text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 bg-white rounded-2xl border border-stone-300 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-700" />
                <span>Call Us Direct</span>
              </h3>
              <p className="text-xs text-stone-600 mb-3">
                Mon - Sat, 9:00 AM - 7:00 PM IST. Speak in Kannada, Hindi, English, Telugu, or Tamil.
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                onClick={() => trackCallClick('contact_section')}
                className="text-lg sm:text-xl font-extrabold text-stone-900 hover:text-amber-900 font-sans tracking-tight block"
              >
                {COMPANY_DETAILS.primaryPhone}
              </a>
            </div>

            {/* Office Visit Card */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Physical Office Location</span>
              </div>
              <p className="leading-relaxed">
                {COMPANY_DETAILS.officeAddress}
              </p>
              <p className="text-stone-500 font-medium">
                (Right opposite Metro Pillar #124, 100 Feet Rd)
              </p>
            </div>

          </div>

          {/* Friction-Free Mini Form (Right Column) */}
          {/* CRITICAL: NO "Message" textarea */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-md">
            
            <div className="border-b border-stone-200 pb-4 mb-6">
              <h3 className="text-xl font-bold text-stone-900">
                Schedule a Free Site Visit & Measurement
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Zero fees. Our senior engineer comes with laser measures, checks soil levels, and advises on bylaws.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-stone-900">
                  Site Visit Request Received!
                </h4>
                <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Senior Site Engineer Praveen has been notified. He will call you on <strong>{formData.phone}</strong> in under 10 minutes to confirm your convenient timing.
                </p>

                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl(directWhatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('hero')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Or Connect on WhatsApp Immediately</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="user_note"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Field */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-hidden transition-all text-stone-900 bg-white"
                  />
                </div>

                {/* Plot Area / Location */}
                <div>
                  <label htmlFor="form-location" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                    Plot Location in Bangalore *
                  </label>
                  <input
                    id="form-location"
                    type="text"
                    required
                    placeholder="e.g. Whitefield, Sarjapur, Yelahanka, Electronic City"
                    value={formData.plotLocation}
                    onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-hidden transition-all text-stone-900 bg-white"
                  />
                </div>

                {/* Plot Size & Budget Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-plot-dim" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                      Plot Dimensions
                    </label>
                    <select
                      id="form-plot-dim"
                      value={formData.plotDimensions}
                      onChange={(e) => setFormData({ ...formData, plotDimensions: e.target.value })}
                      className="w-full px-3 py-3 text-sm rounded-xl border border-stone-300 focus:border-stone-900 bg-white text-stone-900"
                    >
                      <option value="30x40">30 x 40 (1,200 sq.ft)</option>
                      <option value="30x50">30 x 50 (1,500 sq.ft)</option>
                      <option value="40x60">40 x 60 (2,400 sq.ft)</option>
                      <option value="50x80">50 x 80 (4,000 sq.ft)</option>
                      <option value="Custom/Odd Plot">Custom / Odd Plot Shape</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-budget" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                      Target Budget Range
                    </label>
                    <select
                      id="form-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-3 text-sm rounded-xl border border-stone-300 focus:border-stone-900 bg-white text-stone-900"
                    >
                      <option value="₹70 Lakhs - ₹1.0 Cr">₹70 Lakhs - ₹1.0 Cr</option>
                      <option value="₹1.0 Cr - ₹1.5 Cr">₹1.0 Cr - ₹1.5 Cr</option>
                      <option value="₹1.5 Cr - ₹2.5 Cr">₹1.5 Cr - ₹2.5 Cr</option>
                      <option value="₹2.5 Cr+">Above ₹2.5 Cr</option>
                    </select>
                  </div>
                </div>

                {/* WhatsApp Mobile Number */}
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                    WhatsApp Mobile Number (Keypad Friendly) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-sm font-semibold text-stone-500 font-mono">
                      +91
                    </span>
                    <input
                      id="form-phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      placeholder="9880194520"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                      className="w-full pl-12 pr-4 py-3 text-sm font-semibold rounded-xl border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-hidden transition-all text-stone-900 bg-white font-mono"
                    />
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    No spam. We will only use this to send site coordinates and confirmation.
                  </p>
                </div>

                {errorMessage && (
                  <p className="text-xs font-bold text-red-700 bg-red-50 p-2.5 rounded-lg border border-red-200">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 px-6 bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
                >
                  {formStatus === 'sending' ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Book Free Site Visit (No Obligation)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Your number is strictly private. We never sell contacts to brokers or tile sellers.</span>
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
