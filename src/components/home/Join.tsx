import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/join.webp";
import Link from "next/link";

const Join = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image
        src={backgroundImage}
        alt="Background"
        className="h-auto w-full object-cover"
      />

      <div className="absolute mt-[-3%] flex w-1/3 flex-col items-center md:mt-[0%]">
        <p className="font-hearts text-[3.5vw] font-light text-hearts-light-brown md:text-[2.5vw]">
          How to Join
        </p>
        <div className="h-[2.5px] w-1/6 rounded-lg bg-hearts-light-brown"></div>
        <p className="my-[6%] items-center whitespace-nowrap text-center font-hearts text-[2.5vw] font-extralight text-hearts-blue md:my-[5%] md:text-[1.7vw]">
          Membership is open to everyone interested in the
          <br />
          <span>healthcare field!</span>
        </p>

        <Link
          href="http://google.com"
          className="border-3 my-[1%] w-fit cursor-pointer rounded-md border-hearts-blue bg-hearts-blue px-[15%] py-[2.5%] font-hearts text-[3vw] font-extralight text-hearts-beige drop-shadow-xl duration-300 hover:opacity-75 active:opacity-50 md:rounded-2xl md:text-[1.5vw]"
          target="_blank"
        >
          Membership Form
        </Link>

        <p className="my-[6%] items-center whitespace-nowrap text-center font-hearts text-[2.5vw] font-extralight text-hearts-blue md:my-[5%] md:text-[1.7vw]">
          Committees are only open to members
        </p>

        <Link
          href="http://google.com"
          className="border-3 my-1 w-fit cursor-pointer rounded-md border-hearts-blue bg-hearts-blue px-[10%] py-[2.5%] font-hearts text-[3vw] font-extralight text-hearts-beige drop-shadow-xl duration-300 hover:opacity-75 active:opacity-100 md:rounded-2xl md:text-[1.5vw]"
          target="_blank"
          style={{ minWidth: "150px" }}
        >
          Apply for committee here
        </Link>

        <p className="my-2 items-center whitespace-nowrap text-center font-hearts text-[2.7vw] font-extralight text-hearts-brown md:my-12 md:text-[1.5vw]">
          Our general meetings are Mondays at{" "}
          <span className="text-hearts-brown text-opacity-50">6PM</span> at{" "}
          <span className="text-hearts-brown text-opacity-50">
            LOCATION TBD
          </span>
        </p>
      </div>
    </div>
  );
};

export default Join;
