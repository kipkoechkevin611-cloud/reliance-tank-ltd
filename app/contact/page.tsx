"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: This form is not connected to a backend. In a production environment,
    // you would integrate with a form submission service or backend API.
    // For now, we redirect to WhatsApp with the message as a working alternative.
    const whatsappMessage = encodeURIComponent(
      `Hello Reliance Tanks Ltd,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/254751519295?text=${whatsappMessage}`, "_blank");
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a
                    href="https://wa.me/254751519295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    0751519295
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:reliancetanksltd@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    reliancetanksltd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Quick Response:</strong> For the fastest response, contact us via WhatsApp. Our team will assist you with product inquiries, orders, and delivery information.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Message Redirected to WhatsApp</p>
                <p className="text-sm">
                  Your message has been prepared and WhatsApp has been opened. Please review and send your message to complete the contact request.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-green-600 hover:text-green-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Your message will be sent through WhatsApp for immediate assistance
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
          <p className="text-blue-100">
            For inquiries about product availability, delivery schedules, and pricing, please contact us via WhatsApp. Our team will respond to your questions and help you find the right water storage solution for your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
