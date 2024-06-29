import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const page = () => {
  const skills = {
    title: "My Skills",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laudantium laboriosam modi vitae eveniet ipsam ab itaque harums",
    skillsList: [
      { name: "Expert", icon: <SiHtml5 /> },
      { name: "Expert", icon: <SiCss3 /> },
      { name: "Professional", icon: <SiJavascript /> },
      { name: "Expert", icon: <SiTailwindcss /> },
      { name: "Expert", icon: <SiReact /> },
      { name: "Comfortable", icon: <RiNextjsFill /> },
      { name: "Familiar", icon: <SiMongodb /> },
      { name: "Comfortable", icon: <SiExpress /> },
      { name: "Comfortable", icon: <SiNodedotjs /> },
      { name: "Familiar", icon: <SiFigma /> },
    ],
  };

  return (
    <div className="container mx-auto">
      {/* tabs */}
      <Tabs
        defaultValue="Skills"
        className="flex flex-col lg:flex-row mt-12 min-h-[50vh] gap-16"
      >
        <div>
          <TabsList className="flex flex-col gap-4 items-center justify-center w-full lg:max-w-[300px]">
            <TabsTrigger value="Skills" className="w-full">
              Skills
            </TabsTrigger>
            <TabsTrigger value="Education" className="w-full">
              Education
            </TabsTrigger>
            <TabsTrigger value="About Me" className="w-full">
              About me
            </TabsTrigger>
          </TabsList>
        </div>
        {/* content */}
        <div className="w-full ">
          <TabsContent value="Skills">
            <div>
              <div className="mb-6">
                <h2>{skills.title}</h2>
                <p>{skills.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {skills.skillsList.map((item) => (
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-5xl bg-dark text-center flex items-center justify-center py-8 rounded-md shadow-sm hover:shadow-primary transition-all duration-300">
                            {item.icon}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>{item.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Education">course and certification</TabsContent>
          <TabsContent value="About Me">About Me</TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default page;
