"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronRight,
  Check,
} from "lucide-react";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: (typeof PRODUCTS)[0];
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Discount calculation
  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, (product.flavors && product.flavors[0]) || "Default");
    }
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Vapeshopsgurugram! I want to order:\n- Product: ${product.name}\n- Qty: ${quantity}\n- Price: ₹${(
      product.price * quantity
    ).toLocaleString("en-IN")}\nPlease deliver to my location in Gurugram / Delhi NCR.`
  );

  return (
    <div className="group flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden">
      {/* 1. TOP IMAGE SECTION */}
      <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
        {/* Badge Pill (if any, Top Left) */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-400 text-slate-950 shadow-xs flex items-center gap-1">
              <span>🔥</span>
              <span>{product.badge}</span>
            </span>
          </div>
        )}

        {/* Main Product Image */}
        <Link
          href={`/product/${product.slug || product.id}`}
          className="absolute inset-0 block cursor-pointer"
          aria-label={`View ${product.name} details`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            priority={product.id === "p1" || product.id === "p-yuoto-apple"}
          />
        </Link>
      </div>

      {/* 2. LOWER CONTENT SECTION (With Organic Wave Scoop Cut) */}
      <div className="relative -mt-5 bg-white pt-2.5 sm:pt-3 px-2.5 sm:px-3.5 pb-3 z-20 flex-1 flex flex-col justify-between space-y-2">
        {/* Organic Wave Top Cut with Rounded Shoulders & Gentle Center Scoop */}
        <div className="absolute -top-3.5 sm:-top-4 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            viewBox="0 0 500 28"
            preserveAspectRatio="none"
            className="w-full h-4 sm:h-5 text-white fill-current block"
          >
            <path d="M 0,28 L 0,16 Q 0,2 26,2 C 140,14 360,14 474,2 Q 500,2 500,16 L 500,28 Z" />
          </svg>
        </div>

        <div>
          {/* Top Row inside Card: Brand Tag + Wishlist Heart */}
          <div className="flex items-center justify-between gap-1.5">
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] sm:text-[10px] font-extrabold tracking-wide uppercase border border-emerald-100">
              {product.brand}
            </span>

            <button
              type="button"
              onClick={() => setIsWishlisted(!isWishlisted)}
              aria-label="Add to wishlist"
              className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border border-slate-100 shadow-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-slate-400 hover:text-rose-500 cursor-pointer bg-white"
            >
              <Heart
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                  isWishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400"
                }`}
              />
            </button>
          </div>

          {/* Product Title */}
          <Link href={`/product/${product.slug || product.id}`} className="block mt-1">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 hover:text-emerald-600 transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Specs */}
          {product.subtitle ? (
            <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
              {product.subtitle}
            </p>
          ) : product.puffs ? (
            <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
              Up to {product.puffs.toLocaleString()} Puffs • {(product.flavors && product.flavors[0]) || "Mesh Coil"}
            </p>
          ) : (
            <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
              100% Authentic • Instant Delivery
            </p>
          )}

          {/* Star Rating & Reviews */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-800">
              {product.rating}
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">
              ({product.reviewsCount || 100}+)
            </span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
            <span className="text-sm sm:text-base font-bold text-slate-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="text-[10px] sm:text-xs text-slate-400 line-through font-semibold">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                {discountPercent && (
                  <span className="px-1.5 py-0.2 rounded-full bg-rose-50 text-rose-600 font-bold text-[9px] sm:text-[10px] border border-rose-100">
                    {discountPercent}% OFF
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        {/* 3. ACTION BUTTONS & QUANTITY SELECTOR */}
        <div className="space-y-1.5 pt-1 border-t border-slate-100">
          {/* Row: [- 1 +] Stepper + Add to Cart Button */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-0.5 shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 font-bold hover:bg-slate-100 transition-colors text-[11px] cursor-pointer"
              >
                -
              </button>
              <span className="w-4 sm:w-5 text-center text-[10px] sm:text-xs font-bold text-slate-900 select-none">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 font-bold hover:bg-slate-100 transition-colors text-[11px] cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 h-6 sm:h-7 px-2 bg-[#064e3b] hover:bg-[#043d2e] text-white rounded-lg font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs active:scale-95 transition-all cursor-pointer truncate"
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3 h-3 text-emerald-300 shrink-0" />
                  <span className="truncate">Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3 h-3 shrink-0" />
                  <span className="truncate">Add to Cart</span>
                </>
              )}
            </button>
          </div>

          {/* Full Width Buy via WhatsApp Button */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1.5 sm:py-2 px-2.5 rounded-lg bg-[#eafaf1] hover:bg-[#dcfce7] border border-emerald-200 text-emerald-950 font-bold text-[10px] sm:text-xs flex items-center justify-between transition-colors shadow-2xs"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="h-4 w-4 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </span>
              <span className="truncate">Buy via WhatsApp</span>
            </div>
            <ChevronRight className="w-3 h-3 text-emerald-800 shrink-0 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
