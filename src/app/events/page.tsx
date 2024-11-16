"use client";
import { useEffect, useState } from "react";
import Title from "@/components/Title";
import EventCards from "@/components/events/EventCards";
import EventList from "@/components/events/EventList";
import Calendar from "@/components/events/CalendarCall";
import { EventProps } from "@/components/ui/calendar";

interface GoogleCalendarEvent {
  start: {
    dateTime: string;
  };
  summary: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;
      const maxResults = 10;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&maxResults=${maxResults}&orderBy=startTime&singleEvents=true`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const formattedEvents: EventProps[] = data.items.map(
          (event: GoogleCalendarEvent) => ({
            date: new Date(event.start.dateTime),
            title: event.summary,
            startTime: event.start.dateTime,
          }),
        );

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events from Google Calendar:", error);
      }
    };

    fetchEvents();
  }, []);

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
