import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const name = cat ? cat.name : "Category";

  const categoryKeywords: Record<string, string[]> = {
    "disposable-vapes": [
      "Disposable Vapes Gurgaon",
      "Disposable Vapes Gurugram",
      "Buy disposable vape online Gurgaon",
      "Yuoto Thanos 5000 puffs",
      "Elf Bar BC5000 Gurgaon",
      "Elf Bar Raya D3 25000",
      "Lost Mary MT15000 Turbo",
      "IGET Moon 5000 puffs",
      "IGET Sun 20000 puffs",
      "Arabisk 40K Puffs Gurgaon",
      "Moon Night 40K Puffs",
      "Flonq Strawberry vape",
      "YUZU 15000 puffs mango",
      "Rechargeable disposable vape",
      "Same day disposable vape delivery",
      "Cash on delivery disposable vape Gurgaon",
      "Late night vape delivery DLF Cyber City",
      "Best disposable vape store Gurugram",
    ],
    "pod-systems": [
      "Pod Systems Gurgaon",
      "Pod Kits Gurugram",
      "Uwell Caliburn A3S Pod Kit",
      "Uwell Caliburn G3 kit Gurgaon",
      "Uwell Caliburn GK3 Delhi NCR",
      "SMOK Nord X 60W Pod Kit",
      "SMOK Novo 2 Pod System",
      "Uwell Crown X Kit Gurgaon",
      "DRAG 4 Mod Kit Gurgaon",
      "Vaporesso Gen PT 60 Kit",
      "Refillable pod kits Gurgaon",
      "Best pod mod vape Delhi NCR",
      "Pod system with warranty Gurgaon",
      "Vape kits express delivery DLF",
    ],
    "e-liquids": [
      "Nicotine Salts Gurgaon",
      "Nic Salts Gurugram",
      "Imported Nic Salts 50mg Gurgaon",
      "20mg Nic Salt Delhi NCR",
      "VGod Salt Nic Gurgaon",
      "Dinner Lady Lemon Tart",
      "Skwezed Salt E Liquid",
      "Nasty Juice Nic Salt Delivery",
      "Vape flavors Gurgaon",
      "Watermelon Ice Nic Salt",
      "Mint Menthol E Liquid Gurgaon",
      "Double Apple Shisha Juice",
      "Freebase e juice Gurgaon",
      "Vape liquid delivery in 30 mins",
    ],
    "coils-pods": [
      "Vape Replacement Coils Gurgaon",
      "Caliburn Replacement Pods Gurgaon",
      "Caliburn A3S Cartridges",
      "Caliburn G3 Pods Delhi NCR",
      "SMOK RPM Coils Gurgaon",
      "Mesh replacement coils Gurgaon",
      "Original vape cartridges Delhi NCR",
      "Vape coil express delivery Gurgaon",
    ],
  };

  const keywords = categoryKeywords[slug] || [
    `${name} Gurgaon`,
    `${name} Gurugram`,
    `Buy ${name} online Gurgaon`,
    `${name} express delivery Delhi NCR`,
    `Authentic ${name} cash on delivery`,
  ];

  return {
    title: `${name} in Gurgaon | Buy Online with Express Delivery`,
    description: `Shop authentic ${name} in Gurgaon, Delhi & Noida NCR. Superfast 30-60 min express delivery with Cash on Delivery (COD) & UPI. Best prices guaranteed.`,
    keywords,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${name} in Gurgaon | Vape Store Gurgaon`,
      description: `Buy authentic ${name} in Gurgaon & Delhi NCR with 30-60 min express delivery.`,
      url: `https://vapestoregurugram.com/category/${slug}`,
      siteName: "Vape Store Gurgaon",
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentCat = CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];
  const filteredProducts = PRODUCTS.filter(
    (p) => p.category === currentCat.id || p.category === currentCat.slug
  );
  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : PRODUCTS;

  // Schema.org CollectionPage & ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${currentCat.name} - Vape Store Gurgaon`,
    url: `https://vapestoregurugram.com/category/${currentCat.slug}`,
    numberOfItems: displayProducts.length,
    itemListElement: displayProducts.slice(0, 12).map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://vapestoregurugram.com/product/${prod.slug}`,
      name: prod.name,
      image: prod.image?.startsWith("http")
        ? prod.image
        : `https://vapestoregurugram.com${prod.image}`,
    })),
  };

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
        name: "Categories",
        item: "https://vapestoregurugram.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentCat.name,
        item: `https://vapestoregurugram.com/category/${currentCat.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50/60 pb-20 pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link
            href="/products"
            className="hover:text-purple-600 transition-colors"
          >
            All Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{currentCat.name}</span>
        </nav>

        <div className="border-b border-slate-200/80 pb-6 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Category Collection
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {currentCat.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fast 30-60 min doorstep delivery across all sectors of Gurgaon.
            </p>
          </div>

          {/* Quick Category Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Link
              href="/products"
              className="shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 hover:text-purple-600 hover:bg-slate-100/80 border border-slate-200 shadow-2xs transition-all"
            >
              All Products ({PRODUCTS.length})
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                  cat.slug === currentCat.slug
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 ring-2 ring-purple-600/20"
                    : "bg-white text-slate-700 hover:text-purple-600 hover:bg-slate-100/80 border border-slate-200"
                }`}
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* Category SEO Content & Local Trust Signals */}
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-xs mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Authentic {currentCat.name} in Gurgaon – 30-60 Min Express Delivery
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              Shop 100% factory-sealed, verified <strong>{currentCat.name}</strong> with anti-counterfeit QR security codes.
              Enjoy guaranteed 30–60 minute instant doorstep courier across <strong>DLF Cyber City</strong>,
              <strong>Golf Course Road</strong>, <strong>DLF Phase 1-5</strong>, <strong>Sohna Road</strong>, and
              same-day express delivery across <strong>Delhi</strong> and <strong>Noida NCR</strong> with Cash on Delivery (COD) and UPI.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold border border-purple-200">
                ⚡ 30-60 Min Delivery
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                🛡️ 100% Genuine Sealed Stock
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
                💵 Cash on Delivery (COD) &amp; UPI
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
