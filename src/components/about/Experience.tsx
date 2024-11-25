"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/public/experience.webp";
import useView from "../useView";

const Experience = () => {
  const [inView, ref] = useView();
  return (
    <div ref={ref} className="my-[20%] w-full md:my-[10%] md:pl-[15%]">
      <Image
        src={image1}
        alt=""
        className={`ml-[5%] w-full scale-110 md:w-[85vw] ${inView && "animate-duration-1500 animate-fade-down"}`}
      />
      <div
        className={`ml-[10%] mt-[2%] w-4/5 font-hearts text-sm font-light text-hearts-brown md:ml-0 md:w-2/3 md:pl-[5%] md:text-[1.8vw] ${inView && "animate-duration-1500 animate-fade-right animate-delay-300"}`}
      >
        <p className="leading-relaxed">
          Are you a pre-health undergraduate student eager to gain firsthand
          experience in the
          <text className="text-hearts-light-brown opacity-90"> medical </text>
          field? Join UCR HEARTS, a dynamic club dedicated to providing
          unparalleled opportunities for students aspiring to enter
          <text className="text-hearts-light-brown opacity-90">
            {" "}
            healthcare{" "}
          </text>
          professions.
        </p>
      </div>
    </div>
  );
};

export default Experience;
