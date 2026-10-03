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

  return {
    title: `${name} | Vapeshopsgurugram`,
    description: `Shop authentic ${name} in Gurgaon with 30-60 minute express delivery.`,
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

  return (
    <main className="min-h-screen bg-slate-50/60 pb-20 pt-24 sm:pt-28">
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
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{currentCat.name}</span>
        </nav>

        <div className="border-b border-slate-200/80 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Category Collection
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {currentCat.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fast doorstep delivery across all sectors of Gurugram.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </main>
  );
}
