import React from "react";

export const Container = ({ children }) => {
  return (
    <header className="w-full h-11 text-white bg-black grid grid-cols-2 place-items-center">
      {children}
    </header>
  );
};

export const Grid = ({ children, gap }) => {
  const gapClass = `gap-${gap}`;
  return (
    <div className={`flex h-full items-center ${gapClass}`}>{children}</div>
  );
};
