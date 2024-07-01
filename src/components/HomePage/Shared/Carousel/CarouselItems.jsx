import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const CarouselItems = ({ project }) => {
  return (
    <CarouselItem className="md:basis-1/2">
      <Link
        href={`/projects/${project.num}`}
        className="card bg-dark shadow-lg rounded-3xl border border-primary border-opacity-30 hover:border-primary transition-all duration-300"
      >
        <figure>
          <Image src={project.image} alt="" className="rounded-t-3xl" />
        </figure>
        <div className="card-body">
          {/* card content */}
          <div>
            <div className="text-start space-y-3 my-8">
              <h3>{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </div>
          {/* card acton */}
          <div className="card-actions justify-end">
            <div className="flex justify-between w-full">
              <span className="text-lg">Details</span>
              <button className="hover:-rotate-45 transition-all duration-300 text-primary text-4xl">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};

export default CarouselItems;
