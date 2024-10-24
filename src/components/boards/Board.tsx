import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Board = ({
  image,
  name,
  pos,
  desc,
  excs,
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
    <div className="relative mb-[5%]">
      <div className="relative z-10 aspect-[2/3] w-[30vw] rounded-[10%] bg-white">
        <div className="flex flex-col items-center text-center leading-none">
          <Image
            src={image}
            alt="image of member"
            className="mt-[5%] aspect-[33/23] w-[90%] rounded-lg"
          />

          <p className="font-hearts text-[3vw] text-hearts-blue">{name}</p>

          <p className="font-hearts text-[1.5vw] text-hearts-brown">{pos}</p>
        </div>

        <div className="h-[30%] w-[80%] pl-[1.5vw] pt-[3%]">
          <div>
            <p className="text-[1.5vw] text-hearts-light-brown-100">
              Why did you found hearts?
            </p>
            <p className="pl-[2%] text-[0.9vw] leading-tight text-hearts-brown">
              {desc}
            </p>
          </div>
          <div>
            <p className="pt-[3%] text-[1.5vw] text-hearts-light-brown-100">
              Extracurriculars:
            </p>
            <div className="list-disc pl-[2%] text-[0.9vw] leading-tight">
              {excs.map((exc, index) => (
                <li key={index} className="text-hearts-brown">
                  {exc}
                </li>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={mail}
          target="_blank"
          className="absolute bottom-[8vw] right-[1vw] text-[5vw] text-hearts-blue hover:scale-75 hover:opacity-50 hover:duration-300"
        >
          <MdMail />
        </Link>

        <Link
          href={insta}
          target="_blank"
          className="absolute bottom-[2vw] right-[1vw] text-[5vw] text-hearts-blue hover:scale-75 hover:opacity-50 hover:duration-300"
        >
          <FaInstagram />
        </Link>
      </div>

      <div className="absolute right-[.5vw] top-[.4vw] aspect-[2/3] w-[30.5vw] rounded-[10%] bg-gray-500 opacity-50" />
    </div>
  );
};

export default Board;
