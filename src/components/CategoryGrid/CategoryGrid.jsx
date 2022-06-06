import React from "react";
import CategoryCard from "./CategoryCard";
import { useCategories } from "../../hooks";

const CategoryGrid = () => {
  const { categories, loading, categoryList } = useCategories();
  return (
    <div className="grid grid-cols-4 gap-4 px-10">
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
