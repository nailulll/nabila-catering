import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { menus } from "@/constants";

export default function OurMenu() {
  const cards = menus.map((card) => <Card key={card.src} card={card} />);

  return (
    <section className={"text-center md:py-20 py-10"} id="menu" aria-labelledby="menu-heading">
      <div className="lg:mx-auto mx-5">
        <h2 id="menu-heading" className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
          Menu Kami
        </h2>
        <p className="md:text-lg text-sm font-light max-w-2xl mx-auto mt-5 tracking-widest leading-loose">
          Pilihan menu khas kami yang selalu menjadi favorit pelanggan,
          disiapkan dengan bahan-bahan segar dan penuh rasa.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}
