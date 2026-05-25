export const assets = {
  logo: "/assets/logo/logo.png",
  heroVideo: "/assets/homapage hero section video/norwavideo.mp4",
  images: {
    vertical: "/assets/placeholders/placeholder.jpg",
    square: "/assets/placeholders/placeholder01.jpg",
    wide: "/assets/placeholders/placeholder02.jpg",
    landscape: "/assets/placeholders/placeholder03.jpg",
    water: "/assets/placeholders/Water.webp",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export const contact = {
  address: "Nairobi, Kenya",
  phone: "+254 700 000 000",
  email: "info@norwawaters.co.ke",
  hours: "Monday - Friday: 8AM - 5PM",
};

export const stats = [
  { value: "48", label: "Projects delivered" },
  { value: "22M+", label: "Litres treated daily" },
  { value: "12", label: "Counties served" },
];

export const services = [
  {
    slug: "water-pumping-solutions",
    title: "Water Pumping Solutions",
    description:
      "Supply and installation of submersible pumps, solar pumps, booster sets, and high-pressure pumping systems.",
    details:
      "Norwa Waters supplies, installs, and commissions pumping systems for boreholes, buildings, irrigation networks, factories, hotels, and institutions. We match each pump to the water source, required pressure, flow demand, energy source, and site conditions so the system performs reliably after installation.",
    highlights: ["Submersible pumps", "Solar pumps", "High-pressure pumps", "Booster systems"],
  },
  {
    slug: "water-treatment-systems",
    title: "Water Treatment Systems",
    description:
      "RO systems, filtration, purification, and polishing systems for commercial and industrial water quality needs.",
    details:
      "We design and install treatment systems that improve clarity, taste, mineral balance, and overall water safety. Solutions include reverse osmosis, media filtration, softening, carbon filtration, UV disinfection, dosing, and final polishing for high-quality output.",
    highlights: ["Reverse osmosis", "Media filtration", "Purification", "Commercial water quality"],
  },
  {
    slug: "desalination-solutions",
    title: "Desalination Solutions",
    description:
      "Small to medium-scale seawater and brackish water treatment systems for dependable freshwater production.",
    details:
      "Our desalination solutions support coastal, remote, and high-salinity sites that need reliable freshwater. We configure pretreatment, membranes, pressure systems, recovery controls, and post-treatment based on salinity levels and daily demand.",
    highlights: ["Seawater treatment", "Brackish water RO", "Pretreatment", "Freshwater production"],
  },
  {
    slug: "water-storage-solutions",
    title: "Water Storage Solutions",
    description:
      "Tanks, reservoirs, pressure vessels, and associated piping for industrial and commercial water setups.",
    details:
      "We provide storage systems that keep treated and raw water available when sites need it most. Our work covers tank selection, reservoir planning, piping, valves, level controls, pressure management, and integration with pumps and treatment units.",
    highlights: ["Storage tanks", "Reservoirs", "Piping networks", "Level controls"],
  },
  {
    slug: "maintenance-service-contracts",
    title: "Maintenance & Service Contracts",
    description:
      "Preventive and corrective maintenance for pumps, filtration units, RO systems, and treatment plants.",
    details:
      "We keep water systems performing through planned maintenance, emergency repairs, consumable replacement, membrane checks, pump inspections, water quality testing, and performance monitoring. Service contracts help reduce downtime and extend equipment life.",
    highlights: ["Preventive maintenance", "Corrective repairs", "System inspections", "Performance monitoring"],
  },
  {
    slug: "technical-consultation-system-design",
    title: "Technical Consultation & System Design",
    description:
      "Engineering consultation, system sizing, technical drawings, and design support for water projects.",
    details:
      "Our technical team helps clients make the right decisions before equipment is purchased or installed. We review water sources, site requirements, budgets, target water quality, capacity needs, and operating constraints to produce practical system designs.",
    highlights: ["Engineering support", "System sizing", "Technical drawings", "Project planning"],
  },
  {
    slug: "irrigation-agricultural-solutions",
    title: "Irrigation & Agricultural Solutions",
    description:
      "Pumps, controls, storage, and water management systems for farms, greenhouses, and irrigation networks.",
    details:
      "We support agricultural water projects with pumping, storage, filtration, distribution, and control systems. Solutions are designed for irrigation reliability, efficient water use, and practical operation in demanding farm conditions.",
    highlights: ["Farm pumps", "Irrigation networks", "Water management", "Filtration for irrigation"],
  },
  {
    slug: "industrial-water-solutions",
    title: "Industrial Water Solutions",
    description:
      "Specialized water systems for factories, hotels, institutions, utilities, and high-demand facilities.",
    details:
      "Industrial and commercial sites require systems that can handle continuous demand and strict quality expectations. We build treatment, pumping, storage, and monitoring systems for production, hospitality, healthcare, education, and institutional environments.",
    highlights: ["Factories", "Hotels", "Institutions", "Process water systems"],
  },
  {
    slug: "solar-powered-water-systems",
    title: "Solar-Powered Water Systems",
    description:
      "Renewable-energy pumping and treatment solutions that reduce operating costs and improve off-grid reliability.",
    details:
      "We integrate solar power with pumps and selected treatment units for farms, boreholes, remote facilities, and community water projects. Systems are designed around daily water demand, sun hours, pump duty, storage, and backup needs.",
    highlights: ["Solar pumping", "Hybrid systems", "Off-grid reliability", "Energy cost reduction"],
  },
  {
    slug: "after-sales-support-training",
    title: "After-Sales Support & Training",
    description:
      "Operator training, technical support, system monitoring, and handover guidance after installation.",
    details:
      "A good water system needs informed operators and dependable support. We train site teams, provide handover documentation, support troubleshooting, monitor performance where required, and guide clients on safe daily operation.",
    highlights: ["Operator training", "Technical support", "System monitoring", "Handover documentation"],
  },
];

export const projects = [
  {
    slug: "industrial-ro-treatment-plant",
    title: "Industrial RO Treatment Plant",
    category: "Industrial Treatment",
    location: "Athi River",
    scope: "RO system, filtration, controls",
    capacity: "320,000 L/day",
    status: "Operational",
    image: assets.images.landscape,
    summary:
      "A compact reverse osmosis plant designed to stabilize process water quality for a high-demand industrial site.",
  },
  {
    slug: "borehole-water-purification",
    title: "Borehole Water Purification",
    category: "Borehole Treatment",
    location: "Kiambu",
    scope: "Iron removal, softening, disinfection",
    capacity: "80,000 L/day",
    status: "Operational",
    image: assets.images.square,
    summary:
      "A borehole treatment package that improved clarity, taste, and mineral balance for daily facility use.",
  },
  {
    slug: "wastewater-recovery-facility",
    title: "Wastewater Recovery Facility",
    category: "Wastewater",
    location: "Nakuru",
    scope: "Biological treatment, polishing, reuse",
    capacity: "150,000 L/day",
    status: "Commissioned",
    image: assets.images.water,
    summary:
      "A reuse-focused wastewater facility that reduces discharge volumes and supports landscape irrigation.",
  },
  {
    slug: "community-water-supply-upgrade",
    title: "Community Water Supply Upgrade",
    category: "Community Systems",
    location: "Machakos",
    scope: "Storage, treatment, distribution",
    capacity: "45,000 L/day",
    status: "Operational",
    image: assets.images.vertical,
    summary:
      "A safe-water upgrade for a growing community, combining treatment, storage, and reliable distribution.",
  },
  {
    slug: "hotel-water-softening-system",
    title: "Hotel Water Softening System",
    category: "Commercial Treatment",
    location: "Naivasha",
    scope: "Softening, filtration, dosing",
    capacity: "60,000 L/day",
    status: "Operational",
    image: assets.images.wide,
    summary:
      "A commercial softening system built to protect plumbing, improve laundry performance, and reduce scaling.",
  },
  {
    slug: "school-safe-water-project",
    title: "School Safe Water Project",
    category: "Institutional Water",
    location: "Kajiado",
    scope: "Filtration, UV disinfection, taps",
    capacity: "20,000 L/day",
    status: "Delivered",
    image: assets.images.landscape,
    summary:
      "A safe water point for students and staff, designed for simple operation and dependable daily use.",
  },
  {
    slug: "municipal-filtration-upgrade",
    title: "Municipal Filtration Upgrade",
    category: "Municipal Treatment",
    location: "Mombasa",
    scope: "Media filters, controls, testing",
    capacity: "1.2M L/day",
    status: "In service",
    image: assets.images.square,
    summary:
      "A filtration upgrade that improved treatment consistency and reduced operational downtime.",
  },
  {
    slug: "bottling-line-water-treatment",
    title: "Bottling Line Water Treatment",
    category: "Process Water",
    location: "Nairobi",
    scope: "RO, UV, polishing filtration",
    capacity: "250,000 L/day",
    status: "Operational",
    image: assets.images.water,
    summary:
      "A process-water system configured for clean taste, low turbidity, and stable production output.",
  },
  {
    slug: "farm-irrigation-reuse-system",
    title: "Farm Irrigation Reuse System",
    category: "Water Reuse",
    location: "Laikipia",
    scope: "Treatment, holding tanks, reuse line",
    capacity: "95,000 L/day",
    status: "Commissioned",
    image: assets.images.vertical,
    summary:
      "A reuse system that turns treated water into a dependable irrigation resource for dry-season resilience.",
  },
];

export const testimonials = [
  {
    quote:
      "Norwa Waters delivered a clean system, trained our team, and stayed available after commissioning.",
    name: "Facility Manager",
    location: "Athi River",
  },
  {
    quote:
      "The water quality improved immediately. The installation was organized and easy to maintain.",
    name: "Operations Lead",
    location: "Naivasha",
  },
  {
    quote:
      "Their team translated a complex treatment need into a practical system that works every day.",
    name: "Project Director",
    location: "Nakuru",
  },
];

export const partners = [
  { name: "Hidroteck", logo: "/assets/partners/hidroteck.jpeg" },
  { name: "Atlas", logo: "/assets/partners/atlas.jpeg" },
  { name: "ImproChem", logo: "/assets/partners/improchem.jpeg" },
  { name: "Auxin", logo: "/assets/partners/auxin.jpeg" },
  { name: "Keesen", logo: "/assets/partners/keesen.jpeg" },
  { name: "CNP", logo: "/assets/partners/cnp.jpeg" },
  { name: "Suez", logo: "/assets/partners/suez.jpeg" },
  { name: "Pedrollo", logo: "/assets/partners/prdrollo.jpeg" },
  { name: "Pentair", logo: "/assets/partners/pentair.jpeg" },
  { name: "Jacobi", logo: "/assets/partners/jacobi.jpeg" },
  { name: "Vontron", logo: "/assets/partners/vontron.jpeg" },
  { name: "HTH", logo: "/assets/partners/hth.jpeg" },
  { name: "Grundfos", logo: "/assets/partners/grandfos.jpeg" },
  { name: "Leo Pump", logo: "/assets/partners/leopump.jpeg" },
  { name: "RZBC", logo: "/assets/partners/rzbc.jpeg" },
  { name: "Certikin", logo: "/assets/partners/certikin.jpeg" },
  { name: "Purolite", logo: "/assets/partners/purolite.jpeg" },
  { name: "Xylem", logo: "/assets/partners/xylem.jpeg" },
  { name: "SEKO", logo: "/assets/partners/seko.jpeg" },
  { name: "DuPont", logo: "/assets/partners/dupon.jpeg" },
  { name: "Danfoss", logo: "/assets/partners/danfos.jpeg" },
  { name: "Hydramen", logo: "/assets/partners/hydramen.jpeg" },
  { name: "HydromChem", logo: "/assets/partners/hydromchem.jpeg" },
  { name: "Genesys", logo: "/assets/partners/genesys.jpeg" },
  { name: "Lowara", logo: "/assets/partners/lowara.jpeg" },
];
