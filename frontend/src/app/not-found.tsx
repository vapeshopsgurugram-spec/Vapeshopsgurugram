import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, ShoppingBag, HelpCircle, Phone } from "lucide-react";
import { CATEGORIES, STORE_INFO } from "@/data/products";

export const metadata = {
  title: "404 - Page Not Found | Vape Store Gurgaon",
  description: "The page you are looking for does not exist. Browse our authentic vape devices and express delivery services in Gurgaon.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[75vh] bg-slate-50/60 flex items-center justify-center px-4 py-20 pt-28">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-purple-50 text-purple-600 font-black text-3xl border border-purple-100">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore our verified vape catalog below:
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            All Products
          </Link>
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! I need help finding a vape product.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-bold text-sm transition-all"
          >
            <Phone className="h-4 w-4" />
            WhatsApp Support
          </a>
        </div>

        <div className="pt-6 border-t border-slate-100 text-left">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">
            Or Browse by Category
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 hover:text-purple-700 border border-slate-100 text-slate-700 font-medium transition-colors text-center"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
