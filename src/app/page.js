import Banner from "@/components/HomePage/Header/Banner";
import MyProjects from "@/components/HomePage/MyProjects/MyProjects";
import SkillsContent from "@/components/HomePage/Shared/TabContents/SkillsContent";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto my-8 lg:my-12">
        <SkillsContent />
      </div>
      <MyProjects />
    </main>
  );
}
