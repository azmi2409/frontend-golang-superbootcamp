import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart, useAuth } from "../hooks";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Cart", link: "/cart" },
  { name: "Checkout", link: "/checkout" },
];

const CartLogo = ({ className }) => {
  const { cartSize } = useCart();
  const [showMenu, setShowMenu] = React.useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <Menu>
      <Menu.Button>
        <AiOutlineShoppingCart className={className + "relative"} />
        {isLoggedIn && (
          <div
            className={`absolute -top-2 -right-2 bg-gray-800 text-white flex justify-center items-center text-sm z-10 p-2 h-2 w-2 select-none rounded-full ${
              cartSize > 0 ? "" : "hidden"
            }`}
          >
            {cartSize}
          </div>
        )}
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={"text-sm text-left float left bg-white p-2 absolute"}
      >
        {menus.map((menu) => (
          <Menu.Item as="li" key={menu.name} className="hover:text-blue-500">
            <Link to={menu.link}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default React.memo(CartLogo);
