import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Truck,
  Clock,
  MapPin,
  Sparkles,
  Award,
  ChevronRight,
  PackageCheck,
  Users,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us | Vapeshopsgurugram - Premier Vape Store in Gurgaon",
  description:
    "Learn about Vapeshopsgurugram, Gurugram's most trusted online store for 100% authentic disposable vapes, pod systems, and nicotine salts with 30-60 min express delivery.",
  keywords: [
    "About Vapeshopsgurugram",
    "Vape shop Gurugram story",
    "Authentic vape store Gurgaon",
    "Express vape delivery DLF Gurgaon",
  ],
};

const STATS = [
  { value: "30-60m", label: "Express Delivery", icon: Clock },
  { value: "100%", label: "Authentic & Sealed", icon: ShieldCheck },
  { value: "10,000+", label: "Orders Delivered", icon: PackageCheck },
  { value: "4.9 ★", label: "Customer Rating", icon: Award },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Guaranteed",
    desc: "Every device features a scratch-off authenticity QR code that can be verified directly on official manufacturer websites.",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Superfast Local Courier",
    desc: "Dedicated delivery riders stationed across Cyber City, Golf Course Road, and DLF ensure doorstep delivery in 30 to 60 minutes.",
    color: "amber",
  },
  {
    icon: PackageCheck,
    title: "100% Discreet Packaging",
    desc: "Orders are dispatched in discreet, plain, tamper-evident packaging with zero product branding on the outer box.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Cash on Delivery & UPI",
    desc: "Pay only when your rider arrives at your doorstep. We support Cash on Delivery, GPay, PhonePe, and Paytm.",
    color: "purple",
  },
];

const COVERAGE_HUBS = [
  "Cyber City & DLF Cyber Hub (20-30 mins)",
  "DLF Phase 1, 2, 3, 4 & 5 (20-30 mins)",
  "Golf Course Road & Sector 42-54 (25-35 mins)",
  "Golf Course Ext Road & Sector 55-66 (30-40 mins)",
  "Sohna Road & Subhash Chowk (30-45 mins)",
  "MG Road & Galleria Market (15-25 mins)",
  "Sector 29 & Huda City Centre (25-35 mins)",
  "Delhi NCR Same Day Express (45-90 mins)",
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vapeshopsgurugram! I'm on your About page and would like to ask a question."
  )}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VapeShop",
    name: "Vapeshopsgurugram",
    image: "https://vapeshopsgurugram.com/banners/hero-banner.png",
    "@id": "https://vapeshopsgurugram.com",
    url: "https://vapeshopsgurugram.com",
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galleria Market, DLF Phase 4",
      addressLocality: "Gurugram",
      postalCode: "122002",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4682,
      longitude: 77.0858,
    },
    openingHoursSpecification: {
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
    sameAs: [
      "https://wa.me/918950953934",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="min-h-screen bg-slate-50/70 pb-20 pt-24 sm:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gurugram&apos;s #1 Trusted Vape Destination</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Elevating the Vape Experience in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Gurugram &amp; Delhi NCR
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Founded in the heart of Millennium City, <strong>Vapeshopsgurugram</strong> was created with a clear mission: to provide vape enthusiasts with 100% genuine products, fair pricing, and lightning-fast doorstep delivery in 30 to 60 minutes.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
              >
                Explore Catalog
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </section>

        {/* Our Story & Values */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Why Choose Vapeshopsgurugram
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Authenticity, Speed &amp; Customer Satisfaction at Our Core
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              In a market filled with counterfeit vape pods and unreliable delivery promises, <strong>Vapeshopsgurugram</strong> stands out by enforcing strict authenticity controls. We source directly from official authorized distributors of globally renowned brands including <strong>Elfbar</strong>, <strong>Yuoto</strong>, <strong>Elfworld</strong>, <strong>Uwell Caliburn</strong>, and <strong>Lost Mary</strong>.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every device is factory-sealed, stored in climate-controlled conditions to preserve e-liquid flavor integrity, and dispatched with tamper-evident seals. Whether you need a refill at DLF Phase 5 at midnight or an urgent delivery at Cyber City during office hours, our local courier fleet gets it to you in under an hour.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Delivery Network Section */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Truck className="w-4 h-4" /> 30-60 Minute Local Hubs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Gurugram &amp; NCR Express Coverage
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Operating Hours: 10:00 AM - 11:30 PM (Daily)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {COVERAGE_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 text-xs text-slate-700 font-medium"
              >
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">{hub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Order Authentic Vapes in Gurgaon?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Enjoy free 30-60 minute delivery on orders above ₹1,500. Cash on Delivery and doorstep UPI available.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="py-3 px-6 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-2xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border border-emerald-400/30 transition-all"
            >
              Contact Store
            </Link>
          </div>
        </section>

      </div>
    </main>
    </>
  );
}
