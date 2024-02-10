import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="green idlib photo"
            width={40}
            height={40}
          />
        </Link>
        <p>{new Date().getFullYear()} Green Idlib Konditorei</p>
      </div>
    </footer>
  );
};

export default Footer;
