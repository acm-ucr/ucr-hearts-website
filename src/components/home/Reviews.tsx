import Review from "./Review";
import { reviews } from "@/data/reviews";

const Reviews = () => {
  return (
    <div className="mb-[15%] mt-[1%] flex w-[90vw] flex-col items-center space-y-4 md:flex-row md:justify-evenly">
      {reviews.map((item, index) => (
        <Review key={index} quote={item.quote} name={item.name} />
      ))}
    </div>
  );
};

export default Reviews;
