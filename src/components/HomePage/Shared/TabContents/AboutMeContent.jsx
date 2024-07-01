import Image from "next/image";
import img from "@/assets/banner/riyaz.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { social } from "../data/social";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";

const AboutMeContent = () => {
  return (
    <section className="bg-dark rounded-3xl shadow-lg hover:shadow-primary/50 transition-all duration-300">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-4 md:mb-0">
            <Image
              src={img}
              alt="Your Name"
              className="w-full rounded-3xl"
              quality={100}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 py-2">
            <h2 className="text-4xl mb-6 mt-8 lg:mt-0 text-primary">
              Who I am?
            </h2>
            <ScrollArea className="h-72">
              <div className="text-white/60">
                <p className="leading-relaxed mb-6">
                  Hi, I'm{" "}
                  <span className="font-semibold text-secondary">
                    Md. Riyaz Miah
                  </span>
                  , a passionate Frontend web developer with a strong background
                  in creating dynamic and responsive web applications. With a
                  keen eye for detail and a drive for excellence, I specialize
                  in using MongoDB, Express.js, React, and Node.js to deliver
                  high-quality projects.
                </p>
                <p className="leading-relaxed mb-6">
                  Over the years, I've honed my skills in developing full-stack
                  solutions, always striving to stay updated with the latest
                  industry trends and technologies. My portfolio showcases a
                  variety of projects, each reflecting my commitment to creating
                  efficient, user-friendly, and aesthetically pleasing web
                  experiences.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you can find me exploring new tech
                  innovations, participating in hackathons, and continuously
                  learning to enhance my expertise. Let's connect and create
                  something amazing together!
                </p>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <div className="mt-10">
              <p className="flex items-center gap-2">
                {" "}
                <IoLanguage size={20} />
                Language: <span className="text-white/60">English, Bangla</span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <BiWorld size={20} />
                Nationality: <span className="text-white/60">Bangladeshi</span>
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              {social.map((item, idx) => (
                <Link href={item.path} key={idx} className="">
                  <Button variant="outline" className="py-6 px-3 text-2xl">
                    {item.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeContent;
