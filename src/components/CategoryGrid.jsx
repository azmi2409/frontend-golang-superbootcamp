import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "tea",
    url: "/category/tea",
    pict: "/src/assets/tea.png",
    col: 2,
  },
  {
    name: "coffee",
    url: "/category/coffee",
    pict: "/src/assets/coffee.png",
    col: 2,
  },
  {
    name: "juice",
    url: "/category/juice",
    pict: "/src/assets/juice.png",
    col: 1,
  },
  {
    name: "honey",
    url: "/category/honey",
    pict: "/src/assets/Honey.png",
    col: 3,
  },
];

const CategoryCard = ({ col = 2, name = "tea", pict = "" }) => {
  return (
    <div
      className={`h-96 flex col-span-${col} w-full bg-gray-200 justify-center pt-10 relative box-border capitalize`}
    >
      <Link
        to={`/category/${name}`}
        className={`absolute inset-0 bg-origin-content bg-cover bg-no-repeat bg-[url('${pict}')] hover:outline-0`}
      />
      <div className="z-30 font-bold text-3xl">{name}</div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-10">
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
