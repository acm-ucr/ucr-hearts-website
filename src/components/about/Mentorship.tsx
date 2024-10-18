import Image from "next/image";
import mentorshipImage from "../../../public/mentorship.webp";

const Mentorship = () => {
  //return <div className="">Mentorship</div>;
  return (
    <div className="mt-80">
      <Image src={mentorshipImage} alt="" className="" />

      <div className="ml-40 mt-20 font-hearts text-4xl font-light text-hearts-brown">
        <p>
          Take your pre-health experience to the next level with UCR <br />
          HEARTS's rotational mentorship committees. Designed to <br />
          provide targeted guidance and support, our three <br />
          committees-{""}
          <text className="text-hearts-light-brown">Research</text>,{" "}
          <text className="text-hearts-light-brown">Education</text>, and{" "}
          <text className="text-hearts-light-brown">
            Professional <br /> Development
          </text>
          -offer invaluable opportunities for growth and <br />
          learning.
        </p>

        <div className="mb-40">
          <p>
            <br />
            Join UCR HEARTS and benefit from the comprehensive
            <br />
            mentorship offered by these committees. Gain valuable <br />
            expereince, knowledge, and skills that will set you apart in <br />
            your{" "}
            <text className="text-hearts-light-brown">
              healthcare journey!
            </text>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
