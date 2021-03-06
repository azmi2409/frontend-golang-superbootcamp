import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { rightMenus, menus } from "../utils/menus";

const Header = () => {
  const [Y, setY] = React.useState(0);
  const headerRef = React.useRef(null);

  const handleScroll = React.useCallback(() => {
    const header = headerRef.current;
    if (Y > 50) {
      header.classList.add("sticky");
      if (Y > window.scrollY) {
        header.classList.remove("opacity-0");
      } else if (Y < window.scrollY) {
        header.classList.add("opacity-0");
      }
    } else {
      header.classList.remove("sticky");
    }
    setY(window.scrollY);
  }, [Y]);

  React.useEffect(() => {
    setY(window.scrollY);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      ref={headerRef}
      className="grid lg:px-10 px-5 w-full py-6 grid-cols-3 top-0 backdrop-blur-sm z-50 bg-white bg-opacity-80 transition-all duration-200 relative"
    >
      <section className="col-span-1 h-full hidden md:block">
        <ul className="flex h-full items-center md:gap-8 font-bold">
          {menus.map((category) => (
            <li
              className="hover:text-blue-500 transition-all duration-200 capitalize"
              key={category.id}
            >
              <Link to={category.path}>{category.title}</Link>
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
        <ul className="flex gap-2 text-md h-full items-center md:gap-6 md:text-xl justify-end mr-10">
          {rightMenus.map((menu) => (
            <li
              className="hover:text-black hover:font-bold transition-all duration-200"
              key={menu.id}
            >
              <div className="cursor-pointer ">
                {menu.logo && (
                  <menu.logo className="w-6 hover:scale-105 hover:text-blue-500 transition-all duration-200 h-6" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
