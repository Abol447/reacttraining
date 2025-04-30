import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./Store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
