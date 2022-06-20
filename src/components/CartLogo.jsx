import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart, useAuth } from "../hooks";
import { createPopper } from "@popperjs/core";
import DropDownMenu from "./Popup";

const CartLogo = ({ className }) => {
  const { cartSize } = useCart();
  const [showMenu, setShowMenu] = React.useState(false);
  const [popDropdown, setPopDropdown] = React.useState(false);
  const logoDropDownRef = React.useRef();
  const { isLoggedIn } = useAuth();

  const openDropdownPopover = () => {
    createPopper(logoDropDownRef.current, popDropdown.current, {
      placement: "bottom-start",
    });
    setShowMenu(true);
  };
  const closeDropdownPopover = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <div
        ref={logoDropDownRef}
        onClick={() =>
          showMenu ? closeDropdownPopover() : openDropdownPopover()
        }
      >
        <AiOutlineShoppingCart className={className} />
        {isLoggedIn && (
          <div
            className={`absolute -top-2 -right-2 bg-gray-800 text-white flex justify-center items-center text-sm z-10 p-2 h-2 w-2 select-none rounded-full ${
              cartSize > 0 ? "" : "hidden"
            }`}
          >
            {cartSize}
          </div>
        )}
      </div>
      <DropDownMenu
        className={
          "absolute px-2 py-4 bg-white w-24 right-0 -bottom-20 text-center text-sm drop-shadow list-none"
        }
        node={setPopDropdown}
        show={showMenu}
      >
        <ul>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/checkout">Checkout</a>
          </li>
        </ul>
      </DropDownMenu>
    </div>
  );
};

export default React.memo(CartLogo);
