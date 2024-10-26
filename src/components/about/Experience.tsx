import React from "react";
import Image from "next/image";
import image1 from "@/public/experience.webp";

const Experience = () => {
  return (
    <div className="my-[10%] w-full pl-[15%]">
      <Image src={image1} alt="" className="w-[85vw]" />

      <div className="mt-[2%] pl-[5%] font-hearts text-[1.8vw] font-light text-hearts-brown">
        <p>
          Are you a pre-health undergraduate student eager to gain firsthand
          <br />
          experience in the{" "}
          <text className="text-hearts-light-brown opacity-90">
            medical
          </text>{" "}
          field? Join UCR HEARTS, a dynamic club
          <br />
          dedicated to providing unparalleled opportunities for students
          <br />
          aspiring to enter{" "}
          <text className="text-hearts-light-brown opacity-90">
            healthcare
          </text>{" "}
          professions.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Experience;
