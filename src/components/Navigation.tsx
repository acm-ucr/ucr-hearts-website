"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.webp";
import { items } from "@/data/navigation";
import { IoMdMenu } from "react-icons/io";

const Navigation = () => {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-30 ml-[3%] mr-[3%] flex items-center justify-between border-b-4 border-hearts-blue bg-hearts-beige text-lg md:text-[1.7vw]">
      <Link
        href="/"
        className="flex items-center duration-300 hover:opacity-75"
      >
        <Image
          src={logo}
          alt="Logo"
          className="left-0 my-[0.5%] w-[7%] duration-300 hover:opacity-60 md:w-[5%]"
        />
        <p className="ml-[0.5%] whitespace-nowrap text-xl font-light text-hearts-blue md:text-[2.5vw]">
          UCR Hearts
        </p>
      </Link>
      <div className="absolute right-0 hidden w-[40%] justify-evenly md:flex">
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`border-solid duration-300 hover:text-hearts-brown ${
              pathName === link
                ? "border-b-2 border-hearts-brown text-hearts-brown"
                : "text-hearts-blue"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 right-0 top-7 -z-10 flex w-[100%] flex-col items-center justify-evenly bg-hearts-beige transition duration-500 ease-in-out md:hidden"
            : "fixed top-[-100%] hidden transition duration-500 ease-in-out"
        }
      >
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`border-solid py-2 duration-300 hover:text-hearts-brown md:py-0 ${
              pathName === link
                ? "border-b-2 border-hearts-brown text-hearts-brown"
                : "text-hearts-blue"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div onClick={handleNav}>
        <IoMdMenu className="hover:text-swim-blue-300 flex justify-self-end text-3xl text-hearts-blue hover:cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
