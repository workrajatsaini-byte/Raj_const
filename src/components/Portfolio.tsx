import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle2, Eye, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';
import { PROJECTS, Project } from '../lib/data';
import { ProjectModal } from './ProjectModal';
import { createWhatsAppUrl, trackWhatsAppClick } from '../lib/utils';

type CategoryFilter = 'All' | 'Home' | 'Villa' | 'Renovation' | 'Commercial';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = ['All', 'Home', 'Villa', 'Renovation', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Picture Superiority Effect */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              01. Tangible Proof
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 text-balance">
              "Show Me, Don't Tell Me."
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl">
              Real completed homes in Bangalore. Real families living in them. No 3D renderings passed off as finished photos.
            </p>
          </div>

          {/* Interactive Filter Tabs - Functional Segmented Buttons (Compliant with constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl self-start md:self-auto border border-stone-300/70">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {cat === 'All' ? 'All Completed (200+)' : cat === 'Home' ? 'Independent Homes' : cat === 'Villa' ? 'Villas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-stone-300 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* 4:3 Sharp Image with zoom on hover */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category kicker on image */}
                  <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {project.category} · {project.areaSqFt} Sq.Ft
                  </div>

                  {/* Bottom Image Overlay: Duration & Budget */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-300">
                      Handed over in {project.durationMonths} Months
                    </span>
                    <span className="text-stone-200 font-mono font-medium">
                      {project.budgetRange}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 leading-snug mb-3 group-hover:text-amber-900 transition-colors">
                    {project.title}
                  </h3>

                  {/* The Problem / Solution highlight */}
                  <div className="p-3 bg-stone-100 rounded-xl mb-4 border border-stone-200/80 text-xs text-stone-700 space-y-1.5">
                    <p className="line-clamp-2">
                      <strong className="text-stone-900">Fear:</strong> "{project.challenge}"
                    </p>
                    <p className="text-emerald-800 line-clamp-2">
                      <strong className="text-emerald-950">Delivered:</strong> {project.solution}
                    </p>
                  </div>

                  {/* Certified Materials - clean unboxed list */}
                  <div className="space-y-1 text-xs text-stone-600 mb-4">
                    <p className="font-bold text-stone-900 text-[11px] uppercase tracking-wider">
                      Verified Materials Installed:
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-stone-600">
                      {project.materialsHighlight.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span className="truncate max-w-[200px]">{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-2 border-t border-stone-100 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-amber-900 py-2 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint & Photos</span>
                </button>

                <a
                  href={createWhatsAppUrl(`Hi Tier 3 Builders, I am looking at your "${project.title}" project. Can you share the approximate cost breakdown for a similar plot?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('portfolio')}
                  title="Discuss this project on WhatsApp"
                  className="p-2 text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50 rounded-lg transition-colors"
                  aria-label={`Ask about ${project.title} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Banner: Transparent Physical Site Tour Invitation */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Want to physically touch the plaster and walk through a finished house?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              We arrange accompanied site visits to our ongoing and completed homes in Whitefield, Sarjapur, and Indiranagar. Speak directly to our existing homeowners with no sales reps around.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Hi Tier 3 Builders, I would like to schedule a physical site visit to inspect one of your ongoing or completed homes in Bangalore.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('portfolio')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shrink-0 transition-colors shadow-md"
          >
            <span>Book a Guided Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Deep Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
