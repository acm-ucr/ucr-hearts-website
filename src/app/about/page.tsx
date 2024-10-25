import AboutTitle from "@/components/about/AboutTitle";
import Experience from "@/components/about/Experience";
import ToDos from "@/components/about/ToDos";
import Description from "@/components/about/Description";
import Mentorship from "@/components/about/Mentorship";
const About = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <AboutTitle />
      <Experience />
      <ToDos />
      <Description />
      <Mentorship />
    </div>
  );
};

export default About;
