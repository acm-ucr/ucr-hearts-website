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
      <div className="my-[3%] w-[85%] rounded-[2.5vw] bg-white px-[10%] py-[3%] shadow-hearts md:w-[70%] md:px-[8%] md:py-[2%]">
        <div className="relative flex items-center text-hearts-blue">
          {Icon && (
            <Icon className="absolute left-[-9%] text-[5vw] md:text-[3.1vw]" />
          )}
          <h2 className="text-nowrap font-title text-[4.2vw] md:text-[3vw]">
            {title}
          </h2>
        </div>

        <p className="mb-[1%] font-hearts text-[2.5vw] font-thin text-hearts-brown md:text-[1.3vw]">
          {text}
        </p>

        <ul className="list-inside list-disc text-nowrap pl-[4%] font-hearts text-[2.5vw] font-thin text-hearts-brown md:text-[1.3vw]">
          <li className="md:mb-2">{item1}</li>
          <li className="md:mb-2">{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ComCard;
