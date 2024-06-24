import React from "react";
import { projects } from "../HomePage/Shared/projects";
import Card from "./CategoryCard/Card";

const FullstackProjects = () => {
  const fullstackProjects = projects.filter(
    (project) => project.category === "Fullstack"
  );

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
      {fullstackProjects.map((project) => (
        <Card key={project.num} project={project} />
      ))}
    </div>
  );
};

export default FullstackProjects;
