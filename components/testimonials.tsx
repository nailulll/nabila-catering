import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


const testimonials = [
  {
    quote: "The food is really good, the portions are just right, and it always arrives on time. The grilled chicken with sambal matah is the best!",
    name: "Budi",
    title: "West Jakarta",
  },
  {
    quote: "I really like the flexibility. Whether you want to change the menu or add portions, everything can be arranged easily. Highly recommended!",
    name: "Tia",
    title: "West Jakarta",
  },
  {
    quote: "Have been a regular customer of this catering for family events. The food is always fresh and the seasoning is great. All the guests love it!",
    name: "Edgar Allan Poe",
    title: "South Jakarta",
  },
];

export default function Testimonials() {
  return (
    <section className="text-center md:py-32 py-10">
      <div className="lg:mx-auto mx-5 mb-10">
        <h1 className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
          Testimonials
        </h1>
        <p className="md:text-lg text-sm font-light max-w-xl mx-auto lg:mt-5 tracking-widest leading-loose">
          What Those Who Have Tried Say
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
}