import EventCard from "./EventCard";
import LogoImg from "@/public/boards/Purav.webp";
const EventCards = () => {
  return (
    <div className="mb-[10%] flex w-[70%] justify-between">
      <EventCard
        image={LogoImg}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Workshops"
      />

      <EventCard
        image={LogoImg}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Guest Speakers"
      />

      <EventCard
        image={LogoImg}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        title="Health Fairs"
      />
    </div>
  );
};

export default EventCards;
