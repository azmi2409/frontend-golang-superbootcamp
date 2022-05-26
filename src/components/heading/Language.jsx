import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const Language = () => {
  return (
    <div className="group relative inline-block h-full">
      <div className="flex gap-1 items-center h-full">
        English
        <AiOutlineDown />
      </div>
      <div className="absolute min-w-full min-h-full bg-white z-10 text-black border-4 border-black rounded-sm border-t-0 hidden group-hover:block">
        <ul className="flex flex-col gap-2 items-center py-2">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
    </div>
  );
};

export default Language;
