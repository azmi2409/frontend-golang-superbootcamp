import CartLogo from "../components/CartLogo";
import UserLogo from "../components/UserLogo";
export const menus = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Category",
    path: "/category",
  },
  {
    id: 4,
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
  },
];

export const rightMenus = [
  {
    id: 1,
    name: "Account",
    path: "/login",
    logo: UserLogo,
  },
  {
    id: 2,
    name: "Cart",
    path: "/cart",
    logo: CartLogo,
  },
];
