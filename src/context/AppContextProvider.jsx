import CombineContext from "../utils/CombineContext";
import { AuthProvider } from "./AuthContext";

const providers = [AuthProvider];

export const AppContextProvider = CombineContext(...providers);
