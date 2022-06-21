import React from "react";
import { useAuth } from "../hooks";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const UserLogo = ({ className }) => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);

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
    <Menu>
      <Menu.Button>
        <RiAccountCircleLine className={className + "relative"} />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={"text-sm text-left float left bg-white p-2 absolute"}
      >
        {menus.map((menu) => (
          <Menu.Item key={menu.name}>
            <li className="hover:text-blue-500">
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default React.memo(UserLogo);
