import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { WHATSAPP_URL } from "@/constants";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative text-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(4 72% 38% / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-5 pt-20 pb-16 md:pt-32 md:pb-28">
        {/* Area badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary/8 border border-primary/20 text-primary text-xs font-medium px-3.5 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <MapPin size={12} strokeWidth={2.5} />
          <span>Melayani area Ciamis &amp; Lakbok</span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-[hsl(var(--warm-dark))] leading-[1.15] tracking-tight mb-6"
        >
          Rasa Masakan Ibu,{" "}
          <span className="relative inline-block">
            <span className="text-primary">Diantarkan ke Pintu Anda</span>
            <svg
              className="absolute -bottom-5 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 9.5C60 3 140 1 298 6"
                stroke="hsl(4, 72%, 38%)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-xl mx-auto leading-relaxed mb-10">
          Katering rumahan asli Lakbok, Ciamis — dibuat dari bahan segar,
          dimasak dengan penuh rasa, dan siap memperindah momen spesial Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button
            className="text-white bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
            asChild
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan katering via WhatsApp"
            >
              Pesan Sekarang
              <ArrowRight
                size={16}
                className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </Button>
          <Button
            className="rounded-full px-8 py-6 text-base font-medium border-2 border-primary/30 text-primary bg-transparent hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5"
            variant="outline"
            asChild
          >
            <Link href="#menu" aria-label="Lihat menu kami">
              Lihat Menu
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            "Dipercaya warga Lakbok & Ciamis",
            "Bahan segar, dimasak harian",
            "Harga jujur, rasa bintang lima",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))]"
            >
              <CheckCircle2
                size={13}
                className="text-primary"
                strokeWidth={2.5}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Nest Hub subtle link */}
      <div className="pb-6">
        <a
          href="https://nesthubstudios.web.id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website ini dibuat oleh Nest Hub Studios"
          className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors duration-200"
        >
          <span>Mau punya website seperti ini?</span>
          <span className="text-primary font-medium underline underline-offset-2">
            Kunjungi Nest Hub Studios
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
