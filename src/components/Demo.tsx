import Button from "@/components/Button";
import Logo from "@/public/logo.webp";
import Image from "next/image";

const Demo = () => {
  return (
    <div className="w-page flex flex-col items-center py-10">
      <div className="relative flex min-h-80 w-[50vw] items-center justify-evenly bg-hearts-brown">
        <Button link="\" text="text 1" />
        <Button link="\" text="text 2" />
        <Button link="\" text="text 3" />
        <Button link="\" text="text 4" />
        <Button link="\" text="text 5" />
        <Button link="\" text="text 6" />
      </div>
      <Image
        src={Logo}
        alt="img"
        className="absolute left-10 top-[50%] w-1/12"
      />
      <Image src={Logo} alt="img" className="h-20 w-full object-fill" />
      <Image src={Logo} alt="img" className="h-20 w-full object-contain" />
    </div>
  );
};

export default Demo;