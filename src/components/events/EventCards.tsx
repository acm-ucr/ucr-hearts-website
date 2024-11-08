import EventCard from "./EventCard";
import { eventCardInfo } from "@/data/eventCardInfo";
import Image from "next/image";
import bg from "@/public/eventsCard.webp";
const EventCards = () => {
  return (
    <div className="mb-[10%] flex w-[70%] justify-between">
      <Image
        src={bg}
        alt="background"
        className="absolute left-0 top-0 -z-10"
      />
      {eventCardInfo.map((CARD, index) => (
        <div key={index}>
          <EventCard image={CARD.image} title={CARD.title} text={CARD.text} />
        </div>
      ))}
    </div>
  );
};
export default EventCards;
