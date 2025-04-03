import React from "react";
import { Cover } from "./ui/cover";
import { Button } from "./ui/button";
import Link from "next/link";
import ShinyButton from "./ui/shiny-button";

const Hero = () => {
  return (
    <section className="text-center md:py-52 pt-20 pb-40 lg:mx-auto mx-5">
      <a href="https://nesthubstudios.web.id" target="_blank">
        <ShinyButton className="mb-10 bg-primary text-white text-xs md:text-sm">
          Ingin punya website seperti ini? Klik di sini
        </ShinyButton>
      </a>
      <h1 className="md:text-5xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Nikmati Masakan Rumahan yang Lezat{" "}
        <Cover>Siap Diantar Setiap Hari!</Cover>
      </h1>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto mt-5 tracking-widest leading-loose">
        Kami menyediakan makanan rumahan yang sehat dengan cita rasa asli yang
        mengingatkan Anda pada masakan ibu Anda.
      </p>
      <div className="flex gap-5 justify-center mt-10">
        <Button className="text-white py-5" asChild>
          <a href="https://wa.me/6283117656712" target="_blank">
            Kontak Sekarang
          </a>
        </Button>
        <Button className="text-white py-5 bg-dark" asChild>
          <Link href="#menu">Cek menu</Link>
        </Button>
      </div>
      {/*<Img*/}
      {/*  initial={{ y: 0 }}*/}
      {/*  animate={{ y: [-5, 0, -5], x: [0, -5, 0, 5, 0] }}*/}
      {/*  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}*/}
      {/*  src="/hero-1.png"*/}
      {/*  alt="hero"*/}
      {/*  width={500}*/}
      {/*  height={500}*/}
      {/*  className="absolute top-[30%] size-72 object-cover -Z-10 hidden md:block"*/}
      {/*/>*/}
      {/*<Img*/}
      {/*  initial={{ y: 0 }}*/}
      {/*  animate={{ y: [-3, 0, -3], x: [0, -4, 0, 6, 0] }}*/}
      {/*  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}*/}
      {/*  src="/hero-2.png"*/}
      {/*  alt="hero"*/}
      {/*  width={500}*/}
      {/*  height={500}*/}
      {/*  className="absolute -bottom-[7%] right-[13%] size-72 object-cover hidden md:block"*/}
      {/*/>*/}
      {/*<Img*/}
      {/*  initial={{ y: 0 }}*/}
      {/*  animate={{ y: [0, -4, -0], x: [0, -6, 0, 4, 0] }}*/}
      {/*  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}*/}
      {/*  src="/hero-3.png"*/}
      {/*  alt="hero"*/}
      {/*  width={500}*/}
      {/*  height={500}*/}
      {/*  className="absolute md:right-0 md:top-[7%] size-80 object-cover -right-40 bottom-0"*/}
      {/*/>*/}
      {/*<Img*/}
      {/*  src="arrow-1.svg"*/}
      {/*  alt="arrow"*/}
      {/*  width={100}*/}
      {/*  height={100}*/}
      {/*  className="absolute bottom-0 top-[2%] size-52 left-[14%]"*/}
      {/*/>*/}
      {/*<Img*/}
      {/*  src="arrow-2.svg"*/}
      {/*  alt="arrow"*/}
      {/*  width={100}*/}
      {/*  height={100}*/}
      {/*  className="absolute bottom-[15%] size-52 right-0"*/}
      {/*/>*/}
      {/*<Img*/}
      {/*  src="arrow-3.svg"*/}
      {/*  alt="arrow"*/}
      {/*  width={100}*/}
      {/*  height={100}*/}
      {/*  className="absolute bottom-0 size-72 left-[16%]"*/}
      {/*/>*/}
    </section>
  );
};

export default Hero;
