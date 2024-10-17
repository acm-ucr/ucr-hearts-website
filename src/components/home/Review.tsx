import { FaRegStar } from "react-icons/fa";

const ReviewTitle = () => {
  return (
    <div className="flex flex-col items-center px-11 text-[10px] md:w-1/2 md:px-0 md:text-sm 2xl:text-lg">
      <div className="flex items-center">
        <FaRegStar className="mx-1 text-2xl text-hearts-brown"></FaRegStar>
        <FaRegStar className="mx-1 text-2xl text-hearts-brown"></FaRegStar>
        <p className="mx-3 whitespace-nowrap pb-0 font-hearts !text-4xl font-extralight text-hearts-brown md:my-5">
          Member Reviews
        </p>
        <FaRegStar className="mx-1 text-2xl text-hearts-brown"></FaRegStar>
        <FaRegStar className="mx-1 text-2xl text-hearts-brown"></FaRegStar>
      </div>

      <div className="flex w-full flex-col items-center py-2 pt-0">
        <div className="h-[2.5px] w-3/5 rounded-lg bg-hearts-brown"></div>
      </div>

      <p className="text-md my-2 items-center whitespace-nowrap text-center font-hearts font-extralight text-hearts-blue">
        See what our members have to say about UCR HEARTS!
      </p>
    </div>
  );
};

export default ReviewTitle;
