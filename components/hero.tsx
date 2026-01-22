import React from "react";
import { Cover } from "./ui/cover";
import { Button } from "./ui/button";
import Link from "next/link";
import ShinyButton from "./ui/shiny-button";
import { WHATSAPP_URL } from "@/constants";

const Hero = () => {
  return (
    <section className="text-center md:py-52 pt-20 pb-40 lg:mx-auto mx-5" aria-labelledby="hero-heading">
      <a 
        href="https://nesthubstudios.web.id" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ingin punya website seperti ini? Kunjungi Nest Hub Studios"
      >
        <ShinyButton className="mb-10 bg-primary text-white text-xs md:text-sm">
          Ingin punya website seperti ini? Klik di sini
        </ShinyButton>
      </a>
      <h1 id="hero-heading" className="md:text-5xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Nikmati Masakan Rumahan yang Lezat{" "}
        <Cover>Siap Diantar Setiap Hari!</Cover>
      </h1>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto mt-5 tracking-widest leading-loose">
        Kami menyediakan makanan rumahan yang sehat dengan cita rasa asli yang
        mengingatkan Anda pada masakan ibu Anda.
      </p>
      <div className="flex gap-5 justify-center mt-10">
        <Button className="text-white py-5" asChild>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi kami melalui WhatsApp"
          >
            Kontak Sekarang
          </a>
        </Button>
        <Button className="text-white py-5 bg-dark" asChild>
          <Link href="#menu" aria-label="Lihat menu kami">Cek menu</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
