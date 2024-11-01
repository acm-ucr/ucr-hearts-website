import Event from "./Event";
import { eventInfo } from "@/data/eventInfo";

const EventList = () => {
  return (
    <div className="mb-[10%]">
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
