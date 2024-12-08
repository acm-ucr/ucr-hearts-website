import Image from "next/image";
import mentorshipImage from "../../../public/mentorship.webp";

const Mentorship = () => {
  //return <div className="">Mentorship</div>;
  return (
    <div className="my-[10%] w-full pb-10 pl-[15%]">
      <Image
        src={mentorshipImage}
        alt="mentorship"
        className="mb-[3%] w-[85vw]"
      />

      <div className="l-[5%] w-4/5 items-center font-hearts text-[3.5vw] font-light text-hearts-brown md:text-[2.5vw] lg:text-[1.8vw]">
        <p>
          Take your pre-health experience to the next level with UCR HEARTS's
          <br />
          rotational mentorship committees. Designed to provide targeted
          guidance <br />
          and support, our three committees-{""}
          <text className="text-hearts-light-brown opacity-90">
            Research
          </text>,{" "}
          <text className="text-hearts-light-brown opacity-90">Education</text>,
          and{" "}
          <text className="text-hearts-light-brown opacity-90">
            Professional <br /> Development
          </text>
          -offer invaluable opportunities for growth and learning.
        </p>

        <p>
          <br />
          Join UCR HEARTS and benefit from the comprehensive mentorship offered{" "}
          <br />
          by these committees. Gain valuable expereince, knowledge, and skills{" "}
          <br />
          that will set you apart in your{" "}
          <text className="text-hearts-light-brown opacity-90">
            healthcare journey!
          </text>{" "}
        </p>
      </div>
    </div>
  );
};

export default Mentorship;
