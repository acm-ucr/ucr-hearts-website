import Title from "@/components/Title";
import EventCards from "@/components/events/EventCards";
import EventList from "@/components/events/EventList";
import Calendar from "@/components/events/CalendarCall";
import { EventProps } from "@/components/ui/calendar";

const Events = () => {
  const events: EventProps[] = [
    {
      date: new Date("2024-11-15T09:00:00"),
      title: "Important event",
      startTime: "2024-11-15T09:00:00",
    },
    {
      date: new Date("2024-11-15T09:00:00"),
      title: "Important event",
      startTime: "2024-11-15T09:00:00",
    },
    {
      date: new Date("2024-11-15T09:00:00"),
      title: "Important event",
      startTime: "2024-11-15T09:00:00",
    },
    {
      date: new Date("2024-11-15T09:00:00"),
      title: "Important event",
      startTime: "2024-11-15T09:00:00",
    },
    {
      date: new Date("2024-11-15T14:00:00"),
      title: "Give Minh a raise",
      startTime: "2024-11-15T14:00:00",
    },
  ];

  return (
    <div className="flex w-screen flex-col items-center">
      <Title title="Events" />
      <EventCards />
      <EventList />
      <Calendar events={events} />
    </div>
  );
};

export default Events;
