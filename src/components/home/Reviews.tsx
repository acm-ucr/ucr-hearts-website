import Review from "./Review";
import { reviews } from "@/data/reviews";

const Reviews = () => {
  return (
    <div className="my-[1%] flex w-[90vw] justify-evenly">
      {reviews.map((item, index) => (
        <Review key={index} quote={item.quote} name={item.name} />
      ))}
    </div>
  );
};

export default Reviews;
