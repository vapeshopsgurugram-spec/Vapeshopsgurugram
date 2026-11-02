export interface DelhiArea {
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

export const DELHI_AREAS: DelhiArea[] = [
  {
    slug: "south-delhi",
    name: "South Delhi (Saket, Hauz Khas & GK)",
    shortName: "South Delhi",
    zoneTag: "South Delhi District",
    deliveryTime: "40-50 mins",
    deliveryStatus: "Rapid NCR Courier Dispatch",
    postalCode: "110017",
    landmarks: [
      "Select Citywalk Saket",
      "Hauz Khas Village",
      "Greater Kailash M-Block",
      "Green Park",
      "Malviya Nagar",
      "Defence Colony",
    ],
    description: "Get 100% original disposable vapes, refillable pod systems, and premium nicotine salts delivered right to your doorstep across South Delhi in 40-50 minutes. Enjoy tamper-evident discreet packaging with Cash on Delivery (COD) and instant UPI payments.",
    popularSearches: [
      "Vape delivery South Delhi",
      "Vape shop South Delhi near me",
      "Buy disposable vape South Delhi",
      "Late night vape delivery Saket",
      "Vape store Hauz Khas Delhi",
      "Cash on Delivery vape South Delhi",
    ],
    faqs: [
      {
        q: "How fast is vape delivery in South Delhi?",
        a: "We provide 40 to 50-minute express courier delivery across South Delhi, including Saket, Hauz Khas, Greater Kailash, Green Park, and Defence Colony.",
      },
      {
        q: "Is Cash on Delivery (COD) available for South Delhi orders?",
        a: "Yes! We offer convenient Cash on Delivery (COD) and doorstep UPI (GPay, PhonePe, Paytm). You can verify the manufacturer's QR scratch code before payment.",
      },
      {
        q: "Are the vape devices delivered in South Delhi 100% genuine?",
        a: "Every single device is 100% factory-sealed with an official manufacturer anti-counterfeit QR code for online authentication.",
      },
      {
        q: "Can I get late evening vape delivery in South Delhi?",
        a: "Yes, our delivery network operates every day until late evening. Contact our dispatch team directly on WhatsApp for live order tracking.",
      },
    ],
  },
  {
    slug: "connaught-place",
    name: "Connaught Place (CP) & Central Delhi",
    shortName: "Connaught Place",
    zoneTag: "Central Delhi District",
    deliveryTime: "45-60 mins",
    deliveryStatus: "Express Central Delhi Dispatch",
    postalCode: "110001",
    landmarks: [
      "Inner & Outer Circle CP",
      "Barakhamba Road",
      "Janpath",
      "Khan Market",
      "Bengali Market",
      "Kasturba Gandhi Marg",
    ],
    description: "Working or socializing in Connaught Place or Central Delhi? Receive authentic high-puff disposable vapes and pods delivered to your commercial office, hotel, or residence within 45-60 minutes with discreet packaging and COD.",
    popularSearches: [
      "Vape delivery Connaught Place",
      "Vape store CP Central Delhi",
      "Vape shop near Khan Market",
      "Buy vape online Central Delhi",
      "Express vape delivery Barakhamba Road",
    ],
    faqs: [
      {
        q: "How quickly can I get a vape delivered to Connaught Place?",
        a: "Orders for Connaught Place, Janpath, and Central Delhi corporate offices are delivered within 45 to 60 minutes via dedicated courier.",
      },
      {
        q: "Do you deliver to offices and hotels in Central Delhi?",
        a: "Yes, our delivery riders deliver discreetly directly to your office lobby, security gate, or hotel reception.",
      },
    ],
  },
  {
    slug: "dwarka",
    name: "Dwarka & West Delhi",
    shortName: "Dwarka",
    zoneTag: "South West Delhi",
    deliveryTime: "30-40 mins",
    deliveryStatus: "Fast Direct Expressway Dispatch",
    postalCode: "110075",
    landmarks: [
      "Dwarka Sector 6 Market",
      "Sector 10 & 12 Market",
      "Vegas Mall Sector 14",
      "Sector 21 Metro Hub",
      "Janakpuri District Centre",
    ],
    description: "Located close to our express dispatch corridor, Dwarka sectors enjoy lightning-fast 30-40 minute vape delivery. Order original Elfbar, Nasty, Lost Mary, and Caliburn devices with Cash on Delivery and authentic scratch codes.",
    popularSearches: [
      "Vape delivery Dwarka Delhi",
      "Vape shop near me Dwarka Sector 10",
      "Vape store Vegas Mall Dwarka",
      "Cash on Delivery vape Dwarka",
      "Late night vape delivery West Delhi",
    ],
    faqs: [
      {
        q: "What is the delivery time for Dwarka sectors?",
        a: "Deliveries across all Dwarka sectors (Sector 1 to 23) and Janakpuri are fulfilled within 30 to 40 minutes via the express link.",
      },
      {
        q: "Can I pay via UPI on delivery in Dwarka?",
        a: "Yes, both Cash on Delivery and instant UPI (Google Pay, PhonePe, Paytm) are accepted at your doorstep.",
      },
    ],
  },
  {
    slug: "vasant-kunj",
    name: "Vasant Kunj, Aerocity & Mahipalpur",
    shortName: "Vasant Kunj",
    zoneTag: "South West Delhi / Aerocity",
    deliveryTime: "25-35 mins",
    deliveryStatus: "Priority Border Dispatch",
    postalCode: "110070",
    landmarks: [
      "DLF Promenade",
      "DLF Emporio",
      "Ambience Mall Vasant Kunj",
      "Aerocity Worldmark",
      "Vasant Kunj Sector A, B, C & D",
    ],
    description: "Immediate 25-35 minute vape delivery to Vasant Kunj luxury residences, Ambience Mall, and Aerocity Worldmark hotels. 100% factory-sealed devices with scratch authentication and COD.",
    popularSearches: [
      "Vape delivery Vasant Kunj",
      "Vape store Aerocity Delhi",
      "Vape shop DLF Promenade",
      "Vape delivery Ambience Mall Vasant Kunj",
      "Worldmark Aerocity vape store",
    ],
    faqs: [
      {
        q: "How fast is delivery to Aerocity and Vasant Kunj?",
        a: "Due to our close proximity, deliveries to Vasant Kunj sectors and Aerocity hospitality hotels take only 25 to 35 minutes.",
      },
      {
        q: "Do you deliver to hotels in Aerocity Delhi?",
        a: "Yes, we regularly deliver discreet, plain-boxed orders to all major hotels in Aerocity (JW Marriott, Pullman, Roseate House, Aloft).",
      },
    ],
  },
  {
    slug: "hauz-khas",
    name: "Hauz Khas, Green Park & SDA",
    shortName: "Hauz Khas",
    zoneTag: "South Delhi Heritage Hub",
    deliveryTime: "40-50 mins",
    deliveryStatus: "Rapid Courier Dispatch",
    postalCode: "110016",
    landmarks: [
      "Hauz Khas Village (HKV)",
      "Green Park Main Market",
      "SDA Market",
      "IIT Delhi Campus",
      "Asiad Village",
    ],
    description: "Get original disposable vapes and pod kits delivered to Hauz Khas Village, Green Park, and SDA Market in 40-50 minutes. Verifiable QR codes and Cash on Delivery available.",
    popularSearches: [
      "Vape delivery Hauz Khas Village",
      "Vape shop Green Park Delhi",
      "Vape store SDA Market",
      "Late night vape delivery HKV",
    ],
    faqs: [
      {
        q: "Can I get late night vape delivery in Hauz Khas Village?",
        a: "Yes, our courier team delivers across Hauz Khas and Green Park until 11:30 PM. Order directly on WhatsApp for fastest dispatch.",
      },
    ],
  },
  {
    slug: "saket",
    name: "Saket, Malviya Nagar & Sainik Farm",
    shortName: "Saket",
    zoneTag: "South Delhi Retail Hub",
    deliveryTime: "40-50 mins",
    deliveryStatus: "Express Courier Service",
    postalCode: "110017",
    landmarks: [
      "Select Citywalk Mall",
      "DLF Avenue Saket",
      "Saket Community Centre",
      "Malviya Nagar Market",
      "Sainik Farm",
    ],
    description: "Enjoy prompt 40-50 minute vape delivery in Saket, Select Citywalk, DLF Avenue, and Malviya Nagar. Premium disposable vapes from Geek Bar, Elfbar, Nasty, and Uwell with COD.",
    popularSearches: [
      "Vape delivery Saket Delhi",
      "Vape store Select Citywalk",
      "Vape shop Malviya Nagar",
      "Buy vape online Saket COD",
    ],
    faqs: [
      {
        q: "Do you deliver to Select Citywalk and DLF Avenue?",
        a: "Yes, our riders deliver directly outside the mall gates or to nearby residential sectors within 40 to 50 minutes.",
      },
    ],
  },
  {
    slug: "greater-kailash",
    name: "Greater Kailash (GK 1, GK 2 & CR Park)",
    shortName: "Greater Kailash",
    zoneTag: "South Delhi Luxury Residential",
    deliveryTime: "45-55 mins",
    deliveryStatus: "Express Doorstep Delivery",
    postalCode: "110048",
    landmarks: [
      "M-Block Market GK 1",
      "M-Block Market GK 2",
      "N-Block Market",
      "Chittaranjan Park (CR Park)",
      "Pamposh Enclave",
    ],
    description: "Serving the upscale neighborhoods of Greater Kailash 1 & 2 and CR Park with authentic vape delivery in 45-55 minutes. 100% factory original with Cash on Delivery and contactless UPI.",
    popularSearches: [
      "Vape delivery Greater Kailash GK 1",
      "Vape store GK 2 M Block Market",
      "Vape shop CR Park Delhi",
      "Premium vape delivery Greater Kailash",
    ],
    faqs: [
      {
        q: "What is the delivery time to Greater Kailash?",
        a: "Orders to GK 1, GK 2, and CR Park are delivered within 45 to 55 minutes in discreet, tamper-proof packaging.",
      },
    ],
  },
  {
    slug: "rohini-pitampura",
    name: "Rohini, Pitampura & North West Delhi",
    shortName: "Rohini-Pitampura",
    zoneTag: "North West Delhi District",
    deliveryTime: "Same-Day (2-3 hrs)",
    deliveryStatus: "Same-Day Express Dispatch",
    postalCode: "110085",
    landmarks: [
      "Pitampura Netaji Subhash Place (NSP)",
      "Rohini Sector 7, 8, 9 & 14",
      "Unity One Mall Rohini",
      "Pacific Mall NSP",
      "Kohat Enclave",
    ],
    description: "Reliable same-day courier dispatch across Rohini, Pitampura, and Netaji Subhash Place (NSP). Original vapes with scratch authentication code and Cash on Delivery.",
    popularSearches: [
      "Vape delivery Rohini Delhi",
      "Vape store Pitampura NSP",
      "Vape shop Netaji Subhash Place",
      "Buy vape online Rohini COD",
    ],
    faqs: [
      {
        q: "How does same-day delivery work in Rohini & Pitampura?",
        a: "Orders placed before 5 PM are dispatched via express direct courier and delivered within 2 to 3 hours anywhere in Rohini and Pitampura.",
      },
    ],
  },
];

export function getDelhiAreaBySlug(slug: string): DelhiArea | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return DELHI_AREAS.find((a) => a.slug === normalized);
}

