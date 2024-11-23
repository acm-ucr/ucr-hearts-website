import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="flex w-1/4 flex-col items-center rounded-[8vw] bg-white px-[3%] pb-[7%] pt-[0.5%] md:w-[80%] md:rounded-[3vw]">
      <Image
        src={image}
        alt="InfoPicture"
        className="aspect-[5/3] object-contain"
      />
      <p className="mb-2 font-title text-[6vw] font-extralight text-hearts-blue md:text-[2.7vw]">
        {title}
      </p>
      <p className="w-[90%] text-[3.5vw] font-extralight text-hearts-brown md:text-[.9vw]">
        {text}
      </p>
    </div>
  );
};

export default EventCard;
