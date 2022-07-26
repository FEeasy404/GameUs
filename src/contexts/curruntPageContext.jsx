import { createContext } from "react";

export const curruntPageContext = createContext({
  location: "home",
  setLocation: () => {}
});