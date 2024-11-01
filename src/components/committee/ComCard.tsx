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
      <div
        className="bg-hearts-white my-[3%] max-w-[75%] rounded-[3rem] px-[8%] py-[2%] shadow-md"
        style={{
          boxShadow: "-20px 20px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="relative flex items-center text-hearts-blue">
          {Icon && <Icon className="absolute left-[-8%] text-[3.3vw]" />}
          <h2 className="font-title text-[3.5vw]">{title}</h2>
        </div>

        <p className="mb-[1%] font-hearts text-[1.7vw] font-thin text-hearts-brown">
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
