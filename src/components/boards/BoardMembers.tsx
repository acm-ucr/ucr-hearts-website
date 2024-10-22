import Board from "./Board";
import logo from "@/public/logo.webp";

const BoardMembers = () => {
  return (
    <div className="">
      <Board
        name="name"
        image={logo}
        pos="position"
        desc="description"
        exc="extracurriculurs"
        mail="/"
        insta="/"
      />
    </div>
  );
};

export default BoardMembers;
