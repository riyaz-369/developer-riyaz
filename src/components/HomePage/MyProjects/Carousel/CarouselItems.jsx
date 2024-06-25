import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const CarouselItems = ({ project }) => {
  return (
    <CarouselItem className="md:basis-1/2">
      <Link href={`/projects/${project.num}`}>
        <div className="bg-dark md:h-[690px] flex flex-col justify-between rounded-3xl border border-primary border-opacity-30 hover:border-primary transition-all duration-300">
          <Image src={project.image} alt="" className="rounded-t-3xl" />
          <div className="px-10">
            <div className="text-start space-y-3 my-8">
              <h3>{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </div>
          <div className="text-center mb-5">
            <Button variant="outline">View Details</Button>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};

export default CarouselItems;
