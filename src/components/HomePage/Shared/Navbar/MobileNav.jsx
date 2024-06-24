"use client";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import { links } from "./links";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo/logo-rm.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="text-primary mt-3">
        <CiMenuFries size={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div>
          <Image src={logo} alt="" width={50} height={50} />
        </div>
        {/* nav */}
        <nav className="flex flex-col gap-4">
          {links.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                className={`capitalize font-medium hover:text-primary transition-all ${
                  link.path === pathname && "text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button className="w-full">Hire Me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
