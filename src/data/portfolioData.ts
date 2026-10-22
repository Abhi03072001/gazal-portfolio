export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  company: string;
  companyRole: string;
  liveUrl?: string;
  tags: string[];
  challenge: string;
  approach: string[];
  highlights: { label: string; value: string; desc?: string }[];
  visuals: {
    title: string;
    description: string;
    image: string;
    badge?: string;
  }[];
  pdfPage: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'ui' | 'ecommerce' | 'campaign' | 'print' | 'creative';
  categoryLabel: string;
  client: string;
  image: string;
  description: string;
  tools: string[];
}

export interface ExperienceItem {
  number: string;
  company: string;
  role: string;
  focus: string[];
  projects: string[];
  description: string;
}

export const DESIGNER_INFO = {
  name: "Gazal Soni",
  role: "UI & Graphic Designer",
  experienceYears: "2 years 8 months",
  headline: "Connecting creative decisions with measurable business outcomes.",
  summary: "Multidisciplinary designer specializing in UI design, scalable visual systems, high-converting e-commerce storytelling, and AI-accelerated creative workflows. I turn business requirements into visual systems that are useful, consistent, and ready to scale.",
  philosophy: "Design with a reason. A practice shaped by clarity, consistency, and business context. AI helps me move faster, explore more options, and deliver quicker—while keeping creative direction, brand accuracy, and final refinement strictly human-led.",
  motto: "Design should make the value visible.",
  portrait: "/assets/gazal-soni-portrait.jpg",
  contact: {
    email: "gazalsonisoni@gmail.com",
    phone: "+91 62848 22066",
    behance: "https://behance.net/gazalsoni2",
    behanceDisplay: "behance.net/gazalsoni2",
    location: "India",
  },
  capabilities: [
    "UI Design & Information Hierarchy",
    "Brand Systems & Visual Direction",
    "E-Commerce Content & Product Storytelling",
    "AI-Assisted Image & Video Workflows",
    "Full-Funnel Campaign Design (TOFU / MOFU / BOFU)",
    "Publication & Educational Book Systems"
  ],
  tools: {
    design: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Canva", "Jira"],
    ai: ["ChatGPT & Gemini", "Framer AI & Gamma", "AI Image Ideation & Generation", "Ad-Video & Content Production", "Rapid Variant Iteration"],
    qualityPillars: [
      "Creative direction",
      "Brand consistency",
      "Product accuracy",
      "Visual selection",
      "Final refinement"
    ]
  }
};

