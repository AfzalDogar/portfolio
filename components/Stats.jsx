"use client";
import CountUp from "react-countup";

const stats = [
  {
    title: "Years of Experience",
    value: 2,
  },
  {
    title: "Projects Completed",
    value: 5,
  },
  {
    title: "Happy Clients",
    value: 5,
  },
  {
    title: "Tech Skills",
    value: 12,
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 lg:pb-0 lg:pt-0  lg:mb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1  gap-4 sm:items-center sm:justify-center lg:justify-start"
              >
                <CountUp
                  end={stat.value}
                  duration={5}
                  delay={2}
                  className=" text-[20px] md:text-4xl lg:text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 max-[320px]:text-[15px] max-[375px]:text-[15px] max-[425px]:text-[17px] md:text-[16px] lg:text-base`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
