import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      className="md:py-24 py-14"
      style={{ backgroundColor: "hsl(30, 25%, 94%)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="lg:mx-auto mx-5 text-center mb-12">
        {/* Section label */}
        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mb-5">
          <Quote size={18} className="text-primary" />
        </div>
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Kata Mereka
        </p>
        <h2
          id="testimonials-heading"
          className="md:text-4xl text-2xl font-bold text-[hsl(var(--warm-dark))] max-w-xl mx-auto leading-tight"
        >
          Sudah Dipercaya Ratusan Keluarga
        </h2>
        <p className="md:text-base text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mt-4 leading-relaxed">
          Dari Lakbok sampai Ciamis — ini cerita nyata dari pelanggan kami
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
}
