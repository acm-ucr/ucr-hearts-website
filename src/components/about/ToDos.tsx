import ToDo from "./ToDo";
import { todoInfo } from "@/data/todoInfo";

const ToDos = () => {
  return (
    <div className="mt-[8%] flex flex-col items-center pb-[10vh] md:mb-[5%]">
      <p className="mb-[2%] font-thin text-hearts-brown md:text-[2.2vw]">
        As a member, you will:
      </p>
      {todoInfo.map((todo, index) => (
        <ToDo key={index} title={todo.title} text={todo.text} />
      ))}
    </div>
  );
};

export default ToDos;
