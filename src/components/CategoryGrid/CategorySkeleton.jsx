import React from "react";

const Skeleton = () => (
  <div
    className={`h-96 col-span-2 w-full bg-gray-300 animate-pulse pt-10 box-border`}
  />
);

const CategorySkeleton = ({ count = 4 }) => {
  const array = new Array(count).fill(0);
  return (
    <>
      {array.map((_, index) => (
        <Skeleton key={index} />
      ))}
    </>
  );
};

export default CategorySkeleton;
