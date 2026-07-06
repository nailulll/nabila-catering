import React from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[80vh] min-h-[600px] flex items-end justify-start overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* 
        TODO: High-quality full-bleed overhead food photography in warm natural lighting. 
        Currently using an existing image. Needs a wide, high-res image (e.g., 2400x1600).
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/nasi-ikan-bakar.jpg")' }}
        aria-hidden="true"
      />

      {/* Overlay to ensure text readability if image is too bright, though we prefer the panel */}
      <div className="absolute inset-0 z-0 bg-black/10" aria-hidden="true" />

      {/* Text Overlay Panel (Anchored Bottom-Left) */}
      <div className="relative z-10 bg-cream-canvas/90 backdrop-blur-md p-8 md:p-10 mb-0 sm:mb-8 sm:ml-8 md:mb-12 md:ml-12 max-w-[600px] rounded-tr-2xl rounded-br-2xl sm:rounded-2xl">
        {/* Eyebrow Label */}
        <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest mb-2">
          RASA MASAKAN IBU
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-[60px] md:text-[80px] font-outfit text-deep-forest leading-[0.85] -ml-[3px] mb-6"
        >
          Katering Asli Lakbok
        </h1>

        {/* CTA Button */}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-lime-glow text-forest-shadow px-[24px] py-[16px] text-[16px] md:text-[18px] font-bold tracking-[0.017em] transition-transform hover:scale-105 shadow-md"
        >
          Pesan Sekarang
        </Link>
      </div>
    </section>
  );
};

export default Hero;
