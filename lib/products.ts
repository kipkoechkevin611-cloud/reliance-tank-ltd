export interface Product {
  id: string;
  name: string;
  category: string;
  capacity: number;
  regularPrice?: number;
  offerPrice?: number;
  sellingPrice: number;
  mainImage: string;
  additionalImages?: string[];
  description: string;
}

export const products: Product[] = [
  // CATEGORY A — VERTICAL CYLINDRICAL WATER TANKS (20 products)
  {
    id: "vc-100",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 100,
    sellingPrice: 2000,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-200",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 200,
    sellingPrice: 3000,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-300",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 300,
    sellingPrice: 4000,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-500",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 500,
    sellingPrice: 5500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-1000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 1000,
    sellingPrice: 8500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-1350",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 1350,
    sellingPrice: 10300,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-1500",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 1500,
    sellingPrice: 11300,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-1900",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 1900,
    sellingPrice: 12800,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-2000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 2000,
    sellingPrice: 13500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-2500",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 2500,
    sellingPrice: 15500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-3000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 3000,
    sellingPrice: 17500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-4000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 4000,
    sellingPrice: 22500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-5000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 5000,
    sellingPrice: 29500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-6000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 6000,
    sellingPrice: 33500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-8000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 8000,
    sellingPrice: 42500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-10000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 10000,
    sellingPrice: 59500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-15000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 15000,
    sellingPrice: 92000,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-16000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 16000,
    sellingPrice: 96500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-20000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 20000,
    sellingPrice: 126500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },
  {
    id: "vc-24000",
    name: "Vertical Cylindrical Tank",
    category: "Vertical Cylindrical Tanks",
    capacity: 24000,
    sellingPrice: 148500,
    mainImage: "/products/vertical-cylindrical/vertical.jpeg",
    additionalImages: ["/products/vertical-cylindrical/vertical cylindrical blue.webp"],
    description: "Vertical cylindrical water tank for water storage."
  },

  // CATEGORY B — NESTABLE TANKS (4 products)
  {
    id: "nest-300",
    name: "Nestable Tank",
    category: "Nestable Tanks",
    capacity: 300,
    sellingPrice: 7450,
    mainImage: "/products/nestable/NESTABLE NEW.jpeg",
    description: "Nestable water tank designed for efficient storage and transport."
  },
  {
    id: "nest-500",
    name: "Nestable Tank",
    category: "Nestable Tanks",
    capacity: 500,
    sellingPrice: 10300,
    mainImage: "/products/nestable/NESTABLE NEW.jpeg",
    description: "Nestable water tank designed for efficient storage and transport."
  },
  {
    id: "nest-1000",
    name: "Nestable Tank",
    category: "Nestable Tanks",
    capacity: 1000,
    sellingPrice: 16500,
    mainImage: "/products/nestable/NESTABLE NEW.jpeg",
    description: "Nestable water tank designed for efficient storage and transport."
  },
  {
    id: "nest-2000",
    name: "Nestable Tank",
    category: "Nestable Tanks",
    capacity: 2000,
    sellingPrice: 32500,
    mainImage: "/products/nestable/NESTABLE NEW.jpeg",
    description: "Nestable water tank designed for efficient storage and transport."
  },

  // CATEGORY C — CONICAL HOPPER TANKS (4 products)
  {
    id: "cone-1000",
    name: "Conical Hopper Tank",
    category: "Conical Hopper Tanks",
    capacity: 1000,
    sellingPrice: 24500,
    mainImage: "/products/conical-hopper/CONICAL.jpeg",
    additionalImages: ["/products/conical-hopper/conical1.jpeg"],
    description: "Conical hopper tank with bottom discharge design for complete drainage."
  },
  {
    id: "cone-1500",
    name: "Conical Hopper Tank",
    category: "Conical Hopper Tanks",
    capacity: 1500,
    sellingPrice: 32000,
    mainImage: "/products/conical-hopper/CONICAL.jpeg",
    additionalImages: ["/products/conical-hopper/conical1.jpeg"],
    description: "Conical hopper tank with bottom discharge design for complete drainage."
  },
  {
    id: "cone-3000",
    name: "Conical Hopper Tank",
    category: "Conical Hopper Tanks",
    capacity: 3000,
    sellingPrice: 57500,
    mainImage: "/products/conical-hopper/CONICAL.jpeg",
    additionalImages: ["/products/conical-hopper/conical1.jpeg"],
    description: "Conical hopper tank with bottom discharge design for complete drainage."
  },
  {
    id: "cone-5000",
    name: "Conical Hopper Tank",
    category: "Conical Hopper Tanks",
    capacity: 5000,
    sellingPrice: 92000,
    mainImage: "/products/conical-hopper/CONICAL.jpeg",
    additionalImages: ["/products/conical-hopper/conical1.jpeg"],
    description: "Conical hopper tank with bottom discharge design for complete drainage."
  },

  // CATEGORY D — UNDERGROUND SPHERICAL TANKS (5 products)
  {
    id: "us-1000",
    name: "Underground Spherical Tank",
    category: "Underground Spherical Tanks",
    capacity: 1000,
    regularPrice: 28500,
    offerPrice: 22800,
    sellingPrice: 22800,
    mainImage: "/products/underground-spherical/Underground Tanks.jpeg",
    additionalImages: ["/products/underground-spherical/underground1.jpeg"],
    description: "Underground spherical tank designed for below-ground water storage."
  },
  {
    id: "us-2000",
    name: "Underground Spherical Tank",
    category: "Underground Spherical Tanks",
    capacity: 2000,
    regularPrice: 55200,
    offerPrice: 44160,
    sellingPrice: 44160,
    mainImage: "/products/underground-spherical/Underground Tanks.jpeg",
    additionalImages: ["/products/underground-spherical/underground1.jpeg"],
    description: "Underground spherical tank designed for below-ground water storage."
  },
  {
    id: "us-3000",
    name: "Underground Spherical Tank",
    category: "Underground Spherical Tanks",
    capacity: 3000,
    regularPrice: 82500,
    offerPrice: 66000,
    sellingPrice: 66000,
    mainImage: "/products/underground-spherical/Underground Tanks.jpeg",
    additionalImages: ["/products/underground-spherical/underground1.jpeg"],
    description: "Underground spherical tank designed for below-ground water storage."
  },
  {
    id: "us-5000",
    name: "Underground Spherical Tank",
    category: "Underground Spherical Tanks",
    capacity: 5000,
    regularPrice: 138000,
    offerPrice: 110400,
    sellingPrice: 110400,
    mainImage: "/products/underground-spherical/Underground Tanks.jpeg",
    additionalImages: ["/products/underground-spherical/underground1.jpeg"],
    description: "Underground spherical tank designed for below-ground water storage."
  },
  {
    id: "us-6000",
    name: "Underground Spherical Tank",
    category: "Underground Spherical Tanks",
    capacity: 6000,
    regularPrice: 165000,
    offerPrice: 132000,
    sellingPrice: 132000,
    mainImage: "/products/underground-spherical/Underground Tanks.jpeg",
    additionalImages: ["/products/underground-spherical/underground1.jpeg"],
    description: "Underground spherical tank designed for below-ground water storage."
  },

  // CATEGORY E — HORIZONTAL SEPTIC TANKS (4 products)
  {
    id: "hs-2000",
    name: "Horizontal Septic Tank",
    category: "Horizontal Septic Tanks",
    capacity: 2000,
    regularPrice: 55200,
    offerPrice: 44160,
    sellingPrice: 44160,
    mainImage: "/products/horizontal-septic/SEPTIC-TANK_1-scaled-1.jpg",
    additionalImages: ["/products/horizontal-septic/horizantal.jpeg"],
    description: "Horizontal septic tank for wastewater and sanitation applications."
  },
  {
    id: "hs-3000",
    name: "Horizontal Septic Tank",
    category: "Horizontal Septic Tanks",
    capacity: 3000,
    regularPrice: 82500,
    offerPrice: 66000,
    sellingPrice: 66000,
    mainImage: "/products/horizontal-septic/SEPTIC-TANK_1-scaled-1.jpg",
    additionalImages: ["/products/horizontal-septic/horizantal.jpeg"],
    description: "Horizontal septic tank for wastewater and sanitation applications."
  },
  {
    id: "hs-5000",
    name: "Horizontal Septic Tank",
    category: "Horizontal Septic Tanks",
    capacity: 5000,
    regularPrice: 138000,
    offerPrice: 110400,
    sellingPrice: 110400,
    mainImage: "/products/horizontal-septic/SEPTIC-TANK_1-scaled-1.jpg",
    additionalImages: ["/products/horizontal-septic/horizantal.jpeg"],
    description: "Horizontal septic tank for wastewater and sanitation applications."
  },
  {
    id: "hs-6000",
    name: "Horizontal Septic Tank",
    category: "Horizontal Septic Tanks",
    capacity: 6000,
    regularPrice: 165000,
    offerPrice: 132000,
    sellingPrice: 132000,
    mainImage: "/products/horizontal-septic/SEPTIC-TANK_1-scaled-1.jpg",
    additionalImages: ["/products/horizontal-septic/horizantal.jpeg"],
    description: "Horizontal septic tank for wastewater and sanitation applications."
  }
];

export const categories = [
  "Vertical Cylindrical Tanks",
  "Nestable Tanks",
  "Conical Hopper Tanks",
  "Underground Spherical Tanks",
  "Horizontal Septic Tanks"
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function formatPrice(price: number): string {
  return `KSh ${price.toLocaleString()}`;
}
