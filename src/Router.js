import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import Registration from "./Auth/Registration";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
