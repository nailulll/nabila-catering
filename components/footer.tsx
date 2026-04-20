import Image from "next/image";
import { socialLinks, menuLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20 text-white"
      style={{ backgroundColor: "hsl(4, 72%, 28%)" }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 py-14 lg:py-16">
        <div className="flex flex-wrap lg:justify-between justify-start gap-12">
          {/* Brand column */}
          <div className="w-full md:w-2/5">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Logo Nabila Katering"
                width={40}
                height={40}
                className="w-9 h-9 rounded-lg object-contain"
              />
              <span className="font-semibold text-lg tracking-tight text-white">
                Nabila Katering
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Makanan enak bukan soal mewah &mdash; tapi soal rasa yang bikin
              hati hangat. Itu yang selalu kami hadirkan untuk Anda.
            </p>

            {/* NEST button */}
            <a
              href="https://nest-official.vercel.app/id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bagian dari Nest Hub Studios"
              className="inline-flex items-center gap-2 mt-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-200 group"
            >
              <span className="text-white/80 text-xs font-light">
                Bagian dari
              </span>
              <Image
                src="/nest-logo-white.png"
                alt="Nest Hub Studios"
                className="object-contain"
                width={36}
                height={36}
              />
            </a>
          </div>

          {/* Social links */}
          <nav aria-label="Media sosial">
            <ul className="space-y-4 text-sm">
              <li className="font-semibold text-white/50 text-xs uppercase tracking-widest mb-5">
                Tetap Terhubung
              </li>
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kunjungi ${social.name} kami`}
                    className="text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu links */}
          <nav aria-label="Menu footer">
            <ul className="space-y-4 text-sm">
              <li className="font-semibold text-white/50 text-xs uppercase tracking-widest mb-5">
                Menu
              </li>
              {menuLinks.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.link}
                    className="text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="border-t px-5 py-4"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
      >
        <p className="text-white/50 text-xs text-center">
          &copy; {new Date().getFullYear()} Nabila Katering. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
