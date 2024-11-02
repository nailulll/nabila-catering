import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { menus } from "@/constants";

export default function OurMenu() {
  const cards = menus.map((card, index) => (
    <Card key={card.src} card={card} />
  ));

  return (
    <section className={"text-center md:py-20 py-10"} id="menu">
      <div className="lg:mx-auto mx-5">
        <h1 className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
          Our Menu
        </h1>
        <p className="md:text-lg text-sm font-light max-w-2xl mx-auto mt-5 tracking-widest leading-loose">
          Our signature menu choices that are always our customers' favorites, prepared with fresh ingredients and full of flavor.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}