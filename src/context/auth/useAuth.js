import authContext from "./authContext";
import { useContext } from "react";

const useAuth = () => useContext(authContext);

export default useAuth;
