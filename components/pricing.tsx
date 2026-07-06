import { pricingPlans, WHATSAPP_URL } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section
      className="w-full px-6 md:px-12 py-20 md:py-32 bg-sage-mist"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:text-center flex flex-col md:items-center">
          <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest mb-4">
            PILIHAN PAKET
          </div>
          <h2
            id="pricing-heading"
            className="text-[40px] md:text-[60px] font-outfit text-deep-forest leading-[0.85] max-w-2xl"
          >
            Harga Jujur, Rasa Selalu Maksimal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((pricing, index) => (
            <div
              key={index}
              className="bg-cream-canvas rounded-[24px] p-8 md:p-10 flex flex-col h-full"
            >
              <h3 className="text-[24px] font-bold text-forest-shadow mb-4">
                {pricing.title.name}
              </h3>

              <p className="text-[16px] text-forest-shadow/80 leading-[1.33] mb-8 min-h-[60px]">
                {pricing.description}
              </p>

              <div className="text-[40px] font-outfit text-deep-forest leading-[0.85] mb-8">
                {pricing.pricing}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pricing.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-deep-forest shrink-0 mt-1">
                      {feature.active ? "●" : "○"}
                    </span>
                    <span
                      className={`text-[16px] leading-[1.25] ${
                        feature.active
                          ? "text-forest-shadow"
                          : "text-forest-shadow/50 line-through"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full rounded-full border-2 border-deep-forest bg-transparent text-deep-forest px-[24px] py-[16px] text-[16px] font-bold hover:bg-deep-forest hover:text-white transition-colors"
              >
                {pricing.button.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
