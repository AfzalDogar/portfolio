import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50   lg:py-12  text-white lg:flex sm:items-center lg:justify-center ">
      <div className="container mx-auto  py-5 lg:flex lg:items-center lg:justify-center bg-[#1C1C22]  lg:border lg:border-accent lg:w-[75%] xl:w-[65%] lg:rounded-full lg:p-3">
        {/* logo */}
        {/* <Link href="/">
          <h1 className="text-4xl font-semibold">
            Afzal<span className="text-accent">.</span>
          </h1>
        </Link> */}
        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button className="">Hire me</Button>
          </Link> */}
          <Button className="">Hire me</Button>
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
