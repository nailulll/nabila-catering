import { testimonials } from "@/constants";

export default function Testimonials() {
  return (
    <section
      className="w-full px-6 md:px-12 py-20 md:py-32 bg-warm-sand"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest mb-4">
            KATA MEREKA
          </div>
          <h2
            id="testimonials-heading"
            className="text-[40px] md:text-[60px] font-outfit text-deep-forest leading-[0.85] max-w-2xl"
          >
            Sudah Dipercaya Ratusan Keluarga
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {testimonials.map((item, index) => (
            <figure key={index} className="flex flex-col">
              <blockquote className="text-[20px] md:text-[24px] font-inter text-forest-shadow leading-[1.33] mb-6 flex-1">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-[16px] text-forest-shadow/80 font-bold uppercase tracking-[0.017em]">
                {item.name} <span className="font-normal opacity-75 mx-2">—</span> <span className="font-normal">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
