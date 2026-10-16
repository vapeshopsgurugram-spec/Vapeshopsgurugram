export interface GurgaonArea {
  slug: string;
  name: string;
  shortName: string;
  sectorTag: string;
  deliveryTime: string;
  deliveryStatus: string;
  landmarks: string[];
  postalCode: string;
  description: string;
  popularSearches: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const GURGAON_AREAS: GurgaonArea[] = [
  {
    slug: "dlf-cyber-city",
    name: "DLF Cyber City & Cyber Hub",
    shortName: "Cyber City",
    sectorTag: "DLF Phase 2 / Cyber City",
    deliveryTime: "15-25 mins",
    deliveryStatus: "Superfast Instant Dispatch",
    postalCode: "122002",
    landmarks: ["DLF Cyber Hub", "Building 10", "Building 8", "Infinity Towers", "Cyber Green", "Belvedere Towers"],
    description: "Working or staying around DLF Cyber City? Get authentic disposable vapes, refillable pod kits, and imported nic salts delivered to your corporate office tower or residence in 15-25 minutes. Tamper-evident packaging with Cash on Delivery (COD) and UPI available.",
    popularSearches: [
      "Vape delivery DLF Cyber City",
      "Vape shop Cyber Hub Gurgaon",
      "Vape store Building 10 Cyber City",
      "Late night vape delivery Cyber Hub",
      "Disposable vape DLF Cyber City",
    ],
    faqs: [
      {
        q: "How fast is vape delivery in DLF Cyber City & Cyber Hub?",
        a: "Our local dispatch hub is located adjacent to DLF Phase 2, enabling our courier riders to deliver directly to your office reception, security gate, or residence in DLF Cyber City within 15 to 25 minutes.",
      },
      {
        q: "Can I pay via Cash on Delivery (COD) in DLF Cyber City?",
        a: "Yes! We accept Cash on Delivery (COD) as well as contactless doorstep UPI (Google Pay, PhonePe, Paytm). You inspect the factory-sealed scratch code before paying.",
      },
      {
        q: "Are the vape devices delivered in DLF Cyber City 100% authentic?",
        a: "Every device we deliver is 100% original, sealed from the factory with verifiable holographic scratch-off security QR codes for instant online verification.",
      },
      {
        q: "Can you deliver late night to DLF Cyber City offices?",
        a: "Yes, our delivery network operates through late evenings until 11:30 PM everyday. WhatsApp us directly for urgent dispatches.",
      },
    ],
  },
  {
    slug: "golf-course-road",
    name: "Golf Course Road & DLF Phase 5",
    shortName: "Golf Course Rd",
    sectorTag: "Sector 42, 43 & 53",
    deliveryTime: "20-30 mins",
    deliveryStatus: "Instant Courier Dispatch",
    postalCode: "122002",
    landmarks: ["One Horizon Center", "Two Horizon", "DLF The Aralias", "The Magnolias", "The Camellias", "Central Park 1"],
    description: "Experience premium, discreet vape delivery across Golf Course Road and DLF Phase 5. From ultra-luxury condominiums like The Camellias and Aralias to commercial towers like One Horizon Center, enjoy 20-30 minute delivery of original vapes with scratch code verification.",
    popularSearches: [
      "Vape delivery Golf Course Road Gurgaon",
      "Vape store One Horizon Center",
      "Vape shop DLF Phase 5",
      "Aralias Camellias vape delivery",
      "Premium vape store Golf Course Road",
    ],
    faqs: [
      {
        q: "How fast is delivery to condominiums along Golf Course Road?",
        a: "Orders to The Aralias, Magnolias, Camellias, Central Park, and Horizon Center are delivered within 20 to 30 minutes with discreet, tamper-proof packaging.",
      },
      {
        q: "Which premium vape brands do you deliver to Golf Course Road?",
        a: "We stock top international brands including Geek Bar Burj 80K, Lost Mary Nera 70K, Yuoto Digi 15K, Elf Bar BC5000 US Edition, and Uwell Caliburn pod systems.",
      },
      {
        q: "Is Cash on Delivery available on Golf Course Road?",
        a: "Yes, we offer both Cash on Delivery (COD) and doorstep UPI payments for all deliveries along Golf Course Road and DLF Phase 5.",
      },
    ],
  },
  {
    slug: "galleria-market-dlf-phase-4",
    name: "Galleria Market & DLF Phase 4",
    shortName: "Galleria Market",
    sectorTag: "DLF Phase 4 / Sector 28",
    deliveryTime: "15-20 mins",
    deliveryStatus: "Local Hub Priority Dispatch",
    postalCode: "122002",
    landmarks: ["Galleria Market", "Supermart 1", "Supermart 2", "Ridgewood Estate", "Hamilton Court", "Windsor Court"],
    description: "Located right next to Galleria Market in DLF Phase 4! Get instant 15-20 minute doorstep delivery across all Phase 4 societies including Ridgewood, Hamilton Court, and Regency Park. 100% genuine vapes with factory scratch seals.",
    popularSearches: [
      "Vape store Galleria Market Gurgaon",
      "Vape shop DLF Phase 4",
      "Vape delivery Supermart 1 Gurgaon",
      "Ridgewood Estate vape delivery",
      "Vape store near Galleria DLF",
    ],
    faqs: [
      {
        q: "Where is your vape store located in DLF Phase 4?",
        a: "Our primary fulfillment hub is situated right in Galleria Market, DLF Phase 4. We dispatch orders immediately to surrounding residences within 15 to 20 minutes.",
      },
      {
        q: "Can I get my order delivered in 15 minutes in DLF Phase 4?",
        a: "Yes! Because of our proximity to Galleria Market and Supermart, DLF Phase 4 orders enjoy our fastest 15-minute express courier service.",
      },
      {
        q: "What payment options are accepted?",
        a: "We accept Cash on Delivery (COD), UPI (GPay, PhonePe, Paytm), and card payments upon delivery.",
      },
    ],
  },
  {
    slug: "dlf-phase-1",
    name: "DLF Phase 1 & Golf Course Extension",
    shortName: "DLF Phase 1",
    sectorTag: "DLF Phase 1 / Sector 26A",
    deliveryTime: "20-25 mins",
    deliveryStatus: "Instant Courier Dispatch",
    postalCode: "122002",
    landmarks: ["Silver Oaks", "Qutub Plaza", "Mega Mall", "Arjun Marg", "Sikanderpur Metro", "DLF Golf Club"],
    description: "Instant express vape delivery across DLF Phase 1, Arjun Marg, Qutub Plaza, and Mega Mall area. Choose from high-puff disposable vapes, refillable pod kits, and premium imported nicotine salts delivered in 20-25 minutes.",
    popularSearches: [
      "Vape delivery DLF Phase 1 Gurgaon",
      "Vape store Qutub Plaza",
      "Vape shop Silver Oaks DLF 1",
      "Mega Mall Gurgaon vape store",
    ],
    faqs: [
      {
        q: "How fast is delivery to DLF Phase 1 residences?",
        a: "Our riders deliver to all blocks of DLF Phase 1, Silver Oaks, and Arjun Marg within 20 to 25 minutes.",
      },
      {
        q: "Do you deliver authentic sealed vapes in DLF Phase 1?",
        a: "Yes, 100% of our products are brand new, sealed, and include verifiable security QR scratch codes.",
      },
    ],
  },
  {
    slug: "dlf-phase-2",
    name: "DLF Phase 2 & MG Road",
    shortName: "DLF Phase 2",
    sectorTag: "DLF Phase 2 / Sector 25",
    deliveryTime: "20-25 mins",
    deliveryStatus: "Instant Courier Dispatch",
    postalCode: "122008",
    landmarks: ["Sikanderpur", "Heritage City", "Oakwood Estate", "Beverly Park", "MGF Metropolitan Mall"],
    description: "Reliable 20-25 minute vape delivery throughout DLF Phase 2, Heritage City, Oakwood Estate, and surrounding MG Road areas. 100% authentic disposable vapes and pods with Cash on Delivery.",
    popularSearches: [
      "Vape store DLF Phase 2 Gurgaon",
      "Vape delivery Sikanderpur",
      "Vape shop Heritage City Gurgaon",
      "MG Road vape delivery",
    ],
    faqs: [
      {
        q: "How quickly can I get vape delivery in DLF Phase 2?",
        a: "Orders to DLF Phase 2 are typically delivered within 20 to 25 minutes from our Galleria hub.",
      },
    ],
  },
  {
    slug: "dlf-phase-3",
    name: "DLF Phase 3 & Ambience Island",
    shortName: "DLF Phase 3",
    sectorTag: "DLF Phase 3 / Sector 24",
    deliveryTime: "20-30 mins",
    deliveryStatus: "Instant Courier Dispatch",
    postalCode: "122010",
    landmarks: ["Ambience Mall", "Ambience Island", "Moulsari Avenue", "DLF Corporate Park", "U-Block DLF 3"],
    description: "Rapid doorstep vape courier across DLF Phase 3, Moulsari Avenue, U-Block, and Ambience Island condominiums. Enjoy high-capacity disposables and pods with 20-30 min express delivery.",
    popularSearches: [
      "Vape delivery DLF Phase 3",
      "Vape store Ambience Mall Gurgaon",
      "Vape shop Moulsari Avenue",
      "U-Block DLF Phase 3 vape delivery",
    ],
    faqs: [
      {
        q: "Do you deliver to Ambience Lagoon & Ambience Island?",
        a: "Yes, we deliver directly to the gate/lobby of Ambience Island societies within 25 to 30 minutes.",
      },
    ],
  },
  {
    slug: "sector-29",
    name: "Sector 29 & Leisure Valley",
    shortName: "Sector 29",
    sectorTag: "Sector 29 / City Center",
    deliveryTime: "20-25 mins",
    deliveryStatus: "Express Delivery",
    postalCode: "122001",
    landmarks: ["Sector 29 Market", "Leisure Valley Park", "Kingdom of Dreams", "HUDA City Centre", "Iffco Chowk"],
    description: "Partying or dining around Sector 29 Gurgaon? Get rapid 20-25 minute express vape delivery straight to your location or residence. COD and UPI accepted.",
    popularSearches: [
      "Vape store Sector 29 Gurgaon",
      "Vape shop near Sector 29 market",
      "Late night vape delivery Sector 29",
      "HUDA City Centre vape store",
    ],
    faqs: [
      {
        q: "Can I get late night vape delivery in Sector 29 Gurgaon?",
        a: "Yes, we deliver through late evening until 11:30 PM across Sector 29 and nearby commercial hubs.",
      },
    ],
  },
  {
    slug: "sohna-road",
    name: "Sohna Road & Subhash Chowk",
    shortName: "Sohna Road",
    sectorTag: "Sector 47, 48 & 49",
    deliveryTime: "25-35 mins",
    deliveryStatus: "Express Delivery",
    postalCode: "122018",
    landmarks: ["Vatika City", "Vipul Greens", "Orchid Petals", "Spaze I-Tech Park", "JMD Megapolis", "Subhash Chowk"],
    description: "Fast 25-35 minute vape delivery across Sohna Road, Subhash Chowk, and Sectors 47, 48, 49. Serving high-rise residential complexes like Vatika City, Orchid Petals, and commercial IT parks.",
    popularSearches: [
      "Vape store Sohna Road Gurgaon",
      "Vape delivery Vatika City",
      "Vape shop Subhash Chowk",
      "Orchid Petals Gurgaon vape delivery",
      "Spaze I-Tech Park vape delivery",
    ],
    faqs: [
      {
        q: "How fast is delivery along Sohna Road?",
        a: "Deliveries to Vatika City, Vipul Greens, and Spaze IT Park are completed within 25 to 35 minutes.",
      },
    ],
  },
  {
    slug: "golf-course-ext-road",
    name: "Golf Course Extension Road & Sector 56-65",
    shortName: "Golf Course Ext",
    sectorTag: "Sector 56, 57, 62, 65 & 66",
    deliveryTime: "25-35 mins",
    deliveryStatus: "Express Delivery",
    postalCode: "122011",
    landmarks: ["M3M Golfestate", "M3M Urbana", "Emaar Palm Drive", "Sector 56 Huda Market", "WorldMark Gurgaon", "Pioneer Urban"],
    description: "Serving Golf Course Extension Road, M3M Golfestate, Emaar Palm Drive, and Sectors 56, 57, 62, 65, and 66. Authentic vapes, pods, and coils delivered in 25-35 minutes with Cash on Delivery.",
    popularSearches: [
      "Vape delivery Golf Course Extension Road",
      "Vape store M3M Golfestate",
      "Vape shop Sector 56 Gurgaon",
      "WorldMark Gurgaon vape delivery",
      "Vape store Sector 65 Gurgaon",
    ],
    faqs: [
      {
        q: "Do you deliver to M3M Golfestate and WorldMark Gurgaon?",
        a: "Yes, our courier riders deliver directly to M3M Golfestate, Urbana, and Palm Drive in 25 to 35 minutes.",
      },
    ],
  },
  {
    slug: "sushant-lok-1",
    name: "Sushant Lok 1 & Sector 43",
    shortName: "Sushant Lok 1",
    sectorTag: "Sector 27, 28 & 43",
    deliveryTime: "20-25 mins",
    deliveryStatus: "Instant Courier Dispatch",
    postalCode: "122009",
    landmarks: ["Vyapar Kendra", "Gold Souk Mall", "Fortis Hospital", "Max Healthcare", "Laburnum Condominiums"],
    description: "Get 20-25 minute express vape delivery across Sushant Lok 1, Vyapar Kendra, and Sector 43. 100% genuine vapes with scratch code verification and doorstep cash on delivery.",
    popularSearches: [
      "Vape delivery Sushant Lok 1",
      "Vape store Vyapar Kendra Gurgaon",
      "Vape shop Sector 43 Gurgaon",
      "Sushant Lok vape delivery COD",
    ],
    faqs: [
      {
        q: "How fast is delivery to Sushant Lok 1?",
        a: "Deliveries to Sushant Lok 1 and Vyapar Kendra arrive within 20 to 25 minutes.",
      },
    ],
  },
  {
    slug: "nirvana-country",
    name: "Nirvana Country & Sector 50",
    shortName: "Nirvana Country",
    sectorTag: "Sector 50",
    deliveryTime: "25-35 mins",
    deliveryStatus: "Express Delivery",
    postalCode: "122018",
    landmarks: ["Nirvana Country Courtyard", "Fresco", "Unitech South City 2", "Eros City Square", "Baani Square"],
    description: "Serving Nirvana Country, Fresco, Sector 50, and South City 2 with 25-35 minute express vape courier. Authentic disposable vapes and refillable pod systems with COD.",
    popularSearches: [
      "Vape delivery Nirvana Country Gurgaon",
      "Vape store Sector 50 Gurgaon",
      "Vape shop Baani Square",
      "South City 2 vape delivery",
    ],
    faqs: [
      {
        q: "Do you deliver to villas and apartments in Nirvana Country?",
        a: "Yes, our delivery riders deliver directly to all Nirvana Country gates and societies within 25 to 35 minutes.",
      },
    ],
  },
  {
    slug: "palam-vihar",
    name: "Palam Vihar & Sector 21-23",
    shortName: "Palam Vihar",
    sectorTag: "Sector 1, 2, 21, 22 & 23",
    deliveryTime: "30-40 mins",
    deliveryStatus: "Express Courier Dispatch",
    postalCode: "122017",
    landmarks: ["Palam Vihar Vyapar Kendra", "Columbia Asia Hospital", "Sector 23 Market", "Sector 22 Market", "Ansal Plaza"],
    description: "Express 30-40 minute vape delivery across Palam Vihar, Sector 21, 22, and 23 Gurgaon. 100% factory original devices with verifiable scratch codes and Cash on Delivery.",
    popularSearches: [
      "Vape store Palam Vihar Gurgaon",
      "Vape delivery Sector 21 Gurgaon",
      "Vape shop Sector 22 Gurgaon",
      "Vape delivery Sector 23 Gurgaon",
    ],
    faqs: [
      {
        q: "What is the delivery time to Palam Vihar?",
        a: "Orders to Palam Vihar and Sectors 21-23 are delivered within 30 to 40 minutes via dedicated courier.",
      },
    ],
  },
  {
    slug: "new-gurgaon-sector-82-84",
    name: "New Gurgaon & Sectors 82-86",
    shortName: "New Gurgaon",
    sectorTag: "Sector 82, 83, 84, 85 & 86",
    deliveryTime: "35-45 mins",
    deliveryStatus: "Express Delivery",
    postalCode: "122004",
    landmarks: ["Vatika INXT", "Sapphire 83", "Miracles Apollo Cradle", "Emaar Palm Gardens", "DLF Ultima Sector 81"],
    description: "Rapid 35-45 minute vape delivery to New Gurgaon, Vatika India Next, Sapphire 83, and DLF Ultima. Order 100% genuine vapes with Cash on Delivery and UPI.",
    popularSearches: [
      "Vape delivery New Gurgaon",
      "Vape store Vatika INXT Sector 82",
      "Vape shop Sapphire 83",
      "DLF Ultima vape delivery",
      "Vape store Sector 84 Gurgaon",
    ],
    faqs: [
      {
        q: "How fast is delivery to New Gurgaon (Sectors 82-86)?",
        a: "Deliveries to Vatika INXT, Sapphire 83, and surrounding societies take approximately 35 to 45 minutes.",
      },
    ],
  },
];

export function getGurgaonAreaBySlug(slug: string): GurgaonArea | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return GURGAON_AREAS.find((a) => a.slug === normalized);
}
