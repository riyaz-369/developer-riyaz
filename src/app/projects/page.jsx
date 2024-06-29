import FrontendProjects from "@/components/AllProjects/FrontendProjects";
import FullstackProjects from "@/components/AllProjects/FullstackProjects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  return (
    <Tabs defaultValue="fullstack projects" className="mt-6">
      <div className="flex justify-center">
        <TabsList className="gap-6 bg-dark/50 p-6">
          <TabsTrigger value="fullstack projects" className="px-6">
            Fullstack Projects
          </TabsTrigger>
          <TabsTrigger value="frontend projects" className="px-6">
            Frontend Projects
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="fullstack projects">
        {/* fullstack projects */}
        <FullstackProjects />
      </TabsContent>
      <TabsContent value="frontend projects">
        {/* frontend projects */}
        <FrontendProjects />
      </TabsContent>
    </Tabs>
  );
};

export default Projects;
