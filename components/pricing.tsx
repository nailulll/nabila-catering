import { pricingPlans, WHATSAPP_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Check, Info, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Pricing() {
  return (
    <TooltipProvider delayDuration={100}>
      <section
        className="text-center md:py-24 py-14 lg:mx-auto mx-5"
        id="pricing"
        aria-labelledby="pricing-heading"
      >
        {/* Section label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Paket Harga
        </p>
        <h2
          id="pricing-heading"
          className="md:text-4xl text-2xl font-bold text-[hsl(var(--warm-dark))] max-w-xl mx-auto leading-tight"
        >
          Harga Jujur,
          <br className="hidden sm:block" /> Kualitas Tidak Perlu Diragukan
        </h2>
        <p className="md:text-base text-sm text-[hsl(var(--muted-foreground))] max-w-lg mx-auto mt-4 leading-relaxed">
          Mulai dari makan siang sehari-hari hingga acara besar — semua ada,
          semua bisa disesuaikan dengan kantong Anda.
        </p>

        <div className="md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          {pricingPlans.map((pricing, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={index}
                className={`relative rounded-2xl text-left xl:p-12 p-8 transition-all duration-200 ${
                  isFeatured
                    ? "text-white shadow-2xl scale-[1.02]"
                    : "border border-primary/15 bg-white shadow-sm hover:shadow-md hover:shadow-primary/5"
                }`}
                style={
                  isFeatured
                    ? { backgroundColor: "hsl(4, 72%, 34%)" }
                    : undefined
                }
              >
                {/* Popular badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[hsl(38,72%,55%)] text-[hsl(10,50%,15%)] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                      <Star size={10} fill="currentColor" />
                      Pilihan Terpopuler
                    </span>
                  </div>
                )}

                {/* Title + optional tooltip */}
                <h3
                  className={`text-xl font-bold flex items-center gap-2 ${
                    isFeatured ? "text-white" : "text-[hsl(var(--warm-dark))]"
                  }`}
                >
                  {pricing.title.name}
                  {pricing.title.question && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className={`flex-shrink-0 rounded-full transition-colors ${
                            isFeatured
                              ? "text-white/50 hover:text-white/90"
                              : "text-gray-400 hover:text-primary"
                          }`}
                          aria-label="Informasi harga"
                        >
                          <Info size={15} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Harga bisa berubah tergantung pilihan menu</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </h3>

                <p
                  className={`text-sm mt-5 lg:mt-8 leading-relaxed lg:h-20 ${
                    isFeatured
                      ? "text-white/75"
                      : "text-[hsl(var(--muted-foreground))]"
                  }`}
                >
                  {pricing.description}
                </p>

                <p
                  className={`text-3xl font-bold my-6 lg:my-8 ${
                    isFeatured ? "text-white" : "text-[hsl(var(--warm-dark))]"
                  }`}
                >
                  {pricing.pricing}
                  <span
                    className={`text-sm font-normal ml-1 ${
                      isFeatured
                        ? "text-white/60"
                        : "text-[hsl(var(--muted-foreground))]"
                    }`}
                  >
                    / Pack
                  </span>
                </p>

                <Button
                  className={`py-6 w-full rounded-xl font-semibold transition-all duration-200 ${
                    isFeatured
                      ? "bg-white text-primary hover:bg-white/90 shadow-md"
                      : "text-white bg-primary hover:bg-primary/90 shadow-sm shadow-primary/20"
                  }`}
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${pricing.button.text} - ${pricing.title.name}`}
                  >
                    {pricing.button.text}
                  </a>
                </Button>

                <ul className="mt-8 space-y-3.5">
                  {pricing.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          isFeatured
                            ? feature.active
                              ? "bg-white/20"
                              : "bg-white/10"
                            : feature.active
                              ? "bg-primary/10"
                              : "bg-gray-100"
                        }`}
                      >
                        <Check
                          strokeWidth={3}
                          size={11}
                          className={
                            isFeatured
                              ? feature.active
                                ? "text-white"
                                : "text-white/35"
                              : feature.active
                                ? "text-primary"
                                : "text-gray-400"
                          }
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={`text-sm flex items-center gap-1.5 ${
                          isFeatured
                            ? feature.active
                              ? "text-white/90"
                              : "text-white/35"
                            : feature.active
                              ? "text-[hsl(var(--foreground))]"
                              : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                        {feature.question && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className={`flex-shrink-0 rounded-full transition-colors ${
                                  isFeatured
                                    ? "text-white/40 hover:text-white/80"
                                    : "text-gray-400 hover:text-primary"
                                }`}
                                aria-label="Informasi"
                              >
                                <Info size={13} />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <p>Harga bisa berubah tergantung pilihan menu</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </TooltipProvider>
  );
}
