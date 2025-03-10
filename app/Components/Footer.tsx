import Link from "next/link";
import React from "react";
interface Props {
  isGift: boolean;
}

const Footer = ({ isGift }: Props) => {
  return (
    <footer className="absolute bottom-0 w-full h-10 flex  justify-center gap-x-5">
      <p className="text-gray-400 ">Made by Mounir Lbath</p>
      {isGift ? (
        <Link className="text-blue-200 hover:text-blue-400" href="/generate">
          Generate a gift
        </Link>
      ) : (
        <Link className="text-blue-200 hover:text-blue-400" href="/">
          Default Birthday Gift
        </Link>
      )}
    </footer>
  );
};

export default Footer;
