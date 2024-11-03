import { contactLinks } from "@/constants";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center" id="contact">
      <h1 className="md:text-4xl text-xl max-w-4xl mx-auto font-semibold text-dark">
        Contact Us
      </h1>
      <p className="md:text-lg text-sm font-light max-w-xl mx-auto lg:mt-5 tracking-widest leading-loose">
        Find us or Contact Us Directly!
      </p>
      <div className="w-full lg:mt-20 mt-10 flex flex-col lg:flex-row lg:gap-16 gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.120970490529!2d108.63891799578518!3d-7.358741733018631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f7d7f73750a3f%3A0x49c45563c54382c6!2sAlun-Alun%20Langensari!5e0!3m2!1sid!2sid!4v1730443281482!5m2!1sid!2sid"
          width="600" height="450" style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:w-1/2 w-full rounded-tr-xl rounded-br-xl"
        />
        <div className="mx-5 lg:mx-0">
          <ul className="font-light space-y-7">
            {contactLinks.map(contact => (
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