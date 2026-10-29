"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    deliveryLocation: ""
  });
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [orderError, setOrderError] = useState("");

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
    setShowClearConfirm(false);
  };

  const handleOrderNow = () => {
    setOrderError("");

    if (!customerDetails.name.trim()) {
      setOrderError("Please enter your name");
      return;
    }
    if (!customerDetails.phone.trim()) {
      setOrderError("Please enter your phone number");
      return;
    }
    if (!customerDetails.deliveryLocation.trim()) {
      setOrderError("Please enter your delivery location");
      return;
    }

    let message = "RELIANCE TANKS LTD — ORDER REQUEST\n\n";
    message += `Customer name: ${customerDetails.name}\n`;
    message += `Phone number: ${customerDetails.phone}\n`;
    if (customerDetails.email.trim()) {
      message += `Email: ${customerDetails.email}\n`;
    }
    message += `Delivery location: ${customerDetails.deliveryLocation}\n\n`;
    message += "ORDER ITEMS\n\n";

    cart.forEach((item) => {
      const lineTotal = item.product.sellingPrice * item.quantity;
      message += `${item.product.name}\n`;
      message += `Category: ${item.product.category}\n`;
      message += `Capacity: ${item.product.capacity} litres\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Unit price: ${formatPrice(item.product.sellingPrice)}\n`;
      message += `Line total: ${formatPrice(lineTotal)}\n\n`;
    });

    const grandTotal = getTotalPrice();
    message += `Grand total: ${formatPrice(grandTotal)}\n\n`;
    message += "Please confirm product availability, delivery arrangements, and any additional charges before payment.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254751519295?text=${encodedMessage}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Browse our products and add items to your cart to place an order.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4"
              >
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.product.mainImage}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <Link
                    href={`/product/${item.product.id}`}
                    className="font-semibold text-lg text-blue-900 hover:text-blue-600"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-gray-600">{item.product.category}</p>
                  <p className="text-sm text-gray-600">{item.product.capacity} litres</p>
                  {item.product.offerPrice ? (
                    <div className="mt-1">
                      <p className="text-sm text-gray-500 line-through">
                        {formatPrice(item.product.regularPrice!)}
                      </p>
                      <p className="font-bold text-green-600">
                        {formatPrice(item.product.offerPrice)}
                      </p>
                    </div>
                  ) : (
                    <p className="font-bold text-blue-600 mt-1">
                      {formatPrice(item.product.sellingPrice)}
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => handleRemoveItem(item.product.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-bold text-blue-900 mt-2">
                    {formatPrice(item.product.sellingPrice * item.quantity)}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowClearConfirm(true)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear Cart
            </button>

            {showClearConfirm && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800 mb-4">Are you sure you want to clear your cart?</p>
                <div className="flex gap-4">
                  <button
                    onClick={handleClearCart}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Yes, Clear Cart
                  </button>
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-blue-900">
                  <span>Total</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerDetails.email}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Location *
                  </label>
                  <textarea
                    id="deliveryLocation"
                    value={customerDetails.deliveryLocation}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, deliveryLocation: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {orderError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg mb-4">
                  {orderError}
                </div>
              )}

              <button
                onClick={handleOrderNow}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Order Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your order will be prepared and sent via WhatsApp for confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
