import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Vape Shop Gurgaon | 30-60 Min Express Vape Delivery Gurugram",
    template: "%s | Vape Shop Gurgaon",
  },
  description:
    "Vape Shop Gurgaon - Buy authentic disposable vapes, Elf Bar, Geek Bar 80K, Lost Mary, Yuoto & pod kits. 100% genuine with scratch verification. 30-60 min express delivery in DLF Cyber City, Golf Course Rd .",
  keywords: [
    // Core High-Intent Keywords (Exact Matches)
    "Vape Shop Gurgaon",
    "Best Vape Shop Gurgaon",
    "Vape Shop in Gurgaon",
    "Vape Shop Near Me Gurgaon",
    "Vape Shop Gurugram",
    "Vape Store Gurgaon",
    "Vape Delivery Gurgaon 30 mins",
    "Buy Vape Online Gurgaon",
    "Vape Home Delivery Near Me COD",
    "Order Vape on WhatsApp Gurgaon",
    "Vape Shop Gurgaon Cash on Delivery",

    // Trending Devices & High-Puff Brands
    "Geek Bar Burj 80000 Gurgaon",
    "Geek Bar Pulse 15000 Gurgaon",
    "Elf Bar BC5000 Gurgaon",
    "Elfbar GH23000 Gurgaon",
    "Al Fakher Crown Bar Gurgaon",
    "Lost Mary Vape Gurgaon",
    "Yuoto Digi 15000 Gurgaon",
    "IGET Bar Gurgaon",
    "Disposable Vapes Gurgaon",
    "Pod Systems Gurgaon",
    "Nicotine Salts Gurgaon",
    "Uwell Caliburn Pods Gurgaon",

    // Prime Gurgaon Localities
    "Vape Shop DLF Cyber City",
    "Vape Delivery DLF Cyber City",
    "Vape Shop Golf Course Road",
    "Vape Delivery Golf Course Road",
    "Vape Delivery Golf Course Extension",
    "Vape Shop Galleria Market DLF Phase 4",
    "Vape Delivery Sohna Road",
    "Vape Delivery Nirvana Country",
    "Vape Shop Sector 29 Gurgaon",
    "Vape Shop Sector 54 56 Gurgaon",

    // Speed & Payment High Intent
    "Instant Vape Delivery Gurgaon",
    "Late Night Vape Delivery Gurgaon",
    "Cash on Delivery Vape Gurgaon",
    "Vape Delivery Delhi NCR Same Day",
    "Original Vape Scratch Code Gurgaon",
  ],
  authors: [{ name: "Vape Shop Gurgaon" }],
  creator: "Vape Shop Gurgaon",
  publisher: "Vape Shop Gurgaon",
  metadataBase: new URL("https://vapestoregurugram.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "IN-HR, IN-DL, IN-UP",
    "geo.placename": "Gurgaon, Gurugram, New Delhi, South D, Noelhiida, Delhi NCR",
    "geo.position": "28.4682;77.0822",
    "ICBM": "28.4682, 77.0822",
  },
  openGraph: {
    title: "Vape Shop Gurgaon | 30-60 Min Express Delivery & COD",
    description:
      "Vape Shop Gurgaon - Buy authentic disposable vapes, Elf Bar, Geek Bar 80K, Lost Mary & pods in Gurgaon. 30-60 min express delivery in DLF Cyber City, Golf Course Rd & Delhi NCR with COD.",
    url: "https://vapestoregurugram.com",
    siteName: "Vape Shop Gurgaon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
        width: 1000,
        height: 1000,
        alt: "Best Vape Shop Gurgaon - Buy Authentic Vapes and Pods",
      },
      {
        url: "https://vapestoregurugram.com/banner.webp",
        width: 1200,
        height: 630,
        alt: "Vape Shop Gurgaon - Premium Vapes & Pods Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Gurgaon | 30-60 Min Express Delivery & COD",
    description:
      "Vape Shop Gurgaon - Buy authentic disposable vapes, Elf Bar, Geek Bar 80K, Lost Mary & pods in Gurgaon. 30-60 min express delivery in DLF Cyber City, Golf Course Rd & Delhi NCR with COD.",
    images: [
      "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
      "https://vapestoregurugram.com/banner.webp",
    ],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
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
    "@type": "Store",
    "@id": "https://vapestoregurugram.com/#store",
    name: "Vape Shop Gurgaon",
    alternateName: [
      "Best Vape Shop Gurgaon",
      "Vape Shop in Gurgaon",
      "Vape Store Gurgaon",
      "Vape Store in Gurgaon",
      "Vape Store Gurugram",
      "Vape Shop Gurugram",
      "Vape Delivery Gurgaon",
      "Vape Delivery Gurugram",
      "Vape Store Delhi NCR",
      "Vape Store Noida",
    ],
    url: "https://vapestoregurugram.com",
    logo: "https://vapestoregurugram.com/icon.png",
    image: [
      "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
      "https://vapestoregurugram.com/banner.webp",
    ],
    description:
      "Gurgaon's #1 premier store for 100% authentic disposable vapes, refillable pod kits, coils & imported nic salts. 30-60 min express delivery in Gurgaon (DLF, Cyber City, Golf Course Road) & same-day delivery in Delhi NCR with COD & UPI.",
    telephone: "+91 88168 10870",
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    hasMap: "https://maps.google.com/?q=Galleria+Market+DLF+Phase+4+Gurgaon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galleria Market, DLF Phase 4",
      addressLocality: "Gurgaon",
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
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "AdministrativeArea", name: "DLF Cyber City" },
      { "@type": "AdministrativeArea", name: "DLF Phase 1-5" },
      { "@type": "AdministrativeArea", name: "Golf Course Road" },
      { "@type": "AdministrativeArea", name: "Golf Course Extension" },
      { "@type": "AdministrativeArea", name: "Sohna Road" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "South Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://vapestoregurugram.com/#webpage",
    url: "https://vapestoregurugram.com",
    name: "Best Vape Shop Gurgaon | Buy 100% Premium Vapes & Pods Online",
    description:
      "Gurgaon's #1 trusted vape shop. Shop authentic 100% Premium disposable vapes, pod kits and imported e-liquids with 30-60 min express delivery. WhatsApp: +91 88168 10870",
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": "https://vapestoregurugram.com/#primaryimage",
      url: "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
      contentUrl: "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
      width: "1000",
      height: "1000",
      caption: "Best Vape Shop Gurgaon - Buy Authentic Vapes and Pods",
    },
    image: [
      "https://vapestoregurugram.com/products/ebcreate-bc5000-disposable-pod-device.webp",
      "https://vapestoregurugram.com/banner.webp",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vapestoregurugram.com/#website",
    url: "https://vapestoregurugram.com",
    name: "Vape Store Gurgaon",
    description:
      "Premier Vape Store in Gurgaon & Delhi NCR - 30-60 min express delivery with Cash on Delivery & UPI.",
    publisher: {
      "@id": "https://vapestoregurugram.com/#store",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vapestoregurugram.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-700">
        {/* Global Structured Data JSON-LD for Google Local SEO & Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
