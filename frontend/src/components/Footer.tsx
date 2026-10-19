import React from "react";
import Image from "next/image";
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
import { STORE_INFO, CATEGORIES, PRODUCTS } from "@/data/products";
import { GURGAON_AREAS } from "@/data/areas";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const VAPE_STORE_GURGAON_HOT_KEYWORDS = [
    { text: "Vape Store Gurgaon", href: "/" },
    { text: "Best Vape Store in Gurgaon", href: "/blog/best-vape-shop-in-gurgaon-online-delivery-guide" },
    { text: "Vape Store Gurugram", href: "/" },
    { text: "Vape Store Near Me Gurgaon", href: "/contact" },
    { text: "Vape Store DLF Cyber City", href: "/gurgaon/dlf-cyber-city" },
    { text: "Vape Store Golf Course Road", href: "/gurgaon/golf-course-road" },
    { text: "Vape Store Galleria Market DLF", href: "/gurgaon/galleria-market-dlf-phase-4" },
    { text: "Vape Store Sohna Road Gurgaon", href: "/gurgaon/sohna-road" },
    { text: "Vape Store Sector 29 Gurgaon", href: "/gurgaon/sector-29" },
    { text: "Vape Store Gurgaon Open Now", href: "/contact" },
    { text: "Authentic Vape Store Gurgaon", href: "/about" },
    { text: "30 Min Vape Delivery Gurgaon", href: "/blog/best-vape-shop-in-gurgaon-online-delivery-guide" },
    { text: "Vape Store Gurgaon Cash on Delivery", href: "/products" },
    { text: "Buy Disposable Vapes Gurgaon", href: "/category/disposable-vapes" },
    { text: "Vape Store Gurgaon Contact Number", href: "/contact" },
    { text: "Online Vape Delivery Gurgaon", href: "/products" },
  ];

  const POPULAR_SEARCHES = [
    { text: "Vape Store in Gurgaon", href: "/products" },
    { text: "Vape Delivery Delhi", href: "/products" },
    { text: "Vape Store in Noida", href: "/products" },
    { text: "Vape Store Near Me", href: "/products" },
    { text: "Disposable Vapes Gurgaon", href: "/category/disposable-vapes" },
    { text: "Yuoto Digi 15000 Puffs", href: "/product/yuoto-digi-15000-disposable-pod-device" },
    { text: "Lost Mary Nera 70000 Puffs", href: "/product/lost-mary-nera-fullview-70000-disposable-kit" },
    { text: "Elf Bar BC5000 US Edition", href: "/product/ebcreate-bc5000-disposable-pod-device-us-edition" },
    { text: "Geek Bar Burj 80000 Puffs", href: "/product/geek-bar-burj-80000-disposable-pod-device" },
    { text: "Uwell Caliburn A2 Pod Kit", href: "/product/uwell-caliburn-a2-pod-system" },
    { text: "Vaporesso XROS 5 Kit", href: "/product/vaporesso-xros-5-pod-system-kit" },
    { text: "IGET Move 50000 Puffs", href: "/product/iget-move-b50000-disposable-pod-device" },
    { text: "Al Fakher Crown Bar 40K", href: "/product/al-fakher-crown-bar-40k-megamax-disposable-pod" },
    { text: "Elf Bar Raya D3 Pro 30K", href: "/product/elfbar-raya-d3-pro-30000-disposable-pod-device" },
    { text: "DLF Cyber City Vape Delivery", href: "/gurgaon/dlf-cyber-city" },
    { text: "Golf Course Road Vape Delivery", href: "/gurgaon/golf-course-road" },
    { text: "Galleria Market DLF Phase 4", href: "/gurgaon/galleria-market-dlf-phase-4" },
    { text: "Sohna Road Gurgaon Vapes", href: "/gurgaon/sohna-road" },
    { text: "Sector 29 Gurgaon Vape Store", href: "/gurgaon/sector-29" },
    { text: "DLF Phase 1 Vape Delivery", href: "/gurgaon/dlf-phase-1" },
    { text: "DLF Phase 2 Vape Delivery", href: "/gurgaon/dlf-phase-2" },
    { text: "DLF Phase 3 Vape Store", href: "/gurgaon/dlf-phase-3" },
    { text: "Sushant Lok 1 Vape Delivery", href: "/gurgaon/sushant-lok-1" },
    { text: "Nirvana Country Sector 50", href: "/gurgaon/nirvana-country" },
    { text: "Palam Vihar Vape Store", href: "/gurgaon/palam-vihar" },
    { text: "New Gurgaon Sector 82-84", href: "/gurgaon/new-gurgaon-sector-82-84" },
    { text: "Same Day Vape Delivery Delhi NCR", href: "/products" },
    { text: "Late Night Vape Delivery Gurgaon", href: "/products" },
    { text: "Cash on Delivery Vapes Gurgaon & Delhi", href: "/products" },
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
                  Instant Gurgaon • Same-Day Delhi &amp; Noida
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
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden shrink-0 shadow-md border border-slate-800">
                <Image
                  src="/icon.png"
                  alt="Vape Store Gurgaon Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-2xl font-black tracking-tight leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                    Vape
                  </span>
                  <span className="text-white font-extrabold">Store</span>
                </div>
                <span className="text-[9px] font-bold text-purple-400/90 tracking-[0.25em] uppercase mt-1">
                  IN GURGAON • VAPESTOREGURUGRAM.COM
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Gurgaon, Delhi &amp; Noida&apos;s premier online vape store delivering 100% authentic disposable vapes, refillable pod kits, coils, and imported nic salts. 30–60 min courier in Gurgaon, and same-day express delivery across Delhi &amp; Noida NCR with Cash on Delivery (COD) &amp; UPI.
            </p>

            {/* Quick WhatsApp / Call Contact Pill */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Vape Store Gurgaon! I want to order."
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
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-purple-400 transition-colors inline-flex items-center gap-1 pt-0.5"
                >
                  <span>Vape Guides &amp; Blog</span>
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
                <Link href="/product/yuoto-digi-15000-disposable-pod-device" className="hover:text-purple-400 transition-colors">
                  Yuoto Digi 15000 Puffs
                </Link>
              </li>
              <li>
                <Link href="/product/lost-mary-nera-fullview-70000-disposable-kit" className="hover:text-purple-400 transition-colors">
                  Lost Mary Nera 70000 Turbo
                </Link>
              </li>
              <li>
                <Link href="/product/uwell-caliburn-a2-pod-system" className="hover:text-purple-400 transition-colors">
                  Uwell Caliburn A2 Pod Kit
                </Link>
              </li>
              <li>
                <Link href="/product/ebcreate-bc5000-disposable-pod-device-us-edition" className="hover:text-purple-400 transition-colors">
                  Elf Bar / EBCREATE BC5000
                </Link>
              </li>
              <li>
                <Link href="/product/iget-move-b50000-disposable-pod-device" className="hover:text-purple-400 transition-colors">
                  IGET Move 50000 Puffs
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



        {/* 3.5. Hot Keyword Authority Hub: Vape Store Gurgaon (High Commercial Local SEO) */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900/50 to-slate-950/70 border border-purple-500/20 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs">
                🔥
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
                Hot Searches: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300">Vape Store Gurgaon</span>
              </h3>
            </div>
            <span className="text-[11px] font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 self-start sm:self-auto">
              #1 Rated Vape Store in Gurgaon
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-300/90 leading-relaxed">
            <strong className="text-white">Vape Store Gurgaon</strong> (vapestoregurugram.com) is Gurugram&apos;s premier destination for 100% genuine disposable vapes, refillable pod systems, replacement coils, and imported nicotine salt e-liquids. We provide dedicated hyper-local 30 to 60-minute express courier delivery across DLF Cyber City, Golf Course Road, Sohna Road, and Delhi NCR with verified factory scratch codes and Cash on Delivery (COD) &amp; UPI.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {VAPE_STORE_GURGAON_HOT_KEYWORDS.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-purple-900/40 text-[11px] font-medium text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/60 transition-all shadow-sm"
              >
                {item.text}
              </Link>
            ))}
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

        {/* 4.5. Hyper-Local Gurgaon Sectors & Areas Directory (Top Local SEO) */}
        <div className="py-6 border-b border-slate-800/80 space-y-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Express Vape Delivery Across Gurgaon Sectors (15-35 Min ETA)</span>
            <span className="text-emerald-400 text-[10px] font-semibold lowercase">
              ⚡ instant courier dispatch
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {GURGAON_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/gurgaon/${area.slug}`}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800/90 text-[11px] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{area.name}</span>
                <span className="text-[9px] text-slate-500">({area.deliveryTime})</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. Direct Crawlable Products Directory for Google & Users */}
        <div className="py-6 border-b border-slate-800/80 space-y-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Verified Vape Devices in Gurgaon (30-60 Min Delivery)</span>
            <Link href="/products" className="text-purple-400 hover:text-purple-300 font-semibold lowercase">
              view all {PRODUCTS.length} devices →
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={`/product/${prod.slug || prod.id}`}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
              >
                {prod.name}
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
