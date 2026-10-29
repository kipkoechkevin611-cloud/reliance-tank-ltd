"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I browse and select tank capacities?",
    answer: "Visit our Shop page to view all available products. You can filter by category to see specific tank types like Vertical Cylindrical Tanks, Nestable Tanks, Conical Hopper Tanks, Underground Spherical Tanks, or Horizontal Septic Tanks. Each product displays its capacity in litres, making it easy to compare options."
  },
  {
    question: "How is product pricing displayed?",
    answer: "All prices are shown in Kenyan Shillings (KSh). For most products, we display a single selling price. For promotional items like Underground Spherical Tanks and Horizontal Septic Tanks, we show both the regular price (with strikethrough) and the special offer price. The offer price is used for all calculations."
  },
  {
    question: "How do I add products to my cart?",
    answer: "Navigate to any product page and select the quantity you need, then click the 'Add to Cart' button. You can also add products directly from the Shop page by clicking 'View Details' first. Your cart will save automatically and persist even if you refresh the page."
  },
  {
    question: "How do I prepare an order through WhatsApp?",
    answer: "Once you have added all desired products to your cart, go to the Cart page. Fill in your name, phone number, and delivery location (email is optional). Click the 'Order Now' button, which will open WhatsApp with a pre-formatted message containing your order details. Review and send the message to complete your order request."
  },
  {
    question: "How do I provide delivery location details?",
    answer: "When you're ready to place an order, fill in the 'Delivery Location' field in the customer details form on the Cart page. This information will be included in your WhatsApp message so the company can confirm delivery arrangements with you."
  },
  {
    question: "How can I ask about availability and delivery?",
    answer: "After submitting your order through WhatsApp, the company will contact you to confirm product availability, delivery arrangements, and any additional charges. You can also reach out directly via WhatsApp at 0751519295 to inquire about specific products or delivery to your location before placing an order."
  },
  {
    question: "Are there additional charges like delivery or installation?",
    answer: "Delivery charges, installation fees, and any other additional costs are not included in the listed product prices. These must be confirmed directly with the company when you place your order. The company will provide information about delivery and installation based on your specific location and requirements."
  },
  {
    question: "What payment methods are available?",
    answer: "Payment arrangements are confirmed directly with the company when you place your order through WhatsApp. The company will provide details about available payment methods and procedures based on your order and location."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-blue-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-blue-600 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-6">
            If you couldn't find the answer to your question, feel free to contact us directly through WhatsApp.
          </p>
          <a
            href="https://wa.me/254751519295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
