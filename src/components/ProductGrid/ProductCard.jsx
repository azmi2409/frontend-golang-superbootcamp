import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import React from "react";

export const ProductCard = ({ name, price, pict, description }) => {
  return (
    <div className="p-5">
      <div
        style={{ backgroundImage: `url(${pict})` }}
        className={`flex flex-col justify-center items-center capitalize w-60 relative bg-cover bg-no-repeat bg-origin-content bg-center h-72 group`}
      >
        <Link to={`/product/${name}`} className="absolute inset-0 z-10" />
        <div
          onClick={(e) => e.stopPropagation()}
          className="z-30 absolute inset-0 top-40 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-200 flex justify-center items-center flex-col text-center gap-5"
        >
          <p className="text-white">{description}</p>
          <button
            onClick={(e) => e.stopPropagation()}
            className="py-2 px-5 rounded-lg bg-blue-500 text-white flex items-center gap-1 text-sm"
          >
            <MdAddShoppingCart />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
      <div className="mt-2 px-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg">{price}</p>
      </div>
    </div>
  );
};

export const SkeletonCard = ({ count = 3 }) => {
  const items = new Array(count).fill(0);

  const Skeleton = () => (
    <div className="p-5 animate-pulse">
      <div className="w-60 h-72 bg-gray-300 rounded-lg"></div>
      <div className="mt-2 flex gap-2 flex-col">
        <div className="w-1/2 bg-gray-300 rounded-lg h-8"></div>
        <div className="w-1/2 bg-gray-300 rounded-lg h-6"></div>
      </div>
    </div>
  );

  return (
    <>
      {items.map((_, index) => (
        <Skeleton key={index} />
      ))}
    </>
  );
};

export default React.memo(ProductCard);
