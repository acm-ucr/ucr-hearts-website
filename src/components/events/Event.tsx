import Image from "next/image";
import Link from "next/link";
import star from "../../../public/star.webp";

interface EventProps {
  title: string;
  time: string;
  link: string;
}

const Event: React.FC<EventProps> = ({ title, time, link }) => {
  return (
    <div className="flex w-[65vw]">
      <Image
        src={star}
        alt="star icon"
        className="mr-[3%] w-[4%] object-contain"
      />
      <div className="flex w-full items-center justify-between pt-[4.5%]">
        <div className="flex flex-col">
          <p className="font-hearts text-[2vw] font-thin text-hearts-blue">
            {title}
          </p>
          <p className="text-nowrap pl-[10%] text-[1.8vw] font-thin text-hearts-light-brown-100 opacity-90">
            {time}
          </p>
        </div>
        <Link
          href={link}
          className="text-nowrap rounded-full bg-hearts-blue px-[4%] py-[0.3%] font-hearts text-[1.3vw] font-extralight text-white duration-300 hover:opacity-75"
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default Event;
