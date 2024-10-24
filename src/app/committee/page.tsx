import Title from "@/components/Title";
import ComCard from "@/components/committee/ComCard";
const Committee = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title title="Committee" />
      <ComCard />
    </div>
  );
};

export default Committee;
