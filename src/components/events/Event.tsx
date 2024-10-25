import React from "react";
import Image from "next/image";
import star from "../../../public/star.webp";

interface EventProps {
  title: string;
  time: string;
  link: string;
}

const Event: React.FC<EventProps> = ({ title, time, link }) => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <Image src={star} alt="star icon" width={30} height={30} />{" "}
        <div className="flex flex-col">
          <p className="font-hearts font-thin text-hearts-blue md:text-2xl">
            {title}
          </p>
          <p className="ml-6 mt-1 text-sm font-thin text-hearts-light-brown md:text-sm">
            {time}
          </p>
        </div>
      </div>
      <a
        href={link}
        className="text-md ml-8 rounded-full bg-hearts-blue px-6 py-1 font-hearts font-thin text-hearts-white shadow-[-2px_4px_3px_rgba(0,0,0,0.3)]"
      >
        More info
      </a>
    </div>
  );
};

export default Event;
