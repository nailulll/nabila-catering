import { contactLinks } from "@/constants";
import Image from "next/image";
import { WHATSAPP_URL } from "@/constants";

export default function ContactUs() {
  return (
    <section
      className="md:py-24 py-14"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="text-center lg:mx-auto mx-5 mb-12">
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Hubungi Kami
        </p>
        <h2
          id="contact-heading"
          className="md:text-4xl text-2xl font-bold text-[hsl(var(--warm-dark))] max-w-xl mx-auto leading-tight"
        >
          Yuk, Pesan Sekarang!
        </h2>
        <p className="md:text-base text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto mt-4 leading-relaxed">
          Kami siap menerima pesanan dan menjawab pertanyaan Anda kapan saja — cukup hubungi lewat WhatsApp.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:gap-0 gap-10">
        {/* Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.9490827003388!2d108.6835324853339!3d-7.402892821389782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65870027fc519f%3A0xa4bcc88743f145bb!2sRumah%20tingal%2Ftempat%20usaha!5e1!3m2!1sid!2sid!4v1742704097808!5m2!1sid!2sid"
          width="600"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:w-1/2 w-full lg:rounded-tr-2xl lg:rounded-br-2xl"
          title="Lokasi Nabila Katering di Google Maps"
        />

        {/* Contact info cards */}
        <div className="lg:w-1/2 px-5 lg:px-14 flex flex-col justify-center gap-5">
          <p className="text-sm font-semibold text-[hsl(var(--warm-dark))] mb-1">
            Informasi Kontak
          </p>
          <ul className="space-y-4">
            {contactLinks.map((contact) => (
              <li
                key={contact.name}
                className="flex items-start gap-3.5 bg-white border border-primary/10 rounded-xl p-4 shadow-sm"
              >
                <span className="flex-shrink-0 w-9 h-9 bg-primary/8 rounded-lg flex items-center justify-center">
                  <Image
                    src={contact.icon}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="opacity-80"
                    style={{ filter: "invert(20%) sepia(80%) saturate(800%) hue-rotate(340deg) brightness(60%)" }}
                  />
                </span>
                <span className="text-sm text-[hsl(var(--foreground))] leading-relaxed pt-1">
                  {contact.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Quick WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl py-4 px-6 transition-all duration-200 shadow-sm shadow-primary/25 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            {/* WA icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
