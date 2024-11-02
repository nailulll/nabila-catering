import ShinyButton from "@/components/ui/shiny-button";

export default function WaButton() {
  return (
    <div className="fixed lg:right-10 lg:bottom-10 bottom-5 right-5 animate-bounce z-50">
      <ShinyButton>
        Chat with WhatsApp
      </ShinyButton>
    </div>
  );
}