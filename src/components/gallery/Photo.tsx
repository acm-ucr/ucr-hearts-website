import Link from "next/link";
import Image from "next/image";

const Photo: React.FC<{ text: string; link: string; image: string }> = ({
  text,
  link,
  image,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative mb-[3vw] flex items-center justify-center justify-self-center rounded-[2vw] shadow-hearts">
        <p className="absolute z-20 text-[2.7vw] font-extralight text-hearts-blue opacity-0 duration-300 group-hover:opacity-100 group-focus:opacity-100">
          {text}
        </p>
        {/* Black text with opacity to make overall text darker */}
        <p className="text-hearts absolute z-20 text-[2.7vw] font-extralight opacity-0 duration-300 group-hover:opacity-45">
          {text}
        </p>

        <div className="h-[80vw] w-[70vw] opacity-70 duration-300 group-hover:opacity-30 md:h-[24vw] md:w-[21vw]">
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
