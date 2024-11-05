import Image from "next/image";
import backgroundImage from "../../../public/about.webp";
import logoImage from "../../../public/logo.webp";

const AboutTitle = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image
        src={backgroundImage}
        alt="Background"
        className="w-full object-contain"
      />
      <div className="absolute mt-[10%] flex flex-col items-center">
        <Image
          src={logoImage}
          alt="Logo"
          className="mt-[4%] w-[23vw] rounded-full border-2 border-hearts-blue object-contain shadow-hearts"
        />
        <p className="mt-[1%] font-title text-[3.5vw] font-extralight text-hearts-light-brown">
          About Us
        </p>
        <div className="h-[3px] w-[8%] bg-hearts-light-brown" />
      </div>
    </div>
  );
};

export default AboutTitle;
