import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const CarouselItems = ({ project }) => {
  return (
    <CarouselItem className="md:basis-1/2">
      <div className="bg-dark md:h-[690px] flex flex-col justify-between rounded-lg">
        <Image src={project.image} alt="" className="rounded-lg" />
        <div className="px-10">
          <div className="text-start space-y-3 my-8">
            <h3>{project.title}</h3>
            <p className="text-white/80">{project.description}</p>
          </div>
        </div>
        <div className="text-center mb-5">
          <Link href={`/projects/${project.num}`}>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
};

export default CarouselItems;
