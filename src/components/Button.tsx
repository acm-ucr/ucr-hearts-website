import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

const Button = ({ link, text }: { link: string; text: string }) => {
  return (
    <div className="flex h-auto w-1/12 flex-col items-center py-3 duration-300 hover:cursor-pointer hover:opacity-50">
      <Image src={logo} alt="logo" className="aspect-square object-contain" />
      <Link
        href={link}
        target="_blank"
        className="bg-hearts-light-blue px-3 py-2 font-hearts text-2xl font-bold text-hearts-blue"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
