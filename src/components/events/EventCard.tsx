import React from "react";
import Image, { StaticImageData } from "next/image";
import useInView from "../useView";

interface EventCardProps {
  image: StaticImageData;
  text: string;
  title: string;
  animationDelay: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  text,
  title,
  animationDelay,
}) => {
  const [inView, ref] = useInView();
  return (
    <div
      style={{ animationDelay }}
      ref={ref}
      className={`flex w-[28vw] flex-col items-center rounded-[4vw] bg-white px-[1%] pt-[1%] shadow-hearts md:aspect-[3/4] md:w-[21vw] md:rounded-[3vw] md:px-[2%] md:pb-[3%] ${inView ? "animate-fade-down" : ""}`}
    >
      <Image
        src={image}
        alt="InfoPicture"
        className="aspect-[4/3] rounded-[4vw] object-contain md:rounded-[3vw]"
      />
      <p className="text-nowrap font-title text-[4.3vw] font-extralight text-hearts-blue md:text-[2.7vw]">
        {title}
      </p>
      <p className="invisible w-[90%] text-[1vw] font-extralight text-hearts-brown md:visible md:text-[0.8vw]">
        {text}
      </p>
    </div>
  );
};

export default EventCard;
