/**
 * Central Products & Store Data
 * Used by backend API routes and builds
 */

const STORE_INFO = {
  "name": "Vape Store Gurgaon",
  "brandName": "Vape Store Gurgaon",
  "cityTag": "IN GURGAON",
  "domain": "vapestoregurugram.com",
  "phone": "+91 83979 23221",
  "whatsappNumber": "918397923221",
  "email": "orders@vapestoregurugram.com",
  "city": "Gurgaon",
  "address": "Galleria Market, DLF Phase 4, Gurgaon, Haryana 122002"
};

const CATEGORIES = [
  {
    "id": "disposables",
    "name": "Disposable Vapes",
    "slug": "disposable-vapes",
    "count": 28
  },
  {
    "id": "pod-systems",
    "name": "Pod Systems & Kits",
    "slug": "pod-systems",
    "count": 19
  },
  {
    "id": "e-liquids",
    "name": "Nic Salts & E-Liquids",
    "slug": "e-liquids",
    "count": 3
  },
  {
    "id": "coils-pods",
    "name": "Replacement Coils & Pods",
    "slug": "coils-pods",
    "count": 2
  }
];

const PRODUCTS = [
  {
    "id": "p-elfbar-bc5000-grape-energy",
    "slug": "elfbar-bc5000-grape-energy-disposable-vape",
    "aliasSlugs": [
      "elfbar-bc5000-grape-energy",
      "elf-bar-bc5000-grape",
      "bc5000-grape-energy",
      "elfbar-grape-energy"
    ],
    "name": "Elfbar BC5000 Disposable Vape (Grape Energy)",
    "subtitle": "5,000 Puffs | Dual Mesh Coil | 650mAh Rechargeable | Grape Energy Flavor",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Elfbar",
    "category": "disposable-vapes",
    "price": 1399,
    "originalPrice": 1800,
    "rating": 4.9,
    "reviewsCount": 310,
    "soldCount": "2.1k+",
    "badge": "Grape Energy Edition",
    "puffs": 5000,
    "features": [
      {
        "text": "5,000 Pure Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "diamond"
      },
      {
        "text": "Grape Energy Fusion",
        "icon": "leaf"
      },
      {
        "text": "Type-C Rechargeable",
        "icon": "cloud"
      }
    ],
    "description": "The world-famous Elfbar BC5000 in juicy Grape Energy blends crisp sweet grapes with a revitalizing energy drink kick. Delivering up to 5,000 dense, flavorful puffs with an advanced dual mesh coil system and rapid Type-C rechargeability in Gurgaon.",
    "productDetails": [
      "100% Genuine Elfbar device with authentic anti-counterfeit QR scratch security code",
      "Ergonomic flagon silhouette with soft gradient finish and comfortable grip",
      "High-efficiency dual mesh coil ensuring consistent flavor delivery until the last drop",
      "650mAh rechargeable battery supporting ultra-fast Type-C charging",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Grape Energy",
      "Watermelon Ice",
      "Blue Razz Ice",
      "Strawberry Kiwi",
      "Peach Mango Watermelon",
      "Triple Berry Ice"
    ],
    "specifications": {
      "Puff Count": "Up to 5,000 Puffs",
      "E-Liquid Capacity": "13ml Pre-Filled",
      "Battery Capacity": "650mAh Rechargeable",
      "Charging Port": "Type-C Fast Charging",
      "Coil Type": "Dual Mesh Coil System",
      "Nicotine Strength": "50mg (5%)",
      "Edition": "Official Grape Energy Edition"
    },
    "inStock": true,
    "image": "/products/1.jpg",
    "cardImage": "/products/1.jpg",
    "themeGradient": "from-purple-900/60 via-purple-600/30 to-amber-500/20"
  },
  {
    "id": "p-nasty-bolt-50k-hyper-puff",
    "slug": "nasty-bolt-50k-hyper-puff-disposable-vape",
    "aliasSlugs": [
      "nasty-bolt-50k",
      "nasty-50k-hyper-puff",
      "bolt-50k-puff-vape",
      "nasty-bolt-disposable"
    ],
    "name": "Nasty Bolt 50K Hyper Puff Disposable Vape",
    "subtitle": "50,000 Hyper Puffs | Dual Mesh Coil | 3 Mode Selection | Airflow Control",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Nasty Juice",
    "category": "disposable-vapes",
    "price": 2599,
    "originalPrice": 3400,
    "rating": 5,
    "reviewsCount": 195,
    "soldCount": "1.4k+",
    "badge": "50K Hyper Puff",
    "puffs": 50000,
    "features": [
      {
        "text": "50,000 Hyper Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "diamond"
      },
      {
        "text": "3-Mode Dynamic Control",
        "icon": "leaf"
      },
      {
        "text": "Super Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Nasty Bolt 50K Hyper Puff establishes a breakthrough standard with 50,000 massive puffs, 10% extra puff reserve, 3-mode dynamic power selection, dual mesh heating, and precision slider airflow control. Available with 30-min delivery in Gurgaon.",
    "productDetails": [
      "100% Original Nasty product with scannable anti-counterfeit verification QR code",
      "Dynamic control display featuring 3 wattage presets for custom cloud density",
      "Dual mesh coil system engineered for authentic Nasty Juice 50VG/50PG formulation",
      "Adjustable bottom slider airflow control for MTL and RDL vaping styles",
      "Super-fast Type-C quick charging with extended battery endurance"
    ],
    "flavors": [
      "Blueberry Ice",
      "Watermelon Ice",
      "Double Apple",
      "Grape Berry Ice",
      "Slow Blow Pineapple",
      "Mango Ice"
    ],
    "specifications": {
      "Puff Count": "Up to 50,000 Hyper Puffs",
      "E-Liquid Ratio": "50VG / 50PG Formulation",
      "Coil System": "Dual Mesh Coil",
      "Output Control": "3 Mode Dynamic Selection",
      "Airflow": "Precision Slider Control",
      "Nicotine Strength": "50mg (5%)",
      "Charging": "Super Fast Type-C"
    },
    "inStock": true,
    "image": "/products/2.jpg",
    "cardImage": "/products/2.jpg",
    "themeGradient": "from-lime-500/30 via-emerald-600/20 to-blue-600/20"
  },
  {
    "id": "p-lost-mary-mt35000-turbo-pineapple-lime",
    "slug": "lost-mary-mt35000-turbo-disposable-vape-pineapple-lime",
    "aliasSlugs": [
      "lost-mary-mt35000-turbo",
      "lost-mary-35k-turbo",
      "mt35000-turbo-vape",
      "lost-mary-turbo-35k"
    ],
    "name": "Lost Mary MT35000 Turbo Disposable Vape (Pineapple Lime)",
    "subtitle": "35,000 Turbo Puffs | Dual Mesh Turbo Mode | Type-C Fast Charge | Pineapple Lime",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Lost Mary",
    "category": "disposable-vapes",
    "price": 2399,
    "originalPrice": 3000,
    "rating": 4.9,
    "reviewsCount": 220,
    "soldCount": "1.2k+",
    "badge": "Turbo Mode 35K",
    "puffs": 35000,
    "features": [
      {
        "text": "35,000 Turbo Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mesh Turbo Heating",
        "icon": "diamond"
      },
      {
        "text": "Pineapple Lime Fusion",
        "icon": "leaf"
      },
      {
        "text": "Smart Display Screen",
        "icon": "cloud"
      }
    ],
    "description": "Lost Mary MT35000 Turbo delivers sensational vapor volume with dual mesh Turbo Mode and up to 35,000 puffs. Refresh yourself with tangy tropical Pineapple Lime, smart digital status indicators, and express 30-min courier in Gurgaon.",
    "productDetails": [
      "Genuine Lost Mary product with scratch verification seal",
      "Dual mesh coil system with instant Turbo button for amplified clouds and flavor",
      "High-definition display monitoring real-time battery and e-juice levels",
      "Ergonomic mouthpiece with splash-proof airflow design",
      "Quick Type-C charging port with overcharge safety protection"
    ],
    "flavors": [
      "Pineapple Lime",
      "Watermelon Ice",
      "Blue Razz Ice",
      "Miami Mint",
      "Baja Splash",
      "Strawberry Banana"
    ],
    "specifications": {
      "Puff Count": "Up to 35,000 Puffs (Turbo Mode)",
      "Coil Technology": "Dual Mesh Turbo Heating",
      "Display": "Digital Battery & E-Liquid Gauge",
      "Charging": "Type-C Fast Charging",
      "Nicotine Strength": "50mg (5%)",
      "Edition": "Official Turbo Edition"
    },
    "inStock": true,
    "image": "/products/3.jpg",
    "cardImage": "/products/3.jpg",
    "themeGradient": "from-cyan-500/30 via-amber-400/20 to-orange-500/20"
  },
  {
    "id": "p-iget-10000-puffs-disposable-pod",
    "slug": "iget-10000-puffs-disposable-pod-device",
    "aliasSlugs": [
      "iget-10000",
      "iget-10000-puffs",
      "iget-bar-10k",
      "iget-crystal-10000"
    ],
    "name": "iGET 10000 Puffs Disposable Pod Device",
    "subtitle": "10,000 Puffs | Transparent Crystal Shell | Mesh Coil | Exotic Profiles",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "iGET",
    "category": "disposable-vapes",
    "price": 1699,
    "originalPrice": 2200,
    "rating": 4.8,
    "reviewsCount": 280,
    "soldCount": "1.8k+",
    "badge": "Crystal Shell 10K",
    "puffs": 10000,
    "features": [
      {
        "text": "10,000 Rich Puffs",
        "icon": "battery"
      },
      {
        "text": "Transparent Crystal Armor",
        "icon": "diamond"
      },
      {
        "text": "Exotic Gourmet Flavors",
        "icon": "leaf"
      },
      {
        "text": "High-Efficiency Mesh",
        "icon": "cloud"
      }
    ],
    "description": "The sleek iGET 10,000 Puffs Disposable Pod features a dazzling transparent crystal outer casing encasing bold art illustrations. Enjoy gourmet profiles like Popcorn, Vanilla Custard, and Orange Bark Tobacco with rapid Gurgaon doorstep delivery.",
    "productDetails": [
      "100% Authentic iGET device with manufacturer serial & holographic badge",
      "Heavy-duty transparent acrylic casing resistant to drops and scratches",
      "Advanced sub-ohm style mesh coil delivering velvety vapor and instant nicotine satisfaction",
      "Pre-filled with premium grade nicotine salt formulation",
      "Express 30–60 min delivery across DLF Cyber City, Golf Course Road & Gurgaon sectors"
    ],
    "flavors": [
      "Vanilla Custard",
      "Popcorn",
      "Orange Bark Tobacco",
      "Blueberry Ice",
      "Strawberry Watermelon",
      "Passion Fruit Grape"
    ],
    "specifications": {
      "Puff Count": "Up to 10,000 Puffs",
      "Casing": "Dual-Layer Crystal Acrylic",
      "Coil Type": "Mesh Vaporization Core",
      "Nicotine Strength": "50mg (5%)",
      "Safety": "Over-puff & Short Circuit Cutoff"
    },
    "inStock": true,
    "image": "/products/4.jpg",
    "cardImage": "/products/4.jpg",
    "themeGradient": "from-amber-600/30 via-red-600/20 to-yellow-500/20"
  },
  {
    "id": "p-geekvape-b60-aegis-boost-2",
    "slug": "geekvape-b60-aegis-boost-2-pod-mod-kit",
    "aliasSlugs": [
      "geekvape-b60",
      "aegis-boost-2",
      "geekvape-boost-b60",
      "b60-pod-mod"
    ],
    "name": "Geekvape B60 (Aegis Boost 2) 60W Pod Mod Kit",
    "subtitle": "60W Max Output | 2000mAh Battery | IP68 Tri-Proof | Leakproof Top Airflow",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Geekvape",
    "category": "pod-systems",
    "price": 4499,
    "originalPrice": 5500,
    "rating": 4.9,
    "reviewsCount": 340,
    "soldCount": "2.5k+",
    "badge": "IP68 Tri-Proof",
    "puffs": null,
    "features": [
      {
        "text": "60W Smart Output",
        "icon": "battery"
      },
      {
        "text": "2000mAh Long-Life Cell",
        "icon": "diamond"
      },
      {
        "text": "IP68 Water/Dust/Shock",
        "icon": "shield"
      },
      {
        "text": "Top Airflow Leak-Proof",
        "icon": "cloud"
      }
    ],
    "description": "Geekvape B60 (Aegis Boost 2) is a legendary durable pod mod boasting IP68 rating water, dust, and shock resistance. Features AS-Chip 3.0 with Smart mode, 2000mAh internal battery, 60W max output, and 0.96-inch curved LED display in Gurgaon.",
    "productDetails": [
      "100% Genuine Geekvape product with scratch security code and warranty",
      "Military-grade IP68 tri-proof chassis featuring premium zinc alloy and genuine leather",
      "Top-airflow leak-resistant pod cartridge design compatible with Geekvape B-Series coils",
      "A-Lock physical slider switch prevents accidental firing in pockets or bags",
      "AS-Chip 3.0 automatically detects coil resistance to prevent burnt hits"
    ],
    "flavors": [
      "Aura Blue",
      "Silver Chrome",
      "Midnight Black",
      "Golden Red",
      "Bottle Green",
      "Rainbow"
    ],
    "specifications": {
      "Output Power": "5W - 60W",
      "Battery Capacity": "2000mAh Built-in",
      "Display": "0.96-inch TFT Color Screen",
      "Protection": "IP68 Tri-Proof Rating",
      "Charging": "Type-C 5V/2A Fast Charge",
      "Coil Compatibility": "Geekvape B Series Coils"
    },
    "inStock": true,
    "image": "/products/5.jpg",
    "cardImage": "/products/5.jpg",
    "themeGradient": "from-blue-600/30 via-cyan-500/20 to-slate-800/30"
  },
  {
    "id": "p-lost-mary-bm6000-power-screen",
    "slug": "lost-mary-bm6000-disposable-vape-power-display-screen",
    "aliasSlugs": [
      "lost-mary-bm6000",
      "bm6000-lost-mary",
      "lost-mary-6000-puffs",
      "bm6000-vape"
    ],
    "name": "Lost Mary BM6000 Disposable Vape (Power Display Screen)",
    "subtitle": "6,000 Puffs | Real-Time Power Display Screen | Detachable Liquid Design | Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Lost Mary",
    "category": "disposable-vapes",
    "price": 1399,
    "originalPrice": 1950,
    "rating": 4.8,
    "reviewsCount": 260,
    "soldCount": "1.6k+",
    "badge": "Power Screen 6K",
    "puffs": 6000,
    "features": [
      {
        "text": "6,000 Pure Puffs",
        "icon": "battery"
      },
      {
        "text": "Digital Power Screen",
        "icon": "diamond"
      },
      {
        "text": "Detachable E-Liquid Tank",
        "icon": "leaf"
      },
      {
        "text": "Type-C Quick Recharge",
        "icon": "cloud"
      }
    ],
    "description": "Lost Mary BM6000 elevates convenience with a built-in power display screen, 6,000 delicious puffs, and an innovative detachable e-liquid system. Enjoy iconic flavors like Fruit Punch and Kiwi Passion Fruit Guava delivered express across Gurgaon.",
    "productDetails": [
      "100% Original Lost Mary with verifiable anti-counterfeit QR code",
      "Smart digital power screen shows real-time battery percentage",
      "Detachable e-liquid pod system preserves freshness and eliminates dry hits",
      "Upgraded QUAQ mesh coil for intense flavor fidelity from first puff to last",
      "Doorstep Cash on Delivery (COD) and instant UPI across Gurgaon and Delhi NCR"
    ],
    "flavors": [
      "Fruit Punch",
      "Kiwi Passion Fruit Guava",
      "Cherry Peach Lemonade",
      "Blueberry Cherry Cranberry",
      "Strawberry Kiwi",
      "Fizzy Cherry",
      "Hawaii Sunrise"
    ],
    "specifications": {
      "Puff Count": "Up to 6,000 Puffs",
      "Screen": "Digital Power Level Display",
      "System": "Detachable E-Liquid System",
      "Coil Type": "QUAQ Mesh Coil",
      "Charging": "Type-C Rechargeable",
      "Nicotine Strength": "20mg / 50mg"
    },
    "inStock": true,
    "image": "/products/6.jpg",
    "cardImage": "/products/6.jpg",
    "themeGradient": "from-pink-600/30 via-purple-600/20 to-blue-600/20"
  },
  {
    "id": "p-elfbar-af5000-dedicated-refill",
    "slug": "elfbar-af5000-rechargeable-disposable-vape",
    "aliasSlugs": [
      "elfbar-af5000",
      "af5000-disposable",
      "elf-bar-af5000",
      "af5000-refillable"
    ],
    "name": "Elfbar AF5000 Rechargeable Disposable Vape",
    "subtitle": "5,000 Puffs | 10ml Auto-Refill Container + 2ml Pod | QUAQ Mesh Coil | Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Elfbar",
    "category": "disposable-vapes",
    "price": 1299,
    "originalPrice": 1800,
    "rating": 4.9,
    "reviewsCount": 290,
    "soldCount": "1.7k+",
    "badge": "QUAQ Tech 5K",
    "puffs": 5000,
    "features": [
      {
        "text": "5,000 Ultra Puffs",
        "icon": "battery"
      },
      {
        "text": "10ml Auto-Feed Tank",
        "icon": "diamond"
      },
      {
        "text": "QUAQ Mesh Heating",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charge",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar AF5000 pioneers continuous vaping with a dedicated 10ml e-liquid refill container that automatically feeds into a 2ml QUAQ mesh coil pod. Offers 5,000 authentic puffs in Lemon Lime, Blueberry Ice, and more with 30-min Gurgaon delivery.",
    "productDetails": [
      "Authentic Elfbar product with security QR verification seal",
      "Clever auto-refill design eliminates burnt hits and extends coil life",
      "Precision QUAQ mesh coil delivers 500% flavor longevity",
      "650mAh rechargeable battery with Type-C cable input",
      "Complies with international quality standards with 20mg/ml smooth nicotine"
    ],
    "flavors": [
      "Lemon Lime",
      "Blueberry Ice",
      "Sour Pineapple Ice",
      "Blue Razz Lemonade",
      "Watermelon Ice",
      "Blueberry Sour Raspberry",
      "Cherry Ice",
      "Strawberry Ice",
      "Strawberry Raspberry Cherry Ice"
    ],
    "specifications": {
      "Puff Count": "Up to 5,000 Puffs",
      "E-Liquid System": "10ml Refill Container + 2ml Pod",
      "Coil": "QUAQ Mesh Coil",
      "Nicotine Strength": "20mg/ml (2%)",
      "Battery": "650mAh Rechargeable Type-C"
    },
    "inStock": true,
    "image": "/products/7.jpg",
    "cardImage": "/products/7.jpg",
    "themeGradient": "from-pink-500/30 via-yellow-400/20 to-lime-500/20"
  },
  {
    "id": "p-voopoo-drag-vmate-gift-set",
    "slug": "voopoo-drag-and-vmate-pod-limited-edition-dual-gift-set",
    "aliasSlugs": [
      "voopoo-drag-vmate-set",
      "drag-vmate-gift-set",
      "voopoo-dual-kit",
      "drag-and-vmate"
    ],
    "name": "VOOPOO Drag & VMATE Pod Limited Edition Dual Device Gift Set",
    "subtitle": "2-in-1 Dual Mod Kit | Drag Device + VMATE Pod | Gene Chip | 2x Pods Included",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "VOOPOO",
    "category": "pod-systems",
    "price": 4400,
    "originalPrice": 5500,
    "rating": 5,
    "reviewsCount": 160,
    "soldCount": "890+",
    "badge": "Limited 2-in-1 Set",
    "puffs": null,
    "features": [
      {
        "text": "2 Complete Devices",
        "icon": "battery"
      },
      {
        "text": "Gene Chip Technology",
        "icon": "diamond"
      },
      {
        "text": "Luxury Leather Finish",
        "icon": "leaf"
      },
      {
        "text": "Dual Pods & Cable Included",
        "icon": "cloud"
      }
    ],
    "description": "The crown jewel of vape gift sets: VOOPOO Drag & VMATE Pod Limited Edition features a full-powered Drag sub-ohm pod mod wrapped in embossed crimson leather, alongside an ultra-slim VMATE pod device. Perfect all-day duo in Gurgaon.",
    "productDetails": [
      "100% Genuine VOOPOO limited edition gift set with serial authentication",
      "Includes 1x VOOPOO Drag device, 1x VMATE Pod device, 2x replacement cartridges & Type-C cable",
      "Powered by the cutting-edge Gene Chip for instantaneous 0.001s firing speed",
      "Premium presentation packaging ideal for personal luxury or premium gifting",
      "Express same-day delivery with Cash on Delivery across Gurgaon & Delhi NCR"
    ],
    "flavors": [
      "Crimson Red Leather & Matte Black",
      "Chestnut Brown Leather",
      "Classic Carbon Black"
    ],
    "specifications": {
      "Included Devices": "VOOPOO Drag Mod + VMATE Pod Device",
      "Chipset": "GENE AI Chipset",
      "Cartridges Included": "2x Replacement Pods",
      "Charging": "Type-C Fast Charging",
      "Packaging": "Luxury Rigid Presentation Gift Box"
    },
    "inStock": true,
    "image": "/products/8.jpg",
    "cardImage": "/products/8.jpg",
    "themeGradient": "from-rose-950/60 via-red-800/30 to-amber-600/20"
  },
  {
    "id": "p-voopoo-argus-top-fill-cartridge-v2",
    "slug": "voopoo-argus-top-fill-pod-cartridge-v2-3ml-pack-of-3",
    "aliasSlugs": [
      "voopoo-argus-v2-pods",
      "argus-top-fill-cartridge-v2",
      "argus-3ml-pods",
      "argus-pod-pack-of-3"
    ],
    "name": "VOOPOO Argus Top Fill Pod Cartridge V2 (3ml, 0.7Ω - Pack of 3)",
    "subtitle": "Pack of 3 | 3ml Capacity | 0.7 Ohm Mesh | UCOSM Code 2.0 Leakproof",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "VOOPOO",
    "category": "coils-pods",
    "price": 1500,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewsCount": 420,
    "soldCount": "3.4k+",
    "badge": "Authentic Pack of 3",
    "puffs": null,
    "features": [
      {
        "text": "Pack of 3 Cartridges",
        "icon": "battery"
      },
      {
        "text": "3ml Enlarged Capacity",
        "icon": "diamond"
      },
      {
        "text": "UCOSM Code 2.0 Anti-Leak",
        "icon": "leaf"
      },
      {
        "text": "0.7Ω Mesh Coil",
        "icon": "cloud"
      }
    ],
    "description": "Upgrade your Argus series pod vape with the official VOOPOO Argus Top Fill Cartridge V2. Boasting 3ml juice capacity, effortless top-filling without removing the pod, and upgraded UCOSM Code 2.0 leakproof technology. Delivered fast in Gurgaon.",
    "productDetails": [
      "Genuine VOOPOO replacement pods with factory security holographic sticker",
      "Pack contains 3 individually sealed replacement cartridges",
      "Convenient top-fill silicone stopper allows refilling without detaching pod",
      "Compatible with Argus G, Argus P1, Argus G2, Argus P2, and Argus Pod systems",
      "0.7 ohm integrated mesh coil engineered for superior salt nic and freebase flavors"
    ],
    "flavors": [
      "0.7 Ohm (Pack of 3)",
      "0.4 Ohm (Pack of 3)"
    ],
    "specifications": {
      "Capacity": "3ml E-Liquid",
      "Resistance": "0.7 Ohm Integrated Mesh",
      "Filling System": "Top-Fill Silicone Plug",
      "Quantity": "3 Pods per Box",
      "Leak Protection": "UCOSM Code 2.0 Multi-Layer"
    },
    "inStock": true,
    "image": "/products/9.jpg",
    "cardImage": "/products/9.jpg",
    "themeGradient": "from-yellow-400/30 via-amber-500/20 to-blue-500/20"
  },
  {
    "id": "p-voopoo-argus-g2-mini-double-pack",
    "slug": "voopoo-argus-g2-mini-pod-kit-buy-1-get-2-kits",
    "aliasSlugs": [
      "argus-g2-mini",
      "voopoo-argus-g2-mini-offer",
      "argus-g2-mini-kit",
      "argus-g2-mini-double-pack"
    ],
    "name": "VOOPOO Argus G2 Mini Pod Kit (Special Value Double Pack)",
    "subtitle": "Buy 1 Get 2 Kits | 1200mAh Battery | 30W Max Output | 3X Flavor Upgrade",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "VOOPOO",
    "category": "pod-systems",
    "price": 2499,
    "originalPrice": 3400,
    "rating": 4.9,
    "reviewsCount": 310,
    "soldCount": "1.9k+",
    "badge": "Buy 1 Get 2 Offer",
    "puffs": null,
    "features": [
      {
        "text": "Special Buy 1 Get 2 Value",
        "icon": "battery"
      },
      {
        "text": "1200mAh Mega Battery",
        "icon": "diamond"
      },
      {
        "text": "30W Max Intelligent Power",
        "icon": "leaf"
      },
      {
        "text": "3X Flavor Upgrade",
        "icon": "cloud"
      }
    ],
    "description": "Unbeatable double bundle! The VOOPOO Argus G2 Mini delivers 30W output, 1200mAh battery life, and 3X flavor enhancement in a super sleek, buttonless draw-activated chassis. Grab this limited offer with 30-min express courier in Gurgaon.",
    "productDetails": [
      "Official VOOPOO limited promotional double pack with authenticity guarantee",
      "Compact aluminum alloy body with LED battery status indicator light",
      "1200mAh high-density battery ensures uninterrupted vaping for up to 3 days",
      "Fully compatible with all VOOPOO Argus Top Fill and Side Fill pod cartridges",
      "Precise stepless airflow slider on the side for tailored MTL to RDL draws"
    ],
    "flavors": [
      "Violet Purple",
      "Spring Green",
      "Amber Orange",
      "Moonlit Silver",
      "Midnight Black"
    ],
    "specifications": {
      "Output Wattage": "5W - 30W",
      "Battery Capacity": "1200mAh Built-in",
      "Activation": "Auto-Draw Firing",
      "Charging": "Type-C 5V/1A",
      "Cartridge Compatibility": "VOOPOO Argus Pod Series"
    },
    "inStock": true,
    "image": "/products/10.jpg",
    "cardImage": "/products/10.jpg",
    "themeGradient": "from-purple-600/30 via-orange-500/20 to-emerald-500/20"
  },
  {
    "id": "p-uwell-caliburn-g4-mini",
    "slug": "uwell-caliburn-g4-mini-pod-system-kit",
    "aliasSlugs": [
      "caliburn-g4-mini",
      "uwell-g4-mini",
      "caliburn-g4",
      "uwell-caliburn-g4"
    ],
    "name": "Uwell Caliburn G4 Mini Pod System Kit",
    "subtitle": "Compact Pocket Powerhouse | Pro-FOCS 3.0 Flavor | Fast Type-C Charging",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 2600,
    "originalPrice": 3300,
    "rating": 4.8,
    "reviewsCount": 190,
    "soldCount": "1.1k+",
    "badge": "New G4 Series",
    "puffs": null,
    "features": [
      {
        "text": "Ultra-Slim Form Factor",
        "icon": "battery"
      },
      {
        "text": "Pro-FOCS 3.0 Technology",
        "icon": "diamond"
      },
      {
        "text": "RGB Pulse Battery Gauge",
        "icon": "leaf"
      },
      {
        "text": "Quick Type-C Recharge",
        "icon": "cloud"
      }
    ],
    "description": "The next chapter in the Caliburn legacy: Uwell Caliburn G4 Mini boasts an ultra-compact footprint, upgraded Pro-FOCS 3.0 flavor technology, and an integrated LED battery bar. Order in Gurgaon with Cash on Delivery and express 30-min dispatch.",
    "productDetails": [
      "100% Genuine Uwell pod system with anti-counterfeit QR code",
      "Minimalist lightweight chassis crafted from aircraft-grade aluminum alloy",
      "Uwell patented Pro-FOCS 3.0 tech extracts maximum notes from nic salts",
      "Dual activation: seamless draw-activated sensor with responsive firing",
      "Fast Type-C charging port reaches 80% charge in just 20 minutes"
    ],
    "flavors": [
      "Midnight Black",
      "Pearl White",
      "Ocean Blue Gradient",
      "Titanium Silver",
      "Ice Cyan"
    ],
    "specifications": {
      "Battery Capacity": "Integrated Rechargeable",
      "Flavor Tech": "Uwell Pro-FOCS 3.0",
      "Indicator": "RGB Pulse LED Indicator",
      "Pod Capacity": "2ml Refillable",
      "Charging": "Type-C Fast Charge"
    },
    "inStock": true,
    "image": "/products/11.jpg",
    "cardImage": "/products/11.jpg",
    "themeGradient": "from-lime-500/30 via-slate-900/40 to-emerald-500/20"
  },
  {
    "id": "p-uwell-caliburn-g5-koko",
    "slug": "uwell-caliburn-g5-koko-pod-system-1600mah",
    "aliasSlugs": [
      "caliburn-g5-koko",
      "uwell-g5-koko",
      "koko-g5",
      "caliburn-koko-g5"
    ],
    "name": "Uwell Caliburn G5 KOKO Pod System (1600mAh, LED Full Screen)",
    "subtitle": "1600mAh Mega Battery | Full Animated LED Screen | Top Airflow | Pro-FOCS",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 3099,
    "originalPrice": 3900,
    "rating": 5,
    "reviewsCount": 230,
    "soldCount": "1.5k+",
    "badge": "1600mAh Full Screen",
    "puffs": null,
    "features": [
      {
        "text": "1600mAh Mega Battery",
        "icon": "battery"
      },
      {
        "text": "Full Animated LED Screen",
        "icon": "diamond"
      },
      {
        "text": "Top Adjustable Airflow",
        "icon": "leaf"
      },
      {
        "text": "Pro-FOCS Flavor Core",
        "icon": "cloud"
      }
    ],
    "description": "The crown jewel of square KOKO vapes! Uwell Caliburn G5 KOKO packs an unprecedented 1600mAh battery, a futuristic animated cosmic LED front panel screen, top airflow control, and Pro-FOCS flavor extraction. Available across Gurgaon.",
    "productDetails": [
      "100% Original Uwell KOKO device with online serial verification",
      "Massive 1600mAh internal cell provides multiple days of continuous vaping",
      "Vibrant full-panel cosmic dynamic LED display showing battery percentage and animations",
      "Top airflow dial provides leak-free smooth draw customization from tight MTL to loose RDL",
      "Lanyard attachment loop included for hands-free EDC carrying"
    ],
    "flavors": [
      "Fantasy Pink Storm",
      "Cyber Black",
      "Cosmic Blue",
      "Space Silver"
    ],
    "specifications": {
      "Battery Capacity": "1600mAh Built-in",
      "Display": "Full Panel Dynamic Animated LED",
      "Airflow": "Top Adjustable Airflow Dial",
      "Pod System": "Caliburn G Series Cartridges",
      "Charging": "Type-C 2A Fast Charging"
    },
    "inStock": true,
    "image": "/products/12.jpg",
    "cardImage": "/products/12.jpg",
    "themeGradient": "from-pink-500/30 via-slate-900/50 to-purple-600/30"
  },
  {
    "id": "p-uwell-caliburn-g3-pro-35w",
    "slug": "uwell-caliburn-g3-pro-35w-pod-system-dynamic-ui",
    "aliasSlugs": [
      "caliburn-g3-pro",
      "uwell-g3-pro",
      "caliburn-g3-pro-35w",
      "g3-pro-pod-kit"
    ],
    "name": "Uwell Caliburn G3 Pro 35W Pod System (Full Screen Dynamic UI)",
    "subtitle": "35W Max Output | Full-Length Dynamic Screen | 1000mAh Battery | 3ml Pod",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 3199,
    "originalPrice": 4000,
    "rating": 4.9,
    "reviewsCount": 380,
    "soldCount": "2.8k+",
    "badge": "35W Flagship Pro",
    "puffs": null,
    "features": [
      {
        "text": "35W Max Adjustable Power",
        "icon": "battery"
      },
      {
        "text": "Full Screen Dynamic UI",
        "icon": "diamond"
      },
      {
        "text": "1000mAh Battery Capacity",
        "icon": "leaf"
      },
      {
        "text": "3ml Large G3 Pods",
        "icon": "cloud"
      }
    ],
    "description": "The world's first full-screen pod system! Uwell Caliburn G3 Pro commands up to 35W of power, an ultra-crisp edge-to-edge interactive display with robot animations, 1000mAh battery, and 3ml leak-resistant cartridges. Delivered in Gurgaon in 30 mins.",
    "productDetails": [
      "Authentic Uwell flagship kit with anti-counterfeit QR scratch sticker",
      "Stunning full-length front LCD display with customizable dynamic animation themes",
      "Variable wattage from 5W to 35W with 0.4 ohm pod support for rich RDL vapor",
      "1000mAh cell with ultra-fast 2A Type-C charging reach in 25 minutes",
      "Clear view juice window with 360-degree liquid visibility"
    ],
    "flavors": [
      "Midnight Black",
      "Emerald Green",
      "Champagne Gold",
      "Rose Pink",
      "Space Grey"
    ],
    "specifications": {
      "Output Power": "5W - 35W Adjustable",
      "Battery Capacity": "1000mAh Internal",
      "Screen": "Full-Length Interactive Display UI",
      "Pod Capacity": "3ml / 2ml Refillable",
      "Charging": "Type-C 2A Fast Charge"
    },
    "inStock": true,
    "image": "/products/13.jpg",
    "cardImage": "/products/13.jpg",
    "themeGradient": "from-amber-400/30 via-yellow-500/20 to-slate-900/40"
  },
  {
    "id": "p-uwell-caliburn-g3-25w-oled",
    "slug": "uwell-caliburn-g3-pod-kit-25w-oled-screen",
    "aliasSlugs": [
      "caliburn-g3",
      "uwell-g3",
      "caliburn-g3-kit",
      "caliburn-g3-25w"
    ],
    "name": "Uwell Caliburn G3 Pod Kit (25W OLED Screen, 900mAh)",
    "subtitle": "25W Max Output | 900mAh Battery | Clear OLED Display | Dual Airflow System",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 2699,
    "originalPrice": 3400,
    "rating": 4.8,
    "reviewsCount": 410,
    "soldCount": "3.1k+",
    "badge": "OLED Smart Pod",
    "puffs": null,
    "features": [
      {
        "text": "25W Max Wattage",
        "icon": "battery"
      },
      {
        "text": "900mAh Long-Life Battery",
        "icon": "diamond"
      },
      {
        "text": "OLED Information Display",
        "icon": "leaf"
      },
      {
        "text": "Dual Airflow Reversible Pod",
        "icon": "cloud"
      }
    ],
    "description": "The award-winning Uwell Caliburn G3 introduces a crisp OLED screen, 25W adjustable output, ultrasonic welded pods that eliminate leaking, and dual airflow orientation. Perfect for nicotine salts with express 30-min dispatch in Gurgaon.",
    "productDetails": [
      "100% Genuine Uwell device with anti-counterfeit QR code verification",
      "High-contrast OLED screen shows exact wattage, resistance, puff count, and battery",
      "Ultrasonic pod welding technology prevents e-liquid condensation and leakage",
      "Reversible pod insertion switches between tight MTL and airy RDL draw",
      "3 trigger modes: Lock Button, Draw Activated, or Dual Activation"
    ],
    "flavors": [
      "Midnight Black",
      "Pure Silver",
      "Navy Blue",
      "Forest Green",
      "Crimson Red"
    ],
    "specifications": {
      "Max Power": "25W Adjustable",
      "Battery": "900mAh Built-in",
      "Screen": "0.42-inch OLED Screen",
      "Pod Resistance": "0.6Ω / 0.9Ω Integrated Mesh",
      "Charging": "Type-C 2A Fast Charging"
    },
    "inStock": true,
    "image": "/products/14.jpg",
    "cardImage": "/products/14.jpg",
    "themeGradient": "from-blue-600/30 via-slate-800/40 to-emerald-600/20"
  },
  {
    "id": "p-bang-box-30000-puffs-boost",
    "slug": "bang-box-30000-puffs-disposable-vape-boost-mode",
    "aliasSlugs": [
      "bang-box-30000",
      "bang-box-30k",
      "bang-30k-boost",
      "bang-box-vape"
    ],
    "name": "Bang Box 30000 Puffs Disposable Vape (LED Smart Display & Boost Mode)",
    "subtitle": "30,000 Puffs | Turbo Boost Mode | Smart LED Display | 850mAh Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Bang Box",
    "category": "disposable-vapes",
    "price": 2499,
    "originalPrice": 3200,
    "rating": 4.9,
    "reviewsCount": 270,
    "soldCount": "1.9k+",
    "badge": "30K Turbo Boost",
    "puffs": 30000,
    "features": [
      {
        "text": "30,000 Turbo Puffs",
        "icon": "battery"
      },
      {
        "text": "BOOST Instant Cloud Mode",
        "icon": "diamond"
      },
      {
        "text": "LED Digital Power Display",
        "icon": "leaf"
      },
      {
        "text": "850mAh Type-C Cell",
        "icon": "cloud"
      }
    ],
    "description": "Unleash extreme puff longevity with Bang Box 30000 Puffs Disposable Vape! Featuring a dedicated Boost Mode switch for massive vapor clouds, real-time LED battery & juice screen, 850mAh Type-C battery, and delicious Strawberry Kiwi in Gurgaon.",
    "productDetails": [
      "Authentic Bang Box product with scratch QR authentication",
      "One-click Boost mode increases wattage for denser vapor and richer taste",
      "Digital LED front display monitors exact remaining battery and e-liquid levels",
      "High-grade mesh heating coil engineered for zero burnt taste",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Strawberry Kiwi",
      "Watermelon Ice",
      "Blueberry Mint",
      "Grape Berry Ice",
      "Mango Peach",
      "Sour Apple"
    ],
    "specifications": {
      "Puff Count": "Up to 30,000 Puffs",
      "Mode": "Regular Mode & Turbo Boost Mode",
      "Display": "Smart Digital LED Battery & Juice",
      "Battery": "850mAh Rechargeable Type-C",
      "Nicotine Strength": "50mg (5%)"
    },
    "inStock": true,
    "image": "/products/15.jpg",
    "cardImage": "/products/15.jpg",
    "themeGradient": "from-pink-500/30 via-yellow-400/20 to-cyan-500/20"
  },
  {
    "id": "p-uwell-caliburn-classic-kit",
    "slug": "uwell-caliburn-classic-pod-system-kit-original-edition",
    "aliasSlugs": [
      "caliburn-classic",
      "original-uwell-caliburn",
      "caliburn-pod-kit-grey",
      "caliburn-classic-520mah"
    ],
    "name": "Uwell Caliburn Classic Pod System Kit (Original Edition)",
    "subtitle": "520mAh Battery | 2ml Refillable Pod | Dual Firing Mechanism | Pro-FOCS Tech",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 2699,
    "originalPrice": 3400,
    "rating": 4.8,
    "reviewsCount": 490,
    "soldCount": "4.2k+",
    "badge": "Classic Legend",
    "puffs": null,
    "features": [
      {
        "text": "Lightweight 30g Body",
        "icon": "battery"
      },
      {
        "text": "Original Pro-FOCS Flavor",
        "icon": "diamond"
      },
      {
        "text": "Dual Firing (Button / Draw)",
        "icon": "leaf"
      },
      {
        "text": "Top-Fill 2ml Pod",
        "icon": "cloud"
      }
    ],
    "description": "The pod device that started it all! The legendary original Uwell Caliburn Pod Kit remains unmatched for clean throat hit, smooth draw, and effortless top-fill convenience. Ideal for daily nicotine salt vaping with express delivery in Gurgaon.",
    "productDetails": [
      "100% Genuine Uwell product with holographic security scratch code",
      "Ultra-portable aluminum alloy chassis weighing only 30 grams",
      "Patented Pro-FOCS flavor testing technology maximizes authentic e-liquid profile",
      "Dual firing mechanism: fire using the central button or simply inhale",
      "Included 2ml top-fill cartridge with magnetic connection and spare pod"
    ],
    "flavors": [
      "Space Grey",
      "Iris Purple",
      "Matte Black",
      "Royal Blue",
      "Crimson Red"
    ],
    "specifications": {
      "Battery Capacity": "520mAh Built-in",
      "Wattage Output": "11W Constant",
      "Pod Capacity": "2ml Refillable Top-Fill",
      "Coil Resistance": "1.4 Ohm Parallel Coil",
      "Weight": "30g Ultra-Light"
    },
    "inStock": true,
    "image": "/products/16.jpg",
    "cardImage": "/products/16.jpg",
    "themeGradient": "from-slate-700/30 via-slate-900/40 to-amber-600/20"
  },
  {
    "id": "p-vaporesso-gtx-one-pro-starter-kit",
    "slug": "vaporesso-gtx-one-pro-40w-starter-kit-with-gtx-tank",
    "aliasSlugs": [
      "gtx-one-pro",
      "vaporesso-gtx-one-pro",
      "gtx-one-kit",
      "vaporesso-gtx-one-40w"
    ],
    "name": "Vaporesso GTX ONE Pro 40W Starter Kit with GTX Tank",
    "subtitle": "40W Max Output | Corex Flavor Tech | Top Airflow Leakproof | OLED Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Vaporesso",
    "category": "pod-systems",
    "price": 3299,
    "originalPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 260,
    "soldCount": "1.8k+",
    "badge": "Corex Pro Tank",
    "puffs": null,
    "features": [
      {
        "text": "40W Adjustable Mod",
        "icon": "battery"
      },
      {
        "text": "COREX Flavor Tech Tank",
        "icon": "diamond"
      },
      {
        "text": "Top Airflow & Top Fill",
        "icon": "leaf"
      },
      {
        "text": "Lock Button Safety",
        "icon": "cloud"
      }
    ],
    "description": "Vaporesso GTX ONE Pro is an advanced adjustable box mod kit featuring top airflow and top-fill GTX Tank, COREX heating technology, 40W variable wattage, and crisp OLED display. Delivers pure mouth-to-lung flavor across Gurgaon.",
    "productDetails": [
      "100% Original Vaporesso product with scratch QR anti-counterfeiting code",
      "Subtle marble texture grip with ergonomic curved zinc alloy body",
      "Top airflow adjustment paired with leakproof top-fill design",
      "Compatible with all world-class Vaporesso GTX Mesh coil resistances",
      "Dedicated lock button to secure your settings against accidental adjustments"
    ],
    "flavors": [
      "Marble Blue",
      "Midnight Black",
      "Silver Steel",
      "Emerald Green",
      "Rose Gold"
    ],
    "specifications": {
      "Output Wattage": "5W - 40W Variable",
      "Battery": "Built-in Long Lasting Cell",
      "Tank": "GTX Top-Fill Tank with Top Airflow",
      "Coil Tech": "COREX Accurate Flavor Lasting Longer",
      "Screen": "0.69-inch OLED Screen",
      "Charging": "Type-C 2A Fast Charge"
    },
    "inStock": true,
    "image": "/products/17.jpg",
    "cardImage": "/products/17.jpg",
    "themeGradient": "from-blue-600/30 via-slate-900/40 to-emerald-500/20"
  },
  {
    "id": "p-bang-box-30k-double-flavour",
    "slug": "bang-box-30k-puffs-double-flavour-disposable-vape-dual-switch",
    "aliasSlugs": [
      "bang-box-30k-double-flavour",
      "bang-box-dual-flavor",
      "bang-30k-dual",
      "bang-box-double-flavor"
    ],
    "name": "Bang Box 30K Puffs Double Flavour Disposable Vape (Dual Switch)",
    "subtitle": "30,000 Puffs | 2-in-1 Dual Flavor Switch | 36ml E-Liquid | Smart Digital Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Bang Box",
    "category": "disposable-vapes",
    "price": 2499,
    "originalPrice": 3200,
    "rating": 4.9,
    "reviewsCount": 240,
    "soldCount": "1.6k+",
    "badge": "2-in-1 Dual Flavor",
    "puffs": 30000,
    "features": [
      {
        "text": "30,000 Huge Puffs",
        "icon": "battery"
      },
      {
        "text": "2-in-1 Dual Flavor Switch",
        "icon": "diamond"
      },
      {
        "text": "Massive 36ml Liquid",
        "icon": "leaf"
      },
      {
        "text": "Smart Digital Display",
        "icon": "cloud"
      }
    ],
    "description": "Two sensational flavors in one high-capacity vape! Bang Box 30K Double Flavour features a hardware toggle switch allowing you to swap between Watermelon Bubble Gum and Strawberry Watermelon anytime. Enjoy 30,000 puffs in Gurgaon today.",
    "productDetails": [
      "100% Genuine Bang Box with verifiable scratch security seal",
      "Hardware flavor switch lets you alternate between 2 isolated flavor tanks",
      "Enormous 36ml pre-filled e-liquid capacity for true 30,000 puff endurance",
      "Real-time digital screen displays remaining battery and e-liquid percentages",
      "850mAh heavy-duty rechargeable battery with Type-C quick port"
    ],
    "flavors": [
      "Watermelon Bubble Gum & Strawberry Watermelon",
      "Blueberry Ice & Peach Ice",
      "Energy Drink & Sour Apple",
      "Grape Ice & Strawberry Kiwi"
    ],
    "specifications": {
      "Puff Count": "Up to 30,000 Puffs",
      "E-Liquid Capacity": "36ml Dual Tank",
      "Function": "2-in-1 Physical Flavor Switch",
      "Display": "Digital Screen (Battery & Liquid %)",
      "Battery": "850mAh Type-C Rechargeable",
      "Nicotine": "50mg (5%)"
    },
    "inStock": true,
    "image": "/products/18.jpg",
    "cardImage": "/products/18.jpg",
    "themeGradient": "from-cyan-500/30 via-red-500/20 to-blue-600/30"
  },
  {
    "id": "p-vaporesso-armour-g-80w",
    "slug": "vaporesso-armour-g-80w-pod-mod-kit-built-in-battery",
    "aliasSlugs": [
      "vaporesso-armour-g",
      "armour-g-kit",
      "armour-g-80w",
      "armour-g-pod-mod"
    ],
    "name": "Vaporesso Armour G 80W Pod Mod Kit (Built-in Battery)",
    "subtitle": "80W Max Power | Built-in Mega Battery | Dynamic 3-Theme UI | GTX Coil Series",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Vaporesso",
    "category": "pod-systems",
    "price": 4499,
    "originalPrice": 5500,
    "rating": 5,
    "reviewsCount": 180,
    "soldCount": "1.2k+",
    "badge": "80W Heavy Duty",
    "puffs": null,
    "features": [
      {
        "text": "80W Heavy-Duty Power",
        "icon": "battery"
      },
      {
        "text": "High-Capacity Built-In Cell",
        "icon": "diamond"
      },
      {
        "text": "3 Dynamic Screen Themes",
        "icon": "leaf"
      },
      {
        "text": "GTX Mesh Coils Included",
        "icon": "cloud"
      }
    ],
    "description": "Engineered for maximum power and rugged luxury: Vaporesso Armour G delivers up to 80W with a built-in battery, dynamic dashboard automotive screen animations, top airflow leak-resistant pod, and full GTX coil compatibility in Gurgaon.",
    "productDetails": [
      "Genuine Vaporesso product with holographic security code & official warranty",
      "Built-in heavy-duty battery provides all-day 80W cloud performance",
      "0.96-inch TFT color screen with 3 animated UI themes (General, Race, Rim)",
      "Includes 2x GTX mesh coils: 0.4Ω (26-32W) and 0.6Ω (20-26W)",
      "Top-airflow adjustment dial combined with SSS leak-resistant cartridge technology"
    ],
    "flavors": [
      "Armor Black",
      "Gunmetal Grey",
      "Desert Tan",
      "Army Green",
      "Midnight Blue"
    ],
    "specifications": {
      "Max Wattage": "80W Adjustable",
      "Battery": "Built-in High-Capacity Cell",
      "Display": "0.96\" TFT Color Display (3 Themes)",
      "Coils Included": "GTX 0.4Ω Mesh & GTX 0.6Ω Mesh",
      "Charging": "Type-C 2A Fast Charge"
    },
    "inStock": true,
    "image": "/products/19.jpg",
    "cardImage": "/products/19.jpg",
    "themeGradient": "from-emerald-500/30 via-slate-900/50 to-orange-500/20"
  },
  {
    "id": "p-smok-priv-n19-kit",
    "slug": "smok-priv-n19-30w-starter-kit-1200mah",
    "aliasSlugs": [
      "smok-priv-n19",
      "priv-n19-kit",
      "smok-n19-kit",
      "priv-n19-vape"
    ],
    "name": "SMOK Priv N19 30W Starter Kit (1200mAh, Nord Dual Coil)",
    "subtitle": "1200mAh Battery | 4 Wattage Levels (5W-30W) | Nord Mesh Coils | 2ml Vape Tank",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "SMOK",
    "category": "pod-systems",
    "price": 3399,
    "originalPrice": 4200,
    "rating": 4.8,
    "reviewsCount": 310,
    "soldCount": "2.2k+",
    "badge": "Compact Mod Pen",
    "puffs": null,
    "features": [
      {
        "text": "1200mAh Built-in Battery",
        "icon": "battery"
      },
      {
        "text": "4 Output Modes (5W-30W)",
        "icon": "diamond"
      },
      {
        "text": "5-Bar Battery Indicator",
        "icon": "leaf"
      },
      {
        "text": "SMOK Nord Coils Inside",
        "icon": "cloud"
      }
    ],
    "description": "SMOK Priv N19 features a pocket mod form factor pairing a 1200mAh battery with the Vantage N19 clearomizer. Adjust easily across 4 wattage levels (Min/Soft/Norm/Hard) powered by acclaimed Nord mesh coils with Gurgaon express delivery.",
    "productDetails": [
      "Authentic SMOK device with holographic scratch authentication code",
      "Ergonomically curved chassis with distinctive Prism Blue and Black plating",
      "Adjustable wattage control button cycles easily through 4 power output presets",
      "Clear 5-level LED battery life indicator keeps you informed of power reserves",
      "Comes with Nord Mesh 0.6Ω and Nord Regular 1.4Ω coils for MTL and DL flexibility"
    ],
    "flavors": [
      "Prism Blue and Black",
      "Prism Chrome and Black",
      "Prism Rainbow",
      "7-Color Prism",
      "Black Red"
    ],
    "specifications": {
      "Battery Capacity": "1200mAh Built-in",
      "Output Wattage": "5W - 30W (4 Preset Modes)",
      "Tank Capacity": "2ml Pyrex Glass Tank",
      "Coil Compatibility": "SMOK Nord Coil Series",
      "Charging": "Micro-USB / Type-C Charging"
    },
    "inStock": true,
    "image": "/products/20.jpg",
    "cardImage": "/products/20.jpg",
    "themeGradient": "from-blue-600/30 via-slate-900/50 to-blue-800/30"
  },
  {
    "id": "p-vaporesso-xros-3-mini",
    "slug": "vaporesso-xros-3-mini-pod-system-kit-1000mah",
    "aliasSlugs": [
      "xros-3-mini",
      "vaporesso-xros-3-mini",
      "xros-3-mini-kit",
      "xros-mini-3"
    ],
    "name": "Vaporesso XROS 3 Mini Pod System Kit (1000mAh)",
    "subtitle": "1000mAh High-Density Battery | Corex Heating Tech | SSS Anti-Leak | Diamond Grip",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Vaporesso",
    "category": "pod-systems",
    "price": 3199,
    "originalPrice": 3999,
    "rating": 4.9,
    "reviewsCount": 520,
    "soldCount": "4.5k+",
    "badge": "Corex Flavor Master",
    "puffs": null,
    "features": [
      {
        "text": "1000mAh High-Density Cell",
        "icon": "battery"
      },
      {
        "text": "COREX Mesh Flavor Tech",
        "icon": "diamond"
      },
      {
        "text": "SSS Anti-Leaking Design",
        "icon": "leaf"
      },
      {
        "text": "Neon Dynamic Battery Bar",
        "icon": "cloud"
      }
    ],
    "description": "The gold standard for pocket pod systems! Vaporesso XROS 3 Mini combines a 1000mAh high-density battery (up to 48 hours vaping), COREX heating technology for 50% longer pod lifespan, and a tactile diamond-embossed Navy Blue finish in Gurgaon.",
    "productDetails": [
      "100% Genuine Vaporesso kit with QR anti-counterfeiting scratch code",
      "Precision diamond textured surface resists fingerprints and ensures slip-free grip",
      "COREX heating tech with Morph-Mesh structure ensures rapid, uniform vaporization",
      "Fully compatible across the entire family of Vaporesso XROS replacement pods",
      "Bottom neon battery pulse indicator transitions through green, blue, and red"
    ],
    "flavors": [
      "Navy Blue",
      "Space Grey",
      "Rose Pink",
      "Aqua Green",
      "Phantom Gold",
      "Black"
    ],
    "specifications": {
      "Battery Capacity": "1000mAh High-Density",
      "Coil Resistance": "0.6Ω Mesh Pod Included",
      "Cartridge Capacity": "2ml Clamshell Top-Fill",
      "Technology": "COREX Heating & SSS Leak-Proof",
      "Charging": "Type-C 1A Fast Charge"
    },
    "inStock": true,
    "image": "/products/21.jpg",
    "cardImage": "/products/21.jpg",
    "themeGradient": "from-blue-700/30 via-slate-900/50 to-emerald-500/20"
  },
  {
    "id": "p-pod-salt-classic-tobacco-nic-salt",
    "slug": "pod-salt-hit-the-spot-classic-tobacco-nic-salt-30ml",
    "aliasSlugs": [
      "pod-salt-classic-tobacco",
      "pod-salt-nic-salt",
      "pod-salt-30ml",
      "pod-salt-tobacco"
    ],
    "name": "Pod Salt Hit The Spot Classic Tobacco Nic Salt E-Liquid (30ml)",
    "subtitle": "British Made Premium Nic Salt | Smooth Rich Virginia Blend | 20mg / 50mg",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Pod Salt",
    "category": "e-liquids",
    "price": 1499,
    "originalPrice": 1900,
    "rating": 4.9,
    "reviewsCount": 330,
    "soldCount": "2.8k+",
    "badge": "UK Premium Nic Salt",
    "puffs": null,
    "features": [
      {
        "text": "British Made Premium Salt",
        "icon": "battery"
      },
      {
        "text": "Rich Virginia Tobacco",
        "icon": "diamond"
      },
      {
        "text": "Ultra-Smooth Throat Hit",
        "icon": "leaf"
      },
      {
        "text": "Fast Nicotine Absorption",
        "icon": "cloud"
      }
    ],
    "description": "Crafted in the United Kingdom, Pod Salt Hit The Spot Classic Tobacco delivers an exceptionally authentic, mellow Virginia cured tobacco profile. Engineered with award-winning nicotine salt for instant craving relief and silk-smooth throat hit in Gurgaon.",
    "productDetails": [
      "100% Genuine British-manufactured e-liquid with tamper-evident childproof cap",
      "Award-winning nicotine salt formula engineered for rapid absorption and clean flavor",
      "Optimized 50/50 VG/PG balance ideal for all refillable pod kits and MTL devices",
      "Smooth rich cured tobacco notes with subtle earthy sweetness and no harshness",
      "Same-day doorstep delivery with COD across Gurgaon, Delhi, and Noida NCR"
    ],
    "flavors": [
      "Classic Tobacco",
      "Cuban Creme",
      "Virginia Gold",
      "Cigarette Blend"
    ],
    "specifications": {
      "Bottle Volume": "30ml Chubby Gorilla Bottle",
      "Nicotine Strengths": "20mg (2%) / 50mg (5%)",
      "VG/PG Ratio": "50% VG / 50% PG",
      "Origin": "Formulated & Bottled in the UK",
      "Device Suitability": "Pod Systems & MTL Tanks"
    },
    "inStock": true,
    "image": "/products/22.jpg",
    "cardImage": "/products/22.jpg",
    "themeGradient": "from-amber-900/40 via-yellow-700/20 to-stone-900/40"
  },
  {
    "id": "p-vaporesso-gtx-one-full-colour-edition",
    "slug": "vaporesso-gtx-one-40w-starter-kit-full-colour-edition",
    "aliasSlugs": [
      "gtx-one-colour-edition",
      "vaporesso-gtx-one-colours",
      "gtx-one-40w-colors",
      "vaporesso-gtx-one-collection"
    ],
    "name": "Vaporesso GTX ONE 40W Starter Kit (Full Colour Edition)",
    "subtitle": "40W VW Box Mod | 2000mAh Battery | GTX Tank 18 | 6 Premium Colour Finishes",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Vaporesso",
    "category": "pod-systems",
    "price": 3299,
    "originalPrice": 4200,
    "rating": 4.8,
    "reviewsCount": 220,
    "soldCount": "1.4k+",
    "badge": "6 Colour Finishes",
    "puffs": null,
    "features": [
      {
        "text": "6 Luxury Designer Finishes",
        "icon": "battery"
      },
      {
        "text": "40W Variable Output",
        "icon": "diamond"
      },
      {
        "text": "2000mAh All-Day Battery",
        "icon": "leaf"
      },
      {
        "text": "GTX Mesh Coils Included",
        "icon": "cloud"
      }
    ],
    "description": "The complete designer collection of Vaporesso GTX ONE 40W Starter Kit! Choose from 6 stunning finishes: Matte Black, Silver Steel, Navy Blue, Crimson Red, Bronze Copper, and Sakura Pink. Powered by 2000mAh battery with express Gurgaon delivery.",
    "productDetails": [
      "100% Original Vaporesso boxed kits with verification security badges",
      "Available in 6 distinct colors with soft-touch scratch-resistant coatings",
      "Adjustable wattage from 5W to 40W with Smart VW mode to prevent burnt coils",
      "Accompanied by the GTX Tank 18 with precision adjustable dual airflow slots",
      "Fast 2A Type-C quick charging completes a full charge in under an hour"
    ],
    "flavors": [
      "Matte Black",
      "Silver Steel",
      "Navy Blue",
      "Crimson Red",
      "Bronze Copper",
      "Sakura Pink"
    ],
    "specifications": {
      "Wattage Range": "5W - 40W Adjustable",
      "Battery Capacity": "2000mAh Built-in",
      "Tank": "GTX Tank 18 (3ml Capacity)",
      "Screen": "0.69'' OLED Screen",
      "Charging": "Type-C 2A Fast Charge"
    },
    "inStock": true,
    "image": "/products/23.jpg",
    "cardImage": "/products/23.jpg",
    "themeGradient": "from-rose-500/30 via-slate-900/40 to-blue-600/30"
  },
  {
    "id": "p-uwell-caliburn-g3-pro-colors-edition",
    "slug": "uwell-caliburn-g3-pro-colors-edition-emerald-gold-rose",
    "aliasSlugs": [
      "caliburn-g3-pro-colors",
      "g3-pro-rose-pink",
      "g3-pro-gold-green",
      "uwell-g3-pro-edition"
    ],
    "name": "Uwell Caliburn G3 Pro Colors Edition (Emerald, Gold, Rose Pink)",
    "subtitle": "35W Flagship | Full-View Screen UI | 1000mAh Battery | Luxury Pastel Finishes",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Uwell",
    "category": "pod-systems",
    "price": 3199,
    "originalPrice": 4000,
    "rating": 4.9,
    "reviewsCount": 190,
    "soldCount": "1.3k+",
    "badge": "Luxury Pastel Editions",
    "puffs": null,
    "features": [
      {
        "text": "Exclusive Pastel Editions",
        "icon": "battery"
      },
      {
        "text": "35W Flagship Performance",
        "icon": "diamond"
      },
      {
        "text": "Full Screen Dynamic Display",
        "icon": "leaf"
      },
      {
        "text": "Pro-FOCS Flavor Core",
        "icon": "cloud"
      }
    ],
    "description": "Experience vaping sophistication with the Uwell Caliburn G3 Pro Colors Edition. Featuring mesmerizing Emerald Green, Champagne Gold, and Rose Pink metallic bodies paired with full-view front dynamic UI and 35W power. Order now in Gurgaon.",
    "productDetails": [
      "Official Uwell luxury edition with anti-counterfeit QR scratch authentication",
      "Premium anodized aluminum finish with brushed metallic luster",
      "World-first full-screen front panel with animated user interface and battery gauges",
      "1000mAh long-lasting cell supporting rapid 2A Type-C quick charging",
      "Superfast 30-min delivery across DLF Cyber City, Galleria, and Gurgaon sectors"
    ],
    "flavors": [
      "Emerald Green",
      "Champagne Gold",
      "Rose Pink"
    ],
    "specifications": {
      "Power Output": "5W - 35W Adjustable",
      "Battery": "1000mAh Internal Cell",
      "Display": "Full-View Interactive Dynamic Screen",
      "Finish": "Anodized Brushed Metallic",
      "Charging": "Type-C 2A Fast Charge"
    },
    "inStock": true,
    "image": "/products/24.jpg",
    "cardImage": "/products/24.jpg",
    "themeGradient": "from-emerald-600/30 via-amber-400/20 to-pink-500/20"
  },
  {
    "id": "p-nasty-bolt-50k-twin-flavors",
    "slug": "nasty-bolt-50k-hyper-puff-twin-flavors-edition-watermelon-blueberry",
    "aliasSlugs": [
      "nasty-bolt-50k-twin",
      "nasty-50k-twin-edition",
      "bolt-50k-watermelon-blueberry",
      "nasty-bolt-twin-pack"
    ],
    "name": "Nasty Bolt 50K Hyper Puff Twin Flavors Edition (Watermelon & Blueberry Ice)",
    "subtitle": "50,000 Puffs | Blueberry Ice & Watermelon Ice | 3 Mode Dynamic Power | Fast Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Nasty Juice",
    "category": "disposable-vapes",
    "price": 2599,
    "originalPrice": 3400,
    "rating": 5,
    "reviewsCount": 210,
    "soldCount": "1.5k+",
    "badge": "Dual Flavor Duo",
    "puffs": 50000,
    "features": [
      {
        "text": "50,000 Hyper Puffs",
        "icon": "battery"
      },
      {
        "text": "Watermelon & Blueberry Duo",
        "icon": "diamond"
      },
      {
        "text": "3-Mode Dynamic Power",
        "icon": "leaf"
      },
      {
        "text": "Super Fast Quick Charge",
        "icon": "cloud"
      }
    ],
    "description": "Double the pleasure with Nasty Bolt 50K Twin Flavors Edition! Featuring both iconic Blueberry Ice and Watermelon Ice, 50,000 hyper puffs, dual mesh heating, and dynamic airflow control. Order in Gurgaon with Cash on Delivery and express dispatch.",
    "productDetails": [
      "100% Authentic Nasty Juice device with scannable QR verification code",
      "Features two top-selling flavors: Blueberry Ice and Watermelon Ice 50mg",
      "Dual mesh coil system paired with 3-mode wattage selector for customized vapor",
      "Slider airflow dial at base allows instant switching from MTL to open draw",
      "Rechargeable battery with super-fast Type-C quick charging support"
    ],
    "flavors": [
      "Watermelon Ice & Blueberry Ice",
      "Double Apple Ice",
      "Slow Blow Pineapple Mango",
      "Grape Berry Ice"
    ],
    "specifications": {
      "Puff Count": "Up to 50,000 Hyper Puffs",
      "Flavors Included": "Blueberry Ice & Watermelon Ice",
      "Coil Type": "Dual Mesh Heating System",
      "Modes": "3 Mode Dynamic Wattage Control",
      "Airflow": "Precision Slider Airflow",
      "Nicotine": "50mg (5%)",
      "Charging": "Type-C Fast Charge"
    },
    "inStock": true,
    "image": "/products/25.jpg",
    "cardImage": "/products/25.jpg",
    "themeGradient": "from-lime-500/30 via-red-500/20 to-blue-600/30"
  },
  {
    "id": "p-ebcreate-bc5000-us-edition",
    "slug": "ebcreate-bc5000-disposable-pod-device-us-edition",
    "aliasSlugs": [
      "ebcreate-bc5000",
      "eb-create-bc5000",
      "ebdesign-bc5000",
      "elf-bar-bc5000-us-edition",
      "bc5000-disposable",
      "bc5000-us-edition"
    ],
    "name": "EBCREATE BC5000 Disposable Pod Device (US Edition)",
    "subtitle": "5,000 Puffs | Dual Mesh Coil | 650mAh Rechargeable | US Edition",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "EBCREATE",
    "category": "disposable-vapes",
    "price": 1350,
    "originalPrice": 1800,
    "rating": 4.8,
    "reviewsCount": 340,
    "soldCount": "2.3k+",
    "badge": "US Edition Best Seller",
    "puffs": 5000,
    "features": [
      {
        "text": "5,000 Pure Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "diamond"
      },
      {
        "text": "Ergonomic Flagon Shape",
        "icon": "leaf"
      },
      {
        "text": "Type-C Rechargeable",
        "icon": "cloud"
      }
    ],
    "description": "The iconic EBCREATE (formerly Elf Bar) BC5000 US Edition brings legendary dual coil taste, compact pocket-friendly design, and smooth vapor satisfaction to Gurgaon.",
    "productDetails": [
      "100% Genuine EBCREATE device with authentic anti-counterfeit QR security code",
      "Iconic flagon shape with soft-touch matte finish and contrasting colors",
      "High-efficiency dual mesh coil delivering unparalleled flavor purity till the last drop",
      "650mAh rechargeable battery with fast Type-C charging port",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Blue Razz Ice",
      "Peach Mango Watermelon",
      "Tropical Rainbow Blast",
      "Watermelon Ice",
      "Strawberry Kiwi",
      "Miami Mint",
      "Cranberry Grape",
      "Sakura Grape",
      "Strawberry Banana",
      "Triple Berry Ice"
    ],
    "specifications": {
      "Puff Count": "Up to 5,000 Puffs",
      "E-Liquid Capacity": "9.5ml Pre-Filled",
      "Battery Capacity": "650mAh Rechargeable",
      "Charging Port": "Type-C Fast Charging",
      "Coil Type": "Dual Mesh Coil System",
      "Nicotine Strength": "50mg (5%)",
      "Edition": "Official US Edition"
    },
    "inStock": true,
    "image": "/products/ebcreate-bc5000-disposable-pod-device.webp"
  },
  {
    "id": "p-geek-bar-burj-80k",
    "slug": "geek-bar-burj-80000-disposable-pod-device",
    "aliasSlugs": [
      "geek-bar-burj",
      "geekbar-burj",
      "geek-bar-burj-80k",
      "geekbar-burj-80000",
      "geek-bar-80k",
      "burj-80k-vape"
    ],
    "name": "Geek Bar Burj 80000 Disposable Vape",
    "subtitle": "80,000 Puffs | Ice Airflow Control | Burj Tower Architecture | Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "GEEK BAR",
    "category": "disposable-vapes",
    "price": 4000,
    "originalPrice": 5200,
    "rating": 5,
    "reviewsCount": 380,
    "soldCount": "1.9k+",
    "badge": "80K Puffs Monster",
    "puffs": 80000,
    "features": [
      {
        "text": "Up to 80,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Ice Airflow Control",
        "icon": "diamond"
      },
      {
        "text": "Futuristic Burj Design",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Geek Bar Burj sets a new pinnacle with up to 80,000 puffs, customizable Ice Airflow Control, and a stunning architectural tower design. Available for superfast delivery across Gurgaon & NCR.",
    "productDetails": [
      "100% Authentic Geek Bar flagship device with verified security scratch code",
      "Unmatched 80,000 puffs ultra-capacity reservoir for weeks of premium vaping",
      "Adjustable Ice Airflow Control dial to customize cooling intensity and vapor draw",
      "Tower-inspired illuminated body with smart LED status lights and juice window",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Strawberry Ice",
      "Blue Razz Ice",
      "Miami Mint",
      "Watermelon Ice",
      "Sour Apple Ice",
      "Triple Berry Ice",
      "Peach Mango Watermelon",
      "Cherry Bomb",
      "Grape Ice",
      "Dragon Melon"
    ],
    "specifications": {
      "Puff Count": "Up to 80,000 Puffs",
      "Airflow": "Adjustable Ice Airflow Control System",
      "Battery": "High-Capacity Rechargeable Battery",
      "Charging Port": "Type-C Fast Charging",
      "Nicotine Strength": "50mg (5%)",
      "Design": "Architectural Burj Tower Profile with LED Display"
    },
    "inStock": true,
    "image": "/products/geek-bar-burj-80000-disposable-vape.webp"
  },
  {
    "id": "p-yuoto-digi-15000",
    "slug": "yuoto-digi-15000-disposable-pod-device",
    "aliasSlugs": [
      "yuoto-digi-15000",
      "yuoto-digi-15k",
      "yuoto-15000",
      "yuoto-digi",
      "yuoto-15k",
      "yuoto-double-apple"
    ],
    "name": "Yuoto Digi 15000 Disposable Vape",
    "subtitle": "15,000 Puffs | Smart Digital Screen | Dual Mesh Coil | Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "Yuoto",
    "category": "disposable-vapes",
    "price": 1900,
    "originalPrice": 2500,
    "rating": 4.8,
    "reviewsCount": 220,
    "soldCount": "1.1k+",
    "badge": "15K Puffs",
    "puffs": 15000,
    "features": [
      {
        "text": "Up to 15,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Smart Digital Screen",
        "icon": "diamond"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "leaf"
      },
      {
        "text": "Type-C Rechargeable",
        "icon": "cloud"
      }
    ],
    "description": "Yuoto Digi 15000 delivers up to 15,000 smooth puffs with an intelligent digital display for battery and e-liquid tracking, advanced mesh coils, and rich flavor.",
    "productDetails": [
      "100% Authentic Yuoto product with anti-counterfeit security verification",
      "Smart digital display screen showing accurate battery percentage and liquid status",
      "High-performance mesh coil technology delivering consistent rich flavor till the last puff",
      "Type-C fast rechargeable 650mAh battery unit",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Double Apple",
      "Grape Ice",
      "Blueberry Ice",
      "Watermelon Ice",
      "Strawberry Kiwi Ice",
      "Mango Ice",
      "Peach Ice",
      "Mint Ice",
      "Energy Drink",
      "Strawberry Watermelon"
    ],
    "specifications": {
      "Puff Count": "Up to 15,000 Puffs",
      "Display": "Smart Digital Screen (Battery & Liquid Indicator)",
      "Battery Capacity": "650mAh Rechargeable",
      "Charging Port": "Type-C Fast Charging",
      "Coil Type": "Dual Mesh Coil",
      "Nicotine Strength": "50mg (5%)"
    },
    "inStock": true,
    "image": "/products/yuoto-digi-15000-disposable-vape.webp"
  },
  {
    "id": "p-geekvape-q-cartridge-3pack",
    "slug": "geekvape-q-replacement-pod-cartridge-pack-of-3",
    "aliasSlugs": [
      "geekvape-q-pod",
      "geekvape-q-cartridge",
      "geekvape-q-pods",
      "sonder-q-pods",
      "wenax-q-pods",
      "aegis-q-pods"
    ],
    "name": "Geekvape Q Replacement Pod Cartridges (Pack of 3)",
    "subtitle": "2ml Capacity | Built-In Mesh Coil | Side-Fill | Pack of 3",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "GEEKVAPE",
    "category": "coils-pods",
    "price": 1550,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewsCount": 240,
    "soldCount": "1.2k+",
    "badge": "Pack of 3",
    "features": [
      {
        "text": "3 Pods Per Pack",
        "icon": "diamond"
      },
      {
        "text": "Integrated Mesh Coil",
        "icon": "leaf"
      },
      {
        "text": "2ml E-Liquid Capacity",
        "icon": "cloud"
      },
      {
        "text": "Leak-Proof Side Fill",
        "icon": "battery"
      }
    ],
    "description": "Authentic Geekvape Q Replacement Cartridge 3-Pack with integrated mesh coil for rich flavor and smooth vapor. Compatible with Sonder Q, Wenax Q, and Aegis Q.",
    "productDetails": [
      "100% Genuine Geekvape product with scratch verification code",
      "Pack of 3 individually sealed replacement cartridges",
      "Integrated premium mesh coil for crisp flavor and long-lasting coil life",
      "Compatible with Geekvape Sonder Q, Wenax Q, Aegis Q (AQ), and Digi-Q kits",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "0.6Ω Mesh Pod (18-25W - RDL)",
      "0.8Ω Mesh Pod (12-18W - MTL/RDL)",
      "1.2Ω Mesh Pod (8-12W - Tight MTL)"
    ],
    "specifications": {
      "Capacity": "2.0ml",
      "Quantity": "3 Pods per Pack",
      "Filling Type": "Easy Side / Top Fill with Silicone Stopper",
      "Coil Resistance": "0.6Ω / 0.8Ω / 1.2Ω Mesh",
      "Device Compatibility": "Geekvape Sonder Q, Wenax Q, Aegis Q (AQ), Digi Q",
      "Origin": "Official Geekvape Import"
    },
    "inStock": true,
    "image": "/products/geekvape-q-replacement-pod-cartridge-3pcs.webp"
  },
  {
    "id": "p-elfliq-ice-king-nic-salts",
    "slug": "elfliq-ice-king-nic-salts-premium-e-liquid",
    "aliasSlugs": [
      "elfliq-ice-king",
      "elfliq-nic-salts",
      "elfliq-iced-mint",
      "elfliq-e-liquid",
      "elf-bar-elfliq",
      "elfliq-salts"
    ],
    "name": "Elfliq Ice King Nic Salts Premium E-Liquid",
    "subtitle": "Official Elf Bar Nic Salts | Ultra-Cooling Ice King Series | 30ml",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFLIQ",
    "category": "e-liquids",
    "price": 1550,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewsCount": 195,
    "soldCount": "980+",
    "badge": "Ice King Series",
    "features": [
      {
        "text": "Official Elf Bar Nic Salts",
        "icon": "diamond"
      },
      {
        "text": "Ice King Sub-Zero Chill",
        "icon": "leaf"
      },
      {
        "text": "Ultra-Smooth Throat Hit",
        "icon": "battery"
      },
      {
        "text": "Ideal for Refillable Pods",
        "icon": "cloud"
      }
    ],
    "description": "Elfliq Ice King Nic Salts brings Elf Bar's world-famous flavors with an extra frosty sub-zero chill. Optimized for all pod systems with ultra-smooth throat hits.",
    "productDetails": [
      "100% Original Elfliq by Elf Bar with holographic scratch authentication",
      "Ice King sub-zero chilling formula delivering authentic Elf Bar disposable flavor in bottled form",
      "50/50 VG/PG balanced blend perfectly formulated for all refillable MTL pod devices",
      "Child-resistant cap and tamper-evident seal for maximum safety and freshness",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Iced Mint",
      "Blue Razz Ice",
      "Watermelon Ice",
      "Kiwi Passion Fruit Guava",
      "Triple Mango Ice",
      "Spearmint",
      "Blueberry Sour Raspberry",
      "Pink Lemonade",
      "Strawberry Kiwi Ice",
      "Cola Ice"
    ],
    "specifications": {
      "Bottle Size": "30ml Chubby Gorilla Bottle",
      "Nicotine Type": "Premium Nicotine Salts",
      "Nicotine Strength": "30mg / 50mg",
      "VG/PG Ratio": "50VG / 50PG",
      "Device Compatibility": "All Refillable Pod Systems & MTL Kits",
      "Origin": "Official Elf Bar Import"
    },
    "inStock": true,
    "image": "/products/elfliq-ice-king-nic-salts.webp"
  },
  {
    "id": "p-al-fakher-crown-bar-40k",
    "slug": "al-fakher-crown-bar-40k-megamax-disposable-pod",
    "aliasSlugs": [
      "al-fakher-crown-bar-40k",
      "crown-bar-40k",
      "crown-bar-megamax",
      "al-fakher-40k",
      "al-fakher-megamax-40000",
      "crown-bar-40000"
    ],
    "name": "Al Fakher Crown Bar 40K MegaMax Disposable Vape",
    "subtitle": "40,000 Puffs | Dual Mesh Coil | Digital Display | Shisha Experience",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "AL FAKHER",
    "category": "disposable-vapes",
    "price": 3150,
    "originalPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 290,
    "soldCount": "1.5k+",
    "badge": "40K MegaMax",
    "puffs": 40000,
    "features": [
      {
        "text": "Up to 40,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "diamond"
      },
      {
        "text": "Smart Digital Dual Display",
        "icon": "leaf"
      },
      {
        "text": "Authentic Shisha Taste",
        "icon": "cloud"
      }
    ],
    "description": "Al Fakher Crown Bar 40K MegaMax features massive 40,000 puff capacity, signature dual mesh coils, smart digital screen, and iconic Al Fakher shisha-inspired cloud performance.",
    "productDetails": [
      "100% Genuine Al Fakher Crown Bar with official scratch verification",
      "Massive 40,000 puffs MegaMax capacity with smooth DTL shisha draw",
      "Advanced dual mesh coil technology for dense flavor and ultra-thick clouds",
      "Smart digital indicator screen showing exact battery level and e-liquid percentage",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Mango Pineapple",
      "Two Apple",
      "Lush Ice",
      "Grape Mint",
      "Berry Ice",
      "Peach Ice",
      "Gum Mint",
      "Blueberry Ice",
      "Magic Love",
      "Cherry Fiesta",
      "Lucid Dream",
      "Strawberry Punch"
    ],
    "specifications": {
      "Puff Count": "Up to 40,000 Puffs",
      "Coil Type": "Advanced Dual Mesh Coil",
      "Display": "Digital Screen (Battery & E-Liquid %)",
      "Vaping Style": "DTL (Direct-to-Lung) Shisha Style",
      "Charging Port": "Type-C Rechargeable",
      "Nicotine Strength": "50mg (5%)"
    },
    "inStock": true,
    "image": "/products/al-fakher-crown-bar-40k-megamax-disposable.webp"
  },
  {
    "id": "p-geekbar-clr-25k-50k",
    "slug": "geek-bar-clr-25000-50000-disposable-pod-device",
    "aliasSlugs": [
      "geek-bar-clr",
      "geekbar-clr",
      "geek-bar-clr-25k",
      "geek-bar-clr-50k",
      "geekbar-clr-50k",
      "geek-bar-clr-disposable"
    ],
    "name": "Geek Bar CLR 25K / 50K Disposable Pod Device",
    "subtitle": "25,000 to 50,000 Puffs | 800mAh Battery | Dual Modes | Type-C",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "GEEK BAR",
    "category": "disposable-vapes",
    "price": 3200,
    "originalPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 310,
    "soldCount": "1.7k+",
    "badge": "25K/50K Puffs",
    "puffs": 50000,
    "features": [
      {
        "text": "Up to 50,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "800mAh Rechargeable Battery",
        "icon": "diamond"
      },
      {
        "text": "Dual Power & Flavor Modes",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Geek Bar CLR delivers revolutionary dual mode vaping with up to 50,000 puffs, robust 800mAh battery, and rich flavor technology. Express delivery across Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Genuine Geek Bar device with official authenticity scratch code",
      "Dual flavor output modes: 25,000 puffs in Boost mode / 50,000 puffs in Regular mode",
      "Long-lasting 800mAh rechargeable battery with quick Type-C charging port",
      "Clear ergonomic shell design with intelligent LED display indicators",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Blue Rancher",
      "Triple Berry Ice",
      "Miami Mint",
      "Sour Gush",
      "Pineapple Savers",
      "Amazon Lemonade",
      "Cool Mint",
      "Peach Berry",
      "Blue Razz Ice",
      "Watermelon Ice",
      "Sour Apple Ice",
      "White Gummy",
      "Banana Ice",
      "Sour Strawberry",
      "Strazz"
    ],
    "specifications": {
      "Puff Count": "Up to 50,000 Puffs (25K Boost / 50K Regular)",
      "Battery Capacity": "800mAh Rechargeable",
      "Charging Port": "Type-C Fast Charging",
      "Modes": "Dual Power / Flavor Modes",
      "Nicotine Strength": "50mg (5%)",
      "Display": "Smart LED Status Indicator"
    },
    "inStock": true,
    "image": "/products/geek-bar-clr-25k-50k-disposable-pod-device.webp"
  },
  {
    "id": "p-lost-mary-nera-fullview-70k",
    "slug": "lost-mary-nera-fullview-70000-disposable-kit",
    "aliasSlugs": [
      "lost-mary-nera-fullview",
      "lost-mary-nera-70k",
      "lost-mary-70k",
      "lost-mary-nera-fullview-kit",
      "lost-mary-70000",
      "nera-fullview-70k"
    ],
    "name": "Lost Mary Nera FullView 70000 Disposable Kit",
    "subtitle": "70,000 Puffs | Visible E-Liquid Level | Multi-Pod FullView Kit",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "LOST MARY",
    "category": "disposable-vapes",
    "price": 3300,
    "originalPrice": 4600,
    "rating": 4.9,
    "reviewsCount": 275,
    "soldCount": "1.4k+",
    "badge": "70K Puffs",
    "puffs": 70000,
    "features": [
      {
        "text": "Up to 70,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Visible E-Liquid Level",
        "icon": "diamond"
      },
      {
        "text": "FullView Clear Pods",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Lost Mary Nera FullView 70000 Kit (70,000 Puffs) with visible transparent e-liquid pods, starry display power device, and massive puff output. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Lost Mary product with scratch verification code",
      "Record-shattering 70,000 puffs ultra-capacity system with interchangeable pods",
      "100% visible clear e-liquid tank so you always know your exact remaining juice",
      "Rechargeable starry display battery unit with fast Type-C charging",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Miami Mint",
      "Pineapple Passion Orange",
      "Rocket Freeze",
      "Scary Berry",
      "Sour Apple Ice",
      "Blue Razz Ice",
      "Watermelon Ice",
      "Pomegranate Blast",
      "Pink Lemonade"
    ],
    "image": "/products/lost-mary-nera-fullview-70000-disposable-kit.webp",
    "cardImage": "/products/lost-mary-nera-fullview-70000-disposable-kit.webp",
    "themeGradient": "from-purple-300 via-pink-200 to-indigo-100"
  },
  {
    "id": "p-voopoo-drag-h40-pro",
    "slug": "voopoo-drag-h40-pro-pod-mod-kit",
    "aliasSlugs": [
      "voopoo-drag-h40-pro",
      "drag-h40-pro",
      "voopoo-drag-h40",
      "drag-h40",
      "voopoo-h40-pro"
    ],
    "name": "VOOPOO Drag H40 Pro Pod Mod Kit",
    "subtitle": "40W Max Output | 1500mAh Battery | PnP Coil Platform | 360° Airflow",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "VOOPOO",
    "category": "pod-systems",
    "price": 4500,
    "originalPrice": 6200,
    "rating": 4.9,
    "reviewsCount": 185,
    "soldCount": "750+",
    "badge": "Pro Edition",
    "puffs": null,
    "features": [
      {
        "text": "40W Max Output",
        "icon": "cloud"
      },
      {
        "text": "1500mAh Battery",
        "icon": "battery"
      },
      {
        "text": "PnP Coil Platform",
        "icon": "diamond"
      },
      {
        "text": "360° Adjustable Airflow",
        "icon": "leaf"
      }
    ],
    "description": "VOOPOO Drag H40 Pro Pod Mod Kit with 40W max power, 1500mAh battery, and full PnP coil compatibility. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic VOOPOO product with anti-counterfeit scratch code",
      "Compact pod mod device with 40W max output and SMART / RBA modes",
      "Powered by a built-in 1500mAh battery with Type-C fast charging",
      "Dual-in-one PnP coil technology for rich cloud density and deep flavor",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Modern Blue (Leather)",
      "Classic Black (Leather)",
      "Gunmetal (Leather)",
      "Carbon Fiber",
      "Snow Blue"
    ],
    "image": "/products/voopoo-drag-h40-pro-pod-mod-kit.webp",
    "cardImage": "/products/voopoo-drag-h40-pro-pod-mod-kit.webp",
    "themeGradient": "from-amber-200 via-yellow-100 to-sky-100"
  },
  {
    "id": "p-nasty-juice-saltnic-30ml",
    "slug": "nasty-juice-premium-saltnic-30ml",
    "aliasSlugs": [
      "nasty-juice-saltnic",
      "nasty-juice-30ml",
      "nasty-salt-nic",
      "nasty-juice",
      "nasty-podmate",
      "nasty-cushman"
    ],
    "name": "Nasty Juice Premium Salt Nic 30ML",
    "subtitle": "30ML Imported Nic Salt E-Liquid | 35mg / 50mg Strength",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "NASTY JUICE",
    "category": "e-liquids",
    "price": 1550,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewsCount": 240,
    "soldCount": "1.5k+",
    "badge": "Best Seller",
    "puffs": null,
    "features": [
      {
        "text": "30ML Bottle Capacity",
        "icon": "diamond"
      },
      {
        "text": "50mg & 35mg Nic Salt",
        "icon": "battery"
      },
      {
        "text": "Award-Winning Flavors",
        "icon": "leaf"
      },
      {
        "text": "Smooth Throat Hit",
        "icon": "cloud"
      }
    ],
    "description": "Authentic Nasty Juice 30ML Nicotine Salt E-Liquid with world-famous Cush Man mango, Slow Blow, and PodMate series. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic imported Nasty Juice with QR authenticity code",
      "Formulated with smooth premium nicotine salts for fast craving relief",
      "Optimized 50/50 VG/PG ratio perfect for pod systems and low-wattage kits",
      "Child-resistant tamper-evident 30ML dropper bottle",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Mango Cush Man",
      "Watermelon Ice (PodMate)",
      "Pineapple Lemonade (Slow Blow)",
      "Grape & Mixed Berries (PodMate)",
      "Peach Lemonade (PodMate)",
      "Red Rage (PodMate)",
      "Mango Ice (PodMate)",
      "Mango Grape (Cush Man)",
      "Vanilla Tobacco (Silver Blend)",
      "Fine Bronze Tobacco"
    ],
    "image": "/products/nasty-juice-premium-saltnic-30ml.webp",
    "cardImage": "/products/nasty-juice-premium-saltnic-30ml.webp",
    "themeGradient": "from-amber-300 via-orange-200 to-yellow-100"
  },
  {
    "id": "p-juul-starter-kit",
    "slug": "juul-starter-kit-with-4-pods",
    "aliasSlugs": [
      "juul-starter-kit",
      "juul-device-kit",
      "juul-kit",
      "juul-vape-kit",
      "juul-pod-kit",
      "juul-delhi",
      "juul-gurgaon"
    ],
    "name": "JUUL Starter Kit (Device + 4 Pods)",
    "subtitle": "JUUL Device | USB Charging Dock | 4 Pod Multipack 5% Strength",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "JUUL",
    "category": "pod-systems",
    "price": 2500,
    "originalPrice": 3200,
    "rating": 4.9,
    "reviewsCount": 260,
    "soldCount": "1.2k+",
    "badge": "Best Seller",
    "puffs": null,
    "features": [
      {
        "text": "Original JUUL Device",
        "icon": "diamond"
      },
      {
        "text": "Magnetic USB Charger",
        "icon": "battery"
      },
      {
        "text": "Includes 4 Pod Multipack (5%)",
        "icon": "leaf"
      },
      {
        "text": "Draw-Activated No Buttons",
        "icon": "cloud"
      }
    ],
    "description": "Authentic JUUL Starter Kit with sleek JUUL device, magnetic USB charging dock, and 4 pod multipack (5% nicotine). Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Factory Authentic JUUL starter kit with verification authenticity code",
      "Complete Kit includes: 1x Rechargeable JUUL Device, 1x USB Magnetic Charging Dock, 4x Pre-filled JUULpods (5% strength)",
      "Convenient plug-and-play operation with no buttons, switches, or mess",
      "Smart temperature regulation technology to prevent burning",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Slate Grey (Includes 4 Pods)",
      "Silver Edition (Includes 4 Pods)"
    ],
    "image": "/products/juul-starter-kit-with-4-pods.webp",
    "cardImage": "/products/juul-starter-kit-with-4-pods.webp",
    "themeGradient": "from-stone-300 via-neutral-200 to-zinc-100"
  },
  {
    "id": "p-uoto-50000-watermelon-bubblegum",
    "slug": "uoto-50000-puffs-disposable-vape",
    "aliasSlugs": [
      "yuoto-50000-puffs",
      "uoto-50000",
      "yuoto-50k",
      "uoto-50k",
      "uoto-50000-watermelon-bubblegum",
      "yuoto-50000-disposable",
      "uoto-disposable-50k"
    ],
    "name": "Uoto 50000 Puffs Disposable Vape",
    "subtitle": "50,000 Puffs | Smart Circular LED Display | Type-C Rechargeable",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "YOUTO",
    "category": "disposable-vapes",
    "price": 3300,
    "originalPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 205,
    "soldCount": "1k+",
    "badge": "50K Puffs",
    "puffs": 50000,
    "features": [
      {
        "text": "Up to 50,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Circular Glowing Smart Screen",
        "icon": "diamond"
      },
      {
        "text": "Smooth Mesh Coil",
        "icon": "cloud"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "leaf"
      }
    ],
    "description": "Uoto 50000 Puffs Disposable Vape with massive 50,000 puff capacity, circular digital LED screen, and rich sweet flavor. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Uoto/Yuoto product with scratch verification code",
      "Record-setting 50,000 puffs capacity with heavy-duty rechargeable battery",
      "Futuristic circular smart screen showing live battery % and vaping status",
      "Advanced mesh coil delivering intense and smooth flavor from first puff to last",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Watermelon Bubblegum",
      "Blueberry Ice",
      "Strawberry Kiwi",
      "Mango Ice",
      "Grape Mint",
      "Peach Ice"
    ],
    "image": "/products/uoto-50000-puffs-disposable-vape.webp",
    "cardImage": "/products/uoto-50000-puffs-disposable-vape.webp",
    "themeGradient": "from-pink-300 via-rose-200 to-fuchsia-100"
  },
  {
    "id": "p-vaporesso-xros-5",
    "slug": "vaporesso-xros-5-pod-system-kit",
    "aliasSlugs": [
      "vaporesso-xros-5",
      "xros-5",
      "xros-5-pod-kit",
      "vaporesso-xros5",
      "xros5",
      "vaporesso-xros-5-kit"
    ],
    "name": "Vaporesso XROS 5 Pod System Kit",
    "subtitle": "30W Max Output | COREX 3.0 Tech | 3ML 0.4Ω/0.6Ω Pods | OLED Screen",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "VAPORESSO",
    "category": "pod-systems",
    "price": 4500,
    "originalPrice": 5400,
    "rating": 4.9,
    "reviewsCount": 230,
    "soldCount": "980+",
    "badge": "Flagship",
    "puffs": null,
    "features": [
      {
        "text": "30W Max Output",
        "icon": "cloud"
      },
      {
        "text": "COREX 3.0 Flavor Tech",
        "icon": "leaf"
      },
      {
        "text": "Smart HD OLED Display",
        "icon": "diamond"
      },
      {
        "text": "3ML 0.4Ω & 0.6Ω Pods",
        "icon": "battery"
      }
    ],
    "description": "Vaporesso XROS 5 Pod System Kit with 30W max output, revolutionary COREX 3.0 aroma tech, and crisp OLED screen. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Vaporesso product with scratch verification code",
      "Up to 30W adjustable wattage output with smart resistance detection",
      "COREX 3.0 mesh heating technology delivering 50% longer pod lifespan and explosive flavor",
      "Compatible with all XROS series replacement pods (3ML / 2ML)",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Champagne Gold",
      "Ice Blue",
      "Space Grey",
      "Midnight Black",
      "Emerald Green"
    ],
    "image": "/products/vaporesso-xros-5-pod-system-kit.webp",
    "cardImage": "/products/vaporesso-xros-5-pod-system-kit.webp",
    "themeGradient": "from-emerald-300 via-teal-200 to-green-100"
  },
  {
    "id": "p-elfbar-nic-king-30k",
    "slug": "elfbar-nic-king-30000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-nic-king-30k",
      "elfbar-nic-king-30000",
      "elfbar-nic-king",
      "elf-bar-nic-king",
      "nic-king-30000",
      "nic-king-30k",
      "elfbar-nic-king-disposable"
    ],
    "name": "Elfbar Nic King 30000 Disposable Pod Device",
    "subtitle": "30,000 Puffs | 3-Level Nicotine & Airflow Control | Smart Screen",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 2800,
    "originalPrice": 3600,
    "rating": 4.9,
    "reviewsCount": 215,
    "soldCount": "920+",
    "badge": "30K Puffs",
    "puffs": 30000,
    "features": [
      {
        "text": "Up to 30,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "3-Level Nicotine & Airflow",
        "icon": "diamond"
      },
      {
        "text": "NORMAL / PLUS / MAX Modes",
        "icon": "cloud"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "leaf"
      }
    ],
    "description": "Elfbar Nic King 30000 Disposable Pod Device (30,000 Puffs) with 3 personalized nicotine levels and adjustable airflow modes. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Up to 30,000 puffs with personalized 3-level nicotine strength adjustment",
      "Customizable Power & Airflow modes: Normal, Plus, and Max",
      "Digital LED smart screen for live battery and e-liquid tracking",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Peach Ice",
      "Blackberry Cranberry",
      "Cherry Pomegranate Cranberry",
      "Miami Mint",
      "Mixed Berry",
      "Mango Peach Watermelon",
      "Blue Razz",
      "Strawberry Watermelon"
    ],
    "image": "/products/elfbar-nic-king-30000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-nic-king-30000-disposable-pod-device.webp",
    "themeGradient": "from-blue-300 via-rose-200 to-amber-100"
  },
  {
    "id": "p-caliburn-a2",
    "slug": "uwell-caliburn-a2-pod-system",
    "aliasSlugs": [
      "uwell-caliburn-a2",
      "caliburn-a2",
      "caliburn-a2-pod-kit",
      "caliburn-a2-kit",
      "uwell-a2"
    ],
    "name": "Uwell Caliburn A2 Pod System",
    "subtitle": "520mAh Battery | Top-Fill 2ML Cartridge | Pro-FOCS Tech",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "CALIBURN",
    "category": "pod-systems",
    "price": 4000,
    "originalPrice": 4800,
    "rating": 4.9,
    "reviewsCount": 194,
    "soldCount": "850+",
    "badge": "Top Rated",
    "puffs": null,
    "features": [
      {
        "text": "520mAh Battery (Type-C)",
        "icon": "battery"
      },
      {
        "text": "Pro-FOCS Flavor Tech",
        "icon": "leaf"
      },
      {
        "text": "Dual Activation (Draw & Button)",
        "icon": "cloud"
      },
      {
        "text": "E-Liquid Viewing Window",
        "icon": "diamond"
      }
    ],
    "description": "Uwell Caliburn A2 Pod System with 520mAh battery, clear e-juice check window, and Pro-FOCS flavor technology. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Uwell Caliburn product with scratch verification code",
      "520mAh built-in battery with fast 35-minute Type-C charging (90%)",
      "Clear e-liquid viewing window to prevent dry hits",
      "Dual firing mechanism: Draw-activated or intuitive fire button",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Black",
      "Grey",
      "Blue",
      "Green",
      "Orange",
      "Iris Purple"
    ],
    "image": "/products/uwell-caliburn-a2-pod-system.webp",
    "cardImage": "/products/uwell-caliburn-a2-pod-system.webp",
    "themeGradient": "from-slate-300 via-gray-200 to-zinc-100"
  },
  {
    "id": "p-iget-move-b50000",
    "slug": "iget-move-b50000-disposable-pod-device",
    "aliasSlugs": [
      "iget-move-b50000",
      "iget-move-50000",
      "iget-move-50k",
      "iget-50k-puffs",
      "iget-move-b50k",
      "move-b50000"
    ],
    "name": "iGET Move B50000 Disposable Pod Device",
    "subtitle": "50,000 Puffs | 2 Flavors In 1 Device (Rotate Switch) | Digital Screen",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "IGET",
    "category": "disposable-vapes",
    "price": 3300,
    "originalPrice": 4400,
    "rating": 4.9,
    "reviewsCount": 245,
    "soldCount": "1.1k+",
    "badge": "50K Puffs",
    "puffs": 50000,
    "features": [
      {
        "text": "Up to 50,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "2 Flavors In 1 (Rotate Switch)",
        "icon": "diamond"
      },
      {
        "text": "100% Digital Screen Display",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "iGET Move B50000 Disposable Pod Device (50,000 Puffs) with rotatable dual flavors in 1 device and digital display. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic iGET product with scratch verification code",
      "Record-breaking 50,000 puffs ultra-capacity battery and e-liquid",
      "Dual Flavor Innovation: Rotate the mouthpiece to switch between 2 distinct flavors",
      "Full digital smart display screen showing real-time battery and power",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Mr Blue / Blueberry",
      "Watermelon Ice / Strawberry Kiwi",
      "Peach Ice / Mango Passion",
      "Grape Ice / Mixed Berry",
      "Cola Ice / Lemon Mint"
    ],
    "image": "/products/iget-move-b50000-disposable-pod-device.webp",
    "cardImage": "/products/iget-move-b50000-disposable-pod-device.webp",
    "themeGradient": "from-blue-400 via-indigo-300 to-sky-100"
  },
  {
    "id": "p-iget-astro-b18000",
    "slug": "iget-astro-b18000-disposable-pod-device",
    "aliasSlugs": [
      "iget-astro-b18000",
      "iget-astro-18000",
      "iget-b18000",
      "i-get-astro-b18000",
      "iget-astro",
      "astro-b18000",
      "iget-18000-puffs"
    ],
    "name": "iGET Astro B18000 Disposable Pod Device",
    "subtitle": "18,000 Puffs | Smart Display | 100% Pure Flavor Mesh Coil",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "IGET",
    "category": "disposable-vapes",
    "price": 2000,
    "originalPrice": 2999,
    "rating": 4.9,
    "reviewsCount": 168,
    "soldCount": "820+",
    "badge": "18K Puffs",
    "puffs": 18000,
    "features": [
      {
        "text": "Up to 18,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Smart HD Screen Display",
        "icon": "diamond"
      },
      {
        "text": "Mesh Coil & 100% Cotton",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "iGET Astro B18000 Disposable Pod Device (18,000 Puffs) with vibrant smart screen display and mesh coil. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic iGET product with scratch verification code",
      "Up to 18,000 satisfying puffs with long-lasting e-liquid capacity",
      "Digital smart screen showing battery status and e-liquid level",
      "Premium Mesh Coil with 100% organic cotton for authentic pure flavor",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Strawberry Watermelon",
      "Watermelon Ice",
      "Blackberry Ice",
      "Strawberry Kiwi",
      "Peach Ice",
      "Pineapple Mango Ice",
      "Cola Ice",
      "Blueberry Watermelon",
      "Strawberry Peach",
      "Peach Mango Watermelon"
    ],
    "image": "/products/iget-astro-b18000-disposable-pod-device.webp",
    "cardImage": "/products/iget-astro-b18000-disposable-pod-device.webp",
    "themeGradient": "from-blue-300 via-sky-200 to-indigo-100"
  },
  {
    "id": "p-elfbar-raya-d3-pro-30k",
    "slug": "elfbar-raya-d3-pro-30000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-raya-d3-pro",
      "elfbar-raya-d3-pro-30k",
      "elfbar-raya-d3-pro-30000",
      "elf-bar-raya-d3-pro",
      "raya-d3-pro-30000",
      "raya-d3-pro-30k",
      "elfbar-raya-d3-pro-black-gold"
    ],
    "name": "Elfbar Raya D3 Pro 30000 Disposable Pod Device",
    "subtitle": "Black Gold Edition | 30,000 Puffs | Smart Curved Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 2900,
    "originalPrice": 3500,
    "rating": 4.9,
    "reviewsCount": 228,
    "soldCount": "950+",
    "badge": "30K Puffs",
    "puffs": 30000,
    "features": [
      {
        "text": "Up to 30,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Black Gold Luxury Design",
        "icon": "diamond"
      },
      {
        "text": "Side Smart Curved Display",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar Raya D3 Pro 30000 Disposable Pod Device (Black Gold Edition) with 30,000 puffs and smart curved side screen. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Massive 30,000 puffs with premium Black Gold embossed luxury finish",
      "Side-mounted smart digital LED screen for real-time monitoring",
      "Enhanced airflow and dual mesh coil for intense flavor output",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Coffee",
      "Cola Ice",
      "Blueberry Ice",
      "Lychee Juicy Peach",
      "Sikanji (Spiced Lemonade)",
      "Miami Mint",
      "Peach Mango Watermelon",
      "Blackberry Ice"
    ],
    "image": "/products/elfbar-raya-d3-pro-30000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-raya-d3-pro-30000-disposable-pod-device.webp",
    "themeGradient": "from-amber-300 via-yellow-200 to-amber-100"
  },
  {
    "id": "p-elfbar-raya-d3-25k",
    "slug": "elfbar-raya-d3-25000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-raya-d3",
      "elfbar-raya-d3-25k",
      "elfbar-raya-d3-25000",
      "elf-bar-raya-d3",
      "raya-d3-disposable-pod-device",
      "raya-d3-25000",
      "elfbar-raya-d3-all-flavors"
    ],
    "name": "Elfbar Raya D3 25000 Disposable Pod Device",
    "subtitle": "25,000 Puffs | 1st Triple Mesh Coil | 3 Vaping Modes",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 2300,
    "originalPrice": 3200,
    "rating": 4.9,
    "reviewsCount": 210,
    "soldCount": "850+",
    "badge": "25K Puffs",
    "puffs": 25000,
    "features": [
      {
        "text": "Up to 25,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "1st Triple Mesh Coil",
        "icon": "diamond"
      },
      {
        "text": "3 Dynamic Output Modes",
        "icon": "cloud"
      },
      {
        "text": "Full Screen Digital Display",
        "icon": "leaf"
      }
    ],
    "description": "Elfbar Raya D3 25000 Disposable Pod Device (25,000 Puffs) with world's 1st triple mesh coil and 3 output modes. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Massive 25,000 puffs capacity with revolutionary Triple Mesh Coil",
      "3 Output Modes: Eco, Normal, and Turbo for customized throat hit",
      "Large smart digital display: real-time battery and e-liquid monitor",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Strawberry Ice",
      "Watermelon Ice",
      "Pineapple Mango Ice",
      "Grape Ice",
      "Mango Peach",
      "Kiwi Passion Fruit Guava",
      "Double Mango",
      "Strawberry Watermelon",
      "Blueberry Ice",
      "Blue Razz Ice",
      "Blackberry Pomegranate Cherry",
      "Lemon Lime Ice",
      "Double Apple",
      "Strawberry Raspberry Cherry"
    ],
    "image": "/products/elfbar-raya-d3-25000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-raya-d3-25000-disposable-pod-device.webp",
    "themeGradient": "from-pink-300 via-rose-200 to-amber-100"
  },
  {
    "id": "p-elfbar-raya-d2-20k",
    "slug": "elfbar-raya-d2-20000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-raya-d2",
      "elfbar-raya-d2-20k",
      "elfbar-raya-d2-20000",
      "elf-bar-raya-d2",
      "raya-d2-disposable-pod-device",
      "raya-d2-20000",
      "elfbar-raya-d2-disposable"
    ],
    "name": "Elfbar Raya D2 20000 Disposable Pod Device",
    "subtitle": "20,000 Smooth Puffs / 14,000 Turbo Puffs | Dual Mode Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 1800,
    "originalPrice": 2800,
    "rating": 4.9,
    "reviewsCount": 182,
    "soldCount": "700+",
    "badge": "20K Puffs",
    "puffs": 20000,
    "features": [
      {
        "text": "Up to 20,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Dual Mode: Smooth & Turbo",
        "icon": "cloud"
      },
      {
        "text": "Smart HD Screen Display",
        "icon": "diamond"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "leaf"
      }
    ],
    "description": "Elfbar Raya D2 20000 Disposable Pod Device with 20K Smooth / 14K Turbo dual modes and smart screen. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Dual Vaping Modes: 20,000 Smooth Puffs or 14,000 Turbo Puffs",
      "Smart digital animation screen showing real-time e-liquid & battery status",
      "Dual Mesh Coil technology for intense flavor burst and thick clouds",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Blueberry Ice",
      "Peach Ice",
      "Grape Ice",
      "Blueberry Raspberry",
      "Peach Berry",
      "Watermelon Bubble Gum"
    ],
    "image": "/products/elfbar-raya-d2-20000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-raya-d2-20000-disposable-pod-device.webp",
    "themeGradient": "from-blue-300 via-indigo-200 to-purple-100"
  },
  {
    "id": "p-elfbar-moonnight-40k",
    "slug": "elfbar-moonnight-40000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-moonnight-40k",
      "elfbar-moonnight-40000",
      "elf-bar-moonnight-40k",
      "elfbar-moonnight",
      "moonnight-40k",
      "elfbar-moonnight-disposable"
    ],
    "name": "Elfbar Moonnight 40000 Disposable Pod Device",
    "subtitle": "40,000 Puffs | 3-Level Adjustable Power | Smart Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 3200,
    "originalPrice": 3999,
    "rating": 4.9,
    "reviewsCount": 195,
    "soldCount": "900+",
    "badge": "40K Puffs",
    "puffs": 40000,
    "features": [
      {
        "text": "Up to 40,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "3-Level Modes (Eco/Norm/Boost)",
        "icon": "diamond"
      },
      {
        "text": "Smart E-Liquid & Power Screen",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar Moonnight 40000 Disposable Pod Device (40,000 Puffs) with 3-level power adjustment and smart digital display. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Massive 40,000 puffs ultra-long-lasting capacity",
      "3-Level output mode toggle: Eco, Normal, and Boost",
      "Full smart digital display showing e-liquid level, battery %, and active mode",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Strawberry Watermelon",
      "Lychee Juicy Peach",
      "Watermelon Ice",
      "Cola Ice",
      "Peach Mango Watermelon"
    ],
    "image": "/products/elfbar-moonnight-40000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-moonnight-40000-disposable-pod-device.webp",
    "themeGradient": "from-fuchsia-300 via-pink-200 to-purple-100"
  },
  {
    "id": "p-smok-nord-kit",
    "slug": "smok-nord-pod-kit-1100mah",
    "aliasSlugs": [
      "smok-nord-kit",
      "smok-nord-pod-kit",
      "smok-nord",
      "nord-kit",
      "smok-nord-1100mah"
    ],
    "name": "SMOK Nord Pod Kit 1100mAh",
    "subtitle": "3ML Pod Capacity | 1100mAh Battery | Mesh Coil",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "SMOK",
    "category": "pod-systems",
    "price": 3500,
    "originalPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 186,
    "soldCount": "800+",
    "badge": "Best Seller",
    "puffs": null,
    "features": [
      {
        "text": "1100mAh Built-in Battery",
        "icon": "battery"
      },
      {
        "text": "3ML E-Liquid Pod",
        "icon": "leaf"
      },
      {
        "text": "Nord Mesh 0.6Ω Coil",
        "icon": "cloud"
      },
      {
        "text": "Ergonomic Resin Finish",
        "icon": "diamond"
      }
    ],
    "description": "SMOK Nord Pod Kit (1100mAh) with 3ML refillable pod and high-performance mesh coil. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic SMOK product with scratch verification code",
      "1100mAh large capacity battery for all-day vaping",
      "3ML refillable replacement pod system",
      "Includes Nord Mesh 0.6Ω (Direct Lung) & Regular 1.4Ω (MTL) coils",
      "Instant 30–60 min delivery in Gurgaon; same-day COD across Delhi NCR"
    ],
    "flavors": [
      "Blue Green Resin",
      "Blue Black Resin",
      "Red Yellow Resin",
      "Black White Resin",
      "Yellow Purple Resin",
      "Green Red Resin"
    ],
    "image": "/products/smok-nord-pod-kit-1100mah.webp",
    "cardImage": "/products/smok-nord-pod-kit-1100mah.webp",
    "themeGradient": "from-blue-200 via-indigo-100 to-purple-50"
  },
  {
    "id": "p-elfbar-bc10000",
    "slug": "elfbar-bc10000-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-bc10000",
      "elfbar-bc-10000",
      "elf-bar-bc10000",
      "elfbar-bc10000-disposable",
      "bc10000-disposable-pod-device",
      "elf-bar-bc-10000"
    ],
    "name": "Elfbar BC10000 Disposable Pod Device",
    "subtitle": "10,000 Puffs with Smart Screen Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 1650,
    "originalPrice": 2200,
    "rating": 4.9,
    "reviewsCount": 178,
    "soldCount": "750+",
    "badge": "Trending",
    "puffs": 10000,
    "features": [
      {
        "text": "Up to 10,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Smart E-Liquid & Power Screen",
        "icon": "diamond"
      },
      {
        "text": "High-Performance Mesh Coil",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar BC10000 Disposable Pod Device (10,000 Puffs) with real-time smart screen display. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Instant 30–60 min delivery in Gurgaon (DLF, Cyber City, Golf Course Rd)",
      "Same-day delivery with Cash on Delivery (COD) & Doorstep UPI in Delhi & Noida",
      "Smart digital display: Real-time battery indicator & e-liquid gauge",
      "Premium Mesh Coil for maximum cloud density and consistent flavor",
      "Type-C fast rechargeable battery"
    ],
    "flavors": [
      "Strawberry Ice",
      "Strawberry Kiwi Ice",
      "Blueberry Mint",
      "Peach Ice",
      "Peach Mango",
      "Double Mango",
      "Blueberry Ice",
      "Tobacco",
      "Watermelon Ice"
    ],
    "image": "/products/elfbar-bc10000-disposable-pod-device.webp",
    "cardImage": "/products/elfbar-bc10000-disposable-pod-device.webp",
    "themeGradient": "from-blue-200 via-sky-100 to-indigo-50"
  },
  {
    "id": "p-elfbar-raya-d1",
    "slug": "elfbar-raya-d1-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-yaya-d1-disposable-pod-device",
      "elfbar-yaya-d1",
      "elfbar-raya-d1",
      "elf-bar-raya-d1-disposable-pod-device",
      "elf-bar-raya-d1",
      "raya-d1-disposable-pod-device",
      "raya-d1",
      "elfbar-raya-d1-13000-puffs"
    ],
    "name": "Elfbar Raya D1 Disposable Pod Device",
    "subtitle": "13,000 Puffs with Smart Screen Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 1650,
    "originalPrice": 2400,
    "rating": 4.9,
    "reviewsCount": 164,
    "soldCount": "650+",
    "badge": "New Arrival",
    "puffs": 13000,
    "features": [
      {
        "text": "Up to 13,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Smart E-Liquid & Power Screen",
        "icon": "diamond"
      },
      {
        "text": "Dual Mesh Coil",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar Raya D1 Disposable Pod Device (13,000 Puffs) with smart digital screen display. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Instant 30–60 min delivery in Gurgaon (DLF, Cyber City, Golf Course Rd)",
      "Same-day delivery with Cash on Delivery (COD) & Doorstep UPI in Delhi & Noida",
      "Smart digital display: Real-time battery indicator & e-liquid gauge",
      "Premium Mesh Coil for maximum cloud density and consistent flavor",
      "Type-C fast rechargeable 650mAh battery"
    ],
    "flavors": [
      "Peach Lychee Blackcurrant",
      "Cola",
      "Ribena Lychee",
      "Mango Strawberry Ice Cream",
      "Strawberry Guava",
      "Lychee Juicy Peach",
      "Strawberry Melon",
      "Grape Slurpee"
    ],
    "image": "/products/elfbar-raya-d1-13000-puffs.webp",
    "cardImage": "/products/elfbar-raya-d1-13000-puffs.webp",
    "themeGradient": "from-fuchsia-200 via-purple-100 to-indigo-50"
  },
  {
    "id": "p-elfbar-raya-d1-black-gold",
    "slug": "elfbar-raya-d1-black-gold-disposable-pod-device",
    "aliasSlugs": [
      "elfbar-raya-d1-black-gold",
      "elfbar-yaya-d1-black-gold",
      "raya-d1-black-gold",
      "elf-bar-raya-d1-black-gold",
      "elfbar-raya-d1-black-gold-edition"
    ],
    "name": "Elfbar Raya D1 Disposable Pod Device (Black Gold)",
    "subtitle": "Black Gold Luxury Edition | 13,000 Puffs with Smart Display",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFBAR",
    "category": "disposable-vapes",
    "price": 1650,
    "originalPrice": 2400,
    "rating": 4.9,
    "reviewsCount": 152,
    "soldCount": "580+",
    "badge": "Black Gold",
    "puffs": 13000,
    "features": [
      {
        "text": "Up to 13,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Smart E-Liquid & Power Screen",
        "icon": "diamond"
      },
      {
        "text": "Black Gold Luxury Edition",
        "icon": "leaf"
      },
      {
        "text": "Type-C Fast Charging",
        "icon": "cloud"
      }
    ],
    "description": "Elfbar Raya D1 Black Gold Edition Disposable Pod Device (13,000 Puffs) with dual smart display. Fast delivery in Gurgaon & Delhi NCR.",
    "productDetails": [
      "100% Authentic Elfbar with anti-counterfeit scratch QR verification",
      "Instant 30–60 min delivery in Gurgaon (DLF, Cyber City, Golf Course Rd)",
      "Same-day delivery with Cash on Delivery (COD) & Doorstep UPI in Delhi & Noida",
      "Smart digital display: Real-time battery indicator & e-liquid gauge",
      "Premium Mesh Coil for maximum cloud density and consistent flavor",
      "Type-C fast rechargeable 650mAh battery"
    ],
    "flavors": [
      "Strawberry Cake",
      "Grape Slurpee",
      "Mango Guava",
      "Strawberry Melon",
      "Kopi O Kaw",
      "Mango King",
      "Funta Grape",
      "Watermelon Ice"
    ],
    "image": "/products/elfbar-raya-d1-black-gold.webp",
    "cardImage": "/products/elfbar-raya-d1-black-gold.webp",
    "themeGradient": "from-amber-200 via-yellow-100 to-amber-50"
  },
  {
    "id": "p-elfworld-12000-mint",
    "slug": "elfworld-12000-puffs-mint-menthol",
    "name": "Elfworld 12000 Puffs Mint Menthol",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ELFWORLD",
    "category": "disposable-vapes",
    "price": 1500,
    "originalPrice": 2000,
    "rating": 4.9,
    "reviewsCount": 154,
    "soldCount": "500+",
    "badge": "Popular",
    "puffs": 12000,
    "features": [
      {
        "text": "Digital Display",
        "icon": "cloud"
      },
      {
        "text": "Up to 12,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Mint Menthol Flavor",
        "icon": "leaf"
      },
      {
        "text": "Fast Type-C Charging",
        "icon": "diamond"
      }
    ],
    "description": "Buy Elfworld 12000 Puffs Mint Menthol Disposable Vape from Vape Store Gurgaon & Delhi | Menthol classic, cooling sensation.",
    "productDetails": [
      "Authentic product with warranty",
      "Free delivery in Gurgaon and Delhi NCR",
      "Cash on delivery available",
      "Same day delivery for orders before 6 PM"
    ],
    "flavors": [
      "Mint Menthol",
      "Cool Mint",
      "Spearmint Ice",
      "Watermelon Ice"
    ],
    "image": "/products/elfworld-12000-mint.webp",
    "cardImage": "/products/elfworld-12000-mint.webp",
    "themeGradient": "from-emerald-200 via-teal-100 to-cyan-50"
  },
  {
    "id": "p-arabisk-40k-puffs",
    "slug": "arabisk-premium-disposable-vape-40k-puffs",
    "aliasSlugs": [
      "arabisk-40k-puffs",
      "arabisk-disposable-vape-40k",
      "arabisk-vape-gurgaon-40k"
    ],
    "name": "Arabisk Premium Disposable Vape 40K Puffs",
    "storeLocation": "Vape Store Gurgaon",
    "brand": "ARABISK",
    "category": "disposable-vapes",
    "price": 3200,
    "originalPrice": 6200,
    "rating": 4.9,
    "reviewsCount": 175,
    "soldCount": "500+",
    "badge": "40K Puffs",
    "puffs": 40000,
    "features": [
      {
        "text": "Up to 40,000 Puffs",
        "icon": "battery"
      },
      {
        "text": "Rich Long-Lasting Flavor",
        "icon": "leaf"
      },
      {
        "text": "Smooth Airflow Control",
        "icon": "cloud"
      },
      {
        "text": "High-Capacity Rechargeable",
        "icon": "diamond"
      }
    ],
    "description": "Buy premium disposable vape from Arabisk Vape Store & Vape Store in Gurgaon. Enjoy up to 40,000 puffs with rich long-lasting flavor, smooth airflow, and powerful battery performance. Arabisk Vape Store Gurgaon offers authentic, high-quality disposable vapes for a premium vaping experience.",
    "productDetails": [
      "Authentic product with warranty",
      "Free delivery in Gurgaon and Delhi NCR",
      "Cash on delivery available",
      "Same day delivery for orders before 6 PM"
    ],
    "flavors": [
      "Mixed Berries",
      "Watermelon Ice",
      "Grape Mint",
      "Mango Peach"
    ],
    "image": "/products/arabisk-premium-disposable-vape-40k-puffs.webp",
    "cardImage": "/products/arabisk-premium-disposable-vape-40k-puffs.webp",
    "themeGradient": "from-amber-200 via-yellow-100 to-amber-50"
  }
];

module.exports = {
  STORE_INFO,
  CATEGORIES,
  PRODUCTS,
};
