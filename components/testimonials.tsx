import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants";

export default function Testimonials() {
  return (
    <section className="text-center md:py-32 py-10" aria-labelledby="testimonials-heading">
      <div className="lg:mx-auto mx-5 mb-10">
        <h2 id="testimonials-heading" className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
          Testimoni
        </h2>
        <p className="md:text-lg text-sm font-light max-w-xl mx-auto lg:mt-5 tracking-widest leading-loose">
          Apa Kata Mereka Yang Telah Mencoba
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
}
