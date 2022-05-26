import React from "react";
import { FiMail } from "react-icons/fi";

const Email = () => {
  return (
    <div className="flex gap-1 items-center">
      <FiMail className="h-5 w-5" />
      admin@beeleaf.id
    </div>
  );
};

export default Email;
