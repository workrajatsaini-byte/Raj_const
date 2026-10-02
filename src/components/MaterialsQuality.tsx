import React, { useState } from 'react';
import { ShieldCheck, FileCheck, Check, Sparkles, AlertTriangle, ArrowRight, X } from 'lucide-react';
import { MATERIAL_BRANDS, MaterialBrand } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

export const MaterialsQuality: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<MaterialBrand | null>(null);

  return (
    <section id="materials" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            03. The "Kitchen Sink" Proof
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            "We Only Use Brands We'd Put In Our Own Homes."
          </h2>
          <p className="text-base sm:text-lg text-stone-700 mt-3 font-normal leading-relaxed">
            <strong className="text-stone-900">Original GST manufacturer bills provided for every purchase.</strong> You see the serial numbers and test certificates. Zero duplicate materials, zero contractor markup.
          </p>
        </div>

        {/* Reassurance Callout Box */}
        <div className="mb-10 p-4 sm:p-5 bg-emerald-50/80 rounded-xl border border-emerald-200 max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm text-emerald-950">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
            <span>
              <strong>The Anti-Corner-Cutting Guarantee:</strong> If our site team ever installs an unauthorized brand substitute, we replace it at our own 100% cost plus pay you a ₹50,000 breach penalty.
            </span>
          </div>
          <span className="font-bold underline decoration-emerald-600 shrink-0">
            Clause 14 of Standard Agreement
          </span>
        </div>

        {/* Brands Horizontal Scroll / Grid (Touch Friendly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MATERIAL_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white p-5 rounded-2xl border border-stone-300 shadow-xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Brand Logo & Class */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                  <div className="text-lg font-black tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
                    {brand.logoText}
                  </div>
                  <span className="text-[11px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                    {brand.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
                  {brand.category}
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {brand.name}
                </h3>

                {/* Plain-English Protection Promise (Sensory / Real Risk Removal) */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {brand.protectionPromise}
                </p>
              </div>

              {/* Verified Test Metric */}
              <div className="pt-3 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="truncate">{brand.testedFor}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className="mt-3 w-full py-1.5 text-xs font-bold text-stone-800 hover:text-amber-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-center"
                >
                  View Quality Standards
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Modal for Material */}
        {selectedBrand && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in"
          >
            <div className="fixed inset-0" onClick={() => setSelectedBrand(null)} aria-hidden="true" />
            <div className="relative bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-stone-300 z-10">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase">{selectedBrand.category}</span>
                  <h4 className="text-lg font-bold text-stone-900">{selectedBrand.name}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBrand(null)}
                  className="p-1 text-stone-400 hover:text-stone-800 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-stone-700">
                <p>
                  <strong>Why We Chose This:</strong> {selectedBrand.protectionPromise}
                </p>
                <div className="p-3 bg-stone-100 rounded-xl space-y-1.5 text-xs">
                  <p className="font-bold text-stone-900">How You Can Verify On Site:</p>
                  <p>1. Check the official batch stamp code stamped on each unit.</p>
                  <p>2. We provide the authorized distributor tax invoice with serial number matching the delivery truck.</p>
                  <p>3. Third-party cube test / lab test certificate available upon request.</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedBrand(null)}
                  className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
