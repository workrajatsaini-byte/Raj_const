import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, Info, Sparkles, Building, Layers, Clock } from 'lucide-react';
import { PACKAGES, COMPANY_DETAILS } from '../lib/data';
import { formatIndianCurrency, formatNumber, createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

export const CostEstimator: React.FC = () => {
  const [plotPreset, setPlotPreset] = useState<'30x40' | '30x50' | '40x60' | 'custom'>('30x40');
  const [customSqFt, setCustomSqFt] = useState<number>(2400);
  const [floors, setFloors] = useState<number>(2); // G+1 Duplex default
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');

  // Calculate built-up area based on plot & floors
  const getBuiltUpArea = (): number => {
    if (plotPreset === 'custom') return customSqFt;
    if (plotPreset === '30x40') {
      // 1200 plot with 80% coverage
      return Math.round(960 * floors);
    }
    if (plotPreset === '30x50') {
      return Math.round(1200 * floors);
    }
    if (plotPreset === '40x60') {
      return Math.round(1800 * floors);
    }
    return 2400;
  };

  const selectedPkg = PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[1];
  const builtUpArea = getBuiltUpArea();
  const estimatedCost = builtUpArea * selectedPkg.pricePerSqFt;
  const estimatedMonths = floors === 1 ? 8 : floors === 2 ? 10 : 13;

  const quoteMessage = `Hi Tier 3 Builders, I used your website estimator. Plot: ${plotPreset} (${floors === 1 ? 'Ground floor' : floors === 2 ? 'G+1 Duplex' : 'G+2 Triplex'}), ~${builtUpArea} sq.ft, ${selectedPkg.name} package (~${formatIndianCurrency(estimatedCost)}). Can we schedule a free site visit?`;

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            06. Zero Guesswork
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
            Transparent Cost & Timeline Calculator
          </h2>
          <p className="text-base text-stone-600 mt-2 font-normal">
            No "it depends" evasiveness. Get a realistic estimate in 30 seconds based on current Bangalore material rates.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-stone-300 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Plot Dimension */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  1. Choose Your Plot Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: '30x40', label: '30 x 40', sub: '1,200 sq.ft' },
                    { id: '30x50', label: '30 x 50', sub: '1,500 sq.ft' },
                    { id: '40x60', label: '40 x 60', sub: '2,400 sq.ft' },
                    { id: 'custom', label: 'Custom', sub: 'Specific sq.ft' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlotPreset(p.id as typeof plotPreset)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        plotPreset === p.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      <div className="text-sm font-bold">{p.label}</div>
                      <div className="text-[11px] opacity-80">{p.sub}</div>
                    </button>
                  ))}
                </div>

                {plotPreset === 'custom' && (
                  <div className="mt-3">
                    <label className="text-xs text-stone-600 block mb-1">Enter Expected Built-up Area (Sq.Ft):</label>
                    <input
                      type="number"
                      min={1000}
                      max={15000}
                      step={100}
                      value={customSqFt}
                      onChange={(e) => setCustomSqFt(Math.max(500, Number(e.target.value)))}
                      className="w-full p-2.5 rounded-lg border border-stone-300 text-sm font-semibold"
                    />
                  </div>
                )}
              </div>

              {/* Step 2: Number of Floors */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  2. Number of Floors
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { count: 1, label: 'Ground Floor', sub: 'Single Storey' },
                    { count: 2, label: 'G + 1 Floor', sub: 'Duplex Home' },
                    { count: 3, label: 'G + 2 Floors', sub: 'Triplex / Stilt + 2' },
                  ].map((f) => (
                    <button
                      key={f.count}
                      type="button"
                      onClick={() => setFloors(f.count)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        floors === f.count
                          ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      <div className="text-sm font-bold">{f.label}</div>
                      <div className="text-[11px] opacity-85">{f.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Construction Quality Package */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  3. Select Material & Finish Package
                </label>
                <div className="space-y-2.5">
                  {PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedPackageId === pkg.id
                          ? 'bg-amber-50/70 border-amber-600 ring-1 ring-amber-600'
                          : 'bg-stone-50 border-stone-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="package"
                            checked={selectedPackageId === pkg.id}
                            onChange={() => setSelectedPackageId(pkg.id)}
                            className="w-4 h-4 text-amber-800 focus:ring-amber-800"
                          />
                          <span className="text-sm font-bold text-stone-900">{pkg.name}</span>
                          {pkg.popular && (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-extrabold text-stone-900 font-mono">
                          ₹{formatNumber(pkg.pricePerSqFt)} / sq.ft
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1 pl-6">
                        {pkg.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Calculation Card (Right Column) */}
            <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Estimated Estimate · Fixed-Price Commitment
                </span>
                
                {/* Total Cost Display */}
                <div className="mt-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                    {formatIndianCurrency(estimatedCost)}
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Based on ~{formatNumber(builtUpArea)} sq.ft total built-up area
                  </p>
                </div>

                {/* Timeline and Speed Guarantee */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-stone-800/80 rounded-xl mt-4 text-xs border border-stone-700">
                  <div>
                    <span className="text-stone-400 block">Total Duration:</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {estimatedMonths} Months Handover
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Delay Penalty:</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                      ₹1,500/day for us
                    </span>
                  </div>
                </div>

                {/* Milestone Payment Safety Shield */}
                <div className="mt-5 space-y-2 text-xs text-stone-300">
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">
                    How You Pay (Safe Milestone Protection):
                  </p>
                  <div className="space-y-1 text-[11px] text-stone-300">
                    <p>• Initial Survey & Soil Test Booking: <strong>₹25,000 only</strong></p>
                    <p>• Foundation & Plinth: <strong>20% (After excavation & footing)</strong></p>
                    <p>• RCC Slabs & Beams: <strong>35% (Poured and cured)</strong></p>
                    <p>• Masonry, Plaster & Piping: <strong>25% (Inspected by you)</strong></p>
                    <p>• Finishing, Painting & Keys: <strong>20% (Zero open defects sign-off)</strong></p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-2 pt-2">
                <a
                  href={createWhatsAppUrl(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('estimator')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-sm text-center shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Receive Full BOQ on WhatsApp</span>
                </a>
                <p className="text-[11px] text-stone-400 text-center">
                  Includes line-by-line material specifications and government fee guidelines.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
