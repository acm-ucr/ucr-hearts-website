import Title from "@/components/Title";
import EventCards from "@/components/events/EventCards";
import EventList from "@/components/events/EventList";
import Calendar from "@/components/events/Calendar";

const Events = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title title="Events" />
      <EventCards />
      <EventList />
      <Calendar />
    </div>
  );
};

export default Events;
