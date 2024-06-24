import Link from "next/link";
import { social } from "./social";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-center bg-dark">
      <aside className="space-y-4">
        <h2 className="mb-2">Riyaz</h2>
        <span className="font">
          Fronted Web Developer. <br />
          Providing reliable tech since 1992
        </span>
      </aside>
      <nav className="flex justify-center mt-6">
        <div className="mb-8 lg:mb-0 flex gap-4 ">
          {social.map((item, idx) => (
            <Link
              href={item.path}
              key={idx}
              className="hover:text-primary transition-all"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
