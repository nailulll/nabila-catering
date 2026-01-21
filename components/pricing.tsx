import { pricingPlans, WHATSAPP_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Check, CircleHelp } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Pricing() {
  return (
    <section
      className={"text-center md:py-20 py-10 lg:mx-auto mx-5"}
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <h2 id="pricing-heading" className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Paket Katering
      </h2>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto mt-5 tracking-widest">
        Pilih Paket Katering yang Sesuai dengan Kebutuhan Anda
      </p>
      <div className="md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
        {pricingPlans.map((pricing, index) => (
          <article
            key={index}
            className="border border-primary rounded-3xl text-left xl:p-14 p-10"
          >
            <h3
              className={`md:text-2xl text-xl font-semibold gap-1 flex items-center ${
                pricing.title.active ? "text-primary" : "text-dark"
              }`}
            >
              {pricing.title.name}
              {pricing.title.question && (
                <AnimatedTooltip
                  id={`title-${index}`}
                  tooltip="Harga bisa berubah tergantung pilihan menu"
                  node={<CircleHelp className="fill-dark text-white" aria-label="Informasi harga" />}
                />
              )}
            </h3>
            <p className="md:text-sm text-xs font-light mt-5 lg:mt-10 tracking-widest lg:h-28">
              {pricing.description}
            </p>
            <p className="md:text-3xl text-xl font-semibold my-5 lg:my-10 text-dark">
              {pricing.pricing}{" "}
              <span className="text-sm text-dark font-normal">/ Pack</span>
            </p>
            <Button
              className={`text-white py-7 w-full ${
                pricing.button.active ? "bg-primary" : "bg-dark"
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
            <ul className="mt-10 space-y-5">
              {pricing.features.map((feature, idx) => (
                <li key={idx} className="mb-3 flex items-center gap-3">
                  <Check
                    strokeWidth={4}
                    className={`${
                      feature.active ? "text-primary" : "text-dark"
                    }`}
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 flex">
                    {feature.name}
                    {feature.question && (
                      <AnimatedTooltip
                        id={`feature-${index}-${idx}`}
                        tooltip="Harga bisa berubah tergantung pilihan menu"
                        node={<CircleHelp className="fill-dark text-white" aria-label="Informasi harga" />}
                      />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
