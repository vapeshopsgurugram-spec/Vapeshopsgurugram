export interface NoidaArea {
  slug: string;
  name: string;
  shortName: string;
  zoneTag: string;
  deliveryTime: string;
  deliveryStatus: string;
  landmarks: string[];
  postalCode: string;
  description: string;
  popularSearches: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const NOIDA_AREAS: NoidaArea[] = [
  {
    slug: "sector-18-atta-market",
    name: "Noida Sector 18 & Atta Market",
    shortName: "Sector 18 Noida",
    zoneTag: "Central Commercial Hub",
    deliveryTime: "Same-Day Express (45-75 mins)",
    deliveryStatus: "Direct NCR Express Dispatch",
    postalCode: "201301",
    landmarks: [
      "DLF Mall of India",
      "The Great India Place (GIP)",
      "Wave Silver Tower",
      "Atta Market Sector 18",
      "Sector 18 Metro Station",
    ],
    description: "Looking for an authentic vape store in Noida Sector 18? Get original disposable vapes, refillable pod kits, and premium nicotine salts delivered to your office or home in 45-75 minutes. Discreet plain packaging with Cash on Delivery (COD) and UPI available.",
    popularSearches: [
      "Vape delivery Noida Sector 18",
      "Vape store DLF Mall of India Noida",
      "Vape shop Atta Market Sector 18",
      "Buy disposable vape Noida Sector 18",
      "Cash on Delivery vape Noida",
      "Late night vape delivery Noida",
    ],
    faqs: [
      {
        q: "How fast is vape delivery in Noida Sector 18?",
        a: "We offer 45 to 75-minute express direct delivery across Noida Sector 18, DLF Mall of India, GIP, and surrounding sectors.",
      },
      {
        q: "Is Cash on Delivery available in Noida Sector 18?",
        a: "Yes! We offer hassle-free Cash on Delivery (COD) as well as contactless doorstep UPI (Google Pay, PhonePe, Paytm).",
      },
      {
        q: "Are the products delivered in Noida 100% genuine?",
        a: "Every vape device comes in factory-sealed packaging with a verifiable manufacturer anti-counterfeit QR scratch code.",
      },
    ],
  },
  {
    slug: "sector-62-electronic-city",
    name: "Noida Sector 62 & Electronic City",
    shortName: "Sector 62 Noida",
    zoneTag: "IT & Corporate Hub",
    deliveryTime: "Same-Day Express (60-90 mins)",
    deliveryStatus: "Tech Park Express Dispatch",
    postalCode: "201309",
    landmarks: [
      "Noida Electronic City Metro",
      "Logix Cyber Park",
      "Candor TechSpace Sector 62",
      "Stellar IT Park",
      "Fortis Hospital Sector 62",
    ],
    description: "Working in Noida Sector 62 IT hub? Enjoy express doorstep vape delivery to all tech parks, corporate offices, and residential societies. 100% genuine vape devices with verifiable scratch codes and Cash on Delivery.",
    popularSearches: [
      "Vape delivery Noida Sector 62",
      "Vape shop Logix Cyber Park Noida",
      "Vape store Candor TechSpace 62",
      "Buy vape online Electronic City Noida",
    ],
    faqs: [
      {
        q: "Do you deliver to corporate IT parks in Sector 62 Noida?",
        a: "Yes, our delivery riders deliver discreetly right to your corporate park lobby, reception, or main security gate within 60 to 90 minutes.",
      },
    ],
  },
  {
    slug: "noida-expressway",
    name: "Noida Expressway & Sectors 93, 128, 135, 137",
    shortName: "Noida Expressway",
    zoneTag: "Expressway Residential & Commercial Corridor",
    deliveryTime: "Same-Day Express (60-90 mins)",
    deliveryStatus: "Express Corridor Dispatch",
    postalCode: "201304",
    landmarks: [
      "Advant Navis Business Park",
      "Jaypee Greens Wish Town Sector 128",
      "Purvanchal Royal Park Sector 137",
      "Grand Omaxe Sector 93B",
      "Paras Tierea Sector 137",
    ],
    description: "Serving high-rise residential condominiums and business parks along Noida Greater Noida Expressway. Order authentic Elfbar, Geek Bar, Lost Mary, and Caliburn vapes with express same-day courier and COD.",
    popularSearches: [
      "Vape delivery Noida Expressway",
      "Vape store Advant Navis Sector 142",
      "Vape delivery Sector 137 Noida",
      "Jaypee Wish Town vape delivery",
      "Vape shop Sector 93 Noida",
    ],
    faqs: [
      {
        q: "How fast is delivery to condominiums on Noida Expressway?",
        a: "Orders to Sector 128, 135, 137, and 93 are delivered within 60 to 90 minutes with tamper-proof packaging.",
      },
    ],
  },
  {
    slug: "greater-noida-pari-chowk",
    name: "Greater Noida & Pari Chowk",
    shortName: "Greater Noida",
    zoneTag: "Greater Noida Institutional & Residential",
    deliveryTime: "Same-Day (2-3 hrs)",
    deliveryStatus: "Direct Highway Dispatch",
    postalCode: "201310",
    landmarks: [
      "Pari Chowk",
      "Knowledge Park 1, 2 & 3",
      "Alpha 1 & Beta 1 Commercial Belt",
      "Venice Grand Mall",
      "Gaur City Greater Noida West",
    ],
    description: "Prompt same-day vape delivery across Greater Noida, Pari Chowk, Knowledge Park, and Gaur City. 100% factory-sealed original devices with scannable QR verification and Cash on Delivery.",
    popularSearches: [
      "Vape delivery Greater Noida",
      "Vape shop Pari Chowk",
      "Vape store Knowledge Park Greater Noida",
      "Buy vape online Gaur City",
    ],
    faqs: [
      {
        q: "How does same-day delivery work in Greater Noida?",
        a: "Orders placed before 5 PM are dispatched via dedicated express courier and delivered within 2 to 3 hours directly to your doorstep.",
      },
    ],
  },
  {
    slug: "sector-50-76-central-noida",
    name: "Central Noida (Sectors 50, 75, 76 & 78)",
    shortName: "Central Noida",
    zoneTag: "Central Residential Belt",
    deliveryTime: "Same-Day Express (60-80 mins)",
    deliveryStatus: "Rapid Residential Courier",
    postalCode: "201307",
    landmarks: [
      "Spectrum Metro Mall Sector 75",
      "Sector 50 Central Market",
      "Amrapali Silicon City Sector 76",
      "Mahagun Moderne Sector 78",
      "Sector 76 Metro Station",
    ],
    description: "Fast doorstep vape delivery across high-density residential societies of Central Noida (Sectors 50, 75, 76, 78). Original vape products with factory scratch seals and COD payment.",
    popularSearches: [
      "Vape delivery Sector 75 Noida",
      "Vape store Spectrum Mall Sector 75",
      "Vape shop Sector 50 Noida",
      "Vape delivery Sector 76 Noida",
    ],
    faqs: [
      {
        q: "Can I get Cash on Delivery in Central Noida sectors?",
        a: "Yes! COD and doorstep UPI payments are available across all Central Noida residential sectors.",
      },
    ],
  },
  {
    slug: "indirapuram-vaishali",
    name: "Indirapuram & Vaishali (NCR Hub)",
    shortName: "Indirapuram",
    zoneTag: "East NCR Border Belt",
    deliveryTime: "Same-Day Express (60-90 mins)",
    deliveryStatus: "Express NCR Transit Dispatch",
    postalCode: "201014",
    landmarks: [
      "Shipra Mall Indirapuram",
      "Habitat Centre Indirapuram",
      "Vaishali Metro Station",
      "Mahagun Metro Mall Vaishali",
      "Ahinsa Khand 1 & 2",
    ],
    description: "Convenient same-day vape delivery in Indirapuram, Vaishali, and Vasundhara. Authentic devices from global brands with scratch QR authentication and Cash on Delivery.",
    popularSearches: [
      "Vape delivery Indirapuram",
      "Vape store Shipra Mall Indirapuram",
      "Vape shop Vaishali Ghaziabad",
      "Buy vape online Indirapuram COD",
    ],
    faqs: [
      {
        q: "What is the delivery time to Indirapuram & Vaishali?",
        a: "Orders are dispatched via express direct courier and typically reach your gate in 60 to 90 minutes.",
      },
    ],
  },
];

export function getNoidaAreaBySlug(slug: string): NoidaArea | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return NOIDA_AREAS.find((a) => a.slug === normalized);
}

