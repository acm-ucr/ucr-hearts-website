import React from "react";
import Event from "./Event";
//import { eventInfo } from "@/data/eventInfo";
import { EventProps } from "@/components/ui/calendar";

const EventList = ({ events }: { events: EventProps[] }) => {
  return (
    <div className="mb-[25%] md:mb-[10%]">
      <h2 className="font-title text-[6vw] font-light text-hearts-light-brown md:text-[4vw]">
        Upcoming Events
      </h2>
      <div className="mb-[2%] ml-[13%] h-[1px] w-[30%] bg-hearts-light-brown md:h-[3px] md:w-[22%]" />
      {events.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          time={event.startTime}
          location={event.location}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventList;
