import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="mx-auto flex w-[50vw] flex-col items-center rounded-[3vw] bg-white px-[3%] pb-[7%] pt-[0.5%] shadow-2xl md:w-[80%] md:rounded-[2.5vw] md:py-[5%]">
      <Image
        src={image}
        alt="InfoPicture"
        className="aspect-[4/3] object-contain"
      />
      <p className="md:text-xxl font-title text-[2.7vw] font-extralight text-hearts-blue">
        {title}
      </p>
      <p className="w-[90%] text-[0.8vw] font-extralight text-hearts-brown md:text-[1vw]">
        {text}
      </p>
    </div>
  );
};

export default EventCard;
