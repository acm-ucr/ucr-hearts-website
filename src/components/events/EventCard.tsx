import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="border-3 mx-auto h-[35vh] w-[50%] max-w-screen-md rounded-3xl border-white bg-white shadow-2xl lg:w-64">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src={image}
          alt="InfoPicture"
          className="aspect-square h-[40vh] w-[80%] max-w-xs rounded-3xl border-2 border-white object-contain pt-3"
        />

        <div className="my-2 text-center font-title text-2xl font-light text-hearts-blue md:text-3xl">
          {title}
        </div>
        <div className="md:text-md px-3 pb-3 text-center font-hearts text-sm font-extralight text-hearts-brown">
          {text}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
