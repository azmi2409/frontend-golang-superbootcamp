import React from "react";
import { addCart, getCart, deleteCartItem } from "../utils/server";
import useAuth from "./useAuth";

const useCart = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [isEmpty, setIsEmpty] = React.useState(true);
  const { getToken } = useAuth();

  const cartList = React.useCallback(() => {
    const token = getToken;
    getCart(token)
      .then((res) => {
        if (res) {
          setCart(res);
          setTotal(res?.reduce((acc, cur) => acc + cur.price, 0));
          setIsEmpty(false);
        } else {
          setIsEmpty(true);
        }
      })
      .finally(() => setLoading(false));
  }, [getToken]);

  React.useEffect(() => {
    cartList();
  }, [cartList]);

  const addToCart = async ({ sku, quantity }) => {
    const token = getToken;
    const res = await addCart({ sku, quantity }, token);
    console.log(res);
  };

  const deleteFromCart = async (id) => {
    const token = getToken;
    const res = await deleteCart(id, token);
    console.log(res);
  };

  return { addToCart, cart, total, loading, deleteFromCart, isEmpty };
};

export default useCart;
