import React from "react";
import { createPopper } from "@popperjs/core";
import DropDownMenu from "./Popup";
import { useAuth } from "../hooks";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserLogo = ({ className }) => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);
  const [cartDropdown, setCartDropdown] = React.useState(false);
  const menuDownRef = React.useRef();

  const openDropdownPopover = React.useCallback(() => {
    createPopper(menuDownRef.current, cartDropdown.current, {
      placement: "bottom-start",
    });
    setShowMenu(true);
  }, [cartDropdown, menuDownRef, setShowMenu]);

  const closeDropdownPopover = React.useCallback(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  const menus = React.useMemo(() => {
    if (isLoggedIn) {
      return [{ name: "Logout", link: "/logout" }];
    }
    return [
      { name: "Login", link: "/login" },
      { name: "Register", link: "/register" },
    ];
  }, [isLoggedIn]);

  return (
    <div
      className="relative"
      ref={menuDownRef}
      onClick={() =>
        showMenu ? closeDropdownPopover() : openDropdownPopover()
      }
    >
      <RiAccountCircleLine className={className} />
      <DropDownMenu
        className={
          "absolute px-2 py-4 bg-white w-24 right-0 -bottom-20 text-center text-sm drop-shadow list-none"
        }
        node={setCartDropdown}
        show={showMenu}
      >
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </DropDownMenu>
    </div>
  );
};

export default React.memo(UserLogo);
