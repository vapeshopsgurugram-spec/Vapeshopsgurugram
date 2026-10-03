import React from "react";
import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "Contact Us & Express Delivery | " + STORE_INFO.name,
  description:
    "Order authentic disposable vapes and pods online in Gurgaon. Call or WhatsApp +91 89509 53934 for 30-60 minute express delivery across DLF, Cyber City, and Delhi NCR.",
  keywords: [
    "Contact Vape Shop Gurgaon",
    "WhatsApp vape order Gurugram",
    "Vape delivery phone number Gurgaon",
    "DLF Phase 4 vape store",
    "Same day vape delivery Delhi NCR",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Fast Delivery | " + STORE_INFO.name,
    description: "Instant 30-60 min doorstep vape delivery across Gurgaon & Delhi NCR. WhatsApp +91 89509 53934.",
    url: "https://vapeshopsgurugram.com/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Vapeshopsgurugram",
    description: "Contact Vapeshopsgurugram for doorstep vape delivery across Gurugram and Delhi NCR.",
    url: "https://vapeshopsgurugram.com/contact",
    mainEntity: {
      "@type": "VapeShop",
      name: "Vapeshopsgurugram",
      telephone: STORE_INFO.phone,
      url: "https://vapeshopsgurugram.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Galleria Market, DLF Phase 4",
        addressLocality: "Gurugram",
        postalCode: "122002",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      openingHours: "Mo-Su 10:00-23:30",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="min-h-screen bg-slate-50/70 pb-20 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactClient />
        </div>
      </main>
    </>
  );
}
