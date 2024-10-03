"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          className={`${
            activeLink === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const links = [
//   {
//     name: "home",
//     path: "#home",
//   },
//   {
//     name: "Experience",
//     path: "#work",
//   },
//   {
//     name: "Skills",
//     path: "#skills",
//   },
//   {
//     name: "services",
//     path: "#services",
//   },
//   {
//     name: "resume",
//     path: "#resume",
//   },
//   {
//     name: "contact",
//     path: "#contact",
//   },
// ];

// const Nav = () => {
//   const pathname = usePathname();
//   console.log(pathname);
//   return (
//     <nav className="flex gap-8">
//       {links.map((link, index) => {
//         return (
//           <a
//             href={link.path}
//             key={index}
//             className={`${
//               link.path === pathname && "text-accent border-b-2 border-accent"
//             } capitalize font-medium hover:text-accent transition-all`}
//           >
//             {link.name}
//           </a>
//         );
//       })}
//     </nav>
//   );
// };

// export default Nav;
