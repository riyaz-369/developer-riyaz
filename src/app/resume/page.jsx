import EducationContent from "@/components/HomePage/Shared/TabContents/EducationContent";
import SkillsContent from "@/components/HomePage/Shared/TabContents/SkillsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AboutMeContent from "@/components/HomePage/Shared/TabContents/AboutMeContent";

const ResumePage = () => {
  return (
    <div className="container mx-auto my-8 lg:my-12">
      {/* tabs */}
      <Tabs
        defaultValue="Skills"
        className="flex flex-col lg:flex-row mt-12 min-h-[50vh] gap-16"
      >
        <div>
          <TabsList className="flex flex-col gap-4 items-center justify-center w-full lg:w-[300px]">
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
          {/* skills content */}
          <TabsContent value="Skills">
            <SkillsContent />
          </TabsContent>
          {/* education content */}
          <TabsContent value="Education">
            <ScrollArea className="h-[500px]">
              <EducationContent />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TabsContent>
          {/* about content */}
          <TabsContent value="About Me">
            <AboutMeContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ResumePage;
