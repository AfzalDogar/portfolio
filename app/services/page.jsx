"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    name: "Website design",
    description:
      "We create visually stunning websites that are easy to navigate. Our designs are tailored to meet your business needs and engage users. Each website is crafted to perform across all devices.",
    href: "",
  },
  {
    num: "02",
    name: "API integration",
    description:
      "We provide seamless API integrations that allow your application to connect with third-party services. Whether you need payment gateways or data syncing, we ensure reliable communication between platforms.",
    href: "",
  },
  {
    num: "03",
    name: "Responsive design",
    description:
      "Our responsive designs ensure your website looks great on any device. From desktops to smartphones, we optimize layouts for an exceptional user experience. No more pinching and zooming, just a smooth interaction.",
    href: "",
  },
  {
    num: "04",
    name: "Dynamic user interface",
    description:
      "We build dynamic, interactive user interfaces that provide engaging experiences. Our focus is on creating intuitive and responsive UIs that enhance user satisfaction. Modern, sleek designs keep your users coming back.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className=" flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline cursor-pointer text-transparent group-hover:text-outline:hover transition-all duration-500 ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 cursor-pointer ">
                  {service.name}
                </h3>
                <p className="cursor-pointer text-white/60">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
