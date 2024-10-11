import { popois } from "@/lib/font";
import type { Metadata } from "next";
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
      <body
        className={`antialiased ${popois.className} bg-primaryWhiteColor text-black`}
      >
        {children}
      </body>
    </html>
  );
}
