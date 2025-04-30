import { reducer as Home } from "./ui/HomeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as Cart } from "./featuer/cart/CartSlice";

const store = configureStore({
  reducer: {
    HomeSlice: Home,
    Cart: Cart,
  },
});
export default store;
