import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WaButton from "@/components/wa-button";

export const metadata: Metadata = {
  title: "Nabila Katering Lakbok | Catering Terbaik di Ciamis",
  description:
    "Nabila Katering menyediakan layanan catering di Kecamatan Lakbok, Kabupaten Ciamis. Menu beragam, harga terjangkau, cocok untuk semua acara!",
  keywords: [
    "catering ciamis",
    "catering lakbok",
    "nabila katering",
    "makanan enak lakbok",
    "jasa catering ciamis",
  ],
  openGraph: {
    title: "Nabila Katering Lakbok | Catering Terbaik di Ciamis",
    description: "Layanan catering berkualitas di Kecamatan Lakbok, Ciamis.",
    url: "https://nabilacatering.web.id",
    siteName: "Nabila Katering",
    images: [
      {
        url: "https://nabilacatering.web.id/nasi-ikan-bakar.jpg",
        width: 1200,
        height: 630,
        alt: "Nabila Katering - Catering Terbaik di Lakbok, Ciamis",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nabilacatering.web.id",
    title: "Nabila Katering Lakbok | Catering Ciamis",
    description:
      "Catering berkualitas di Lakbok, Ciamis. Harga terjangkau, menu lengkap!",
    images: ["https://nabilacatering.web.id/nasi-ikan-bakar.jpg"],
  },
};

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fonts.className} bg-white bg-dot-black/[0.2] overflow-x-hidden`}
      >
        <Navbar />
        <div className="bg-primary text-center">
          <p className="text-white text-xs md:text-sm py-2">
            Hanya menerima pesanan dari daerah Ciamis, Lakbok.
          </p>
        </div>
        {children}
        <WaButton />
        <Footer />
      </body>

      <GoogleAnalytics gaId="G-ZTE7F851H5" />
    </html>
  );
}
