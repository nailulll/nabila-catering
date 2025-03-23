import { contactLinks } from "@/constants";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center" id="contact">
      <h1 className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Kontak Kami
      </h1>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto lg:mt-5 tracking-widest leading-loose">
        Temukan kami atau Hubungi Kami Langsung!
      </p>
      <div className="w-full lg:mt-20 mt-10 flex flex-col lg:flex-row lg:gap-16 gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.9490827003388!2d108.6835324853339!3d-7.402892821389782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65870027fc519f%3A0xa4bcc88743f145bb!2sRumah%20tingal%2Ftempat%20usaha!5e1!3m2!1sid!2sid!4v1742704097808!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:w-1/2 w-full rounded-tr-xl rounded-br-xl"
        />
        <div className="mx-5 lg:mx-0">
          <ul className="font-light space-y-7">
            {contactLinks.map((contact) => (
              <li className="flex gap-2" key={contact.name}>
                <img src={contact.icon} alt="icon location" />
                {contact.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
