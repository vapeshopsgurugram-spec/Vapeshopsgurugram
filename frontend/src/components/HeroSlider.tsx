"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone, ShoppingBag, Sparkles, Zap } from "lucide-react";
import { STORE_INFO } from "@/data/products";

const SLIDES = [
  {
    id: 1,
    image: "/banners/vapestoregurgaon banner.webp",
    mobileImage: "/banners/vapestoregurgaon mobile banner.webp",
    alt: "Premium Vapes in Gurgaon - Buy Authentic Vapes, Pods & E-Liquids Online",
    title: "Premium Vapes in Gurgaon",
    subtitle: "Fast Delivery in Delhi, Gurgaon, and NCR",
  },
  {
    id: 2,
    image: "/banners/vapestoregurgaon banner 2.webp",
    mobileImage: "/banners/vapestoregurgaon mobile banner 2.webp",
    alt: "Same Day 30-60 Min Express Delivery Across Gurgaon & Delhi NCR",
    title: "Express 30-60 Min Delivery",
    subtitle: "100% Genuine Scratch Code Verified Products",
  },
  {
    id: 3,
    image: "/banners/vapestoregurgaon banner 3.webp",
    mobileImage: "/banners/vapestoregurgaon mobile banner 3.webp",
    alt: "Vape Store Gurgaon - Best Prices & Wide Range in Gurgaon",
    title: "Wide Range of Pods & Liquids",
    subtitle: "Doorstep Cash on Delivery & UPI Accepted",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide effect every 1 second
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 100% Full Display Screen Width Edge-to-Edge Banner Container (Mobile & Desktop Responsive - Adapt to Image) */}
      <div className="relative w-full aspect-[1098/1432] sm:aspect-[1953/805] overflow-hidden bg-slate-950">
        {/* Slides */}
        {SLIDES.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop Banner (Hidden on Mobile) */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={85}
                className={`object-cover object-center w-full h-full select-none ${
                  slide.mobileImage ? "hidden sm:block" : ""
                }`}
                sizes="100vw"
              />

              {/* Mobile Phone Banner (Visible only on Mobile) */}
              {slide.mobileImage && (
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={85}
                  className="object-cover object-center w-full h-full select-none block sm:hidden"
                  sizes="100vw"
                />
              )}
            </div>
          );
        })}

        {/* Navigation Arrows & Dots (Visible ONLY if multiple slides exist) */}
        {SLIDES.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-purple-600 shadow-xl backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-purple-600 shadow-xl backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              {SLIDES.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? "w-7 h-2 bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm"
                        : "w-2 h-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Quick Action Feature Dock Under Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {/* 1. Shop All Products */}
          <Link
            href="/products"
            className="group relative flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-purple-600 leading-none mb-0.5">
                100% Genuine
              </span>
              <span className="block text-[11px] sm:text-sm font-black text-slate-900 truncate group-hover:text-purple-600 transition-colors">
                Shop Products
              </span>
            </div>
            <div className="hidden sm:flex h-6 w-6 rounded-full bg-slate-100 group-hover:bg-purple-100 group-hover:text-purple-600 items-center justify-center text-slate-400 shrink-0 transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 2. Direct Call Support */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="group relative flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-blue-600 leading-none mb-0.5">
                24/7 Helpline
              </span>
              <span className="block text-[11px] sm:text-sm font-black text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                Call {STORE_INFO.phone}
              </span>
            </div>
            <div className="hidden sm:flex h-6 w-6 rounded-full bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600 items-center justify-center text-slate-400 shrink-0 transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* 3. WhatsApp Quick Order with Live Pulse */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Vape Store Gurgaon! I want to place a quick order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform relative">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-white" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 leading-none mb-0.5">
                30-60 Min Delivery
              </span>
              <span className="block text-[11px] sm:text-sm font-black text-slate-900 truncate group-hover:text-emerald-600 transition-colors">
                WhatsApp Order
              </span>
            </div>
            <div className="hidden sm:flex h-6 w-6 rounded-full bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-600 items-center justify-center text-slate-400 shrink-0 transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* 4. Disposable Vapes */}
          <Link
            href="/category/disposable-vapes"
            className="group relative flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-pink-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-pink-600 leading-none mb-0.5">
                Top Trending
              </span>
              <span className="block text-[11px] sm:text-sm font-black text-slate-900 truncate group-hover:text-pink-600 transition-colors">
                Disposable Vapes
              </span>
            </div>
            <div className="hidden sm:flex h-6 w-6 rounded-full bg-slate-100 group-hover:bg-pink-100 group-hover:text-pink-600 items-center justify-center text-slate-400 shrink-0 transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
