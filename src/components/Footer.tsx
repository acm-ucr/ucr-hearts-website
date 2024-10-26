import logo from "@/public/logo.webp";
import footerLinks from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex h-[20vh] w-screen flex-col items-center text-center">
      <p className="w-[95vw] border-t-4 border-hearts-blue py-[1.5%] font-hearts text-[3vw] font-extralight text-hearts-blue">
        Let's connect!
      </p>
      <Link href="/">
        <Image
          src={logo}
          alt="hearts logo"
          className="aspect-square w-[10vw] cursor-pointer duration-300 hover:opacity-[80%] active:opacity-[50%]"
        />
      </Link>
      <p className="my-[3vh] text-[1vw] text-hearts-light-brown">
        your_email@gmail.com
      </p>
      <div className="flex w-[15%] justify-between pb-2">
        {footerLinks.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className="flex cursor-pointer items-center justify-center text-[3.5vw] text-hearts-blue duration-300 hover:scale-[95%] hover:opacity-75 active:opacity-50"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
