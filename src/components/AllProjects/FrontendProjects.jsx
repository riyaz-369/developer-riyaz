import { projects } from "../HomePage/Shared/projects";
import Card from "./CategoryCard/Card";

const FrontendProjects = () => {
  const frontendProjects = projects.filter(
    (project) => project.category === "Frontend"
  );

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-6 my-8">
      {frontendProjects.map((project) => (
        <Card key={project.num} project={project} />
      ))}
    </div>
  );
};

export default FrontendProjects;
