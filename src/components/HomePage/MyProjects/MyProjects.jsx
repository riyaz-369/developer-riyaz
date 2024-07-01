import ProjectCard from "../Shared/Carousel/ProjectCard";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MyProjects = () => {
  return (
    <section className="container mx-auto my-8 lg:my-12">
      <div className="mb-8">
        <SectionTitle tag="Projects" title="My Completed Projects" />
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default MyProjects;
