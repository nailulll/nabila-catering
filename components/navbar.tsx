"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { menuLinks } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="lg:mx-auto lg:py-5 px-5 py-3 top-0 sticky border-b-primary/20 border backdrop-blur bg-white/10 z-50">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-10"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 text-lg">
            {menuLinks.map((menu) => (
              <li key={menu.name}>
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button size="icon">
            <Image src="/chat.svg" alt="chat" width={17} height={17} />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button size="icon">
              <Image
                src="/hamburger-menu.svg"
                alt="menu"
                width={15}
                height={15}
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
  );
};

export default Navbar;
