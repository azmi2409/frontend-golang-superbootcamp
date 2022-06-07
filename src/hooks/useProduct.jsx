import React from "react";
import { getProduct } from "../utils/server";

const useProduct = (slug) => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getProduct(slug)
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [slug]);

  return [product, loading];
};

export default useProduct;
