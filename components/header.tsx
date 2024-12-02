"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, House, ShoppingCart } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import logo from "@/public/image/logo.webp";

import { ActiveLink } from "./ui/active-link";
const navigation = [
  { name: "Home", href: "/", icon: <House /> },
  { name: "Store", href: "/store", icon: <ShoppingCart /> },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d0e11b3] border-b border-b-cyan-500 fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-14"
        aria-label="Global"
      >
        <div className="flex ">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logo} alt="Logo" width={100} />
          </Link>
        </div>
        <div className="flex flex-1 justify-end lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <DialogTitle>Home</DialogTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold flex gap-2 uppercase"
                  >
                    {item.icon} {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-between">
          {navigation.map((item) => (
            <ActiveLink
              key={item.name}
              href={item.href}
              activeClassName="text-cyan-500"
              className="text-sm font-semibold leading-6 flex gap-2 uppercase"
            >
              {item.icon}
              {item.name}
            </ActiveLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
