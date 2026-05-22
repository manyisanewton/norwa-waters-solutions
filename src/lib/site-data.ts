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
    title: "Water Treatment Plant Design",
    description:
      "Complete treatment systems planned for reliable output, efficiency, and future expansion.",
  },
  {
    title: "Reverse Osmosis Systems",
    description:
      "High-performance RO units for boreholes, industrial facilities, hotels, and institutions.",
  },
  {
    title: "Wastewater Treatment",
    description:
      "Practical wastewater solutions for reuse, safe discharge, and long-term compliance.",
  },
  {
    title: "Filtration & Softening",
    description:
      "Media filtration, iron removal, softening, and polishing systems for clean water quality.",
  },
  {
    title: "Borehole Water Treatment",
    description:
      "Treatment packages that remove minerals, odour, colour, and biological risks from borehole water.",
  },
  {
    title: "Plant Operation & Maintenance",
    description:
      "Scheduled servicing, performance checks, repairs, and operator support for stable operations.",
  },
  {
    title: "Industrial Water Solutions",
    description:
      "Custom treatment systems for manufacturing, processing, utilities, and high-demand sites.",
  },
  {
    title: "Sustainable Water Projects",
    description:
      "Water access, reuse, and conservation projects built around measurable community impact.",
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
