import Event from "./Event";
import { eventInfo } from "@/data/eventInfo";

const EventList = () => {
  return (
    <div className="mb-[10%]">
      <h2 className="font-title text-[8vw] text-hearts-light-brown md:text-[4.5vw]">
        Upcoming Events
      </h2>
      <div className="ml-[20%] h-[3px] w-[30%] bg-hearts-light-brown md:ml-[13%] md:w-[22%]" />
      {eventInfo.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          time={event.time}
          link={event.link}
        />
      ))}
    </div>
  );
};

export default EventList;
