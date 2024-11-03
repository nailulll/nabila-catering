import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants";


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