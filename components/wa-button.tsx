import ShinyButton from "@/components/ui/shiny-button";

export default function WaButton() {
  return (
    <div className="fixed lg:right-10 lg:bottom-10 bottom-5 right-5 animate-bounce z-50">
      <a 
        href="https://wa.me/6283117656712" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <ShinyButton>Kontak dengan WhatsApp</ShinyButton>
      </a>
    </div>
  );
}
