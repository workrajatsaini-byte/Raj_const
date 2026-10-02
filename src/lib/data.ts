// PROJECT DATA - Keep it human-readable & editable by non-developers
// Client edits data.ts without touching JSX components

import heroHomeImg from '@/src/assets/images/hero_home_exterior_1790964578894.jpg';
import duplexImg from '@/src/assets/images/project_duplex_whitefield_1790964660866.jpg';
import villaImg from '@/src/assets/images/project_villa_sarjapur_1790964679130.jpg';
import handoverImg from '@/src/assets/images/handover_keys_moment_1790964690709.jpg';

export interface Project {
  id: string;
  title: string; // e.g. "3BHK Duplex, Whitefield"
  category: 'Home' | 'Villa' | 'Renovation' | 'Commercial';
  location: string;
  areaSqFt: number;
  durationMonths: number;
  budgetRange: string; // e.g. "₹1.15 Cr - ₹1.35 Cr"
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  testimonial?: {
    type: 'video' | 'text' | 'whatsapp';
    src: string;
    clientName: string;
    roleOrArea: string;
  };
  materialsHighlight: string[];
  features: string[];
  stageBreakdown: {
    stage: string;
    duration: string;
    notes: string;
  }[];
}

export interface TrustBadgeItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  iconName: 'Home' | 'Building2' | 'Calendar' | 'ShieldCheck';
  verificationLink?: string;
  verificationLabel?: string;
}

