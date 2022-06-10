import React from "react";
import { addCart, getCart, deleteCartItem } from "../utils/server";
import useAuth from "./useAuth";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [refetch, setRefetch] = React.useState(false);
  const { getToken } = useAuth();

  const cartList = React.useCallback(() => {
    const token = getToken;
    setLoading(true);
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
      .finally(() => {
        setLoading(false);
        setRefetch(false);
      });
  }, [getToken]);

  React.useEffect(() => {
    cartList();
  }, [cartList, refetch]);

  const addToCart = async ({ sku, quantity }) => {
    const token = getToken;
    const res = await addCart({ sku, quantity }, token);
    if (res) {
      setRefetch(true);
    }
  };

  const deleteFromCart = async (id) => {
    const token = getToken;
    const res = await deleteCartItem(id, token);
    if (res) {
      setRefetch(true);
    }
  };

  const countTotalPrice = React.useMemo(() => {
    return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }, [cart]);

  const cartSize = React.useMemo(() => {
    return cart.length;
  }, [cart]);

  return {
    addToCart,
    cart,
    total,
    loading,
    deleteFromCart,
    isEmpty,
    countTotalPrice,
    cartSize,
  };
};

export default useCart;
