import Title from "@/components/Title";
// import ComCard from "@/components/committee/ComCard";
import ComCards from "@/components/committee/ComCards";

const Committee = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title title="Committee" />
      <ComCards />
    </div>
  );
};

export default Committee;
