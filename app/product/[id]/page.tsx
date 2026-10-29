"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getProductsByCategory, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-blue-600 hover:text-blue-800">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.mainImage, ...(product.additionalImages || [])];
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/shop"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative h-96 bg-white rounded-lg mb-4 overflow-hidden w-full">
              <Image
                src={images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index ? "border-blue-600" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.category}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-6">
              {product.capacity} litres
            </p>

            {product.offerPrice ? (
              <div className="mb-6">
                <p className="text-xl text-gray-500 line-through mb-1">
                  {formatPrice(product.regularPrice!)}
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {formatPrice(product.offerPrice)}
                </p>
                <p className="text-sm text-green-600 font-medium">Special Offer</p>
              </div>
            ) : (
              <p className="text-3xl font-bold text-blue-600 mb-6">
                {formatPrice(product.sellingPrice)}
              </p>
            )}

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease quantity"
                >
                  <Minus size={20} />
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-20 text-center border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={quantity < 1}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600">
                Line total:{" "}
                <span className="font-semibold text-blue-900">
                  {formatPrice((product.offerPrice || product.sellingPrice) * quantity)}
                </span>
              </p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
