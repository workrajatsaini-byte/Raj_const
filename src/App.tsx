/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Portfolio } from './components/Portfolio';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MaterialsQuality } from './components/MaterialsQuality';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#111827] flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* 1. Top Bar Contract */}
      <Header />

      {/* Main Content Sections sequenced by Trust Ladder Cognitive Model */}
      <main className="flex-1">
        {/* Section 1: Hero (Primacy Effect + Concrete Imagery) */}
        <Hero onOpenEstimator={scrollToEstimator} />

        {/* Section 2: Trust Badges (Authority Bias / Social Proof) */}
        <TrustBadges />

        {/* Section 3: "See The Work" (Picture Superiority Effect / Tangibility) */}
        <Portfolio />

        {/* Section 4: The "No Surprises" Process (Certainty Effect & Penalty Clause for US) */}
        <ProcessTimeline />

        {/* Section 5: Materials & Quality (The "Kitchen Sink" Proof & MRP Guarantee) */}
        <MaterialsQuality />

        {/* Interactive Feature: Transparent Cost & Timeline Estimator */}
        <CostEstimator />

        {/* Section 6: Real People, Real Talk (Similarity Bias, 9:16 Video & WhatsApp Transcripts) */}
        <Testimonials />

        {/* Section 7: FAQ - "Questions You're Afraid to Ask" (Objection Handling) */}
        <FAQ />

        {/* Section 8: Contact / Lead Capture (Friction Reduction, Zero-Message Mini Form) */}
        <ContactSection />
      </main>

      {/* Section 9: Footer (Legitimacy / Local SEO / Bank Tie-ups / Languages) */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar (<15% Viewport Cap) & Desktop Floating WhatsApp */}
      <StickyBottomBar />
    </div>
  );
}
