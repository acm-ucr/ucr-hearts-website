"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Board = ({
  image,
  name,
  pos,
  mail,
  insta,
  desc,
  excs,
}: {
  image: StaticImageData;
  name: string;
  pos: string;
  desc: string;
  excs: string[];
  mail: string;
  insta: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative mb-[5%] cursor-pointer rounded-[3vw] bg-hearts-blue shadow-hearts">
      <motion.div
        className="relative z-10 aspect-[4/5] w-[22vw] rounded-[10%] bg-white"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        onClick={() => setFlipped((prevState) => !prevState)}
      >
        <div style={{ backfaceVisibility: "hidden" }}>
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
            className="absolute bottom-[1.7vw] right-[5vw] text-[3vw] text-hearts-blue hover:scale-95 hover:opacity-50 hover:duration-300"
          >
            <MdMail />
          </Link>

          <Link
            href={insta}
            target="_blank"
            className="absolute bottom-[2vw] right-[2vw] text-[2.5vw] text-hearts-blue hover:scale-95 hover:opacity-50 hover:duration-300"
          >
            <FaInstagram />
          </Link>
        </div>

        <motion.div
          className="absolute inset-0 m-[8%] flex flex-col gap-y-[10%]"
          initial={{ rotateY: 180 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <p className="pb-[2%] text-[1.5vw] text-hearts-light-brown-100">
              Why did you found hearts?
            </p>
            <p className="text-[0.9vw] leading-tight text-hearts-brown">
              {desc}
            </p>
          </div>
          <div>
            <p className="text-[1.5vw] text-hearts-light-brown-100">
              Extracurriculars:
            </p>
            <div className="list-disc pl-[5%] text-[0.9vw] leading-tight">
              {excs.map((exc, index) => (
                <li key={index} className="text-hearts-brown">
                  {exc}
                </li>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Board;
