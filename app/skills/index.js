const {
  default: SectionHeading,
} = require("@/components/common/section-heading");

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { SiMaterialdesign } from "react-icons/si";
import { SiFormik } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGitAlt } from "react-icons/fa6";

const Skills = () => {
  const skills = {
    icon: "",
    title: "My Skills",
    description:
      "I possess a solid skill set in web development, focusing on modern front-end technologies. My expertise includes building responsive and intuitive user interfaces with a passion for clean, efficient code.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
        color: "text-orange-500",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
        color: "text-blue-500",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
        color: "text-yellow-500",
      },
      {
        icon: <FaReact />,
        name: "React",
        color: "text-cyan-400",
      },
      {
        icon: <FaBootstrap />,
        name: "Bootstrap",
        color: "text-purple-600",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind",
        color: "text-teal-400",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
        color: "text-pink-500",
      },
      {
        icon: <TbBrandNextjs />,
        name: "Next.js",
        color: "text-white",
      },
      {
        icon: <SiMaterialdesign />,
        name: "Material UI",
        color: "text-blue-600",
      },
      {
        icon: <SiFormik />,
        name: "Formik",
        color: "text-green-500",
      },
      {
        icon: <SiRedux />,
        name: "Redux Toolkit",
        color: "text-purple-500",
      },
      {
        icon: <FaGitAlt />,
        name: "Git",
        color: "text-[#E84D31]",
      },
    ],
  };
  return (
    <div
      className="flex flex-col gap-10 justify-center items-center"
      id="skills"
    >
      <SectionHeading title={skills.title} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[300px] md:w-[670px] lg::w-[900px]  lg:mb-10 gap-4 xl:gap-[30px]">
        {skills.skillList.map((item, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl shadow-sm shadow-accent flex justify-center items-center group">
                    <div
                      className={`text-6xl ${item.color} transition-all duration-300`}
                    >
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
