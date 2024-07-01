import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { educations } from "../data/educations";

const EducationContent = () => {
  return (
    <div className="p-1">
      {/* Course and Certifications */}
      <div>
        <SectionTitle
          tag={"Practical Educations"}
          title={educations.title1}
          sm={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {educations.course.map((item) => (
            <div className="bg-dark p-6 rounded-md shadow-lg hover:shadow-primary/50 hover:animate-pulse transition-all duration-300">
              <Image src={item.png} alt="" width={80} height={80} />
              <h3 className="mt-3">{item.name}</h3>
              <p className="text-white/70">
                <small>at</small> {item.inst}
              </p>
              <p className="text-primary">{item.year}</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mb-3">
          {educations.academic.map((item) => (
            <div className="bg-dark p-6 rounded-md shadow-lg hover:shadow-primary/50 hover:animate-pulse transition-all duration-300">
              <Image src={item.png} alt="" width={80} height={80} />
              <h3 className="mt-3">{item.name}</h3>
              <p className="text-white/70">
                <small>at</small> {item.inst}
              </p>
              <p className="text-primary">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
