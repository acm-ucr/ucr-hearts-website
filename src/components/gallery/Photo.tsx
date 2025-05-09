import Link from "next/link";
import Image from "next/image";

const Photo: React.FC<{ text: string; link: string; image: string }> = ({
  text,
  link,
  image,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative m-[5%] flex items-center justify-center rounded-[2vw] shadow-hearts md:m-0">
        <p className="absolute z-20 text-[5vw] font-extralight text-hearts-blue opacity-100 duration-300 group-hover:opacity-0 md:text-[2.7vw]">
          {text}
        </p>
        {/* Black text with opacity to make overall text darker */}
        <p className="absolute z-20 text-[5vw] font-extralight opacity-45 duration-300 group-hover:opacity-0 md:text-[2.7vw]">
          {text}
        </p>

        <div className="h-[40vw] w-[35vw] opacity-30 duration-300 group-hover:opacity-90 md:h-[24vw] md:w-[21vw]">
          <Image
            src={image}
            alt="gallery photo"
            className="absolute z-10 h-full w-full rounded-[2vw] object-cover duration-300"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Link>
  );
};

export default Photo;
