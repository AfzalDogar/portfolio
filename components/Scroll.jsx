"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-5 sm:bottom-10  sm:right-10 bg-white text-[#22a6b3] p-3 rounded-full"
      >
        <FaArrowUp />
      </button> */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 sm:bottom-20  sm:right-10 bg-white text-[#22a6b3] p-3 rounded-full"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Scroll;
