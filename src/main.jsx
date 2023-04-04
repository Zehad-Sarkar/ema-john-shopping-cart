import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventroy/Inventory";
import Login from "./components/Login/Login";
import Review from "./components/Review/Review";
import cartProductsLoader from "./components/CartProductsLoader/CartProductsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "review",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
        // loader: () => fetch("products.json"),
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      // {
      //   path: "review",
      //   element: <Review></Review>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
