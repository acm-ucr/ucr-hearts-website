"use client";
import useView from "../useView";
import Image from "next/image";
import image1 from "../../../public/landing.webp";

const Landing = () => {
  const [inView, ref] = useView();
  return (
    <div className="relative mt-[3%] flex w-full flex-col items-center md:mb-0 mb-[5%]">
      <Image
        src={image1}
        alt="Background"
        className={`scale-125 object-cover pt-[10%] md:w-full md:scale-100 md:pt-0 ${inView && "animate-fade-up"}`}
      />
      <div
        ref={ref}
        className="absolute top-[15%] flex w-full flex-col items-center md:top-[8%]"
      >
        <p className="mb-[3%] font-hearts text-[4vw] font-extralight text-hearts-light-brown md:mb-[5%] md:text-[2.5vw]">
          WELCOME TO
        </p>
        <p className="font-title text-5xl text-hearts-blue md:text-[7.5vw]">
          UCR Hearts
        </p>
        <p className="font-hearts text-sm text-hearts-blue md:text-[2vw]">
          Health Exploration and Rotational Training Society
        </p>
      </div>
    </div>
  );
};

export default Landing;
