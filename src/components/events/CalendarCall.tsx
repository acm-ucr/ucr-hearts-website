"use client";
import bg from "@/public/Calendar.webp";

import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import Image from "next/image";

const CalendarCall = ({ events }: { events: EventProps[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative h-[100vw] w-[100vw] overflow-clip md:h-[75vw]">
      <Image
        src={bg}
        alt="background"
        className="absolute top-[10vw] -z-10 w-screen md:top-0"
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        events={events}
        className="mb-[45vh] ml-[16.5vw] w-[67vw] bg-hearts-beige text-hearts-brown"
      />
    </div>
  );
};

export default CalendarCall;
