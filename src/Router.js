import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import Registration from "./Auth/Registration";
import Home from "./Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
