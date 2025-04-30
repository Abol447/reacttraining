import { createSlice } from "@reduxjs/toolkit";
import { action } from "./CartInfo";

const initialState = [
  //   {
  //     pizzaId: 0,
  //     name: "",
  //     quantity: 0,
  //     unitPrice: 0,
  //     totalPrice: 0,
  //   },
];

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      return [...state, action.payload];
    },
    increase: (state, action) => {
      const item = state.find((i) => i.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decrease: (state, action) => {
      const item = state.find((i) => i.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    Delete: (state, action) => {
      return state.filter((item) => item.pizzaId !== action.payload);
    },
  },
});
export const { decrease, increase, AddItem } = CartSlice.actions;
export const reducer = CartSlice.reducer;

export const getCart = (state) => state.Cart;
export const getNumber = (state) => {
  const cart = state.Cart;
  return cart.reduce((sum, now) => {
    return sum + now.quantity;
  }, 0);
};

export const getPrice = (state) => {
  const cart = state.Cart;
  if (cart.length > 0)
    return cart.reduce((sum, now) => {
      return sum + now.totalPrice;
    }, 0);
  else return 0;
};
