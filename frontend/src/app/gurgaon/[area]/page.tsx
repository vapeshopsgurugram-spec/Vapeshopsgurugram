import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
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
import { GURGAON_AREAS, getGurgaonAreaBySlug } from "@/data/areas";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return GURGAON_AREAS.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getGurgaonAreaBySlug(areaSlug);

  if (!area) {
    return {
      title: "Area Not Found | Vape Store Gurgaon",
    };
  }

  const title = `Vape Shop in ${area.name} | ${area.deliveryTime} Express Delivery - Vape Store Gurgaon`;
  const description = `Looking for an authentic vape shop in ${area.name}, Gurgaon? Order 100% genuine disposable vapes, pod kits & imported e-liquids with ${area.deliveryTime} express delivery & Cash on Delivery (COD).`;

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
      canonical: `/gurgaon/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vapestoregurugram.com/gurgaon/${area.slug}`,
      siteName: "Vape Store Gurgaon",
      type: "website",
      images: [
        {
          url: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
          width: 1953,
          height: 805,
          alt: `Vape Store Delivery in ${area.name} Gurgaon`,
        },
      ],
    },
  };
}

export default async function GurgaonAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
  const area = getGurgaonAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  const otherAreas = GURGAON_AREAS.filter((a) => a.slug !== area.slug);

  // Schema: BreadcrumbList
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
        name: "Gurgaon Vape Delivery",
        item: "https://vapestoregurugram.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://vapestoregurugram.com/gurgaon/${area.slug}`,
      },
    ],
  };

  // Schema: LocalBusiness for this Specific Sector
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VapeShop",
    name: `Vape Store Gurgaon - ${area.name} Express Delivery`,
    image: "https://vapestoregurugram.com/banners/vapestoregurgaon%20banner.png",
    url: `https://vapestoregurugram.com/gurgaon/${area.slug}`,
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${area.name}, ${area.sectorTag}`,
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: area.postalCode,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "485",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.name,
    },
  };

  // Schema: FAQPage
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
            <Link href="/products" className="hover:text-purple-600 transition-colors shrink-0">
              Gurgaon Delivery
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
                {area.description} Serving all prime landmarks:{" "}
                <strong className="text-white">
                  {area.landmarks.join(", ")}
                </strong>.
              </p>

              {/* Fast Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Vape Store Gurgaon! I need instant vape delivery in ${area.name}.`
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
                <span>{area.sectorTag}</span>
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

          {/* Locality Guide & SEO Depth Content */}
          <section className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Hyper-Local Courier Network
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Why Choose Vape Store Gurgaon for Delivery in {area.name}?
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Whether you live in a high-rise condominium, a gated villa, or work in an IT commercial tower across{" "}
                <strong>{area.name}</strong> ({area.sectorTag}), finding a reputable, authentic vape shop can be challenging. Many local cigarette kiosks sell unverified, duplicate products with fake battery cells.
              </p>
              <p>
                <strong>Vape Store Gurgaon</strong> operates a dedicated hyper-local fulfillment hub equipped with riders ready for immediate dispatch. We deliver directly to prominent landmarks including{" "}
                <strong>{area.landmarks.join(", ")}</strong> within <strong>{area.deliveryTime}</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Scratch Code Verification
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Scratch and scan the official holographic manufacturer QR code to verify 100% factory authenticity before payment.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Discreet Plain Packaging
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    All deliveries are packaged in plain, unbranded protective packaging to ensure total privacy for your doorstep delivery.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-600" />
                    Doorstep COD &amp; UPI
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Zero prepayment risk. Inspect your order and pay via Cash on Delivery or UPI scanner right at your door.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Area FAQs */}
          <section className="space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" /> Local FAQs
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions about Delivery in {area.shortName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {area.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-Link Other Gurgaon Sectors */}
          <section className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  Other Express Vape Delivery Sectors Across Gurgaon
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  We provide rapid 15-45 minute courier service across all Gurgaon localities
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {otherAreas.map((item) => (
                <Link
                  key={item.slug}
                  href={`/gurgaon/${item.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 text-xs font-medium text-slate-700 transition-colors"
                >
                  {item.name} ({item.deliveryTime})
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
