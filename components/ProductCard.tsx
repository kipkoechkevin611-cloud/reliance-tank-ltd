"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Info } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const displayPrice = product.offerPrice || product.sellingPrice;
  const isOnOffer = product.offerPrice !== undefined;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full bg-gray-50">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-base md:text-lg text-blue-900 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.capacity} litres</p>
        {isOnOffer ? (
          <div className="mb-3">
            <p className="text-sm text-gray-500 line-through">
              KSh {product.regularPrice?.toLocaleString()}
            </p>
            <p className="text-lg md:text-xl font-bold text-green-600">
              KSh {displayPrice.toLocaleString()}
            </p>
          </div>
        ) : (
          <p className="text-lg md:text-xl font-bold text-blue-600 mb-3">
            KSh {displayPrice.toLocaleString()}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              added
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ShoppingCart className="mr-2" size={16} />
            {added ? "Added to cart" : "Add to Cart"}
          </button>
          <Link
            href={`/product/${product.id}`}
            className="inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
          >
            <Info className="mr-2" size={16} />
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
