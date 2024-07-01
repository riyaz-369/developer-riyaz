import { projects } from "../HomePage/Shared/data/projects";
import Card from "./CategoryCard/Card";

const FrontendProjects = () => {
  const frontendProjects = projects.filter(
    (project) => project.category === "Frontend"
  );

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {frontendProjects.map((project) => (
        <Card key={project.num} project={project} />
      ))}
    </div>
  );
};

export default FrontendProjects;
