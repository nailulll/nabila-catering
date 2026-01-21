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

const Navbar = () => {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Lewati ke konten utama
      </a>
      
      <nav 
        className="lg:mx-auto lg:py-5 px-5 py-3 top-0 sticky border-b-primary/20 border backdrop-blur bg-white/10 z-50"
        aria-label="Navigasi utama"
      >
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          <div>
            <Link href="/" aria-label="Logo Nabila Katering - Kembali ke beranda">
              <Image
                src="/logo.png"
                alt="Logo Nabila Katering"
                width={50}
                height={50}
                className="w-10"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10 text-lg">
              {menuLinks.map((menu) => (
                <li key={menu.name}>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Button size="icon" asChild aria-label="Hubungi kami via chat">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Image src="/chat.svg" alt="" width={17} height={17} aria-hidden="true" />
              </a>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button size="icon" aria-label="Buka menu">
                <Image
                  src="/hamburger-menu.svg"
                  alt=""
                  width={15}
                  height={15}
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mr-5 bg-transparent backdrop-blur"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              {menuLinks.map((menu) => (
                <DropdownMenuItem key={menu.name}>
                  <Link href={menu.link}>{menu.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
