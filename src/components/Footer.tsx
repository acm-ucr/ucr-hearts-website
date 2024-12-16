import logo from "@/public/logo.webp";
import footerLinks from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="z-10 flex h-[20vh] w-full flex-col items-center justify-center bg-hearts-beige text-center">
      <div className="z-10 flex w-full flex-col items-center bg-hearts-beige">
        <p className="z-10 w-[95%] border-t-4 border-hearts-blue bg-hearts-beige py-[1%] font-hearts text-[6vw] font-extralight text-hearts-blue md:py-[1.5%] md:text-[4vw] lg:text-[4vw]">
          Let's connect!
        </p>
        <Link href="/">
          <Image
            src={logo}
            alt="hearts logo"
            className="aspect-square w-[18vw] cursor-pointer duration-300 hover:opacity-[80%] active:opacity-[50%] md:w-[14vw] lg:w-[12vw]"
          />
        </Link>
        <p className="my-[1.5vh] text-[3vw] text-hearts-light-brown md:my-[3vh] lg:text-[1.5vw]">
          ucrhearts@gmail.com
        </p>
      </div>
      <div className="flex w-[15%] flex-row justify-between pb-2">
        {footerLinks.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className="cursor-pointer flex-row items-center justify-center pb-2 text-[6.5vw] text-hearts-blue duration-300 hover:scale-[95%] hover:opacity-75 active:opacity-50 md:py-2 md:text-[5vw] lg:text-[4vw]"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
