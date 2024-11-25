import logo from "@/public/logo.webp";
import footerLinks from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex h-[20vh] w-screen flex-row items-center text-center lg:flex-col">
      <div className="flex flex-col items-center">
        <p className="w-[95vw] border-t-4 border-hearts-blue py-[1.5%] font-hearts text-[6vw] font-extralight text-hearts-blue md:text-[5vw] lg:text-[4vw]">
          Let's connect!
        </p>
        <Link href="/">
          <Image
            src={logo}
            alt="hearts logo"
            className="aspect-square w-[18vw] cursor-pointer duration-300 hover:opacity-[80%] active:opacity-[50%] md:w-[14vw] lg:w-[12vw]"
          />
        </Link>
        <p className="my-[3vh] text-[2.5vw] text-hearts-light-brown lg:text-[1.5vw]">
          your_email@gmail.com
        </p>
      </div>
      <div className="flex w-[15%] flex-col justify-between pb-2 lg:flex-row">
        {footerLinks.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className="cursor-pointer flex-col items-center justify-center py-2 text-[6.5vw] text-hearts-blue duration-300 hover:scale-[95%] hover:opacity-75 active:opacity-50 md:text-[5vw] lg:flex-row lg:px-2 lg:text-[4vw]"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
