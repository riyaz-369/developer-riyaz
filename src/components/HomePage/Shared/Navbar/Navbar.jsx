"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { links } from "./links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex gap-8">
        {links.map((link, idx) => {
          return (
            <Link
              href={link.path}
              key={idx}
              className={`capitalize font-medium hover:text-primary transition-all ${
                link.path === pathname &&
                "text-primary border-b-2 border-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
