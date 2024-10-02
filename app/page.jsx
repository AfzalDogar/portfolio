import Hero from "./hero/page";
import Skills from "./skills/index";
import Services from "./services/page";
import Work from "./work/page";
import Resume from "./resume/page";
import Contact from "./contact/page";
const Home = () => {
  return (
    <main className="flex flex-col sm:gap-20">
      <Hero />
      <Skills />
      <Services />
      <Work />
      <Resume />
      <Contact />
    </main>
  );
};

export default Home;
