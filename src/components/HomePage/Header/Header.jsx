import Link from "next/link";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import MobileNav from "../Shared/Navbar/MobileNav";
import logo from "@/assets/logo/logo-rm.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-5 text-white bg-dark sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <Image src={logo} alt="" width={60} height={60} />
        </Link>
        {/* desktop navbar */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
