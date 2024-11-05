import Title from "@/components/Title";
import ComCards from "@/components/committee/ComCards";
import Image from "next/image";
import bg from "@/public/committee.webp";

const Committee = () => {
  return (
    <div className="relative flex w-screen flex-col items-center overflow-hidden">
      <Image
        src={bg}
        alt="bg"
        className="absolute left-0 top-0 -z-10 w-full object-contain pt-[10%]"
      />
      <Title title="Committee" />
      <ComCards />
    </div>
  );
};

export default Committee;
