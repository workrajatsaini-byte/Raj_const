# Tier 3 Builders — Digital Site Visit SPA Portfolio

A conversion-architected Single Page Application (SPA) for **Tier 3 Builders**, specifically engineered for **"The Pragmatist"** buyer persona (Age 35–60, high anxiety, zero tolerance for technical jargon or contractor surprises).

---

## 🧠 Psychological Architecture & Trust Ladder Flow

1. **HERO** (*Primacy Effect & Concrete Imagery*):
   - Headline: *"We Build Homes That Last Generations."*
   - Subhead: *"200+ Families Handed Keys. On Time. On Budget. No Surprises."*
   - Immediate conversion actions: Direct WhatsApp Chat + Click-to-Call.
2. **TRUST BADGES** (*Authority Bias & Social Proof*):
   - Animated scroll counters: 200+ Homes Delivered, 50+ Commercial Projects, 15 Years in Bengaluru, RERA Karnataka registration hyperlink.
3. **"SEE THE WORK"** (*Picture Superiority Effect*):
   - Categorized portfolio with deep inspection modals detailing plot challenges, solutions, verified material bills, and stage durations.
4. **THE "NO SURPRISES" PROCESS** (*Certainty Effect & Loss Aversion*):
   - 4-step vertical timeline featuring the power-flip penalty clause: **₹1,500/day penalty payable by Tier 3 Builders** if possession is delayed.
5. **MATERIALS & QUALITY** (*Sensory Marketing & Concreteness*):
   - UltraTech Cement, Tata Tiscon 550D, Kajaria, Jaquar, Asian Paints Royale, Polycab FRLS. Original manufacturer tax invoices provided.
6. **TRANSPARENT COST & TIMELINE ESTIMATOR**:
   - Interactive calculator for 30x40, 30x50, 40x60 plots with milestone payment breakdown.
7. **REAL PEOPLE, REAL TALK** (*Similarity Bias*):
   - 9:16 vertical phone-recorded style video player with audio waveform + verified WhatsApp chat screenshot transcripts.
8. **FAQ — "QUESTIONS YOU'RE AFRAID TO ASK"**:
   - Written in client voice answering price locks, warranty terms, and advance payment safety.
9. **CONTACT & LEAD CAPTURE** (*Friction Reduction*):
   - Mini lead form (Name, Plot Location, Dimensions, Budget, WhatsApp No) with **zero message textarea**, plus mobile sticky bottom bar.
10. **FOOTER & LOCAL SEO**:
    - Physical Indiranagar office address, Google Maps directions, BBMP/RERA/GSTIN licenses, partner bank tie-ups (SBI, HDFC, ICICI), and multilingual support (Kannada, Hindi, English, Telugu, Tamil).

---

## 🛠️ Content Editing (No Code Changes Required)

All text, projects, materials, FAQs, and phone numbers are isolated in `/src/lib/data.ts`. A non-developer can edit this file directly:

### 1. How to Change the WhatsApp Number & Phone
In `/src/lib/data.ts`, update `COMPANY_DETAILS`:
```typescript
export const COMPANY_DETAILS = {
  primaryPhone: "+91 98801 94520",
  rawPhone: "+919880194520",
  whatsappNumber: "+91 98801 94520",
  whatsappRaw: "919880194520", // 12 digits, country code + number without plus
  ...
};
```

### 2. How to Add a New Completed Project
Add an object to the `PROJECTS` array in `/src/lib/data.ts`:
```typescript
{
  id: "new-project-id",
  title: "4BHK Contemporary Villa, Yelahanka",
  category: "Villa",
  location: "Judicial Layout, Yelahanka",
  areaSqFt: 3600,
  durationMonths: 11,
  budgetRange: "₹1.6 Cr - ₹1.8 Cr",
  heroImage: yourImageImport,
  gallery: [yourImageImport],
  challenge: "High groundwater table during monsoon excavation.",
  solution: "Raft foundation with 3-tier membrane tanking.",
  materialsHighlight: ["UltraTech WeatherPlus", "Tata Tiscon 550D"],
  features: ["Solar ready", "Terrace garden"],
  stageBreakdown: [...]
}
```

### 3. How to Update Material Brands or FAQs
Edit `MATERIAL_BRANDS` or `FAQS` in `/src/lib/data.ts`.

---

## 🚀 Build & Verification

```bash
# Run local development server
npm run dev

# Lint & typecheck
npm run lint

# Production build
npm run build
```
