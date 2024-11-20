import { FaRegStar } from "react-icons/fa";

const ReviewTitle = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[70vw] items-center justify-between text-[5vw] text-hearts-light-brown md:w-[35vw] md:text-[2.5vw]">
        <FaRegStar />
        <FaRegStar />
        <p className="whitespace-nowrap font-hearts font-extralight">
          Member Reviews
        </p>
        <FaRegStar />
        <FaRegStar />
      </div>
      <div className="h-[2.5px] w-[12%] rounded-lg bg-hearts-light-brown" />
      <p className="mb-[5%] mt-[3%] whitespace-nowrap font-hearts text-[3vw] font-extralight text-hearts-blue md:text-[1.7vw]">
        See what our members have to say about UCR HEARTS!
      </p>
    </div>
  );
};

export default ReviewTitle;
