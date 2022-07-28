import { createContext } from "react";

export const LoginedUserContext = createContext({
  token: null,
  accountname: null,
  image: null,
});
