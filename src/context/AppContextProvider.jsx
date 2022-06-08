import CombineContext from "../utils/CombineContext";
import { AuthProvider } from "./AuthContext";

export const AppContextProvider = CombineContext([AuthProvider]);
