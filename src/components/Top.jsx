import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Top = () => {
  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      onClick={() => backToTop()}
      className="fixed bottom-0 right-0 mr-5 mb-5 bg-white h-8 w-8 text-black z-50 flex justify-center items-center cursor-pointer opacity-50 hover:opacity-100"
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default Top;