export const LIVE_CLIENT_SITES = [
  {
    name: "Truly Beauty",
    url: "https://www.trulybeauty.com/",
    displayUrl: "trulybeauty.com",
    role: "E-Commerce UI & Graphic Designer (via WEO Infotech)",
    impact: "+40% Conversion Improvement",
    tags: ["E-Commerce UI", "Themed Storytelling", "Landing Pages"],
    description: "Designed dessert-inspired, fantasy-themed landing pages and shopping journeys including the viral 'Unicorn Fruit' and seasonal collections, harmonizing rich visual storytelling with frictionless product purchase flows.",
    previewImg: "/assets/real/website_banners/home-unicorn-fruit-desktop.jpg",
    fullViewImg: "/assets/real/some_ui_designs/Truly-land.jpg",
  },
  {
    name: "FirstFlowAI",
    url: "https://firstflow.ai/",
    displayUrl: "firstflow.ai",
    role: "Product Identity & CRM UI Designer (via Zonopact)",
    impact: "Complete Brand & CRM System",
    tags: ["Product Identity", "CRM Dashboard", "Marketing UI"],
    description: "Architected a connected visual identity, marketing landing experience, and modular CRM dashboard system for an AI-first product, making dense sales pipelines and scheduling feel intuitive and actionable.",
    previewImg: "/assets/real/first_flow_ai_website_ui_and_crm_design/Homepage-v2_website_UI_design.jpg",
    fullViewImg: "/assets/real/first_flow_ai_website_ui_and_crm_design/Firstflowai-CRM.jpg",
  },
  {
    name: "Mono Bioholistic",
    url: "https://monoskin.health/",
    displayUrl: "monoskin.health",
    role: "UI & Graphic Designer (via Mountainor Wellbeing)",
    impact: "Revenue Scaled ₹50K → ₹3-4 Lakh/mo",
    tags: ["Brand System", "MINO Character Design", "Full-Funnel Ads"],
    description: "Led comprehensive brand transformation across web, commerce catalog, and advertising. Created the recognizable 'MINO' 3D mascot system and full-funnel TOFU/MOFU/BOFU campaign framework that powered multi-fold monthly revenue growth.",
    previewImg: "/assets/real/website_banners/Mono_homepage_banners_Mono_.jpg",
    fullViewImg: "/assets/real/website_banners/science_backed_banner_Mono.jpg",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mono-bioholistic",
    number: "01",
    title: "Mono Bioholistic",
    company: "Mountainor Wellbeing Pvt. Ltd.",
    companyRole: "UI & Graphic Designer",
    liveUrl: "https://monoskin.health/",
    tags: ["UI Design", "Brand System", "E-Commerce", "AI Workflow", "3D Character"],
    challenge: "Mono's existing website needed a stronger visual and user experience. The brand also lacked a recognizable visual device that could connect its website, social channels, and advertising, while making clinical skincare science approachable.",
    approach: [
      "Unified the visual direction across website, marketplace catalogs, and performance ad creatives.",
      "Conceived and built the friendly 'MINO' superhero character system to make clinical topics approachable.",
      "Engineered a repeatable catalogue system from source photography into benefit-driven ingredient storytelling (Watermelon, Glutathione, Vitamin C).",
      "Designed full-funnel campaign assets across TOFU (problem awareness), MOFU (education & trust), and BOFU (conversion offers).",
      "Built a 5-step AI-assisted visual production engine (Define > Direct > Generate > Refine > Adapt) to scale creative output."
    ],
    highlights: [
      { label: "Company Revenue Growth", value: "₹50K → ₹3-4 Lakh", desc: "Monthly revenue scaled during this transformation period" },
      { label: "Mascot Innovation", value: "MINO System", desc: "Friendly 3D visual device across web, ads, and packaging" },
      { label: "Campaign Scope", value: "Full-Funnel", desc: "Coordinated TOFU, MOFU, and BOFU creative pipeline" },
      { label: "Production Speed", value: "5x Faster", desc: "AI-assisted variant generation with human quality control" }
    ],
    visuals: [
      {
        title: "Science-Backed Visual Direction",
        description: "Moving beyond isolated assets to a consistent customer journey: pairing entry points (skin concerns) with proof points (clinical product science).",
        image: "/assets/real/website_banners/science_backed_banner_Mono.jpg",
        badge: "Brand Architecture"
      },
      {
        title: "MINO Superhero Character Design",
        description: "Giving the brand a recognizable face. A friendly character with water blaster makes clinical topics approachable and drives strong brand recall.",
        image: "/assets/real/carecreature_design_face_pf_mono_brand/ChatGPT_Image_Aug_12__2026__12_36_57_PM.png",
        badge: "3D Character System"
      },
      {
        title: "Poppy Care-Creature Companion",
        description: "Exploration of expressive skin-care creature characters to anthropomorphize acne concerns and guide product education.",
        image: "/assets/real/carecreature_design_face_pf_mono_brand/poppy.png",
        badge: "Character Universe"
      },
      {
        title: "Commerce Catalogue Storytelling",
        description: "From raw source photo to engaging product story: benefit communication, ingredient storytelling, and clear usage guidance for web & Myntra.",
        image: "/assets/real/mono_product_catalouge_design_for_mono_site__myntra_and_other_platforms/1.jpg",
        badge: "E-Commerce Catalog"
      },
      {
        title: "TOFU Awareness: 'Still Fighting Acne?'",
        description: "Top-of-funnel concern-led ad creative earning consumer attention through immediate problem empathy and high-trust imagery.",
        image: "/assets/real/ad_creatives_logical_tofu__mofu_and_bofu/Fight_Acne1080_1080.png",
        badge: "TOFU Awareness"
      },
      {
        title: "MOFU Education: 'Skin Ki Care Bhi'",
        description: "Middle-of-funnel educational creative establishing ingredient trust, barrier support, and hydration proof points.",
        image: "/assets/real/ad_creatives_logical_tofu__mofu_and_bofu/Mofu_1080_1080.png",
        badge: "MOFU Education"
      },
      {
        title: "BOFU Conversion: Festive Gift Sets",
        description: "Bottom-of-funnel conversion creative featuring curated Raksha Bandhan gift boxes with transparent offer terms and clear CTA.",
        image: "/assets/real/ad_creatives_logical_tofu__mofu_and_bofu/Raksha_bhandhan_sale.png",
        badge: "BOFU Conversion"
      },
      {
        title: "Clearbiotics Studio Product Mockup",
        description: "AI-assisted 3D studio render for Clearbiotics skin supplement with botanical elements and pristine product lighting.",
        image: "/assets/real/product_mockup_designs/Clearbiotics.png",
        badge: "Product Mockup"
      }
    ],
    pdfPage: 5
  },
  {
    id: "truly-beauty",
    number: "02",
    title: "Truly Beauty - E-Commerce UI",
    company: "WEO Infotech",
    companyRole: "UI & Graphic Designer",
    liveUrl: "https://www.trulybeauty.com/",
    tags: ["E-Commerce UI", "Storytelling", "Conversion Optimization", "Landing Page"],
    challenge: "The landing page needed a stronger theme and product story without losing usability or overwhelming shoppers looking to complete purchases.",
    approach: [
      "Structured the complete page architecture and visual hierarchy around key conversion actions.",
      "Crafted playful, dessert-inspired visual narratives (e.g., 'Unicorn Fruit', Valentine's Day collections).",
      "Balanced rich brand discovery and whimsical art direction with intuitive shopping CTAs.",
      "Built fully responsive e-commerce layouts tested across diverse screen sizes."
    ],
    highlights: [
      { label: "Reported Conversion", value: "+40%", desc: "Conversion improvement reported on redesigned campaign funnels" },
      { label: "Design Direction", value: "Dessert Whimsy", desc: "Rich pastel & fantasy aesthetic tailored to Gen-Z beauty market" },
      { label: "Deliverables", value: "Full-Page UI", desc: "Truly Land, Product Landing, and E-commerce Home designs" }
    ],
    visuals: [
      {
        title: "Unicorn Fruit Desktop Story Banner",
        description: "Indulge in the enchantment of Unicorn Fruit: blending dreamlike dessert product styling with immediate 'Shop Now' callouts.",
        image: "/assets/real/website_banners/home-unicorn-fruit-desktop.jpg",
        badge: "Featured Story Banner"
      },
      {
        title: "Cooka Colada Luxury Shave Butter Banner",
        description: "Decadent coconut and pineapple product styling capturing rich texture and premium gold-accented packaging.",
        image: "/assets/real/website_banners/COOKA-COLADA-DESKTOP-our-.jpg",
        badge: "Product Showcase"
      },
      {
        title: "Truly Land Full Page Architecture",
        description: "Full-length website view preserving complete information architecture, visual rhythm, and seamless commerce journeys.",
        image: "/assets/real/some_ui_designs/Truly-land.jpg",
        badge: "Full-Page UI"
      },
      {
        title: "Product Landing Page Design System",
        description: "Modular conversion landing layout balancing benefit grids, ingredient proofing, and sticky checkout actions.",
        image: "/assets/real/some_ui_designs/truly-landing-design-2.jpg",
        badge: "Landing Page Architecture"
      },
      {
        title: "Truly Beauty E-Commerce Store UI",
        description: "Complete storefront homepage featuring seasonal hero carousels, bundle showcases, and social UGC proof.",
        image: "/assets/real/some_ui_designs/truly.jpg",
        badge: "Storefront UI"
      }
    ],
    pdfPage: 12
  },
  {
    id: "firstflow-ai",
    number: "03",
    title: "FirstFlowAI",
    company: "Zonopact",
    companyRole: "UI & Graphic Designer",
    liveUrl: "https://firstflow.ai/",
    tags: ["Product Identity", "Marketing Website", "CRM System", "SaaS Dashboard"],
    challenge: "Creating an end-to-end design system for an AI-first SaaS product that encompasses brand identity, marketing presence, and high-density CRM tooling.",
    approach: [
      "Created complete product identity including multi-variant logo marks and cohesive color language.",
      "Designed marketing web experience communicating AI value proposition ('Transform Data Into Actionable Insights').",
      "Built modular CRM dashboard balancing dense metrics, pipeline status signals, and everyday team workflows.",
      "Ensured stable navigation across overview, scheduler, chat interactions, and analytical breakdowns."
    ],
    highlights: [
      { label: "System Scope", value: "End-to-End", desc: "Identity, marketing web, CRM dashboard, and mobile companion" },
      { label: "Design Principle", value: "Clarity at Scale", desc: "Making complex datasets feel effortless and actionable" },
      { label: "UI Density", value: "Modular Cards", desc: "Consistent cards, state badges, and multi-stream dashboards" }
    ],
    visuals: [
      {
        title: "Marketing Website UI & Value Proposition",
        description: "Transform Data Into Actionable Insights: High-contrast data visualizations, clean logo suite, and dashboard hero previews.",
        image: "/assets/real/first_flow_ai_website_ui_and_crm_design/Homepage-v2_website_UI_design.jpg",
        badge: "Marketing UI"
      },
      {
        title: "FirstFlowAI CRM Dashboard Suite",
        description: "Balancing dense data with intuitive actions: Schedule overview, chat system, lead conversion metrics, and stable sidebar navigation.",
        image: "/assets/real/first_flow_ai_website_ui_and_crm_design/Firstflowai-CRM.jpg",
        badge: "Dashboard Architecture"
      },
      {
        title: "Analytics & Pipeline Insights",
        description: "Interactive data visualization screens tracking response rates, conversion trends, and revenue projections.",
        image: "/assets/real/first_flow_ai_website_ui_and_crm_design/Dashboard-analystics.jpg",
        badge: "Data Visualization"
      },
      {
        title: "Schedule & Calendar Workflows",
        description: "High-density timeline planner enabling sales reps to coordinate meetings, follow-ups, and customer touchpoints seamlessly.",
        image: "/assets/real/first_flow_ai_website_ui_and_crm_design/Dashboard-calendar.jpg",
        badge: "Calendar UI"
      },
      {
        title: "FirstFlowAI Brand Identity Suite",
        description: "Unified logo family across dark, light, and inverted responsive applications with strict geometry rules.",
        image: "/assets/real/first_flow_ai_website_ui_and_crm_design/Final_logo_.jpg",
        badge: "Brand Identity"
      }
    ],
    pdfPage: 14
  },
  {
    id: "avidator-workbook",
    number: "04",
    title: "Avidator Educational Workbook",
    company: "Zonopact",
    companyRole: "UI & Graphic Designer",
    tags: ["Publication System", "188 Pages", "Educational Design", "Data Visualization"],
    challenge: "Turn dense mathematics and statistics curriculum into a structured, engaging, and age-appropriate learning experience for UK 11+ students.",
    approach: [
      "Designed systematic page architecture and grid across an entire 188-page educational volume.",
      "Established strict typographic hierarchy and visual signposts for exercises, formulas, and hints.",
      "Created friendly learning characters and visual cues that guide students through complex problem sets.",
      "Formulated a consistent four-step pedagogical flow: Collecting Data → Organising Data → Analysing Data → Presenting Data.",
      "Delivered print-ready compositions with flawless CMYK color consistency."
    ],
    highlights: [
      { label: "Publication Scale", value: "188 Pages", desc: "Comprehensive educational curriculum system" },
      { label: "Target Audience", value: "UK 11+ Learners", desc: "Calibrated readability, friendly visual tone, and engaging cues" },
      { label: "Pedagogical Framework", value: "4-Step System", desc: "Consistent learning flow: Collect, Organise, Analyse, Present" }
    ],
    visuals: [
      {
        title: "Workbook Series Cover Architecture",
        description: "Avidator's Guide to Statistics (Foundations of Data and Analysis, Volume 1): Cover hierarchy, booster kit callout, and mascot framing.",
        image: "/assets/real/london_school_of_emerging_tecnology_work_book_math_s_book_design/000.-Series-covers-2-7-book.jpg",
        badge: "Publication Cover"
      },
      {
        title: "Student Booster Brochure & Quiz System",
        description: "Interactive learning leaflet featuring quiz formats, character reward badges, and structured study schedules.",
        image: "/assets/real/brochur_or_leaflet/Avidator-brochure--rework.jpg",
        badge: "Student Collateral"
      },
      {
        title: "Avidator Learning Products Social Creative",
        description: "Promotional campaign offering 30% off curriculum booster materials to boost children's academic confidence.",
        image: "/assets/real/social_media_posters/30-OFF-on-All-Avidator-Learning-Products.jpg",
        badge: "Campaign Creative"
      },
      {
        title: "Avidator Christmas 2025 Seasonal Campaign",
        description: "Festive holiday social campaign with themed typography, seasonal discounts, and branded character decorations.",
        image: "/assets/real/social_media_posters/AVIDATOR-CHRISTMAS-SPECIAL-2025.jpg",
        badge: "Seasonal Campaign"
      }
    ],
    pdfPage: 16
  }
];

