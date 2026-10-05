import React from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  MapPin,
  Clock,
  ChevronRight,
  Flame,
  HelpCircle,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";

const DELIVERY_HUBS = [
  { name: "DLF Cyber City & Galleria (Gurgaon)", time: "15-25 mins", status: "Instant" },
  { name: "DLF Phase 1-5 & Golf Course Rd", time: "20-30 mins", status: "Instant" },
  { name: "Sohna Road & Nirvana Country", time: "25-35 mins", status: "Instant" },
  { name: "South Delhi (Saket, Hauz Khas, GK)", time: "Same-Day", status: "Express" },
  { name: "Central & West Delhi (CP, Dwarka)", time: "Same-Day", status: "Express" },
  { name: "Noida Sec 18, 62 & Expressway", time: "Same-Day", status: "Express" },
];

const FAQS = [
  {
    q: "Do you deliver vapes in Gurgaon, Delhi and Noida?",
    a: "Yes! We provide 30 to 60-minute instant delivery across all sectors of Gurgaon (DLF, Cyber City, Golf Course Road, Sohna Road), as well as fast same-day express delivery across South Delhi, Central Delhi, West Delhi, Noida, and Greater Noida.",
  },
  {
    q: "How can I order vapes in Delhi NCR with Cash on Delivery?",
    a: "You can easily order directly through our website cart or via WhatsApp (+91 89509 53934). We accept Cash on Delivery (COD) and doorstep UPI (Google Pay, PhonePe, Paytm) across Gurgaon, Delhi, and Noida.",
  },
  {
    q: "Are the vapes and pod kits 100% authentic?",
    a: "Yes, every single product is 100% factory original and comes sealed with an anti-counterfeit scratch-off QR code that you can verify directly on the official manufacturer website (Yuoto, Elf Bar, Lost Mary, Caliburn, IGET).",
  },
  {
    q: "What are the most popular vape brands available?",
    a: "Our top-selling products in Delhi NCR include Yuoto Thanos 5000, Lost Mary MT15000 Turbo, Uwell Caliburn Pod Kits, Elf Bar Disposables, IGET Moon, and premium imported nicotine salt e-liquids.",
  },
  {
    q: "Is discreet packaging guaranteed?",
    a: "Yes. All orders are packed in unmarked, tamper-evident protective packaging with zero product branding on the outside for complete privacy.",
  },
];

