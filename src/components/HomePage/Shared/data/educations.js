import webPng from "@/assets/png/web.png";
import cPng from "@/assets/png/programmer.png";
import mechPng from "@/assets/png/mech.png";
import sciencePng from "@/assets/png/science.png";

export const educations = {
  title1: "Course and Certifications",
  course: [
    {
      year: "2024",
      name: "Complete Web Development",
      inst: "Programming Hero",
      png: webPng,
    },
    {
      year: "2023",
      name: "Programming C",
      inst: "10 Minute School",
      png: cPng,
    },
  ],
  title2: "Academic Qualification",
  academic: [
    {
      year: "2022 - 2026",
      name: "Diploma in Mechanical Engineering",
      inst: "Shyamoli Ideal Polytechnic Institute, Dhaka",
      png: mechPng,
    },
    {
      year: "2016 - 2021",
      name: "SSC Science",
      inst: "Shahjadpur High School, Dewanganj, Jamalpur",
      png: sciencePng,
    },
  ],
};
