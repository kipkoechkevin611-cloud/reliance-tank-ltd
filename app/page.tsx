import Link from "next/link";
import Image from "next/image";
import { products, categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const verticalProducts = products.filter(
    (p) => p.category === "Vertical Cylindrical Tanks"
  );

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center px-4 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/products/vertical-cylindrical/vertical.jpeg"
            alt="Reliance Tanks Ltd - Water Storage Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Reliable Water Storage Solutions for Every Need
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our range of water storage tanks and specialized tank solutions in different capacities to suit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Shop All Tanks
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="#vertical-tanks"
              className="inline-flex items-center justify-center bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors w-full sm:w-auto"
            >
              Explore Vertical Tanks
            </Link>
          </div>
          <p className="text-lg text-blue-100 mt-6">
            Call us: <a href="tel:0751519295" className="font-semibold hover:text-white transition-colors">0751519295</a>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Welcome to Reliance Tanks Ltd
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We provide high-quality water storage solutions designed for durability and reliability. Our tanks are engineered to meet diverse needs across residential, commercial, and industrial applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From compact 100L tanks to large 24,000L capacity tanks, we have the right solution for your water storage requirements.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
            Our Product Categories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our range of specialized water storage tanks
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const categoryProducts = products.filter((p) => p.category === category);
              const categoryImage = categoryProducts[0]?.mainImage || "";
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={categoryImage}
                      alt={category}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">{category}</h3>
                    <p className="text-sm text-gray-600">
                      {categoryProducts.length} products
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vertical-tanks" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Shop Vertical Cylindrical Water Tanks
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our complete range of vertical cylindrical tanks available in various capacities to suit your water storage needs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {verticalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Tank Categories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Why Choose the Right Tank Capacity?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Selecting the appropriate tank size ensures efficient water storage for your specific needs
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-blue-900 mb-3">Small Tanks (100L - 500L)</h3>
              <p className="text-gray-700">
                Ideal for residential use, small gardens, and auxiliary water storage. Perfect for households with limited space or specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-blue-900 mb-3">Medium Tanks (1,000L - 5,000L)</h3>
              <p className="text-gray-700">
                Suitable for larger homes, small businesses, and moderate water consumption. Provides reliable storage for daily use and emergencies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-blue-900 mb-3">Large Tanks (6,000L - 15,000L)</h3>
              <p className="text-gray-700">
                Designed for commercial properties, farms, and industrial applications. Ensures substantial water supply for continuous operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-blue-900 mb-3">Extra Large Tanks (16,000L - 24,000L)</h3>
              <p className="text-gray-700">
                Maximum capacity solutions for large-scale industrial use, agricultural irrigation, and significant water storage requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Order
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Products</h3>
              <p className="text-blue-100">
                Explore our range of water storage tanks and select the capacity that suits your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Add to Cart</h3>
              <p className="text-blue-100">
                Add products to your cart and review your selections with accurate pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order via WhatsApp</h3>
              <p className="text-blue-100">
                Provide your details and send your order directly through WhatsApp for easy communication.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Explore All Tank Categories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
