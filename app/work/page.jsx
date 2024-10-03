"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Use the correct path for Swiper modules
import "swiper/css";
import "swiper/css/autoplay"; // Ensure you import the autoplay CSS if needed
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";
import SectionHeading from "@/components/common/section-heading";

const projects = [
  {
    num: "01",
    category: "Jobs Management System",
    title: "project 1",
    description:
      "Designed and implemented features like job posting, applicant tracking, and interview scheduling, enhancing recruitment workflows. Integrated the system with HR tools to streamline processes and improve efficiency. Focused on building a scalable, user-friendly, and secure platform.",
    stack: [
      { name: "Next js" },
      { name: "Axios" },
      { name: "Redux Toolkit" },
      { name: "Bootstrap" },
    ],
    image: "/assests/JMS.PNG",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Digital Mining",
    title: "project 1",
    description:
      "A web-based project focused on simulating and analyzing digital mining processes using HTML, CSS, Bootstrap, and JavaScript.",
    stack: [
      { name: "HTML " },
      { name: "CSS " },
      { name: "Bootstrap " },
      { name: "Javascript" },
    ],
    image: "/assests/mining.PNG",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Dubai Wheels",
    title: "project 1",
    description:
      "The Dubai Wheels Dashboard is a comprehensive admin platform for managing automotive businesses. It offers a centralized interface for overseeing vehicle listings, sales data, and inventory, with robust vehicle management tools and built-in analytics for valuable business insights.",
    stack: [
      { name: "React js" },
      { name: "Axios" },
      { name: "Chart.js" },
      { name: "Bootstrap" },
    ],
    image: "/assests/dubai.PNG",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Generation Maker",
    title: "",
    description:
      "Developed an innovative online platform that provides high-quality educational resources for individuals interested in learning about foreign exchange trading. Developed a visually appealing interface with intuitive navigation and easy access to information.",
    stack: [
      { name: "React js" },
      { name: "Axios" },
      { name: "AOS" },
      { name: "Swiper" },
      { name: "Tailwind" },
    ],
    image: "/assests/trading1.PNG",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Simvictus",
    title: "project 1",
    description:
      "Simvictus empowers businesses with expert IT services and digital transformation solutions. Their offerings include custom software development, cloud and cybersecurity services, and data-driven analytics, helping organizations enhance operational efficiency and adapt to technological advancements.",
    stack: [
      { name: "React js" },
      { name: "Tailwind" },
      { name: "AOS" },
      { name: "Swiper" },
      { name: "Axios" },
    ],
    image: "/assests/simvictus.PNG",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const hanSlideChange = (swiper) => {
    const index = swiper.realIndex;
    setProject(projects[index]);
  };

  return (
    <div id="work" className="scroll-mt-36">
      <SectionHeading title="Projects" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
        }}
        className="flex flex-col justify-center  lg:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col  lg:justify-between order-2 lg:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold  text-accent">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                  {project.category}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[10px] md:text-xl lg:text-[15px] xl:text-xl text-accent "
                      >
                        {item.name}
                        {index !== project.stack.length - 1 && ", "}
                      </li>
                    );
                  })}
                </ul>
                <div className="border-b-2 border-white/20"></div>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="mb-12"
                onSlideChange={hanSlideChange}
              >
                {projects.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className=" h-[200px] md:h-[360px] relative group flex justify-center items-center">
                        <div className="absolute w-full h-full top-0 bottom-0  z-10 "></div>
                        <div className="">
                          <Image
                            src={item.image}
                            alt="project"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* <WorkSliderButton
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] md:h-[35px] flex justify-center items-center transition-all duration-300"
                /> */}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;

// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderButton from "@/components/WorkSliderButton";
// import SectionHeading from "@/components/common/section-heading";

