"use client";
import CountUp from "react-countup";

const stats = [
  {
    title: "Years of Experience",
    value: 1,
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
    <section className="pt-4 pb-5 lg:pb-12 xl:pb-0 lg:pt-0 lg:mb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex gap-4 sm:items-center shadow-sm shadow-accent py-1 sm:py-0 px-1 sm:justify-center lg:justify-start"
              >
                <CountUp
                  end={stat.value}
                  duration={15}
                  delay={5}
                  className="text-[20px] text-accent md:text-4xl lg:text-7xl xl:text-8xl font-extrabold"
                />
                <p
                  className={`${
                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 max-[320px]:text-[13px] max-[375px]:text-[15px] max-[425px]:text-[17px] md:text-[20px] lg:text-2xl xl:text-2xl`}
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
