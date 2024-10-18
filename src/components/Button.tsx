import Link from "next/link";

const Button = ({link, text}: {link: string, text: string}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-hearts-light-blue px-3 py-6 text-2xl font-bold text-hearts-blue"
    >
      {text}
    </Link>
  );
};

export default Button;
