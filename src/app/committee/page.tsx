import Title from "@/components/Title";
import ComCards from "@/components/committee/ComCards";

const Committee = () => {
  return (
    <div className="relative flex w-screen flex-col items-center">
      <div className ="mb-[0%]">
        <Title title="Committees" />
      </div>
      <ComCards/>
    </div>
  );
};

export default Committee;
