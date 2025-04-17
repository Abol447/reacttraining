import { useReducer } from "react";
import { initionalState, reducer, Mycontext } from "./Cereatcontext";

export default function Context({ children }) {
  const [info, dispatch] = useReducer(reducer, initionalState);
  return (
    <Mycontext.Provider value={{ info, dispatch }}>
      {children}
    </Mycontext.Provider>
  );
}
