import Image from "next/image";
import star from "@/public/star.webp";
const Description = () => {
  return (
    <div className="relative mb-[5%] mt-[10%] flex w-full justify-center">
      <Image
        src={star}
        alt="star"
        className="absolute left-[15%] top-[40%] w-[3.5vw]"
      />
      <Image
        src={star}
        alt="star"
        className="absolute left-[30%] top-[-50%] w-[3.5vw]"
      />
      <Image
        src={star}
        alt="star"
        className="absolute bottom-[-50%] right-[20%] w-[3.5vw]"
      />
      <p className="mt-[2%] w-[60%] font-hearts text-[1.8vw] font-light text-hearts-brown">
        UCR HEARTS is the perfect platform to build your resume, network with
        professionals, and make a difference in your community. Don't miss out
        on this chance to jumpstart your healthcare career!
      </p>
    </div>
  );
};

export default Description;
