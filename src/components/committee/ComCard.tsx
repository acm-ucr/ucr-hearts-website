import React from "react";

interface ComCardProps {
  icon: React.ElementType;
  title: string;
  text: string;
  item1: string;
  item2: string;
  item3: string;
}

const ComCard: React.FC<ComCardProps> = ({
  icon: Icon,
  title,
  text,
  item1,
  item2,
  item3,
}) => {
  return (
    <div className="flex justify-center">
      <div className="my-[3%] w-[70%] rounded-[2.5vw] bg-white px-[8%] py-[2%] shadow-hearts">
        <div className="relative flex items-center text-hearts-blue">
          {Icon && <Icon className="absolute left-[-9%] text-[3.1vw]" />}
          <h2 className="font-title text-[3vw]">{title}</h2>
        </div>

        <p className="mb-[1%] font-hearts text-[1.3vw] font-thin text-hearts-brown">
          {text}
        </p>

        <ul className="list-inside list-disc pl-[4%] font-hearts text-[1.3vw] font-thin text-hearts-brown">
          <li className="mb-2">{item1}</li>
          <li className="mb-2">{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ComCard;
