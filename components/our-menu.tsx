import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { menus } from "@/constants";
import { UtensilsCrossed } from "lucide-react";

export default function OurMenu() {
  const cards = menus.map((card) => <Card key={card.src} card={card} />);

  return (
    <section
      className="md:py-24 py-14"
      id="menu"
      aria-labelledby="menu-heading"
    >
      <div className="lg:mx-auto mx-5 text-center mb-6">
        {/* Icon accent */}
        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mb-5">
          <UtensilsCrossed size={18} className="text-primary" />
        </div>
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Yang Lagi Favorit
        </p>
        <h2
          id="menu-heading"
          className="md:text-4xl text-2xl font-bold text-[hsl(var(--warm-dark))] max-w-xl mx-auto leading-tight"
        >
          Masakan yang Selalu Habis Duluan
        </h2>
        <p className="md:text-base text-sm text-[hsl(var(--muted-foreground))] max-w-lg mx-auto mt-4 leading-relaxed">
          Dari gorengan hangat sampai nasi komplit — setiap menu dibuat dari
          bahan segar pilihan, dimasak dengan bumbu khas yang bikin nagih.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}
