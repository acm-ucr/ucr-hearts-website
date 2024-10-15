import Image from "next/image";
import backgroundImage from "../../../public/about.webp";
import logoImage from "../../../public/logo.webp";

const AboutTitle = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image
        src={backgroundImage}
        alt="Background"
        className="h-auto w-full object-cover"
      />
      <div className="absolute mt-[4%] flex flex-col items-center justify-center">
        <Image
          src={logoImage}
          alt="Logo"
          className="mt-[4%] w-1/4 object-contain"
        />
        <p className="mt-[2%] font-title text-6xl text-hearts-lightBrown">
          A<span className="underline underline-offset-[16px]">bout U</span>s
        </p>
      </div>
    </div>
  );
};

export default AboutTitle;
