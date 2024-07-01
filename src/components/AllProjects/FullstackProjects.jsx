import React from "react";
import { projects } from "../HomePage/Shared/data/projects";
import Card from "./CategoryCard/Card";

const FullstackProjects = () => {
  const fullstackProjects = projects.filter(
    (project) => project.category === "Fullstack"
  );

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {fullstackProjects.map((project) => (
        <Card key={project.num} project={project} />
      ))}
    </div>
  );
};

export default FullstackProjects;
