import { contactLinks, WHATSAPP_URL } from "@/constants";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section
      className="w-full px-6 md:px-12 py-20 md:py-32 bg-cream-canvas"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Stack */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest mb-4">
            HUBUNGI KAMI
          </div>
          <h2
            id="contact-heading"
            className="text-[40px] md:text-[60px] font-outfit text-deep-forest leading-[0.85] mb-6"
          >
            Yuk, Pesan Sekarang!
          </h2>
          <p className="text-[18px] md:text-[20px] text-forest-shadow/80 leading-[1.33] mb-10 max-w-md">
            Kami siap menerima pesanan dan menjawab pertanyaan Anda kapan saja — cukup hubungi lewat WhatsApp.
          </p>

          <ul className="space-y-6 mb-10">
            {contactLinks.map((contact, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full border border-deep-forest/20 flex items-center justify-center">
                  <Image
                    src={contact.icon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="opacity-70"
                    style={{ filter: "invert(21%) sepia(50%) saturate(1487%) hue-rotate(143deg) brightness(97%) contrast(98%)" }} 
                    // Note: Invert filter is adjusted to approximate Deep Forest (#00473c) roughly, but it's an icon.
                  />
                </span>
                <span className="text-[16px] text-forest-shadow leading-[1.33] pt-1 max-w-sm">
                  {contact.name}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lime-glow text-forest-shadow px-[24px] py-[16px] text-[16px] font-bold tracking-[0.017em] transition-transform hover:scale-105 shadow-sm max-w-fit"
          >
            Hubungi Kami Sekarang
          </a>
        </div>

        {/* Right Column: Visual / Map */}
        <div className="flex-1 w-full relative">
          <div className="aspect-square md:aspect-[4/3] lg:aspect-square relative w-full overflow-hidden rounded-[20px] bg-warm-sand">
            {/* Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.9490827003388!2d108.6835324853339!3d-7.402892821389782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65870027fc519f%3A0xa4bcc88743f145bb!2sRumah%20tingal%2Ftempat%20usaha!5e1!3m2!1sid!2sid!4v1742704097808!5m2!1sid!2sid"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Nabila Katering di Google Maps"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
