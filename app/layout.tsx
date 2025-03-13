import Announcement from "@/components/Announcement";
import CartIndicator from "@/components/CartIndicator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavItems from "@/components/NavItems";
import { popois } from "@/lib/font";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyMart",
  description:
    "EasyMart is a modern eCommerce web app designed for a smooth shopping experience. It lets users browse products, add items to their cart, and complete secure transactions with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${popois.className} bg-white text-black`}>
        <SessionProvider>
          <Navbar>
            <Announcement />
            <NavItems className="flex-row text-xs lg:flex" />
            <CartIndicator />
          </Navbar>
          {children}
          <Footer />
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
