import Link from "next/link";
import { social } from "../data/social";
import { contacts } from "../data/contacts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo/logo-rm.png";

const Footer = () => {
  return (
    <footer className="pt-12 bg-dark">
      <aside className="space-y-4 container mx-auto pb-12">
        <div className="flex justify-between">
          {/* contacts info */}
          <div className="lg:flex justify-between gap-8">
            {contacts.map((contact) => (
              <div className="flex items-center gap-3 mb-3 lg:mb-0">
                <a href={contact.link} target="_blank">
                  <Button
                    variant="outline"
                    className="rounded-full py-5 px-[9px] text-2xl"
                  >
                    {contact.icon}
                  </Button>
                </a>
                <span className="text-white/80">
                  <p>{contact.address}</p>
                </span>
              </div>
            ))}
          </div>
          {/* social */}
          <div className="flex flex-col md:justify-center lg:flex-row gap-3 lg:gap-5">
            {social.map((item, idx) => (
              <a target="_blank" href={item.path} key={idx} className="">
                <Button
                  variant="outline"
                  className="rounded-full py-5 px-[9px] text-2xl"
                >
                  {item.icon}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </aside>
      <div className="border-b border-primary/40" />
      <div className="flex justify-between container mx-auto items-center py-4">
        <span className="text-white/70">©Copyright 2024 all right reserve</span>
        <Link href="/">
          <Image src={logo} alt="" width={60} height={60} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
