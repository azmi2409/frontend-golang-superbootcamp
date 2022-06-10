import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../hooks";

const CartLogo = ({ className }) => {
  const { cartSize } = useCart();
  return (
    <div className="relative">
      <AiOutlineShoppingCart className={className} />
      <div
        className={`absolute -top-2 -right-2 bg-gray-800 text-white flex justify-center items-center text-sm z-10 p-2 h-2 w-2 rounded-full ${
          cartSize > 0 ? "" : "hidden"
        }`}
      >
        {cartSize}
      </div>
    </div>
  );
};

export default CartLogo;
