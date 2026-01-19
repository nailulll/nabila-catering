import { Spotlight } from "@/components/ui/spotlight";
import Hero from "@/components/hero";
import OurMenu from "@/components/our-menu";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <main className="py-10">
      <Spotlight className="-z-10" fill="#F95454" />
      <Hero />
      <OurMenu />
      <Pricing />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
