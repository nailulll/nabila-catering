import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WaButton from "@/components/wa-button";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://nabilacatering.web.id'),
  title: {
    default: "Nabila Katering Lakbok | Catering Terbaik di Ciamis",
    template: "%s | Nabila Katering"
  },
  description:
    "Nabila Katering menyediakan layanan catering di Kecamatan Lakbok, Kabupaten Ciamis. Menu beragam, harga terjangkau, cocok untuk semua acara! Pesan sekarang untuk acara Anda.",
  keywords: [
    "catering ciamis",
    "catering lakbok",
    "nabila katering",
    "makanan enak lakbok",
    "jasa catering ciamis",
    "catering murah ciamis",
    "pesan catering lakbok",
    "katering pernikahan ciamis",
    "katering acara ciamis",
    "makanan rumahan ciamis"
  ],
  authors: [{ name: "Nabila Katering" }],
  creator: "Nabila Katering",
  publisher: "Nabila Katering",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://nabilacatering.web.id',
    title: "Nabila Katering Lakbok | Catering Terbaik di Ciamis",
    description: "Layanan catering berkualitas di Kecamatan Lakbok, Ciamis. Menu beragam, harga terjangkau, cocok untuk semua acara!",
    siteName: "Nabila Katering",
    images: [
      {
        url: "/nasi-ikan-bakar.jpg",
        width: 1200,
        height: 630,
        alt: "Nabila Katering - Catering Terbaik di Lakbok, Ciamis",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nabilacatering.web.id",
    title: "Nabila Katering Lakbok | Catering Ciamis",
    description:
      "Catering berkualitas di Lakbok, Ciamis. Harga terjangkau, menu lengkap!",
    images: ["/nasi-ikan-bakar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://nabilacatering.web.id',
  },
};

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://nabilacatering.web.id",
    "name": "Nabila Katering Lakbok",
    "image": "https://nabilacatering.web.id/nasi-ikan-bakar.jpg",
    "description": "Nabila Katering menyediakan layanan catering di Kecamatan Lakbok, Kabupaten Ciamis. Menu beragam, harga terjangkau, cocok untuk semua acara!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RT 08 RW 03, Desa Baregbeg",
      "addressLocality": "Lakbok",
      "addressRegion": "Jawa Barat",
      "postalCode": "46385",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.402893",
      "longitude": "108.683532"
    },
    "url": "https://nabilacatering.web.id",
    "telephone": "+62-831-1765-6712",
    "servesCuisine": "Indonesian",
    "priceRange": "Rp 12.000 - Rp 35.000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/",
      "https://www.facebook.com/"
    ]
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fonts.className} bg-white bg-dot-black/[0.2] overflow-x-hidden antialiased`}
      >
        <Navbar />
        <div className="bg-primary text-center">
          <p className="text-white text-xs md:text-sm py-2">
            Hanya menerima pesanan dari daerah Ciamis, Lakbok.
          </p>
        </div>
        <main>{children}</main>
        <WaButton />
        <Footer />
        <Suspense fallback={null}>
          <GoogleAnalytics gaId="G-ZTE7F851H5" />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
