"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export interface EventProps {
  date: Date;
  title: string;
  startTime: string;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events = [],
  ...props
}: CalendarProps & { events: EventProps[] }) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );

  const eventDays = events.map((event) => event.date);

  const modifiers = {
    hasEvent: (date: {
      getFullYear: () => number;
      getMonth: () => number;
      getDate: () => number;
    }) =>
      eventDays.some(
        (eventDate) =>
          date.getFullYear() === eventDate.getFullYear() &&
          date.getMonth() === eventDate.getMonth() &&
          date.getDate() === eventDate.getDate(),
      ),
  };

  const CustomDay: React.FC<{
    date: Date;
    selected: boolean;
    onClick: (date: Date) => void;
  }> = ({ date, selected, onClick }) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const dayEvents = events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate(),
    );

    return (
      <div className="relative overflow-clip text-[1vw]">
        <div
          onClick={() => onClick(date)} // Handle click to set selected date
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-[7vw] w-[9.7vw] px-1 py-0 font-hearts text-[1vw] aria-selected:bg-hearts-light-blue aria-selected:text-hearts-blue",
            selected
              ? "bg-hearts-light-blue text-hearts-blue hover:bg-hearts-light-blue hover:text-hearts-blue"
              : "",
            isToday ? "bg-muted" : "",
          )}
        >
          {date.getDate()}
        </div>

        {dayEvents.length > 0 && (
          <div className="absolute left-[5%] top-[28%] w-[90%]">
            {dayEvents.map((event, index) => (
              <div
                key={index}
                className="mb-[3%] rounded-lg border border-hearts-blue bg-hearts-light-blue text-[0.9vw] text-hearts-blue"
              >
                <div className="truncate px-[3%] font-hearts">
                  {new Date(event.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-0", className)}
      modifiers={modifiers}
      classNames={{
        month: "space-y-[1vw]",
        caption:
          "flex justify-center pt-[0.5vh] relative items-center mb-[3vh] bg-hearts-beige",
        caption_label: "text-[4vw] font-hearts",
        nav: "space-x-[0.5vw] flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-[2vw] w-[2vw] bg-transparent p-0",
        ),
        nav_button_previous: "absolute left-[15vw]",
        nav_button_next: "absolute right-[15vw]",
        table: "w-full space-y-[1vw] bg-white rounded-xl shadow-hearts",
        head_row:
          "flex bg-hearts-light-blue -mb-1 w-full aspect-[15/1] rounded-t-xl text-center items-center",
        head_cell:
          "rounded-md w-[9.7vw] font-hearts text-[1.2vw] text-hearts-blue",
        row: "flex w-full mt-[0.5vh]",
        cell: "relative aspect-[4/1] p-0 text-center text-[1vw]",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        ...classNames,
      }}
      formatters={{
        formatWeekdayName: (date) => {
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          return days[date.getDay()];
        },
      }}
      components={{
        IconLeft: () => (
          <ArrowLeft
            color="#665045"
            className="h-[1.5vw] w-[1.5vw] scale-[200%]"
          />
        ),
        IconRight: () => (
          <ArrowRight
            color="#665045"
            className="h-[1.5vw] w-[1.5vw] scale-[200%]"
          />
        ),
        Day: (props) => (
          <CustomDay
            {...props}
            selected={props.date.getTime() === selectedDate?.getTime()}
            onClick={setSelectedDate}
          />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