// const projects = [
//   {
//     num: "01",
//     category: "Jobs Management System",
//     title: "project 1",
//     description:
//       "Designed and implemented features like job posting, applicant tracking, and interview scheduling, enhancing recruitment workflows. Integrated the system with HR tools to streamline processes and improve efficiency. Focused on building a scalable, user-friendly, and secure platform.",
//     stack: [
//       { name: "Next js" },
//       { name: "Axios" },
//       { name: "Redux Toolkit" },
//       { name: "Bootstrap" },
//     ],
//     image: "/assests/JMS.PNG",
//     live: "",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "Digital Mining",
//     title: "project 1",
//     description:
//       "A web-based project focused on simulating and analyzing digital mining processes using HTML, CSS, Bootstrap, and JavaScript.",
//     stack: [
//       { name: "HTML " },
//       { name: "CSS " },
//       { name: "Bootstrap " },
//       { name: "Javascript" },
//     ],
//     image: "/assests/mining.PNG",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "Dubai Wheels",
//     title: "project 1",
//     description:
//       "The Dubai Wheels Dashboard is a comprehensive admin platform for managing automotive businesses. It offers a centralized interface for overseeing vehicle listings, sales data, and inventory, with robust vehicle management tools and built-in analytics for valuable business insights.",
//     stack: [
//       { name: "React js" },
//       { name: "Axios" },
//       { name: "Chart.js" },
//       { name: "Bootstrap" },
//     ],
//     image: "/assests/dubai.PNG",
//     live: "",
//     github: "",
//   },
//   {
//     num: "04",
//     category: "Generation Maker",
//     title: "",
//     description:
//       "Developed an innovative online platform that provides hight-quality educational resources for individuals interested in learning about foreign exchange trading.Developed a  visually appealing interface with intuitive navigation and easy access  to information .",
//     stack: [
//       { name: "React js" },
//       { name: "Axios" },
//       { name: "AOS" },
//       { name: "Swiper" },
//       { name: "Tailwind" },
//     ],
//     image: "/assests/trading1.PNG",
//     live: "",
//     github: "",
//   },
//   {
//     num: "05",
//     category: "Simvictus",
//     title: "project 1",
//     description:
//       "Simvictus empowers businesses with expert IT services and digital transformation solutions. Their offerings include custom software development, cloud and cybersecurity services, and data-driven analytics, helping organizations enhance operational efficiency and adapt to technological advancements.",
//     stack: [
//       { name: "React js" },
//       { name: "Tailwind" },
//       { name: "AOS" },
//       { name: "Swiper" },
//       { name: "Axios" },
//     ],
//     image: "/assests/simvictus.PNG",
//     live: "",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);

//   const hanSlideChange = (swiper) => {
//     const index = swiper.realIndex;
//     setProject(projects[index]);
//   };

//   return (
//     <div id="work">
//       <SectionHeading title="Projects" />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: 1,
//           transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
//         }}
//         className="flex flex-col justify-center  lg:px-0"
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex-row lg:gap-[30px]">
//             <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col  lg:justify-between order-2 lg:order-none">
//               <div className="flex flex-col gap-[30px] h-[50%]">
//                 {/* <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
//                   {project.num}
//                 </div> */}
//                 <div className="text-8xl leading-none font-extrabold text-accent">
//                   {project.num}
//                 </div>
//                 <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
//                   {project.category}
//                 </h2>
//                 <p className="text-white/60">{project.description}</p>
//                 <ul className="flex gap-4">
//                   {project.stack.map((item, index) => {
//                     return (
//                       <li
//                         key={index}
//                         className="text-[10px] md:text-xl lg:text-[15px] xl:text-xl text-accent "
//                       >
//                         {item.name}
//                         {index !== project.stack.length - 1 && ", "}
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <div className="border-b-2 border-white/20"></div>
//                 {/* <div className="flex items-center gap-4">
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsArrowUpRight className="text-3xl group-hover:text-accent text-white" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Live project</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//                 <Link href={project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsGithub className="text-3xl group-hover:text-accent text-white" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Github repository</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div> */}
//               </div>
//             </div>
//             <div className="w-full lg:w-[50%]">
//               <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 className="mb-12"
//                 onSlideChange={hanSlideChange}
//               >
//                 {projects.map((item, index) => {
//                   return (
//                     <SwiperSlide key={index} className="">
//                       <div className=" h-[200px] md:h-[360px] relative group flex justify-center items-center">
//                         <div className="absolute w-full h-full top-0 bottom-0  z-10 "></div>
//                         <div className="">
//                           <Image
//                             src={item.image}
//                             alt="project"
//                             fill
//                             className="object-contain"
//                             // className="object-cover"
//                           />
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//                 <WorkSliderButton
//                   containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
//                   btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] md:h-[35px] flex justify-center items-center transition-all duration-300"
//                 />
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Work;
