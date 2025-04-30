import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import CartInfo from "./featuer/cart/CartInfo";
import Layout from "./ui/layout";
import { action as postForm } from "./featuer/cart/CartInfo";
import Order, { loader as getorderloader } from "./featuer/menu/order";
import Menu, { loader as menuloader } from "./featuer/menu/menu";
import Cart from "./featuer/cart/Cart";
import { location } from "./data/data";

const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "OrderInfo",
        element: <CartInfo />,
        action: postForm,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuloader,
      },
      {
        path: "order/:id",
        element: <Order />,
        loader: getorderloader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
