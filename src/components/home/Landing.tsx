import Image from "next/image";
import image1 from "../../../public/landing.webp";

const Landing = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image src={image1} alt="Background" className="w-full object-cover" />
      <div className="absolute -top-5 mt-10 flex w-full flex-col items-center md:-top-3 lg:top-1 xl:top-10">
        <p className="mb-6 font-hearts text-sm font-extralight text-hearts-brown sm:mb-14 sm:text-xl md:mb-16 md:text-2xl lg:mb-20 xl:mb-32 xl:text-4xl">
          WELCOME TO
        </p>
        <p className="mb-0 font-title text-4xl text-hearts-blue sm:text-5xl md:text-6xl lg:text-7xl xl:mb-4 xl:text-9xl">
          UCR Hearts
        </p>
        <p className="font-hearts text-sm font-medium text-hearts-blue md:text-2xl lg:text-3xl xl:text-4xl">
          Health Exploration and Rotational Training Society
        </p>
      </div>
    </div>
  );
};

export default Landing;