export const GALLERY_ITEMS: PortfolioItem[] = [
  {
    id: "g1",
    title: "Amazon Prime Day Campaign (Glowcin)",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Amazon",
    client: "Mono / Mountainor",
    image: "/assets/real/amazon_mountainor_products_sale_posts/Prime_day_banner_Glowcin_.png",
    description: "High-impact 60% OFF Prime Day Amazon storefront banner for Glowcin effervescent tablets, featuring vibrant product renders and urgent promotional badging.",
    tools: ["Photoshop", "Figma", "AI Generation"]
  },
  {
    id: "g2",
    title: "Amazon Product Campaign (Sea Buckthorn)",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Amazon",
    client: "Mono / Mountainor",
    image: "/assets/real/amazon_mountainor_products_sale_posts/Prime_day_banner_sea-buckthorn-v2.png",
    description: "Multi-channel Amazon promotional creative for Mono Sea Buckthorn capsules, highlighting clear skin, hormonal balance, and clinical efficacy.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "g3",
    title: "Cooka Colada Luxury Shave Butter Banner",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Amazon",
    client: "Truly Beauty",
    image: "/assets/real/website_banners/COOKA-COLADA-DESKTOP-our-.jpg",
    description: "Decadent product styling banner capturing creamy texture and premium packaging for Truly Beauty's Cooka Colada collection.",
    tools: ["Photoshop", "Figma"]
  },
  {
    id: "g4",
    title: "Performance Ad Creative (Breakout? Reset!)",
    category: "campaign",
    categoryLabel: "Campaigns & Social",
    client: "Mono / Mountainor",
    image: "/assets/real/ad_creatives_logical_tofu__mofu_and_bofu/Fight_Acne1080_1080.png",
    description: "Direct-response conversion ad addressing targeted acne breakouts with clear problem/solution messaging and high-trust imagery.",
    tools: ["Figma", "Photoshop", "Ad Analytics"]
  },
  {
    id: "g5",
    title: "Education Brochure & Quiz Architecture",
    category: "print",
    categoryLabel: "Publication & Print",
    client: "Avidator UK",
    image: "/assets/real/brochur_or_leaflet/Avidator-brochure--rework.jpg",
    description: "Student booster kit brochure incorporating interactive quiz formats, playful rewards, and clear structured exercises.",
    tools: ["InDesign", "Illustrator"]
  },
  {
    id: "g6",
    title: "WEO Corporate Leaflet & Services Collateral",
    category: "print",
    categoryLabel: "Publication & Print",
    client: "WEO Infotech",
    image: "/assets/real/brochur_or_leaflet/leflet.jpg",
    description: "B2B client acquisition leaflet: 'Build a Stunning Website with Us / Transform Your Vision into Stunning Visuals'.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    id: "g7",
    title: "Avidator Learning Products Social Creative",
    category: "campaign",
    categoryLabel: "Campaigns & Social",
    client: "Avidator UK",
    image: "/assets/real/social_media_posters/30-OFF-on-All-Avidator-Learning-Products.jpg",
    description: "Promotional holiday social creative offering 30% off curriculum booster materials to boost children's academic confidence.",
    tools: ["Figma", "Canva"]
  },
  {
    id: "g8",
    title: "Avidator Christmas 2025 Seasonal Campaign",
    category: "campaign",
    categoryLabel: "Campaigns & Social",
    client: "Avidator UK",
    image: "/assets/real/social_media_posters/AVIDATOR-CHRISTMAS-SPECIAL-2025.jpg",
    description: "Festive holiday email and social campaign with themed typography, seasonal discounts, and branded character decorations.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    id: "g9",
    title: "LSET Incubator Startup Journey Roadmap",
    category: "campaign",
    categoryLabel: "Campaigns & Social",
    client: "LSET London / Zonopact",
    image: "/assets/real/social_media_posters/FirstFlowAI-X-LSET--Startup-Journey-Roadmap.jpg",
    description: "London School of Emerging Technology startup journey roadmap infographic tracking founders from ideation to investor readiness.",
    tools: ["Figma", "Illustrator"]
  },
  {
    id: "g10",
    title: "LSET 'We Build Startups' Social Creative",
    category: "campaign",
    categoryLabel: "Campaigns & Social",
    client: "LSET London / Zonopact",
    image: "/assets/real/social_media_posters/We-dont-just-teach-startups.-We-build-them.jpg",
    description: "High-contrast brand campaign emphasizing entrepreneurship, mentorship, and practical incubation over traditional theory.",
    tools: ["Photoshop", "Figma"]
  },
  {
    id: "g11",
    title: "LSET Analytics Dashboard UI",
    category: "ui",
    categoryLabel: "UI & Dashboards",
    client: "Zonopact / LSET",
    image: "/assets/real/some_ui_designs/LSET_Dashboard-2.jpg",
    description: "Enterprise analytics interface presenting data matrices, cohort performance graphs, and key performance indicators.",
    tools: ["Figma", "UI Design System"]
  },
  {
    id: "g12",
    title: "LSET Modular Landing Page UI",
    category: "ui",
    categoryLabel: "UI & Dashboards",
    client: "Zonopact / LSET",
    image: "/assets/real/some_ui_designs/Lset_landing_page.jpg",
    description: "Conversion-optimized landing page blueprint featuring modular feature blocks, value proofing, and structured lead forms.",
    tools: ["Figma", "Adobe XD"]
  },
  {
    id: "g13",
    title: "Surreal Editorial Double Exposure",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Creative Exploration",
    image: "/assets/real/some_experiment_in_photoshop/double_exposer_2.png",
    description: "Atmospheric portrait compositing blending human expression with expressive smoke, texture layering, and dramatic monochrome lighting.",
    tools: ["Adobe Photoshop"]
  },
  {
    id: "g14",
    title: "Strawberry Smoothies Commercial Manipulation",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Brand Concept",
    image: "/assets/real/some_experiment_in_photoshop/stawberry_copy.png",
    description: "Hyper-real commercial food manipulation depicting floating strawberry textures, liquid splashes, and appetizing beverage framing.",
    tools: ["Photoshop", "Retouching"]
  },
  {
    id: "g15",
    title: "Ambient Biophilic Water Sphere Concept",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Concept Exploration",
    image: "/assets/real/some_experiment_in_photoshop/TRANSPARENT_EFFECT_WATER_AND_TREE_PNG.png",
    description: "Lush underwater and nature orb concept artwork fusing environmental aesthetics with digital typography.",
    tools: ["Photoshop", "AI Generative Engine"]
  },
  {
    id: "g16",
    title: "MINO Superhero 3D Character Render",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Mono Bioholistic",
    image: "/assets/real/carecreature_design_face_pf_mono_brand/ChatGPT_Image_Aug_12__2026__12_36_57_PM.png",
    description: "3D mascot design for MINO, the brand guardian equipped with a clinical water-cannon, turning acne education into an engaging narrative.",
    tools: ["AI 3D Ideation", "Photoshop", "Character Direction"]
  },
  {
    id: "g17",
    title: "Poppy Care-Creature 3D Exploration",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Mono Bioholistic",
    image: "/assets/real/carecreature_design_face_pf_mono_brand/poppy.png",
    description: "Expressive red care-creature companion designed to embody skincare flare-ups and guide friendly product remediation.",
    tools: ["3D Character Design", "Photoshop"]
  },
  {
    id: "g18",
    title: "Clearbiotics Studio Product Mockup",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Amazon",
    client: "Mono Bioholistic",
    image: "/assets/real/product_mockup_designs/Clearbiotics.png",
    description: "Photorealistic 3D studio mockup render for Clearbiotics skin supplement bottle with botanical chamomile backdrop.",
    tools: ["Photoshop", "AI Generation"]
  },
  {
    id: "g19",
    title: "Truly Land Complete Store Experience",
    category: "ui",
    categoryLabel: "UI & Dashboards",
    client: "Truly Beauty",
    image: "/assets/real/some_ui_designs/Truly-land.jpg",
    description: "Comprehensive full-page UI architecture for Truly Land, weaving vibrant Gen-Z beauty storytelling with friction-free checkout funnels.",
    tools: ["Figma", "UI Design System"]
  },
  {
    id: "g20",
    title: "Surreal Whale in Cloudscape Concept",
    category: "creative",
    categoryLabel: "Creative & AI Art",
    client: "Creative Exploration",
    image: "/assets/real/some_experiment_in_photoshop/whale_copy.png",
    description: "Dreamlike surrealist Photoshop manipulation placing an ethereal blue whale gliding through celestial cloud textures.",
    tools: ["Adobe Photoshop"]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    number: "03",
    company: "Mountainor Wellbeing Pvt. Ltd.",
    role: "UI & Graphic Designer",
    focus: [
      "Mono brand direction & visual language",
      "E-commerce catalogue systems (Website, Myntra, Amazon)",
      "Full-funnel campaign strategy (TOFU/MOFU/BOFU)",
      "MINO 3D character system development",
      "AI-assisted image and video content production"
    ],
    projects: ["Mono Bioholistic (monoskin.health)", "Prime Day Campaigns", "Glow-in Product Series"],
    description: "Spearheaded visual identity and performance marketing design for wellness and clinical skincare lines. Enabled rapid asset scalability by pioneering an AI-accelerated visual engine while maintaining rigorous brand quality standards."
  },
  {
    number: "02",
    company: "Zonopact",
    role: "UI & Graphic Designer",
    focus: [
      "Product UI, dashboards & CRM workflow architecture",
      "Brand identity & marketing web experiences",
      "Avidator 188-page educational publication system",
      "Campaign design & brand collaterals for LSET London"
    ],
    projects: ["FirstFlowAI (firstflow.ai)", "Avidator Guide to Statistics (188 Pages)", "London School of Emerging Technology"],
    description: "Designed core enterprise CRM systems, data visualization dashboards, and educational publications. Transformed complex technical workflows and mathematics curriculum into clean, accessible digital interfaces and print publications."
  },
  {
    number: "01",
    company: "WEO Infotech",
    role: "UI & Graphic Designer",
    focus: [
      "Website interfaces & information architecture",
      "Visual communication & brand collateral",
      "High-converting e-commerce design",
      "Themed storytelling and seasonal promotional funnels"
    ],
    projects: ["Truly Beauty (trulybeauty.com)", "Corporate Branding & Leaflets", "Client Websites"],
    description: "Delivered conversion-focused e-commerce layouts and visual storytelling for international clients, including Truly Beauty's signature dessert-themed collections which generated a reported +40% conversion improvement."
  }
];

export const AI_WORKFLOW_STEPS = [
  {
    step: "01",
    name: "Define the Message",
    desc: "Unpack business objectives, key consumer problem (e.g. acne concern), and required emotional tone.",
    category: "Strategic Foundation"
  },
  {
    step: "02",
    name: "Direct the Visual",
    desc: "Establish creative direction, color balance, lighting prompts, and camera composition angles.",
    category: "Art Direction"
  },
  {
    step: "03",
    name: "Generate & Iterate",
    desc: "Use AI generators (ChatGPT, Gemini, Midjourney/Flux, Framer) to explore dozens of visual iterations in minutes.",
    category: "AI Acceleration"
  },
  {
    step: "04",
    name: "Refine for Brand Accuracy",
    desc: "Human-in-the-loop retouching in Photoshop/Figma to ensure packaging labels, product bottles, and typography are 100% accurate.",
    category: "Human Craft"
  },
  {
    step: "05",
    name: "Adapt Across Channels",
    desc: "Scale the approved artwork across web banners, marketplace squares, vertical social reels, and print.",
    category: "Multi-Touchpoint Delivery"
  }
];
