"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "03174561863",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "afzaldogar388@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lahore, Pakistan",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      id="contact"
      className=""
    >
      <div className="container mx-auto md:mb-20">
        <div className="flex justify-center gap-[30px]">
          <div className="lg:w-[65%]">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] shadow-inner shadow-accent rounded-xl">
              <h3 className="  text-[20px] text-center  md:text-4xl text-accent">
                Contact Me
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lasttname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[200px] text-xs sm:text-base"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40 py-2 flex justify-center">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "03174561863",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "afzaldogar388@gmail.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: "Lahore, Pakistan",
//   },
// ];
// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: {
//           delay: 2.4,
//           duration: 0.4,
//           ease: "easeIn",
//         },
//       }}
//       id="contact"
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row gap-[30px]">
//           <div className="lg:w-[65%]  order-2 lg:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="  text-[20px] text-center  md:text-4xl text-accent">
//                 Contact Me
//               </h3>
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <Input type="firstname" placeholder="Firstname" />
//                 <Input type="lasttname" placeholder="Lastname" />
//                 <Input type="email" placeholder="Email address" />
//                 <Input type="phone" placeholder="Phone number" />
//               </div>
//               <Textarea
//                 className="h-[200px] text-xs sm:text-base"
//                 placeholder="Type your message here."
//               />
//               <Button
//                 size="md"
//                 className="max-w-40 py-2 flex justify-center hover:text-white"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           {/* <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => (
//                 <li key={index} className="flex items-center gap-6">
//                   <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex  items-center justify-center">
//                     <div className="text-[28px]">{item.icon}</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-white/60">{item.title}</p>
//                     <h3 className="md:text-xl">{item.description}</h3>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;
