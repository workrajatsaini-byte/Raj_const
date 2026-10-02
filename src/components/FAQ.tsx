import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle, ShieldAlert, Phone } from 'lucide-react';
import { FAQS, FAQItem, COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Money & Payment', 'Quality & Warranty', 'Timeline', 'Design & Permissions'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            05. Brutal Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            Questions You're Afraid to Ask
          </h2>
          <p className="text-base text-stone-600 mt-2 max-w-xl mx-auto font-normal">
            Every homeowner worries about getting cheated, delayed, or abandoned. Here are the exact answers in plain language.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-full bg-stone-100 text-stone-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-stone-100 bg-stone-50/50 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 animate-fade-in">
                    <p className="font-normal">{faq.answer}</p>
                    
                    {faq.highlightPoint && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100/70 p-2.5 rounded-lg border border-emerald-200/80">
                        <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>The Bottom Line: {faq.highlightPoint}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have a Burning Question? */}
        <div className="mt-10 p-6 bg-stone-100 rounded-2xl border border-stone-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-stone-900">
              Have a specific question about your plot or municipal approval?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Ask our senior director directly on WhatsApp. No sales scripts, just honest engineering answers.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Hi Tier 3 Builders, I have a specific question about my plot in Bangalore before deciding on a contractor.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shrink-0 transition-colors shadow-xs"
          >
            Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
