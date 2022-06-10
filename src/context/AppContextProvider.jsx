import CombineContext from "../utils/CombineContext";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";
import { CategoryProvider } from "./CategoryContext";

const providers = [
  AuthProvider,
  CartProvider,
  ProductProvider,
  CategoryProvider,
];

export const AppContextProvider = CombineContext(...providers);
