import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import bannerImg from "@/assets/banner/banner.png";
import Image from "next/image";
import Link from "next/link";
import { social } from "../Shared/social";

const Banner = () => {
  return (
    <section className="bg-dark">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="text-center lg:text-start">
            <span className="text-lg">Frontend Web Developer</span>
            <h1>
              <p>
                Hello I'm <br />{" "}
                <span className="text-primary">Md. Riyaz Miah</span>
              </p>
            </h1>
            <p className="max-w-md mt-4 mb-9 text-white/80">
              Building Dynamic User Interfaces with React.js
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
              >
                <span>Get Resume</span>
                <FiDownload size={20} />
              </Button>
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
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <Image
              className="object-contain"
              src={bannerImg}
              alt="Riyaz cover image"
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
