import Board from "./Board";
import { boardInfo } from "@/data/boardInfo";

const BoardMembers = () => {
  return (
    <div className="mb-[5vh] grid grid-cols-2 gap-x-[15vw] gap-y-[10vh]">
      {boardInfo.map((CARD, index) => (
        <div
          key={index}
          className={
            index === boardInfo.length - 1
              ? "col-span-2 flex justify-center"
              : ""
          }
        >
          <Board
            image={CARD.image}
            name={CARD.name}
            pos={CARD.pos}
            desc={CARD.desc}
            excs={CARD.excs}
            mail={CARD.mail}
            insta={CARD.insta}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardMembers;
