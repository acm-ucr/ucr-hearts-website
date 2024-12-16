import Title from "@/components/Title";
import Image from "next/image";
import board from "@/public/board.webp";
import BoardMembers from "@/components/boards/BoardMembers";
const Boards = () => {
  return (
    <div className="relative flex w-screen flex-col items-center overflow-hidden pb-[30vh]">
      <Title title="Meet the Board"></Title>
      <Image
        src={board}
        alt="Board Background"
        className="absolute left-0 top-0 w-screen object-contain"
      />
      <BoardMembers />
    </div>
  );
};

export default Boards;
