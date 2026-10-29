import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">About Reliance Tanks Ltd</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Reliance Tanks Ltd is a Kenyan company specializing in water storage solutions.
            We provide a comprehensive range of high-quality tanks designed to meet the diverse
            needs of residential, commercial, and industrial customers across Kenya.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our product catalogue includes vertical cylindrical water tanks in capacities ranging
            from 100 litres to 24,000 litres, along with specialized options such as nestable tanks,
            conical hopper tanks, underground spherical tanks, and horizontal septic tanks for
            wastewater management.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            We are committed to providing reliable water storage solutions that help our customers
            manage their water resources effectively. Our tanks are designed for durability and
            performance across various applications.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Customers can browse our complete product range online, compare specifications and prices,
            and easily prepare orders through our WhatsApp-based ordering system for convenient
            communication and coordination.
          </p>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Product Range</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Vertical Cylindrical Tanks:</strong> Available in 20 capacities from 100 to 24,000 litres
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Nestable Tanks:</strong> Space-efficient design in 300, 500, 1,000, and 2,000 litre capacities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Conical Hopper Tanks:</strong> Bottom discharge design in 1,000, 1,500, 3,000, and 5,000 litre capacities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Underground Spherical Tanks:</strong> Below-ground storage in 1,000 to 6,000 litre capacities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                <strong>Horizontal Septic Tanks:</strong> Wastewater solutions in 2,000 to 6,000 litre capacities
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions about our products or need help selecting the right tank for your needs?
            Contact us through WhatsApp for quick assistance.
          </p>
          <a
            href="https://wa.me/254751519295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="mr-2" size={20} />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
