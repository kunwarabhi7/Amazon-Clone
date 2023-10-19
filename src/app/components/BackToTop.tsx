"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  // Scroll event listener to toggle the button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className=" bg-[rgb(72,87,105)] text-white py-2 px-4  focus:outline-none w-full hover:bg-gray-600"
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
