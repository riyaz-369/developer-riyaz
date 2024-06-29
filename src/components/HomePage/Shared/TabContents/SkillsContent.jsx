import SectionTitle from "../SectionTitle/SectionTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "../data/skills";

const SkillsContent = () => {
  return (
    <div>
      <div className="mb-6">
        <SectionTitle tag={"Skill"} title={skills.title} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.skillsList.map((item) => (
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-dark text-center flex flex-col gap-4 items-center justify-center py-8 rounded-md shadow-md hover:shadow-primary hover:text-primary transition-all duration-300 hover:animate-pulse">
                    <span
                      className={`text-5xl ${
                        item.name === "React.js" && "hover:animate-spin"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <p className="text-xl font-medium">{item.name}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{item.proficiency}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
