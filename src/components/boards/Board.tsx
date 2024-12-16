"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import useView from "../useView";

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
  const [inView, ref] = useView();
  return (
    <div
      className={`relative mb-[5%] cursor-pointer rounded-[3vw] bg-hearts-blue shadow-hearts ${inView && "animate-fade-right animate-duration-[600ms]"}`}
    >
      <motion.div
        ref={ref}
        className="relative z-10 aspect-[4/5] w-[35vw] rounded-[3vw] bg-white md:w-[22vw]"
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
              className="mt-[5%] aspect-[33/23] w-[90%] rounded-[3vw]"
            />

            <p className="mt-[2%] font-title text-[4.5vw] text-hearts-blue md:text-[2.5vw]">
              {name}
            </p>

            <p className="font-hearts text-[2.5vw] font-extralight text-hearts-brown md:text-[1.2vw]">
              {pos}
            </p>
          </div>

          <div className="h-[30%] w-[80%] pl-[1.5vw] pt-[3%]"></div>

          <Link
            href={mail}
            target="_blank"
            className="absolute bottom-[1.6vw] right-[7vw] text-[5vw] text-hearts-blue hover:scale-95 hover:opacity-50 hover:duration-300 md:bottom-[1.7vw] md:right-[5vw] md:text-[3vw]"
          >
            <MdMail />
          </Link>

          <Link
            href={insta}
            target="_blank"
            className="absolute bottom-[2vw] right-[2vw] text-[4.3vw] text-hearts-blue hover:scale-95 hover:opacity-50 hover:duration-300 md:text-[2.5vw]"
          >
            <FaInstagram />
          </Link>
        </div>

        <motion.div
          className="absolute inset-0 m-[8%] flex flex-col gap-y-[5%] md:gap-y-[10%]"
          initial={{ rotateY: 180 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <p className="pb-[2%] text-[2.5vw] text-hearts-light-brown-100 md:text-[1.5vw]">
              Why did you found hearts?
            </p>
            <p className="text-[1.7vw] leading-tight text-hearts-brown md:text-[0.9vw]">
              {desc}
            </p>
          </div>
          <div>
            <p className="text-[2.5vw] text-hearts-light-brown-100 md:text-[1.5vw]">
              Extracurriculars:
            </p>
            <div className="list-disc pl-[5%] text-[1.7vw] leading-tight md:text-[0.9vw]">
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
