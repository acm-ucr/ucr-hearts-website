import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/join.webp";
import Link from "next/link";

const Join = () => {
  return (
    <div className="">
      <div className="relative flex w-full flex-col items-center">
        <Image
          src={backgroundImage}
          alt="Background"
          className="h-auto w-full object-cover"
        />

        <div className="absolute flex w-1/3 flex-col items-center">
          <p className="mx-3 font-hearts text-2xl font-light text-hearts-brown">
            How to Join
          </p>
          <div className="h-[2.5px] w-1/6 rounded-lg bg-hearts-brown"></div>
          <p className="my-8 items-center whitespace-nowrap text-center font-hearts text-xl font-light text-hearts-blue">
            Membership is open to everyone interested in the
            <br />
            <span>healthcare field!</span>
          </p>

          <Link
            href="http://google.com"
            className="border-3 my-1 w-fit rounded-2xl border-hearts-blue bg-hearts-blue px-9 py-3 font-hearts text-xl text-hearts-beige drop-shadow-xl hover:opacity-75 active:opacity-100"
            target="_blank"
          >
            Membership Form
          </Link>

          <p className="my-8 items-center whitespace-nowrap text-center font-hearts text-xl font-light text-hearts-blue">
            Committees are only open to members
          </p>

          <Link
            href="http://google.com"
            className="border-3 my-1 w-fit rounded-2xl border-hearts-blue bg-hearts-blue px-9 py-3 font-hearts text-xl text-hearts-beige drop-shadow-xl hover:opacity-75 active:opacity-100"
            target="_blank"
          >
            Apply for committee here
          </Link>

          <p className="my-12 items-center whitespace-nowrap text-center font-hearts text-xl font-light text-hearts-brown">
            Our general meetings are Mondays at{" "}
            <span className="text-hearts-brown text-opacity-50">6PM</span> at{" "}
            <span className="text-hearts-brown text-opacity-50">
              LOCATION TBD
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
