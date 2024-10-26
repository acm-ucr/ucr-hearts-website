import Image from "next/image";
import image1 from "../../public/404.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex w-full justify-center overflow-hidden bg-hearts-beige py-[7%]">
      <Image
        src={image1}
        alt="404 Background"
        className="w-[90%] object-cover"
      />
      <Link
        href="/"
        className="absolute bottom-[20%] left-[41%] h-fit w-fit cursor-pointer rounded-full border-[3px] border-hearts-brown bg-hearts-light-brown px-[4%] py-[0.5%] font-hearts text-[1.5vw] font-extralight text-white shadow-lg shadow-gray-500 duration-300 hover:opacity-75"
      >
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
