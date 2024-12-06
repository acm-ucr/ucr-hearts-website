"use client";
import ComCard from "@/components/committee/ComCard";
import { ITEMS } from "@/data/comCardInfo";

const ComCards = () => {
  return (
    <div className="flex flex-col justify-center pb-[10%]">
      {ITEMS.map((item, index) => (
        <div key={index}>
          <ComCard
            icon={item.icon}
            title={item.title}
            text={item.text}
            item1={item.item1}
            item2={item.item2}
            item3={item.item3}
          />
        </div>
      ))}
    </div>
  );
};

export default ComCards;
