import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="flex w-[20vw] flex-col items-center rounded-[3vw] bg-white px-[1.5%] pb-[3%] pt-[0.5%] shadow-2xl">
      <Image
        src={image}
        alt="InfoPicture"
        className="aspect-[4/3] object-contain"
      />
      <p className="font-title text-[2.7vw] font-extralight text-hearts-blue">
        {title}
      </p>
      <p className="w-[90%] text-center text-[1vw] font-extralight text-hearts-brown">
        {text}
      </p>
    </div>
  );
};

export default EventCard;
