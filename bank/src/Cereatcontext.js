import { createContext } from "react";
export const reducer = function (state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "id":
      return { ...state, id: action.payload };
    case "deposit":
      return { ...state, deposit: action.payload };
    case "whitdraw":
      return { ...state, whitdraw: action.payload };
    case "loanamount":
      return { ...state, loanamount: action.payload };
    case "loanpurpes":
      return { ...state, loanpurpes: action.payload };
    case "currency":
      return { ...state, currency: action.payload };
  }
};
export const initionalState = {
  currency: "us doller",
  name: "",
  id: "",
  deposit: "",
  whitdraw: "",
  loanamount: "",
  loanpurpes: "",
};
export const Mycontext = createContext();
