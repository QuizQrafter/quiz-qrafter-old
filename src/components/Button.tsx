import Link from 'next/link';

type ButtonProps = {
  href: string;
  title: string;
};

const Button = ({ href, title }: ButtonProps) => {
  return (
    <Link href={href} className="inline-block bg-black text-white py-2 px-6 rounded hover:bg-gray-700 transition duration-300">{title}</Link>
  );
};

export default Button;