export default function HomePage() {
  // Structured FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // Structured ItemList Schema for Featured Products
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Vape Devices & Disposables - Vape Store Gurgaon",
    description: "Trending disposable vapes, pod kits and e-liquids available in Gurgaon & Delhi NCR.",
    url: "https://vapestoregurugram.com",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.slice(0, 16).map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: prod.name,
      url: `https://vapestoregurugram.com/product/${prod.slug}`,
      image: prod.image?.startsWith("http")
        ? prod.image
        : `https://vapestoregurugram.com${prod.image || "/products/elfbar-gh23000-bluerazz.webp"}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Auto-Slide Banner (Navbar floats above it) */}
      <section className="w-full">
        <HeroSlider />
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-6 sm:py-10">
        {/* 1. Hero Content & Trust Signals - Open Stable SEO Layout */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2 sm:pt-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Live Delivery Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-slate-800 text-xs font-bold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span className="text-purple-700 font-extrabold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
                <span>30-60 Min Express Delivery</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Gurgaon • Delhi • Noida NCR</span>
            </div>

            {/* Primary SEO H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Gurgaon, Delhi &amp; Noida&apos;s #1{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500">
                Vape &amp; Pod
              </span>{" "}
              Store
            </h1>

            {/* Keyword-Rich SEO Location Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              100% Authentic disposable vapes, refillable pod systems, and premium imported nic salts. 30–60 min instant courier in{" "}
              <strong className="text-slate-900 font-bold">Gurgaon</strong> (DLF, Cyber City, Golf Course Rd), and same-day delivery across{" "}
              <strong className="text-slate-900 font-bold">Delhi</strong> &amp;{" "}
              <strong className="text-slate-900 font-bold">Noida NCR</strong> with Cash on Delivery (COD).
            </p>

            {/* Quick Category Chips for Internal Linking SEO */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1">Trending:</span>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-purple-600 text-slate-700 hover:text-white border border-slate-200/90 hover:border-purple-600 text-xs font-bold shadow-2xs hover:shadow-md hover:shadow-purple-600/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 4 Trust Value Props - Stable Cards on Page BG */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 text-left max-w-4xl mx-auto">
            {/* 1. 100% Original */}
            <div className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                  100% Original
                </h4>
                <p className="text-[11px] text-slate-500 truncate font-medium">Scratch &amp; Verify QR</p>
              </div>
            </div>

            {/* 2. 30-60 Mins Express */}
            <div className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-purple-700 transition-colors">
                  30-60 Mins
                </h4>
                <p className="text-[11px] text-slate-500 truncate font-medium">Gurgaon Express</p>
              </div>
            </div>

            {/* 3. Discreet Packaging */}
            <div className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  Discreet Box
                </h4>
                <p className="text-[11px] text-slate-500 truncate font-medium">Plain packaging</p>
              </div>
            </div>

            {/* 4. COD & Doorstep UPI */}
            <div className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                  COD &amp; UPI
                </h4>
                <p className="text-[11px] text-slate-500 truncate font-medium">Doorstep payment</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Featured Products Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
                <Flame className="h-4 w-4" /> Bestsellers in Gurgaon
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Featured Vape Devices &amp; Disposables
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1"
            >
              <span>View All Products</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>

        {/* 3. Gurgaon, Delhi & Noida Delivery Hubs */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
              Delhi NCR Delivery Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Express Delivery Across Gurgaon, Delhi &amp; Noida
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              30–60 min courier in Gurgaon • Same-day express dispatch across South Delhi, Central Delhi, and Noida NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERY_HUBS.map((hub) => (
              <div
                key={hub.name}
                className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{hub.name}</h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="h-3 w-3 text-purple-600" />
                      ETA: {hub.time}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {hub.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Local SEO Overview: Buy Authentic Vapes in Gurgaon, Delhi & Noida */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-50/60 via-white to-pink-50/40 border border-purple-100/80 shadow-2xs space-y-4">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Buy Authentic Vapes, Pods &amp; E-Liquids in Gurgaon, Delhi &amp; Noida NCR
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Welcome to <strong>Vape Store Gurgaon</strong>, your trusted online destination for 100% genuine vaping devices, disposable pod bars, refillable kits, and imported nicotine salt e-liquids in the Delhi NCR region. Whether you are searching for <em>&quot;Vape Store in Gurgaon&quot;</em>, <em>&quot;vape delivery in Delhi&quot;</em>, or <em>&quot;vape store in Noida&quot;</em>, we provide lightning-fast doorstep service with genuine factory scratch-code verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1">
              <h4 className="font-bold text-purple-700">Gurgaon Express (30–60m)</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Direct doorstep dispatch to DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, Galleria Market, and all Gurgaon sectors with Cash on Delivery.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1">
              <h4 className="font-bold text-indigo-700">Delhi Same-Day Delivery</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Same-day express couriers across South Delhi (Saket, Hauz Khas, GK, Vasant Kunj), Central Delhi (CP), Dwarka, Rohini, and West Delhi.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1">
              <h4 className="font-bold text-pink-700">Noida &amp; Greater Noida</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Fast same-day delivery to Sector 18, Sector 62, Noida-Greater Noida Expressway, Indirapuram, and surrounding NCR localities.
              </p>
            </div>
          </div>

          {/* Popular Trending Keywords Quick Cloud */}
          <div className="pt-3 border-t border-purple-100/60 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Trending Searches in Gurgaon, Delhi &amp; Noida:
            </span>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                { label: "Yuoto Thanos 5000", href: "/search?q=Yuoto" },
                { label: "Lost Mary 15000 Puffs", href: "/search?q=Lost+Mary" },
                { label: "Elf Bar BC5000", href: "/search?q=Elf+Bar" },
                { label: "Uwell Caliburn Pods", href: "/search?q=Caliburn" },
                { label: "IGET Moon Disposables", href: "/search?q=IGET" },
                { label: "Vape Delivery DLF Cyber City", href: "/products" },
                { label: "Golf Course Road Vapes", href: "/products" },
                { label: "South Delhi Vape Store", href: "/products" },
                { label: "Hauz Khas Vape Delivery", href: "/products" },
                { label: "Noida Sector 18 Vapes", href: "/products" },
                { label: "Cash on Delivery Vapes NCR", href: "/products" },
                { label: "Late Night Vape Delivery", href: "/contact" },
              ].map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className="px-2.5 py-1 rounded-lg bg-white border border-purple-200/70 text-slate-700 hover:text-purple-700 hover:border-purple-400 font-semibold shadow-2xs transition-colors"
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Frequently Asked Questions */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center justify-center gap-1">
              <HelpCircle className="h-3.5 w-3.5" /> FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
