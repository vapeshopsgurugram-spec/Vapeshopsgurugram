import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "All Vape Devices, Pods & E-Liquids | Buy Online in Gurgaon",
  description:
    "Explore our complete range of 100% authentic disposable vapes, refillable pod kits, nicotine salts & coils in Gurgaon. 30-60 min express delivery with Cash on Delivery (COD).",
  keywords: [
    "All Vape Products Gurgaon",
    "Buy Vapes Online Gurugram",
    "Disposable Vapes Gurgaon",
    "Pod Systems Delhi NCR",
    "Vape Delivery Gurgaon 30 mins",
    "Yuoto Thanos Gurgaon",
    "Elf Bar Gurgaon",
    "Lost Mary Delhi NCR",
    "IGET Moon Gurgaon",
    "Uwell Caliburn Pods",
    "Nicotine Salts 50mg Gurgaon",
    "Cash on Delivery Vapes Gurgaon",
    "Vape Store Near Me Gurgaon",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "All Vape Products & Kits | Vape Store Gurgaon",
    description: "Browse 100% genuine vapes, pods & liquids with superfast 30-60 min delivery across Gurgaon.",
    url: "https://vapestoregurugram.com/products",
    siteName: "Vape Store Gurgaon",
    type: "website",
  },
};

export default function ProductsPage() {
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
        name: "Products",
        item: "https://vapestoregurugram.com/products",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50/60 pb-20 pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">All Products</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> 100% Genuine Catalog
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              All Vape Devices &amp; Disposables
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Instant 30-60 minute doorstep delivery across all sectors of Gurgaon.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs"
              >
                {cat.name} ({cat.count})
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </main>
  );
}
