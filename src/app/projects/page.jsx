import FrontendProjects from "@/components/AllProjects/FrontendProjects";
import FullstackProjects from "@/components/AllProjects/FullstackProjects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  return (
    <Tabs defaultValue="fullstack projects">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="fullstack projects">Fullstack Projects</TabsTrigger>
        <TabsTrigger value="frontend projects">Frontend Projects</TabsTrigger>
      </TabsList>
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
