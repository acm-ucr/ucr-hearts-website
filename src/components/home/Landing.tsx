import Image from "next/image";
import image1 from "../../../public/landing.webp";

const Landing = () => {
  return (
    <div className="relative mt-[3%] flex w-full flex-col items-center">
      <Image src={image1} alt="Background" className="w-full object-cover" />
      <div className="absolute top-[8%] flex w-full flex-col items-center">
        <p className="mb-[5%] font-hearts text-[2.5vw] font-extralight text-hearts-light-brown">
          WELCOME TO
        </p>
        <p className="font-title text-[7.5vw] text-hearts-blue">UCR Hearts</p>
        <p className="font-hearts text-[2vw] text-hearts-blue">
          Health Exploration and Rotational Training Society
        </p>
      </div>
    </div>
  );
};

export default Landing;
