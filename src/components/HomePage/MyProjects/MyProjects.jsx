import SectionTitle from "../Shared/SectionTitle";
import ProjectCard from "./Carousel/ProjectCard";

const MyProjects = () => {
  return (
    <section className="container mx-auto my-8 lg:my-12">
      <SectionTitle tag="Projects" title="My Completed Projects" />
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default MyProjects;
