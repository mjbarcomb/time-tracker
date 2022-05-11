import { createContext } from "react";
import data from "./data.json";
import { user } from "./user.js";

const Context = createContext({ data });
const UserContext = createContext({ user });

export { Context, UserContext };
