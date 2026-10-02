import React, { useState } from 'react';
import { X, Check, MapPin, Calendar, Maximize2, Shield, MessageCircle, Phone, ArrowRight, Layers, FileText } from 'lucide-react';
import { Project, COMPANY_DETAILS } from '../lib/data';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whatsappMessage = `Hi Tier 3 Builders, I was inspecting your completed project "${project.title}" in ${project.location} (${project.areaSqFt} sq ft). I have a similar plot in Bangalore. Can we discuss a similar blueprint?`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-fade-in"
    >
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Sticky Header inside modal */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Completed Handover · {project.category}
            </span>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-stone-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{project.location}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 bg-white hover:bg-stone-200 rounded-full border border-stone-200 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Main Visual Display */}
          <div className="space-y-3">
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-xl overflow-hidden bg-stone-900">
              <img
                src={project.gallery[activeImageIndex] || project.heroImage}
                alt={`${project.title} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                Photo {activeImageIndex + 1} of {project.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnail Selector */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-amber-700 ring-2 ring-amber-700/20' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-stone-100 rounded-xl border border-stone-200">
            <div>
              <p className="text-xs text-stone-500 font-medium">Built-up Area</p>
              <p className="text-base sm:text-lg font-extrabold text-stone-900 font-sans tabular-nums">{project.areaSqFt} Sq.Ft</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium">Total Duration</p>
              <p className="text-base sm:text-lg font-extrabold text-stone-900 font-sans tabular-nums">{project.durationMonths} Months</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium">Total Contract Value</p>
              <p className="text-base sm:text-lg font-extrabold text-stone-900 font-sans tabular-nums">{project.budgetRange}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium">Delay Penalty</p>
              <p className="text-base sm:text-lg font-extrabold text-emerald-800 font-sans">₹0 Paid (On-Time)</p>
            </div>
          </div>

          {/* The Pragmatist's Real Story: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>The Client's Biggest Concern</span>
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                "{project.challenge}"
              </p>
            </div>

            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>How Tier 3 Solved It Without Extra Cost</span>
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Verified Materials Used on this Project */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-800" />
              <span>Certified Materials Installed (Open-Book Purchase Receipts Provided)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.materialsHighlight.map((mat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 p-2.5 bg-stone-50 rounded-lg border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Schedule & Transparency */}
          {project.stageBreakdown && (
            <div>
              <h4 className="text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-700" />
                <span>Construction Milestones & Curing Timeline</span>
              </h4>
              <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden bg-white text-xs sm:text-sm">
                {project.stageBreakdown.map((stage, idx) => (
                  <div key={idx} className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-stone-50">
                    <span className="font-semibold text-stone-900 sm:w-1/3">{stage.stage}</span>
                    <span className="text-amber-900 font-medium sm:w-1/4">{stage.duration}</span>
                    <span className="text-stone-500 sm:w-5/12">{stage.notes}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Homeowner's Quote */}
          {project.testimonial && (
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 flex items-start gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm italic text-stone-800 mb-1">
                  "{project.testimonial.src}"
                </p>
                <p className="text-xs font-bold text-stone-900">
                  — {project.testimonial.clientName} ({project.testimonial.roleOrArea})
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-stone-600 text-center sm:text-left">
            Want to see original blueprints or visit this exact home with the homeowner's permission?
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={createWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('portfolio')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss This Home on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
