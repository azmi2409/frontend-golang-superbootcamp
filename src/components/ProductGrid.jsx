import React from "react";
const categories = ["tea", "coffee", "juice", "honey"];

const ProductCard = ({ name, price, pict }) => {
  return (
    <div className="flex flex-col justify-center items-center capitalize bg-gray-200 w-60">
      <img src={pict} alt={name} className="h-48 w-48" />
      <p className="text-xl font-bold">{name}</p>
      <p className="text-lg">{price}</p>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <>
      <div className="flex justify-between px-10">
        <h3 className="font-bold text-2xl">New Arrival</h3>
        <div className="flex gap-5">
          {categories.map((category) => (
            <p className="text-lg capitalize cursor-pointer">{category}</p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-y-10">
        {categories.map((category) => (
          <ProductCard
            key={category}
            name={category}
            price={`$${Math.floor(Math.random() * 100)}`}
            pict={`/src/assets/${category}.png`}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
