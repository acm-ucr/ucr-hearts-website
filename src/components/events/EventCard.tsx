import React from "react";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, text, title }) => {
  return (
    <div className="mx-auto flex w-[50vw] flex-col items-center rounded-[3vw] bg-white px-[3%] pb-[7%] pt-[0.5%] shadow-2xl sm:rounded-[2.5vw] sm:py-[10%] md:w-[80%] md:py-[5%]">
      <Image
        src={image}
        alt="InfoPicture"
        className="mb-4 aspect-[5/3] object-contain sm:w-[100%]"
      />
      <p className="mb-2 font-title text-[4.5vw] font-extralight text-hearts-blue md:text-[2.7vw]">
        {title}
      </p>
      <p className="w-[90%] text-[0.8vw] font-extralight text-hearts-brown sm:text-[2vw] md:text-[1vw]">
        {text}
      </p>
    </div>
  );
};

export default EventCard;
