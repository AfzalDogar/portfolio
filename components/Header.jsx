import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white lg:flex sm:items-center lg:justify-center ">
      <div className="container mx-auto  lg:flex lg:items-center lg:justify-center  lg:border lg:border-accent lg:w-[60%] xl:w-[55%] lg:rounded-full lg:p-3">
        {/* logo */}
        {/* <Link href="/">
          <h1 className="text-4xl font-semibold">
            Afzal<span className="text-accent">.</span>
          </h1>
        </Link> */}
        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="hover:text-white">Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
