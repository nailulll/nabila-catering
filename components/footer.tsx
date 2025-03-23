import Image from "next/image";
import { socialLinks, menuLinks } from "@/constants";
import Link from "next/link";
import ShinyButton from "./ui/shiny-button";

export default function Footer() {
  return (
    <footer className="max-w-7xl lg:mx-auto lg:my-20 my-10 mx-5">
      <div className="flex flex-wrap lg:justify-between justify-start gap-10">
        <div className="w-full md:w-2/3">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-10"
          />
          <p className="font-light mt-5 text-xs lg:text-base ">
            Makanan enak membuat hari lebih baik.
          </p>
          <a href="https://nesthubstudios.web.id" target="_blank">
            <ShinyButton className="bg-[#CA243F] text-white mt-4">
              <div className="flex gap-2">
                <span className="font-light">Bagian dari</span>
                <Image
                  src="/nest-logo-white.png"
                  alt="nest hub studios logo"
                  className="object-contain"
                  width={40}
                  height={40}
                />
              </div>
            </ShinyButton>
          </a>
        </div>
        <div>
          <ul className="space-y-7 lg:text-base text-sm">
            <li className="font-semibold">Tetap Terhubung</li>
            {socialLinks.map((social) => (
              <li key={social.name}>{social.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-7 lg:text-base text-sm">
            <li className="font-semibold">Menu</li>
            {menuLinks.map((menu) => (
              <li key={menu.name}>
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-dark mt-20" />
      <h6 className="font-light mt-5 text-xs lg:text-base">
        Copyright {new Date().getFullYear()}.{" "}
        <span className="text-primary">Nabila Catering</span>. All Right
        Reserved
      </h6>
    </footer>
  );
}
