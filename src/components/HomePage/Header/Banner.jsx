import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
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
            <Button variant="outline">
              <span>Download CV</span>
              <FiDownload size={24} />
            </Button>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
