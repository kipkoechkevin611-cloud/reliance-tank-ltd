import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Reliance Tanks Ltd - Water Storage Solutions",
  description: "Reliable water storage solutions for every need in Kenya. Browse our range of vertical cylindrical tanks, nestable tanks, conical hopper tanks, underground spherical tanks, and horizontal septic tanks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <CartProvider>
          <Navigation />
          <main className="flex-1 pb-24">{children}</main>
          <Footer />
          <FloatingCart />
        </CartProvider>
      </body>
    </html>
  );
}
