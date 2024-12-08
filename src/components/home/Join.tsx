"use client";
import useView from "../useView";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/join.webp";
import Link from "next/link";

const Join = () => {
  const [inView, ref] = useView();
  return (
    <div className="relative flex w-full flex-col items-center" ref={ref}>
      <Image
        src={backgroundImage}
        alt="Background"
        className={`h-auto w-full object-cover ${inView && "animate-fade-down"}`}
      />

      <div className="absolute mt-[-3%] flex w-1/3 flex-col items-center md:mt-[0%]">
        <p
          className={`font-hearts text-[5vw] font-light text-hearts-light-brown md:text-[2.5vw] ${inView && "animate-fade-down animate-delay-100"}`}
        >
          How to Join
        </p>
        <div
          className="h-[2.5px] w-1/6 rounded-lg bg-hearts-light-brown"
          ref={ref}
        ></div>
        <p
          className={`my-[6%] items-center whitespace-nowrap text-center font-hearts text-[3.5vw] font-extralight text-hearts-blue md:my-[5%] md:text-[1.7vw] ${inView && "animate-fade-down animate-delay-200"}`}
        >
          Membership is open to everyone interested in the
          <br />
          <span>healthcare field!</span>
        </p>

        <Link
          href="https://forms.gle/pBvTEnY4KPe9CzVK8"
          className={`border-3 my-[1%] w-fit min-w-36 cursor-pointer rounded-md border-hearts-blue bg-hearts-blue px-[15%] py-[2.5%] text-center font-hearts text-[3.5vw] font-extralight text-hearts-beige drop-shadow-xl duration-300 hover:opacity-75 active:opacity-50 md:rounded-2xl md:text-[1.5vw] ${inView && "animate-fade-right animate-delay-300"}`}
          target="_blank"
        >
          Membership Form
        </Link>

        <p
          className={`my-[6%] items-center whitespace-nowrap text-center font-hearts text-[3.5vw] font-extralight text-hearts-blue md:my-[5%] md:text-[1.7vw] ${inView && "animate-delay-400 animate-fade-down"}`}
        >
          Committees are only open to members
        </p>

        <Link
          href="https://forms.gle/W2XdCrfPjfLA5bRa6"
          className={`border-3 my-1 w-fit min-w-48 cursor-pointer rounded-md border-hearts-blue bg-hearts-blue px-[10%] py-[2.5%] text-center font-hearts text-[3.5vw] font-extralight text-hearts-beige drop-shadow-xl duration-300 hover:opacity-75 active:opacity-100 md:rounded-2xl md:text-[1.5vw] ${inView && "animate-fade-left animate-delay-500"}`}
          target="_blank"
        >
          Apply for committee here
        </Link>

        <p
          className={`my-2 items-center whitespace-nowrap text-center font-hearts text-[3.5vw] font-extralight text-hearts-brown md:my-12 md:text-[1.5vw] ${inView && "animate-delay-600 animate-fade-down"}`}
        >
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
