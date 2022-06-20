import React from "react";
import { addCart, getCart, deleteCartItem } from "../utils/server";
import useAuth from "./useAuth";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const useCart = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const [loading, setLoading] = React.useState(true);
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [refetch, setRefetch] = React.useState(false);
  const { getToken, isLoggedIn } = useAuth();

  const cartList = React.useCallback(() => {
    const token = getToken;
    setLoading(true);
    getCart(token)
      .then((res) => {
        if (res) {
          setCart(res);
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

  const addToCart = ({ sku, quantity }) => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to add to cart");
      return;
    }
    const token = getToken;
    toast
      .promise(addCart({ sku, quantity }, token), {
        loading: "Adding to cart...",
        success: "Added to cart!",
        error: "Failed to add to cart!",
      })
      .finally(() => {
        setRefetch(true);
      });
  };

  const deleteFromCart = (id) => {
    const token = getToken;
    const res = deleteCartItem(id, token);
    toast
      .promise(res, {
        loading: "Deleting...",
        success: "Deleted!",
        error: "Failed to delete!",
      })
      .then(() => {
        setCart((prev) => prev.filter((item) => item.id !== id));
      });
  };

  const cartItem = React.useMemo(() => {
    return cart.map((item) => ({
      ...item,
      total: item.price * item.quantity,
    }));
  }, [cart]);

  const countTotalPrice = React.useMemo(() => {
    return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }, [cart]);

  const cartSize = React.useMemo(() => {
    return cart.length;
  }, [cart]);

  return {
    addToCart,
    cartItem,
    loading,
    deleteFromCart,
    isEmpty,
    countTotalPrice,
    cartSize,
  };
};

export default useCart;
