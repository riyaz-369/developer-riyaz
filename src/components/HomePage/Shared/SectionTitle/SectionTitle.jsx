const SectionTitle = ({ tag, title, sm }) => {
  return (
    <div>
      <p className="text-primary">
        <span className="mr-2">||</span> {tag}
      </p>
      <h2 className={`${sm && "text-3xl"}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
