import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Vape Shop in Gurgaon, Delhi & Noida | 30-60 Min Delivery | Vapeshopsgurugram",
  description:
    "Buy 100% authentic disposable vapes, pod kits, coils & imported nic salts in Gurgaon, Delhi & Noida NCR. Superfast 30-60 min express delivery in Gurugram, same-day delivery in Delhi & Noida. Cash on Delivery (COD) & UPI available. WhatsApp: +91 89509 53934.",
  keywords: [
    // Gurugram / Gurgaon Core & Micro-Localities
    "vape shop in gurgaon",
    "vape shop gurugram",
    "vape delivery gurgaon",
    "vape shop near me gurgaon",
    "vape store gurugram",
    "disposable vapes gurgaon",
    "vape shop dlf cyber city",
    "vape shop galleria market dlf",
    "vape delivery golf course road",
    "vape delivery golf course extension",
    "vape shop sohna road",
    "same day vape delivery gurgaon",
    "vape cash on delivery gurgaon",
    "vape cod gurugram",
    "vape delivery dlf phase 1",
    "vape delivery dlf phase 2",
    "vape delivery dlf phase 3",
    "vape delivery dlf phase 4",
    "vape delivery dlf phase 5",
    "vape shop sector 29 gurgaon",
    "vape delivery sector 54 56 gurgaon",
    "vape delivery sushant lok",
    "vape delivery nirvana country",
    "vape delivery south city gurgaon",
    "late night vape delivery gurgaon",

    // Delhi / New Delhi / South Delhi High-Intent Searches
    "vape shop in delhi",
    "vape delivery delhi",
    "vape shop near me delhi",
    "online vape store delhi",
    "south delhi vape delivery",
    "same day vape delivery delhi",
    "vape cash on delivery delhi",
    "vape cod delhi",
    "vape shop saket",
    "vape delivery hauz khas",
    "vape delivery greater kailash gk",
    "vape store vasant kunj",
    "vape delivery vasant vihar",
    "vape shop connaught place cp",
    "vape delivery defense colony",
    "vape shop dwarka sector 12",
    "vape shop rohini",
    "vape delivery pitampura",
    "vape shop green park",
    "late night vape delivery delhi",

    // Noida, Greater Noida & Ghaziabad
    "vape shop in noida",
    "vape delivery noida",
    "vape store sector 18 noida",
    "vape shop near me noida",
    "vape shop greater noida",
    "same day vape delivery noida",
    "vape cash on delivery noida",
    "vape cod noida",
    "vape shop sector 62 noida",
    "vape delivery noida expressway",
    "vape delivery indirapuram",
    "vape delivery faridabad",

    // Popular Brand & Model Specific Queries (High Volume)
    "yuoto thanos gurgaon",
    "yuoto thanos 5000 puffs price delhi",
    "yuoto vape price in delhi ncr",
    "elf bar gurgaon",
    "elf bar bc5000 delivery delhi",
    "lost mary gurgaon",
    "lost mary 15000 puffs buy online ncr",
    "iget vape gurgaon",
    "iget bar 3500 puffs delhi",
    "iget moon 5000 puffs gurgaon",
    "caliburn pods gurgaon",
    "uwell caliburn g3 pod kit price",
    "uwell caliburn a3s pods delhi",
    "nasty juice nic salt delivery",
    "skwezed salt e liquid delhi ncr",
    "al fakher crown bar 8000 puffs",
    "vozol vape delhi ncr",

    // Buying Intent & Service Terms
    "vape shop delhi ncr",
    "vape delivery delhi ncr",
    "best vape store gurgaon delhi noida",
    "buy vape online delhi ncr",
    "original vape shop ncr",
    "nicotine salts delhi ncr",
    "vape replacement pods gurgaon delhi noida",
    "vape delivery near me 24x7",
    "vape store open now near me",
    "buy vape online with cash on delivery",
    "authentic vape store delhi ncr",
  ],
  authors: [{ name: "Vapeshopsgurugram" }],
  creator: "Vapeshopsgurugram",
  publisher: "Vapeshopsgurugram",
  metadataBase: new URL("https://vapeshopsgurugram.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "IN-HR, IN-DL, IN-UP",
    "geo.placename": "Gurugram, New Delhi, South Delhi, Noida, Delhi NCR",
    "geo.position": "28.4682;77.0822",
    "ICBM": "28.4682, 77.0822",
  },
  openGraph: {
    title: "Vape Shop in Gurgaon, Delhi & Noida | 30-60 Min Delivery",
    description:
      "Order original disposable vapes, pod systems & nic salts across Gurugram, Delhi & Noida NCR. Instant delivery, Cash on Delivery (COD) & UPI.",
    url: "https://vapeshopsgurugram.com",
    siteName: "Vapeshopsgurugram",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Gurgaon, Delhi & Noida | Fast Delivery",
    description:
      "Buy 100% genuine vapes, pods & e-liquids in Gurgaon, Delhi & Noida with express doorstep delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VapeShop",
    "@id": "https://vapeshopsgurugram.com/#store",
    name: "Vapeshopsgurugram - Vape Shop in Gurgaon, Delhi & Noida",
    alternateName: [
      "VapeShop in Gurgaon",
      "Vape Delivery Delhi NCR",
      "Vape Shop Noida",
      "Vape Delivery Gurgaon",
      "Vape Store Delhi",
    ],
    url: "https://vapeshopsgurugram.com",
    logo: "https://vapeshopsgurugram.com/favicon.ico",
    description:
      "Gurugram, Delhi & Noida's premier online store for 100% authentic disposable vapes, refillable pod kits and imported e-liquids with 30-60 min express delivery and Cash on Delivery.",
    telephone: "+91 89509 53934",
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galleria Market, DLF Phase 4",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4682,
      longitude: 77.0822,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "23:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "South Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
    ],
  };

  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-700">
        {/* Global Structured Data JSON-LD for Google Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CartDrawer />
          <WhatsAppFloatingButton />
        </CartProvider>
      </body>
    </html>
  );
}
