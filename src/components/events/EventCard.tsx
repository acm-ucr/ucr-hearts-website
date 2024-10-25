import React from "react";
import Image from "next/image";

interface EventCardProps {
  image: string;
  text: string;
  title: string;
}
const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="border-3 mx-auto flex h-80 w-64 flex-row items-center justify-center rounded-3xl border-white bg-white shadow-2xl">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt="InfoPicture"
          className="md:h-30 mx-auto h-44 w-10/12 items-center rounded-3xl border-2 border-white lg:w-48"
        />

        <div className="mt-2 text-center font-title text-4xl font-light text-hearts-blue">
          {title}
        </div>
        <div className="text-center font-hearts text-xs font-extralight text-hearts-brown">
          {text}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
