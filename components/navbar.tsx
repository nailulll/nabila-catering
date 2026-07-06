"use client";

import { menuLinks, WHATSAPP_URL } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 bg-cream-canvas py-4 px-6 md:px-12 w-full"
      aria-label="Navigasi utama"
    >
      <div className="max-w-[1200px] flex justify-between items-center mx-auto">
        {/* Left: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {menuLinks.map((menu) => (
            <Link
              key={menu.name}
              href={menu.link}
              className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest hover:opacity-70 transition-opacity"
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Center: Brand */}
        <Link
          href="/"
          aria-label="Logo Nabila Katering - Kembali ke beranda"
          className="flex items-center justify-center flex-1 gap-3"
        >
          <span className="font-bold text-[24px] tracking-tight text-deep-forest">
            NABILA KATERING
          </span>
        </Link>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex items-center justify-end flex-1 gap-4">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full border-2 border-deep-forest bg-transparent text-deep-forest px-[20px] py-[12px] text-[16px] font-bold transition-colors hover:bg-deep-forest hover:text-white"
          >
            ORDER
          </Link>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden flex items-center justify-center h-10 w-10 text-deep-forest">
              <Menu size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mr-5 bg-cream-canvas border border-deep-forest/10 shadow-lg rounded-xl"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              {menuLinks.map((menu) => (
                <DropdownMenuItem
                  key={menu.name}
                  className="text-[14px] font-bold uppercase tracking-[0.05em] text-deep-forest cursor-pointer rounded-lg px-4 py-3"
                >
                  <Link href={menu.link} className="w-full">
                    {menu.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="mt-1 px-2 pb-2">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-full border-2 border-deep-forest bg-transparent text-deep-forest px-[20px] py-[12px] text-[14px] font-bold hover:bg-deep-forest hover:text-white"
                >
                  ORDER
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
