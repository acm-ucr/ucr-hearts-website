import React from "react";
import ComCard from "./ComCard";
import comCardInfo from "@/data/comCardInfo";

const ComCards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {comCardInfo.map((card, index) => (
        <ComCard
          key={index}
          icon={card.icon}
          title={card.title}
          text={card.text}
          item1={card.item1}
          item2={card.item2}
          item3={card.item3}
        />
      ))}
    </div>
  );
};

export default ComCards;
