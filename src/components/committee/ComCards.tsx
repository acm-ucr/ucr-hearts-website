import React from "react";
import ComCard from "./ComCard";
import Image from "next/image";
import backgroundImage from "../../../public/committee.webp";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";

const ComCards = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Image
        src={backgroundImage}
        alt="Committee Background"
        className="w-full object-contain"
      />

      <div className="absolute mt-[2%]">
        <ComCard
          icon={HiMagnifyingGlass}
          title="Research Committee"
          text="Connect with Principal Investigators (PIs) and research labs on campus through mentorship from experienced board members."
          item1="Delve into groundbreaking scientific research"
          item2="Gain access to exclusive research awards and fellowships"
          item3="Gain exposure to diverse fields of study"
        />

        <ComCard
          icon={IoBookOutline}
          title="Education Committee"
          text="Led by knowledgeable board members, this committee focuses on educating members about diseases related to the club's biquarterly body system theme."
          item1="Conduct research and present your findings"
          item2="Create brochures that are distributed at health fairs"
          item3="Enhance knowledge and public speaking skills"
        />

        <ComCard
          icon={IoPersonOutline}
          title="Professional Development Committee"
          text="Strengthen your professional skills with workshops dedicated to preparing you for success in your future healthcare career."
          item1="Build your resume"
          item2="Master interview techniques"
          item3="Prepare for graduate school"
        />
      </div>
    </div>
  );
};

export default ComCards;
