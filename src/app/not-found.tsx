import Image from "next/image";
import image1 from "../../public/404.webp";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-hearts-beige">
      <Image
        src={image1}
        alt="404 Background"
        fill
        style={{ objectFit: "contain" }}
        className="pointer-events-none z-10"
      />

      <div className="absolute inset-0 flex items-end justify-center">
        <Link
          href="/"
          className="mb-[12%] w-fit rounded-full border-4 border-hearts-blue bg-hearts-brown px-16 py-4 font-hearts text-3xl text-hearts-beige drop-shadow-xl hover:opacity-75"
        >
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
