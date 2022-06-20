import React from "react";

const DropDownMenu = ({ node, className, show, children }) => (
  <div ref={node} className={`${className} ${show ? "block" : "hidden"}`}>
    {children}
  </div>
);

export default React.memo(DropDownMenu);
