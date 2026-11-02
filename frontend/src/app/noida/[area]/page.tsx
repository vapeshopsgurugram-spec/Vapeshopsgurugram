import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Phone,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { NOIDA_AREAS, getNoidaAreaBySlug } from "@/data/noida_areas";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return NOIDA_AREAS.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getNoidaAreaBySlug(areaSlug);

  if (!area) {
    return {
      title: "Area Not Found | Vape Store Noida NCR",
    };
  }

  const title = `Vape Shop in ${area.name} | ${area.deliveryTime} Delivery - Vape Store Noida`;
  const description = `Looking for an authentic vape shop in ${area.name}? Order 100% genuine disposable vapes, pod kits & imported e-liquids with ${area.deliveryTime} express delivery & Cash on Delivery (COD).`;

  return {
    title,
    description,
    keywords: [
      ...area.popularSearches,
      `Vape Store ${area.shortName}`,
      `Vape Delivery ${area.shortName}`,
      `Vape Shop Near Me ${area.shortName}`,
      `Buy Vape Online ${area.name}`,
      `Cash on Delivery Vape ${area.shortName}`,
      `Late Night Vape Delivery ${area.shortName}`,
    ],
    alternates: {
      canonical: `/noida/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vapestoregurugram.com/noida/${area.slug}`,
      siteName: "Vape Store Noida NCR Express",
      type: "website",
      images: [
        {
          url: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
          width: 1953,
          height: 805,
          alt: `Vape Store Delivery in ${area.name} Noida`,
        },
      ],
    },
  };
}

export default async function NoidaAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
  const area = getNoidaAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  const otherAreas = NOIDA_AREAS.filter((a) => a.slug !== area.slug);

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
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://vapestoregurugram.com/noida/${area.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: `Vape Store Noida - ${area.name} Express Delivery`,
    image: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
    url: `https://vapestoregurugram.com/noida/${area.slug}`,
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${area.name}, ${area.zoneTag}`,
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: area.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5355,
      longitude: 77.3910,
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.name,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 overflow-x-auto py-1 scrollbar-none">
            <Link href="/" className="hover:text-purple-600 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/noida" className="hover:text-purple-600 transition-colors shrink-0">
              Noida Delivery
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold shrink-0">{area.shortName}</span>
          </nav>

          {/* Local Area Hero Header */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{area.deliveryStatus} • {area.deliveryTime} ETA</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Vape Store &amp; Express Delivery in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                  {area.name}
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {area.description} Serving key landmarks:{" "}
                <strong className="text-white">
                  {area.landmarks.join(", ")}
                </strong>.
              </p>

              {/* Fast Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hi! I need express vape delivery in ${area.name}, Noida.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order on WhatsApp ({area.deliveryTime})</span>
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

            {/* Quick Trust Highlights Pill Bar */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-4 w-4 text-purple-400 shrink-0" />
                <span>{area.deliveryTime} Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Factory Sealed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Cash on Delivery (COD)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-pink-400 shrink-0" />
                <span>PIN {area.postalCode}</span>
              </div>
            </div>
          </section>

          {/* Product Catalog for this Locality */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> Express Dispatch Catalog
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Available for Immediate Delivery in {area.shortName}
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Showing all {PRODUCTS.length} authentic devices in stock
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {PRODUCTS.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>

          {/* Area Specific FAQs */}
          {area.faqs && area.faqs.length > 0 && (
            <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                  <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Vape Delivery in {area.name} FAQs
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {area.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                  >
                    <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                      <span className="text-purple-600 font-extrabold shrink-0">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Other Noida Localities Interlinking */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Explore Other Noida NCR Delivery Hubs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherAreas.map((oa) => (
                <Link
                  key={oa.slug}
                  href={`/noida/${oa.slug}`}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-700 text-xs font-bold text-slate-700 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{oa.shortName}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

