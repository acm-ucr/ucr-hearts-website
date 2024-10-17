import Image from "next/image";
import image1 from "../../public/404.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-hearts-beige">
      <div className="pointer-events-none absolute inset-0 z-20">
        <Image
          src={image1}
          alt="404 Background"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-end justify-center">
        <Link
          href="/"
          className="mb-[12%] w-fit rounded-full border-4 border-hearts-brown bg-hearts-light-brown px-16 py-4 font-hearts text-3xl text-white shadow-lg shadow-gray-500 duration-300 hover:opacity-75"
        >
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
