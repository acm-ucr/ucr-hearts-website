import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

const Button = ({ link, text }: { link: string; text: string }) => {
  return (
    <div className="w-1/10 flex h-auto flex-col items-center bg-hearts-beige py-3 duration-300 hover:cursor-pointer hover:opacity-50 active:opacity-30">
      <Image
        src={logo}
        alt="logo"
        className="aspect-square w-1/2 object-contain"
      />
      <Link
        href={link}
        target="_blank"
        className="bg-hearts-light-blue px-3 py-2 font-hearts text-[1vw] font-bold text-hearts-blue"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
