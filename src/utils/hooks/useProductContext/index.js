import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const store = createContext(initialState);

const { Provider } = store;

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export const useProductContext = () => useContext(store);
