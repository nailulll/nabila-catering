import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${fonts.className} bg-white bg-dot-black/[0.2] overflow-x-hidden`}
      >
        {children}
        <GoogleAnalytics gaId="G-ZTE7F851H5" />
        <Analytics />
      </body>
    </html>
  );
}
