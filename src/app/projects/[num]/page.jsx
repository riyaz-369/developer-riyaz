import { projects } from "@/components/HomePage/Shared/data/projects";
import Image from "next/image";

const page = ({ params }) => {
  const projectDetails = projects.find((project) => project.num == params.num);
  const {
    num,
    title,
    image,
    description,
    category,
    backend_technology,
    frontend_technology,
    client_repo,
    server_repo,
    live_demo,
    key_features,
  } = projectDetails;

  const feature = key_features[0];

  return (
    <section className="container mx-auto my-12 px-4 lg:px-0">
      <div className="bg-dark rounded-lg shadow-lg p-6">
        <h3 className="mb-4 text-xl font-semibold text-white bg-primary/80 py-4 pl-4 rounded">
          Project: 0{num}
        </h3>
        <div className="w-full mb-8">
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="text-start space-y-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-white/80">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-white">Category</h4>
              <p className="text-white/70">{category}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Backend Technology
              </h4>
              <p className="text-white/70">{backend_technology}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Frontend Technology
              </h4>
              <p className="text-white/70">{frontend_technology}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Client Repository
              </h4>
              <a
                href={client_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 hover:underline transition duration-300"
              >
                {client_repo}
              </a>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Server Repository
              </h4>
              <a
                href={server_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 hover:underline transition duration-300"
              >
                {server_repo}
              </a>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Live Demo</h4>
              <a
                href={live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 hover:underline transition duration-300"
              >
                {live_demo}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Key Features</h4>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>{feature.f1}</li>
              <li>{feature.f2}</li>
              <li>{feature.f3}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
