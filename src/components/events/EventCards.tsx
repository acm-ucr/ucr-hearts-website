import EventCard from "./EventCard";
import LogoImg from "@/public/logo.webp";
const EventCards = () => {
  return (
    <div className="">
      <EventCard
        image={LogoImg}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Event"
      />
    </div>
  );
};

export default EventCards;
