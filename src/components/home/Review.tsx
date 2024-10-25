import { RiDoubleQuotesL } from "react-icons/ri";
import React from "react";

const Review = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className="relative flex w-[500px] rounded-3xl bg-hearts-white py-4 pl-4 pr-2 shadow-lg shadow-gray-700">
      <RiDoubleQuotesL className="absolute left-0.5 top-4 h-16 w-16 text-hearts-blue" />
      <div className="flex flex-col justify-start">
        <p className="pl-12 pt-1 font-hearts text-3xl font-extralight leading-tight text-hearts-light-brown">
          "{quote}"
        </p>
        <p className="pl-5 pt-2 font-hearts text-xl font-extralight text-hearts-blue">
          - {name}
        </p>
      </div>
    </div>
  );
};

export default Review;
