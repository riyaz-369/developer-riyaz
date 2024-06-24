import React from "react";

const SectionTitle = ({ tag, title }) => {
  return (
    <div className="mb-8">
      <p className="text-primary">
        <span className="mr-2">||</span> {tag}
      </p>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
