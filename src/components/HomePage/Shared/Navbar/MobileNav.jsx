"use client";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import { links } from "./links";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="text-primary">
        <CiMenuFries size={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div>
          <span className="text-4xl font-semibold">Riyaz</span>
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
