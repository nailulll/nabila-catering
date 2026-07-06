import { socialLinks, menuLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-16 md:py-24 bg-deep-forest text-cream-canvas">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Left: Brand & Copy */}
        <div className="flex-1 max-w-sm">
          <div className="text-[24px] font-bold tracking-tight text-lime-glow mb-6">
            NABILA KATERING
          </div>
          <p className="text-[16px] leading-[1.33] text-cream-canvas/80 mb-8">
            Makanan enak bukan soal mewah — tapi soal rasa yang bikin
            hati hangat. Itu yang selalu kami hadirkan untuk Anda dari Lakbok, Ciamis.
          </p>
          <div className="text-[14px] text-cream-canvas/50">
            &copy; {new Date().getFullYear()} Nabila Katering.<br/>All Rights Reserved.
          </div>
        </div>

        {/* Right: Links Grid */}
        <div className="flex gap-16 md:gap-24">
          <nav aria-label="Menu footer">
            <ul className="space-y-4 text-sm">
              <li className="font-bold text-lime-glow text-[14px] uppercase tracking-[0.05em] mb-6">
                MENU
              </li>
              {menuLinks.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.link}
                    className="text-[16px] text-cream-canvas/80 hover:text-lime-glow transition-colors font-bold"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Media sosial">
            <ul className="space-y-4 text-sm">
              <li className="font-bold text-lime-glow text-[14px] uppercase tracking-[0.05em] mb-6">
                SOSIAL
              </li>
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-cream-canvas/80 hover:text-lime-glow transition-colors font-bold"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  );
}
