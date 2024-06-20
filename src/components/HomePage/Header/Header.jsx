import Link from "next/link";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import MobileNav from "../Shared/Navbar/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <span className="text-4xl font-semibold">Riyaz</span>
        </Link>
        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Button>Hire Me</Button>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
