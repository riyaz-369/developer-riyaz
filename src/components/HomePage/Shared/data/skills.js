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

export const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laudantium laboriosam modi vitae eveniet ipsam ab itaque harums",
  skillsList: [
    { name: "HTML5", proficiency: "Expert", icon: <SiHtml5 /> },
    { name: "CSS3", proficiency: "Expert", icon: <SiCss3 /> },
    { name: "JavaScript", proficiency: "Professional", icon: <SiJavascript /> },
    { name: "TailwindCSS", proficiency: "Expert", icon: <SiTailwindcss /> },
    { name: "React.js", proficiency: "Expert", icon: <SiReact /> },
    { name: "Next.js", proficiency: "Comfortable", icon: <RiNextjsFill /> },
    { name: "MongoDB", proficiency: "Familiar", icon: <SiMongodb /> },
    { name: "Express.js", proficiency: "Comfortable", icon: <SiExpress /> },
    { name: "Node.js", proficiency: "Comfortable", icon: <SiNodedotjs /> },
    { name: "Figma", proficiency: "Familiar", icon: <SiFigma /> },
  ],
};
