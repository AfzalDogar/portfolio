"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "Experience",
    path: "#work",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "contact",
    path: "#contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className="flex justify-center w-full items-center"
      >
        <div className="w-full flex justify-between">
          <CiMenuFries className="text-[32px] text-accent" />
          <img
            class="size-8 rounded-full object-cover object-center ring ring-white"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col justify-start items-start mt-10 gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                onClick={handleLinkClick}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

// <Link
//   href={link.path}
//   key={index}
//   onClick={handleLinkClick}
//   className={`${
//     link.path === pathname &&
//     "text-accent border-b-2 border-accent"
//   } capitalize text-xl  hover:text-accent transition-all`}
// >
//   {link.name}
// </Link>

// const links = [
//   {
//     name: "home",
//     path: "/",
//   },

//   {
//     name: "services",
//     path: "/services",
//   },
//   {
//     name: "resume",
//     path: "/resume",
//   },
//   {
//     name: "work",
//     path: "/work",
//   },
//   {
//     name: "contact",
//     path: "/contact",
//   },
// ];
