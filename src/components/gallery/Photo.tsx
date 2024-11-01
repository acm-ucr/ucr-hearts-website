import Link from "next/link";
import Image from "next/image";

const Photo: React.FC<{ text: string; link: string; image: string }> = ({
  text,
  link,
  image,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative mb-[3vw] flex items-center justify-center justify-self-center">
        <p className="absolute z-20 text-4xl font-extralight text-hearts-blue opacity-0 duration-150 group-hover:opacity-100">
          {text}
        </p>
        {/* Black text with opacity to make overall text darker */}
        <p className="text-hearts absolute z-20 text-4xl font-extralight opacity-0 duration-150 group-hover:opacity-45">
          {text}
        </p>

        <div className="h-[27vw] w-[24vw] opacity-100 duration-150 group-hover:opacity-30">
          <Image
            src={image}
            alt="gallery photo"
            className="absolute z-10 h-full w-full rounded-[10%] object-cover duration-150"
            width={400}
            height={400}
          />
          <div className="absolute right-[0.6vw] top-[0.8vw] aspect-[9/10] w-[24.5vw] rounded-[10%] bg-stone-500 opacity-80 blur-sm" />
        </div>
      </div>
    </Link>
  );
};

export default Photo;
