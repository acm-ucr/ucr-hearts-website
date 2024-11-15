import Image from "next/image";
import backgroundImage from "../../../public/about.webp";
import logoImage from "../../../public/logo.webp";

const AboutTitle = () => {
  return (
    <div className="relative m-2 flex w-full flex-col items-center md:m-0">
      <Image
        src={backgroundImage}
        alt="Background"
        className="w-full object-contain"
      />
      <div className="absolute mt-[15%] flex flex-col items-center md:mt-[10%]">
        <Image
          src={logoImage}
          alt="Logo"
          className="mt-[6%] w-[45vw] rounded-full border-2 border-hearts-blue object-contain shadow-hearts md:mt-[4%] md:w-[23vw]"
        />
        <p className="mt-[2%] font-title text-[5vw] font-extralight text-hearts-light-brown md:text-[3.5vw]">
          About Us
        </p>
        <div className="h-[2px] w-[20%] bg-hearts-light-brown md:h-[3px] md:w-[8%]" />
      </div>
    </div>
  );
};

export default AboutTitle;
