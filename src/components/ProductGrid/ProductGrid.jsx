import React from "react";
import { useProducts } from "../../hooks";
import ProductCard, { SkeletonCard } from "./ProductCard";
import { formatCurrencyToIDR, getURL } from "../../utils/helper";

const ProductGrid = () => {
  const { products, loading, filterProducts } = useProducts();

  const categories = React.useMemo(() => {
    const categoryList = products.map((product) => product.category);
    const uniqueCategory = ["all", ...new Set(categoryList)];
    return uniqueCategory;
  }, [loading]);

  return (
    <>
      <div className="flex justify-between px-10">
        <h3 className="font-bold text-2xl">New Arrival</h3>
        <div className="flex gap-5">
          {categories?.map((category) => (
            <div
              onClick={() => filterProducts(category)}
              key={category}
              className="text-lg capitalize cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 lg:gap-x-20 mx-auto">
        {loading ? (
          <SkeletonCard count={6} />
        ) : (
          products?.map((v) => (
            <ProductCard
              key={v.sku}
              description={v.description}
              name={v.name}
              price={formatCurrencyToIDR(v.price)}
              pict={getURL(v.image_url[0])}
              slug={v.slug}
              sku={v.sku}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProductGrid;
