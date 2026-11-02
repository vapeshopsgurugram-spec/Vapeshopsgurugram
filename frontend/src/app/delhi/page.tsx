import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Phone,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { DELHI_AREAS } from "@/data/delhi_areas";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Vape Delivery in Delhi | Same-Day Express Doorstep Service & COD",
  description:
    "Buy authentic disposable vapes, refillable pod kits & premium nic salts in Delhi. Rapid 30-60 min delivery across South Delhi, Dwarka, Vasant Kunj, CP & NCR with Cash on Delivery (COD).",
  keywords: [
    "Vape delivery Delhi",
    "Buy vape online Delhi",
    "Vape shop South Delhi",
    "Vape store Delhi COD",
    "Same day vape delivery Delhi NCR",
    "Disposable vapes Delhi",
    "Vape delivery Dwarka",
    "Vape delivery Vasant Kunj",
    "Vape delivery Connaught Place",
    "Late night vape delivery Delhi",
  ],
  alternates: {
    canonical: "/delhi",
  },
  openGraph: {
    title: "Vape Store Delhi | Same-Day Express Delivery & COD",
    description:
      "Order 100% genuine vapes with scratch code verification delivered in 30-60 minutes across South Delhi, Dwarka, Aerocity, and Central Delhi.",
    url: "https://vapestoregurugram.com/delhi",
    siteName: "Vape Store Gurgaon - Delhi NCR Delivery Hub",
    type: "website",
  },
};

export default function DelhiHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vapestoregurugram.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Delhi Vape Delivery",
        item: "https://vapestoregurugram.com/delhi",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Vape Store Gurgaon - Delhi Express Delivery Hub",
    image: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
    url: "https://vapestoregurugram.com/delhi",
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "South Delhi & Central Delhi Express Transit Hub",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110017",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "South Delhi" },
      { "@type": "AdministrativeArea", name: "South West Delhi" },
      { "@type": "AdministrativeArea", name: "Central Delhi" },
      { "@type": "AdministrativeArea", name: "New Delhi" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast is vape delivery across Delhi localities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide rapid 30 to 50-minute express courier delivery to South Delhi (Saket, GK, Hauz Khas), Dwarka, Aerocity, and Vasant Kunj. Central and North West Delhi receive same-day courier dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "Is Cash on Delivery (COD) available in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% Cash on Delivery (COD) as well as contactless doorstep UPI (Google Pay, PhonePe, Paytm) are available across all Delhi pin codes.",
        },
      },
      {
        "@type": "Question",
        name: "Are the vape products authentic with scratch codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every device is 100% original, brand new and factory-sealed with an official manufacturer anti-counterfeit QR code you can verify online.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-slate-50/60 pb-20 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 overflow-x-auto py-1 scrollbar-none">
            <Link href="/" className="hover:text-purple-600 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold shrink-0">Delhi Express Delivery</span>
          </nav>

          {/* Hero Header */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Delhi Express Network • Same-Day Dispatch</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Vape Store &amp; Express Delivery in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                  Delhi NCR
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Order 100% authentic disposable vapes, refillable pod devices, and premium imported nicotine salts delivered right to your doorstep across South Delhi, Dwarka, Vasant Kunj, Aerocity, and Central Delhi. Fast courier with Cash on Delivery (COD) and contactless UPI.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hi! I need express vape delivery in Delhi."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order on WhatsApp (Delhi Delivery)</span>
                </a>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                >
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span>Call Helpline</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-4 w-4 text-purple-400 shrink-0" />
                <span>30-60 Mins Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Scratch QR Verified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Cash on Delivery (COD)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="h-4 w-4 text-pink-400 shrink-0" />
                <span>Discreet Plain Packaging</span>
              </div>
            </div>
          </section>

          {/* Delhi Localities Grid */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Delhi Delivery Hubs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Select Your Delhi Locality for Fastest Courier Dispatch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DELHI_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/delhi/${area.slug}`}
                  className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-600 px-2.5 py-1 rounded-full bg-purple-50">
                      {area.deliveryTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {area.landmarks.slice(0, 3).join(", ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Products Catalog */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> Direct Delhi Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Authentic Vape Devices &amp; Pods
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                All {PRODUCTS.length} devices available with Delhi Same-Day Courier
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {PRODUCTS.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

