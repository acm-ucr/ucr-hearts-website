import EventCard from "./EventCard";
import { eventCardInfo } from "@/data/eventCardInfo";
import Image from "next/image";
import bg from "@/public/eventsCard.webp";
const EventCards = () => {
  return (
    <div className="mb-[20%] mt-[5%] flex w-[90%] justify-between md:mb-[10%] md:mt-0 md:w-[70%]">
      <Image
        src={bg}
        alt="background"
        className="absolute left-0 top-0 -z-10"
      />
      {eventCardInfo.map((CARD, index) => (
        <EventCard
          key={index}
          image={CARD.image}
          title={CARD.title}
          text={CARD.text}
        />
      ))}
    </div>
  );
};
export default EventCards;
