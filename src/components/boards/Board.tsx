import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Board = ({
  image,
  name,
  pos,
  desc,
  exc,
  mail,
  insta,
}: {
  image: StaticImageData;
  name: string;
  pos: string;
  desc: string;
  exc: string;
  mail: string;
  insta: string;
}) => {
  return (
    <div className="relative mb-[5%]">
      <div className="relative z-10 aspect-[2/3] w-[25vw] rounded-[10%] bg-white">
        <div className="flex flex-col items-center text-center leading-none">
          <Image
            src={image}
            alt="image of member"
            className="aspect-[3/2] w-[90%] rounded-lg pt-[7%]"
          />

          <p className="font-hearts text-[3vw] text-hearts-blue">{name}</p>

          <p className="font-hearts text-[1.5vw] text-hearts-brown">{pos}</p>
        </div>

        <div className="grid h-[50%] grid-rows-2 items-start pl-[1.5vw] pt-[5%]">
          <div>
            <p className="text-[1.5vw] text-hearts-light-brown-100">
              Why did you found hearts?
            </p>
            <p className="text-[1vw] text-hearts-brown">{desc}</p>
          </div>
          <div>
            <p className="text-[1.5vw] text-hearts-light-brown-100">
              Extracurriculars:
            </p>
            <p className="text-[1vw] text-hearts-brown">{exc}</p>
          </div>
        </div>

        <Link
          href={mail}
          target="_blank"
          className="absolute bottom-[7vw] right-[1vw] text-[5vw] text-hearts-blue hover:scale-75 hover:opacity-50 hover:duration-300"
        >
          <MdMail />
        </Link>

        <Link
          href={insta}
          target="_blank"
          className="absolute bottom-[1vw] right-[1vw] text-[5vw] text-hearts-blue hover:scale-75 hover:opacity-50 hover:duration-300"
        >
          <FaInstagram />
        </Link>
      </div>

      <div className="absolute right-[.5vw] top-[.75vw] aspect-[2/3] w-[25.5vw] rounded-[10%] bg-gray-500 opacity-50" />
    </div>
  );
};

export default Board;
