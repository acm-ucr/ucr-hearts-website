import EventCard from "./EventCard";
import { eventCardInfo } from "@/data/eventCardInfo";
import Image from "next/image";
import bg from "@/public/eventsCard.webp";
const EventCards = () => {
  return (
    <div className="bg-red-500 mb-[10%] flex w-[90%] flex-col items-center space-y-5 md:w-[80vw] md:flex-row md:justify-between md:space-y-0">
      <Image
        src={bg}
        alt="background"
        className="absolute left-0 top-0 -z-10"
      />
      {eventCardInfo.map((CARD, index) => (
          <EventCard key={index} image={CARD.image} title={CARD.title} text={CARD.text} />
      ))}
    </div>
  );
};
export default EventCards;
