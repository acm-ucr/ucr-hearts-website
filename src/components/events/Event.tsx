import Image from "next/image";
import star from "../../../public/star.webp";

interface EventProps {
  title: string;
  time: string;
  date: Date;
  location: string;
}

const Event: React.FC<EventProps> = ({ title, date, time, location }) => {
  return (
    <div className="flex w-[80vw] md:w-[65vw]">
      <Image
        src={star}
        alt="star icon"
        className="mr-[3%] w-[4%] object-contain"
      />
      <div className="flex w-full items-center justify-between pt-[4.5%]">
        <div className="flex flex-col">
          <p className="font-hearts text-[4.5vw] font-thin text-hearts-blue md:text-[2vw]">
            {title}
          </p>
          <p className="text-nowrap pl-[10%] text-[3.5vw] font-thin text-hearts-light-brown-100 opacity-90 md:text-[1.8vw]">
            {date.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            {", "}
            {new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            {" at"} {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
