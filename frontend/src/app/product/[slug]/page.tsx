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
          url: product.image || "/products/ebcreate-bc5000-disposable-pod-device.webp",
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
    : `https://vapestoregurugram.com${product.image || "/products/ebcreate-bc5000-disposable-pod-device.webp"}`;

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
      validFrom: "2024-01-01",
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
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount || 120,
    },
  };

  const productFaqs = [
    {
      q: `Is ${product.name} 100% authentic and original?`,
      a: `Yes, every ${product.name} sold at Vape Store Gurgaon comes in factory-sealed packaging with a verifiable anti-counterfeit scratch-off security QR code. You can verify it directly on the manufacturer's official security portal.`,
    },
    {
      q: `How fast is delivery for ${product.name} in Gurgaon & Delhi NCR?`,
      a: `We provide instant 30 to 60-minute express doorstep delivery across all sectors of Gurgaon (DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road), as well as same-day express delivery across South Delhi, Central Delhi, and Noida with Cash on Delivery (COD) and UPI.`,
    },
    {
      q: `Can I order ${product.name} with Cash on Delivery (COD)?`,
      a: `Yes! We accept Cash on Delivery (COD) as well as doorstep UPI (Google Pay, PhonePe, Paytm) across all locations in Gurgaon and Delhi NCR.`,
    },
    ...(product.puffs
      ? [
          {
            q: `How long will ${product.puffs.toLocaleString()} puffs last?`,
            a: `${product.puffs.toLocaleString()} puffs typically lasts between 2 to 4 weeks depending on personal vaping frequency. The rechargeable Type-C battery ensures you get every last drop of e-liquid.`,
          },
        ]
      : [
          {
            q: `How do I maintain and care for ${product.name}?`,
            a: `Keep the device charged with a standard 5V/1A USB Type-C adapter, avoid chain-vaping when the pod liquid is low, and store it in a cool, dry place away from direct sunlight.`,
          },
        ]),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProductDetailClient product={product} faqs={productFaqs} />
    </>
  );
}
