import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarouselItems from "./CarouselItems";
import { projects } from "../../Shared/projects";

const ProjectCard = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex">
        {projects.map((project) => (
          <CarouselItems key={project.num} project={project} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCard;
