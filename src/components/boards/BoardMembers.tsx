import Board from "./Board";
import { boardInfo } from "@/data/boardInfo";

const BoardMembers = () => {
  return (
    <div className="my-[5vh] grid grid-cols-2 gap-x-[10vw] gap-y-[10vh]">
      {boardInfo.map((CARD, index) => (
        <div key={index}>
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
