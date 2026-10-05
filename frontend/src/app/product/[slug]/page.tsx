import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, STORE_INFO } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | " + STORE_INFO.name,
    };
  }

  const productKeywords = [
    product.name,
    `${product.name} Gurgaon`,
    `${product.name} Gurugram`,
    `${product.name} price Delhi NCR`,
    `Buy ${product.name} online`,
    `${product.brand} Gurgaon`,
    `${product.brand} vape store Gurugram`,
    `${product.name} cash on delivery`,
    `${product.name} express delivery DLF Cyber City`,
    ...(product.flavors || []).map((f: string) => `${product.name} ${f}`),
  ];

  return {
    title: `${product.name} | Vape Store Gurgaon`,
    description: product.description,
    keywords: productKeywords,
    openGraph: {
      title: `${product.name} - ₹${product.price} | Vape Store Gurgaon`,
      description: product.description,
      images: [
        {
          url: product.image || "/products/elfbar-gh23000-bluerazz.webp",
          alt: `${product.name} | Vape Store Gurgaon`,
        },
      ],
    },
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const absoluteImageUrl = product.image?.startsWith("http")
    ? product.image
    : `https://vapestoregurugram.com${product.image || "/products/elfbar-gh23000-bluerazz.webp"}`;

  // Schema.org JSON-LD for Google Rich Results
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteImageUrl,
    description: product.description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || "Vape Store Gurgaon",
    },
    offers: {
      "@type": "Offer",
      url: `https://vapestoregurugram.com/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vape Store Gurgaon",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 2,
        returnMethod: "https://schema.org/ReturnInStore",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount || 120,
    },
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
        name: "Products",
        item: "https://vapestoregurugram.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://vapestoregurugram.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
