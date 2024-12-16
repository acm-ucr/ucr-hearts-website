import EventCard from "./EventCard";
import { eventCardInfo } from "@/data/eventCardInfo";
import Image from "next/image";
import bg from "@/public/eventsCard.webp";
import useInView from "../useView";

const EventCards = () => {
  const [inView, ref] = useInView();
  return (
    <div
      ref={ref}
      className="mb-[20%] mt-[5%] flex w-[90%] justify-between md:mb-[10%] md:mt-0 md:w-[85%]"
    >
      <Image
        src={bg}
        alt="background"
        className={`animatie-fade-up absolute left-0 top-0 -z-10 ${inView ? "animate-fade-down" : ""} `}
      />

      {eventCardInfo.map((CARD, index) => (
        <EventCard
          key={index}
          image={CARD.image}
          title={CARD.title}
          text={CARD.text}
          animationDelay={`${index * 0.25}s`}
        />
      ))}
    </div>
  );
};
export default EventCards;
