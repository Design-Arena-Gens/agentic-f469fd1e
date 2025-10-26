export type MiniatureProject = {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  metrics: string[];
};

export type Category = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  highlights: string[];
  image: string;
};

export type Project = {
  id: string;
  name: string;
  type: string;
  location: string;
  scope: string;
  description: string;
  cover: string;
  gallery: string[];
  deliverables: string[];
};

export type Testimonial = {
  id: string;
  client: string;
  role: string;
  projectId: string;
  quote: string;
  excerpt: string;
  logoText: string;
  moodImage: string;
};

export const MINIATURE_PROJECTS: MiniatureProject[] = [
  {
    id: "aurora-bay",
    title: "Aurora Bay Residences",
    location: "Dubai Marina, UAE",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description:
      "Oceanfront towers wrapped in bronze glass with cascading terraces and sculpted lighting.",
    metrics: ["360° masterplan", "Dusk + dawn lighting", "Interactive lobby reveal"],
  },
  {
    id: "helix-quarter",
    title: "Helix Quarter",
    location: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1495379397066-25f63f120f55?auto=format&fit=crop&w=1200&q=80",
    description:
      "Mixed-use cultural hub woven with suspended gardens and luminous pedestrian bridges.",
    metrics: ["Atmospheric storytelling", "Day-to-night timelapse", "Spatial sequencing"],
  },
  {
    id: "solstice-atrium",
    title: "Solstice Atrium",
    location: "Lisbon, Portugal",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    description:
      "Boutique office tower with prismatic atrium and kinetic light installation inspired by golden hour.",
    metrics: ["Material mood boards", "Sun studies", "Immersive atrium walkthrough"],
  },
  {
    id: "mirage-park",
    title: "Mirage Park Villas",
    location: "Los Angeles, USA",
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hillside villas with layered terraces, cascading water courts, and cinematic skyline framing.",
    metrics: ["Drone visualizations", "Landscape choreography", "Lifestyle styling"],
  },
];

export const ABOUT_STATS = [
  {
    value: 12,
    suffix: "+",
    label: "Years crafting immersive visualizations",
  },
  {
    value: 180,
    suffix: "+",
    label: "Architectural landscapes staged",
  },
  {
    value: 42,
    suffix: " cities",
    label: "Global developments launched",
  },
  {
    value: 97,
    suffix: "%",
    label: "Client retention across portfolios",
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "properties",
    title: "Properties",
    summary: "Tailored residential narratives for ultra-premium buyers.",
    detail:
      "From penthouse dreamscapes to boutique villas, we orchestrate camera choreography, lighting, and styling to express the unique mood of every address.",
    highlights: [
      "Cinematic film-grade sequences",
      "Lifestyle storytelling & staging",
      "Configurable interior palettes",
    ],
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    summary: "Large-scale urban catalysts captured as living ecosystems.",
    detail:
      "We translate complex masterplans into intuitive journeys—interweaving infrastructure, amenities, and human flow with a sense of dramatic scale.",
    highlights: [
      "360° immersive fly-throughs",
      "Interactive masterplan layers",
      "Sun + wind environmental studies",
    ],
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "themes",
    title: "Themes",
    summary: "Experiential concepts that become cultural anchors.",
    detail:
      "Theme parks, hospitality, and branded destinations visualized with emotive storytelling, layered atmospherics, and rich tactile detail.",
    highlights: [
      "Narrative world-building",
      "Mood + material atlases",
      "Interactive scenography",
    ],
    image:
      "https://images.unsplash.com/photo-1529429617124-aee0a96ffaf0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "design",
    title: "Design",
    summary: "Architectural competition visuals with precision and poetry.",
    detail:
      "We embed the architect's intent into every shot, balancing technical rigor with emotive storytelling to create unforgettable proposal decks.",
    highlights: [
      "Parametric study visuals",
      "Spectral lighting explorations",
      "Narrative-infused render sequences",
    ],
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "commercial",
    title: "Commercial",
    summary: "Retail, workplace, and hospitality identities rendered with signature flair.",
    detail:
      "We choreograph guests, light, and materials to communicate brand ambience and spatial flow in visceral clarity.",
    highlights: [
      "Omni-channel asset suites",
      "Interactive experience maps",
      "Signature lighting & motion graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "sierra-verve",
    name: "Sierra Verve Residences",
    type: "Ultra-luxury residential",
    location: "Mexico City, Mexico",
    scope: "Masterplan + interiors + marketing gallery",
    description:
      "A cascading hillside enclave inspired by volcanic formations. Layered terraces, mirrored water courts, and ambient art commissions were visualized through cinematic camera language and dynamic lighting modes.",
    cover:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529429617124-aee0a96ffaf0?auto=format&fit=crop&w=1200&q=80",
    ],
    deliverables: [
      "Eight-minute hero film",
      "Interactive sales suite",
      "56 high-resolution master renders",
    ],
  },
  {
    id: "lyric-district",
    name: "Lyric District",
    type: "Mixed-use cultural precinct",
    location: "Melbourne, Australia",
    scope: "Urban placemaking + retail journeys",
    description:
      "An arts-led destination with layered retail, performance, and rooftop ecosystems. We captured the choreography of public life through kinetic typographies, live-acted sequences, and soft glowing atmospheres.",
    cover:
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495379397066-25f63f120f55?auto=format&fit=crop&w=1200&q=80",
    ],
    deliverables: [
      "Spectacle campaign film",
      "AR-powered exploration",
      "Augmented brand toolkit",
    ],
  },
  {
    id: "atlas-forum",
    name: "Atlas Forum",
    type: "Future workplace campus",
    location: "Berlin, Germany",
    scope: "Architecture + digital twin",
    description:
      "A modular timber campus blending work, wellness, and civic activation. We delivered responsive simulations, guided storyboards, and interactive storytelling for stakeholder alignment.",
    cover:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529429617124-aee0a96ffaf0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
    ],
    deliverables: [
      "Digital twin platform",
      "Immersive pitch deck",
      "High-fidelity VR walkthrough",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "lumen",
    client: "Lumen Developments",
    role: "Director of Brand Experience",
    projectId: "sierra-verve",
    excerpt:
      "“Model Art translated our architectural intent into an emotive narrative that sold out the launch."",
    quote:
      "Every frame carried the weight of our brief—earthy, refined, quietly powerful. The team layered sound, light, and human moments with choreography we typically only see in cinema.",
    logoText: "Lumen",
    moodImage:
      "https://images.unsplash.com/photo-1495379397066-25f63f120f55?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "northbridge",
    client: "Northbridge Estates",
    role: "Chief Marketing Officer",
    projectId: "atlas-forum",
    excerpt:
      "“They choreographed a digital twin that let stakeholders feel the campus before ground-breaking."",
    quote:
      "Their motion language combined warmth with rigorous detail. The interactive narratives became our north star for placemaking decisions across the board.",
    logoText: "Northbridge",
    moodImage:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "atlas",
    client: "Atlas Collective",
    role: "Lead Architect",
    projectId: "lyric-district",
    excerpt:
      "“An extension of our studio—Model Art elevated the storytelling at every iteration."",
    quote:
      "They layered atmospheric sequences that harmonized with our concept sketches. The final presentation resonated with jury members and investors alike.",
    logoText: "Atlas",
    moodImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];
