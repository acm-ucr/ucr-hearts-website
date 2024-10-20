import Title from "@/components/Title";
import BoardMembers from "@/components/boards/BoardMembers";
const Boards = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <BoardMembers />
    </div>
  );
};

export default Boards;
