"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { menuLinks, WHATSAPP_URL } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`lg:mx-auto lg:py-4 px-5 py-3 top-0 sticky z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm shadow-primary/10 border-b border-primary/10"
            : "bg-white/80 backdrop-blur border-b border-transparent"
        }`}
        aria-label="Navigasi utama"
      >
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Logo Nabila Katering - Kembali ke beranda"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/logo.png"
              alt="Logo Nabila Katering"
              width={40}
              height={40}
              className="w-9 h-9 rounded-lg object-contain"
              priority
            />
            <span className="hidden sm:block font-semibold text-base tracking-tight text-[hsl(var(--warm-dark))]">
              Nabila{" "}
              <span className="text-primary">Katering</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium">
              {menuLinks.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="relative py-1 text-[hsl(var(--warm-dark))] hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="text-white bg-primary hover:bg-primary/90 rounded-full px-5 py-2 h-auto text-sm font-medium shadow-sm shadow-primary/30 transition-all duration-200 hover:shadow-md hover:shadow-primary/20"
              asChild
              aria-label="Hubungi kami via WhatsApp"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                size="icon"
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5 rounded-lg"
                aria-label="Buka menu"
              >
                <Menu size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mr-5 bg-white/95 backdrop-blur-md border border-primary/10 shadow-lg rounded-xl"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              {menuLinks.map((menu) => (
                <DropdownMenuItem
                  key={menu.name}
                  className="text-sm font-medium hover:text-primary focus:text-primary cursor-pointer rounded-lg"
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="mt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-semibold text-white bg-primary rounded-lg py-2 px-4"
                >
                  Pesan Sekarang
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
