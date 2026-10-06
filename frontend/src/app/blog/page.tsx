import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Vape Guides, Reviews & Delivery Insights | Vape Store Gurgaon",
  description:
    "Explore in-depth vape buying guides, authenticity verification tutorials, puff count comparisons, and express delivery details for Gurgaon and Delhi NCR.",
  keywords: [
    "Vape Guides Gurgaon",
    "How to spot fake vapes India",
    "Best disposable vapes 2026",
    "Vape delivery Gurgaon guide",
    "Pod systems vs disposables",
    "Vape Store Gurgaon Blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Vape Guides & Insights | Vape Store Gurgaon",
    description: "Expert reviews, buyer advice, and delivery tips across Gurgaon & Delhi NCR.",
    url: "https://vapestoregurugram.com/blog",
    siteName: "Vape Store Gurgaon",
    type: "website",
  },
};

export default function BlogIndexPage() {
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
        name: "Blog & Guides",
        item: "https://vapestoregurugram.com/blog",
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
          <span className="text-slate-900 font-semibold">Vape Guides &amp; Blog</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200/80 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" /> Expert Insights &amp; Reviews
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Vape Guides &amp; Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Everything you need to know about authentic devices, longevity comparisons, and express doorstep courier in Gurgaon.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-50 text-purple-700 border border-purple-200/80">
                    {post.badge}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  By {post.author}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
