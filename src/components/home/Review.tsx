import { RiDoubleQuotesL } from "react-icons/ri";
import React from "react";

const Review = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className=" duration-300 aspect-[4/3] w-full rounded-[5vw] bg-white px-[1%] py-[1.7%] shadow-hearts hover:scale-[105%] md:rounded-[2.5vw] md:pt-[5%] md:px-[3%]">
      <div className="flex">
        <RiDoubleQuotesL className="h-fit text-[40vw] text-hearts-blue md:text-[18vw]" />
        <p className="m-[2%] font-hearts text-[3.2vw] font-extralight leading-relaxed text-hearts-light-brown md:text-[1.5vw]">
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
