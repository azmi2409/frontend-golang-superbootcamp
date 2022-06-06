import React from "react";
import { getProducts } from "../utils/server";

const useProducts = () => {
  const [products, setProducts] = React.useState({
    products: [],
    origin: [],
  });
  const [loading, setLoading] = React.useState(true);

  const productList = React.useCallback(async () => {
    const data = await getProducts();
    setProducts({
      products: data,
      origin: data,
    });
    setLoading(false);
  }, []);

  const filterProducts = React.useCallback(
    (category) => {
      if (category === "all") {
        setProducts((state) => ({
          ...state,
          products: state.origin,
        }));
      } else {
        const filtered = products.origin.filter(
          (product) => product.category === category
        );
        setProducts((state) => ({
          ...state,
          products: filtered,
        }));
      }
    },
    [products.products]
  );

  const product = React.useMemo(() => {
    return {
      products: products.products,
      loading,
      productList,
      filterProducts,
    };
  }, [products.products, loading, productList, filterProducts]);

  React.useEffect(() => {
    productList();
  }, [productList]);

  return product;
};

export default useProducts;
