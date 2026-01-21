import { Spotlight } from "@/components/ui/spotlight";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";

// Dynamically import components below the fold for better initial load performance
const OurMenu = dynamic(() => import("@/components/our-menu"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});
const Pricing = dynamic(() => import("@/components/pricing"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});
const ContactUs = dynamic(() => import("@/components/contact-us"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

export default function Home() {
  return (
    <>
      <Spotlight className="-z-10" fill="#F95454" />
      <Hero />
      <OurMenu />
      <Pricing />
      <Testimonials />
      <ContactUs />
    </>
  );
}
