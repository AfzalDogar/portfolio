import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left order-1 lg:order-none">
            <span className="text-xl text-accent">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Afzal Dogar </span>
            </h1>
            <p className="max-w-[500px] text-white mb-9">
              Expert Front-end Developer with 2+ years of expertise in crafting
              responsive, high-performance web applications, with key strengths
              in optimizing load times and enhancing user engagement. Proven
              ability to develop maintainable, top-notch code and support junior
              developers.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="/upload/Hafiz Muhammad Afzal.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex uppercase items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div> */}
          <div className="order-2 lg:order-none mb-8 lg:mb-0">
            <Stats />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};
export default Home;
