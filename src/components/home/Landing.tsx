import Image from "next/image";
import image1 from "../../../public/landing.webp";

const Landing = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image src={image1} alt="Background" className="w-full object-cover" />
      <div className="absolute top-10 mt-10 flex w-full flex-col items-center">
        <p className="mb-32 font-hearts text-4xl font-extralight text-hearts-brown">
          WELCOME TO
        </p>
        <p className="mb-4 font-title text-9xl text-hearts-blue">UCR Hearts</p>
        <p className="font-hearts text-4xl font-medium text-hearts-blue">
          Health Exploration and Rotational Training Society
        </p>
      </div>
    </div>
  );
};

export default Landing;
