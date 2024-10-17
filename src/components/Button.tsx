import Link from "next/link";
import Image from "next/image";

const Button = () => {
  return (
    <Link
      href="https://github.com/acm-ucr/ucr-hearts-website?tab=readme-ov-file"
      target="_blank"
      className="bg-hearts-light-blue px-3 py-6 text-2xl font-bold text-hearts-blue"
    >
      text
    </Link>
  );
};

export default Button;
