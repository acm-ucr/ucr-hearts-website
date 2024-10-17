import React from "react";
import Image from "next/image";
import image1 from "@/public/experience.webp";

const Experience = () => {
  return (
    <div className="">
      <Image src={image1} alt="" className="" />

      <div className="ml-40 mt-10 font-hearts text-4xl font-light text-hearts-brown">
        <p>
          Are you a pre-health undergraduate student eager to gain
          <br />
          firsthand experience in the{" "}
          <text className="text-hearts-light-brown">medical</text> field?
          <br />
          Join UCR HEARTS, a dynamic club dedicated <br />
          to providing unparalleled opportunities for students
          <br />
          aspiring to enter{" "}
          <text className="text-hearts-light-brown">healthcare</text>{" "}
          professions.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Experience;
