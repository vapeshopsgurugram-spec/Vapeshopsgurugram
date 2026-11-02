import { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogs";
import { GURGAON_AREAS } from "@/data/areas";
import { DELHI_AREAS } from "@/data/delhi_areas";
import { NOIDA_AREAS } from "@/data/noida_areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vapestoregurugram.com";

  // Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/delhi`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/noida`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Category Pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Gurgaon Micro-Locality / Sector Landing Pages (Primary Core SEO - Untouched)
  const gurgaonPages: MetadataRoute.Sitemap = GURGAON_AREAS.map((area) => ({
    url: `${baseUrl}/gurgaon/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.88,
  }));

  // Delhi NCR Locality Landing Pages
  const delhiPages: MetadataRoute.Sitemap = DELHI_AREAS.map((area) => ({
    url: `${baseUrl}/delhi/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.88,
  }));

  // Noida NCR Locality Landing Pages
  const noidaPages: MetadataRoute.Sitemap = NOIDA_AREAS.map((area) => ({
    url: `${baseUrl}/noida/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.88,
  }));

  // Dynamic Product Pages
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.slug || product.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // Dynamic Blog Guides Pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...gurgaonPages,
    ...delhiPages,
    ...noidaPages,
    ...productPages,
    ...blogPages,
  ];
}