export interface MaterialBrand {
  id: string;
  name: string;
  category: string;
  tagline: string;
  protectionPromise: string;
  logoText: string;
  badge: string;
  testedFor: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  completionYear: string;
  portrait: string;
  videoDuration?: string;
  fearedMost: string;
  problemHandled: string;
  adviceToBuyers: string;
  whatsappMessage: {
    time: string;
    date: string;
    messageText: string;
    replyText: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Money & Payment' | 'Quality & Warranty' | 'Timeline' | 'Design & Permissions';
  highlightPoint?: string;
}

export const COMPANY_DETAILS = {
  name: "Tier 3 Builders",
  tagline: "We Build Homes That Last Generations.",
  subhead: "200+ Families Handed Keys. On Time. On Budget. No Surprises.",
  primaryPhone: "+91 98801 94520",
  rawPhone: "+919880194520",
  whatsappNumber: "+91 98801 94520",
  whatsappRaw: "919880194520",
  email: "contact@tier3builders.com",
  officeAddress: "Plot #42, 2nd Floor, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru",
  reraNumber: "PRM/KA/RERA/1251/310/PR/210408/004125",
  reraVerificationUrl: "https://rera.karnataka.gov.in/",
  gstin: "29AABCT8841M1ZP",
  pan: "AABCT8841M",
  bbmpReg: "BBMP/ENG/CL-1/2011/489",
  establishedYear: 2011,
  languagesSpoken: ["Kannada", "Hindi", "English", "Telugu", "Tamil"],
  partnerBanks: ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Canara Bank"],
  penaltyClauseAmount: "₹1,500/day",
};

export const TRUST_BADGES: TrustBadgeItem[] = [
  {
    id: "homes",
    label: "Homes Delivered",
    value: 200,
    suffix: "+",
    subtext: "100% on-time handover record",
    iconName: "Home"
  },
  {
    id: "commercial",
    label: "Commercial Projects",
    value: 50,
    suffix: "+",
    subtext: "Retail hubs & tech offices",
    iconName: "Building2"
  },
  {
    id: "years",
    label: "Years in Bengaluru",
    value: 15,
    suffix: " Yrs",
    subtext: "Same physical Indiranagar office",
    iconName: "Calendar"
  },
  {
    id: "rera",
    label: "RERA Karnataka Reg.",
    value: 100,
    suffix: "% Legal",
    subtext: "PRM/KA/RERA/1251/310/PR/210408",
    iconName: "ShieldCheck",
    verificationLink: "https://rera.karnataka.gov.in/",
    verificationLabel: "Verify on Govt Portal"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "whitefield-3bhk-duplex",
    title: "3BHK Tropical Modern Duplex",
    category: "Home",
    location: "Prestige Glenwood, Whitefield",
    areaSqFt: 2850,
    durationMonths: 10,
    budgetRange: "₹1.15 Cr - ₹1.28 Cr",
    heroImage: duplexImg,
    gallery: [duplexImg, heroHomeImg, villaImg],
    challenge: "Narrow 30x50 plot with high boundary walls on both sides leading to zero direct sunlight in ground floor living area.",
    solution: "Engineered a central 2-storey skylight lightwell and double-glazed louvered facade that flooded 85% of interior rooms with natural daylight without compromising privacy.",
    testimonial: {
      type: "whatsapp",
      src: "Delivered 12 days before Diwali as promised. Not a single extra rupee asked.",
      clientName: "Srinivas & Sunita Murthy",
      roleOrArea: "IT Director & High School Principal"
    },
    materialsHighlight: [
      "UltraTech Super Cement for foundation & RCC",
      "Tata Tiscon 550D TMT rebar with test certificates",
      "Kajaria 4ft x 2ft glazed vitrified floor tiles",
      "Jaquar Opal Prime bathroom fixtures"
    ],
    features: [
      "Ground floor senior-friendly master bedroom with non-slip tiles",
      "Terrace garden with 3-layer elastomeric waterproofing",
      "Rainwater harvesting tank (6,000 Litres)",
      "Solar rooftop conduit pre-installed"
    ],
    stageBreakdown: [
      { stage: "Piling & Foundation", duration: "6 Weeks", notes: "Soil test verified 4.2m depth to rock stratum" },
      { stage: "RCC Structure & Slabs", duration: "12 Weeks", notes: "18-day curing cycle strictly observed" },
      { stage: "Brickwork, Plaster & Piping", duration: "10 Weeks", notes: "Concealed Polycab FR conduits tested" },
      { stage: "Finishing & Handover", duration: "12 Weeks", notes: "Deep cleaning & 5-year warranty certificate" }
    ]
  },
  {
    id: "sarjapur-4bhk-villa",
    title: "4BHK Contemporary Courtyard Villa",
    category: "Villa",
    location: "Carmelaram, Sarjapur Road",
    areaSqFt: 4200,
    durationMonths: 13,
    budgetRange: "₹1.95 Cr - ₹2.18 Cr",
    heroImage: villaImg,
    gallery: [villaImg, heroHomeImg, duplexImg],
    challenge: "Client lived in Singapore throughout the build and had severe fear of contractor delays, material swapping, and poor plumbing quality.",
    solution: "Instituted Saturday 10:00 AM WhatsApp video calls, drone progress shots, and shared every vendor purchase receipt with MRP bill and serial numbers.",
    testimonial: {
      type: "video",
      src: "I visited Bangalore only twice: once for Bhoomi Pooja, once for Griha Pravesh. Everything was identical to 3D walk-through.",
      clientName: "Rajesh & Ananya Nayak",
      roleOrArea: "Tech Consultant, Singapore NRI"
    },
    materialsHighlight: [
      "Saint-Gobain Acoustic Double-Glazed Windows",
      "Asian Paints Royale Luxury Interior Finish",
      "Polycab FRLS Fire-Resistant Copper Conduits",
      "Kajaria GVT Italian Marble series"
    ],
    features: [
      "Double-height 22ft ceiling living room with acoustic insulation",
      "Integrated home theatre room pre-wired",
      "Custom pooja room with hand-carved teak frame",
      "EV car charging port (7.4kW) in parking bay"
    ],
    stageBreakdown: [
      { stage: "Deep Foundation", duration: "8 Weeks", notes: "Tested for high water table in monsoon" },
      { stage: "Double-Height RCC Frame", duration: "14 Weeks", notes: "Structural audit passed by independent engineer" },
      { stage: "Joinery & Electricals", duration: "12 Weeks", notes: "Concealed lines pressure tested to 10 Bar" },
      { stage: "Finishing & Landscaping", duration: "16 Weeks", notes: "Final punch-list sign-off with 0 open defects" }
    ]
  },
  {
    id: "indiranagar-independent-house",
    title: "3BHK Stilt + 2 Independent Residence",
    category: "Home",
    location: "Defence Colony, Indiranagar",
    areaSqFt: 3400,
    durationMonths: 11,
    budgetRange: "₹1.55 Cr - ₹1.72 Cr",
    heroImage: heroHomeImg,
    gallery: [heroHomeImg, duplexImg, handoverImg],
    challenge: "Demolishing 42-year-old crumbling ancestral home between tight neighboring shared walls without causing hairline wall vibrations.",
    solution: "Used silent hydraulic pile cutting and micro-shoring technique. Zero crack complaints from adjacent neighbors, completed foundation in record 4 weeks.",
    testimonial: {
      type: "text",
      src: "My father is 78. He sat on the veranda every morning watching them work. The site engineers treated him like their own uncle.",
      clientName: "Capt. Vivek Rao (Retd.)",
      roleOrArea: "Ex-Indian Navy"
    },
    materialsHighlight: [
      "Tata Tiscon 550D TMT Reinforcement",
      "UltraTech Weather Plus Waterproofing Cement",
      "Jaquar Queen's Art deco brass fittings",
      "Greenply 710 BWP Marine Grade woodwork"
    ],
    features: [
      "Stilt level 3-car parking with automatic sensor lighting",
      "Private 4-passenger hydraulic home elevator",
      "Rainwater harvesting pit with sediment filters",
      "Covered terrace entertainment pergola"
    ],
    stageBreakdown: [
      { stage: "Controlled Demolition & Shoring", duration: "5 Weeks", notes: "Hydraulic methods, 0 neighbor vibration" },
      { stage: "Stilt + 2 Floor RCC", duration: "12 Weeks", notes: "Ready-mix M25 grade concrete" },
      { stage: "Brick Masonry & Woodwork", duration: "10 Weeks", notes: "Kiln-dried red bricks and teak frames" },
      { stage: "Handover & Housewarming", duration: "11 Weeks", notes: "Delivered 8 days ahead of agreed schedule" }
    ]
  },
  {
    id: "koramangala-penthouse-renovation",
    title: "Complete Structural & Interior Overhaul",
    category: "Renovation",
    location: "4th Block, Koramangala",
    areaSqFt: 2200,
    durationMonths: 5,
    budgetRange: "₹52 Lakhs - ₹60 Lakhs",
    heroImage: handoverImg,
    gallery: [handoverImg, heroHomeImg, villaImg],
    challenge: "Severe 10-year recurring terrace seepage damaging master bedroom ceiling and short-circuiting lights during heavy Bangalore monsoons.",
    solution: "Stripped damaged screed down to parent concrete slab, applied crystalline penetration barrier + double elastomeric polyurethane membrane with 10-year leak guarantee.",
    testimonial: {
      type: "whatsapp",
      src: "Two monsoon seasons have passed. Bone dry ceiling. Tier 3 saved our house.",
      clientName: "Deepak & Malini Sen",
      roleOrArea: "Senior Architects, Koramangala"
    },
    materialsHighlight: [
      "Dr. Fixit Fastflex Elastomeric Waterproofing",
      "Saint-Gobain Reflective Energy-Efficient Glazing",
      "Asian Paints Apex Ultima Protek Exterior Paint",
      "Polycab 2.5sqmm heavy-duty rewiring"
    ],
    features: [
      "Zero seepage warranty for 10 full years backed by bond",
      "Reinforced terrace deck with outdoor vitrified pavers",
      "Fully modernized concealed plumbing lines",
      "Minimal dust barrier system protecting occupants"
    ],
    stageBreakdown: [
      { stage: "Terrace Slab Stripping", duration: "2 Weeks", notes: "Structural core check completed" },
      { stage: "3-Tier Waterproofing", duration: "4 Weeks", notes: "72-hour pond test passed with 0 drops" },
      { stage: "Interiors & Electrical", duration: "8 Weeks", notes: "Re-plastering with polymer additives" },
      { stage: "Final Warranty Issue", duration: "2 Weeks", notes: "Comprehensive moisture sensor audit" }
    ]
  },
  {
    id: "electronic-city-commercial",
    title: "Commercial Retail & Workspace Building",
    category: "Commercial",
    location: "Phase 1, Electronic City",
    areaSqFt: 8500,
    durationMonths: 15,
    budgetRange: "₹3.8 Cr - ₹4.2 Cr",
    heroImage: villaImg,
    gallery: [villaImg, duplexImg, heroHomeImg],
    challenge: "Strict municipal setback restrictions, fire exit bylaws, and heavy commercial live-load requirements for IT office lease.",
    solution: "Designed post-tensioned RCC beam layout that eliminated 4 interior columns, delivering 92% usable carpet area for client's tenants.",
    testimonial: {
      type: "text",
      src: "Full commercial building leased out within 45 days of Tier 3's handover.",
      clientName: "B. K. Chandrashekar",
      roleOrArea: "Real Estate Investor"
    },
    materialsHighlight: [
      "Tata Tiscon High Yield Strength Rebar",
      "UltraTech M30 Grade Commercial Ready Mix",
      "Schindler Commercial Elevator shaft build",
      "Kajaria Heavy Traffic vitrified tiles"
    ],
    features: [
      "Zero-column open floor plan design",
      "Fire safety NOC clearance compliant staircase",
      "Dedicated 100kVA transformer yard",
      "Underground 25,000L fire sump"
    ],
    stageBreakdown: [
      { stage: "Excavation & Footings", duration: "10 Weeks", notes: "Earthwork & retaining wall construction" },
      { stage: "G+3 Post Tensioned Slabs", duration: "20 Weeks", notes: "Specialized cable tensioning audited" },
      { stage: "Glazing & MEP", duration: "18 Weeks", notes: "Fire hydrant & HVAC risers" },
      { stage: "Occupancy Handover", duration: "12 Weeks", notes: "BBMP trade license inspection readiness" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    stepTitle: "Free Site Visit & Coffee",
    shortPhrase: "We listen, measure, advise.",
    icon: "Coffee",
    deliverables: [
      "Senior engineer visits your plot (No junior sales reps)",
      "Laser dimension check & soil visual inspection",
      "Free elevation concept discussion over coffee",
      "Zero obligation. Zero pressure to sign."
    ],
    buyerRelief: "You learn what's possible on your plot before spending a single rupee."
  },
  {
    number: "02",
    stepTitle: "Transparent Agreement with Penalty Clause",
    shortPhrase: "Fixed price. Fixed timeline. Penalty clause for US.",
    icon: "FileCheck",
    deliverables: [
      "Every single material brand and specification listed in plain language",
      "Fixed milestone payment schedule linked to physical stages",
      "Explicit daily penalty clause: We pay you ₹1,500/day if handover is delayed",
      "No 'extra charges' for basic plumbing, switches, or curing"
    ],
    buyerRelief: "The power stays with you. We bear the financial risk of delays and material inflation."
  },
  {
    number: "03",
    stepTitle: "Build & Weekly WhatsApp Video Updates",
    shortPhrase: "You see progress every Saturday. No jargon.",
    icon: "Video",
    deliverables: [
      "Dedicated Site Engineer assigned to your home only",
      "Every Saturday: 3-minute video walk-through sent to your WhatsApp",
      "You inspect each milestone before making the next payment",
      "All purchase receipts & test certificates uploaded to your phone"
    ],
    buyerRelief: "You never wonder what's happening on your plot. Even if you're busy at work, you see every brick laid."
  },
  {
    number: "04",
    stepTitle: "Handover & 5-Year Structural Warranty",
    shortPhrase: "We don't leave until you sign '100% Happy'.",
    icon: "Key",
    deliverables: [
      "120-point quality check: water pressure, tile hollowness, electrical loads",
      "Professional deep cleaning done before handing over brass keys",
      "5-Year Structural Guarantee + 2-Year Plumbing/Electrical warranty bond",
      "Our director's direct WhatsApp number remains active for life"
    ],
    buyerRelief: "If a tap leaks or a switch malfunctions in Year 2, our technician arrives within 24 hours."
  }
];

export const MATERIAL_BRANDS: MaterialBrand[] = [
  {
    id: "ultratech",
    name: "UltraTech Cement",
    category: "Foundation & RCC Concrete",
    tagline: "India's No. 1 Cement",
    protectionPromise: "Protects against concrete voids, sulfate attack, and dampness. We never use cheap unbranded local blends.",
    logoText: "UltraTech",
    badge: "Grade 53 OPC & WeatherPlus",
    testedFor: "Compressive strength > 53 MPa at 28 days"
  },
  {
    id: "tata-tiscon",
    name: "Tata Tiscon 550D",
    category: "Structural Steel Reinforcement",
    tagline: "Joy of Building with Pure Steel",
    protectionPromise: "High ductility 550D TMT rebar protects your home against seismic tremors and rust. Sourced directly from authorized dealers.",
    logoText: "TATA TISCON",
    badge: "550D Super Ductile",
    testedFor: "Original mill test certificate with batch stamp"
  },
  {
    id: "kajaria",
    name: "Kajaria Ceramics",
    category: "Vitrified Flooring & Wall Tiles",
    tagline: "India's Largest Tile Manufacturer",
    protectionPromise: "High abrasion resistance, 0.05% water absorption. Zero hollow sound when walked upon.",
    logoText: "Kajaria",
    badge: "Double Charged GVT",
    testedFor: "Laser level flatness & stain resistance"
  },
  {
    id: "jaquar",
    name: "Jaquar Bath Fittings",
    category: "Plumbing, Faucets & Sanitaryware",
    tagline: "10-Year Manufacturer Warranty",
    protectionPromise: "Solid brass bodies with 10-micron chrome plating. Never drips, never rusts in hard water.",
    logoText: "Jaquar",
    badge: "Opal / Florentine Series",
    testedFor: "10 Bar hydraulic pressure tested before plaster"
  },
  {
    id: "asian-paints",
    name: "Asian Paints Royale",
    category: "Wall Emulsion & Weather Exterior",
    tagline: "Teflon Surface Protector",
    protectionPromise: "Washable stain-resistant interior paint and Apex Ultima Protek exterior weather shield against algae and monsoon mildew.",
    logoText: "asian paints",
    badge: "Royale Shyne & Ultima",
    testedFor: "Anti-fungal & UV color fastness guaranteed"
  },
  {
    id: "polycab",
    name: "Polycab Wires & Cables",
    category: "Concealed Electrical Safety",
    tagline: "Safe House, Safe Nation",
    protectionPromise: "100% pure electrolytic grade copper with Flame Retardant Low Smoke (FRLS) insulation to eliminate short-circuit fire risks.",
    logoText: "POLYCAB",
    badge: "FRLS Class 1 Copper",
    testedFor: "Insulation resistance tested with Megger meter"
  },
  {
    id: "greenply",
    name: "Greenply 710 Marine",
    category: "Doors, Wardrobes & Kitchen Cabinets",
    tagline: "Boiling Water Proof BWP",
    protectionPromise: "Selected hardwood treated with unextended synthetic resin. 100% borer and termite proof for 25 years.",
    logoText: "Greenply",
    badge: "IS:710 Marine Grade",
    testedFor: "72-hour boiling water immersion test compliant"
  },
  {
    id: "saint-gobain",
    name: "Saint-Gobain Glass",
    category: "Windows, Balconies & Skylights",
    tagline: "World Leader in Glass",
    protectionPromise: "Toughened safety glass with acoustic dampening. Cuts external street traffic noise by up to 34 decibels.",
    logoText: "SAINT-GOBAIN",
    badge: "Toughened & Acoustic Float",
    testedFor: "High wind-load impact certified"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "murthy-family",
    clientName: "Srinivas & Sunita Murthy",
    location: "Whitefield, Bangalore",
    projectType: "3BHK Duplex (2,850 sq ft)",
    completionYear: "Handed over: November 2024",
    portrait: handoverImg,
    videoDuration: "1:42 min",
    fearedMost: "Every contractor we met before spoke heavy engineering jargon and gave vague quotes like 'approximately 40 lakhs plus extras'. We feared being held hostage halfway through the slab with endless cost escalations.",
    problemHandled: "During excavation, we hit an unexpected underground rock formation. Other builders would have slapped us with a 2-lakh surcharge. Tier 3's director called, showed us the boulder on WhatsApp video, and absorbed 70% of the equipment rental cost as per the contract clause.",
    adviceToBuyers: "Don't look for the cheapest per-square-foot quote. Look for the builder who writes penalty clauses on stamp paper. Tier 3 is the only one who did that for us.",
    whatsappMessage: {
      date: "Nov 14, 2024",
      time: "4:15 PM",
      messageText: "Hi Venkatesh Sir, the housewarming puja finished today. My mother in law was crying tears of joy seeing the temple room. You promised Diwali handover and you gave keys 12 days before. Thank you from whole Murthy family! 🙏❤️",
      replyText: "Namaskara Murthy Sir! Seeing Amma's smile was the biggest blessing for our entire site team. Please remember your 5-year warranty is active. Call my number anytime. Wishing you endless prosperity! 🪔✨"
    }
  },
  {
    id: "nayak-family",
    clientName: "Rajesh & Ananya Nayak",
    location: "Sarjapur Road, Bangalore",
    projectType: "4BHK Contemporary Villa (4,200 sq ft)",
    completionYear: "Handed over: August 2024",
    portrait: villaImg,
    videoDuration: "2:08 min",
    fearedMost: "Living in Singapore, our biggest nightmare was that workers would cut corners on cement grade, substitute duplicate wires, or stretch an 11-month project into 3 years while we couldn't be physically on site.",
    problemHandled: "Every single Saturday at 10 AM Singapore time, Site Engineer Praveen sent a recorded 4K video showing every room, testing the plumbing joints under pressure, and showing the batch stamps on Tata steel bars. We felt like we were standing on our terrace.",
    adviceToBuyers: "For any NRI building a home in Bangalore: don't hire family friends or unorganized contractors. Go with Tier 3 Builders. Absolute corporate discipline with warm local care.",
    whatsappMessage: {
      date: "Aug 28, 2024",
      time: "7:40 PM",
      messageText: "Praveen, the final video walk-through looks spectacular! The teakwood foyer polish matches exactly what we chose. Booking our flight for key handover on Sept 5th.",
      replyText: "Sir, welcome home! The deep cleaning team is finishing today. All original purchase bills and test certificates are bound in a hardbound file ready on your dining table. See you Tuesday!"
    }
  },
  {
    id: "capt-rao",
    clientName: "Capt. Vivek Rao (Retd.)",
    location: "Indiranagar, Bangalore",
    projectType: "Independent 3BHK + Stilt (3,400 sq ft)",
    completionYear: "Handed over: March 2025",
    portrait: duplexImg,
    videoDuration: "1:15 min",
    fearedMost: "Our ancestral plot had neighbors whose boundary walls were touching ours. I was terrified of foundation vibrations cracking their old structures and leading to court notices.",
    problemHandled: "Tier 3 deployed micro-piling machines and had a senior structural engineer standing on site during all earthwork. The neighbors actually came out to compliment how clean and quiet the site was maintained.",
    adviceToBuyers: "Ask to see the builder's own site engineer. If they sub-contract to a random labour maistry, walk away. Tier 3's engineers are full-time employees who treat the build with naval discipline.",
    whatsappMessage: {
      date: "Mar 18, 2025",
      time: "11:22 AM",
      messageText: "Venkatesh garu, electricity meter connection is done. Power inspection passed on first attempt. The inspector said wiring setup is among the cleanest he has inspected in HAL 2nd Stage.",
      replyText: "Thank you Captain Sir! As an ex-serviceman yourself, we knew you expected precision. Enjoy your evening tea on the terrace deck! 🫡🇮🇳"
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-price-rise",
    category: "Money & Payment",
    question: "What if cement or steel prices increase during construction?",
    answer: "We lock prices completely at the time of the Agreement. Even if cement jumps ₹80 a bag or steel rates soar, we absorb 100% of the price increase. Your agreed price is written on legal stamp paper and will not change by a single rupee.",
    highlightPoint: "Zero price escalation risk for you."
  },
  {
    id: "faq-delays",
    category: "Timeline",
    question: "What if there are delays in finishing my house?",
    answer: "We put our money where our mouth is. Our standard contract includes a mandatory penalty clause: If we delay handover past the grace period, Tier 3 Builders pays you ₹1,500 for every single day of delay directly into your bank account. In 15 years and 200+ homes, we have never had to pay this penalty because we finish on or before time.",
    highlightPoint: "₹1,500/day delay penalty payable to you."
  },
  {
    id: "faq-cracks-leaks",
    category: "Quality & Warranty",
    question: "What if there are leaks, dampness, or cracks after I move in?",
    answer: "Every home comes with an official 5-Year Structural Warranty and a 2-Year Plumbing & Electrical Warranty. We don't vanish after handover. Our office has been in the same Indiranagar location for 15 years. If a switch misbehaves or a pipe has an issue, our service technician attends within 24 hours.",
    highlightPoint: "5-Year Structural + 2-Year MEP Warranty in writing."
  },
  {
    id: "faq-advance-money",
    category: "Money & Payment",
    question: "Will you take a huge advance and disappear with my money?",
    answer: "Never. We never ask for huge upfront advances. The initial booking amount is just ₹25,000 for site survey, soil test, and 3D concept drawings. All construction payments are strictly milestone-based: you only release funds after you personally inspect and approve each stage (Foundation → Plinth → Ground Slab → First Slab → Plastering → Handover).",
    highlightPoint: "Strict milestone payments. You only pay for work already completed."
  },
  {
    id: "faq-architect",
    category: "Design & Permissions",
    question: "Do I need to hire an independent architect?",
    answer: "Not necessarily. We have an experienced in-house architectural and structural design team that handles 100% of the 3D elevations, Vaastu floor plans, and municipal BBMP/BDA plan sanctions. This saves you 8% to 10% in outside architect fees. However, if you already have an architect you love, we are delighted to build strictly to their blueprints.",
    highlightPoint: "In-house design saves you 8–10% in professional fees."
  },
  {
    id: "faq-materials-check",
    category: "Quality & Warranty",
    question: "How do I know you are actually using UltraTech cement and Tata steel, not cheap alternatives?",
    answer: "We practice open-book transparency. Every truckload of cement, TMT rebar, and cabling that arrives at your site comes with original GST manufacturer bills and batch test certificates. You (or your family member) can inspect them anytime, or we send photo proofs directly to your WhatsApp before pouring concrete.",
    highlightPoint: "Original factory invoices & batch test certificates provided."
  },
  {
    id: "faq-bank-loans",
    category: "Money & Payment",
    question: "Can I get a home construction loan for this?",
    answer: "Yes! Tier 3 Builders is an approved builder partner with SBI, HDFC Bank, ICICI Bank, Canara Bank, and Axis Bank. Our legal documentation, RERA registration, and estimation formats match bank requirements 100%, allowing loan disbursements without bureaucratic delays.",
    highlightPoint: "Direct tie-ups with SBI, HDFC, ICICI & nationalized banks."
  },
  {
    id: "faq-hidden-charges",
    category: "Money & Payment",
    question: "Are there 'hidden charges' for electricity connection, debris removal, or water curing?",
    answer: "None. Many unorganized contractors deliberately omit site cleaning, electricity meter work, temporary water setups, or basic waterproofing so they can demand 'extra charges' later. Our Bill of Quantities (BOQ) is exhaustive: everything from site clearance to final deep cleaning is included in the quoted price.",
    highlightPoint: "Exhaustive BOQ with all site utilities and clean-up included."
  }
];

export const PACKAGES = [
  {
    id: "classic",
    name: "Classic Solid",
    pricePerSqFt: 1850,
    bestFor: "Rental homes & budget-conscious independent floors",
    keySpecs: [
      "UltraTech / Birla A1 53 Grade Cement",
      "Kamdhenu / Sunvik 550D TMT Steel",
      "Kajaria 2x2 Vitrified Tiles",
      "Cera / Hindware Sanitaryware",
      "Asian Paints Tractor Emulsion",
      "Polycab / Anchor FR Copper Wires"
    ]
  },
  {
    id: "premium",
    name: "Premium Living (Most Popular)",
    pricePerSqFt: 2250,
    popular: true,
    bestFor: "Dream homes for families seeking lifelong durability",
    keySpecs: [
      "UltraTech Weather Plus Waterproofing Cement",
      "Tata Tiscon 550D Super Ductile TMT Rebar",
      "Kajaria 4x2 Glazed Vitrified Tiles (GVT)",
      "Jaquar Opal Prime Faucets & Wall-Hung Commodes",
      "Asian Paints Royale Luxury Interior Emulsion",
      "Polycab FRLS Fire-Retardant Wires & Schneider Modular Switches",
      "Greenply 710 Marine Grade BWP Woodwork",
      "Saint-Gobain 5mm Toughened Balcony Glass"
    ]
  },
  {
    id: "luxury",
    name: "Elite Signature Villa",
    pricePerSqFt: 2850,
    bestFor: "Bespoke architectural villas & luxury duplexes",
    keySpecs: [
      "UltraTech Ready Mix M25/M30 with crystalline waterproofing",
      "Tata Tiscon 550D with third-party lab certificates",
      "Italian Marble or Imported 6x4 Large Format Slabs",
      "Kohler / Grohe Concealed Thermostatic Shower Systems",
      "Asian Paints Royale Aspira / PU Luxury Wood Polish",
      "Legrand Arteor Smart Switches & Automation Conduit",
      "100% Burma Teak Main Entrance Door & Frames",
      "Saint-Gobain Acoustic Double Glazed Windows (DGU)"
    ]
  }
];
