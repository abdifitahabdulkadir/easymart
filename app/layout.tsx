import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "EasyMart",
  description:
    "EasyMart is a modern eCommerce web app designed for a smooth shopping experience. It lets users browse products, add items to their cart, and complete secure transactions with ease",
};

const popois = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
