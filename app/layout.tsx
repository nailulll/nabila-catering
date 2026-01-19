import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

// Using system fonts as fallback when Google Fonts is not available
const fontClass = "font-sans";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontClass} bg-white bg-dot-black/[0.2] overflow-x-hidden`}
      >
        {children}
        <GoogleAnalytics gaId="G-ZTE7F851H5" />
        <Analytics />
      </body>
    </html>
  );
}
