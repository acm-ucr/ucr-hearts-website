import { RiDoubleQuotesL } from "react-icons/ri";
import React from "react";

const Review = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className="relative w-[53vw] rounded-[5vw] bg-white px-[1%] py-[1.7%] shadow-hearts md:w-[26%] md:rounded-[2.5vw] md:py-[1.5%]">
      <div className="flex">
        <RiDoubleQuotesL className="h-fit text-[40vw] text-hearts-blue md:text-[18vw]" />
        <p className="m-[1%] font-hearts text-[3.2vw] font-extralight leading-relaxed text-hearts-light-brown md:text-[1.5vw]">
          “{quote}”
        </p>
      </div>
      <p className="mt-[3%] pl-[10%] font-hearts text-[3vw] font-extralight text-hearts-blue md:text-[1.2vw]">
        - {name}
      </p>
    </div>
  );
};

export default Review;
