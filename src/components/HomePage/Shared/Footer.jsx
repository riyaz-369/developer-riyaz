import Link from "next/link";
import { social } from "./social";
import { contacts } from "./contacts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo/logo-rm.png";

const Footer = () => {
  return (
    <footer className="footer footer-center py-10 text-center bg-dark">
      <aside className="space-y-4">
        <div className="lg:flex lg:justify-between items-center container mx-auto">
          {contacts.map((contact) => (
            <div className="flex gap-4 mb-4 bg-dark p-3 rounded-3xl shadow-sm hover:shadow-primary transition-all duration-300 pr-12">
              <span className="text-primary bg-dark-blue p-5 rounded-3xl text-2xl">
                {contact.icon}
              </span>
              <span className="text-start w-full">
                <small>{contact.label}</small>
                <p>{contact.info}</p>
              </span>
            </div>
          ))}
          <div className="flex gap-6 justify-center">
            {social.map((item, idx) => (
              <Link href={item.path} key={idx} className="">
                <Button variant="outline" className="py-8 px-5 text-2xl">
                  {item.icon}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </aside>
      <div className="my-8 border-b border-primary/40" />
      <div className="flex justify-between container mx-auto items-center">
        <span>©Copyright 2024 all right reserve</span>
        <Link href="/">
          <Image src={logo} alt="" width={60} height={60} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
