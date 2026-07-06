import Hero from "@/components/hero";
import dynamic from "next/dynamic";

// Dynamically import components below the fold for better initial load performance
const OurMenu = dynamic(() => import("@/components/our-menu"), {
  loading: () => <div className="h-96 animate-pulse bg-cream-canvas" />,
});
const Pricing = dynamic(() => import("@/components/pricing"), {
  loading: () => <div className="h-96 animate-pulse bg-sage-mist" />,
});
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-96 animate-pulse bg-warm-sand" />,
});
const ContactUs = dynamic(() => import("@/components/contact-us"), {
  loading: () => <div className="h-96 animate-pulse bg-cream-canvas" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <OurMenu />
      <Pricing />
      <Testimonials />
      <ContactUs />
    </>
  );
}
