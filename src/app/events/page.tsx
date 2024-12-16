"use client";
import { useEffect, useState } from "react";
import Title from "@/components/Title";
import EventCards from "@/components/events/EventCards";
import EventList from "@/components/events/EventList";
import Calendar from "@/components/events/CalendarCall";
import { EventProps } from "@/components/ui/calendar";

interface GoogleCalendarEvent {
  start: {
    dateTime?: string;
    date?: string;
  };
  summary: string;
  location?: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      if (!apiKey || !calendarId) {
        console.error("API Key or Calendar ID is missing.");
        return;
      }

      const today = new Date();
      const timeMin = today.toISOString();
      const timeMax = new Date(today);
      timeMax.setMonth(today.getMonth() + 2);
      const timeMaxISO = timeMax.toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMin,
      )}&timeMax=${encodeURIComponent(timeMaxISO)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedEvents: EventProps[] = data.items.map(
          (event: GoogleCalendarEvent) => ({
            date: new Date(event.start.dateTime || event.start.date || ""),
            title: event.summary || "No Title",
            startTime: event.start.dateTime || event.start.date || "",
            location: event.location || "N/A",
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
      <EventList events={events} />
      <Calendar events={events} />
    </div>
  );
};

export default Events;
