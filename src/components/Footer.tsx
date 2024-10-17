"use client";
import logo from "@/public/logo.webp";
import footerLinks from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [logoClicked, setLogoClicked] = useState(false);
  const [iconClicked, setIconClicked] = useState(-1);
  const router = useRouter();

  const logoClick = () => {
    setLogoClicked(true);
    router.push("/");

    setTimeout(() => {
      setLogoClicked(false);
    }, 1000);
  };

  const iconClick = (index: number) => {
    setIconClicked(index);

    setTimeout(() => {
      setIconClicked(-1);
    }, 1000);
  };

  return (
    <div className="grid-rows grid h-[20vh] w-screen text-center">
      <div className="absolute left-[2.5vw] h-[3px] w-[95vw] bg-hearts-blue" />

      <div className="my-[1.5vh] font-hearts text-[5vw] text-hearts-blue">
        Let's connect!
      </div>

      <div className="flex w-screen items-center justify-center">
        <Image
          src={logo}
          alt="hearts logo"
          className={
            logoClicked
              ? "z-10 aspect-square w-[18vw] opacity-[50%] hover:cursor-pointer"
              : "z-10 aspect-square w-[18vw] hover:cursor-pointer hover:opacity-[80%]"
          }
          onClick={logoClick}
        />
      </div>

      <div className="my-[3vh] text-[1.5vw] text-hearts-brown">
        your_email@gmail.com
      </div>

      <div className="flex items-end justify-center">
        {footerLinks.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className={
              iconClicked === index
                ? "mx-[1vw] flex items-center justify-center text-[6vw] text-hearts-blue opacity-50 hover:scale-75 hover:text-white hover:transition-colors"
                : "mx-[1vw] flex items-center justify-center text-[6vw] text-hearts-blue hover:scale-75 hover:text-white hover:transition-colors"
            }
            onClick={() => iconClick(index)}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
