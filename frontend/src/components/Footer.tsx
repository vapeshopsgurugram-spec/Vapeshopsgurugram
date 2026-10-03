import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Zap,
  ShieldCheck,
  Clock,
  Truck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { STORE_INFO, CATEGORIES } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  const POPULAR_SEARCHES = [
    { text: "Vape Shop in Gurgaon", href: "/products" },
    { text: "Vape Delivery Delhi", href: "/products" },
    { text: "Vape Store in Noida", href: "/products" },
    { text: "Vape Shop Near Me", href: "/products" },
    { text: "Disposable Vapes Gurgaon", href: "/category/disposable-vapes" },
    { text: "Yuoto Thanos 5000 Puffs", href: "/search?q=Yuoto" },
    { text: "Lost Mary 15000 Turbo", href: "/search?q=Lost+Mary" },
    { text: "Elf Bar BC5000 India", href: "/search?q=Elf+Bar" },
    { text: "Uwell Caliburn G3 Pod Kit", href: "/search?q=Caliburn" },
    { text: "IGET Moon 5000 Puffs", href: "/search?q=IGET" },
    { text: "Same Day Vape Delivery Delhi NCR", href: "/products" },
    { text: "Late Night Vape Delivery Gurgaon", href: "/products" },
    { text: "Cash on Delivery Vapes Gurgaon & Delhi", href: "/products" },
    { text: "South Delhi Vape Delivery (Saket & GK)", href: "/products" },
    { text: "Hauz Khas & Green Park Vape Delivery", href: "/products" },
    { text: "DLF Cyber City & Galleria Vape Shop", href: "/contact" },
    { text: "Golf Course Road Vape Delivery", href: "/products" },
    { text: "Sohna Road Gurugram Vapes", href: "/products" },
    { text: "Noida Sector 18 & 62 Vape Store", href: "/products" },
    { text: "Greater Noida Same Day Delivery", href: "/products" },
    { text: "Dwarka & West Delhi Vape Shop", href: "/products" },
    { text: "Nic Salt E-Liquids 20mg / 50mg", href: "/category/e-liquids" },
    { text: "Vape Replacement Pods & Coils", href: "/category/coils-pods" },
    { text: "Authentic Vape Store Delhi NCR", href: "/about" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 mt-20 pt-0 pb-12 selection:bg-purple-900 selection:text-white">
      {/* 1. Value Proposition / Trust Feature Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  30-60m &amp; Same-Day
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Instant Gurugram • Same-Day Delhi &amp; Noida
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  100% Authentic
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Original imported verified stock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  COD &amp; UPI Accepted
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Pay cash or scanner upon delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  WhatsApp Support
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Direct live orders &amp; flavor help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        {/* 2. Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Local Authority (2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex flex-col group">
              <div className="flex items-center text-2xl font-black tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                  Vape
                </span>
                <span className="text-white font-extrabold">Shop</span>
              </div>
              <span className="text-[9px] font-bold text-purple-400/90 tracking-[0.25em] uppercase mt-1">
                IN GURGAON • VAPESHOPSGURUGRAM.COM
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Gurugram, Delhi &amp; Noida&apos;s premier online vape store delivering 100% authentic disposable vapes, refillable pod kits, coils, and imported nic salts. 30–60 min courier in Gurugram, and same-day express delivery across Delhi &amp; Noida NCR with Cash on Delivery (COD) &amp; UPI.
            </p>

            {/* Quick WhatsApp / Call Contact Pill */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi VapeShop Gurugram! I want to order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp: {STORE_INFO.phone}
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-purple-400" />
                Call Helpline
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-600 bg-slate-900 px-1.5 py-0.5 rounded">
                      {cat.count || "10+"}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-purple-400 hover:text-purple-300 font-bold transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>View All Products</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Brands & Models */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Top Brands &amp; Kits
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/search?q=Yuoto" className="hover:text-purple-400 transition-colors">
                  Yuoto Thanos 5000 Puffs
                </Link>
              </li>
              <li>
                <Link href="/search?q=Lost+Mary" className="hover:text-purple-400 transition-colors">
                  Lost Mary MT15000 Turbo
                </Link>
              </li>
              <li>
                <Link href="/search?q=Caliburn" className="hover:text-purple-400 transition-colors">
                  Uwell Caliburn A3S &amp; G3
                </Link>
              </li>
              <li>
                <Link href="/search?q=Elf+Bar" className="hover:text-purple-400 transition-colors">
                  Elf Bar BC5000 Disposables
                </Link>
              </li>
              <li>
                <Link href="/search?q=IGET" className="hover:text-purple-400 transition-colors">
                  IGET Moon &amp; Star Series
                </Link>
              </li>
              <li>
                <Link href="/category/e-liquids" className="hover:text-purple-400 transition-colors">
                  Imported Nic Salts (20mg/50mg)
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info & Local Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Store &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400 shrink-0" />
                <span>Open Everyday: 10:00 AM – 11:30 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-purple-400">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                >
                  <span>Directions &amp; Map</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>



        {/* 4. Popular Searches & SEO Keywords Cloud */}
        <div className="py-6 border-b border-slate-800/80 space-y-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Popular Searches &amp; Quick Links
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>


        {/* 6. Bottom Bar: Copyright & Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {STORE_INFO.name} ({STORE_INFO.domain}). All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="hover:text-slate-300 transition-colors">
              All Products
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact &amp; Support
            </Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
