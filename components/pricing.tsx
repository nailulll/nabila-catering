import { pricingPlans } from "@/constants";
import { Button } from "@/components/ui/button";
import { Check, CircleHelp } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Pricing() {
  return (
    <section className={"text-center md:py-20 py-10 lg:mx-auto mx-5"} id="pricing">
      <h1 className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Catering Package
      </h1>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto mt-5 tracking-widest">
        Choose a Catering Package that Suits Your Needs
      </p>
      <div className="md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
        {pricingPlans.map((pricing, index) => (
          <div key={index} className="border border-primary rounded-3xl text-left xl:p-14 p-10">
            <h1
              className={`md:text-2xl text-xl font-semibold gap-1 flex items-center ${pricing.title.active ? "text-primary" : "text-dark"}`}>
              {pricing.title.name}
              {pricing.title.question && (
                <AnimatedTooltip
                  id={`title-${index}`}
                  tooltip="Prices can change depending on what you choose"
                  node={<CircleHelp className="fill-dark text-white" />}
                />
              )}
            </h1>
            <p className="md:text-sm text-xs font-light mt-5 lg:mt-10 tracking-widest lg:h-28">
              {pricing.description}
            </p>
            <p className="md:text-3xl text-xl font-semibold my-5 lg:my-10 text-dark">
              {pricing.pricing} <span className="text-sm text-dark font-normal">/ Pack</span>
            </p>
            <Button className={`text-white py-7 w-full ${pricing.button.active ? "bg-primary" : "bg-dark"}`}>
              {pricing.button.text}
            </Button>
            <div className="mt-10 space-y-5">
              {pricing.features.map((feature, idx) => (
                <div key={idx} className="mb-3 flex items-center gap-3">
                  <Check strokeWidth={4} className={`${feature.active ? "text-primary" : "text-dark"}`} size={18} />
                  <span className="text-sm text-gray-600 flex">
                    {feature.name}
                    {/*@ts-ignore*/}
                    {feature?.question && (
                      <AnimatedTooltip
                        id={`title-${index}`}
                        tooltip="Prices can change depending on what you choose"
                        node={<CircleHelp className="fill-dark text-white" />}
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}