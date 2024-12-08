import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import star from "../../../public/star.webp";

interface EventProps {
  title: string;
  time: string;
  link: string;
}

const Event: React.FC<EventProps> = ({ title, time, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex w-[80vw] md:w-[65vw]"
    >
      <Image
        src={star}
        alt="star icon"
        className="mr-[3%] w-[4%] object-contain"
      />
      <div className="flex w-full items-center justify-between pt-[4.5%]">
        <div className="flex flex-col">
          <p className="font-hearts text-[4.5vw] font-thin text-hearts-blue md:text-[2vw]">
            {title}
          </p>
          <p className="text-nowrap pl-[10%] text-[3.5vw] font-thin text-hearts-light-brown-100 opacity-90 md:text-[1.8vw]">
            {time}
          </p>
        </div>
        <Link
          href={link}
          className="mt-[6%] text-nowrap rounded-full bg-hearts-blue px-[4%] py-[0.3%] font-hearts text-[2.5vw] font-extralight text-white duration-300 hover:opacity-75 md:mt-[0%] md:text-[1.3vw]"
        >
          More info
        </Link>
      </div>
    </motion.div>
  );
};

export default Event;
