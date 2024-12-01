"use client";
import useView from "../useView";
import Image from "next/image";
import star from "../../../public/star.webp";

interface EventProps {
  title: string;
  text: string;
}

const ToDo: React.FC<EventProps> = ({ title, text }) => {
  const [inView, ref] = useView();

  return (
    <div
      ref={ref}
      className="my-[3%] w-[80vw] items-start md:my-[1%] md:w-[60vw]"
    >
      <div className="flex items-center">
        <Image
          src={star}
          alt="star icon"
          className="mr-[3%] w-[5%] object-contain"
        />
        <p
          className={`font-title text-xl font-thin text-hearts-blue md:text-[2.8vw] ${inView && "animate-fade-up"}`}
        >
          {title}
        </p>
      </div>
      <p
        className={`pl-[10%] text-sm font-thin text-hearts-brown opacity-90 md:text-[1.8vw] md:leading-relaxed ${inView && "animate-fade-down"}`}
      >
        {text}
      </p>
    </div>
  );
};

export default ToDo;
