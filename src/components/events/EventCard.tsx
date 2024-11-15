import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="mx-auto flex w-[70vw] flex-col items-center rounded-[8vw] bg-white px-[3%] py-[10%] pb-[7%] pt-[0.5%] shadow-2xl md:w-[80%] md:rounded-[3vw] md:py-[5%]">
      <Image
        src={image}
        alt="InfoPicture"
        className="mb-4 mt-4 aspect-[5/3] w-[100%] object-contain"
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
