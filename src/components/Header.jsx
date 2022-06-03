import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const categories = [
  {
    id: 1,
    name: "All",
    path: "/",
  },
  {
    id: 2,
    name: "Tea",
    path: "/tea",
  },
  {
    id: 3,
    name: "Coffee",
    path: "/coffee",
  },
  {
    id: 4,
    name: "Honey",
    path: "/honey",
  },
];

const menus = [
  {
    id: 1,
    name: "Account",
    path: "/account",
    logo: RiAccountCircleLine,
  },
  {
    id: 2,
    name: "Cart",
    path: "/cart",
    logo: AiOutlineShoppingCart,
  },
];

const Header = () => {
  const [Y, setY] = React.useState(0);
  const headerRef = React.useRef(null);

  const handleScroll = () => {
    setY(window.scrollY);
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const header = headerRef.current;
    if (Y > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }, [Y]);

  return (
    <header
      ref={headerRef}
      className="grid lg:px-10 px-5 w-full py-6 grid-cols-3 top-0 backdrop-blur-sm z-50 bg-white bg-opacity-80"
    >
      <section className="col-span-1 h-full hidden md:block">
        <ul className="flex gap-2 text-sm h-full items-center md:gap-8 md:text-md">
          {categories.map((category) => (
            <li
              className="hover:text-black hover:font-bold transition-all duration-200"
              key={category.id}
            >
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="col-span-3 md:col-span-1 flex justify-center items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-24 hover:scale-110 transition-all duration-200"
          />
        </Link>
      </section>
      <section className="col-span-1 hidden md:block">
        <ul className="flex gap-2 text-md h-full items-center md:gap-6 md:text-xl justify-end">
          {menus.map((menu) => (
            <li
              className="hover:text-black hover:font-bold transition-all duration-200"
              key={menu.id}
            >
              <Link to={menu.path}>
                {menu.logo && (
                  <menu.logo className="w-4 h-4 hover:scale-105 transition-all duration-200" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
