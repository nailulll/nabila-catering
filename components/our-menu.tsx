import { menus, WHATSAPP_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurMenu() {
  return (
    <section
      className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-32 bg-cream-canvas"
      id="menu"
      aria-labelledby="menu-heading"
    >
      <div className="mb-16">
        <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest mb-4">
          MENU KAMI
        </div>
        <h2
          id="menu-heading"
          className="text-[40px] md:text-[60px] font-outfit text-deep-forest leading-[0.85] max-w-2xl"
        >
          Masakan yang Selalu Habis Duluan
        </h2>
      </div>

      {/* 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {menus.map((card, index) => (
          <div key={index} className="flex flex-col group">
            {/* Image (The Card Surface) */}
            <div className="relative w-full aspect-square rounded-[20px] overflow-hidden bg-warm-sand mb-6">
              {/* 
                TODO: Use actual high-res product photos of food. 
                Currently using placeholders or existing assets. 
              */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <h3 className="text-[20px] font-bold text-forest-shadow mb-2">
                {card.title}
              </h3>
              <p className="text-[16px] text-forest-shadow/80 leading-[1.25] mb-4 flex-1">
                {card.category}
              </p>
              
              {/* Ghost Text Link */}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[16px] font-bold text-forest-shadow hover:underline decoration-2 underline-offset-4"
              >
                Pesan sekarang
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
