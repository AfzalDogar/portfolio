"use client";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMaterialdesign } from "react-icons/si";
import { SiFormik } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "I am a dedicated web developer with over 2+ years of experience in building responsive and dynamic applications. My passion for coding and continuous learning drives me to improve my skills and stay current with industry trends.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Afzal",
    },
    {
      fieldName: "Phone",
      fieldValue: "03174561863",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Language",
      fieldValue: "Urdu,English",
    },

    // {
    //   fieldName: "Nationality",
    //   fieldValue: "Pakistan",
    // },
    {
      fieldName: "Linkedin",
      fieldValue: "linkedin.com/in/hafiz-muhammad-afzal/",
    },
    {
      fieldName: "Email",
      fieldValue: "afzaldogar388@gmail.com",
    },
  ],
};
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Currently working as a Frontend Developer at Axis Coding Solution. I specialize in building responsive, user-friendly interfaces using modern web technologies like React and Tailwind CSS. My role focuses on enhancing user experiences and collaborating with cross-functional teams.",
  items: [
    {
      company: "Axis Coding Solution",
      position: "Frontend Developer",
      duration: "2023 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I have a strong academic foundation in Computer Science, which I further developed through practical experience. Throughout my studies, I gained valuable technical and problem-solving skills that have shaped my career trajectory. My journey across various institutions has honed my adaptability and passion for technology.",
  items: [
    {
      institution: "Lahore Garrison University",
      degree: "BS Computer Science",
      duration: "06/2018 - 12/2022",
    },
    {
      institution: "Govt. Shalimar College",
      degree: "Intermediate",
      duration: "06/2016 - 06/2018",
    },
    {
      institution: "Govt. Millat High School",
      degree: "Metric",
      duration: "06/2014 - 06/2016 ",
    },
  ],
};

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
      name: "Next",
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
const Resume = () => {
  return (
    <motion.div
      inherit={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="resume"
      className="  flex justify-center items-center py-5 md:py-0 lg:py-12 xl:py-0 scroll-mt-36"
    >
      <div className="container mx-auto lg:mb-10">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-10  lg:gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className="bg-[#232329] text-white/60 py-2 px-4 rounded-md"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="bg-[#232329] text-white/60 py-2 px-4 rounded-md"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="bg-[#232329] text-white/60 py-2 px-4 rounded-md"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="bg-[#232329] text-white/60 py-2 px-4 rounded-md"
            >
              About me
            </TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  shadow-inner shadow-accent rounded-lg cursor-pointer xl:h-[184px] py-6 px-10  lg:px-5 xl:px-10   flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="xl:text-xl max-w-[260px] xl:min-h-[60px]  text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] shadow-inner shadow-accent rounded-lg  cursor-pointer h-[184px] py-6 px-10   flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="lg:text-xl max-w-[260px] lg:min-h-[60px]  text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-xs xl:text-base">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] mx-auto text-white/60 lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3  lg:mb-10 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] shadow-inner shadow-accent rounded-lg  flex justify-center items-center group">
                              <div
                                className={`text-6xl ${item.color} transition-all duration-300`}
                              >
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            {/* <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger> */}
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
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 sm:gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex sm:items-center sm:justify-center lg:justify-start gap-4"
                      >
                        <span className="text-white/60 text-[15px] sm:text-sm">
                          {item.fieldName}
                        </span>
                        <span className="text-[12px] sm:text-sm">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
