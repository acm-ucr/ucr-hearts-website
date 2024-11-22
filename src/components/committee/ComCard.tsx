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
      <div className="my-3 w-[85%] rounded-lg bg-white px-4 py-3 shadow-hearts md:my-[3%] md:w-[70%] md:rounded-[2.5vw] md:px-[8%] md:py-[2%]">
        <div className="relative flex items-center text-hearts-blue">
          {Icon && (
            <div className="bg-hearts-lightBlue flex h-12 w-12 items-center justify-center rounded-full md:h-16 md:w-16">
              <Icon className="text-[5vw] md:text-[2vw]" />
            </div>
          )}

          <h2 className="font-title text-[4.5vw] md:text-[3vw]">{title}</h2>
        </div>

        <p className="mb-2 font-hearts text-[2.8vw] font-thin text-hearts-brown md:mb-[1%] md:text-[1.3vw]">
          {text}
        </p>

        <ul className="list-inside list-disc pl-5 font-hearts text-[2.2vw] font-thin text-hearts-brown md:pl-[4%] md:text-[1.3vw]">
          <li className="mb-1 md:mb-2">{item1}</li>
          <li className="mb-1 md:mb-2">{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ComCard;
