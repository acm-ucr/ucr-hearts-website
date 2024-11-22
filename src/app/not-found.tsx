import Image from "next/image";
import image1 from "../../public/404.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex w-full justify-center overflow-hidden bg-hearts-beige py-[65%] md:py-[7%]">
      <Image
        src={image1}
        alt="404 Background"
        className="w-full object-cover"
      />
      <Link
        href="/"
        className="absolute bottom-[20%] h-fit w-fit cursor-pointer rounded-full border-[3px] border-hearts-brown bg-hearts-light-brown px-[4%] py-[0.5%] text-[6vw] font-extralight text-white shadow-lg shadow-gray-500 duration-300 hover:opacity-75 md:left-[41%] md:font-hearts md:text-[1.5vw]"
      >
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
