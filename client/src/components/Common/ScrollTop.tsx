"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed w-10 h-10 bottom-24 md:bottom-8 right-3 bg-linear-to-r from-lime to-lime-dark text-black py-2 px-2 rounded-full shadow-lg z-50 flex justify-center items-center animate-bounce transition-all hover:scale-110 duration-300"
        >
          {<ChevronUp />}
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
