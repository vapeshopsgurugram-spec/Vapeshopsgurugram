"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Star,
  Cloud,
  BatteryCharging,
  Sparkles,
  ShieldCheck,
  ShoppingCart,
  Check,
  Truck,
  Banknote,
  Clock,
  Heart,
} from "lucide-react";
import { STORE_INFO, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedAnimation(true);
    setIsCartOpen(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const productUrl = `https://vapestoregurugram.com/product/${product.slug}`;
  const whatsappMessage = encodeURIComponent(
    `*NEW ORDER - VAPE STORE GURGAON*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 *Product:* ${product.name}\n` +
    `🏷️ *Brand:* ${product.brand || "Authentic"}\n` +
    (product.flavors && product.flavors.length > 0 ? `🍇 *Flavor Selected:* ${product.flavors[0]}\n` : ``) +
    `🔢 *Quantity:* ${quantity}\n` +
    `💰 *Total Amount:* ₹${(product.price * quantity).toLocaleString("en-IN")}\n` +
    `💵 *Payment Mode:* Cash on Delivery (COD) / UPI on Delivery\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🔗 *Product Link:* ${productUrl}\n\n` +
    `📍 *Delivery Details:*\n` +
    `• Name:\n` +
    `• Delivery Address:\n` +
    `• Sector / Area in Gurgaon:\n` +
    `• Phone Number:\n\n` +
    `⚡ Please deliver in 30-60 mins across Gurgaon / Delhi NCR.`
  );

  // Other related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(
    0,
    4
  );

  // Dynamic 4 features with fallback
  const feat1 = product.features?.[0]?.text || "Mega Clouds";
  const feat2 =
    product.features?.[1]?.text ||
    (product.puffs ? `Up to ${product.puffs.toLocaleString()} Puffs` : "Long Lasting");
  const feat3 = product.features?.[2]?.text || "Refreshing Flavor";
  const feat4 = product.features?.[3]?.text || "Premium Quality";

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* 1. Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none py-1"
        >
          <Link
            href="/"
            className="hover:text-purple-600 font-medium transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href="/products"
            className="hover:text-purple-600 font-medium transition-colors"
          >
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href={`/search?q=${encodeURIComponent(product.brand)}`}
            className="hover:text-purple-600 font-medium transition-colors uppercase"
          >
            {product.brand}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-[240px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* 2. Main Product Showcase (Comfortable, Generous Proportions) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Photography Showcase */}
          <div className="w-full max-w-[520px] mx-auto lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden bg-[#faf7f2] border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] aspect-square flex items-center justify-center group">
              <Image
                src={product.image || "/products/elfbar-gh23000-bluerazz.webp"}
                alt={`${product.name} | Vape Store Gurgaon`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Wishlist Button floating top-right */}
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-center text-slate-500 hover:text-rose-500 active:scale-90 transition-all cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Product Info */}
          <div className="flex flex-col justify-start">
            {/* Row 1: Brand Pill + Stock Status */}
            <div className="flex items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-md bg-[#e6f7ef] text-[#065f46] text-xs font-bold tracking-wider uppercase border border-emerald-100">
                {product.brand}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#eafaf1] text-[#16a34a] text-xs font-semibold flex items-center gap-1.5 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                In Stock
              </span>
            </div>

            {/* Product Title (Clean, balanced font size & weight) */}
            <h1 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight leading-snug mt-2.5">
              {product.name}
              <span className="text-slate-400 font-medium text-base sm:text-lg block sm:inline sm:ml-2">
                – Vape Store Gurgaon
              </span>
            </h1>

            {/* Star Rating, Reviews & Sold Count */}
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm flex-wrap">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-slate-800">
                {product.rating} ({product.reviewsCount || 120}+ reviews)
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-medium">
                {product.soldCount || "500+"} sold
              </span>
            </div>

            {/* Pricing Row (Reduced size & boldness) */}
            <div className="flex items-center gap-2.5 mt-3 flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold text-[#2563eb] tracking-tight">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-slate-400 line-through font-normal">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {discountPercent && (
                <span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 font-bold text-xs border border-pink-100">
                  {discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
              {product.description}
            </p>

            {/* 4 Feature Pills / Cards Container */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 mt-4 shadow-2xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* 1. Feature 1 */}
                <div className="flex items-center gap-2.5 p-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {feat1}
                  </span>
                </div>

                {/* 2. Feature 2 */}
                <div className="flex items-center gap-2.5 p-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {feat2}
                  </span>
                </div>

                {/* 3. Feature 3 */}
                <div className="flex items-center gap-2.5 p-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {feat3}
                  </span>
                </div>

                {/* 4. Feature 4 */}
                <div className="flex items-center gap-2.5 p-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {feat4}
                  </span>
                </div>
              </div>
            </div>


            {/* Action Row: Quantity + Add to Cart + WhatsApp */}
            <div className="space-y-3 mt-5">
              <div className="flex items-center gap-3">
                {/* Quantity Selector [- 1 +] */}
                <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50/90 p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-lg flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 sm:w-12 text-center font-bold text-slate-900 text-base select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-lg flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-12 sm:h-13 px-6 rounded-2xl bg-gradient-to-r from-[#d926a9] to-[#c026d3] hover:from-[#c026d3] hover:to-[#a21caf] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-fuchsia-500/25 active:scale-98 transition-all cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

              {/* Full Width Buy Now via WhatsApp Button */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#eafaf1] hover:bg-[#dcfce7] border border-emerald-200 text-slate-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xs"
              >
                <span className="w-6 h-6 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span>Buy Now via WhatsApp</span>
              </a>
            </div>

            {/* Product Details Section (Placed below Buy Now button) */}
            {product.productDetails && product.productDetails.length > 0 && (
              <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  Product Details
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.productDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 3. Bottom 4 Trust Badges Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs p-5 sm:p-6 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 md:divide-x divide-slate-100">
            {/* 1. Free Delivery */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-800">
                <Truck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Free Delivery
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Delhi NCR
                </p>
              </div>
            </div>

            {/* 2. Cash on Delivery */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-800">
                <Banknote className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Cash on Delivery
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Available
                </p>
              </div>
            </div>

            {/* 3. Same Day Delivery */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-800">
                <Clock className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Same Day Delivery
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Before 6 PM
                </p>
              </div>
            </div>

            {/* 4. 100% Original */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-800">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  100% Original
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  With Warranty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="space-y-5 pt-8 sm:pt-10 border-t border-slate-200/80">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  You May Also Like
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Vapes in Gurgaon
                </h3>
              </div>
              <Link
                href="/"
                className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1"
              >
                View Store
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
