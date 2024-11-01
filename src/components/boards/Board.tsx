import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Board = ({
  image,
  name,
  pos,
  mail,
  insta,
}: {
  image: StaticImageData;
  name: string;
  pos: string;
  desc: string;
  excs: string[];
  mail: string;
  insta: string;
}) => {
  return (
    <div className="relative mb-[5%] cursor-pointer">
      <div className="relative z-10 aspect-[4/5] w-[20vw] rounded-[10%] bg-white">
        <div className="flex flex-col items-center text-center leading-none">
          <Image
            src={image}
            alt="image of member"
            className="mt-[5%] aspect-[33/23] w-[90%] rounded-lg"
          />

          <p className="mt-[2%] font-title text-[2.5vw] text-hearts-blue">
            {name}
          </p>

          <p className="font-hearts text-[1.2vw] font-extralight text-hearts-brown">
            {pos}
          </p>
        </div>

        <div className="h-[30%] w-[80%] pl-[1.5vw] pt-[3%]"></div>

        <Link
          href={mail}
          target="_blank"
          className="absolute bottom-[1.7vw] right-[5vw] text-[3vw] text-hearts-blue duration-300 hover:scale-95 hover:opacity-50 hover:duration-300"
        >
          <MdMail />
        </Link>

        <Link
          href={insta}
          target="_blank"
          className="absolute bottom-[2vw] right-[2vw] text-[2.5vw] text-hearts-blue duration-300 hover:scale-95 hover:opacity-50 hover:duration-300"
        >
          <FaInstagram />
        </Link>
      </div>

      <div className="absolute right-[.5vw] top-[.4vw] aspect-[4/5] w-[20.5vw] rounded-[10%] bg-stone-500 opacity-40 blur-sm" />
    </div>
  );
};

export default Board;
