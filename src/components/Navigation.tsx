"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/navigation";
import { IoMdMenu } from "react-icons/io";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-30 ml-10 mr-10 flex items-center justify-between border-b-4 border-hearts-blue bg-hearts-beige text-2xl">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
        className="flex items-center justify-between"
      >
        <Image
          src={logo}
          alt="Logo"
          className="left-0 mb-2 w-12 duration-300 hover:opacity-60 md:w-20"
        />
        <p className="ml-4 text-xl font-light text-hearts-blue md:text-5xl">
          UCR Hearts
        </p>
      </Link>
      <div className="absolute right-0 hidden w-2/5 justify-evenly md:flex">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`border-solid duration-300 hover:text-hearts-brown ${
              selected === item.name
                ? "border-b-2 border-hearts-brown text-hearts-brown"
                : "text-hearts-blue"
            }`}
          >
            {item.name}
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
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`border-solid duration-300 hover:text-hearts-brown ${
              selected === item.name
                ? "border-b-2 border-hearts-brown text-hearts-brown"
                : "text-hearts-blue"
            }`}
          >
            {item.name}
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
