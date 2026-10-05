"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Activate frosted glass mask ONLY when scrolled, keep top 100% transparent
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-focus search input when mobile search is opened
  useEffect(() => {
    if (isMobileSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isMobileSearchOpen]);

  // Close drawers on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
      setIsMobileSearchOpen(false);
    }
  };

  // Structured Data (JSON-LD) for Google SEO Sitelinks Navigation
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Products", "About", "Contact"],
    url: [
      "https://vapestoregurugram.com",
      "https://vapestoregurugram.com/products",
      "https://vapestoregurugram.com/about",
      "https://vapestoregurugram.com/contact",
    ],
  };

  return (
    <>
      {/* Technical SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 w-full px-2.5 sm:px-6 pt-2.5 sm:pt-4 pb-0 transition-colors duration-300 pointer-events-none ${
          isScrolled
            ? "bg-white/25 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          {/* Main Floating Navbar Card */}
          <div className="bg-white/85 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] px-3.5 sm:px-6 lg:px-8 py-2 sm:py-3 transition-all">
            
            {/* Top Row: Logo, Navigation, and Action Buttons */}
            <div className="flex items-center justify-between gap-2 sm:gap-6">
              
              {/* 1. Left Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 shrink-0 select-none group focus:outline-none"
                title="Vape Store in Gurgaon - Home"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/icon.png"
                    alt="Vape Store Gurgaon Logo"
                    fill
                    priority
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-lg sm:text-2xl font-black tracking-tight leading-none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500">
                      Vape
                    </span>
                    <span className="text-slate-900 font-extrabold">Store</span>
                  </div>
                  <span className="text-[7.5px] sm:text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-purple-600 transition-colors">
                    IN GURGAON
                  </span>
                </div>
              </Link>

              {/* 2. Desktop Navigation Links (Spaced away from brand name) */}
              <nav
                aria-label="Main Navigation"
                className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0 ml-6 xl:ml-12"
              >
                {/* Home Link */}
                <div className="flex flex-col items-center">
                  <Link
                    href="/"
                    className={`font-semibold text-sm tracking-wide transition-colors ${
                      pathname === "/"
                        ? "text-purple-600 font-bold"
                        : "text-slate-700 hover:text-purple-600"
                    }`}
                  >
                    Home
                  </Link>
                  {pathname === "/" && (
                    <span className="h-[2.5px] w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-0.5" />
                  )}
                </div>

                {/* Products Direct Link */}
                <div className="flex flex-col items-center">
                  <Link
                    href="/products"
                    className={`font-semibold text-sm tracking-wide transition-colors ${
                      pathname === "/products" || pathname.startsWith("/products/")
                        ? "text-purple-600 font-bold"
                        : "text-slate-700 hover:text-purple-600"
                    }`}
                  >
                    Products
                  </Link>
                  {(pathname === "/products" || pathname.startsWith("/products/")) && (
                    <span className="h-[2.5px] w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-0.5" />
                  )}
                </div>

                {/* About Link */}
                <div className="flex flex-col items-center">
                  <Link
                    href="/about"
                    className={`font-semibold text-sm tracking-wide transition-colors ${
                      pathname === "/about"
                        ? "text-purple-600 font-bold"
                        : "text-slate-700 hover:text-purple-600"
                    }`}
                  >
                    About
                  </Link>
                  {pathname === "/about" && (
                    <span className="h-[2.5px] w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-0.5" />
                  )}
                </div>

                {/* Contact Link */}
                <div className="flex flex-col items-center">
                  <Link
                    href="/contact"
                    className={`font-semibold text-sm tracking-wide transition-colors ${
                      pathname === "/contact"
                        ? "text-purple-600 font-bold"
                        : "text-slate-700 hover:text-purple-600"
                    }`}
                  >
                    Contact
                  </Link>
                  {pathname === "/contact" && (
                    <span className="h-[2.5px] w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mt-0.5" />
                  )}
                </div>
              </nav>

              {/* 3. Desktop Search Bar (Hidden on Mobile < md, visible on Desktop) */}
              <div className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0 ml-auto">
                <form
                  onSubmit={handleSearchSubmit}
                  className="w-[260px] md:w-[320px] lg:w-[390px] xl:w-[430px]"
                  role="search"
                >
                  <div className="relative flex items-center bg-white border border-slate-200/90 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 rounded-2xl pl-3.5 pr-0 h-[42px] transition-all">
                    <Search
                      className="w-5 h-5 text-slate-900 shrink-0 mr-2.5"
                      strokeWidth={2.2}
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for vapes, pods, e-liquids..."
                      aria-label="Search for vapes, pods, e-liquids"
                      className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 font-normal focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Submit search"
                      style={{ borderRadius: "14px" }}
                      className="h-[44px] w-[44px] -my-1 -mr-0.5 bg-[linear-gradient(225deg,#4f46e5_0%,#7c3aed_50%,#c026d3_100%)] hover:brightness-110 text-white flex items-center justify-center shadow-[0_6px_16px_rgba(147,51,234,0.45)] shrink-0 cursor-pointer transition-all active:scale-95 ml-1"
                    >
                      <Search className="w-5 h-5 text-white" strokeWidth={2.4} />
                    </button>
                  </div>
                </form>
              </div>

              {/* 4. Action Icons: Small Search Button (Mobile), WhatsApp, Cart, Menu */}
              <div className="flex items-center gap-1 sm:gap-2.5 shrink-0 ml-auto md:ml-0">
                
                {/* Small Search Button (Visible on Mobile only, toggles search input on click) */}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileSearchOpen(!isMobileSearchOpen);
                    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                  }}
                  aria-label="Toggle Search"
                  title="Search"
                  className={`md:hidden p-2 rounded-full transition-colors cursor-pointer ${
                    isMobileSearchOpen
                      ? "text-purple-600 bg-purple-50"
                      : "text-slate-700 hover:text-purple-600 hover:bg-slate-50"
                  }`}
                >
                  {isMobileSearchOpen ? (
                    <X className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Search className="w-5 h-5 text-slate-700" />
                  )}
                </button>

                {/* WhatsApp Quick Order on Mobile */}
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hi VapeShop in Gurgaon, I want to order."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order on WhatsApp"
                  title="Order on WhatsApp"
                  className="md:hidden p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Shopping Cart with Badge */}
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  aria-label={`Shopping cart with ${totalItems} items`}
                  className="relative p-2 text-slate-700 hover:text-purple-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  title="Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute top-0.5 -right-0.5 sm:-right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-black h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                      {totalItems}
                    </span>
                  )}
                </button>

                {/* Hamburger Menu Toggle (Visible on Mobile & Tablet, Hidden on Desktop) */}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                    if (isMobileSearchOpen) setIsMobileSearchOpen(false);
                  }}
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden p-2 text-slate-700 hover:text-purple-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  title="Menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar Dropdown (Opens smoothly ONLY on clicking the small search button) */}
            {isMobileSearchOpen && (
              <div className="md:hidden mt-2 pt-2 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                <form onSubmit={handleSearchSubmit} className="w-full" role="search">
                  <div className="relative flex items-center bg-white border border-purple-300 focus-within:border-purple-600 focus-within:ring-2 focus-within:ring-purple-100 rounded-xl pl-3 pr-0 h-[40px] transition-all shadow-xs">
                    <Search
                      className="w-4 h-4 text-purple-600 shrink-0 mr-2"
                      strokeWidth={2.2}
                    />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search vapes, pods, flavors..."
                      aria-label="Search for vapes, pods, e-liquids"
                      className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 font-normal focus:outline-none"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="p-1 text-slate-400 hover:text-slate-600 mr-1"
                        aria-label="Clear search text"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="submit"
                      aria-label="Submit search"
                      style={{ borderRadius: "10px" }}
                      className="h-[38px] w-[38px] -my-1 -mr-0.5 bg-[linear-gradient(225deg,#4f46e5_0%,#7c3aed_50%,#c026d3_100%)] hover:brightness-110 text-white flex items-center justify-center shadow-sm shrink-0 cursor-pointer transition-all active:scale-95 ml-1"
                    >
                      <Search className="w-4 h-4 text-white" strokeWidth={2.4} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* 5. Mobile & Tablet Navigation Drawer (Fully Responsive) */}
          {isMobileMenuOpen && (
            <div className="mt-2 bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/"
                      ? "text-purple-600 bg-purple-50/70 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>Home</span>
                  {pathname === "/" && <span className="h-2 w-2 rounded-full bg-purple-600" />}
                </Link>

                {/* Products (Direct Link) */}
                <Link
                  href="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/products" || pathname.startsWith("/products/")
                      ? "text-purple-600 bg-purple-50/70 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>Products</span>
                  {(pathname === "/products" || pathname.startsWith("/products/")) && (
                    <span className="h-2 w-2 rounded-full bg-purple-600" />
                  )}
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/about"
                      ? "text-purple-600 bg-purple-50/70 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>About</span>
                  {pathname === "/about" && <span className="h-2 w-2 rounded-full bg-purple-600" />}
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/contact"
                      ? "text-purple-600 bg-purple-50/70 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>Contact</span>
                  {pathname === "/contact" && <span className="h-2 w-2 rounded-full bg-purple-600" />}
                </Link>
              </nav>

              {/* Express Gurgaon delivery callout in mobile menu */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hi VapeShop in Gurgaon, I want to order."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center gap-2 shadow-md shadow-purple-600/20"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Order on WhatsApp (30-60 Min Delivery)
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
