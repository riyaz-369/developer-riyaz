import SectionTitle from "../SectionTitle/SectionTitle";
import { educations } from "../data/educations";

const EducationContent = () => {
  return (
    <div>
      {/* Course and Certifications */}
      <div>
        <SectionTitle tag={"Educations"} title={educations.title1} sm={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {educations.course.map((item) => (
            <div className="bg-dark p-6 rounded-md shadow-md hover:shadow-primary transition-all duration-300">
              <p className="text-primary">{item.year}</p>
              <h3>{item.name}</h3>
              <p className="text-white/70">
                <small>at</small> {item.inst}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* horizontal line */}
      <div className="my-6 opacity-50">
        <hr />
      </div>

      {/* Academic Qualification */}
      <div>
        <SectionTitle tag={"Educations"} title={educations.title2} sm={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {educations.academic.map((item) => (
            <div className="bg-dark p-6 rounded-md shadow-md hover:shadow-primary transition-all duration-300">
              <p className="text-primary">{item.year}</p>
              <h3>{item.name}</h3>
              <p className="text-white/70">
                <small>at</small> {item.inst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
