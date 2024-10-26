import { RiDoubleQuotesL } from "react-icons/ri";
import React from "react";

const Review = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className="relative w-[31%] rounded-[2.5vw] bg-white px-[1%] py-[1.5%] shadow-xl shadow-stone-400">
      <div className="flex">
        <RiDoubleQuotesL className="h-fit text-[18vw] text-hearts-blue" />
        <p className="m-[1%] font-hearts text-[1.5vw] font-extralight leading-relaxed text-hearts-light-brown">
          “{quote}”
        </p>
      </div>
      <p className="mt-[3%] pl-[10%] font-hearts text-[1.2vw] font-extralight text-hearts-blue">
        - {name}
      </p>
    </div>
  );
};

export default Review;
