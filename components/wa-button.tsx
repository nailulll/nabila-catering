import ShinyButton from "@/components/ui/shiny-button";
import { WHATSAPP_URL } from "@/constants";

export default function WaButton() {
  return (
    <div className="fixed lg:right-10 lg:bottom-10 bottom-5 right-5 animate-bounce z-50">
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <ShinyButton>Kontak dengan WhatsApp</ShinyButton>
      </a>
    </div>
  );
}
