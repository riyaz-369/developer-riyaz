import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import bannerImg from "@/assets/banner/banner.png";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  const social = [
    { icon: <FaGithub size={32} />, path: "/" },
    { icon: <FaLinkedin size={32} />, path: "/" },
    { icon: <FaFacebook size={32} />, path: "/" },
  ];

  return (
    <section className="bg-[#1b1c25]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-start">
            <span className="text-xl">Frontend Web Developer</span>
            <h1>
              <p>
                Hello I'm <br />{" "}
                <span className="text-primary">Riyaz Miah</span>
              </p>
            </h1>
            <p className="max-w-md mb-9 text-white/80">
              Building Dynamic User Interfaces with React.js
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
              >
                <span>Download CV</span>
                <FiDownload size={16} />
              </Button>
              <div className="mb-8 xl:mb-0 flex gap-4 ">
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
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Image
              className=""
              src={bannerImg}
              alt=""
              width={600}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
