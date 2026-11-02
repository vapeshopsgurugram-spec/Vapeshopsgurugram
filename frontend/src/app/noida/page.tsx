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
} from "lucide-react";
import { NOIDA_AREAS } from "@/data/noida_areas";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Vape Delivery in Noida | Same-Day Express Doorstep Service & COD",
  description:
    "Buy 100% authentic disposable vapes, pod kits & imported nic salts in Noida. Fast same-day express delivery across Sector 18, Sector 62, Noida Expressway & Greater Noida with Cash on Delivery (COD).",
  keywords: [
    "Vape delivery Noida",
    "Buy vape online Noida",
    "Vape shop Noida Sector 18",
    "Vape store Noida Sector 62",
    "Vape delivery Noida Expressway",
    "Vape delivery Greater Noida",
    "Cash on Delivery vape Noida",
    "Disposable vapes Noida",
    "Late night vape delivery Noida",
  ],
  alternates: {
    canonical: "/noida",
  },
  openGraph: {
    title: "Vape Store Noida | Express Same-Day Delivery & COD",
    description:
      "Order 100% genuine factory-sealed vapes with online QR scratch code authentication delivered same-day across Noida sectors and expressway.",
    url: "https://vapestoregurugram.com/noida",
    siteName: "Vape Store Gurgaon - Noida Express Hub",
    type: "website",
  },
};

export default function NoidaHubPage() {
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
        name: "Noida Vape Delivery",
        item: "https://vapestoregurugram.com/noida",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Vape Store Gurgaon - Noida Express Delivery Hub",
    image: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
    url: "https://vapestoregurugram.com/noida",
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noida Expressway & Sector 18 Transit Dispatch Hub",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Noida" },
      { "@type": "AdministrativeArea", name: "Greater Noida" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast is vape delivery across Noida sectors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Orders to Noida Sector 18, Sector 62, and Noida Expressway (Sectors 93, 128, 137) are delivered within 45 to 80 minutes via dedicated courier. Greater Noida orders are delivered same-day.",
        },
      },
      {
        "@type": "Question",
        name: "Is Cash on Delivery (COD) available across Noida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% Cash on Delivery (COD) as well as contactless doorstep UPI (Google Pay, PhonePe, Paytm) are available across all Noida and Greater Noida pin codes.",
        },
      },
      {
        "@type": "Question",
        name: "Are the devices delivered in Noida 100% genuine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every device is brand new, factory-sealed, and features an official manufacturer anti-counterfeit QR scratch code for online verification.",
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
            <span className="text-slate-900 font-bold shrink-0">Noida Express Delivery</span>
          </nav>

          {/* Hero Header */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Noida Express Network • Same-Day Doorstep Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Vape Store &amp; Express Delivery in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                  Noida &amp; Greater Noida
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Order 100% authentic disposable vapes, refillable pod systems, and premium nicotine salts delivered to your office or home in Noida Sector 18, Sector 62 IT hub, Noida Expressway, and Greater Noida with Cash on Delivery (COD).
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hi! I need express vape delivery in Noida."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order on WhatsApp (Noida Delivery)</span>
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
                <span>Same-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% QR Scratch Verified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Cash on Delivery (COD)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="h-4 w-4 text-pink-400 shrink-0" />
                <span>Discreet Packaging</span>
              </div>
            </div>
          </section>

          {/* Noida Localities Grid */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Noida Delivery Hubs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Select Your Noida Sector for Fastest Dispatch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NOIDA_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/noida/${area.slug}`}
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
                  <Sparkles className="h-3.5 w-3.5" /> Direct Noida Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Authentic Vape Devices &amp; Pods
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                All {PRODUCTS.length} devices available for Noida Doorstep Dispatch
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

